const fs = require('fs');
const path = require('path');

const websiteDir = path.join(__dirname, '..', 'website');
const languages = ['es', 'it', 'de', 'zh'];

// Navigation items per language
const navData = {
  es: {
    langCode: 'es',
    locale: 'es_ES',
    brandSubtitle: 'INTERNATIONAL TRADE SERVICES',
    topbarStatus: 'Casa de Intermediación en Comercio Internacional',
    topbarSourcing: 'Sourcing y Mercados Globales',
    topbarMandate: 'Mandato Escrito Exclusivo',
    topbarFounder: 'Fundador: Laurent Huiskens',
    home: 'Inicio',
    about: 'Quiénes somos',
    services: 'Servicios',
    faq: 'FAQ',
    news: 'Actualidad',
    contact: 'Contacto',
    cta: 'Hablar de un proyecto',
    burgerLabel: 'Abrir o cerrar el menú de navegación',
    brandReturn: 'Volver a la página de inicio de NOVELTRIA',
    footerDesc: 'Casa de intermediación en comercio internacional. Sourcing, desarrollo de mercados comerciales y negociación bajo mandato escrito exclusivo para asegurar sus operaciones transfronterizas.',
    navTitle: 'Navegación',
    navAbout: 'Sobre el Fundador',
    navServices: 'Servicios A y B',
    navNews: 'Actualidad y Análisis',
    keyServicesTitle: 'Servicios Clave',
    sourcingA: 'Búsqueda de Proveedores (A)',
    exportA: 'Búsqueda de Compradores y Exportación (A)',
    mandateA: 'Negociación bajo Mandato (A)',
    logisticsB: 'Coordinación Logística (B)',
    qualityB: 'Inspección de Fábrica (B)',
    infoTitle: 'Información',
    hours: '<strong>Horario:</strong> Lun. - Vie., 09:00 - 18:30 CET',
    founder: '<strong>Fundador:</strong> Laurent Huiskens',
    confidentiality: '<strong>Confidencialidad:</strong> NDA bilateral sistemático',
    legalText: 'NOVELTRIA International Trade Services es un proyecto en fase de constitución. Fundador: Laurent Huiskens.',
    copyright: '&copy; 2026 NOVELTRIA International Trade Services. Todos los derechos reservados.'
  },
  it: {
    langCode: 'it',
    locale: 'it_IT',
    brandSubtitle: 'INTERNATIONAL TRADE SERVICES',
    topbarStatus: 'Casa di Intermediazione nel Commercio Internazionale',
    topbarSourcing: 'Sourcing e Mercati Globali',
    topbarMandate: 'Mandato Scritto Esclusivo',
    topbarFounder: 'Fondatore: Laurent Huiskens',
    home: 'Home',
    about: 'Chi siamo',
    services: 'Servizi',
    faq: 'FAQ',
    news: 'Notizie',
    contact: 'Contatti',
    cta: 'Discutere un progetto',
    burgerLabel: 'Apri o chiudi il menu di navigazione',
    brandReturn: 'Torna alla home page di NOVELTRIA',
    footerDesc: 'Casa di intermediazione nel commercio internazionale. Sourcing, sviluppo di mercati commerciali e negoziazione su mandato scritto esclusivo per mettere in sicurezza le vostre operazioni transfrontaliere.',
    navTitle: 'Navigazione',
    navAbout: 'Il Fondatore',
    navServices: 'Servizi A e B',
    navNews: 'Notizie e Analisi',
    keyServicesTitle: 'Servizi Principali',
    sourcingA: 'Ricerca Fornitori (A)',
    exportA: 'Ricerca Acquirenti ed Export (A)',
    mandateA: 'Negoziazione su Mandato (A)',
    logisticsB: 'Coordinamento Logistico (B)',
    qualityB: 'Ispezione di Fabbrica (B)',
    infoTitle: 'Informazioni',
    hours: '<strong>Orari:</strong> Lun - Ven, 09:00 - 18:30 CET',
    founder: '<strong>Fondatore:</strong> Laurent Huiskens',
    confidentiality: '<strong>Riservatezza:</strong> NDA bilaterale sistematico',
    legalText: 'NOVELTRIA International Trade Services è un progetto in fase di costituzione. Fondatore: Laurent Huiskens.',
    copyright: '&copy; 2026 NOVELTRIA International Trade Services. Tutti i diritti riservati.'
  },
  de: {
    langCode: 'de',
    locale: 'de_DE',
    brandSubtitle: 'INTERNATIONAL TRADE SERVICES',
    topbarStatus: 'Vermittlungshaus für internationalen Handel',
    topbarSourcing: 'Globales Sourcing &amp; Absatzmärkte',
    topbarMandate: 'Exklusives schriftliches Mandat',
    topbarFounder: 'Gründer: Laurent Huiskens',
    home: 'Startseite',
    about: 'Über uns',
    services: 'Leistungen',
    faq: 'FAQ',
    news: 'Aktuelles',
    contact: 'Kontakt',
    cta: 'Projekt besprechen',
    burgerLabel: 'Navigationsmenü ein- oder ausblenden',
    brandReturn: 'Zur NOVELTRIA-Startseite',
    footerDesc: 'Vermittlungshaus für internationalen Handel. Sourcing, Erschließung von Absatzmärkten und Verhandlung im Rahmen eines exklusiven schriftlichen Mandats zur Absicherung Ihrer grenzüberschreitenden Geschäfte.',
    navTitle: 'Navigation',
    navAbout: 'Über den Gründer',
    navServices: 'Leistungen A &amp; B',
    navNews: 'Aktuelles &amp; Analysen',
    keyServicesTitle: 'Kernleistungen',
    sourcingA: 'Lieferantensuche (A)',
    exportA: 'Käufersuche &amp; Export (A)',
    mandateA: 'Mandatsverhandlung (A)',
    logisticsB: 'Logistikkoordination (B)',
    qualityB: 'Werksinspektion (B)',
    infoTitle: 'Informationen',
    hours: '<strong>Geschäftszeiten:</strong> Mo. - Fr., 09:00 - 18:30 Uhr MEZ',
    founder: '<strong>Gründer:</strong> Laurent Huiskens',
    confidentiality: '<strong>Vertraulichkeit:</strong> Systematische bilaterale NDA',
    legalText: 'NOVELTRIA International Trade Services ist ein Projekt im Gründungsstadium. Gründer: Laurent Huiskens.',
    copyright: '&copy; 2026 NOVELTRIA International Trade Services. Alle Rechte vorbehalten.'
  },
  zh: {
    langCode: 'zh',
    locale: 'zh_CN',
    brandSubtitle: 'INTERNATIONAL TRADE SERVICES',
    topbarStatus: '国际贸易中介机构',
    topbarSourcing: '全球采购与市场',
    topbarMandate: '独家书面委托',
    topbarFounder: '创始人：Laurent Huiskens',
    home: '首页',
    about: '关于我们',
    services: '服务',
    faq: '常见问题',
    news: '资讯',
    contact: '联系我们',
    cta: '洽谈项目',
    burgerLabel: '切换导航菜单',
    brandReturn: '返回 NOVELTRIA 首页',
    footerDesc: '国际贸易中介机构。依据独家书面委托，提供采购寻源、市场拓展与商务谈判服务，保障您的跨境交易安全。',
    navTitle: '网站导航',
    navAbout: '关于创始人',
    navServices: 'A 类与 B 类服务',
    navNews: '资讯与分析',
    keyServicesTitle: '核心服务',
    sourcingA: '供应商寻源 (A)',
    exportA: '买家开发与出口 (A)',
    mandateA: '委托谈判 (A)',
    logisticsB: '物流协调 (B)',
    qualityB: '工厂验货 (B)',
    infoTitle: '信息',
    hours: '<strong>办公时间：</strong>周一至周五，09:00 - 18:30（欧洲中部时间）',
    founder: '<strong>创始人：</strong>Laurent Huiskens',
    confidentiality: '<strong>保密承诺：</strong>严格签署双边保密协议 (NDA)',
    legalText: 'NOVELTRIA International Trade Services 是一个正在筹建中的项目（projet en cours de constitution / project under constitution）。创始人：Laurent Huiskens。',
    copyright: '&copy; 2026 NOVELTRIA International Trade Services. 版权所有。'
  }
};

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
    if (l.code === 'fr') {
      href = `../${page}`;
    } else if (l.code === currentLang) {
      href = page;
    } else {
      href = `../${l.code}/${page}`;
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
    if (l.code === 'fr') {
      href = `../${page}`;
    } else if (l.code === currentLang) {
      href = page;
    } else {
      href = `../${l.code}/${page}`;
    }
    const activeClass = l.code === currentLang ? ' class="active"' : '';
    return `<a href="${href}"${activeClass}>${l.label}</a>`;
  });

  return `<div class="nv-mobile-lang-selector">\n        ` +
    links.join('\n        <span class="lang-separator">|</span>\n        ') +
    `\n      </div>`;
}

