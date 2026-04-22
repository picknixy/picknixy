import { reviews } from './src/data/mockData.ts';

const slugsToCheck = [
  'prime-biome-review-2026',
  'water-smart-box-review-diy-atmospheric-water-generator',
  'his-secret-obsession-review'
];

slugsToCheck.forEach(slug => {
  const review = reviews.find(r => r.slug === slug);
  if (review && review.content) {
    console.log(`\n=== Checking JSON schemas inside content of ${slug} ===`);
    const match = review.content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
    if(match) {
        match.forEach(m => {
            const jsonStr = m.replace(/<script type="application\/ld\+json">|<\/script>/g, '');
            try {
                const parsed = JSON.parse(jsonStr);
                console.log(`Valid JSON Schema parsed for ${parsed['@type']}`);
                if (parsed['@type'] === 'Review') {
                    console.log('Offers:', parsed.itemReviewed.offers ? 'Yes' : 'No');
                    console.log('Brand:', parsed.itemReviewed.brand ? 'Yes' : 'No');
                }
            } catch (e) {
                console.error(`Invalid JSON in ${slug}!!!`);
                console.error(e.message);
                console.log(jsonStr);
            }
        });
    }
  } else {
    console.log(`\nReview ${slug} not found or has no content!`);
  }
});
