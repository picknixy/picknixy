import fs from 'fs';

let content = fs.readFileSync('package.json', 'utf8');
content = content.replace(/,\n\s*}/g, '\n  }');

fs.writeFileSync('package.json', content);
console.log("Fixed trailing commas in package.json.");
