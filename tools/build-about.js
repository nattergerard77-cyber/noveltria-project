const fs = require('fs');
const path = require('path');
const { languages, navData, renderHeader, renderFooter, websiteDir } = require('./generator-core');

const aboutData = {
  es: {
    pageTitle: 'Quiénes somos | NOVELTRIA International Trade Services — Nuestra Visión y Fundador',
    metaDesc: 'Descubra los orígenes de NOVELTRIA International Trade Services, nuestro modelo de intermediación bajo mandato escrito exclusivo y la visión del fundador Laurent Huiskens.',
    metaKeywords: 'Quiénes somos NOVELTRIA, Laurent Huiskens fundador, intermediación comercio internacional, mandato de sourcing, transparencia comercial',
    ogTitle: 'Quiénes somos | NOVELTRIA International Trade Services',
    ogDesc: 'Descubra nuestro enfoque del corretaje internacional bajo mandato escrito y el compromiso de integridad impulsado por su fundador Laurent Huiskens.',
    heroBadge: 'Casa de Intermediación Internacional',
    heroTitle: 'Construir Puentes Sólidos en los Mercados Globales',
    heroSlogan: 'Rigor operativo, independencia estratégica y claridad contractual',
    heroDesc: 'Descubra la génesis de NOVELTRIA International Trade Services, nuestro código deontológico bajo mandato escrito y el compromiso de integridad defendido por nuestro fundador, Laurent Huiskens.',
    originsEyebrow: 'Orígenes y Ambición',
    originsTitle: 'En los Orígenes de NOVELTRIA',
    originsP1: 'El comercio internacional contemporáneo exige mucho más que una simple puesta en relación: requiere una disciplina absoluta, un conocimiento profundo de las realidades productivas y una transparencia total en cada eslabón de la cadena de valor.',
    originsP2: 'Iniciado por Laurent Huiskens, <strong>NOVELTRIA International Trade Services</strong> nació de una constatación clara: ante la creciente complejidad de los intercambios transfronterizos, las empresas necesitan un socio de confianza capaz de defender sus intereses con exclusividad durante las fases críticas de negociación y selección de socios.',
    originsP3: 'Situando la ética y el rigor metodológico en el centro de su actuación, NOVELTRIA proporciona a las empresas medianas y a los operadores industriales consolidados la seguridad y serenidad necesarias para blindar sus operaciones de importación y exportación.',
    quoteName: 'Laurent Huiskens',
    quoteTitle: 'Fundador de NOVELTRIA',
    quoteText: '« Nuestra ambición con NOVELTRIA es devolver al corretaje internacional sus más altos estándares de excelencia: defensa sin concesiones de los intereses del mandante, transparencia contractual intachable y rigor operativo constante. »',
    founderAlt: 'Laurent Huiskens, fundador de NOVELTRIA International Trade Services',
    mandateEyebrow: 'Ética y Seguridad',
    mandateTitle: 'Un Modelo Fundado en el Mandato Exclusivo',
    mandateSubtitle: 'Por qué la intermediación formalizada por escrito constituye la mayor garantía para sus intereses financieros e industriales.',
    m1Title: 'Representación sin Conflicto de Intereses',
    m1Desc: 'A diferencia de las prácticas opacas de corretaje que cobran comisiones a ambas partes, NOVELTRIA opera estrictamente bajo mandato para un único mandante: el comprador o el vendedor. No se acepta ningún incentivo contradictorio.',
    m2Title: 'Protección del Secreto Comercial (NDA)',
    m2Desc: 'Cada misión viene precedida por la firma de un estricto acuerdo bilateral de confidencialidad. Sus especificaciones técnicas, planos de fabricación, listas de compra y condiciones financieras quedan herméticamente protegidos.',
    m3Title: 'Trazabilidad e Informes Estructurados',
    m3Desc: 'Usted mantiene visibilidad completa en cada fase de prospección. Se le entregan dosieres comparativos detallados de fábricas y análisis de precios con total objetividad analítica.',
    valuesEyebrow: 'Pilares Fundamentales',
    valuesTitle: 'Nuestros Compromisos de Excelencia',
    valuesSubtitle: 'Tres pilares fundamentales sustentan cada una de las misiones asumidas por NOVELTRIA International Trade Services.',
    v1Num: '01',
    v1Title: 'Rigor Operativo',
    v1Desc: 'Metodología contrastada de auditoría preliminar para cada fábrica o comprador identificado. Filtramos ofertas no cualificadas e intermediarios dudosos desde la fase de prospección.',
    v2Num: '02',
    v2Title: 'Claridad Contractual',
    v2Desc: 'Cada compromiso se rige por contratos transparentes y documentados. Delimitamos previamente el alcance exacto de nuestra intervención y los límites de nuestro mandato.',
    v3Num: '03',
    v3Title: 'Alianzas Duraderas',
    v3Desc: 'Privilegiamos la construcción de colaboraciones comerciales resilientes y rentables a largo plazo, frente a operaciones puntuales especulativas de alto riesgo.',
    ctaEyebrow: 'Contactar',
    ctaTitle: '¿Desea analizar su estrategia de compras internacionales con nuestro fundador?',
    ctaSubtitle: 'Comparta con nosotros sus objetivos de importación o exportación para una primera evaluación confidencial de viabilidad.',
    ctaBtn: 'Iniciar contacto'
  },
  it: {
    pageTitle: 'Chi siamo | NOVELTRIA International Trade Services — La Nostra Visione e il Fondatore',
    metaDesc: 'Scoprite la genesi di NOVELTRIA International Trade Services, il nostro modello di intermediazione su mandato scritto esclusivo e la visione del fondatore Laurent Huiskens.',
    metaKeywords: 'Chi siamo NOVELTRIA, Laurent Huiskens fondatore, intermediazione commercio internazionale, mandato di sourcing, trasparenza commerciale',
    ogTitle: 'Chi siamo | NOVELTRIA International Trade Services',
    ogDesc: 'Scoprite il nostro approccio al brokeraggio internazionale su mandato scritto e l\'impegno per l\'integrità promosso dal fondatore Laurent Huiskens.',
    heroBadge: 'Casa di Intermediazione Internazionale',
    heroTitle: 'Costruire Ponti Solidi tra i Mercati Globali',
    heroSlogan: 'Rigore operativo, indipendenza strategica e chiarezza contrattuale',
    heroDesc: 'Scoprite la genesi di NOVELTRIA International Trade Services, la nostra etica professionale su mandato scritto e l\'impegno di trasparenza guidato dal nostro fondatore, Laurent Huiskens.',
    originsEyebrow: 'Origini e Ambizione',
    originsTitle: 'Alle Origini di NOVELTRIA',
    originsP1: 'Il commercio internazionale contemporaneo richiede molto più di una semplice messa in contatto: esige una disciplina impeccabile, una comprensione approfondita delle realtà produttive e una totale trasparenza in ogni anello della catena.',
    originsP2: 'Iniziativa di Laurent Huiskens, <strong>NOVELTRIA International Trade Services</strong> nasce da una constatazione precisa: di fronte alla crescente complessità degli scambi transfrontalieri, le imprese necessitano di un partner fidato capace di difendere esclusivamente i loro interessi durante le fasi cruciali di selezione e negoziazione.',
    originsP3: 'Ponendo l\'etica e il rigore metodologico al centro della propria azione, NOVELTRIA offre alle PMI e ai gruppi industriali la tranquillità necessaria per mettere in sicurezza le loro operazioni di import-export.',
    quoteName: 'Laurent Huiskens',
    quoteTitle: 'Fondatore di NOVELTRIA',
    quoteText: '« La nostra ambizione con NOVELTRIA è restituire al brokeraggio internazionale i suoi più nobili standard: difesa intransigente degli interessi del mandante, trasparenza contrattuale assoluta e continuità nell\'eccellenza operativa. »',
    founderAlt: 'Laurent Huiskens, fondatore di NOVELTRIA International Trade Services',
    mandateEyebrow: 'Etica e Sicurezza',
    mandateTitle: 'Un Modello Fondato sul Mandato Esclusivo',
    mandateSubtitle: 'Perché l\'intermediazione formalizzata per iscritto costituisce la più solida tutela per i vostri interessi economici e industriali.',
    m1Title: 'Rappresentanza Senza Conflitti di Interesse',
    m1Desc: 'A differenza delle pratiche opache di mediazione che percepiscono provvigioni da entrambe le parti, NOVELTRIA opera esclusivamente su mandato per un unico mandante: l\'acquirente o il venditore. Nessun compenso divergente è ammesso.',
    m2Title: 'Tutela del Segreto Commerciale (NDA)',
    m2Desc: 'Ogni incarico è preceduto dalla sottoscrizione di un rigoroso accordo bilaterale di riservatezza. Le vostre specifiche tecniche, i disegni industriali, i volumi d\'acquisto e le condizioni economiche restano rigorosamente protetti.',
    m3Title: 'Tracciabilità e Reportistica Strutturata',
    m3Desc: 'Mantenete una visibilità costante durante ogni fase di prospezione. Riceverete dossier comparativi approfonditi sulle fabbriche e analisi tariffarie condotte con imparzialità oggettiva.',
    valuesEyebrow: 'Pilastri Istituzionali',
    valuesTitle: 'I Nostri Impegni per l\'Eccellenza',
    valuesSubtitle: 'Tre valori cardine definiscono l\'operato e ogni incarico assunto da NOVELTRIA International Trade Services.',
    v1Num: '01',
    v1Title: 'Rigore Operativo',
    v1Desc: 'Una metodologia consolidata di verifica preliminare per ciascuna fabbrica o compratore individuato. Eliminiamo offerte prive di requisiti e intermediari non qualificati fin dalla prima fase di screening.',
    v2Num: '02',
    v2Title: 'Chiarezza Contrattuale',
    v2Desc: 'Ogni collaborazione è disciplinata da contratti trasparenti e dettagliati. Definiamo preventivamente e con esattezza il perimetro della nostra delega e i confini dell\'intervento.',
    v3Num: '03',
    v3Title: 'Partnership Durevoli',
    v3Desc: 'Privilegiamo la costruzione di relazioni commerciali solide e fruttuose nel lungo periodo, rifiutando operazioni speculative o estemporanee ad alto rischio.',
    ctaEyebrow: 'Contattaci',
    ctaTitle: 'Desiderate esaminare la vostra strategia di approvvigionamento estero con il nostro fondatore?',
    ctaSubtitle: 'Condividete i vostri obiettivi di acquisto o di espansione per un primo studio di fattibilità confidenziale.',
    ctaBtn: 'Avviare il contatto'
  },
  de: {
    pageTitle: 'Über uns | NOVELTRIA International Trade Services — Vision & Gründer',
    metaDesc: 'Erfahren Sie mehr über die Entstehung von NOVELTRIA International Trade Services, unser Mandatsmodell im Außenhandel und das Leitbild unseres Gründers Laurent Huiskens.',
    metaKeywords: 'Über NOVELTRIA, Laurent Huiskens Gründer, internationale Handelsvermittlung, Sourcing Mandat, geschäftliche Transparenz',
    ogTitle: 'Über uns | NOVELTRIA International Trade Services',
    ogDesc: 'Entdecken Sie unseren Ansatz der Handelsvermittlung unter schriftlichem Mandat und das klare Bekenntnis zu Integrität von Gründer Laurent Huiskens.',
    heroBadge: 'Internationales Vermittlungshaus',
    heroTitle: 'Verlässliche Brücken auf den weltweiten Märkten schlagen',
    heroSlogan: 'Operative Gründlichkeit, strategische Unabhängigkeit und vertragliche Klarheit',
    heroDesc: 'Erfahren Sie mehr über die Ursprünge von NOVELTRIA International Trade Services, unseren ethischen Kodex im Rahmen schriftlicher Mandate und den Qualitätsanspruch unseres Gründers, Laurent Huiskens.',
    originsEyebrow: 'Ursprung & Ausrichtung',
    originsTitle: 'An den Wurzeln von NOVELTRIA',
    originsP1: 'Der moderne Außenhandel erfordert weit mehr als die bloße Kontaktvermittlung: Er verlangt uneingeschränkte Disziplin, profundes Verständnis fertigungstechnischer Realitäten und vollständige Transparenz entlang der gesamten Wertschöpfungskette.',
    originsP2: 'Gegründet von Laurent Huiskens, entstand <strong>NOVELTRIA International Trade Services</strong> aus einer klaren Einsicht: Angesichts zunehmender Komplexität im grenzüberschreitenden Geschäftsverkehr benötigen Unternehmen einen integren Partner, der ihre Interessen in entscheidenden Verhandlungsphasen exklusiv vertritt.',
    originsP3: 'Mit professioneller Ethik und methodischer Präzision gibt NOVELTRIA mittelständischen Unternehmen und etablierten Industrieakteuren die notwendige Sicherheit zur Absicherung ihrer internationalen Handelsaktivitäten.',
    quoteName: 'Laurent Huiskens',
    quoteTitle: 'Gründer von NOVELTRIA',
    quoteText: '„Unser Anspruch mit NOVELTRIA ist es, die Exzellenz der internationalen Handelsvermittlung hochzuhalten: kompromisslose Interessenvertretung für den Auftraggeber, transparente Vertragswerke und verlässliche operative Standards.“',
    founderAlt: 'Laurent Huiskens, Gründer von NOVELTRIA International Trade Services',
    mandateEyebrow: 'Ethik & Sicherheit',
    mandateTitle: 'Ein Modell auf Basis des exklusiven Mandats',
    mandateSubtitle: 'Warum die schriftlich fixierte Handelsvermittlung den verlässlichsten Schutz für Ihre unternehmerischen und finanziellen Interessen darstellt.',
    m1Title: 'Interessenvertretung ohne Zielkonflikte',
    m1Desc: 'Im Gegensatz zu intransparenten Vermittlungspraktiken, die von beiden Vertragsparteien Provisionen beziehen, agiert NOVELTRIA ausschließlich für einen einzigen Auftraggeber: entweder den Käufer oder den Verkäufer.',
    m2Title: 'Schutz von Geschäftsgeheimnissen (NDA)',
    m2Desc: 'Jedem Mandat geht der Abschluss einer verbindlichen Geheimhaltungsvereinbarung voraus. Ihre Konstruktionspläne, Rezepturen, Preisstrukturen und Lieferlisten bleiben absolut geschützt.',
    m3Title: 'Rückverfolgbarkeit & fundierte Berichte',
    m3Desc: 'Sie behalten während sämtlicher Recherche- und Verhandlungsphasen den vollen Einblick. Detaillierte Werksüberprüfungen und Preisvergleiche werden nach objektiven Maßstäben erstellt.',
    valuesEyebrow: 'Grundwerte',
    valuesTitle: 'Unsere Leitlinien für Exzellenz',
    valuesSubtitle: 'Drei grundlegende Pfeiler prägen jeden Auftrag, den NOVELTRIA International Trade Services begleitet.',
    v1Num: '01',
    v1Title: 'Operative Gründlichkeit',
    v1Desc: 'Eine erprobte Methodik zur Vorabprüfung jedes potentiellen Lieferanten oder Abnehmers. Unzureichende Angebote und zweifelhafte Mittelsmänner werden frühzeitig herausgefiltert.',
    v2Num: '02',
    v2Title: 'Vertragliche Klarheit',
    v2Desc: 'Jede Beauftragung basiert auf präzisen und transparenten Vereinbarungen. Wir definieren den Rahmen unseres Tätigwerdens und die Verhandlungskompetenzen im Vorfeld unmissverständlich.',
    v3Num: '03',
    v3Title: 'Nachhaltige Partnerschaften',
    v3Desc: 'Wir setzen auf den Aufbau langfristiger, tragfähiger Geschäftsbeziehungen anstatt kurzlebiger und riskanter Spekulationsgeschäfte.',
    ctaEyebrow: 'Kontakt',
    ctaTitle: 'Möchten Sie Ihre internationale Einkaufs- oder Exportstrategie mit unserem Gründer besprechen?',
    ctaSubtitle: 'Teilen Sie uns Ihre Vorhaben für eine vertrauliche Ersteinschätzung mit.',
    ctaBtn: 'Kontakt aufnehmen'
  },
  zh: {
    pageTitle: '关于我们 | NOVELTRIA International Trade Services — 核心理念与创始人',
    metaDesc: '了解 NOVELTRIA International Trade Services 的创立初心、独家书面委托中介服务模式以及创始人 Laurent Huiskens 的专业愿景。',
    metaKeywords: '关于 NOVELTRIA, Laurent Huiskens 创始人, 国际贸易中介, 采购委托, 商业透明度',
    ogTitle: '关于我们 | NOVELTRIA International Trade Services',
    ogDesc: '了解我们基于独家书面委托的商业中介服务模式，以及创始人 Laurent Huiskens 所倡导的职业道德准则。',
    heroBadge: '国际贸易中介机构',
    heroTitle: '为全球经贸往来架设稳健共赢的合作桥梁',
    heroSlogan: '严谨的操作标准、独立的战略立场、清晰的契约保障',
    heroDesc: '深入了解 NOVELTRIA International Trade Services 的发展历程、独家书面委托工作准则，以及创始人 Laurent Huiskens 恪守的诚信服务承诺。',
    originsEyebrow: '创立初心与宏远愿景',
    originsTitle: 'NOVELTRIA 的创立源起',
    originsP1: '现代国际贸易对专业中介的要求，早已超越了简单的商务引荐：它需要严苛的业务规范、对实体制造细节的敏锐洞察，以及对供应链各环节的高度透明度。',
    originsP2: '由 Laurent Huiskens 创办，<strong>NOVELTRIA International Trade Services</strong> 诞生于一个明确的行业洞察：面对日趋复杂的跨国贸易规则与地缘环境，企业亟需一家值得托付的专业机构，在供应商谈判与合作伙伴甄选的关键阶段，独家、坚定地捍卫自身的商业利益。',
    originsP3: '以崇高的商业道德与系统的分析方法为立足之本，NOVELTRIA 赋能广大中型企业与大型工业集团，为其进出口业务提供稳固的安全屏障与确定性。',
    quoteName: 'Laurent Huiskens',
    quoteTitle: 'NOVELTRIA 创始人',
    quoteText: '“我们创立 NOVELTRIA 的宏愿，是重塑国际贸易中介的高标准：不打折扣地捍卫委托方的商业利益、坚持严谨规范的合同条款，并始终保持卓越的操作水准。”',
    founderAlt: 'Laurent Huiskens，NOVELTRIA International Trade Services 创始人',
    mandateEyebrow: '商业伦理与安全保障',
    mandateTitle: '立足独家书面委托的中介模式',
    mandateSubtitle: '为何规范的书面委托机制是保障您企业财务与供应链资产最坚实的后盾。',
    m1Title: '坚决杜绝利益冲突的独家代表机制',
    m1Desc: '与向买卖双方同时收取隐蔽佣金的传统中介截然不同，NOVELTRIA 始终坚持单向书面委托：我们仅代表买方或仅代表卖方，杜绝任何立场冲突，保障绝对的商业忠诚。',
    m2Title: '严格保护商业秘密（NDA 保密协议）',
    m2Desc: '每一项委托启动前均严格签署具有法律效力的双边保密协议。您的技术图纸、工艺配方、采购清单与财务核算均处于绝对密闭的保密状态。',
    m3Title: '全流程可追溯性与结构化汇报',
    m3Desc: '在整个寻源与商务洽谈过程中，您享有完全的知情权。我们将为您提供详实客观的工厂对比评估报告与价格核算明细，数据严密客观。',
    valuesEyebrow: '核心基石',
    valuesTitle: '我们对卓越品质的坚定承诺',
    valuesSubtitle: '三大核心支柱贯穿于 NOVELTRIA International Trade Services 所承接的每一项服务委托。',
    v1Num: '01',
    v1Title: '严谨操作',
    v1Desc: '对每家目标工厂或采购方执行严格的准入调查，从寻源初期即剔除虚假报价与非合规中间商。',
    v2Num: '02',
    v2Title: '契约清晰',
    v2Desc: '所有委托均以详尽的书面合同为依据，预先明确服务权责边界与授权范围，绝无模棱两可。',
    v3Num: '03',
    v3Title: '长远合作',
    v3Desc: '我们专注于协助客户构建稳固、可持续且互利共赢的长期供应链生态，摒弃高风险的短期投机行为。',
    ctaEyebrow: '建立联系',
    ctaTitle: '希望与我们的创始人深入探讨您的国际采购或出口战略？',
    ctaSubtitle: '欢迎随时向我们简要阐述您的项目设想，我们将为您提供初步的保密可行性评估。',
    ctaBtn: '立即建立联系'
  }
};

