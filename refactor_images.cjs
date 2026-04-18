const fs = require('fs');
const path = require('path');

// 1. Copy public/images to src/assets/images
fs.mkdirSync('src/assets/images', { recursive: true });
const imagesDir = fs.readdirSync('public/images');
for (const file of imagesDir) {
   fs.copyFileSync(path.join('public/images', file), path.join('src/assets/images', file));
}

// 2. Refactor mockData.ts
let mockData = fs.readFileSync('src/data/mockData.ts', 'utf8');
const importedImages = new Set();
const getImportName = (filename) => 'img_' + filename.replace(/[^a-zA-Z0-9]/g, '');

let importsText = '';
const replacer = (match, p1) => {
    const filenameMatch = p1.match(/\/images\/([^?]+)/);
    if (filenameMatch) {
        const filename = filenameMatch[1];
        const importName = getImportName(filename);
        if (!importedImages.has(filename)) {
            importedImages.add(filename);
            importsText += `import ${importName} from '../assets/images/${filename}';\n`;
        }
        // If the original matched string had quotes around the key, return with quotes
        if (match.startsWith('"')) {
            return `"image": ${importName}`;
        } else {
            return `image: ${importName}`;
        }
    }
    return match;
};

mockData = mockData.replace(/"image":\s*"([^"]+)"/g, replacer);
mockData = mockData.replace(/image:\s*"([^"]+)"/g, replacer);

mockData = importsText + '\n' + mockData;
fs.writeFileSync('src/data/mockData.ts', mockData);

// 3. Refactor components & pages
const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
};

const tsxFiles = walk('./src');
for (const file of tsxFiles) {
    let content = fs.readFileSync(file, 'utf8');

    const relative = path.relative(path.dirname(file), 'src/assets/images');
    // Ensure posix path separators for imports
    const relativePath = relative.split(path.sep).join('/');
    const relativeFallback = relativePath + '/fallback.svg';
    const relativeAvatarFallback = relativePath + '/avatar-fallback.svg';

    if (content.includes('/images/fallback.svg') || content.includes('/images/avatar-fallback.svg')) {
        let fileImports = '';
        if (content.includes('/images/fallback.svg')) {
            fileImports += `import fallbackSvg from '${relativeFallback}';\n`;
            content = content.replace(/['"]\/images\/fallback\.svg(\?v=2)?['"]/g, 'fallbackSvg');
        }
        if (content.includes('/images/avatar-fallback.svg')) {
            fileImports += `import avatarFallbackSvg from '${relativeAvatarFallback}';\n`;
            content = content.replace(/['"]\/images\/avatar-fallback\.svg(\?v=2)?['"]/g, 'avatarFallbackSvg');
        }
        
        const lastImportMatch = [...content.matchAll(/^import.*from.*$/gm)].pop();
        if (lastImportMatch) {
            const insertPos = lastImportMatch.index + lastImportMatch[0].length;
            content = content.slice(0, insertPos) + '\n' + fileImports + content.slice(insertPos);
        } else {
            content = fileImports + '\n' + content;
        }
        fs.writeFileSync(file, content);
        console.log(`Refactored ${file}`);
    }
}