function renderHeader(lang, activePage, pageFileName) {
  const n = navData[lang];
  return `  <!-- ==========================================================================
       HEADER & NAVBAR PRESTIGE
       ========================================================================== -->
  <header class="nv-header-system">
    <!-- Top Utility Bar -->
    <div class="nv-topbar">
      <div class="nv-topbar__status">
        <span class="nv-topbar__dot"></span>
        <span>${n.topbarStatus}</span>
      </div>
      <div class="nv-topbar__info">
        <span>${n.topbarSourcing}</span>
        <span class="nv-topbar__divider">|</span>
        <span>${n.topbarMandate}</span>
        <span class="nv-topbar__divider">|</span>
        <span>${n.topbarFounder}</span>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="nv-main-nav" aria-label="${n.burgerLabel}">
      <a href="index.html" class="nv-brand" aria-label="${n.brandReturn}">
        <img src="../assets/images/logo-full.png" alt="NOVELTRIA International Trade Services" class="nv-logo">
      </a>

      <div class="nv-nav-links">
        <a href="index.html" class="nv-nav-item${activePage === 'index' ? ' active" aria-current="page' : ''}">${n.home}</a>
        <a href="about.html" class="nv-nav-item${activePage === 'about' ? ' active" aria-current="page' : ''}">${n.about}</a>
        <a href="services.html" class="nv-nav-item${activePage === 'services' ? ' active" aria-current="page' : ''}">${n.services}</a>
        <a href="faq.html" class="nv-nav-item${activePage === 'faq' ? ' active" aria-current="page' : ''}">${n.faq}</a>
        <a href="blog.html" class="nv-nav-item${activePage === 'blog' ? ' active" aria-current="page' : ''}">${n.news}</a>
        <a href="contact.html" class="nv-nav-cta${activePage === 'contact' ? ' active" aria-current="page' : ''}">
          <span>${n.cta}</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        ${buildDesktopSelector(lang, pageFileName)}
      </div>

      <button class="nv-burger" type="button" aria-label="${n.burgerLabel}" aria-expanded="false" aria-controls="mobileDrawer">
        <span class="nv-burger__bar"></span>
        <span class="nv-burger__bar"></span>
        <span class="nv-burger__bar"></span>
      </button>
    </nav>

    <!-- Mobile Drawer -->
    <div id="mobileDrawer" class="nv-mobile-drawer">
      <a href="index.html" class="nv-mobile-link${activePage === 'index' ? ' active' : ''}">${n.home}</a>
      <a href="about.html" class="nv-mobile-link${activePage === 'about' ? ' active' : ''}">${n.about}</a>
      <a href="services.html" class="nv-mobile-link${activePage === 'services' ? ' active' : ''}">${n.services}</a>
      <a href="faq.html" class="nv-mobile-link${activePage === 'faq' ? ' active' : ''}">${n.faq}</a>
      <a href="blog.html" class="nv-mobile-link${activePage === 'blog' ? ' active' : ''}">${n.news}</a>
      <a href="contact.html" class="btn btn-primary nv-mobile-cta">${n.cta}</a>
      ${buildMobileSelector(lang, pageFileName)}
    </div>
  </header>`;
}

