const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const regex = /"id": "forbrain-song-review",/;
content = content.replace(regex, '"id": "forbrain-song-review",\n    "slug": "forbrain-song-review",');

fs.writeFileSync('src/data/mockData.ts', content);
console.log("Added slug to Forbrain review");
