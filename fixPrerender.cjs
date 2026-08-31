const fs = require('fs');
const path = require('path');
const file = 'scripts/prerender.js';
let content = fs.readFileSync(file, 'utf8');

// Replace the mockData reading logic
content = content.replace(
  /const mockDataPath = [^]+?return { title: searchTitle, desc: searchDesc, h1: searchH1 };\n}/m,
  `
function extractInfoFromMockData(slug) {
  let searchTitle = '';
  let searchDesc = '';
  let searchH1 = '';
  
  const postsDir = path.join(rootDir, 'src', 'data', 'posts');
  const catPath = path.join(rootDir, 'src', 'data', 'categories.ts');
  
  const postFile = path.join(postsDir, slug + '.ts');
  if (fs.existsSync(postFile)) {
    const pContent = fs.readFileSync(postFile, 'utf8');
    const titleMatch = pContent.match(/seoTitle:\\s*"([^"]+)"/);
    const h1Match = pContent.match(/title:\\s*"([^"]+)"/);
    const descMatch = pContent.match(/seoDescription:\\s*"([^"]+)"/);
    
    if (titleMatch) searchTitle = titleMatch[1];
    if (descMatch) searchDesc = descMatch[1];
    if (h1Match) searchH1 = h1Match[1];
  } else if (fs.existsSync(catPath)) {
    const catContent = fs.readFileSync(catPath, 'utf8');
    const catSlugIndex = catContent.indexOf('slug: "' + slug + '"');
    if (catSlugIndex !== -1) {
      const block = catContent.substring(catSlugIndex - 50, catSlugIndex + 200);
      const nameMatch = block.match(/name:\\s*"([^"]+)"/);
      const descMatch = block.match(/description:\\s*"([^"]+)"/);
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
`
);

fs.writeFileSync(file, content);
