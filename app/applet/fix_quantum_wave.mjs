import fs from 'fs';

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Replace both instances of "image": fallbackSvg, inside mockData.ts
// specifically for Quantum Wave (and any other if it exists, though it's likely just this one).

content = content.replace(/"image":\s*fallbackSvg,/g, `"image": "https://i.im.ge/eBMxE4/Quantum_Wave.webp",`);

fs.writeFileSync('src/data/mockData.ts', content);
console.log("Fixed fallbackSvg in JSON-LD");
