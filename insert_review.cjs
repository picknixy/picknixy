const fs = require('fs');
const newReview = JSON.parse(fs.readFileSync('new_review.json', 'utf8'));

let mockData = fs.readFileSync('src/data/mockData.ts', 'utf8');

const reviewsStart = mockData.indexOf('export const reviews = [');

if (reviewsStart !== -1) {
  const insertPos = reviewsStart + 'export const reviews = ['.length;
  
  let reviewStr = '\n  {\n';
  reviewStr += '    id: ' + JSON.stringify(newReview.id) + ',\n';
  reviewStr += '    title: ' + JSON.stringify(newReview.title) + ',\n';
  reviewStr += '    slug: ' + JSON.stringify(newReview.slug) + ',\n';
  reviewStr += '    category: ' + JSON.stringify(newReview.category) + ',\n';
  reviewStr += '    author: ' + JSON.stringify(newReview.author) + ',\n';
  reviewStr += '    date: ' + JSON.stringify(newReview.date) + ',\n';
  reviewStr += '    rating: ' + newReview.rating + ',\n';
  reviewStr += '    excerpt: ' + JSON.stringify(newReview.excerpt) + ',\n';
  reviewStr += '    image: ' + JSON.stringify(newReview.image) + ',\n';
  reviewStr += '    pros: ' + JSON.stringify(newReview.pros) + ',\n';
  reviewStr += '    cons: ' + JSON.stringify(newReview.cons) + ',\n';
  reviewStr += '    content: `\n' + newReview.content.replace(/`/g, '\\`') + '\n`,\n';
  reviewStr += '    affiliateLink: ' + JSON.stringify(newReview.affiliateLink) + ',\n';
  reviewStr += '    price: ' + JSON.stringify(newReview.price) + '\n';
  reviewStr += '  },';

  mockData = mockData.slice(0, insertPos) + reviewStr + mockData.slice(insertPos);
  fs.writeFileSync('src/data/mockData.ts', mockData);
  console.log('Inserted successfully');
}
