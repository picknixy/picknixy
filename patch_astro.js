import fs from 'fs';

let mockData = fs.readFileSync('src/data/mockData.ts', 'utf8');

const astroExtra = fs.readFileSync('astro_extra.txt', 'utf8');

const astroTarget = '<h2 id="conclusion">Final Verdict: Should You Try It?</h2>';
if (mockData.includes(astroTarget)) {
  mockData = mockData.replace(astroTarget, astroExtra + '\n' + astroTarget);
  console.log('Astro patched');
} else {
  console.log('Astro target not found');
}

fs.writeFileSync('src/data/mockData.ts', mockData, 'utf8');
