const fs = require('fs');
const path = require('path');
const { languages, navData, renderHeader, renderFooter, websiteDir } = require('./generator-core');

const indexData = {
  es: {
    pageTitle: 'NOVELTRIA International Trade Services — Intermediación y Sourcing Global',
    metaDesc: 'NOVELTRIA International Trade Services, asesoría de corretaje y sourcing internacional. Sourcing, desarrollo de mercados y negociación bajo mandato escrito exclusivo. Fundador: Laurent Huiskens.',
    metaKeywords: 'importación exportación, sourcing internacional, intermediación comercial, negociación mandato, comercio internacional, Laurent Huiskens',
    ogTitle: 'NOVELTRIA International Trade Services — Su socio para desarrollar su comercio internacional',
    ogDesc: 'Desarrolle sus intercambios globales con un socio de intermediación riguroso y transparente que opera bajo mandato escrito exclusivo.',
    heroBadge: 'Intermediación Estratégica y Sourcing',
    heroTitle: 'Desarrolle su Comercio Internacional con Confianza y Seguridad',
    heroSlogan: '“Su socio para desarrollar su comercio internacional”',
    heroDesc: 'NOVELTRIA acompaña a las empresas en la securización de sus flujos de importación y exportación a nivel mundial. Identificación metódica de proveedores, apertura de mercados y negociación comercial bajo mandato escrito exclusivo.',
    btnExplore: 'Conozca nuestros servicios',
    btnMethod: 'Nuestra metodología',
    introEyebrow: 'Compromiso e Integridad',
    introTitle: 'Una visión ética del corretaje internacional',
    introP1: 'En un comercio transfronterizo a menudo dominado por la opacidad y los múltiples intermediarios, NOVELTRIA International Trade Services redefine la intermediación comercial a través de un modelo fundado en la transparencia contractual y la exclusividad del mandato.',
    introP2: 'Defendemos rigurosamente los intereses de nuestros mandantes —compradores o vendedores— descartando de forma sistemática cualquier conflicto de intereses y garantizando una trazabilidad integral de cada etapa de negociación.',
    quoteName: 'Laurent Huiskens',
    quoteTitle: 'Fundador de NOVELTRIA',
    quoteText: '« Nuestra misión es brindar a los líderes empresariales la seguridad y la serenidad indispensables para desarrollar sus aprovisionamientos y mercados exteriores. »',
    founderAlt: 'Laurent Huiskens, fundador de NOVELTRIA International Trade Services',
    servicesEyebrow: 'Estructura de Servicios',
    servicesTitle: 'Nuestros Campos de Intervención',
    servicesSubtitle: 'Una distinción estricta y transparente entre nuestras misiones de peritaje directo y el acompañamiento logístico coordinado caso por caso con especialistas cualificados.',
    catABadge: 'Categoría A — Peritaje Directo',
    catATitle: 'Intermediación y Sourcing bajo Mandato',
    catADesc: 'Servicios centrales ejecutados directamente por NOVELTRIA en virtud de un contrato de mandato escrito formalizado, garantizando lealtad exclusiva a sus intereses.',
    catA1Title: 'Búsqueda y Cualificación de Proveedores',
    catA1Desc: 'Auditoría de fábricas, verificación de capacidad real y selección personalizada según su pliego de condiciones técnicas.',
    catA2Title: 'Búsqueda de Compradores y Mercados de Exportación',
    catA2Desc: 'Desarrollo de negocio B2B internacional para conectar su producción con distribuidores comerciales solventes.',
    catA3Title: 'Intermediación Comercial y Negociación Formalizada',
    catA3Desc: 'Negociación estructurada de tarifas, instrumentos de pago seguros y cláusulas contractuales equilibradas.',
    catALink: 'Ver detalles de Categoría A',
    catBBadge: 'Categoría B — Acompañamiento a Medida con Terceros',
    catBTitle: 'Coordinación Logística y Seguridad Operativa',
    catBDesc: 'Acompañamiento prestado caso por caso, coordinado con especialistas externos cualificados para cada disciplina reglamentada.',
    catB1Title: 'Control de Calidad e Inspección previa al Embarque',
    catB1Desc: 'Coordinación de organismos independientes e inspecciones previas al embarque bajo normas internacionales AQL.',
    catB2Title: 'Transporte Internacional Multimodal',
    catB2Desc: 'Orientación estratégica en rutas marítimas, aéreas y terrestres con transitarios de primer nivel.',
    catB3Title: 'Trámites Aduaneros y Seguros',
    catB3Desc: 'Asesoramiento en Incoterms 2020 y enlace con representantes aduaneros y aseguradoras de transporte.',
    catBLink: 'Ver detalles de Categoría B',
    sectorsEyebrow: 'Sectores Industriales',
    sectorsTitle: 'Nuestros Mercados Objetivo Confirmados',
    sectorsSubtitle: 'Cobertura focalizada en tres industrias estratégicas que requieren un control riguroso de los estándares de fabricación y las cadenas de valor globales.',
    sector1Title: 'Textil y Confección',
    sector1Desc: 'Sourcing de materias primas textiles, hilados, tejidos técnicos y prendas acabadas procedentes de fábricas certificadas con estándares europeos.',
    sector2Title: 'Electrónica y Componentes',
    sector2Desc: 'Identificación de fabricantes homologados de componentes electrónicos, circuitos impresos (PCB), subconjuntos industriales y hardware conectado.',
    sector3Title: 'Materiales Industriales y Materias Primas',
    sector3Desc: 'Aprovisionamiento estratégico de metales, polímeros, madera y materias primas para la construcción y la industria de productores internacionales contrastados.',
    ctaEyebrow: 'Asociación Estratégica',
    ctaTitle: '¿Tiene un programa de compras o desea expandirse a nivel internacional?',
    ctaSubtitle: 'Hablemos de sus metas de aprovisionamiento o exportación. Realizamos un estudio de diagnóstico confidencial inicial sin compromiso.',
    ctaBtn: 'Hablar con nuestro equipo'
  },
  it: {
    pageTitle: 'NOVELTRIA International Trade Services — Intermediazione e Sourcing Globale',
    metaDesc: 'NOVELTRIA International Trade Services, consulenza di brokeraggio e sourcing internazionale. Sourcing, espansione sui mercati e negoziazione su mandato scritto esclusivo. Fondatore: Laurent Huiskens.',
    metaKeywords: 'import export, sourcing internazionale, intermediazione commerciale, negoziazione mandato, commercio internazionale, Laurent Huiskens',
    ogTitle: 'NOVELTRIA International Trade Services — Il vostro partner per sviluppare i vostri scambi internazionali',
    ogDesc: 'Sviluppate i vostri scambi globali con un partner di intermediazione rigoroso e trasparente, operativo su mandato scritto esclusivo.',
    heroBadge: 'Intermediazione Strategica e Sourcing',
    heroTitle: 'Sviluppate il Vostro Commercio Internazionale con Sicurezza e Serenità',
    heroSlogan: '“Il vostro partner per sviluppare i vostri scambi internazionali”',
    heroDesc: 'NOVELTRIA affianca le aziende nella messa in sicurezza dei loro flussi di import-export a livello globale. Identificazione metodica dei fornitori, sbocchi commerciali e negoziazione condotta su mandato scritto esclusivo.',
    btnExplore: 'Scoprite i nostri servizi',
    btnMethod: 'La nostra metodologia',
    introEyebrow: 'Impegno e Integrità',
    introTitle: 'Una visione etica del brokeraggio internazionale',
    introP1: 'In un contesto di scambi internazionali spesso dominato da opacità e molteplici intermediari, NOVELTRIA International Trade Services reinventa l\'intermediazione commerciale attraverso un modello fondato sulla trasparenza contrattuale e sull\'esclusività del mandato.',
    introP2: 'Difendiamo rigorosamente gli interessi dei nostri mandanti — acquirenti o venditori — escludendo sistematicamente ogni conflitto di interesse e garantendo la completa tracciabilità di ogni fase negoziale.',
    quoteName: 'Laurent Huiskens',
    quoteTitle: 'Fondatore di NOVELTRIA',
    quoteText: '« La nostra missione è offrire ai dirigenti d\'impresa la sicurezza e la serenità necessarie per sviluppare i loro approvvigionamenti e mercati d\'esportazione. »',
    founderAlt: 'Laurent Huiskens, fondatore di NOVELTRIA International Trade Services',
    servicesEyebrow: 'Struttura dei Servizi',
    servicesTitle: 'I Nostri Ambiti di Intervento',
    servicesSubtitle: 'Una distinzione rigorosa e trasparente tra le nostre missioni di competenza diretta e il supporto logistico coordinato caso per caso con specialisti qualificati.',
    catABadge: 'Categoria A — Competenze Dirette',
    catATitle: 'Intermediazione e Sourcing su Mandato',
    catADesc: 'Servizi essenziali forniti direttamente da NOVELTRIA in forza di una convenzione di mandato scritto, a garanzia di lealtà contrattuale esclusiva.',
    catA1Title: 'Ricerca e Qualifica dei Fornitori',
    catA1Desc: 'Audit delle fabbriche, verifica delle reali capacità produttive e selezione mirata sulla base del vostro capitolato d\'oneri.',
    catA2Title: 'Ricerca Acquirenti e Mercati di Esportazione',
    catA2Desc: 'Sviluppo commerciale B2B internazionale per collegare la vostra produzione a distributori commerciali solvibili.',
    catA3Title: 'Intermediazione Commerciale e Negoziazione Formalizzata',
    catA3Desc: 'Negoziazione tariffaria strutturata, strumenti di pagamento sicuri e clausole contrattuali equilibrate e protettive.',
    catALink: 'Dettagli Categoria A',
    catBBadge: 'Categoria B — Supporto Su Misura con Terzi',
    catBTitle: 'Coordinamento Logistico e Sicurezza Operativa',
    catBDesc: 'Supporto fornito caso per caso, coordinato con specialisti terzi autorizzati per ciascuna disciplina regolamentata.',
    catB1Title: 'Controllo Qualità e Ispezione Pre-imbarco',
    catB1Desc: 'Coordinamento con enti indipendenti e ispezioni prima della spedizione secondo gli standard internazionali AQL.',
    catB2Title: 'Trasporto Internazionale Multimodale',
    catB2Desc: 'Consulenza strategica sulle rotte marittime, aeree e terrestri con spedizionieri internazionali accreditati.',
    catB3Title: 'Formalità Doganali e Assicurazione',
    catB3Desc: 'Consulenza su Incoterms 2020 e raccordo operativo con doganalisti e compagnie assicurative marittime.',
    catBLink: 'Dettagli Categoria B',
    sectorsEyebrow: 'Settori Industriali',
    sectorsTitle: 'I Nostri Settori Operativi Confermati',
    sectorsSubtitle: 'Copertura mirata incentrata su tre comparti strategici che richiedono un attento monitoraggio degli standard produttivi e delle filiere mondiali.',
    sector1Title: 'Tessile e Abbigliamento',
    sector1Desc: 'Sourcing di materie prime tessili, filati, tessuti tecnici e capi confezionati da stabilimenti produttivi certificati secondo gli standard europei.',
    sector2Title: 'Elettronica e Componenti',
    sector2Desc: 'Identificazione di produttori qualificati per componentistica elettronica, circuiti stampati (PCB), sottoinsiemi industriali e hardware.',
    sector3Title: 'Materiali Industriali e Materie Prime',
    sector3Desc: 'Approvvigionamento strategico di metalli, polimeri, legname e materie prime industriali da primari produttori internazionali.',
    ctaEyebrow: 'Partnership Strategica',
    ctaTitle: 'State pianificando un programma di acquisto o di espansione estera?',
    ctaSubtitle: 'Discutiamo dei vostri obiettivi di sourcing o di esportazione. Effettuiamo uno studio diagnostico confidenziale preliminare senza impegno.',
    ctaBtn: 'Confrontatevi con il nostro team'
  },
  de: {
    pageTitle: 'NOVELTRIA International Trade Services — Globale Handelsvermittlung & Sourcing',
    metaDesc: 'NOVELTRIA International Trade Services, internationale Handelsvermittlung und Sourcing-Beratung. Sourcing, Markterschließung und Verhandlung im Rahmen exklusiver schriftlicher Mandate. Gründer: Laurent Huiskens.',
    metaKeywords: 'Import Export, internationales Sourcing, Handelsvermittlung, Mandatsverhandlung, Außenhandel, Laurent Huiskens',
    ogTitle: 'NOVELTRIA International Trade Services — Ihr Partner für die Entwicklung Ihres internationalen Handels',
    ogDesc: 'Bauen Sie Ihren globalen Handel mit einem verlässlichen, transparenten Vermittlungspartner auf, der ausschließlich im Rahmen schriftlicher Mandate agiert.',
    heroBadge: 'Strategische Handelsvermittlung & Sourcing',
    heroTitle: 'Entwickeln Sie Ihren internationalen Handel mit Sicherheit und Weitsicht',
    heroSlogan: '„Ihr Partner für die Entwicklung Ihres internationalen Handels“',
    heroDesc: 'NOVELTRIA unterstützt Unternehmen bei der Absicherung weltweiter Import-Export-Ströme. Methodische Lieferantenauswahl, Absatzmarkterschließung und fundierte Verhandlungsführung unter exklusivem schriftlichem Mandat.',
    btnExplore: 'Leistungsübersicht entdecken',
    btnMethod: 'Unsere Methodik',
    introEyebrow: 'Verlässlichkeit & Integrität',
    introTitle: 'Ein wertebasiertes Verständnis internationaler Handelsvermittlung',
    introP1: 'Im grenzüberschreitenden Handel, der häufig von Intransparenz und verschachtelten Zwischenhändlern geprägt ist, definiert NOVELTRIA International Trade Services die gewerbliche Vermittlung durch vertragliche Klarheit und strikte Mandatsbindung neu.',
    introP2: 'Wir vertreten kompromisslos die Interessen unserer Auftraggeber – ob Einkäufer oder Verkäufer – schließen Interessenskonflikte konsequent aus und gewährleisten eine lückenlose Nachvollziehbarkeit sämtlicher Verhandlungsschritte.',
    quoteName: 'Laurent Huiskens',
    quoteTitle: 'Gründer von NOVELTRIA',
    quoteText: '„Unser Ziel ist es, Unternehmensleitern die erforderliche Sicherheit und Verlässlichkeit für ihre weltweiten Beschaffungs- und Exportaktivitäten zu bieten.“',
    founderAlt: 'Laurent Huiskens, Gründer von NOVELTRIA International Trade Services',
    servicesEyebrow: 'Leistungsstruktur',
    servicesTitle: 'Unsere Tätigkeitsfelder',
    servicesSubtitle: 'Eine strikte, transparente Abgrenzung zwischen unseren direkten Beratungs- und Verhandlungsmandaten und begleitenden Logistikdienstleistungen durch qualifizierte Dritte.',
    catABadge: 'Kategorie A — Direkte Fachkompetenz',
    catATitle: 'Vermittlung & Sourcing im Mandatsauftrag',
    catADesc: 'Kernkompetenzen, die von NOVELTRIA auf Basis einer formalen schriftlichen Mandatsvereinbarung mit uneingeschränkter Loyalität erbracht werden.',
    catA1Title: 'Lieferantensuche & -qualifizierung',
    catA1Desc: 'Fabrikaudits, Prüfung tatsächlicher Fertigungskapazitäten und gezielte Vorauswahl anhand Ihres Pflichtenhefts.',
    catA2Title: 'Käufersuche & Exportmärkte',
    catA2Desc: 'Gezielte internationale B2B-Akquise zur Erschließung verlässlicher Absatzmärkte für Ihre Erzeugnisse.',
    catA3Title: 'Handelsvermittlung & formalisierte Verhandlung',
    catA3Desc: 'Strukturierte Preisverhandlungen, Absicherung von Zahlungsmodalitäten und Erstellung ausgewogener Vertragsklauseln.',
    catALink: 'Details zu Kategorie A',
    catBBadge: 'Kategorie B — Begleitende Koordination mit Dritten',
    catBTitle: 'Logistikkoordination & operative Sicherheit',
    catBDesc: 'Bedarfsgerechte Unterstützung in enger Abstimmung mit lizenzierten externen Dienstleistern für reglementierte Bereiche.',
    catB1Title: 'Qualitätskontrolle & Vorversandinspektion',
    catB1Desc: 'Koordination unabhängiger Prüfgesellschaften und Vorversandkontrollen nach anerkannten AQL-Standards.',
    catB2Title: 'Multimodaler internationaler Transport',
    catB2Desc: 'Strategische Beratung zu See-, Luft- und Landfrachtoptionen sowie Einholung von Vergleichsangeboten.',
    catB3Title: 'Zollformalitäten & Transportversicherung',
    catB3Desc: 'Beratung zu Incoterms 2020 sowie Schnittstellenkoordination mit Zollagenturen und Transportversicherern.',
    catBLink: 'Details zu Kategorie B',
    sectorsEyebrow: 'Industriebereiche',
    sectorsTitle: 'Unsere bestätigten Schwerpunktbranchen',
    sectorsSubtitle: 'Fokussierte Betreuung von drei Schlüsselindustrien mit hohen Anforderungen an Fertigungsstandards und Wertschöpfungsketten.',
    sector1Title: 'Textil & Bekleidung',
    sector1Desc: 'Sourcing von textilen Rohstoffen, Garnen, technischen Geweben und Fertigwaren aus nach europäischen Standards zertifizierten Betrieben.',
    sector2Title: 'Elektronik & Komponenten',
    sector2Desc: 'Identifizierung geprüfter Hersteller für elektronische Bauteile, Leiterplatten (PCB), Baugruppen und Hardwarelösungen.',
    sector3Title: 'Industriematerialien & Rohstoffe',
    sector3Desc: 'Strategische Beschaffung von Metallen, Polymeren, Holz und industriellen Rohstoffen bei verlässlichen internationalen Produzenten.',
    ctaEyebrow: 'Strategische Partnerschaft',
    ctaTitle: 'Planen Sie ein Beschaffungsvorhaben oder eine internationale Expansion?',
    ctaSubtitle: 'Lassen Sie uns Ihre Ziele besprechen. Wir erstellen Ihnen eine unverbindliche und vertrauliche Ersteinschätzung.',
    ctaBtn: 'Gespräch vereinbaren'
  },
  zh: {
    pageTitle: 'NOVELTRIA International Trade Services — 全球商业中介与采购寻源',
    metaDesc: 'NOVELTRIA International Trade Services，国际贸易中介与采购咨询机构。依据独家书面委托提供全球寻源、市场拓展与商务谈判服务。创始人：Laurent Huiskens。',
    metaKeywords: '进出口贸易, 国际采购, 商业中介, 委托谈判, 跨国贸易, Laurent Huiskens',
    ogTitle: 'NOVELTRIA International Trade Services — 您发展国际贸易的合作伙伴',
    ogDesc: '携手专业、严谨且信息透明的商业中介机构，在独家书面委托保障下稳健拓展全球商业往来。',
    heroBadge: '战略性商业中介与全球采购',
    heroTitle: '以严谨与信赖，稳健拓展您的国际贸易业务',
    heroSlogan: '“您发展国际贸易的合作伙伴”',
    heroDesc: 'NOVELTRIA 致力于协助企业规范与保障全球进出口贸易流程。在独家书面委托机制下，提供系统的供应商甄选、海外市场拓展与高水准商业谈判服务。',
    btnExplore: '了解我们的服务',
    btnMethod: '服务流程与方法',
    introEyebrow: '恪守诚信与职业操守',
    introTitle: '重塑国际贸易中介的道德标准',
    introP1: '在充满信息不对称与多层中介的跨国贸易环境中，NOVELTRIA International Trade Services 坚持以契约透明与独家委托为基石，树立值得信赖的商业居间新标准。',
    introP2: '我们严格捍卫委托方（买方或卖方）的合法商业权益，从制度上彻底杜绝利益冲突，并确保商业谈判全流程的清晰可追溯。',
    quoteName: 'Laurent Huiskens',
    quoteTitle: 'NOVELTRIA 创始人',
    quoteText: '“我们的使命是为企业决策者提供开展全球采购与海外市场拓展所必需的安全感与确定性。”',
    founderAlt: 'Laurent Huiskens，NOVELTRIA International Trade Services 创始人',
    servicesEyebrow: '服务架构',
    servicesTitle: '我们的业务范畴',
    servicesSubtitle: '严格区分直接专业委托服务与协同第三方特许机构提供的综合物流支持服务，确保权责清晰明了。',
    catABadge: 'A 类 — 直接专业服务',
    catATitle: '独家书面委托下的寻源与商务中介',
    catADesc: '由 NOVELTRIA 依据双方签署的书面委托合同直接执行的核心服务，确保对委托方商业利益的绝对忠实。',
    catA1Title: '供应商寻源与资质审核',
    catA1Desc: '实地工厂评估、真实产能核实，严格依照您的技术规格书完成定制化供应商筛选。',
    catA2Title: '买家开发与出口市场拓展',
    catA2Desc: '针对性的国际 B2B 市场开拓，将您的优质产能对接至具备良好信誉的海外采购商与分销商。',
    catA3Title: '商业居间与规范化谈判',
    catA3Desc: '专业的阶梯价格谈判、结算风控工具设计，以及权责平衡的商业合同条款拟定。',
    catALink: '查看 A 类服务详情',
    catBBadge: 'B 类 — 第三方专业协同支持',
    catBTitle: '物流协调与全流程风控保障',
    catBDesc: '视具体项目需求，协同具备法定资质的第三方特许服务商（货代、报关行、保险机构）提供的定制化支持。',
    catB1Title: '质量控制与装运前检验',
    catB1Desc: '协同独立的国际第三方检测认证机构，依据 AQL 国际标准实施严格的出厂前验货。',
    catB2Title: '多式联运国际运输',
    catB2Desc: '海运整箱/拼箱、空运及陆运多式联运路径优化建议，协助对比优质货代方案。',
    catB3Title: '报关手续与海运保险支持',
    catB3Desc: '国际贸易术语 Incoterms 2020 运用建议，协助对接正规报关行与全额货运一切险。',
    catBLink: '查看 B 类服务详情',
    sectorsEyebrow: '深耕行业',
    sectorsTitle: '我们确认的核心业务领域',
    sectorsSubtitle: '专注深耕三大对供应链品控标准与全球价值链具备严苛要求的重点工业门类。',
    sector1Title: '纺织与服装',
    sector1Desc: '纺织原材料、纱线、功能性面料以及符合欧洲合规标准的成品服装供应商寻源。',
    sector2Title: '电子与元器件',
    sector2Desc: '电子元器件、印制电路板（PCB）、工业电气模块及智能硬件制造厂家的遴选与审核。',
    sector3Title: '工业材料与原材料',
    sector3Desc: '金属材料、工程塑料、工业木材及大宗工业生产原料的优质国际源头采购。',
    ctaEyebrow: '战略协同',
    ctaTitle: '正在规划海外采购或开拓国际市场？',
    ctaSubtitle: '欢迎与我们深入沟通您的业务构想。我们将为您提供前期的保密可行性评估。',
    ctaBtn: '与我们的团队洽谈'
  }
};

