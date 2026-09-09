const fs = require('fs');
const path = require('path');

// 1. Update src/data/categories.ts
const catPath = path.join(__dirname, 'src', 'data', 'categories.ts');
let catContent = fs.readFileSync(catPath, 'utf8');

if (!catContent.includes('animal-care')) {
  // Find the end of the array
  catContent = catContent.replace(/];$/, `,
  {
    "id": "animal-care",
    "name": "Animal Care Reviews",
    "slug": "animal-care",
    "description": "Expert reviews on pet care, dog training programs, and animal wellness.",
    "subcategories": [
      {
        "id": "dog-training",
        "name": "Dog Training Reviews",
        "slug": "dog-training"
      }
    ]
  }
];`);
  fs.writeFileSync(catPath, catContent);
  console.log('Categories updated!');
}

// 2. Update vite.config.ts
const vitePath = path.join(__dirname, 'vite.config.ts');
let viteContent = fs.readFileSync(vitePath, 'utf8');

if (!viteContent.includes('"animal-care"')) {
  viteContent = viteContent.replace('"online-business"', '"online-business", "animal-care", "dog-training"');
  fs.writeFileSync(vitePath, viteContent);
  console.log('Vite config updated!');
}
