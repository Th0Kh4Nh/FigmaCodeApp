const fs = require('fs');
const path = require('path');

const htmlDir = path.join(__dirname, 'public', 'html_screens');
const outDir = path.join(__dirname, 'src', 'generated');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function htmlToJsxStyle(styleStr) {
  if (!styleStr) return '{}';
  const pairs = styleStr.split(';').filter(Boolean);
  const styleObj = {};
  pairs.forEach(p => {
    const [key, ...valParts] = p.split(':');
    const val = valParts.join(':');
    if (key && val) {
      let camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      // Handle special properties
      if (camelKey === 'background') camelKey = 'background'; // just in case
      styleObj[camelKey] = val.trim();
    }
  });
  return JSON.stringify(styleObj);
}

function convertHtmlToReact(htmlStr, componentName) {
  // Strip out Figma comments
  let cleanHtml = htmlStr.replace(/<!--[\s\S]*?-->/g, '');
  
  // Convert style="..." to style={{...}}
  cleanHtml = cleanHtml.replace(/style="([^"]*)"/g, (match, p1) => {
    return `style={${htmlToJsxStyle(p1)}}`;
  });

  // Self close img tags safely
  cleanHtml = cleanHtml.replace(/<img([^>]*?)\/?>/g, '<img$1 />');
  
  // Replace class with className
  cleanHtml = cleanHtml.replace(/class="/g, 'className="');

  // Replace layer-name with data-layer just to keep it valid React
  cleanHtml = cleanHtml.replace(/layer-name="/g, 'data-layer="');

  // Remove left and top from the outer div safely to avoid double commas
  cleanHtml = cleanHtml.replace(/<div data-layer="[^"]*" style=\{\{(.*?)\}\}/, (match, p1) => {
    let newStyle = p1.replace(/"left":"[^"]*",?/g, '');
    newStyle = newStyle.replace(/"top":"[^"]*",?/g, '');
    newStyle = newStyle.replace(/"position":"absolute",?/g, '"position":"relative",');
    // Fix any remaining double commas or trailing commas
    newStyle = newStyle.replace(/,,/g, ',');
    newStyle = newStyle.replace(/,}/g, '}');
    return match.replace(p1, newStyle);
  });

  // Fix <style> tags for JSX
  cleanHtml = cleanHtml.replace(/<style>([\s\S]*?)<\/style>/g, '<style dangerouslySetInnerHTML={{__html: `$1`}} />');

  return `import React from 'react';\n\nexport default function ${componentName}({ onClickLayer }) {\n  return (\n    <div onClick={(e) => { \n       const layer = e.target.closest('[data-layer]'); \n       if(layer && onClickLayer) onClickLayer(layer.getAttribute('data-layer')); \n    }}>\n      ${cleanHtml}\n    </div>\n  );\n}`;
}

const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));

let indexExports = [];
let routeMap = {};

files.forEach(file => {
  const htmlStr = fs.readFileSync(path.join(htmlDir, file), 'utf-8');
  let baseName = file.replace('.html', '');
  // Sanitize component name
  let compName = 'Screen_' + baseName.replace(/[^a-zA-Z0-9]/g, '_');
  
  const reactCode = convertHtmlToReact(htmlStr, compName);
  
  fs.writeFileSync(path.join(outDir, `${compName}.jsx`), reactCode);
  indexExports.push(`export { default as ${compName} } from './${compName}';`);
  routeMap[baseName] = compName;
});

fs.writeFileSync(path.join(outDir, 'index.js'), indexExports.join('\n'));
fs.writeFileSync(path.join(outDir, 'routeMap.js'), `export const routeMap = ${JSON.stringify(routeMap, null, 2)};`);

console.log('React components generated!');
