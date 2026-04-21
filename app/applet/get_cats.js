const fs = require('fs');

const content = fs.readFileSync('src/data/mockData.ts', 'utf8');
const cats = [...content.matchAll(/"categoryId":\s*"([^"]+)"/g)].map(m => m[1]);
console.log([...new Set(cats)]);
