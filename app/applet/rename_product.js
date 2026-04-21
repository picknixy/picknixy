const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Replace standard casing
content = content.replace(/Forbrain Song/g, "The Brain Song");

// Replace URL slugs and IDs
content = content.replace(/forbrain-song-review/g, "the-brain-song-review");

// In case there are lowercase instances in the text
content = content.replace(/forbrain song/g, "the brain song");

fs.writeFileSync('src/data/mockData.ts', content);
console.log("Renamed Forbrain Song to The Brain Song");
