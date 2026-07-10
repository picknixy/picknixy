const fs = require('fs');
let data = fs.readFileSync('public/sitemap.xml', 'utf8');

const newUrl = `  <url>
    <loc>https://www.picknixy.com/soulmate-story-review</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;

// Insert right before </urlset>
const insertPos = data.lastIndexOf('</urlset>');
if (insertPos !== -1) {
  data = data.slice(0, insertPos) + newUrl + data.slice(insertPos);
  fs.writeFileSync('public/sitemap.xml', data, 'utf8');
  console.log("Sitemap updated.");
}
