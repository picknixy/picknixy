const fs = require('fs');

function extractAllImages(filename) {
  const html = fs.readFileSync(filename, 'utf8');
  
  console.log(`--- ${filename} ---`);
  
  // Find all img tags
  const imgRegex = /<img[^>]+src=['"]([^'"]+)['"][^>]*>/gi;
  let match;
  console.log("IMG tags:");
  while ((match = imgRegex.exec(html)) !== null) {
    console.log(match[1]);
  }
  
  // Find all background-image urls
  const bgRegex = /background-image:\s*url\(['"]?([^'"\)]+)['"]?\)/gi;
  console.log("\nBackground images:");
  while ((match = bgRegex.exec(html)) !== null) {
    console.log(match[1]);
  }
  
  // Find all elements with a style attribute containing a URL
  const styleUrlRegex = /style=['"][^'"]*url\(['"]?([^'"\)]+)['"]?\)[^'"]*['"]/gi;
  console.log("\nStyle URLs:");
  while ((match = styleUrlRegex.exec(html)) !== null) {
    console.log(match[1]);
  }
}

extractAllImages('aqua.html');
extractAllImages('flat.html');
