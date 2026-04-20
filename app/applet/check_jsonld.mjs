import fs from 'fs';

const content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// We'll extract all <script type="application/ld+json"> blocks and JSON.parse them to ensure they're valid.
const regex = /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g;

let match;
let hasError = false;
while ((match = regex.exec(content)) !== null) {
  const jsonStr = match[1].trim();
  try {
    JSON.parse(jsonStr);
  } catch (e) {
    hasError = true;
    console.error("Invalid JSON found:");
    console.error(e.message);
    const snippet = jsonStr.substring(0, 100).replace(/\n/g, "\\n");
    console.error("Snippet:", snippet);
    console.error("-----");
  }
}

if (!hasError) {
  console.log("All JSON-LD blocks are valid!");
}
