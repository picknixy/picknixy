const fs = require('fs');
const path = require('path');
const file = 'src/data/posts/index.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace('export const reviews = [', 'export const reviews: any[] = [');
fs.writeFileSync(file, content);
