import fs from 'fs';

let content = fs.readFileSync('package.json', 'utf8');

content = content.replace(/"prebuild": "tsx scripts\/generate-sitemap.ts"/g, '"prebuild": "tsx scripts/generate-sitemap.mjs"');
content = content.replace(/"sitemap": "tsx scripts\/generate-sitemap.ts"/g, '"sitemap": "tsx scripts/generate-sitemap.mjs"');

fs.writeFileSync('package.json', content);
console.log("Updated package.json again successfully.");
