import fs from 'fs';

let content = fs.readFileSync('package.json', 'utf8');
content = content.replace(
  '"dev": "vite --port=3000 --host=0.0.0.0",',
  '"dev": "vite --port=3000 --host=0.0.0.0",\n    "prebuild": "node scripts/generate-sitemap.mjs",'
);
content = content.replace(
  '"lint": "tsc --noEmit"',
  '"lint": "tsc --noEmit",\n    "sitemap": "node scripts/generate-sitemap.mjs"'
);

fs.writeFileSync('package.json', content);
console.log("Updated package.json scripts successfully.");
