const fs = require('fs');
const html = fs.readFileSync('aqua.html', 'utf8');
const imgMatch = html.match(/<img[^>]+src=['"]([^'"]+)['"]/gi);
console.log(imgMatch);
