import fs from 'fs';
import path from 'path';

const mapPath = path.resolve('scripts/cloudinary-url-map.json');
const dataPath = path.resolve('src/data/projectData.ts');

const urlMap = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
let content = fs.readFileSync(dataPath, 'utf-8');

let count = 0;
for (const [oldPath, cloudinaryUrl] of Object.entries(urlMap)) {
  const escaped = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`'${escaped}'`, 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, `'${cloudinaryUrl}'`);
    count += matches.length;
    console.log(`Replaced ${matches.length}x: ${oldPath}`);
  }
}

fs.writeFileSync(dataPath, content, 'utf-8');
console.log(`\nDone — ${count} total replacements in projectData.ts`);
