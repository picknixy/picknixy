const fs = require('fs');

const path = 'src/data/mockData.ts';
let code = fs.readFileSync(path, 'utf8');

// Replace ALL occurrences of the PrimeBiome string back to fallbackSvg first to reset the damage
code = code.replace(/"https:\/\/i\.im\.ge\/e44YKM\/PrimeBiome\.png"/g, 'fallbackSvg');
code = code.replace(/"https:\/\/images2\.imgbox\.com\/7b\/09\/b3Y3AOBM_o\.png"/g, 'fallbackSvg');
// Also the other one if any
code = code.replace(/"https:\/\/i\.im\.ge\/2026\/04\/18\/e44YKM\/PrimeBiome\.png"/g, 'fallbackSvg');

// Now, correctly replace only the FIRST occurrence of fallbackSvg after prime-biome-review-2026
const targetId = '"id": "prime-biome-review-2026",';
const index = code.indexOf(targetId);

if (index !== -1) {
    const nextIdIndex = code.indexOf('"id":', index + 10);
    let slice = code.substring(index, nextIdIndex !== -1 ? nextIdIndex : code.length);
    
    // We only want to replace the FIRST 'fallbackSvg' (which is the main image) 
    // AND the schema images which might be 'fallbackSvg' as well within THIS block.
    // Actually, let's just replace all fallbackSvg IN THIS SLICE.
    slice = slice.replace(/fallbackSvg/g, '"https://i.im.ge/e44YKM/PrimeBiome.png"');
    
    code = code.substring(0, index) + slice + code.substring(nextIdIndex !== -1 ? nextIdIndex : code.length);
}

fs.writeFileSync(path, code);
