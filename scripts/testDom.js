import fs from 'fs';
import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    try {
        await page.goto('http://localhost:3000/ketowater-review', { waitUntil: 'networkidle0' });
        const html = await page.content();
        
        const titleCount = (html.match(/<title/g) || []).length;
        const descCount = (html.match(/name="description"/g) || []).length;
        const canCount = (html.match(/rel="canonical"/g) || []).length;
        
        console.log(`Title count: ${titleCount}`);
        console.log(`Desc count: ${descCount}`);
        console.log(`Canon count: ${canCount}`);
        
        // Print all titles
        const titles = html.match(/<title[^>]*>.*?<\/title>/g);
        console.log("Titles:", titles);
        
        // Print all descriptions
        const descs = html.match(/<meta[^>]*name="description"[^>]*>/g);
        console.log("Descriptions:", descs);

        const cans = html.match(/<link[^>]*rel="canonical"[^>]*>/g);
        console.log("Canonicals:", cans);

    } catch (e) {
        console.error(e);
    } finally {
        await browser.close();
    }
})();
