const fs = require('fs');
const path = require('path');
const { languages, renderHeader, renderFooter, websiteDir } = require('./generator-core');

const blogData = {
  es: {
    pageTitle: 'Actualidad y Análisis de Comercio Global | Blog NOVELTRIA',
    metaDesc: 'Análisis operativos, metodologías de abastecimiento y normativas de comercio internacional por NOVELTRIA International Trade Services. Fundador: Laurent Huiskens.',
    metaKeywords: 'blog comercio internacional, noticias import export, auditoría de fábricas, Incoterms 2020, dual sourcing, NOVELTRIA',
    ogTitle: 'Actualidad y Análisis de Comercio Global | Blog NOVELTRIA',
    ogDesc: 'Perspectivas estratégicas, marcos regulatorios y mejores prácticas para operaciones transfronterizas globales.',
    blogSchemaName: 'Blog NOVELTRIA — Inteligencia y Perspectivas de Comercio Global',
    blogSchemaDesc: 'Guías prácticas y análisis estratégicos de mercado dedicados a directivos de comercio transfronterizo.',
    jobTitle: 'Fundador',
    heroBadge: 'Inteligencia y Perspectivas Estratégicas',
    heroTitle: 'Actualidad y Análisis de Comercio Global',
    heroSlogan: 'Métodos operativos, marcos regulatorios y análisis de mercados',
    heroDesc: 'Descubra nuestros artículos especializados sobre los retos contemporáneos de las cadenas de suministro globales, la optimización de las reglas Incoterms y los protocolos de auditoría de fábricas.',
    sectionEyebrow: 'Últimas Publicaciones',
    sectionTitle: 'Guías y Análisis Operativos',
    sectionSubtitle: 'Perspectivas prácticas diseñadas para ayudarle a navegar las transacciones internacionales con total cumplimiento normativo.',
    readAnalysis: 'Leer análisis completo',
    readTime5: '5 min de lectura',
    readTime6: '6 min de lectura',
    readTime4: '4 min de lectura',
    tagSourcing: 'Sourcing',
    tagLogistics: 'Logística',
    tagQuality: 'Calidad',
    date1: '15 de octubre de 2026',
    date2: '08 de octubre de 2026',
    date3: '28 de septiembre de 2026',
    article1Title: 'Cómo asegurar las cadenas de suministro globales frente a la volatilidad geopolítica',
    article1Desc: 'La diversificación de proveedores ya no es una opción, sino un imperativo de resiliencia industrial. Análisis de estrategias de dual sourcing y criterios de homologación de centros productivos alternativos.',
    article1Alt: 'Instalación de producción industrial e ingeniería de aprovisionamiento',
    article2Title: 'Incoterms 2020: Elegir entre FOB, CIF y DAP para optimizar los costes de flete',
    article2Desc: 'La elección de la regla Incoterms determina la transferencia del riesgo y el control sobre los costes portuarios. Guía comparativa para evitar sobrecostes aduaneros imprevistos en puerto de destino.',
    article2Alt: 'Buque portacontenedores de gran porte navegando en alta mar',
    article3Title: '5 pasos esenciales para auditar una fábrica extranjera antes del primer anticipo',
    article3Desc: 'Contratar con un fabricante internacional exige una verificación rigurosa de su existencia legal, solvencia mercantil y capacidad fabril real antes de cualquier transferencia bancaria.',
    article3Alt: 'Inspección técnica y control de calidad en planta de producción textil',
    intelEyebrow: 'Inteligencia Estratégica',
    intelTitle: 'Manténgase informado sobre la evolución del comercio internacional',
    intelDesc: 'Publicamos periódicamente análisis exhaustivos sobre reglamentaciones aduaneras, índices de flete marítimo y oportunidades estratégicas de abastecimiento.',
    intelBtn: 'Proponer un tema de análisis',
    ctaEyebrow: '¿Necesita Asesoramiento?',
    ctaTitle: '¿Tiene un reto específico de aprovisionamiento o exportación?',
    ctaSubtitle: 'Nuestros especialistas evalúan la viabilidad operativa de su proyecto con absoluta discreción.',
    ctaBtn: 'Contactar con nuestro equipo'
  },
  it: {
    pageTitle: 'Notizie e Approfondimenti sul Commercio Globale | Blog NOVELTRIA',
    metaDesc: 'Analisi operative, metodologie di sourcing e aggiornamenti normativi sul commercio internazionale a cura di NOVELTRIA International Trade Services. Fondatore: Laurent Huiskens.',
    metaKeywords: 'blog commercio internazionale, notizie import export, audit di fabbrica, Incoterms 2020, dual sourcing, NOVELTRIA',
    ogTitle: 'Notizie e Approfondimenti sul Commercio Globale | Blog NOVELTRIA',
    ogDesc: 'Prospettive strategiche, quadri normativi e best practice per le operazioni commerciali transfrontaliere.',
    blogSchemaName: 'Blog NOVELTRIA — Intelligence e Analisi sul Commercio Globale',
    blogSchemaDesc: 'Guide operative e analisi strategiche di mercato dedicate ai leader del commercio transfrontaliero.',
    jobTitle: 'Fondatore',
    heroBadge: 'Intelligence e Prospettive Strategiche',
    heroTitle: 'Notizie e Approfondimenti sul Commercio Globale',
    heroSlogan: 'Metodologie operative, quadri normativi e analisi di mercato',
    heroDesc: 'Esplorate i nostri approfondimenti dedicati alle sfide delle catene di approvvigionamento globali, alla corretta applicazione degli Incoterms e ai protocolli di audit degli stabilimenti produttivi.',
    sectionEyebrow: 'Ultime Pubblicazioni',
    sectionTitle: 'Guide e Analisi Operative',
    sectionSubtitle: 'Approfondimenti concreti per gestire le vostre transazioni internazionali nella massima conformità normativa.',
    readAnalysis: 'Leggi l\'analisi completa',
    readTime5: '5 min di lettura',
    readTime6: '6 min di lettura',
    readTime4: '4 min di lettura',
    tagSourcing: 'Sourcing',
    tagLogistics: 'Logistica',
    tagQuality: 'Qualità',
    date1: '15 ottobre 2026',
    date2: '08 ottobre 2026',
    date3: '28 settembre 2026',
    article1Title: 'Come rendere resilienti le catene di fornitura globali di fronte alla volatilità geopolitica',
    article1Desc: 'La diversificazione dei fornitori non è più una scelta accessoria, ma una necessità per la resilienza industriale. Analisi delle strategie di dual sourcing e criteri di qualificazione dei poli produttivi alternativi.',
    article1Alt: 'Impianto di produzione industriale e ingegneria degli approvvigionamenti',
    article2Title: 'Incoterms 2020: Scegliere tra FOB, CIF e DAP per ottimizzare i costi di trasporto',
    article2Desc: 'La selezione della clausola Incoterms determina il passaggio del rischio e il controllo sui costi accessori portuali. Guida comparativa per evitare costi doganali imprevisti all\'arrivo in porto.',
    article2Alt: 'Nave portacontainer di grandi dimensioni in navigazione oceanica',
    article3Title: '5 passaggi essenziali per condurre l\'audit di una fabbrica estera prima dell\'acconto',
    article3Desc: 'Avviare una commessa con un produttore internazionale richiede un rigoroso accertamento dell\'esistenza legale, della solvibilità e della reale capacità produttiva prima di emettere bonifici.',
    article3Alt: 'Ispezione tecnica e audit di conformità qualitativa in impianto tessile',
    intelEyebrow: 'Intelligence Strategica',
    intelTitle: 'Rimanete informati sulle evoluzioni del commercio globale',
    intelDesc: 'Pubblichiamo regolarmente analisi approfondite su normative doganali, andamento dei noli marittimi e opportunità di sourcing strategico.',
    intelBtn: 'Suggerisci un argomento di analisi',
    ctaEyebrow: 'Desiderate una Consulenza?',
    ctaTitle: 'Dovete affrontare una sfida complessa di approvvigionamento o export?',
    ctaSubtitle: 'I nostri specialisti valutano la fattibilità operativa del vostro progetto nella massima discrezione.',
    ctaBtn: 'Contattare il nostro team'
  },
  de: {
    pageTitle: 'Aktuelles &amp; Globale Handelseinblicke | NOVELTRIA Blog',
    metaDesc: 'Operative Analysen, Beschaffungsmethoden und außenwirtschaftliche Leitfäden von NOVELTRIA International Trade Services. Gründer: Laurent Huiskens.',
    metaKeywords: 'Außenhandels-Blog, Import Export News, Werksaudit China, Incoterms 2020, Dual Sourcing, NOVELTRIA',
    ogTitle: 'Aktuelles &amp; Globale Handelseinblicke | NOVELTRIA Blog',
    ogDesc: 'Strategische Marktanalysen, rechtliche Rahmenbedingungen und Best Practices für weltweite grenzüberschreitende Handelsgeschäfte.',
    blogSchemaName: 'NOVELTRIA Blog — Globale Handelseinblicke &amp; Marktanalysen',
    blogSchemaDesc: 'Praxisnahe Leitfäden und strategische Marktanalysen für Führungskräfte im internationalen Handel.',
    jobTitle: 'Gründer',
    heroBadge: 'Markteinblicke &amp; Strategische Perspektiven',
    heroTitle: 'Aktuelles &amp; Globale Handelseinblicke',
    heroSlogan: 'Operative Methodik, regulatorische Rahmenbedingungen und Marktanalysen',
    heroDesc: 'Vertiefen Sie Ihr Wissen mit unseren fundierten Beiträgen zu aktuellen Herausforderungen globaler Lieferketten, präziser Anwendung der Incoterms und systematischen Werksaudits.',
    sectionEyebrow: 'Neueste Veröffentlichungen',
    sectionTitle: 'Leitfäden &amp; Operative Analysen',
    sectionSubtitle: 'Praxisbezogene Fachanalysen, um internationale Handelsgeschäfte mit maximaler Rechtssicherheit zu steuern.',
    readAnalysis: 'Vollständige Analyse lesen',
    readTime5: '5 Min. Lesezeit',
    readTime6: '6 Min. Lesezeit',
    readTime4: '4 Min. Lesezeit',
    tagSourcing: 'Sourcing',
    tagLogistics: 'Logistik',
    tagQuality: 'Qualität',
    date1: '15. Oktober 2026',
    date2: '08. Oktober 2026',
    date3: '28. September 2026',
    article1Title: 'Globale Lieferketten gegen geopolitische Volatilität systematisch absichern',
    article1Desc: 'Die Diversifizierung von Lieferanten ist keine Option mehr, sondern eine Grundvoraussetzung industrieller Resilienz. Eine Analyse von Dual-Sourcing-Strategien und Bewertungskriterien alternativer Fertigungsstandorte.',
    article1Alt: 'Industrielle Fertigungsanlage und Beschaffungsingenieurwesen',
    article2Title: 'Incoterms 2020: Wahl zwischen FOB, CIF und DAP zur Optimierung der Frachtkosten',
    article2Desc: 'Die Klauselwahl entscheidet über den Gefahrenübergang und die Kontrolle über Hafenzuschläge. Ein Vergleichsleitfaden zur Vermeidung unerwarteter Abfertigungskosten im Bestimmungshafen.',
    article2Alt: 'Großes Containerschiff auf offener See',
    article3Title: '5 unverzichtbare Schritte für das Werksaudit vor Leistung der ersten Anzahlung',
    article3Desc: 'Die Auftragsvergabe an einen ausländischen Hersteller erfordert vor jeder Anzahlung die lückenlose Prüfung von Handelsregistereintragung, Bonität und tatsächlicher Fertigungskapazität.',
    article3Alt: 'Technische Inspektion und Qualitätsprüfung in einem Textilbetrieb',
    intelEyebrow: 'Strategische Marktbeobachtung',
    intelTitle: 'Bleiben Sie über globale Handelsentwicklungen informiert',
    intelDesc: 'Wir veröffentlichen in regelmäßigen Abständen Fachanalysen zu Zollbestimmungen, Frachtratenindizes und strategischen Beschaffungschancen.',
    intelBtn: 'Themenvorschlag einreichen',
    ctaEyebrow: 'Beratungsbedarf?',
    ctaTitle: 'Stehen Sie vor einer konkreten Herausforderung im Sourcing oder Export?',
    ctaSubtitle: 'Unsere Spezialisten prüfen die operative Machbarkeit Ihres Vorhabens mit absoluter Diskretion.',
    ctaBtn: 'Mit unserem Team abstimmen'
  },
  zh: {
    pageTitle: '资讯与全球贸易洞察 | NOVELTRIA 官方专栏',
    metaDesc: 'NOVELTRIA International Trade Services 提供的全球供应链实务分析、采购寻源方法论与国际贸易合规洞察。创始人：Laurent Huiskens。',
    metaKeywords: '国际贸易博客, 进出口资讯, 海外验厂流程, Incoterms 2020, 双源采购, NOVELTRIA',
    ogTitle: '资讯与全球贸易洞察 | NOVELTRIA 官方专栏',
    ogDesc: '为跨国商业领袖提供战略市场研判、法规前沿解读与全球跨境交易最佳实务。',
    blogSchemaName: 'NOVELTRIA 专栏 — 全球贸易情报与战略洞见',
    blogSchemaDesc: '专为跨国贸易决策者提供的实务操作指南与全球宏观商业洞察。',
    jobTitle: '创始人',
    heroBadge: '商业情报与战略视野',
    heroTitle: '资讯与全球贸易洞察',
    heroSlogan: '实操方法论、法规演进分析与全球市场前瞻',
    heroDesc: '深入探讨应对当今全球供应链脆弱性的前沿策略、Incoterms 条款精细化应用及海外代工厂合规实地验厂全流程。',
    sectionEyebrow: '最新发布',
    sectionTitle: '实务指南与专业研判',
    sectionSubtitle: '提供极具操作价值的战略洞察，助您在跨境商业交易中全面合规稳健前行。',
    readAnalysis: '阅读深度分析',
    readTime5: '5 分钟阅读',
    readTime6: '6 分钟阅读',
    readTime4: '4 分钟阅读',
    tagSourcing: '寻源采购',
    tagLogistics: '物流运作',
    tagQuality: '质量核验',
    date1: '2026年10月15日',
    date2: '2026年10月08日',
    date3: '2026年09月28日',
    article1Title: '如何在地缘政治波动格局下构建高韧性全球供应链',
    article1Desc: '供应商多元化已不再仅仅是企业备选方案，而是保障工业供应链韧性的关键支柱。本文深入分析双源采购（dual sourcing）策略及替代生产基地的资质准入审核维度。',
    article1Alt: '现代化工业制造厂区与全球采购工程实务',
    article2Title: 'Incoterms 2020 解析：在 FOB、CIF 与 DAP 之间精准选定最优海运物流成本',
    article2Desc: '国际贸易术语的科学选择直接关乎风险转移临界点与港口杂费控制。本篇对比指南旨在防止目的港出现难以预料的海关及滞港附加费用。',
    article2Alt: '正在大洋中全速航行的大型集装箱班轮',
    article3Title: '支付海外首期预付款之前，实施海外工厂资质审计的 5 大关键步骤',
    article3Desc: '在向海外代工厂电汇定金前，必须严格核验其企业法定登记、官方信用评级及车间实际产能，从源头杜绝供应链违约风险。',
    article3Alt: '服装制造车间现场技术检验与质量审核流程',
    intelEyebrow: '战略商业情报',
    intelTitle: '密切关注全球跨国贸易与供应链最新动向',
    intelDesc: '我们定期发布关于各国海关监管新规、国际航运集装箱运价指数与全球战略寻源机遇的深度行业报告。',
    intelBtn: '提出想要探讨的主题',
    ctaEyebrow: '需要专业建议？',
    ctaTitle: '您在跨国采购或海外市场拓展中是否面临特定挑战？',
    ctaSubtitle: '我们的专家团队秉持高度审慎与严苛保密原则，为您评估项目的实操可行性。',
    ctaBtn: '与我们的团队联络'
  }
};

