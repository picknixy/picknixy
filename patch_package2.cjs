const fs = require('fs');
const path = require('path');
const p = path.resolve(__dirname, 'package.json');
const pkg = JSON.parse(fs.readFileSync(p, 'utf8'));

pkg.dependencies = pkg.dependencies || {};
delete pkg.dependencies['allow-scripts'];

pkg.dependencies['esbuild'] = "^0.25.0"; 

pkg.devDependencies = pkg.devDependencies || {};
pkg.devDependencies['@esbuild/linux-x64'] = "^0.25.0";

// add allowScripts
pkg.allowScripts = {
  "@firebase/util": true,
  "esbuild": true,
  "protobufjs": true,
  "puppeteer": false
};

fs.writeFileSync(p, JSON.stringify(pkg, null, 2));
console.log("Added allowScripts to package.json");
