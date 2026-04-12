const fs = require('fs');
const html = fs.readFileSync('water_smart_box.html', 'utf8');

const imgRegex = /<img[^>]+src="([^">]+)"/g;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}
console.log("Images:", images);

// Extract text from paragraphs and headings
const textRegex = /<(h[1-6]|p)[^>]*>(.*?)<\/\1>/gs;
let textMatch;
const text = [];
while ((textMatch = textRegex.exec(html)) !== null) {
  text.push(textMatch[2].replace(/<[^>]+>/g, '').trim());
}
console.log("Text:", text.join('\n\n'));
