import fs from 'fs';

const p = './src/pages/Review.tsx';
let content = fs.readFileSync(p, 'utf8');

const target = `<div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0 text-center sm:text-left">
              <span className="block text-sm text-gray-500">Price</span>
              <span className="text-xl font-bold text-gray-900">{review.price}</span>
            </div>
            <a 
              href={review.affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Check Current Price <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>`;

content = content.replace(target, '');
fs.writeFileSync(p, content);
console.log("Done");
