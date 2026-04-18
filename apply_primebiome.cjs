const fs = require('fs');

const path = 'src/data/mockData.ts';
let code = fs.readFileSync(path, 'utf8');

// Replace the image for Prime Biome
// Let's find: id: "prime-biome-review-2026"
const targetEntryStart = 'id: "prime-biome-review-2026",';
const indexOfEntry = code.indexOf(targetEntryStart);

if (indexOfEntry !== -1) {
    const endOfEntry = code.indexOf('id: "vitamotion-review",', indexOfEntry);
    
    let entryText = code.substring(indexOfEntry, endOfEntry !== -1 ? endOfEntry : code.length);
    
    // Replace fallbackSvg with "https://i.im.ge/e44YKM/PrimeBiome.png"
    // Note: the current image might be fallbackSvg
    entryText = entryText.replace(/image:\s*fallbackSvg/g, 'image: "https://i.im.ge/e44YKM/PrimeBiome.png"');
    
    code = code.substring(0, indexOfEntry) + entryText + code.substring(endOfEntry !== -1 ? endOfEntry : code.length);
}

fs.writeFileSync(path, code);
console.log('Done replacing Prime Biome image.');
