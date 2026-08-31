const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'data', 'posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let indexCode = '';
let arrayCode = 'export const reviews = [\n';

files.forEach(file => {
  const name = file.replace('.ts', '').replace(/-/g, '_');
  indexCode += `import { ${name} } from './${file.replace('.ts', '')}';\n`;
  arrayCode += `  ${name},\n`;
});

arrayCode += '];\n';

fs.writeFileSync(path.join(postsDir, 'index.ts'), indexCode + '\n' + arrayCode);
