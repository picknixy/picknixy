const fs = require('fs');

let fileContent = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Find the start of each review block
const aquaStart = fileContent.indexOf('"id": "aquasculpt-review-7-second-fat-burn-ritual"');
const flatStart = fileContent.indexOf('"id": "29-day-flat-stomach-formula-review"');
const nextStart = fileContent.indexOf('"id": "water-smart-box-review-diy-atmospheric-water-generator"');

if (aquaStart !== -1 && flatStart !== -1) {
  let aquaBlock = fileContent.substring(aquaStart, flatStart);
  let flatBlock = fileContent.substring(flatStart, nextStart !== -1 ? nextStart : fileContent.length);
  
  // Replace any <img> tag in the content string
  // We only want to remove it from the "content" property, but since it's the only place with HTML <img> tags, this is safe.
  const imgRegex = /<img[^>]+>/g;
  
  aquaBlock = aquaBlock.replace(imgRegex, '');
  flatBlock = flatBlock.replace(imgRegex, '');
  
  // Reassemble
  fileContent = fileContent.substring(0, aquaStart) + aquaBlock + flatBlock + (nextStart !== -1 ? fileContent.substring(nextStart) : '');
  
  fs.writeFileSync('src/data/mockData.ts', fileContent);
  console.log('Successfully removed all <img> tags from the review content blocks.');
} else {
  console.log('Could not find the review blocks.');
}
