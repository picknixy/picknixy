const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, 'src/data/mockData.ts');
let text = fs.readFileSync(file, 'utf8');

const idStr = 'id: "cashscroller-review",';
const startIdx = text.indexOf(idStr);

if (startIdx === -1) {
  console.log("Could not find ID");
  process.exit(1);
}

// Find the '{' just before startIdx
const blockStart = text.lastIndexOf('{', startIdx);

// We know the next review is pineal-10x-review (or something else). Let's find the next `{ id: `
// Or just find the next `{    id:` after our block. Let's find `  },` that ends this block.
let nextBlockStart = text.indexOf('id: "pineal-10x-review"', startIdx);
if (nextBlockStart === -1) {
    // If it was at the end, just find the last ']'
    nextBlockStart = text.lastIndexOf(']');
    // Step back to include the last `  }` or similar, let's just find the closing bracket of the review.
} else {
    nextBlockStart = text.lastIndexOf('{', nextBlockStart);
}

// The safest way is if we know the exact string we inserted. But the file has evolved. Let's use regex or a bracket balancer.
let openBrackets = 0;
let index = blockStart;
let foundEnd = false;

while (index < text.length) {
    if (text[index] === '{') openBrackets++;
    if (text[index] === '}') openBrackets--;
    
    if (openBrackets === 0) {
        foundEnd = true;
        break;
    }
    index++;
}

if (foundEnd) {
    // Remove the block, plus any trailing commas or whitespace up to the next item or end of array
    let endIdx = index + 1;
    while (text[endIdx] === ',' || text[endIdx] === ' ' || text[endIdx] === '\n') {
        endIdx++;
    }
    const before = text.slice(0, blockStart);
    const after = text.slice(endIdx);
    fs.writeFileSync(file, before + after);
    console.log("Successfully removed CashScroller review.");
} else {
    console.log("Failed to find end of block");
}
