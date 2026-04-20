import fs from 'fs';

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Match `\"itemReviewed\": {\n          \"@type\": \"Product\",`
const targetStr = `\\"itemReviewed\\": {
          \\"@type\\": \\"Product\\",`;

console.log("Found matches?", content.includes(targetStr));

// Actually, regex string
let reg = /\\"itemReviewed\\":\s*\{\s*\\"@type\\":\s*\\"Product\\",/g;
let matches = content.match(reg);
console.log("Regex matches:", matches?.length || 0);

// Let's replace ONLY if "offers" is not right after Product
let parts = content.split(/\\"itemReviewed\\":\s*\{\s*\\"@type\\":\s*\\"Product\\",/);
let newContent = parts[0];
for (let i = 1; i < parts.length; i++) {
  if (parts[i].includes(`\\"offers\\":`)) {
    // Already has it, or if it's very close... wait
    // actually just do:
    newContent += `\\"itemReviewed\\": {\\n          \\"@type\\": \\"Product\\",` + parts[i];
  } else {
    newContent += `\\"itemReviewed\\": {\\n          \\"@type\\": \\"Product\\",\\n          \\"offers\\": {\\"@type\\": \\"Offer\\", \\"priceCurrency\\": \\"USD\\", \\"price\\": \\"0\\"},` + parts[i];
  }
}
fs.writeFileSync('src/data/mockData.ts', newContent);
console.log("Done");
