const fs = require('fs');
const buffer = fs.readFileSync('src/data/mockData.ts');
let invalidCount = 0;
let firstInvalidIndex = -1;

// very naive check for bytes that are not valid in UTF-8
// better to use Buffer.toString and check for replacement character
const str = buffer.toString('utf8');
const replacementCount = (str.match(/\uFFFD/g) || []).length;
console.log('Number of U+FFFD characters when parsed as UTF-8:', replacementCount);
if (replacementCount > 0) {
  const idx = str.indexOf('\uFFFD');
  console.log('First invalid char around index:', idx);
  console.log('Context:', str.slice(Math.max(0, idx - 50), idx + 50));
}
