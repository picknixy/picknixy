const fs = require('fs');
const html = fs.readFileSync('flat.html', 'utf8');
const urls = html.match(/url\(['"]?([^'"\)]+)['"]?\)/gi);
console.log(urls ? urls.slice(0, 10) : 'No URLs found');
