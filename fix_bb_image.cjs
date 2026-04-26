const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');
content = content.replace(/https:\/\/getboosterbrew\.com\/cb-r-2\/\?hopId=8118d5b6-0386-4812-8554-88d9c18f92a4/g, 'https://getboosterbrew.com/wp-content/uploads/6-booster-brew.png');
fs.writeFileSync('src/data/mockData.ts', content);
console.log('Image updated!');
