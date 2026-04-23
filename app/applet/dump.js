const fs = require('fs');
const data = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Find the index of "the-brain-song-review"
const startIndex = data.indexOf('"id": "the-brain-song-review"');
if (startIndex !== -1) {
  // Extract a chunk around it to manually inspect
  const chunk = data.slice(startIndex, startIndex + 5000);
  console.log(chunk);
} else {
  console.log("Not found");
}
