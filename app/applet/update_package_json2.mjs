import fs from 'fs';

let content = fs.readFileSync('package.json', 'utf8');

// I already added the node scripts/generate-sitemap.mjs before. Let's fix it to tsx scripts/generate-sitemap.ts
content = content.replace(/"prebuild": "node scripts\/generate-sitemap.mjs"/g, '"prebuild": "tsx scripts/generate-sitemap.ts"');
content = content.replace(/"sitemap": "node scripts\/generate-sitemap.mjs"/g, '"sitemap": "tsx scripts/generate-sitemap.ts"');

fs.writeFileSync('package.json', content);
console.log("Updated package.json successfully.");
