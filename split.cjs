const fs = require('fs');
const path = require('path');
const data = require('./mockData.cjs');

const postsDir = path.join(__dirname, 'src', 'data', 'posts');

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

data.reviews.forEach(review => {
  const content = review.content.replace(/`/g, '\\`'); // escape backticks for template literals, wait no, if we stringify, JSON handles it. But we want to export as TS.
  // A safer way to serialize to TS:
  
  // Create a clean representation
  let tsCode = `export const ${review.slug.replace(/-/g, '_')} = {\n`;
  for (const [key, value] of Object.entries(review)) {
    if (key === 'content') {
      tsCode += `  content: ${JSON.stringify(value)},\n`;
    } else {
      tsCode += `  ${key}: ${JSON.stringify(value, null, 2).replace(/\n/g, '\n  ')},\n`;
    }
  }
  tsCode += `};\n`;
  
  fs.writeFileSync(path.join(postsDir, `${review.slug}.ts`), tsCode);
});

console.log('Posts extracted:', data.reviews.length);

// Also extract categories and authors
let catCode = `export const categories = ${JSON.stringify(data.categories, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'categories.ts'), catCode);

let authCode = `export const authors = ${JSON.stringify(data.authors, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'authors.ts'), authCode);
