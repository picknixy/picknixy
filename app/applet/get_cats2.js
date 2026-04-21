const fs = require('fs');
const content = fs.readFileSync('src/data/mockData.ts', 'utf8');
const catMatch = [...content.matchAll(/"category":\s*"([^"]+)"/g)].map(m => m[1]);
console.log("Keys: ", [...new Set(catMatch)]);
