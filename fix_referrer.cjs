const fs = require('fs');
const path = require('path');

function fixReferrer(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixReferrer(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<img') && !content.includes('referrerPolicy="no-referrer"')) {
        content = content.replace(/<img\s/g, '<img referrerPolicy="no-referrer" ');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

fixReferrer('src');
console.log('Done fixing referrerPolicy');
