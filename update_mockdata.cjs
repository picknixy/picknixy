const fs = require('fs');
let data = fs.readFileSync('src/data/mockData.ts', 'utf8');
const newReview = fs.readFileSync('new_review.ts', 'utf8');

// Find the last occurrence of "  },\n];"
const lastIndex = data.lastIndexOf('  },\n];');
if (lastIndex !== -1) {
  data = data.slice(0, lastIndex) + '  },\n' + newReview + '];\n';
  fs.writeFileSync('src/data/mockData.ts', data, 'utf8');
  console.log("Successfully injected the new review.");
} else {
  console.log("Could not find the end of the reviews array.");
}
