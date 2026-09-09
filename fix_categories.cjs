const fs = require('fs');
const path = require('path');

// 1. Fix Header.tsx
const headerPath = path.join(__dirname, 'src', 'components', 'Header.tsx');
let headerContent = fs.readFileSync(headerPath, 'utf8');

headerContent = headerContent.replace(
  /{?\['Health Reviews', 'Relationship Reviews', 'Self-Help Reviews', 'Spiritual Reviews'\].map\(\(catName\) => {/g,
  `{categories.map((category) => {`
);

headerContent = headerContent.replace(
  /const category = categories.find\(c => c.name === catName\);\s*if \(\!category\) return null;/g,
  ``
);

fs.writeFileSync(headerPath, headerContent);
console.log('Header.tsx updated!');

// 2. Fix Home.tsx
const homePath = path.join(__dirname, 'src', 'pages', 'Home.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

homeContent = homeContent.replace(
  /{categories.slice\(0, 4\).map/g,
  `{categories.map`
);

fs.writeFileSync(homePath, homeContent);
console.log('Home.tsx updated!');

