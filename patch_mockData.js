import fs from 'fs';

let mockData = fs.readFileSync('src/data/mockData.ts', 'utf8');

const smoothieExtra = fs.readFileSync('smoothie_extra.txt', 'utf8');
const astroExtra = fs.readFileSync('astro_extra.txt', 'utf8');

const smoothieTarget = '<h2 id="seo-intent-topical-authority">Targeting Long-Tail Questions: Addressing Search Intent</h2>';
if (mockData.includes(smoothieTarget)) {
  mockData = mockData.replace(smoothieTarget, smoothieExtra + '\n' + smoothieTarget);
  console.log('Smoothie patched');
} else {
  console.log('Smoothie target not found');
}

const astroTarget = '<h2 class="text-3xl font-bold text-gray-900 mt-10 mb-6">Conclusion: The Final Verdict</h2>';
if (mockData.includes(astroTarget)) {
  mockData = mockData.replace(astroTarget, astroExtra + '\n' + astroTarget);
  console.log('Astro patched');
} else {
  console.log('Astro target not found');
}

fs.writeFileSync('src/data/mockData.ts', mockData, 'utf8');
