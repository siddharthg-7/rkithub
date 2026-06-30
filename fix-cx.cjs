const fs = require('fs');
const files = [
  'SeleniumRoadmapVisual.tsx',
  'PythonEcosystemVisual.tsx',
  'JavaEcosystemVisual.tsx',
  'InternshipJourneyVisual.tsx',
  'CypressAutomationVisual.tsx'
];
files.forEach(file => {
  let content = fs.readFileSync('src/components/' + file, 'utf-8');

  // Fix 1: SeleniumRoadmapVisual
  if (file === 'SeleniumRoadmapVisual.tsx') {
    content = content.replace(
      /\{\/\* travelling particle \*\/\}\s*<motion\.circle\s+r="2"\s+fill="#93C5FD"\s+animate=\{\{ cx: \[ln\.x1, ln\.x2\], cy: \[ln\.y1, ln\.y2\]/g,
      '{/* travelling particle */}\n            <motion.circle cx={ln.x1} cy={ln.y1} r="2" fill="#93C5FD" animate={{ cx: [ln.x1, ln.x2], cy: [ln.y1, ln.y2]'
    );
  }
  // Fix 2: Ecosystems (Python, Java, Internship, Cypress)
  else {
    content = content.replace(
      /<motion\.circle\s+r="2" fill="#93C5FD"\s+animate=\{\{ cx: \[CX, card\.cx\], cy: \[CY, card\.cy\]/g,
      '<motion.circle cx={CX} cy={CY} r="2" fill="#93C5FD" animate={{ cx: [CX, card.cx], cy: [CY, card.cy]'
    );
  }
  
  fs.writeFileSync('src/components/' + file, content);
});
console.log('Fixed missing cx/cy in all visuals');
