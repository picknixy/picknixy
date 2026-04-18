const fs = require('fs');

const path = 'src/data/mockData.ts';
let data = fs.readFileSync(path, 'utf8');

// Replace standard image refs
data = data.replace(/"image": "https:\/\/www\.picknixy\.com\/images\/([^"]+)"/g, '"image": "/images/$1"');
data = data.replace(/"image": "https:\/\/www\.picknixy\.com\/([^"]+)"/g, '"image": "/images/$1"');

fs.writeFileSync(path, data);
console.log('Fixed schema image URLs in mockData.ts');
