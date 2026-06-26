import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simulated data fetching (since we can read mockData.ts with regex or just compile it first)
// However, it's easier to just read the sitemap.xml to get the URLs!
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const sitemapPath = path.join(distDir, 'sitemap.xml');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(sitemapPath) || !fs.existsSync(templatePath)) {
  console.error("Build files missing.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Extract all <loc> tags from sitemap
const urls = [];
const regex = /<loc>(.*?)<\/loc>/g;
let match;
while ((match = regex.exec(sitemap)) !== null) {
  urls.push(match[1]);
}

// Very basic scraper of mockData to get title/desc
const mockDataPath = path.join(rootDir, 'src', 'data', 'mockData.ts');
const mockDataContent = fs.readFileSync(mockDataPath, 'utf-8');

function extractInfoFromMockData(slug) {
  let searchTitle = '';
  let searchDesc = '';
  let searchH1 = '';

  // Look for our reviews
  const reviewSlugIndex = mockDataContent.indexOf('slug: "' + slug + '"');
  if (reviewSlugIndex !== -1) {
    const block = mockDataContent.substring(Math.max(0, reviewSlugIndex - 800), reviewSlugIndex + 800);
    const titleMatch = block.match(/seoTitle:\s*"([^"]+)"/);
    const h1Match = block.match(/title:\s*"([^"]+)"/);
    const descMatch = block.match(/seoDescription:\s*"([^"]+)"/);
    
    if (titleMatch) searchTitle = titleMatch[1];
    if (descMatch) searchDesc = descMatch[1];
    if (h1Match) searchH1 = h1Match[1];
  } else {
    // maybe it's a category
    const catSlugIndex = mockDataContent.indexOf('slug: "' + slug + '"');
    if (catSlugIndex !== -1) {
      const block = mockDataContent.substring(catSlugIndex - 50, catSlugIndex + 200);
      const nameMatch = block.match(/name:\s*"([^"]+)"/);
      const descMatch = block.match(/description:\s*"([^"]+)"/);
      if (nameMatch) {
         searchTitle = nameMatch[1] + ' Reviews & Buying Guides';
         searchH1 = nameMatch[1] + ' Reviews';
      }
      if (descMatch) searchDesc = descMatch[1];
    }
  }

  // Hardcoded for basic pages
  if (slug === 'about') { searchTitle = "About Us"; searchDesc = "Learn about Picknixy."; searchH1 = "About Us"; }
  else if (slug === 'contact') { searchTitle = "Contact Us"; searchDesc = "Get in touch with us."; searchH1 = "Contact Us"; }
  else if (slug === 'blog') { searchTitle = "Blog & Buying Guides"; searchDesc = "Read our latest articles."; searchH1 = "Blog"; }
  else if (slug === 'reviews') { searchTitle = "All Product Reviews"; searchDesc = "Browse our complete collection of expert product reviews."; searchH1 = "All Reviews"; }

  return { title: searchTitle, desc: searchDesc, h1: searchH1 };
}

urls.forEach(urlObj => {
  console.log("Processing url:", urlObj);
  const urlPath = new URL(urlObj).pathname; // e.g. /money-tree-oracle-review
  
  let slug = '';
  if (urlPath !== '/' && urlPath !== '/index.html') {
    const segments = urlPath.split('/').filter(Boolean);
    slug = segments[segments.length - 1];
  }

  console.log("Slug:", slug || 'home');
  let searchTitle = '';
  let searchDesc = '';
  let searchH1 = '';

  if (slug) {
    const info = extractInfoFromMockData(slug);
    searchTitle = info.title;
    searchDesc = info.desc;
    searchH1 = info.h1;
  } else {
    // Home page
    searchTitle = "Expert Reviews & Buying Guides";
    searchDesc = "Discover unbiased, expert reviews and comprehensive buying guides on supplements, fitness, wellness, and self-help programs at Picknixy.";
    // h1 is probably in the root already
  }
  
  if (!searchTitle) {
    console.log("Missing title for:", slug);
    return;
  }
  console.log("Found metadata:", { title: searchTitle, desc: searchDesc, h1: searchH1 });

  let pageHtml = template;

  // Replace Title
  pageHtml = pageHtml.replace(
    /<title id="prerender-title">.*?<\/title>/,
    '<title id="prerender-title">' + (slug ? searchTitle + ' | Picknixy' : 'Picknixy - ' + searchTitle) + '</title>'
  );

  // Replace Description
  pageHtml = pageHtml.replace(
    /<meta id="prerender-desc" name="description" content=".*?"\s*\/>/,
    '<meta id="prerender-desc" name="description" content="' + searchDesc + '" />\n    <link id="prerender-can" rel="canonical" href="' + urlObj + '" />'
  );

  // Inject H1 into <div id="root">
  if (searchH1) {
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      '<div id="root"><div style="display:none;"><h1>' + searchH1 + '</h1></div></div>'
    );
  }

  let outDir = distDir;
  if (slug) {
    const segments = urlPath.split('/').filter(Boolean);
    outDir = path.join(distDir, ...segments);
    fs.mkdirSync(outDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outDir, 'index.html'), pageHtml);
});

console.log("Prerendering complete!");