function generateAboutHtml(lang) {
  const d = aboutData[lang];
  const n = navData[lang];

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
  <link rel="canonical" href="https://www.noveltria.com/${lang}/about.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${n.locale}">
  <meta property="og:title" content="${d.ogTitle}">
  <meta property="og:description" content="${d.ogDesc}">
  <meta property="og:url" content="https://www.noveltria.com/${lang}/about.html">
  <meta property="og:image" content="https://www.noveltria.com/assets/images/hero-apropos.png">

  <!-- Favicon -->\n  <link rel="icon" type="image/png" href="../assets/images/favicon.png">\n\n  <!-- Stylesheet -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "${d.pageTitle}",
    "description": "${d.metaDesc}",
    "publisher": {
      "@type": "Organization",
      "name": "NOVELTRIA International Trade Services",
      "founder": {
        "@type": "Person",
        "name": "Laurent Huiskens",
        "jobTitle": "${lang === 'es' ? 'Fundador' : (lang === 'it' ? 'Fondatore' : (lang === 'de' ? 'Gründer' : '创始人'))}"
      }
    }
  }
  </script>
</head>
<body>

${renderHeader(lang, 'about', 'about.html')}

  <!-- ==========================================================================
       HERO PAGE
       ========================================================================== -->
  <main>
    <section class="hero hero--page hero--about" aria-labelledby="aboutHeroTitle">
      <div class="container">
        <div class="hero-content">
          <div class="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span>${d.heroBadge}</span>
          </div>
          <h1 id="aboutHeroTitle" class="hero__title">${d.heroTitle}</h1>
          <p class="hero__slogan">${d.heroSlogan}</p>
          <p class="hero__desc">${d.heroDesc}</p>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         FOUNDER & GENESIS SECTION
         ========================================================================== -->
    <section class="section" aria-labelledby="founderSectionTitle">
      <div class="container">
        <div class="founder-card reveal-on-scroll">
          <div class="founder-card__content">
            <span class="section-eyebrow">${d.originsEyebrow}</span>
            <h2 id="founderSectionTitle" class="section-title">${d.originsTitle}</h2>
            <p style="margin-bottom: 16px;">${d.originsP1}</p>
            <p style="margin-bottom: 16px;">${d.originsP2}</p>
            <p style="margin-bottom: 24px;">${d.originsP3}</p>

            <div class="quote-box">
              <div class="quote-box__name">${d.quoteName}</div>
              <div class="quote-box__title">${d.quoteTitle}</div>
              <blockquote class="quote-box__text">${d.quoteText}</blockquote>
            </div>
          </div>
          <div class="founder-card__img-wrap">
            <img src="../assets/images/founder-about.png" alt="${d.founderAlt}" class="founder-card__img founder-card__img--about" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         THE WRITTEN MANDATE MODEL
         ========================================================================== -->
    <section class="section section--alt" aria-labelledby="mandateSectionTitle">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <span class="section-eyebrow">${d.mandateEyebrow}</span>
          <h2 id="mandateSectionTitle" class="section-title">${d.mandateTitle}</h2>
          <p class="section-subtitle">${d.mandateSubtitle}</p>
        </div>

        <div class="services-grid">
          <div class="service-card reveal-on-scroll delay-1" style="border-top: 4px solid var(--color-primary);">
            <div class="service-item__icon" style="margin-bottom: 20px;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 class="service-card__title">${d.m1Title}</h3>
            <p class="service-card__desc">${d.m1Desc}</p>
          </div>

          <div class="service-card reveal-on-scroll delay-2" style="border-top: 4px solid var(--color-accent);">
            <div class="service-item__icon" style="margin-bottom: 20px; color: var(--color-accent);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h3 class="service-card__title">${d.m2Title}</h3>
            <p class="service-card__desc">${d.m2Desc}</p>
          </div>

          <div class="service-card reveal-on-scroll delay-3" style="border-top: 4px solid var(--color-secondary);">
            <div class="service-item__icon" style="margin-bottom: 20px; color: var(--color-secondary);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
            </div>
            <h3 class="service-card__title">${d.m3Title}</h3>
            <p class="service-card__desc">${d.m3Desc}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         INSTITUTIONAL VALUES
         ========================================================================== -->
    <section class="section" aria-labelledby="valuesTitle">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <span class="section-eyebrow">${d.valuesEyebrow}</span>
          <h2 id="valuesTitle" class="section-title">${d.valuesTitle}</h2>
          <p class="section-subtitle">${d.valuesSubtitle}</p>
        </div>

        <div class="sectors-grid">
          <div class="sector-card reveal-on-scroll delay-1" style="padding: 32px;">
            <div style="font-size: 32px; font-weight: 800; color: var(--color-accent); margin-bottom: 12px;">${d.v1Num}</div>
            <h3 style="font-size: 20px; margin-bottom: 12px; color: var(--color-primary);">${d.v1Title}</h3>
            <p style="font-size: 14px; color: var(--color-gray-text); line-height: 1.65;">${d.v1Desc}</p>
          </div>

          <div class="sector-card reveal-on-scroll delay-2" style="padding: 32px;">
            <div style="font-size: 32px; font-weight: 800; color: var(--color-accent); margin-bottom: 12px;">${d.v2Num}</div>
            <h3 style="font-size: 20px; margin-bottom: 12px; color: var(--color-primary);">${d.v2Title}</h3>
            <p style="font-size: 14px; color: var(--color-gray-text); line-height: 1.65;">${d.v2Desc}</p>
          </div>

          <div class="sector-card reveal-on-scroll delay-3" style="padding: 32px;">
            <div style="font-size: 32px; font-weight: 800; color: var(--color-accent); margin-bottom: 12px;">${d.v3Num}</div>
            <h3 style="font-size: 20px; margin-bottom: 12px; color: var(--color-primary);">${d.v3Title}</h3>
            <p style="font-size: 14px; color: var(--color-gray-text); line-height: 1.65;">${d.v3Desc}</p>
          </div>
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

${renderFooter(lang)}

  <script src="../js/script.js"></script>
</body>
</html>
`;
}

languages.forEach(lang => {
  const filePath = path.join(websiteDir, lang, 'about.html');
  const html = generateAboutHtml(lang);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: ${filePath}`);
});
