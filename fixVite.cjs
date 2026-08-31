const fs = require('fs');
const path = require('path');
const file = 'vite.config.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /const srcPath = [^]+?console\.log\('Sitemap built dynamically with ' \+ reviews\.length \+ ' reviews\.'\);/m,
  `
  const postsDir = path.resolve(__dirname, 'src/data/posts');
  const reviews = [];
  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
    files.forEach(f => {
      const pContent = fs.readFileSync(path.join(postsDir, f), 'utf8');
      const slugMatch = pContent.match(/slug:\\s*"([^"]+)"/);
      if (slugMatch && slugMatch[1] && !reviews.includes(slugMatch[1])) {
        reviews.push(slugMatch[1]);
      }
    });
  }
  
  const categories = [
      "health-fitness", "diets-weight-loss", "dental-health", "exercise-fitness",
      "mens-health", "remedies", "womens-health", "beauty", "mental-health",
      "self-help", "survival", "motivational-transformational", "spiritual",
      "astrology", "psychics", "tarot", "relationships-dating", "mens-dating",
      "womens-dating", "finance-business", "online-business"
  ];
  const BASE_URL = 'https://www.picknixy.com';
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n';
  
  const staticPages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
      { url: '/blog', priority: '0.9', changefreq: 'weekly' },
      { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
      { url: '/terms', priority: '0.5', changefreq: 'yearly' },
      { url: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
      { url: '/search', priority: '0.7', changefreq: 'weekly' },
  ];
  
  staticPages.forEach(page => {
      xml += '  <url>\\n    <loc>' + BASE_URL + page.url + '</loc>\\n    <changefreq>' + page.changefreq + '</changefreq>\\n    <priority>' + page.priority + '</priority>\\n  </url>\\n';
  });
  categories.forEach(slug => {
      xml += '  <url>\\n    <loc>' + BASE_URL + '/category/' + slug + '</loc>\\n    <changefreq>weekly</changefreq>\\n    <priority>0.8</priority>\\n  </url>\\n';
  });
  const today = new Date().toISOString().split('T')[0];
  reviews.forEach(slug => {
      xml += '  <url>\\n    <loc>' + BASE_URL + '/' + slug + '</loc>\\n    <lastmod>' + today + '</lastmod>\\n    <changefreq>weekly</changefreq>\\n    <priority>0.9</priority>\\n  </url>\\n';
  });
  xml += '</urlset>';
  fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), xml);
  console.log('Sitemap built dynamically with ' + reviews.length + ' reviews.');
  `
);
fs.writeFileSync(file, content);
