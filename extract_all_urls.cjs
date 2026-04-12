const fs = require('fs');

function extractAllImageUrls(filename) {
  const html = fs.readFileSync(filename, 'utf8');
  const regex = /https:\/\/[^"'\s\)]+\.(?:png|jpg|jpeg|webp)/gi;
  const matches = html.match(regex) || [];
  const uniqueUrls = [...new Set(matches)];
  console.log(`--- ${filename} ---`);
  uniqueUrls.forEach(url => console.log(url));
}

extractAllImageUrls('aqua.html');
extractAllImageUrls('flat.html');
