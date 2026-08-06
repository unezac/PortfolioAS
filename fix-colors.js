const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  // Backgrounds
  { regex: /bg-\[#0A0A0A\]/g, replacement: 'bg-surface' },
  { regex: /bg-\[#0D0D0D\]/g, replacement: 'bg-surface' },
  { regex: /bg-\[#FAFAFA\]/g, replacement: 'bg-surface' },
  { regex: /bg-white/g, replacement: 'bg-surface' },
  { regex: /bg-\[#3B82F6\]/g, replacement: 'bg-accent' },
  { regex: /bg-\[#4F46E5\]/g, replacement: 'bg-accent' },
  { regex: /bg-\[rgba\(255,255,255,0\.0[1-9]\)\]/g, replacement: 'bg-white/5' },
  { regex: /bg-\[rgba\(79,70,229,0\.[0-9]+\)\]/g, replacement: 'bg-accent/10' },
  { regex: /bg-\[rgba\(59,130,246,0\.[0-9]+\)\]/g, replacement: 'bg-accent/10' },
  { regex: /bg-\[#4F46E5\]\/60/g, replacement: 'bg-accent/60' },
  { regex: /hover:bg-\[#3B82F6\]\/90/g, replacement: 'hover:bg-accent/90' },
  { regex: /hover:bg-\[#4338CA\]/g, replacement: 'hover:bg-accent/90' },
  { regex: /hover:bg-\[#F8FAFC\]/g, replacement: 'hover:bg-surface' },
  { regex: /hover:bg-\[rgba\(59,130,246,0\.[0-9]+\)\]/g, replacement: 'hover:bg-accent/10' },

  // Borders
  { regex: /border-\[#E2E8F0\]/g, replacement: 'border-border' },
  { regex: /border-\[rgba\(255,255,255,0\.[0-9]+\)\]/g, replacement: 'border-border' },
  { regex: /border-\[rgba\(79,70,229,0\.[0-9]+\)\]/g, replacement: 'border-accent/20' },
  { regex: /border-\[rgba\(59,130,246,0\.[0-9]+\)\]/g, replacement: 'border-accent/20' },
  { regex: /border-\[rgba\(8,145,178,0\.[0-9]+\)\]/g, replacement: 'border-accent3/20' },
  { regex: /border-\[rgba\(5,150,105,0\.[0-9]+\)\]/g, replacement: 'border-green-500/20' },
  { regex: /hover:border-\[#CBD5E1\]/g, replacement: 'hover:border-border-hover' },
  { regex: /hover:border-\[rgba\(255,255,255,0\.[0-9]+\)\]/g, replacement: 'hover:border-border-hover' },
  { regex: /hover:border-\[rgba\(59,130,246,0\.[0-9]+\)\]/g, replacement: 'hover:border-accent/30' },
  { regex: /hover:border-\[rgba\(79,70,229,0\.[0-9]+\)\]/g, replacement: 'hover:border-accent/30' },

  // Text colors
  { regex: /text-\[#0F172A\]/g, replacement: 'text-primary' },
  { regex: /text-\[#475569\]/g, replacement: 'text-secondary' },
  { regex: /text-\[#94A3B8\]/g, replacement: 'text-tertiary' },
  { regex: /text-\[#A0A0A0\]/g, replacement: 'text-secondary' },
  { regex: /text-\[#6B6B6B\]/g, replacement: 'text-tertiary' },
  { regex: /text-\[#555555\]/g, replacement: 'text-tertiary' },
  { regex: /text-\[#777777\]/g, replacement: 'text-tertiary' },
  { regex: /text-white/g, replacement: 'text-primary' },
  { regex: /text-\[#3B82F6\]/g, replacement: 'text-accent' },
  { regex: /text-\[#4F46E5\]/g, replacement: 'text-accent' },
  { regex: /text-\[#7C3AED\]/g, replacement: 'text-accent2' },
  { regex: /text-\[#0891B2\]/g, replacement: 'text-accent3' },
  { regex: /text-\[#059669\]/g, replacement: 'text-green-500' },
  { regex: /text-\[#CBD5E1\]/g, replacement: 'text-border-hover' },
  { regex: /hover:text-white/g, replacement: 'hover:text-primary' },
  { regex: /hover:text-\[#0F172A\]/g, replacement: 'hover:text-primary' },
  { regex: /hover:text-\[#475569\]/g, replacement: 'hover:text-secondary' },
  { regex: /group-hover:text-\[#3B82F6\]/g, replacement: 'group-hover:text-accent' },
  { regex: /hover:text-\[#4F46E5\]/g, replacement: 'hover:text-accent' },

  // Fills and strokes (SVGs, Canvas logic usually isn't standard Tailwind but let's try)
  // Actually, let's leave canvas alone (EnergyField etc.) if they use string hexes.
];

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
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
console.log('Done replacing colors.');
