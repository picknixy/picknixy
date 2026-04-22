import fs from 'fs';

const mockDataPath = 'src/data/mockData.ts';
let code = fs.readFileSync(mockDataPath, 'utf8');

const regex = /(title:\s*"Is Divine Wealth Path Reading Legit\? An Honest Review",[\s\S]{1,500}category:\s*)"([^"]+)"/;
if (code.match(regex)) {
    code = code.replace(regex, '$1"wealth"');
    console.log("Updated Divine Wealth Path");
} else {
    // maybe category is before title?
    console.log("Regex didn't match.");
}

fs.writeFileSync(mockDataPath, code);

console.log("Divine Wealth:", code.substring(code.indexOf('category:', code.indexOf('title: "Is Divine Wealth Path Reading Legit? An Honest Review"')), code.indexOf(',', code.indexOf('category:', code.indexOf('title: "Is Divine Wealth Path Reading Legit? An Honest Review"')))));

