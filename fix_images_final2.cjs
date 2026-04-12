const fs = require('fs');

let fileContent = fs.readFileSync('src/data/mockData.ts', 'utf8');

const badImage = 'https://d1yei2z3i6k35z.cloudfront.net/15368427/694e67a137893_reviewshometrends2.webp';
const aquaImage = 'https://d1yei2z3i6k35z.cloudfront.net/15368427/695cf0ebc529b_AquaSculptreviewAnaturalweightlosssupplementfeaturingBerberineGinsengandGreenTeaingredients_1.43_1.png';
const flatImage = 'https://d1yei2z3i6k35z.cloudfront.net/15368427/6954126026e07_29-Day-Flat-Stomach-Formula-ReviewCanYouReallyBurnBellyFatin20Minutes_1.43_1.png';

// Find the start of each review block
const aquaStart = fileContent.indexOf('"id": "aquasculpt-review-7-second-fat-burn-ritual"');
const flatStart = fileContent.indexOf('"id": "29-day-flat-stomach-formula-review"');
const nextStart = fileContent.indexOf('"id": "water-smart-box-review-diy-atmospheric-water-generator"');

if (aquaStart !== -1 && flatStart !== -1) {
  let aquaBlock = fileContent.substring(aquaStart, flatStart);
  let flatBlock = fileContent.substring(flatStart, nextStart !== -1 ? nextStart : fileContent.length);
  
  // Replace in AquaSculpt block
  aquaBlock = aquaBlock.split(badImage).join(aquaImage);
  
  // Replace in Flat Stomach block
  flatBlock = flatBlock.split(badImage).join(flatImage);
  
  // Reassemble
  fileContent = fileContent.substring(0, aquaStart) + aquaBlock + flatBlock + (nextStart !== -1 ? fileContent.substring(nextStart) : '');
  
  fs.writeFileSync('src/data/mockData.ts', fileContent);
  console.log('Successfully replaced all occurrences of the bad image.');
} else {
  console.log('Could not find the review blocks.');
}
