const fs = require('fs');
const path = require('path');

let mockData = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Insert fallback import at the top if not there
if (!mockData.includes('import fallbackSvg from \'../assets/images/fallback.svg\'')) {
    mockData = "import fallbackSvg from '../assets/images/fallback.svg';\n" + mockData;
}

const missingImages = [
  'PrimeBiome.png',
  'vitamotion-review.webp',
  'quantum-wave-logo.webp',
  'prostadine.webp',
  'red-boost.webp',
  'save-the-marriage-system.png',
  'water-smart-box.webp',
  'pure-reiki-mastery.png',
  'dubai-wealth-secret.png',
  'divine-wealth-path.png',
  'past-life-reading.webp'
];

for (const img of missingImages) {
    const importRegex = new RegExp(`import img_[a-zA-Z0-9]+ from '\\.\\.\\/assets\\/images\\/${img}'\\s*;\\n?`, 'g');
    
    // Find what the variable was named
    const match = new RegExp(`import (img_[a-zA-Z0-9]+) from '\\.\\.\\/assets\\/images\\/${img}'`).exec(mockData);
    if (match) {
        const varName = match[1];
        mockData = mockData.replace(importRegex, '');
        // Replace all usages of this var with fallbackSvg
        mockData = mockData.replace(new RegExp(`\\b${varName}\\b`, 'g'), 'fallbackSvg');
    }
}

fs.writeFileSync('src/data/mockData.ts', mockData);
console.log('Fixed imports in mockData.ts');
