const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  // Container Width
  { regex: /max-w-\[1400px\]/g, replacement: 'max-w-7xl' },
  
  // Grids
  { regex: /grid md:grid-cols-3 gap-6/g, replacement: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8' },
  { regex: /grid md:grid-cols-3 gap-4/g, replacement: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6' },
  { regex: /grid lg:grid-cols-2 gap-10 lg:gap-16/g, replacement: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16' }, // FeaturedProject
  
  // Paddings
  { regex: /bg-surface shadow-sm p-6 /g, replacement: 'bg-surface shadow-sm p-6 lg:p-8 ' },
  { regex: /bg-surface shadow-sm p-6"/g, replacement: 'bg-surface shadow-sm p-6 lg:p-8"' },
  { regex: /bg-surface p-6 h-full/g, replacement: 'bg-surface p-6 lg:p-8 h-full' },
  { regex: /bg-surface p-8 h-full/g, replacement: 'bg-surface p-6 lg:p-8 h-full' },
  { regex: /bg-surface p-8 md:p-10/g, replacement: 'bg-surface p-6 lg:p-10' },
  
  // App-level (globals, page nav)
  { regex: /px-6 md:px-10/g, replacement: 'px-6 lg:px-8' } // Tailwind standard is px-4 sm:px-6 lg:px-8 for max-w-7xl
];

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      replacements.forEach(r => {
        newContent = newContent.replace(r.regex, r.replacement);
      });
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  });
}

walkDir(directoryPath);
console.log('Done replacing layout classes.');
