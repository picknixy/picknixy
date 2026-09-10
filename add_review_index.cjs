const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'src', 'data', 'posts', 'index.ts');
let indexContent = fs.readFileSync(indexFile, 'utf8');

if (!indexContent.includes('apple-airpods-5-review')) {
  indexContent = "import { appleAirpods5Review } from './apple-airpods-5-review';\n" + indexContent;
  indexContent = indexContent.replace('export const reviews: any[] = [', 'export const reviews: any[] = [\n  appleAirpods5Review,');
  fs.writeFileSync(indexFile, indexContent);
  console.log('Added appleAirpods5Review to index.ts');
}
