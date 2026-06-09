const https = require('https');
const fs = require('fs');
const url = 'https://getphytomemone.com/includes/img/banner-img.png';
const file = fs.createWriteStream("public/Phytomem-One-review.png");

https.get(url, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close(() => {
        console.log('Downloaded image as public/Phytomem-One-review.png');
    });
  });
}).on('error', function(err) {
  fs.unlink("public/Phytomem-One-review.png");
  console.error("Error: " + err.message);
});
