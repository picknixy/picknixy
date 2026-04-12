const fs = require('fs');

let mockData = fs.readFileSync('src/data/mockData.ts', 'utf8');

// 1. Remove survival from self-help subcategories
mockData = mockData.replace(
  '{ id: "survival", name: "Survival", slug: "survival" },\n      ',
  ''
);

// 2. Add Survival as a top level category
const newCategory = `  { 
    id: "survival", 
    name: "Survival", 
    slug: "survival", 
    description: "Essential gear, guides, and tips for wilderness survival and emergency preparedness.",
    subcategories: []
  },
`;

mockData = mockData.replace(
  'export const categories = [\n',
  'export const categories = [\n' + newCategory
);

fs.writeFileSync('src/data/mockData.ts', mockData);
console.log('Done');
