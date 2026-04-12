const https = require('https');
const fs = require('fs');

const url = 'https://www.reviewshometrends.com/water-smart-box-review-best-diy-atmospheric-water?preview=accc28a95ed43e9802337ea839b13b75';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('water_smart_box.html', data);
    console.log('Saved to water_smart_box.html');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
