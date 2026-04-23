const fs = require('fs');
const data = fs.readFileSync('src/data/mockData.ts', 'utf8');

console.log("Has title:", data.includes('<title>'));
console.log("Has meta description:", data.includes('<meta name="description"'));
console.log("Has H1:", data.toLowerCase().includes('<h1'));
