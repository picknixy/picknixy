import fs from 'fs';

let content = fs.readFileSync('package.json', 'utf8');

content = content.replace(/"prebuild": "node \.\/generate-sitemap.mjs",\n\s*/g, '');
content = content.replace(/"sitemap": "node \.\/generate-sitemap.mjs"\n\s*/g, '');

fs.writeFileSync('package.json', content);
console.log("Removed prebuild commands from package.json.");
