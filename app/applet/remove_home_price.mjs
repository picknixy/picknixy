import fs from 'fs';

const p = './src/pages/Home.tsx';
let content = fs.readFileSync(p, 'utf8');

const target1 = `<a href={featuredReview.affiliateLink} className="text-[#2997ff] hover:underline flex items-center">
              Check price <span className="ml-1 text-sm">›</span>
            </a>`;

const target2 = `<a href={secondReview.affiliateLink} className="text-[#2997ff] hover:underline flex items-center">
              Check price <span className="ml-1 text-sm">›</span>
            </a>`;

const target3 = `<a href={item.affiliateLink} className="text-[#2997ff] hover:underline flex items-center">
                    Check price <span className="ml-1 text-sm">›</span>
                  </a>`;

content = content.replace(target1, '');
content = content.replace(target2, '');
content = content.replace(target3, '');
content = content.replace(target3, ''); // Just in case it's in multiple items or there's another

fs.writeFileSync(p, content);
console.log("Done");
