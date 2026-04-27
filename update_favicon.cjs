const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<link rel="icon" type="image\/svg\+xml" href="data:image\/svg\+xml[^>]+>/, '<link rel="icon" type="image/svg+xml" href="/favicon.svg" />');
fs.writeFileSync('index.html', html);
console.log('Updated index.html to use /favicon.svg');
