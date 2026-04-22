const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const oldOffers = `"offers": {"@type": "Offer", "priceCurrency": "USD", "price": "0"}`;

const newOffers = `"offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "0",
              "availability": "https://schema.org/InStock",
              "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "US",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "merchantReturnDays": 60,
                "returnMethod": "https://schema.org/ReturnByMail",
                "returnFees": "https://schema.org/FreeReturn"
              },
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "deliveryTime": {
                  "@type": "ShippingDeliveryTime",
                  "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "d" },
                  "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 5, "unitCode": "d" }
                },
                "shippingDestination": {
                  "@type": "DefinedRegion",
                  "addressCountry": "US"
                }
              }
            },
            "brand": { "@type": "Brand", "name": "Picknixy" }`;

// We also need to add brand. The regex will replace just the offers line. 
// Note that brand needs to be a sibling of offers. We added it to the end of the offers block string!

if (content.includes(oldOffers)) {
    content = content.replace(new RegExp(oldOffers.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newOffers);
    fs.writeFileSync('src/data/mockData.ts', content);
    console.log("Successfully replaced oldOffers with fully compliant Merchant Listing object.");
} else {
    console.log("Could not find oldOffers string.");
}
