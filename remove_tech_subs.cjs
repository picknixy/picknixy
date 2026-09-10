const fs = require('fs');
const path = require('path');

// 1. Update src/data/categories.ts
const catPath = path.join(__dirname, 'src', 'data', 'categories.ts');
let catContent = fs.readFileSync(catPath, 'utf8');

const jsonStr = catContent.replace('export const categories = ', '').replace(/;$/, '');
let categories = eval(jsonStr);

categories = categories.map(cat => {
  if (cat.id === 'technology') {
    cat.subcategories = [];
  }
  return cat;
});

const newCatContent = 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n';
fs.writeFileSync(catPath, newCatContent);
console.log('Removed subcategories from categories.ts');

// 2. Update vite.config.ts
const vitePath = path.join(__dirname, 'vite.config.ts');
let viteContent = fs.readFileSync(vitePath, 'utf8');

viteContent = viteContent.replace(', "software", "gadgets"', '');
fs.writeFileSync(vitePath, viteContent);
console.log('Removed subcategories from vite.config.ts');
