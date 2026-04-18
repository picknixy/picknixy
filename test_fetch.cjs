const https = require('https');

https.get('https://www.picknixy.com/images/PrimeBiome.png', (res) => {
  console.log('PrimeBiome.png Status:', res.statusCode);
  console.log('Headers:', res.headers);
});

https.get('https://www.picknixy.com/images/fallback.svg', (res) => {
  console.log('fallback.svg Status:', res.statusCode);
});
