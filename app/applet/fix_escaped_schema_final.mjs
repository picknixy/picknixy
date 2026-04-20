import fs from 'fs';

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// For Prime Biome
let target1 = `\\"itemReviewed\\": {\\n          \\"@type\\": \\"Product\\",`;
let repl1 = `\\"itemReviewed\\": {\\n          \\"@type\\": \\"Product\\",\\n          \\"offers\\": {\\"@type\\": \\"Offer\\", \\"priceCurrency\\": \\"USD\\", \\"price\\": \\"0\\"},`;

// For Water Smart Box
let target2 = `\\"itemReviewed\\": {\\n            \\"@type\\": \\"Product\\",`;
let repl2 = `\\"itemReviewed\\": {\\n            \\"@type\\": \\"Product\\",\\n            \\"offers\\": {\\"@type\\": \\"Offer\\", \\"priceCurrency\\": \\"USD\\", \\"price\\": \\"0\\"},`;

content = content.replace(target1, repl1);
content = content.replace(target2, repl2);

fs.writeFileSync('src/data/mockData.ts', content);
console.log("Done");
