const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// 1. Fix the Schema Markup image URLs for Prostadine and Red Boost
content = content.replace(/"headline": "Prostadine Review 2026: Does This Prostate Health Supplement Really Work\?",\s*"image": "\/water-smart-box\.webp"/g, '"headline": "Prostadine Review 2026: Does This Prostate Health Supplement Really Work?",\n        "image": "/prostadine.webp"');
content = content.replace(/"name": "Prostadine",\s*"image": "\/water-smart-box\.webp"/g, '"name": "Prostadine",\n            "image": "/prostadine.webp"');

content = content.replace(/"headline": "Red Boost Review 2026: The Ultimate Smooth Muscle Tonic for Men\?",\s*"image": "\/water-smart-box\.webp"/g, '"headline": "Red Boost Review 2026: The Ultimate Smooth Muscle Tonic for Men?",\n        "image": "/red-boost.webp"');
content = content.replace(/"name": "Red Boost",\s*"image": "\/water-smart-box\.webp"/g, '"name": "Red Boost",\n            "image": "/red-boost.webp"');

// 2. Remove the <img> tags from the content
content = content.replace(/<img src="\/vitamotion-review\.webp"[^>]+>/g, '');
content = content.replace(/<img src="\/quantum-wave-logo\.webp"[^>]+>/g, '');
content = content.replace(/<img src=\\"\/water-smart-box\.webp\\"[^>]+>/g, '');

// 3. Add cache buster to the main image properties
content = content.replace(/image: "\/vitamotion-review\.webp"/g, 'image: "/vitamotion-review.webp?v=2"');
content = content.replace(/image: "\/quantum-wave-logo\.webp"/g, 'image: "/quantum-wave-logo.webp?v=2"');
content = content.replace(/image: "\/prostadine\.webp"/g, 'image: "/prostadine.webp?v=2"');
content = content.replace(/image: "\/water-smart-box\.webp"/g, 'image: "/water-smart-box.webp?v=2"');
content = content.replace(/image: "\/red-boost\.webp"/g, 'image: "/red-boost.webp?v=2"');

fs.writeFileSync('src/data/mockData.ts', content);
console.log('Updated mockData.ts');
