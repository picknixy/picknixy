import { reviews } from './src/data/mockData.ts';

const slugsToCheck = [
  'prime-biome-review-2026',
  'water-smart-box-review-diy-atmospheric-water-generator'
];

slugsToCheck.forEach(slug => {
  const review = reviews.find(r => r.slug === slug);
  if (review && review.schema) {
    console.log(`\n=== Schema for ${slug} ===\n`);
    review.schema.forEach((s, idx) => {
      console.log(`Schema ${idx}:`, s);
    });
  } else {
    console.log(`\nReview ${slug} not found or has no schema!`);
  }
});
