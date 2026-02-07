import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  console.error('Missing CLOUDINARY_CLOUD_NAME in .env.local');
  process.exit(1);
}

const PUBLIC_DIR = path.resolve('public');
const MAP_PATH = path.resolve('scripts/cloudinary-url-map.json');

const IMAGE_EXTS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.webp',
  '.avif',
  '.gif',
]);
const VIDEO_EXTS = new Set(['.mp4', '.mov', '.webm', '.mkv']);

function discoverFiles(dir, base = '') {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      results.push(...discoverFiles(path.join(dir, entry.name), rel));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (IMAGE_EXTS.has(ext))
        results.push({ relativePath: rel.replace(/\\/g, '/'), type: 'image' });
      else if (VIDEO_EXTS.has(ext))
        results.push({ relativePath: rel.replace(/\\/g, '/'), type: 'video' });
    }
  }
  return results;
}

const existingMap = fs.existsSync(MAP_PATH)
  ? JSON.parse(fs.readFileSync(MAP_PATH, 'utf-8'))
  : {};

const urlMap = { ...existingMap };

async function uploadFile(relativePath, resourceType) {
  const localPath = '/' + relativePath;

  if (urlMap[localPath] && !process.argv.includes('--force')) {
    console.log(`  ⏭ Already uploaded: ${relativePath}`);
    return;
  }

  const filePath = path.join(PUBLIC_DIR, relativePath);
  const publicId = 'portfolio/' + relativePath.replace(/\.[^.]+$/, '');
  const sizeMB = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);

  console.log(
    `  Uploading ${relativePath} (${sizeMB} MB) as ${resourceType}...`,
  );

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      resource_type: resourceType,
      overwrite: true,
      folder: '',
      use_filename: false,
      unique_filename: false,
    });

    urlMap[localPath] = result.secure_url;
    console.log(`    ✓ → ${result.secure_url}`);
  } catch (err) {
    console.error(`    ✗ FAILED: ${err.message}`);
  }
}

async function main() {
  const imagesDir = path.join(PUBLIC_DIR, 'images');
  const videosDir = path.join(PUBLIC_DIR, 'videos');

  const files = [
    ...(fs.existsSync(imagesDir) ? discoverFiles(imagesDir, 'images') : []),
    ...(fs.existsSync(videosDir) ? discoverFiles(videosDir, 'videos') : []),
  ];

  const images = files.filter((f) => f.type === 'image');
  const videos = files.filter((f) => f.type === 'video');

  console.log(`Found ${images.length} images, ${videos.length} videos\n`);

  if (images.length > 0) {
    console.log('=== Images ===');
    for (const file of images) {
      await uploadFile(file.relativePath, 'image');
    }
  }

  if (videos.length > 0) {
    console.log('\n=== Videos ===');
    for (const file of videos) {
      await uploadFile(file.relativePath, 'video');
    }
  }

  fs.writeFileSync(MAP_PATH, JSON.stringify(urlMap, null, 2));
  console.log(
    `\nSaved ${Object.keys(urlMap).length} URLs to scripts/cloudinary-url-map.json`,
  );
}

main();
