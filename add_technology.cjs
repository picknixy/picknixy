const fs = require('fs');
const path = require('path');

// 1. Update src/data/categories.ts
const catPath = path.join(__dirname, 'src', 'data', 'categories.ts');
let catContent = fs.readFileSync(catPath, 'utf8');

if (!catContent.includes('"id": "technology"')) {
  catContent = catContent.replace(/\]\s*;\s*$/, `,
  {
    "id": "technology",
    "name": "Technology",
    "slug": "technology",
    "description": "In-depth reviews on the latest gadgets, software, and tech tools.",
    "subcategories": [
      {
        "id": "software",
        "name": "Software Reviews",
        "slug": "software"
      },
      {
        "id": "gadgets",
        "name": "Gadgets Reviews",
        "slug": "gadgets"
      }
    ]
  }
];`);
  fs.writeFileSync(catPath, catContent);
  console.log('Added technology to categories.ts');
}

// 2. Update vite.config.ts
const vitePath = path.join(__dirname, 'vite.config.ts');
let viteContent = fs.readFileSync(vitePath, 'utf8');

if (!viteContent.includes('"technology"')) {
  viteContent = viteContent.replace('"dog-training"', '"dog-training", "technology", "software", "gadgets"');
  fs.writeFileSync(vitePath, viteContent);
  console.log('Added technology to vite.config.ts');
}
