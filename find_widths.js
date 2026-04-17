const fs = require('fs');
const path = require('path');
const dir = 'd:/FigmaCode/expense-app/src/generated';

const widths = new Set();
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    // Find the first occurrence of data-layer=... style={{"... "width":"...px"
    const match = content.match(/<div data-layer="[^"]+"\s+style=\{\{.*?"width":"(\d+)px"/);
    if (match) {
      widths.add(match[1]);
    }
  }
});
console.log(Array.from(widths));
