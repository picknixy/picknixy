const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/15368427/695e72fc79f48_CompletePureReikiMasteryhomecertificationcoursefeaturingOwenColemans3-stephealingsysteminstructionalmanualsandReikiMastercertificate_1.43_1.png',
    filename: 'pure-reiki-mastery.png'
  },
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/15368427/6954f7815f489_DigitalwealthbuildingcoursebundlefeaturingDubai-Wealth-SecretTheMillionaireHabitRockefellerMoneyPyramidandTheInfluenceCodemodules._1.43_1.png',
    filename: 'dubai-wealth-secret.png'
  },
  {
    url: 'https://d1yei2z3i6k35z.cloudfront.net/15368427/6954fdd87898b_divine-wealth-path-reading-review_1.43_1.png',
    filename: 'divine-wealth-path.png'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

async function downloadAll() {
  for (const img of images) {
    const dest = path.join(__dirname, 'public', 'images', img.filename);
    try {
      console.log(`Downloading ${img.filename}...`);
      await downloadImage(img.url, dest);
      console.log(`Successfully downloaded ${img.filename}`);
    } catch (err) {
      console.error(`Failed to download ${img.filename}:`, err.message);
    }
  }
}

downloadAll();
