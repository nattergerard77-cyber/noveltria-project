const fs = require('fs');
const path = require('path');

const websiteDir = path.join(__dirname, '..', 'website');
const pages = ['index.html', 'about.html', 'services.html', 'faq.html', 'blog.html', 'contact.html'];

function buildDesktopSelector(currentLang, page) {
  const langs = [
    { code: 'fr', label: 'FR', title: 'Français' },
    { code: 'en', label: 'EN', title: 'English' },
    { code: 'es', label: 'ES', title: 'Español' },
    { code: 'it', label: 'IT', title: 'Italiano' },
    { code: 'de', label: 'DE', title: 'Deutsch' },
    { code: 'zh', label: 'ZH', title: '中文' }
  ];

  const links = langs.map(l => {
    let href;
    if (currentLang === 'fr') {
      href = l.code === 'fr' ? page : `${l.code}/${page}`;
    } else {
      href = l.code === 'fr' ? `../${page}` : (l.code === currentLang ? page : `../${l.code}/${page}`);
    }
    const activeClass = l.code === currentLang ? ' active' : '';
    return `<a href="${href}" class="lang-link${activeClass}" title="${l.title}">${l.label}</a>`;
  });

  return `<div class="nv-lang-selector" aria-label="Language selector">\n          ` +
    links.join('\n          <span class="lang-separator">/</span>\n          ') +
    `\n        </div>`;
}

function buildMobileSelector(currentLang, page) {
  const langs = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
    { code: 'de', label: 'DE' },
    { code: 'zh', label: 'ZH' }
  ];

  const links = langs.map(l => {
    let href;
    if (currentLang === 'fr') {
      href = l.code === 'fr' ? page : `${l.code}/${page}`;
    } else {
      href = l.code === 'fr' ? `../${page}` : (l.code === currentLang ? page : `../${l.code}/${page}`);
    }
    const activeClass = l.code === currentLang ? ' class="active"' : '';
    return `<a href="${href}"${activeClass}>${l.label}</a>`;
  });

  return `<div class="nv-mobile-lang-selector">\n        ` +
    links.join('\n        <span class="lang-separator">|</span>\n        ') +
    `\n      </div>`;
}

// 1. Process French files
pages.forEach(page => {
  const filePath = path.join(websiteDir, page);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace desktop selector
  html = html.replace(/<div class="nv-lang-selector"[\s\S]*?<\/div>/, buildDesktopSelector('fr', page));
  // Replace mobile selector
  html = html.replace(/<div class="nv-mobile-lang-selector"[\s\S]*?<\/div>/, buildMobileSelector('fr', page));

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated French: ${page}`);
});

// 2. Process English files
pages.forEach(page => {
  const filePath = path.join(websiteDir, 'en', page);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace desktop selector
  html = html.replace(/<div class="nv-lang-selector"[\s\S]*?<\/div>/, buildDesktopSelector('en', page));
  // Replace mobile selector
  html = html.replace(/<div class="nv-mobile-lang-selector"[\s\S]*?<\/div>/, buildMobileSelector('en', page));

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated English: ${page}`);
});
