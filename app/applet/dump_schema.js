const fs = require('fs');
const code = fs.readFileSync('src/data/mockData.ts', 'utf8');

// We want to extract the schema chunks for the specific slugs
const reviewsStr = code.substring(code.indexOf('export const reviews: any[] = ['));
// Let's just output the whole thing or a script to parse it

const output = [];
const reviews = require('./src/data/mockData.js') || null; 
// Wait, we can't require TS directly like this easily. Let's write a small esbuild or vite-node script to dump the schemas.
