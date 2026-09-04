const fs = require('fs');
const path = require('path');
const postsDir = path.join(__dirname, 'src', 'data', 'posts');

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let indexCode = '';
let arrayCode = 'export const reviews: any[] = [\n';

files.forEach(file => {
  let name = file.replace('.ts', '').replace(/-/g, '_');
  if (/^\d/.test(name)) name = 'review_' + name;
  
  // also fix the file itself
  let content = fs.readFileSync(path.join(postsDir, file), 'utf8');
  content = content.replace(/export const \d[\w_]+ = {/, \`export const \${name} = {\`);
  fs.writeFileSync(path.join(postsDir, file), content);
  
  indexCode += \`import { \${name} } from './\${file.replace('.ts', '')}';\n\`;
  arrayCode += \`  \${name},\n\`;
});

arrayCode += '];\n';

fs.writeFileSync(path.join(postsDir, 'index.ts'), indexCode + '\n' + arrayCode);
