const fs = require('fs');
let fileContent = fs.readFileSync('src/data/mockData.ts', 'utf8');

fileContent = fileContent.replace(
  /"seoTitle": "The 28-Day Perimenopause Miracle Review: A Better Transition\?",/g,
  '"seoTitle": "28-Day Perimenopause Miracle Review",'
);

fs.writeFileSync('src/data/mockData.ts', fileContent);
console.log('Fixed the title for 28-day-perimenopause-miracle-review');
