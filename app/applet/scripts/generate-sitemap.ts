import { reviews, categories, blogPosts } from '../src/data/mockData';
import * as fs from 'fs';

const BASE_URL = 'https://www.picknixy.com';
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.9', changefreq: 'weekly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' },
    { url: '/disclaimer', priority: '0.5', changefreq: 'yearly' },
    { url: '/search', priority: '0.7', changefreq: 'weekly' }
];

staticPages.forEach(page => {
    xml += '  <url>\n    <loc>' + BASE_URL + page.url + '</loc>\n    <changefreq>' + page.changefreq + '</changefreq>\n    <priority>' + page.priority + '</priority>\n  </url>\n';
});

categories.forEach(cat => {
    xml += '  <url>\n    <loc>' + BASE_URL + '/category/' + cat.slug + '</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n';
});

reviews.forEach(review => {
    const d = review.date ? new Date(review.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
    xml += '  <url>\n    <loc>' + BASE_URL + '/review/' + review.slug + '</loc>\n    <lastmod>' + d + '</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n';
});

if (blogPosts && blogPosts.length > 0) {
    blogPosts.forEach(post => {
        const d = post.date ? new Date(post.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
        xml += '  <url>\n    <loc>' + BASE_URL + '/blog/' + post.slug + '</loc>\n    <lastmod>' + d + '</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n';
    });
}

xml += '</urlset>';

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Successfully generated public/sitemap.xml with ' + reviews.length + ' reviews.');
