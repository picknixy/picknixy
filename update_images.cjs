const fs = require('fs');

let fileContent = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Replace AquaSculpt image
fileContent = fileContent.replace(
  /"image": "https:\/\/d1yei2z3i6k35z\.cloudfront\.net\/15368427\/694e67a137893_reviewshometrends2\.webp"/g,
  (match, offset, string) => {
    // Check if we are in the AquaSculpt review or Flat Stomach review
    const context = string.substring(Math.max(0, offset - 500), offset);
    if (context.includes('aquasculpt')) {
      return '"image": "https://d1yei2z3i6k35z.cloudfront.net/15368427/695cf0ebc529b_AquaSculptreviewAnaturalweightlosssupplementfeaturingBerberineGinsengandGreenTeaingredients_1.43_1.png"';
    } else if (context.includes('flat-stomach')) {
      return '"image": "https://d1yei2z3i6k35z.cloudfront.net/15368427/6954126026e07_29-Day-Flat-Stomach-Formula-ReviewCanYouReallyBurnBellyFatin20Minutes_1.43_1.png"';
    }
    return match;
  }
);

// Also replace the image in the content HTML for AquaSculpt
fileContent = fileContent.replace(
  /<img src="https:\/\/d1yei2z3i6k35z\.cloudfront\.net\/15368427\/694e67a137893_reviewshometrends2\.webp" alt="AquaSculpt Supplement Bottle"/g,
  '<img src="https://d1yei2z3i6k35z.cloudfront.net/15368427/695cf0ebc529b_AquaSculptreviewAnaturalweightlosssupplementfeaturingBerberineGinsengandGreenTeaingredients_1.43_1.png" alt="AquaSculpt Supplement Bottle"'
);

// Also replace the image in the content HTML for Flat Stomach
fileContent = fileContent.replace(
  /<img src="https:\/\/d1yei2z3i6k35z\.cloudfront\.net\/15368427\/694e67a137893_reviewshometrends2\.webp" alt="29-Day Flat Stomach Formula Program"/g,
  '<img src="https://d1yei2z3i6k35z.cloudfront.net/15368427/6954126026e07_29-Day-Flat-Stomach-Formula-ReviewCanYouReallyBurnBellyFatin20Minutes_1.43_1.png" alt="29-Day Flat Stomach Formula Program"'
);

fs.writeFileSync('src/data/mockData.ts', fileContent);
console.log('Successfully updated images in mockData.ts');
