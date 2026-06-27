import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';

const convertImages = async () => {
  const files = fs.readdirSync(publicDir);
  const images = files.filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

  for (const file of images) {
    const filePath = path.join(publicDir, file);
    const ext = path.extname(file);
    const webpPath = path.join(publicDir, file.replace(ext, '.webp'));
    
    // Convert only if the webp doesn't exist to save time on multiple runs
    if (!fs.existsSync(webpPath)) {
      console.log(`Converting ${file} to WebP...`);
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(webpPath);
    }
  }
  console.log('All images converted to WebP successfully.');
};

convertImages().catch(console.error);
