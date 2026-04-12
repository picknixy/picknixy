const fs = require('fs');
let fileContent = fs.readFileSync('src/data/mockData.ts', 'utf8');

fileContent = fileContent.replace(
  '<a href="/category/survival" class="text-blue-600 hover:underline">',
  '<a href=\\"/category/survival\\" class=\\"text-blue-600 hover:underline\\">'
);

fs.writeFileSync('src/data/mockData.ts', fileContent);
console.log('Successfully fixed escaped quotes.');
