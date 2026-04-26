const fs = require('fs');
let db = fs.readFileSync('src/data/mockData.ts', 'utf8');

const slugRegex = /"slug":\s*"([^"]+)"/g;
let match;
const slugs = [];
while ((match = slugRegex.exec(db)) !== null) {
  slugs.push(match[1]);
}

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const slug of slugs) {
  sitemap += '  <url>\n    <loc>https://www.picknixy.com/review/' + slug + '</loc>\n  </url>\n';
}
sitemap += '</urlset>';

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated with ' + slugs.length + ' urls.');
