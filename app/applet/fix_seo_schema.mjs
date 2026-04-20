import fs from 'fs';

let content = fs.readFileSync('src/components/SEO.tsx', 'utf8');

const targetStr = `        "itemReviewed": {
          "@type": "Product",
          "name": itemName,
          "image": absoluteImageUrl,`;

const replacementStr = `        "itemReviewed": {
          "@type": "Product",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0"
          },
          "name": itemName,
          "image": absoluteImageUrl,`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync('src/components/SEO.tsx', content);
  console.log("SEO.tsx updated successfully!");
} else {
  console.log("Could not find the target string in SEO.tsx");
}
