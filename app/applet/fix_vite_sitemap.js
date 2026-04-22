import fs from 'fs';

let config = fs.readFileSync('vite.config.ts', 'utf8');

// Fix the regex to match either quoted or unquoted 'slug'
config = config.replace(/"slug":\\\\s\*"([^"]+)"/g, '\\\\bslug\\\\b\\\\s*:\\\\s*"([^"]+)"');

fs.writeFileSync('vite.config.ts', config);
console.log("Updated vite config sitemap regex.");
