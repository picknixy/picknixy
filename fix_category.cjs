const fs = require('fs');
let data = fs.readFileSync('src/pages/Category.tsx', 'utf8');

data = data.replace(
  "const categoryReviews = reviews.filter((r) => r.category === category.id);",
  `const categoryReviews = reviews.filter((r) => {
    if (r.category === category.id) return true;
    if (category.subcategories) {
      return category.subcategories.some((sub) => sub.id === r.category);
    }
    return false;
  });`
);

fs.writeFileSync('src/pages/Category.tsx', data, 'utf8');
