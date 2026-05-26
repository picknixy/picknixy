const fs = require('fs');
const mockDataPath = 'src/data/mockData.ts';
let mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

const targetId = 'id: "the-brain-song-review",';
const canonicalString = '    canonicalUrl: "https://www.picknixy.com/the-brain-song-review",\n';

if (mockDataContent.includes(targetId) && !mockDataContent.substring(mockDataContent.indexOf(targetId), mockDataContent.indexOf(targetId) + 500).includes('canonicalUrl')) {
    mockDataContent = mockDataContent.replace(
        /id: "the-brain-song-review",\n\s*slug: "the-brain-song-review",/,
        'id: "the-brain-song-review",\n    slug: "the-brain-song-review",\n' + canonicalString
    );
    fs.writeFileSync(mockDataPath, mockDataContent);
    console.log("Added canonicalUrl to the-brain-song-review");
} else {
    console.log("Could not find the target to replace or it already has canonicalUrl");
}
