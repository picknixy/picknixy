const https = require('https');

https.get('https://www.reviewshometrends.com/water-smart-box-review-best-diy-atmospheric-water?preview=accc28a95ed43e9802337ea839b13b75', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const ogImageMatch = data.match(/<meta property="og:image" content="([^"]+)"/);
    if (ogImageMatch) {
      console.log("OG Image:", ogImageMatch[1]);
    }
    
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = [];
    while ((match = imgRegex.exec(data)) !== null) {
      images.push(match[1]);
    }
    console.log("All Images:", images);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
