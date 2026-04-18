const fs = require('fs');

const path = 'src/data/mockData.ts';
let code = fs.readFileSync(path, 'utf8');

// Remove the import statement
code = code.replace(/import img_savethemarriage from '\.\.\/assets\/images\/save-the-marriage\.png';\n?/g, '');

// Replace the usage
code = code.replace(/image:\s*img_savethemarriage/g, 'image: fallbackSvg');

fs.writeFileSync(path, code);
console.log('Fixed deleted image import');
