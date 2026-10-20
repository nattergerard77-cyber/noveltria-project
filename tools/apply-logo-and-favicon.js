const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const websiteDir = path.join(rootDir, 'website');
const toolsDir = path.join(rootDir, 'tools');

console.log('=== APPLYING LOGO & FAVICON ACROSS NOVELTRIA ===\n');

// 1. Update French Pages (website/*.html)
const frPages = ['index.html', 'about.html', 'services.html', 'faq.html', 'blog.html', 'contact.html'];

frPages.forEach(fileName => {
  const filePath = path.join(websiteDir, fileName);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Favicon
  if (!content.includes('rel="icon"')) {
    content = content.replace(
      '<!-- Stylesheet -->',
      '<!-- Favicon -->\n  <link rel="icon" type="image/png" href="assets/images/favicon.png">\n\n  <!-- Stylesheet -->'
    );
  }

  // Header Brand Logo
  // Match <a href="index.html" class="nv-brand"[^>]*>[\s\S]*?<\/a>
  content = content.replace(
    /<a href="index\.html" class="nv-brand"[^>]*>[\s\S]*?<\/a>/,
    `<a href="index.html" class="nv-brand" aria-label="Retour à l'accueil NOVELTRIA">\n        <img src="assets/images/logo-full.png" alt="NOVELTRIA International Trade Services" class="nv-logo">\n      </a>`
  );

  // Footer Brand Logo
  // Replace <div class="nv-footer__logo-title">...</div>\s*<div class="nv-footer__logo-sub">...</div>
  content = content.replace(
    /<div class="nv-footer__logo-title">[\s\S]*?<\/div>\s*<div class="nv-footer__logo-sub">[\s\S]*?<\/div>/,
    `<a href="index.html" class="nv-footer__brand" aria-label="Retour à l'accueil NOVELTRIA">\n            <img src="assets/images/logo-full.png" alt="NOVELTRIA International Trade Services" class="nv-footer__logo">\n          </a>`
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated French: ${fileName}`);
});

// 2. Update English Pages (website/en/*.html)
frPages.forEach(fileName => {
  const filePath = path.join(websiteDir, 'en', fileName);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Favicon
  if (!content.includes('rel="icon"')) {
    content = content.replace(
      '<!-- Stylesheet -->',
      '<!-- Favicon -->\n  <link rel="icon" type="image/png" href="../assets/images/favicon.png">\n\n  <!-- Stylesheet -->'
    );
  }

  // Header Brand Logo
  content = content.replace(
    /<a href="index\.html" class="nv-brand"[^>]*>[\s\S]*?<\/a>/,
    `<a href="index.html" class="nv-brand" aria-label="Return to NOVELTRIA homepage">\n        <img src="../assets/images/logo-full.png" alt="NOVELTRIA International Trade Services" class="nv-logo">\n      </a>`
  );

  // Footer Brand Logo
  content = content.replace(
    /<div class="nv-footer__logo-title">[\s\S]*?<\/div>\s*<div class="nv-footer__logo-sub">[\s\S]*?<\/div>/,
    `<a href="index.html" class="nv-footer__brand" aria-label="Return to NOVELTRIA homepage">\n            <img src="../assets/images/logo-full.png" alt="NOVELTRIA International Trade Services" class="nv-footer__logo">\n          </a>`
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated English: ${fileName}`);
});

// 3. Update Build Scripts (tools/build-*.js) to include favicon in <head>
const buildScripts = [
  'build-index.js',
  'build-about.js',
  'build-services.js',
  'build-faq.js',
  'build-blog.js',
  'build-contact.js'
];

buildScripts.forEach(scriptName => {
  const scriptPath = path.join(toolsDir, scriptName);
  let code = fs.readFileSync(scriptPath, 'utf-8');

  // Favicon in <head>
  if (!code.includes('rel="icon"')) {
    code = code.replace(
      '<!-- Stylesheet -->',
      '<!-- Favicon -->\\n  <link rel="icon" type="image/png" href="../assets/images/favicon.png">\\n\\n  <!-- Stylesheet -->'
    );
  }

  // Schema.org logo if present
  code = code.replace(
    /"logo": "https:\/\/www\.noveltria\.com\/assets\/images\/hero-accueil\.png"/,
    '"logo": "https://www.noveltria.com/assets/images/logo-full.png"'
  );

  fs.writeFileSync(scriptPath, code, 'utf-8');
  console.log(`Updated Build Script: ${scriptName}`);
});

// 4. Re-run all build scripts to regenerate es, it, de, zh
console.log('\nRegenerating ES, IT, DE, ZH pages...');
buildScripts.forEach(scriptName => {
  const scriptPath = path.join(toolsDir, scriptName);
  console.log(`Running node tools/${scriptName}...`);
  execSync(`node "${scriptPath}"`, { stdio: 'inherit' });
});

console.log('\n=== LOGO & FAVICON INTEGRATION COMPLETE ===\n');
