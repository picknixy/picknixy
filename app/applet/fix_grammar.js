const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

content = content.replace(/the The Brain Song/g, "The Brain Song");
content = content.replace(/the <strong>The Brain Song/g, "<strong>The Brain Song");

fs.writeFileSync('src/data/mockData.ts', content);
console.log("Fixed grammatical doubles");
