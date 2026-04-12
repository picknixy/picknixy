const fs = require('fs');

let fileContent = fs.readFileSync('src/data/mockData.ts', 'utf8');

// The image tags to remove from the content
const aquaImgTag = '<img src="https://d1yei2z3i6k35z.cloudfront.net/15368427/695cf0ebc529b_AquaSculptreviewAnaturalweightlosssupplementfeaturingBerberineGinsengandGreenTeaingredients_1.43_1.png" alt="AquaSculpt Supplement Bottle" class="w-full rounded-lg shadow-md my-8" />';
const flatImgTag = '<img src="https://d1yei2z3i6k35z.cloudfront.net/15368427/6954126026e07_29-Day-Flat-Stomach-Formula-ReviewCanYouReallyBurnBellyFatin20Minutes_1.43_1.png" alt="29-Day Flat Stomach Formula Program" class="w-full rounded-lg shadow-md my-8" />';

// Remove them
if (fileContent.includes(aquaImgTag)) {
  fileContent = fileContent.replace(aquaImgTag, '');
  console.log('Removed AquaSculpt image tag from content.');
} else {
  console.log('AquaSculpt image tag not found.');
}

if (fileContent.includes(flatImgTag)) {
  fileContent = fileContent.replace(flatImgTag, '');
  console.log('Removed Flat Stomach image tag from content.');
} else {
  console.log('Flat Stomach image tag not found.');
}

fs.writeFileSync('src/data/mockData.ts', fileContent);
console.log('Done updating mockData.ts');
