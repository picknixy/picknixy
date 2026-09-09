const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'data', 'categories.ts');
let content = fs.readFileSync(file, 'utf8');

// Extract the array using a dirty trick or just parse it if possible
const jsonStr = content.replace('export const categories = ', '').replace(/;$/, '');
let categories = eval(jsonStr);

const idsToRemove = [
  'manifestation',
  'productivity',
  'personal-growth',
  'energy',
  'readings',
  'attraction',
  'breakup-recovery',
  'communication'
];

categories = categories.map(cat => {
  if (cat.subcategories) {
    cat.subcategories = cat.subcategories.filter(sub => !idsToRemove.includes(sub.id));
  }
  return cat;
});

const newContent = 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n';
fs.writeFileSync(file, newContent);
console.log('Removed specified subcategories.');
