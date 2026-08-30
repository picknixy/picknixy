const fs = require('fs');
const content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Find the last valid index. Let's find "id: \"hk-ultra-review\"" which seems to be the one before soulmate.
// Or just substring up to the soulmate review.
let index = content.indexOf('id: "soulmate-story-review"');
if (index === -1) {
    // If we can't find it easily, let's just use the binary safe substring
    const buf = fs.readFileSync('src/data/mockData.ts');
    index = buf.indexOf('id: "soulmate-story-review"');
    if (index !== -1) {
        let goodBuf = buf.subarray(0, index);
        // Find the `{` that precedes it
        const str = goodBuf.toString('utf8');
        const lastBracket = str.lastIndexOf('{');
        let fixedStr = str.substring(0, lastBracket);
        // Trim trailing spaces/commas and close the array
        fixedStr = fixedStr.trim();
        if (fixedStr.endsWith(',')) {
            fixedStr = fixedStr.slice(0, -1);
        }
        fixedStr += '\n];\n';
        fs.writeFileSync('src/data/mockData.ts', fixedStr);
        console.log("Fixed!");
    } else {
        console.log("Could not find soulmate-story-review");
    }
} else {
    let fixedStr = content.substring(0, index);
    const lastBracket = fixedStr.lastIndexOf('{');
    fixedStr = fixedStr.substring(0, lastBracket).trim();
    if (fixedStr.endsWith(',')) fixedStr = fixedStr.slice(0, -1);
    fixedStr += '\n];\n';
    fs.writeFileSync('src/data/mockData.ts', fixedStr);
    console.log("Fixed!");
}
