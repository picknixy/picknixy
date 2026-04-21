import fs from 'fs';

let content = fs.readFileSync('src/components/SEO.tsx', 'utf8');

const targetContent = `      schema = {
        ...baseSchema,
        "itemReviewed": {
          "@type": "Product",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0"
          },
          "name": itemName,
          "image": absoluteImageUrl,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": ratingValue,
            "reviewCount": reviewCount
          }
        },
        "reviewRating": {`;

const replacementContent = `      schema = {
        ...baseSchema,
        "itemReviewed": {
          "@type": "Product",
          "brand": {
            "@type": "Brand",
            "name": siteName
          },
          "description": description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "0",
            "availability": "https://schema.org/InStock",
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "US",
              "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
            },
            "shippingDetails": {
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
            }
          },
          "name": itemName,
          "image": absoluteImageUrl,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": ratingValue,
            "reviewCount": reviewCount
          }
        },
        "reviewRating": {`;

content = content.replace(targetContent, replacementContent);
fs.writeFileSync('src/components/SEO.tsx', content);
console.log('Fixed SEO.tsx!');
