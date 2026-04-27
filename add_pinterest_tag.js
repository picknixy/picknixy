const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace('<head>', '<head>\n    <meta name="p:domain_verify" content="05df2c556e1431817f7c4e1f5bc0229e"/>');
fs.writeFileSync('index.html', content);
console.log('Successfully added Pinterest meta tag.');
