const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const replacement = `"seoDescription": "Read our review of The Chronic Kidney Disease Solution. Discover if this natural approach to kidney health is right for you.",`;

const searchString = `"seoDescription": "Read our comprehensive review of The Chronic Kidney Disease Solution by Shelly Manning. Discover if this natural approach to kidney health, diet, and lifestyle is right for you.",`;

content = content.replace(searchString, replacement);
fs.writeFileSync('src/data/mockData.ts', content);
console.log('Fixed SEO Description');
