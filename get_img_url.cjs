const https = require('https');
https.get('https://im.ge/i/primebiome-e44YKM', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<link rel="image_src" href="([^"]+)"/);
    if (match) console.log("FOUND_URL: " + match[1]);
    else {
      const match2 = data.match(/<meta property="og:image" content="([^"]+)"/);
      if (match2) console.log("FOUND_URL: " + match2[1]);
      else {
        // Try another regex to grab the image URL
        const match3 = data.match(/src="([^"]+primebiome[^"]+)"/i);
        console.log("FOUND_URL3: " + (match3 ? match3[1] : 'Not Found'));
      }
    }
  });
});
