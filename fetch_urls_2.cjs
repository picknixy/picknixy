const https = require('https');

const urls = [
  'https://im.ge/i/digital-wealth-building-course-bundle-featuring-dubai-wealth-secret-the-milliona-eBM3JC',
  'https://im.ge/i/quantum-wave-eBMxE4',
  'https://im.ge/i/divine-wealth-path-reading-review-eBMbdq'
];

async function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let match = data.match(/<link rel="image_src" href="([^"]+)"/);
        if (match) resolve({ url, image: match[1] });
        else {
          let match2 = data.match(/<meta property="og:image" content="([^"]+)"/);
          if (match2) resolve({ url, image: match2[1] });
          else resolve({ url, image: 'NOT FOUND' });
        }
      });
    }).on('error', () => resolve({ url, image: 'ERROR' }));
  });
}

(async () => {
  for (const url of urls) {
    const res = await fetchUrl(url);
    console.log(res.image);
  }
})();
