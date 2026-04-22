import fs from 'fs';

const mockDataPath = 'src/data/mockData.ts';
let code = fs.readFileSync(mockDataPath, 'utf8');

const title = 'title: "Is Divine Wealth Path Reading Legit? An Honest Review",';
const index = code.indexOf(title);
if (index !== -1) {
    const catIndex = code.indexOf('category: "spiritual"', index);
    if (catIndex !== -1 && catIndex < index + 1000) {
        code = code.substring(0, catIndex) + 'category: "wealth"' + code.substring(catIndex + 'category: "spiritual"'.length);
        console.log("Updated!");
    } else {
        console.log("Category not found near title.");
    }
}

fs.writeFileSync(mockDataPath, code);

