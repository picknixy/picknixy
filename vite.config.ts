import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

const sitemapPlugin = () => {
  return {
    name: 'generate-sitemap',
    buildStart() {
      try {
        const srcPath = path.resolve(__dirname, 'src/data/mockData.ts');
        if (fs.existsSync(srcPath)) {
          const content = fs.readFileSync(srcPath, 'utf8');
          const reviews = [];
          const slugRegex = /"slug":\s*"([^"]+)"/g;
          let match;
          while ((match = slugRegex.exec(content)) !== null) {
              if (match[1] && !reviews.includes(match[1])) {
                  reviews.push(match[1]);
              }
          }
          const categories = [
              "health-fitness", "diets-weight-loss", "dental-health", "exercise-fitness",
              "mens-health", "remedies", "womens-health", "beauty", "mental-health",
              "self-help", "survival", "motivational-transformational", "spiritual",
              "astrology", "psychics", "tarot", "relationships-dating", "mens-dating",
              "womens-dating", "finance-business", "online-business"
          ];
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
              { url: '/search', priority: '0.7', changefreq: 'weekly' },
          ];
          staticPages.forEach(page => {
              xml += '  <url>\n    <loc>' + BASE_URL + page.url + '</loc>\n    <changefreq>' + page.changefreq + '</changefreq>\n    <priority>' + page.priority + '</priority>\n  </url>\n';
          });
          categories.forEach(slug => {
              xml += '  <url>\n    <loc>' + BASE_URL + '/category/' + slug + '</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n';
          });
          const today = new Date().toISOString().split('T')[0];
          reviews.forEach(slug => {
              xml += '  <url>\n    <loc>' + BASE_URL + '/' + slug + '</loc>\n    <lastmod>' + today + '</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n';
          });
          xml += '</urlset>';
          fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), xml);
          console.log('Sitemap built dynamically with ' + reviews.length + ' reviews.');
        }
      } catch (err) {
        console.error('Failed to build sitemap: ', err);
      }
    }
  };
};

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), sitemapPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
