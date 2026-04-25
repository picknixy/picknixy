const fs = require('fs');
let db = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Find the index of "export const reviews: any[] = ["
const targetStr = 'export const reviews: any[] = [';
const pos = db.indexOf(targetStr);

// Look at the next few characters
const snippet = db.substring(pos, pos + targetStr.length + 5);
console.log("Found snippet:", JSON.stringify(snippet));

// Let's just do a string replace for the literal "\\n" right there
db = db.replace('export const reviews: any[] = [\\n', 'export const reviews: any[] = [\n');

fs.writeFileSync('src/data/mockData.ts', db);
console.log("Fixed syntax error");
