const fs = require('fs');
const path = require('path');

// 1. Remove ?v=2 from mockData.ts
let mockData = fs.readFileSync('src/data/mockData.ts', 'utf8');
mockData = mockData.replace(/\?v=2/g, '');
fs.writeFileSync('src/data/mockData.ts', mockData);

// 2. Fix onError in all files
function fixOnError(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixOnError(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('onError={(e) => {')) {
        content = content.replace(/onError=\{\(e\) => \{\s*const target = e\.target as HTMLImageElement;\s*(target\.src = '[^']+';)\s*\}\}/g, 
          'onError={(e) => {\n              const target = e.target as HTMLImageElement;\n              target.onerror = null;\n              $1\n            }}');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

fixOnError('src');
console.log('Done fixing');
