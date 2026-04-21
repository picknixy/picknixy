import fs from 'fs';

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;

let match;
let replacements = [];

while ((match = regex.exec(content)) !== null) {
  const originalJsonStr = match[1];
  try {
    const rawJsonStr = originalJsonStr.trim();
    let data = JSON.parse(rawJsonStr);
    let modified = false;

    // Check if it's a Review and has itemReviewed
    if (data["@type"] === "Review" && data.itemReviewed && data.itemReviewed["@type"] === "Product") {
      let product = data.itemReviewed;
      
      // Ensure description exists
      if (!product.description) {
        product.description = \`A comprehensive review of \${product.name}\`;
        modified = true;
      }

      // Ensure brand exists
      if (!product.brand) {
        product.brand = {
          "@type": "Brand",
          "name": "Picknixy Picks"
        };
        modified = true;
      }

      // Update Offers
      if (!product.offers) {
        product.offers = {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "0"
        };
      }
      
      let offer = product.offers;
      
      if (!offer.availability) {
        offer.availability = "https://schema.org/InStock";
        modified = true;
      }
      if (!offer.hasMerchantReturnPolicy) {
        offer.hasMerchantReturnPolicy = {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "US",
          "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
        };
        modified = true;
      }
      if (!offer.shippingDetails) {
        offer.shippingDetails = {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0",
            "currency": "USD"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "US"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": { "@type": "QuantitativeValue", "minValue": "0", "maxValue": "1", "unitCode": "d" },
            "transitTime": { "@type": "QuantitativeValue", "minValue": "1", "maxValue": "3", "unitCode": "d" }
          }
        };
        modified = true;
      }
    }

    if (modified) {
      const newJsonStr = "\\n      " + JSON.stringify(data, null, 2).replace(/\\n/g, "\\n      ") + "\\n      ";
      replacements.push({
        oldBlock: \`<script type="application/ld+json">\${originalJsonStr}</script>\`,
        newBlock: \`<script type="application/ld+json">\${newJsonStr}</script>\`
      });
    }

  } catch (e) {
    console.error("Could not parse JSON:", e.message);
  }
}

let modifiedContent = content;
for (const rep of replacements) {
  modifiedContent = modifiedContent.replace(rep.oldBlock, rep.newBlock);
}

fs.writeFileSync('src/data/mockData.ts', modifiedContent);
console.log(\`Updated \${replacements.length} JSON-LD blocks in mockData.ts\`);
