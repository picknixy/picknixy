import fs from 'fs';

let config = fs.readFileSync('vite.config.ts', 'utf8');
config = config.replace(/const slugRegex = \/"slug":\\s\*"([^"]\+)"\/g;/, 'const slugRegex = /\\\\bslug\\\\s*:\\\\s*"([^"]+)"/g;');
fs.writeFileSync('vite.config.ts', config);
console.log("Fixed regex via script.");
