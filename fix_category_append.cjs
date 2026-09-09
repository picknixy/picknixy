const fs = require('fs');
const path = require('path');
const catPath = path.join(__dirname, 'src', 'data', 'categories.ts');
let catContent = fs.readFileSync(catPath, 'utf8');

if (!catContent.includes('animal-care')) {
  catContent = catContent.replace(/\]\s*;\s*$/, `,
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
  console.log("Appended animal-care");
} else {
  console.log("animal-care already exists");
}
