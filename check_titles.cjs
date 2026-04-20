const fs = require('fs');

const contents = fs.readFileSync('src/data/mockData.ts', 'utf8');

const regex = /seoTitle:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(contents)) !== null) {
  const seoTitle = match[1];
  if (seoTitle.length > 55) {
     console.log(`TOO LONG (${seoTitle.length}): ${seoTitle}`);
  } else {
     console.log(`OK (${seoTitle.length}): ${seoTitle}`);
  }
}
