import fs from 'fs';

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// The escaped JSON in strings
content = content.replace(/\\"itemReviewed\\":\s*\{\s*\\"@type\\":\s*\\"Product\\",/g, `\\"itemReviewed\\": {\\n          \\"@type\\": \\"Product\\",\\n          \\"offers\\": {\\"@type\\": \\"Offer\\", \\"priceCurrency\\": \\"USD\\", \\"price\\": \\"0\\"},`);

fs.writeFileSync('src/data/mockData.ts', content);
console.log("Fixed stringified JSON schemas");
