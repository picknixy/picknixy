import fs from 'fs';

let content = fs.readFileSync('package.json', 'utf8');

content = content.replace(/"prebuild": "node generate-sitemap.mjs"/g, '"prebuild": "node ./generate-sitemap.mjs"');
content = content.replace(/"sitemap": "node generate-sitemap.mjs"/g, '"sitemap": "node ./generate-sitemap.mjs"');

fs.writeFileSync('package.json', content);
console.log("Updated package.json again.");
