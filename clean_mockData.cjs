const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');
const lastIndex = content.lastIndexOf('];');
if (lastIndex !== -1) {
  content = content.substring(0, lastIndex + 2) + '\n';
  fs.writeFileSync('src/data/mockData.ts', content);
  console.log('Truncated at last ];');
} else {
  console.log('Could not find ];');
}