function generateBlogHtml(lang) {
  const d = blogData[lang];
  const headerHtml = renderHeader(lang, 'blog', 'blog.html');
  const footerHtml = renderFooter(lang);

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": d.blogSchemaName,
    "description": d.blogSchemaDesc,
    "publisher": {
      "@type": "Organization",
      "name": "NOVELTRIA International Trade Services",
      "founder": {
        "@type": "Person",
        "name": "Laurent Huiskens",
        "jobTitle": d.jobTitle
      }
    }
  };

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${d.pageTitle}</title>
  <meta name="description" content="${d.metaDesc}">
  <meta name="keywords" content="${d.metaKeywords}">
  <meta name="author" content="Laurent Huiskens">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://www.noveltria.online/${lang}/blog.html">

  <!-- Multilingual Alternate Links (hreflang) -->
  <link rel="alternate" hreflang="fr" href="https://www.noveltria.online/blog.html">
  <link rel="alternate" hreflang="en" href="https://www.noveltria.online/en/blog.html">
  <link rel="alternate" hreflang="es" href="https://www.noveltria.online/es/blog.html">
  <link rel="alternate" hreflang="it" href="https://www.noveltria.online/it/blog.html">
  <link rel="alternate" hreflang="de" href="https://www.noveltria.online/de/blog.html">
  <link rel="alternate" hreflang="zh" href="https://www.noveltria.online/zh/blog.html">
  <link rel="alternate" hreflang="x-default" href="https://www.noveltria.online/en/blog.html">

  <!-- Open Graph -->
  <meta property="og:type" content="blog">
  <meta property="og:site_name" content="NOVELTRIA International Trade Services">
  <meta property="og:locale" content="${blogData[lang].locale || lang}">
  <meta property="og:title" content="${d.ogTitle}">
  <meta property="og:description" content="${d.ogDesc}">
  <meta property="og:url" content="https://www.noveltria.online/${lang}/blog.html">
  <meta property="og:image" content="https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&w=1200&q=85">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${d.ogTitle}">
  <meta name="twitter:description" content="${d.ogDesc}">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&w=1200&q=85">

  <!-- Favicon -->\n  <link rel="icon" type="image/png" href="../assets/images/favicon.png">\n\n  <!-- Stylesheet -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org Blog Structured Data -->
  <script type="application/ld+json">
  ${JSON.stringify(schemaJson, null, 2)}
  </script>
