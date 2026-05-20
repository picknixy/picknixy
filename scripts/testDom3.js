import { spawn } from 'child_process';
import puppeteer from 'puppeteer';

// don't use -s to avoid rewrites
const server = spawn('npx', ['serve', 'dist', '-l', '3000']);

server.stdout.on('data', async (data) => {
    if (data.toString().includes('Accepting connections')) {
        try {
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });
            const page = await browser.newPage();
            // hit the actual folder where index.html is
            await page.goto('http://localhost:3000/ketowater-review/', { waitUntil: 'networkidle0' });
            const html = await page.content();
            
            const titles = html.match(/<title[^>]*>.*?<\/title>/g);
            console.log("Titles:", titles);
            
            const descs = html.match(/<meta[^>]*name="description"[^>]*>/g);
            console.log("Descriptions:", descs);

            const cans = html.match(/<link[^>]*rel="canonical"[^>]*>/g);
            console.log("Canonicals:", cans);

            await browser.close();
        } catch (e) {
            console.error(e);
        } finally {
            server.kill();
            process.exit(0);
        }
    }
});
