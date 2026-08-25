const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, 'src/data/mockData.ts');
let content = fs.readFileSync(file, 'utf8');

// Pineal 10X replacements
content = content.replace(
  /\/pineal-10x-supplement-review-third-eye-decalcification\.png/g,
  "/pineal-10x-supplement-bottle-hero.png"
);

// 4 Foot Farm replacements
content = content.replace(
  /\/4-foot-farm-review\.png/g,
  "/4-foot-farm-review-crisis-garden.webp"
);

fs.writeFileSync(file, content);
console.log("Images updated successfully");
