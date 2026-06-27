import fs from 'fs';
import path from 'path';

const srcDir = './src';
const exts = ['.tsx', '.ts'];
const localImages = [
  'democertifiacte.jpeg', 'durga.png', 'vijaya.png', 'manogna.png', 
  'Chaitanya .png', 'logo.png', 'codingperson.png', 'logo_cgi_color.png', 
  'virtusa.png', 'hero_classroom.png', 'about_training.png', 'classroom_training.png', 
  'event_banner.png', 'mentor_guidance.png'
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (exts.includes(path.extname(fullPath))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const img of localImages) {
        // Regex to match exact /img or img in string safely
        const webpImg = img.replace(/\.(png|jpeg|jpg)$/, '.webp');
        // Simple string replace for the exact paths
        const oldStr = `/${img}`;
        const newStr = `/${webpImg}`;
        
        if (content.includes(oldStr)) {
          content = content.split(oldStr).join(newStr);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(srcDir);
console.log('Done replacing images with WebP.');
