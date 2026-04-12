const fs = require('fs');

function extractImages(filename) {
  const html = fs.readFileSync(filename, 'utf8');
  
  const bgMatch = html.match(/background-image:\s*url\(['"]?([^'")]+\.(png|jpg|jpeg|webp))['"]?\)/gi);
  const imgMatch = html.match(/<img[^>]+src=['"]([^'"]+)['"]/gi);
  
  console.log(`--- ${filename} Images ---`);
  if (bgMatch) console.log("Backgrounds:", bgMatch.slice(0, 5));
  if (imgMatch) console.log("Images:", imgMatch.slice(0, 5));
}

extractImages('aqua.html');
extractImages('flat.html');
