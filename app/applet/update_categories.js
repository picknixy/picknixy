import fs from 'fs';

const mockDataPath = 'src/data/mockData.ts';
let code = fs.readFileSync(mockDataPath, 'utf8');

// 1. Add 'wealth' subcategory to 'self-help'
// Match "id: "self-help"" and its subcategories array
const selfHelpRegex = /id:\s*"self-help"[\s\S]*?subcategories:\s*\[([\s\S]*?)\]/;
const match = code.match(selfHelpRegex);
if (match) {
    const subcats = match[1];
    if (!subcats.includes('"wealth"')) {
        const updatedSubcats = subcats + ',\n      { id: "wealth", name: "Wealth", slug: "wealth" }';
        const updatedSelfHelp = match[0].replace(subcats, updatedSubcats);
        code = code.replace(match[0], updatedSelfHelp);
    }
}

// 2. Change category for "Dubai Wealth Secret Review..."
// Let's find the review via slug or title and change its category to "wealth"
const dubaiRegex = /(slug:\s*"dubai-wealth-secret-review"[\s\S]*?category:\s*)"([^"]+)"/;
if (code.match(dubaiRegex)) {
    code = code.replace(dubaiRegex, '$1"wealth"');
}

// 3. Change category for "Is Divine Wealth Path Reading Legit?..."
const divineRegex = /(slug:\s*"divine-wealth-path-review"[\s\S]*?category:\s*)"([^"]+)"/;
if (code.match(divineRegex)) {
    code = code.replace(divineRegex, '$1"wealth"');
}

// 4. Change category for "Past Life Reading Review..."
const pastLifeRegex = /(slug:\s*"past-life-reading-review"[\s\S]*?category:\s*)"([^"]+)"/;
if (code.match(pastLifeRegex)) {
    code = code.replace(pastLifeRegex, '$1"astrology"');
}

// 5. Change category for "Quantum Wave Review 2026..."
const quantumRegex = /(slug:\s*"quantum-wave-review"[\s\S]*?category:\s*)"([^"]+)"/;
if (code.match(quantumRegex)) {
    code = code.replace(quantumRegex, '$1"mental-health"');
}

// For those that might use a slightly different slug, let's also do a string replacement targeting their titles:
code = code.replace(/(title:\s*"Dubai Wealth Secret Review: Unlocking the Millionaire Mindset",[\s\S]{1,500}category:\s*)"([^"]+)"/g, '$1"wealth"');
code = code.replace(/(title:\s*"Is Divine Wealth Path Reading Legit\? An Honest Review",[\s\S]{1,500}category:\s*)"([^"]+)"/g, '$1"wealth"');
code = code.replace(/(title:\s*"Past Life Reading Review: Discover Who You Were in a Previous Life",[\s\S]{1,500}category:\s*)"([^"]+)"/g, '$1"astrology"');
code = code.replace(/(title:\s*"Quantum Wave Review 2026: Exploring Brainwave Entrainment for Focus and Relaxation",[\s\S]{1,500}category:\s*)"([^"]+)"/g, '$1"mental-health"');

fs.writeFileSync(mockDataPath, code);

// Let's verify:
console.log("Categories for the specified posts:");
const getCat = (title) => {
    const idx = code.indexOf(title);
    if (idx === -1) return "Not found";
    const catIdx = code.indexOf('category:', idx);
    const catEnd = code.indexOf(',', catIdx);
    return code.substring(catIdx, catEnd);
}

console.log("Dubai Wealth:", getCat("Dubai Wealth Secret Review: Unlocking the Millionaire Mindset"));
console.log("Divine Wealth:", getCat("Is Divine Wealth Path Reading Legit? An Honest Review"));
console.log("Past Life:", getCat("Past Life Reading Review: Discover Who You Were in a Previous Life"));
console.log("Quantum Wave:", getCat("Quantum Wave Review 2026: Exploring Brainwave Entrainment for Focus and Relaxation"));

