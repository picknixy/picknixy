const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

content = content.replace(/"author": "Picknixy",/g, '"author": "picknixy",');

fs.writeFileSync('src/data/mockData.ts', content);
console.log("Fixed author casing");
