const https = require('https');

https.get('https://www.reviewshometrends.com/soul-manifestation-review?preview=5755980a704eb723e99e9e6b9cca15ae', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = [];
    while ((match = imgRegex.exec(data)) !== null) {
      images.push(match[1]);
    }
    console.log(JSON.stringify(images, null, 2));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
