import fs from 'fs';

const mockDataPath = 'src/data/mockData.ts';
let code = fs.readFileSync(mockDataPath, 'utf8');

const getCat = (titleStr) => {
    const idx = code.indexOf(titleStr);
    if (idx === -1) return "Title not found";
    const catIdx = code.indexOf('category: "', idx);
    const catEnd = code.indexOf('"', catIdx + 11);
    return code.substring(catIdx + 11, catEnd);
}

console.log("Dubai:", getCat('Dubai Wealth Secret Review: Unlocking the Millionaire Mindset'));
console.log("Divine:", getCat('Is Divine Wealth Path Reading Legit? An Honest Review'));
console.log("Past Life:", getCat('Past Life Reading Review: Discover Who You Were in a Previous Life'));
console.log("Quantum:", getCat('Quantum Wave Review 2026: Exploring Brainwave Entrainment for Focus and Relaxation'));