function generateIndexHtml(lang) {
  const d = indexData[lang];
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
  <link rel="canonical" href="https://www.noveltria.com/${lang}/index.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${n.locale}">
  <meta property="og:title" content="${d.ogTitle}">
  <meta property="og:description" content="${d.ogDesc}">
  <meta property="og:url" content="https://www.noveltria.com/${lang}/index.html">
  <meta property="og:image" content="https://www.noveltria.com/assets/images/hero-accueil.png">

  <!-- Favicon -->\n  <link rel="icon" type="image/png" href="../assets/images/favicon.png">\n\n  <!-- Stylesheet -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NOVELTRIA International Trade Services",
    "alternateName": "NOVELTRIA",
    "url": "https://www.noveltria.com/${lang}/",
    "logo": "https://www.noveltria.com/assets/images/logo-full.png",
    "description": "${d.metaDesc}",
    "founder": {
      "@type": "Person",
      "name": "Laurent Huiskens",
      "jobTitle": "${lang === 'es' ? 'Fundador' : (lang === 'it' ? 'Fondatore' : (lang === 'de' ? 'Gründer' : '创始人'))}"
    },
    "slogan": "${d.heroSlogan.replace(/“|”|„|«|»/g, '')}"
  }
  </script>
</head>
<body>

${renderHeader(lang, 'index', 'index.html')}

  <!-- ==========================================================================
       HERO BANNER
       ========================================================================== -->
  <main>
    <section class="hero hero--index" aria-labelledby="heroTitle">
      <div class="container">
        <div class="hero-content">
          <div class="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${d.heroBadge}</span>
          </div>
          <h1 id="heroTitle" class="hero__title">${d.heroTitle}</h1>
          <p class="hero__slogan">${d.heroSlogan}</p>
          <p class="hero__desc">${d.heroDesc}</p>
          <div class="hero__actions">
            <a href="services.html" class="btn btn-primary">${d.btnExplore}</a>
            <a href="about.html" class="btn btn-outline-white">${d.btnMethod}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         FOUNDER & VISION SECTION
         ========================================================================== -->
    <section class="section" aria-labelledby="introTitle">
      <div class="container">
        <div class="founder-card reveal-on-scroll">
          <div class="founder-card__content">
            <span class="section-eyebrow">${d.introEyebrow}</span>
            <h2 id="introTitle" class="section-title">${d.introTitle}</h2>
            <p style="margin-bottom: 16px;">${d.introP1}</p>
            <p style="margin-bottom: 24px;">${d.introP2}</p>
            
            <div class="quote-box">
              <div class="quote-box__name">${d.quoteName}</div>
              <div class="quote-box__title">${d.quoteTitle}</div>
              <blockquote class="quote-box__text">${d.quoteText}</blockquote>
            </div>
          </div>
          <div class="founder-card__img-wrap">
            <img src="../assets/images/founder.png" alt="${d.founderAlt}" class="founder-card__img" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         SERVICES SECTION (CATEGORY A vs CATEGORY B)
         ========================================================================== -->
    <section class="section section--alt" aria-labelledby="servicesTitle">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <span class="section-eyebrow">${d.servicesEyebrow}</span>
          <h2 id="servicesTitle" class="section-title">${d.servicesTitle}</h2>
          <p class="section-subtitle">${d.servicesSubtitle}</p>
        </div>

        <div class="services-grid">
          <!-- Category A Card -->
          <div class="service-card service-card--a reveal-on-scroll delay-1">
            <span class="service-badge service-badge--a">${d.catABadge}</span>
            <h3 class="service-card__title">${d.catATitle}</h3>
            <p class="service-card__desc">${d.catADesc}</p>
            
            <div class="service-card__items">
              <div class="service-item">
                <div class="service-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <div>
                  <h4 class="service-item__title">${d.catA1Title}</h4>
                  <p class="service-item__desc">${d.catA1Desc}</p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 2 12 12 19 12"></polyline></svg>
                </div>
                <div>
                  <h4 class="service-item__title">${d.catA2Title}</h4>
                  <p class="service-item__desc">${d.catA2Desc}</p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                </div>
                <div>
                  <h4 class="service-item__title">${d.catA3Title}</h4>
                  <p class="service-item__desc">${d.catA3Desc}</p>
                </div>
              </div>
            </div>

            <a href="services.html#category-a" class="btn btn-secondary" style="margin-top: auto;">${d.catALink}</a>
          </div>

          <!-- Category B Card -->
          <div class="service-card service-card--b reveal-on-scroll delay-2">
            <span class="service-badge service-badge--b">${d.catBBadge}</span>
            <h3 class="service-card__title">${d.catBTitle}</h3>
            <p class="service-card__desc">${d.catBDesc}</p>
            
            <div class="service-card__items">
              <div class="service-item">
                <div class="service-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <h4 class="service-item__title">${d.catB1Title}</h4>
                  <p class="service-item__desc">${d.catB1Desc}</p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div>
                  <h4 class="service-item__title">${d.catB2Title}</h4>
                  <p class="service-item__desc">${d.catB2Desc}</p>
                </div>
              </div>

              <div class="service-item">
                <div class="service-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div>
                  <h4 class="service-item__title">${d.catB3Title}</h4>
                  <p class="service-item__desc">${d.catB3Desc}</p>
                </div>
              </div>
            </div>

            <a href="services.html#category-b" class="btn btn-secondary" style="margin-top: auto;">${d.catBLink}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         CONFIRMED INDUSTRIAL SECTORS
         ========================================================================== -->
    <section class="section" aria-labelledby="sectorsTitle">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <span class="section-eyebrow">${d.sectorsEyebrow}</span>
          <h2 id="sectorsTitle" class="section-title">${d.sectorsTitle}</h2>
          <p class="section-subtitle">${d.sectorsSubtitle}</p>
        </div>

        <div class="sectors-grid">
          <div class="sector-card reveal-on-scroll delay-1">
            <img src="../assets/images/sector-textile.jpg" alt="${d.sector1Title}" class="sector-card__img" loading="lazy">
            <div class="sector-card__body">
              <h3 class="sector-card__title">${d.sector1Title}</h3>
              <p class="sector-card__desc">${d.sector1Desc}</p>
            </div>
          </div>

          <div class="sector-card reveal-on-scroll delay-2">
            <img src="../assets/images/sector-electronics.jpg" alt="${d.sector2Title}" class="sector-card__img" loading="lazy">
            <div class="sector-card__body">
              <h3 class="sector-card__title">${d.sector2Title}</h3>
              <p class="sector-card__desc">${d.sector2Desc}</p>
            </div>
          </div>

          <div class="sector-card reveal-on-scroll delay-3">
            <img src="../assets/images/sector-materials.jpg" alt="${d.sector3Title}" class="sector-card__img" loading="lazy">
            <div class="sector-card__body">
              <h3 class="sector-card__title">${d.sector3Title}</h3>
              <p class="sector-card__desc">${d.sector3Desc}</p>
            </div>
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
  const filePath = path.join(websiteDir, lang, 'index.html');
  const html = generateIndexHtml(lang);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: ${filePath}`);
});
