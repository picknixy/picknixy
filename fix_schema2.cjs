const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Replace relative images in schema markup with absolute URLs
content = content.replace(/"image": "\/water-smart-box\.webp"/g, '"image": "https://www.picknixy.com/water-smart-box.webp"');

fs.writeFileSync('src/data/mockData.ts', content);
console.log('Fixed schema markup 2');
