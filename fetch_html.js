import https from 'https';
import fs from 'fs';

https.get('https://www.reviewshometrends.com/soul-manifestation-review?preview=5755980a704eb723e99e9e6b9cca15ae', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('output.html', data);
    console.log('Saved to output.html');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
