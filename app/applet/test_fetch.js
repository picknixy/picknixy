const { chromium } = require('playwright-chromium');
(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.picknixy.com/', {waitUntil: 'networkidle'});
    const imageSrcs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).map(img => img.src);
    });
    console.log(imageSrcs);
    await browser.close();
  } catch (e) {
    console.error(e);
  }
})();
