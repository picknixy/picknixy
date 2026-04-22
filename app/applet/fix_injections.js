const fs = require('fs');

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// The string we want to find inside the escaped content:
// \"offers\": {\"@type\": \"Offer\", \"priceCurrency\": \"USD\", \"price\": \"0\"}

const searchStr = '\\"offers\\": {\\"@type\\": \\"Offer\\", \\"priceCurrency\\": \\"USD\\", \\"price\\": \\"0\\"}';

const replaceStr = '\\"offers\\": { \\"@type\\": \\"Offer\\", \\"priceCurrency\\": \\"USD\\", \\"price\\": \\"0\\", \\"availability\\": \\"https://schema.org/InStock\\", \\"hasMerchantReturnPolicy\\": { \\"@type\\": \\"MerchantReturnPolicy\\", \\"applicableCountry\\": \\"US\\", \\"returnPolicyCategory\\": \\"https://schema.org/MerchantReturnFiniteReturnWindow\\", \\"merchantReturnDays\\": 60, \\"returnMethod\\": \\"https://schema.org/ReturnByMail\\", \\"returnFees\\": \\"https://schema.org/FreeReturn\\" }, \\"shippingDetails\\": { \\"@type\\": \\"OfferShippingDetails\\", \\"shippingRate\\": { \\"@type\\": \\"MonetaryAmount\\", \\"value\\": \\"0\\", \\"currency\\": \\"USD\\" }, \\"deliveryTime\\": { \\"@type\\": \\"ShippingDeliveryTime\\", \\"handlingTime\\": { \\"@type\\": \\"QuantitativeValue\\", \\"minValue\\": 0, \\"maxValue\\": 1, \\"unitCode\\": \\"d\\" }, \\"transitTime\\": { \\"@type\\": \\"QuantitativeValue\\", \\"minValue\\": 1, \\"maxValue\\": 5, \\"unitCode\\": \\"d\\" } }, \\"shippingDestination\\": { \\"@type\\": \\"DefinedRegion\\", \\"addressCountry\\": \\"US\\" } } }, \\"brand\\": { \\"@type\\": \\"Brand\\", \\"name\\": \\"Picknixy\\" }';

if (content.includes(searchStr)) {
    let matches = content.match(new RegExp(searchStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
    console.log(`Found ${matches ? matches.length : 0} instances of the target string.`);

    content = content.replace(new RegExp(searchStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replaceStr);
    fs.writeFileSync('src/data/mockData.ts', content);
    console.log("Successfully replaced missing merchant listing fields inside HTML content strings.");
} else {
    console.log("Could not find the target string.");
}
