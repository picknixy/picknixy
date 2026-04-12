const fs = require('fs');

function extractInfo(filename) {
  const html = fs.readFileSync(filename, 'utf8');
  
  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : 'No title';
  
  // Extract main image (look for og:image or just the first big image)
  const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/i);
  let image = ogImageMatch ? ogImageMatch[1] : '';
  
  if (!image) {
    const bgMatch = html.match(/background-image:\s*url\(['"]?([^'")]+\.(png|jpg|jpeg|webp))['"]?\)/i);
    if (bgMatch) image = bgMatch[1];
  }

  // Extract text content (very rough)
  let text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                 .replace(/<[^>]+>/g, ' ')
                 .replace(/\s+/g, ' ')
                 .trim();
                 
  // Just get a chunk of text to understand the context
  console.log(`--- ${filename} ---`);
  console.log(`Title: ${title}`);
  console.log(`Image: ${image}`);
  console.log(`Content snippet: ${text.substring(0, 1500)}...\n`);
}

extractInfo('aqua.html');
extractInfo('flat.html');
