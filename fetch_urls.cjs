const https = require('https');

const urls = [
  'https://im.ge/i/vitamotion-review-2026-e4Ba68',
  'https://im.ge/i/save-the-marriage-system-review-unhappy-couple-on-couch-dealing-with-marriage-pr-e4B7Vh',
  'https://im.ge/i/water-smart-box-review-e4BIrM',
  'https://im.ge/i/prostadine-review-showing-prostate-support-supplement-bottle-with-natural-ingred-e4BL0Y',
  'https://im.ge/i/red-boost-review-image-showing-an-older-couple-relaxing-in-bed-alongside-the-red-e4BUgD',
  'https://im.ge/i/digital-product-box-for-your-past-life-reading-featuring-a-man-standing-before-a-e4Bhe4',
  'https://im.ge/i/complete-pure-reiki-mastery-home-certification-course-featuring-owen-colemans-3--e4B0DC'
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
