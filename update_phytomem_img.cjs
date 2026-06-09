const fs = require('fs');
const file = 'src/data/mockData.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/https:\/\/getphytomemone.com\/includes\/img\/banner-img.png\?hopId=8f968f6a-481b-409a-b94f-8d8156e6fc2a/g, '/Phytomem-One-review.png');

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced banner-img.png with /Phytomem-One-review.png');
