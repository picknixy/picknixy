const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');
content = content.replace(
  '"title": "Astro Lover Sketch Review 2026: Does This Soulmate Drawing Actually Work?"',
  '"title": "The Original Vedic Astrology Sketch Review 2026: Does This Soulmate Drawing Actually Work?"'
);
fs.writeFileSync('src/data/mockData.ts', content);
console.log('Fixed title');
