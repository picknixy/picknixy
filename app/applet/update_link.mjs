import fs from 'fs';

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const oldLink = 'https://hissecretobsession.com/love/obsession/?hopId=4d9d58e1-4706-4436-b663-f371569a91b2&text=1&vtid=lp0video1text';
const newLink = 'https://b3cc08gb34z7h26atj42rpmg63.hop.clickbank.net';

content = content.replace(oldLink, newLink);

fs.writeFileSync('src/data/mockData.ts', content);
console.log("Updated affiliate link!");
