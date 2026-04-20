const fs = require('fs');

const contents = fs.readFileSync('src/data/mockData.ts', 'utf8');

const regex = /seoDescription:\s*"([^"]+)"/g;
let match;
const issues = [];
while ((match = regex.exec(contents)) !== null) {
  const desc = match[1];
  if (desc.length > 160) {
     console.log(`TOO LONG (${desc.length}): ${desc}`);
  } else if (desc.length < 25) {
     console.log(`TOO SHORT (${desc.length}): ${desc}`);
  } else {
     // console.log(`OK (${desc.length}): ${desc.substring(0, 50)}...`);
  }
}
