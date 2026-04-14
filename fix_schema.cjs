const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Replace relative images in schema markup with absolute URLs
content = content.replace(/"image": "\/vitamotion-review\.webp"/g, '"image": "https://www.picknixy.com/vitamotion-review.webp"');
content = content.replace(/"image": "\/quantum-wave-logo\.webp"/g, '"image": "https://www.picknixy.com/quantum-wave-logo.webp"');
content = content.replace(/"image": "\/prostadine\.webp"/g, '"image": "https://www.picknixy.com/prostadine.webp"');
content = content.replace(/"image": "\/water-smart-box\.webp"/g, '"image": "https://www.picknixy.com/water-smart-box.webp"');
content = content.replace(/"image": "\/red-boost\.webp"/g, '"image": "https://www.picknixy.com/red-boost.webp"');

fs.writeFileSync('src/data/mockData.ts', content);
console.log('Fixed schema markup');
