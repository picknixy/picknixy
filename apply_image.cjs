const fs = require('fs');

const path = 'src/data/mockData.ts';
let code = fs.readFileSync(path, 'utf8');

if (!code.includes("import img_savethemarriage")) {
    code = "import img_savethemarriage from '../assets/images/save-the-marriage.png';\n" + code;
}

// Replace the fallback for the "Save the marriage" entry
const targetEntryStart = 'id: "save-the-marriage-system-review",';
const indexOfEntry = code.indexOf(targetEntryStart);

if (indexOfEntry !== -1) {
    const endOfEntry = code.indexOf('id: "divine-wealth-path-review"', indexOfEntry);
    
    let entryText = code.substring(indexOfEntry, endOfEntry !== -1 ? endOfEntry : code.length);
    
    // Replace fallbackSvg with img_savethemarriage
    entryText = entryText.replace(/image:\s*fallbackSvg/g, 'image: img_savethemarriage');
    
    code = code.substring(0, indexOfEntry) + entryText + code.substring(endOfEntry !== -1 ? endOfEntry : code.length);
}

fs.writeFileSync(path, code);
console.log('Done refactoring Save the Marriage image.');
