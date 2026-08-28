const fs = require('fs');
const path = require('path');
const p = path.resolve(__dirname, 'package.json');
const pkg = JSON.parse(fs.readFileSync(p, 'utf8'));

pkg.scripts.build = "vite build && node scripts/prerender.js";

fs.writeFileSync(p, JSON.stringify(pkg, null, 2));
console.log("Reverted package.json build script");
