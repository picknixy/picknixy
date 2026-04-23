const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const replacement = `"id": "the-brain-song-review",
    "slug": "the-brain-song-review",
    "title": "The Brain Song Review 2026: Enhance Mental Clarity With Sound Frequency",
    "seoTitle": "The Brain Song Audio Review",
    "seoDescription": "Read our unbiased review of The Brain Song audio. Discover how sound frequency therapy supports focus, stress relief, and overall mental wellness.",`;

const searchRegex = /"id":\s*"the-brain-song-review"(?:[^}]*?)"title":\s*"The Brain Song Review 2026: Enhance Mental Clarity With Sound Frequency",/g;

content = content.replace(searchRegex, replacement);
fs.writeFileSync('src/data/mockData.ts', content);
console.log('Fixed SEO properties for the brain song');
