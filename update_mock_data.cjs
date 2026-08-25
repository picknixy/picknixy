const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, 'src/data/mockData.ts');
let content = fs.readFileSync(file, 'utf8');

// Replace the image url
content = content.replace(
  /image: "https:\/\/d2h8hiv6zzm73v.cloudfront.net\/legacy\/vendors\/4ftfarm\/4ft-cb-image1786645460519.png",/g,
  `image: "/4-foot-farm-review.png",
    imageAlt: "4 Foot Farm Blueprint Review - Vertical Crisis Gardening",`
);

// We need to also replace it in the Schema Markup
content = content.replace(
  /"image": "https:\/\/d2h8hiv6zzm73v.cloudfront.net\/legacy\/vendors\/4ftfarm\/4ft-cb-image1786645460519.png"/g,
  `"image": "https://www.picknixy.com/4-foot-farm-review.png"`
);

fs.writeFileSync(file, content);
console.log("mockData updated");
