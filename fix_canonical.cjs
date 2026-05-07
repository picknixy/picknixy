const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

pages.forEach(page => {
  const filePath = path.join(pagesDir, page);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (page === 'About.tsx') {
    content = content.replace(
      '<SEO \n        title="About Us" \n        description="Learn about Picknixy, our mission, and our team of expert reviewers."\n      />',
      '<SEO \n        title="About Us" \n        description="Learn about Picknixy, our mission, and our team of expert reviewers."\n        canonicalUrl="https://www.picknixy.com/about"\n      />'
    );
  } else if (page === 'Blog.tsx') {
      content = content.replace(
      '<SEO \n        title="Blog & Buying Guides" \n        description="Read our latest articles, buying guides, and \'best of\' lists to help you make informed decisions."\n      />',
      '<SEO \n        title="Blog & Buying Guides" \n        description="Read our latest articles, buying guides, and \'best of\' lists to help you make informed decisions."\n        canonicalUrl="https://www.picknixy.com/blog"\n      />'
    );
  } else if (page === 'Contact.tsx') {
    content = content.replace(
      '<SEO \n        title="Contact Us" \n        description="Get in touch with the Picknixy team for inquiries, feedback, or partnership opportunities."\n      />',
      '<SEO \n        title="Contact Us" \n        description="Get in touch with the Picknixy team for inquiries, feedback, or partnership opportunities."\n        canonicalUrl="https://www.picknixy.com/contact"\n      />'
    );
  } else if (page === 'Disclaimer.tsx') {
    content = content.replace(
      '<SEO title="Affiliate Disclaimer" description="Affiliate Disclaimer for Picknixy." />',
      '<SEO title="Affiliate Disclaimer" description="Affiliate Disclaimer for Picknixy." canonicalUrl="https://www.picknixy.com/disclaimer" />'
    );
  } else if (page === 'PrivacyPolicy.tsx') {
    content = content.replace(
      '<SEO title="Privacy Policy" description="Privacy Policy for Picknixy." />',
      '<SEO title="Privacy Policy" description="Privacy Policy for Picknixy." canonicalUrl="https://www.picknixy.com/privacy-policy" />'
    );
  } else if (page === 'Terms.tsx') {
    content = content.replace(
      '<SEO title="Terms & Conditions" description="Terms and Conditions for Picknixy." />',
      '<SEO title="Terms & Conditions" description="Terms and Conditions for Picknixy." canonicalUrl="https://www.picknixy.com/terms" />'
    );
  }
  
  fs.writeFileSync(filePath, content);
});

console.log('Fixed canonical tags dynamically.');
