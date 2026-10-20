const fs = require('fs');
const path = require('path');

const websiteDir = path.join(__dirname, '..', 'website');
const langs = ['fr', 'en', 'es', 'it', 'de', 'zh'];
const pages = ['index.html', 'about.html', 'services.html', 'faq.html', 'blog.html', 'contact.html'];

console.log('=== NOVELTRIA MULTILINGUAL STEP 2 VERIFICATION ===\n');

let totalChecks = 0;
let passedChecks = 0;
let errors = [];

function check(desc, condition) {
  totalChecks++;
  if (condition) {
    passedChecks++;
  } else {
    errors.push(desc);
    console.error(`[FAIL] ${desc}`);
  }
}

// 1. Check all 36 pages exist
langs.forEach(lang => {
  pages.forEach(page => {
    const filePath = lang === 'fr' 
      ? path.join(websiteDir, page)
      : path.join(websiteDir, lang, page);

    const exists = fs.existsSync(filePath);
    check(`File exists: ${lang}/${page}`, exists);

    if (exists) {
      const content = fs.readFileSync(filePath, 'utf-8');
      check(`File not empty: ${lang}/${page}`, content.length > 500);

      // Check language selector has all 6 languages
      check(`6-lang desktop selector in ${lang}/${page}`, 
        content.includes('class="nv-lang-selector"') &&
        content.includes('>FR<') &&
        content.includes('>EN<') &&
        content.includes('>ES<') &&
        content.includes('>IT<') &&
        content.includes('>DE<') &&
        content.includes('>ZH<')
      );

      check(`6-lang mobile selector in ${lang}/${page}`, 
        content.includes('class="nv-mobile-lang-selector"') &&
        content.includes('>FR<') &&
        content.includes('>EN<') &&
        content.includes('>ES<') &&
        content.includes('>IT<') &&
        content.includes('>DE<') &&
        content.includes('>ZH<')
      );

      // Check footer legal mention
      const hasLegal = content.includes('projet en cours de constitution') ||
                       content.includes('project under constitution') ||
                       content.includes('proyecto en fase de constitución') ||
                       content.includes('progetto in fase di costituzione') ||
                       content.includes('Projekt im Gründungsstadium') ||
                       content.includes('正在筹建中的项目');
      check(`Footer legal status mention in ${lang}/${page}`, hasLegal);

      // Check founder name
      check(`Founder name Laurent Huiskens in ${lang}/${page}`, content.includes('Laurent Huiskens'));

      // Founder forbidden titles check
      const forbiddenTitles = [
        'PDG', 'P.D.G', 'Président Directeur Général', 'President Director General',
        'CEO', 'Chief Executive Officer', 'Presidente', 'Präsident'
      ];
      forbiddenTitles.forEach(title => {
        // Only flag if used directly with Laurent Huiskens
        const pattern = new RegExp(`Laurent Huiskens[\\s,:-]+${title}|${title}[\\s,:-]+Laurent Huiskens`, 'i');
        check(`No forbidden CEO/President title for founder in ${lang}/${page} (${title})`, !pattern.test(content));
      });

      // Check contact page specific items
      if (page === 'contact.html') {
        check(`Honeypot #website_hp in ${lang}/${page}`, content.includes('id="website_hp"'));
        check(`form-validation.js included in ${lang}/${page}`, content.includes('form-validation.js'));
      }

      // Check Logo & Favicon
      check(`Header logo in ${lang}/${page}`, content.includes('logo-full.png') && content.includes('class="nv-logo"'));
      check(`Footer logo in ${lang}/${page}`, content.includes('logo-full.png') && content.includes('class="nv-footer__logo"'));
      check(`Favicon in ${lang}/${page}`, content.includes('favicon.png') && content.includes('rel="icon"'));
    }
  });
});

console.log(`\nVerification summary: ${passedChecks} / ${totalChecks} checks passed.`);
if (errors.length > 0) {
  console.log(`\nEncountered ${errors.length} issues:`);
  errors.forEach(e => console.log(' - ' + e));
  process.exit(1);
} else {
  console.log('\nALL CHECKS PASSED PERFECTLY!');
}
