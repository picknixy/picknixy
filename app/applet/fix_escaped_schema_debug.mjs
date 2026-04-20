import fs from 'fs';

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');
let idx = content.indexOf('itemReviewed');
while (idx !== -1) {
    let snippet = content.slice(Math.max(0, idx - 10), idx + 100);
    console.log("----");
    console.log(JSON.stringify(snippet));
    idx = content.indexOf('itemReviewed', idx + 1);
}
