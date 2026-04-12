const fs = require('fs');
let fileContent = fs.readFileSync('src/data/mockData.ts', 'utf8');

fileContent = fileContent.replace(
  'For those focused on survival and preparedness, relying solely on municipal sources is no longer a viable long-term strategy.',
  'For those focused on <a href="/category/survival" class="text-blue-600 hover:underline">survival and preparedness</a>, relying solely on municipal sources is no longer a viable long-term strategy.'
);

fs.writeFileSync('src/data/mockData.ts', fileContent);
console.log('Successfully added internal link.');