</head>
<body>

${headerHtml}

  <!-- ==========================================================================
       HERO PAGE
       ========================================================================== -->
  <main>
    <section class="hero hero--page hero--blog" aria-labelledby="blogHeroTitle">
      <div class="container">
        <div class="hero-content">
          <div class="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            <span>${d.heroBadge}</span>
          </div>
          <h1 id="blogHeroTitle" class="hero__title">${d.heroTitle}</h1>
          <p class="hero__slogan">${d.heroSlogan}</p>
          <p class="hero__desc">${d.heroDesc}</p>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         BLOG ARTICLES GRID
         ========================================================================== -->
    <section class="section" aria-labelledby="blogGridTitle">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <span class="section-eyebrow">${d.sectionEyebrow}</span>
          <h2 id="blogGridTitle" class="section-title">${d.sectionTitle}</h2>
          <p class="section-subtitle">${d.sectionSubtitle}</p>
        </div>

        <div class="blog-grid">
          <!-- Article 1 -->
          <article class="blog-card reveal-on-scroll delay-1">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=85" alt="${d.article1Alt}" class="blog-card__img" loading="lazy">
            <div class="blog-card__body">
              <div class="blog-card__meta">
                <span class="blog-card__tag">${d.tagSourcing}</span>
                <time datetime="2026-10-15">${d.date1}</time>
                <span>&bull;</span>
                <span>${d.readTime5}</span>
              </div>
              <h3 class="blog-card__title">${d.article1Title}</h3>
              <p class="blog-card__desc">${d.article1Desc}</p>
              <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid #F0F4F8;">
                <span class="blog-card__link">
                  <span>${d.readAnalysis}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </div>
            </div>
          </article>

          <!-- Article 2 -->
          <article class="blog-card reveal-on-scroll delay-2">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=85" alt="${d.article2Alt}" class="blog-card__img" loading="lazy">
            <div class="blog-card__body">
              <div class="blog-card__meta">
                <span class="blog-card__tag">${d.tagLogistics}</span>
                <time datetime="2026-10-08">${d.date2}</time>
                <span>&bull;</span>
                <span>${d.readTime6}</span>
              </div>
              <h3 class="blog-card__title">${d.article2Title}</h3>
              <p class="blog-card__desc">${d.article2Desc}</p>
              <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid #F0F4F8;">
                <span class="blog-card__link">
                  <span>${d.readAnalysis}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </div>
            </div>
          </article>

          <!-- Article 3 -->
          <article class="blog-card reveal-on-scroll delay-3">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85" alt="${d.article3Alt}" class="blog-card__img" loading="lazy">
            <div class="blog-card__body">
              <div class="blog-card__meta">
                <span class="blog-card__tag">${d.tagQuality}</span>
                <time datetime="2026-09-28">${d.date3}</time>
                <span>&bull;</span>
                <span>${d.readTime4}</span>
              </div>
              <h3 class="blog-card__title">${d.article3Title}</h3>
              <p class="blog-card__desc">${d.article3Desc}</p>
              <div style="margin-top: auto; padding-top: 14px; border-top: 1px solid #F0F4F8;">
                <span class="blog-card__link">
                  <span>${d.readAnalysis}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         STRATEGIC INTELLIGENCE SECTION
         ========================================================================== -->
    <section class="section section--alt" style="padding: 70px 0;">
      <div class="container">
        <div class="reveal-on-scroll" style="max-width: 760px; margin: 0 auto; text-align: center; background-color: var(--color-white); border: 1px solid var(--color-gray-border); border-radius: var(--radius-lg); padding: 40px; box-shadow: var(--shadow-sm);">
          <span class="section-eyebrow" style="color: var(--color-secondary);">${d.intelEyebrow}</span>
          <h3 style="font-size: 24px; margin-bottom: 12px; color: var(--color-primary);">${d.intelTitle}</h3>
          <p style="font-size: 14px; color: var(--color-gray-text); line-height: 1.6; margin-bottom: 24px;">${d.intelDesc}</p>
          <a href="contact.html" class="btn btn-secondary">${d.intelBtn}</a>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         CALL TO ACTION PRESTIGE
         ========================================================================== -->
    <section class="section section--dark reveal-on-scroll" style="text-align: center;">
      <div class="container">
        <span class="section-eyebrow" style="color: #E6CE9F;">${d.ctaEyebrow}</span>
        <h2 class="section-title" style="color: #FFFFFF; max-width: 800px; margin: 0 auto 20px auto;">${d.ctaTitle}</h2>
        <p class="section-subtitle" style="color: #CBD5E0; max-width: 680px; margin: 0 auto 36px auto;">${d.ctaSubtitle}</p>
        <a href="contact.html" class="btn btn-primary" style="padding: 16px 36px; font-size: 15px;">${d.ctaBtn}</a>
      </div>
    </section>
  </main>

${footerHtml}

  <script src="../js/script.js"></script>
</body>
</html>
`;
}

languages.forEach(lang => {
  const filePath = path.join(websiteDir, lang, 'blog.html');
  fs.writeFileSync(filePath, generateBlogHtml(lang), 'utf-8');
  console.log(`Generated: ${filePath}`);
});