function renderFooter(lang) {
  const n = navData[lang];
  return `  <!-- ==========================================================================
       INSTITUTIONAL FOOTER
       ========================================================================== -->
  <footer class="nv-footer" role="contentinfo">
    <div class="container">
      <div class="nv-footer__grid">
        <div class="nv-footer__col-brand">
          <a href="index.html" class="nv-footer__brand" aria-label="${n.brandReturn}">
            <img src="../assets/images/logo-full.png" alt="NOVELTRIA International Trade Services" class="nv-footer__logo">
          </a>
          <p class="nv-footer__desc">${n.footerDesc}</p>
        </div>

        <div class="nv-footer__col">
          <h4 class="nv-footer__col-title">${n.navTitle}</h4>
          <a href="index.html" class="nv-footer__link">${n.home}</a>
          <a href="about.html" class="nv-footer__link">${n.navAbout}</a>
          <a href="services.html" class="nv-footer__link">${n.navServices}</a>
          <a href="faq.html" class="nv-footer__link">${n.faq}</a>
          <a href="blog.html" class="nv-footer__link">${n.navNews}</a>
          <a href="contact.html" class="nv-footer__link">${n.contact}</a>
        </div>

        <div class="nv-footer__col">
          <h4 class="nv-footer__col-title">${n.keyServicesTitle}</h4>
          <a href="services.html#category-a" class="nv-footer__link">${n.sourcingA}</a>
          <a href="services.html#category-a" class="nv-footer__link">${n.exportA}</a>
          <a href="services.html#category-a" class="nv-footer__link">${n.mandateA}</a>
          <a href="services.html#category-b" class="nv-footer__link">${n.logisticsB}</a>
          <a href="services.html#category-b" class="nv-footer__link">${n.qualityB}</a>
        </div>

        <div class="nv-footer__col">
          <h4 class="nv-footer__col-title">${n.infoTitle}</h4>
          <p class="nv-footer__desc" style="font-size: 13px; margin-bottom: 8px;">${n.hours}</p>
          <p class="nv-footer__desc" style="font-size: 13px; margin-bottom: 8px;">${n.founder}</p>
          <p class="nv-footer__desc" style="font-size: 13px;">${n.confidentiality}</p>
        </div>
      </div>

      <div class="nv-footer__legal-bar">
        <p class="nv-footer__legal-text">${n.legalText}</p>
        <p class="nv-footer__copy">${n.copyright}</p>
      </div>
    </div>
  </footer>`;
}

module.exports = {
  languages,
  navData,
  renderHeader,
  renderFooter,
  websiteDir
};
