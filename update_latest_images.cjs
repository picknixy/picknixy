const fs = require('fs');
const path = 'src/data/mockData.ts';

const imageMap = {
  "dubai-wealth-secret": "https://i.im.ge/eBM3JC/Digital_wealth_building_course_bundle_featuring_Dubai-Wealth-Secret_The_Millionaire_Habit_Rockefeller_Money_Pyramid_and_The_Influence_Code_modules..webp",
  "quantum-wave-review": "https://i.im.ge/eBMxE4/Quantum_Wave.webp",
  "divine-wealth-path": "https://i.im.ge/eBMbdq/divine-wealth-path-reading-review.webp"
};

let code = fs.readFileSync(path, 'utf8');

for (const [id, imageUrl] of Object.entries(imageMap)) {
  let indexStart = code.indexOf(`id: "${id}",`);
  if (indexStart === -1) {
    indexStart = code.indexOf(`"id": "${id}",`); // try with quotes
  }
  
  if (indexStart !== -1) {
    let nextIdIndex = code.indexOf('\n    id: "', indexStart + 10);
    if (nextIdIndex === -1) nextIdIndex = code.indexOf('\n  "id": "', indexStart + 10);
    if (nextIdIndex === -1) nextIdIndex = code.indexOf('\n  },', indexStart); 
    if (nextIdIndex === -1) nextIdIndex = code.length;
    
    let slice = code.substring(indexStart, nextIdIndex);
    
    // Replace logic
    slice = slice.replace(/image:\s*fallbackSvg/g, `image: "${imageUrl}"`);
    slice = slice.replace(/"image":\s*"[^"]+"/g, `"image": "${imageUrl}"`);
    slice = slice.replace(/image:\s*"[^"]+"/g, `image: "${imageUrl}"`);
    
    code = code.substring(0, indexStart) + slice + code.substring(nextIdIndex);
  } else {
    console.log(`Could not find id: ${id}`);
  }
}

fs.writeFileSync(path, code);
console.log('Update finished.');
