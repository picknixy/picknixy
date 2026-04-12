const fs = require('fs');
let fileContent = fs.readFileSync('src/data/mockData.ts', 'utf8');

fileContent = fileContent.replace(
  /https:\/\/d1yei2z3i6k35z\.cloudfront\.net\/161\/60c2138356a3b_Rectangle5\.png/g,
  '/water-smart-box.webp'
);

fs.writeFileSync('src/data/mockData.ts', fileContent);
console.log('Successfully updated Water Smart Box images to local file.');
