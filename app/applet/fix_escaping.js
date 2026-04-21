import fs from 'fs';
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Find the literal string ",\\n{" and replace with ", {"
content = content.replace(/,\\n{/g, ', {');
// And replacing literal "\\n];\\n\\nexport const bestOfArticles" with "\n];\n\nexport const bestOfArticles"
content = content.replace(/\\n\];\\n\\nexport const bestOfArticles/g, '\n];\n\nexport const bestOfArticles');
fs.writeFileSync('src/data/mockData.ts', content);
console.log("Fixed escaping!");
