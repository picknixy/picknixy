const fs = require('fs');

const path = 'src/data/mockData.ts';
let code = fs.readFileSync(path, 'utf8');

// I need to reset all "https://i.im.ge/e44YKM/PrimeBiome.png" to "fallbackSvg" where id is not prime-biome
// Just change them all temporarily:
code = code.replace(/"https:\/\/i\.im\.ge\/e44YKM\/PrimeBiome\.png"/g, 'fallbackSvg');

// Then precisely replace for Prime Biome
const startStr = '"id": "prime-biome-review-2026",';
const indexStart = code.indexOf(startStr);
const indexEnd = code.indexOf('id: "vitamotion-review-2026",', indexStart);

if (indexStart !== -1 && indexEnd !== -1) {
    let slice = code.substring(indexStart, indexEnd);
    slice = slice.replace(/fallbackSvg/g, '"https://i.im.ge/e44YKM/PrimeBiome.png"');
    code = code.substring(0, indexStart) + slice + code.substring(indexEnd);
} else {
    console.log("Could not find start or end!");
}

fs.writeFileSync(path, code);
