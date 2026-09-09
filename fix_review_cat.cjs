const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'pages', 'Review.tsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /const category = categories\.find\(c => c\.id === review\.category\);/g,
  `let category = categories.find(c => c.id === review.category);
  if (!category) {
    for (const cat of categories) {
      const sub = cat.subcategories?.find(s => s.id === review.category);
      if (sub) {
        category = sub;
        break;
      }
    }
  }`
);

fs.writeFileSync(file, content);
console.log('Fixed Review.tsx');
