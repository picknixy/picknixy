import { spawn } from 'child_process';
import puppeteer from 'puppeteer';

const server = spawn('npx', ['serve', 'dist', '-l', '3000']);

server.stdout.on('data', async (data) => {
    if (data.toString().includes('Accepting connections')) {
        try {
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });
            const page = await browser.newPage();
            await page.goto('http://localhost:3000/femicore-review-bladder-health/', { waitUntil: 'networkidle0' });
            
            const html = await page.content();
            
            const titles = html.match(/<title[^>]*>.*?<\/title>/g);
            console.log("Titles:", titles);
            
            // let's check schema
            const schema = html.match(/<script type="application\/ld\+json">.*?<\/script>/);
            console.log("Schema exists:", !!schema);

            await browser.close();
        } catch (e) {
            console.error(e);
        } finally {
            server.kill();
            process.exit(0);
        }
    }
});
