const https = require('https');

const url = 'https://im.ge/i/primebiome-eBMgfP';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let match = data.match(/<link rel="image_src" href="([^"]+)"/);
    if (match) console.log(match[1]);
    else {
      let match2 = data.match(/<meta property="og:image" content="([^"]+)"/);
      if (match2) console.log(match2[1]);
      else console.log('NOT FOUND');
    }
  });
}).on('error', () => console.log('ERROR'));
