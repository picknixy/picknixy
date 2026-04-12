const fs = require('fs');

const filePath = 'src/data/mockData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Find the quantum-wave-review in bestOfArticles and remove it
// It starts at line 845 in mockData.ts
// Let's just use a regex to remove it from bestOfArticles

const regex = /export const bestOfArticles: any\[\] = \[\n\s*\{\n\s*id: "quantum-wave-review",[\s\S]*?affiliateLink: "https:\/\/getquantumwave\.com\/\?hopId=3e2cc675-6c04-40eb-b840-9d5d971eca0f"\n\s*\}/;

content = content.replace(regex, 'export const bestOfArticles: any[] = [');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Done");
