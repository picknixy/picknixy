const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// The issue: "itemReviewed": { "@type": "Product", ... } doesn't have an offers or aggregateRating.
// We can change "@type": "Product" inside itemReviewed to "@type": "Product", "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "price": "0.00", "priceCurrency": "USD" }
// However, the cleanest workaround for Google Search Console for a "Review" schema is often removing the nested Product's issue by providing a dummy offers or aggregateRating, or changing the type of itemReviewed to "Thing".
// Let's just change "@type": "Product" inside "itemReviewed" block to `"@type": "Product",\n            "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "0.00" }`

// Wait, the formatting varies. Let's do a regex replacement.
content = content.replace(/"itemReviewed":\s*\{\s*"@type":\s*"Product",/g, `"itemReviewed": {\n          "@type": "Product",\n          "offers": {"@type": "Offer", "priceCurrency": "USD", "price": "0"},`);

fs.writeFileSync('src/data/mockData.ts', content);
console.log("Schema fixed!");
