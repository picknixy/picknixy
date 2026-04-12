const fs = require('fs');

const filePath = 'src/data/mockData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const idsToRemove = [
  '"4"',
  '"29-day-flat-stomach-formula-review"',
  '"aquasculpt-review-7-second-fat-burn-ritual"'
];

for (const id of idsToRemove) {
  const regex = new RegExp(`\\s*\\{\\s*(?:"id"|id):\\s*${id},[\\s\\S]*?\\n\\s*\\},?`, 'g');
  content = content.replace(regex, '');
}

// Fix any trailing commas before the end of the array if needed
content = content.replace(/,\s*\]/, '\n]');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
