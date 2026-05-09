const fs = require('fs');
const filePath = 'src/data/mockData.ts';
let code = fs.readFileSync(filePath, 'utf-8');
code = code.split('https://moneytreeoracle.com/?hopId=39812f4c-f798-4052-878e-cca2517efc88').join('https://moneytreeoracle.com/images/money-tree.png');
fs.writeFileSync(filePath, code);
console.log('Replaced images');
