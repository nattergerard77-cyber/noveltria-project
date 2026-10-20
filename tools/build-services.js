const fs = require('fs');
const path = require('path');
const { languages, navData, renderHeader, renderFooter, websiteDir } = require('./generator-core');

const servicesData = {
  es: {
    pageTitle: 'Servicios | NOVELTRIA International Trade Services — Sourcing y Corretaje',
    metaDesc: 'Descubra nuestros servicios de intermediación en comercio internacional: Sourcing y expansión comercial bajo mandato (Categoría A) y coordinación logística con terceros (Categoría B). Fundador: Laurent Huiskens.',
    metaKeywords: 'sourcing internacional, corretaje importación exportación, negociación bajo mandato, control de calidad, transporte internacional, Incoterms, NOVELTRIA',
    ogTitle: 'Servicios | NOVELTRIA International Trade Services',
    ogDesc: 'Soluciones estructuradas para blindar sus transacciones internacionales: Categoría A (Mandato Directo) y Categoría B (Coordinación con Terceros).',
    serviceSchemaType: 'Intermediación en comercio internacional y sourcing bajo mandato',
    serviceSchemaDesc: 'Búsqueda de proveedores, prospección de compradores internacionales, negociación bajo mandato escrito y coordinación logística.',
    heroBadge: 'Catálogo Oficial de Servicios',
    heroTitle: 'Soluciones Estructuradas para Blindar su Comercio Global',
    heroSlogan: 'Una delimitación rigurosa entre nuestro peritaje directo y el acompañamiento logístico con terceros',
    heroDesc: 'NOVELTRIA garantiza una total transparencia sobre el alcance de sus misiones: distinguimos claramente las prestaciones directas ejecutadas bajo mandato escrito (Categoría A) de los servicios de soporte logístico coordinados con especialistas cualificados (Categoría B).',
    catAEyebrow: 'Peritaje Central de la Firma',
    catATitle: 'Categoría A — Intermediación y Mandato Directo',
    catASubtitle: 'Estas misiones son ejecutadas directamente por NOVELTRIA International Trade Services. Se rigen por un contrato formal de mandato escrito, garantizando lealtad exclusiva a sus intereses comerciales y la ausencia absoluta de conflicto de intereses.',
    a1Title: 'Búsqueda y Cualificación de Proveedores',
    a1Desc: 'Identificamos y homologamos fabricantes internacionales solventes y competitivos, capaces de responder con precisión a su pliego de condiciones técnicas.',
    a1Points: [
      'Identificación metódica de centros de producción competitivos.',
      'Verificación preliminar de licencias de explotación y capacidad real.',
      'Gestión y validación técnica de muestras de preproducción.',
      'Elaboración de dosieres comparativos detallados de precios y condiciones.'
    ],
    a2Title: 'Búsqueda de Compradores y Mercados de Exportación',
    a2Desc: 'Prospectamos activamente compradores, distribuidores e importadores cualificados para abrir canales de exportación sostenibles para sus productos.',
    a2Points: [
      'Mapeo de distribuidores regionales y centrales de compra objetivo.',
      'Cualificación de solvencia comercial y volumen de compras recurrente.',
      'Presentación estructurada de su capacidad industrial y catálogo.',
      'Puesta en relación directa con interlocutores y decisores comerciales.'
    ],
    a3Title: 'Intermediación Comercial y Negociación Formalizada',
    a3Desc: 'Negociamos las condiciones comerciales en su nombre exclusivo para asegurar márgenes óptimos, pagos protegidos y garantías contractuales sólidas.',
    a3Points: [
      'Negociación estructurada de precios unitarios según escalas de volumen.',
      'Fijación de plazos firmes de entrega y cláusulas de penalización.',
      'Instrumentos internacionales de pago seguros (Créditos documentarios).',
      'Redacción de acuerdos marco transparentes y sin ambigüedades.'
    ],
    catBEyebrow: 'Acompañamiento y Coordinación',
    catBTitle: 'Categoría B — Seguridad y Coordinación con Terceros',
    catBSubtitle: 'Estos servicios se proponen caso por caso para reforzar sus operaciones. NOVELTRIA no ejerce directamente profesiones reglamentadas (transportista, agente de aduanas o asegurador), pero coordina en su nombre a socios homologados y certificados.',
    b1Title: 'Control de Calidad e Inspección previa al Embarque',
    b1Desc: 'Definición conjunta de protocolos de prueba y coordinación con organismos de inspección independientes para verificar la conformidad de las mercancías antes del embarque según normas AQL.',
    b2Title: 'Transporte Internacional Multimodal',
    b2Desc: 'Asesoramiento estratégico para arbitrar entre transporte marítimo (FCL contenedor completo o LCL grupaje), aéreo y terrestre, con licitación comparativa entre transitarios fiables.',
    b3Title: 'Trámites Aduaneros e Incoterms 2020',
    b3Desc: 'Asesoramiento especializado sobre la regla Incoterm adecuada (FOB, CIF, DAP, DDP) para evitar sobrecostes portuarios, y enlace operativo con agentes de aduanas colegiados.',
    b4Title: 'Seguro de Transporte Marítimo Ad Valorem',
    b4Desc: 'Información sobre las limitaciones legales de responsabilidad de los transportistas e introducción ante corredores de seguros para proteger sus cargas hasta el 100% del valor comercial real.',
    methodEyebrow: 'Metodología',
    methodTitle: 'Nuestro Proceso de Intervención en 4 Etapas',
    methodSubtitle: 'Un marco de actuación estructurado para garantizar el éxito de cada misión de intermediación comercial.',
    s1Num: 'Etapa 1',
    s1Title: 'Cadrage y NDA',
    s1Desc: 'Firma previa de un acuerdo bilateral de confidencialidad y formalización detallada de sus requisitos técnicos, presupuestarios y de calendario.',
    s2Num: 'Etapa 2',
    s2Title: 'Convenio de Mandato',
    s2Desc: 'Redacción y firma del mandato escrito que define con precisión el alcance de nuestra delegación negociadora y la estructura de honorarios.',
    s3Num: 'Etapa 3',
    s3Title: 'Sourcing y Negociación',
    s3Desc: 'Prospección activa de mercados internacionales, cualificación documental de fábricas, negociación comercial y validación de muestras.',
    s4Num: 'Etapa 4',
    s4Title: 'Formalización y Traspaso',
    s4Desc: 'Perfeccionamiento contractual directo entre usted y la contraparte seleccionada, con asistencia en la coordinación de inspección y transporte.',
    ctaEyebrow: 'Diagnóstico Preliminar',
    ctaTitle: '¿Preparado para asegurar sus compras o exportaciones internacionales?',
    ctaSubtitle: 'Contáctenos para realizar un diagnóstico de viabilidad preliminar y confidencial de su proyecto de comercio internacional.',
    ctaBtn: 'Solicitar una consulta'
  },
  it: {
    pageTitle: 'Servizi | NOVELTRIA International Trade Services — Sourcing e Brokeraggio',
    metaDesc: 'Scoprite i nostri servizi di intermediazione nel commercio internazionale: Sourcing ed espansione su mandato (Categoria A) e supporto logistico coordinato con terzi (Categoria B). Fondatore: Laurent Huiskens.',
    metaKeywords: 'sourcing internazionale, brokeraggio import export, negoziazione su mandato, controllo qualità, trasporto internazionale, Incoterms, NOVELTRIA',
    ogTitle: 'Servizi | NOVELTRIA International Trade Services',
    ogDesc: 'Soluzioni strutturate per mettere in sicurezza i vostri scambi globali: Categoria A (Mandato Diretto) e Categoria B (Coordinamento con Terzi).',
    serviceSchemaType: 'Intermediazione nel commercio internazionale e sourcing su mandato',
    serviceSchemaDesc: 'Ricerca fornitori, ricerca acquirenti export, negoziazione commerciale su mandato scritto e coordinamento logistico.',
    heroBadge: 'Catalogo Ufficiale dei Servizi',
    heroTitle: 'Soluzioni Strutturate per Proteggere il Vostro Commercio Globale',
    heroSlogan: 'Una rigorosa demarcazione tra le nostre competenze dirette e l\'assistenza logistica di terzi',
    heroDesc: 'NOVELTRIA garantisce la massima trasparenza sull\'ambito d\'intervento: distinguiamo in modo netto i servizi di intermediazione diretta eseguiti su mandato scritto (Categoria A) dai servizi di supporto logistico coordinati con primari partner specialistici (Categoria B).',
    catAEyebrow: 'Competenze Dirette della Casa',
    catATitle: 'Categoria A — Intermediazione e Mandato Diretto',
    catASubtitle: 'Questi incarichi sono svolti direttamente da NOVELTRIA International Trade Services. Sono disciplinati da una convenzione di mandato scritto formale, che assicura esclusività, lealtà verso i vostri interessi e totale assenza di conflitti.',
    a1Title: 'Ricerca e Qualifica dei Fornitori',
    a1Desc: 'Identifichiamo e selezioniamo produttori internazionali affidabili e solvibili, in grado di soddisfare puntualmente i vostri capitolati tecnici e standard qualitativi.',
    a1Points: [
      'Mappatura metodica dei bacini produttivi esteri più competitivi.',
      'Verifica preliminare delle licenze aziendali e della capacità effettiva.',
      'Gestione operativa e validazione tecnica dei campioni di pre-produzione.',
      'Dossier comparativi completi su prezzi unitari e condizioni di fornitura.'
    ],
    a2Title: 'Ricerca Acquirenti e Mercati di Esportazione',
    a2Desc: 'Sviluppiamo proattivamente contatti con acquirenti, distributori e importatori qualificati per aprire canali di vendita esteri stabili per i vostri manufatti.',
    a2Points: [
      'Mappatura dei distributori e gruppi d\'acquisto nei mercati target.',
      'Valutazione della solvibilità commerciale e della frequenza d\'ordine.',
      'Presentazione strutturata della vostra offerta industriale e del catalogo.',
      'Introduzione diretta presso i responsabili degli acquisti internazionali.'
    ],
    a3Title: 'Intermediazione Commerciale e Negoziazione Formalizzata',
    a3Desc: 'Negoziamo i termini commerciali esclusivamente per vostro conto per massimizzare la marginalità, blindare i pagamenti e fissare garanzie certe.',
    a3Points: [
      'Trattative tariffarie basate su scaglioni di volume concordati.',
      'Definizione di tempistiche di spedizione vincolanti e penali contrattuali.',
      'Adozione di strumenti di pagamento internazionali sicuri (Lettere di credito).',
      'Redazione di accordi quadro commerciali trasparenti e privi di ambiguità.'
    ],
    catBEyebrow: 'Supporto e Coordinamento',
    catBTitle: 'Categoria B — Sicurezza Operativa e Coordinamento con Terzi',
    catBSubtitle: 'Questi servizi sono attivati caso per caso per consolidare le vostre operazioni. NOVELTRIA non esercita direttamente professioni regolamentate (spedizioniere, doganalista o assicuratore), ma coordina per vostro conto partner abilitati.',
    b1Title: 'Controllo Qualità e Ispezione Pre-imbarco',
    b1Desc: 'Definizione condivisa dei criteri di collaudo e coordinamento con enti d\'ispezione terzi per verificare la conformità dei prodotti prima della partenza secondo standard AQL.',
    b2Title: 'Trasporto Internazionale Multimodale',
    b2Desc: 'Assistenza strategica nella scelta tra trasporto marittimo (container completi FCL o raggruppamento LCL), aereo e su gomma, con comparazione tariffaria tra spedizionieri.',
    b3Title: 'Formalità Doganali e Incoterms 2020',
    b3Desc: 'Consulenza specifica sulla corretta applicazione degli Incoterms (FOB, CIF, DAP, DDP) per evitare ritardi doganali, con interfaccia verso spedizionieri doganali autorizzati.',
    b4Title: 'Assicurazione Merci Ad Valorem',
    b4Desc: 'Informazione sui limiti legali di responsabilità vettoriale e raccordo con broker assicurativi marittimi per tutelare le merci fino al 100% del loro valore commerciale reale.',
    methodEyebrow: 'Metodologia',
    methodTitle: 'Il Nostro Metodo Operativo in 4 Fasi',
    methodSubtitle: 'Un percorso strutturato per assicurare il successo di ogni missione di intermediazione negli scambi internazionali.',
    s1Num: 'Fase 1',
    s1Title: 'Inquadramento & NDA',
    s1Desc: 'Sottoscrizione preliminare di un accordo di riservatezza e formalizzazione analitica delle vostre esigenze tecniche, finanziarie e temporali.',
    s2Num: 'Fase 2',
    s2Title: 'Convenzione di Mandato',
    s2Desc: 'Stesura e firma del mandato scritto che fissa con chiarezza i limiti della delega negoziale e la struttura dei compensi.',
    s3Num: 'Fase 3',
    s3Title: 'Sourcing & Negoziazione',
    s3Desc: 'Prospezione attiva dei mercati internazionali, audit documentale dei fornitori, conduzione delle trattative e convalida campionaria.',
    s4Num: 'Fase 4',
    s4Title: 'Esecuzione & Passaggio di consegne',
    s4Desc: 'Perfezionamento contrattuale diretto tra voi e la controparte individuata, con supporto coordinato per controlli e logistica.',
    ctaEyebrow: 'Diagnosi Preliminare',
    ctaTitle: 'Pronti a mettere in sicurezza i vostri approvvigionamenti o l\'export?',
    ctaSubtitle: 'Contattateci per uno studio diagnostico di fattibilità confidenziale e preliminare per il vostro progetto.',
    ctaBtn: 'Richiedere una consulenza'
  },
  de: {
    pageTitle: 'Leistungen | NOVELTRIA International Trade Services — Sourcing & Vermittlung',
    metaDesc: 'Entdecken Sie unsere Dienstleistungen im Außenhandel: Sourcing und Markterschließung unter Mandat (Kategorie A) sowie begleitende Logistikkoordination mit Dritten (Kategorie B). Gründer: Laurent Huiskens.',
    metaKeywords: 'internationales Sourcing, Handelsvermittlung Import Export, Mandatsverhandlung, Qualitätskontrolle, internationaler Transport, Incoterms, NOVELTRIA',
    ogTitle: 'Leistungen | NOVELTRIA International Trade Services',
    ogDesc: 'Strukturierte Lösungen zur Absicherung Ihres globalen Handels: Kategorie A (Direktmandat) und Kategorie B (Koordination mit Dritten).',
    serviceSchemaType: 'Internationale Handelsvermittlung und Sourcing unter Mandat',
    serviceSchemaDesc: 'Lieferantensuche, Exportkäufersuche, kaufmännische Verhandlung unter schriftlichem Mandat und begleitende Logistikkoordination.',
    heroBadge: 'Offizieller Leistungskatalog',
    heroTitle: 'Strukturierte Lösungen zur Absicherung Ihres globalen Handels',
    heroSlogan: 'Eine strikte Abgrenzung zwischen unserer Kernexpertise und begleitenden Logistikleistungen Dritter',
    heroDesc: 'NOVELTRIA gewährleistet vollkommene Transparenz bezüglich des Leistungsumfangs: Wir trennen klar zwischen direkten Vermittlungs- und Verhandlungsmandaten (Kategorie A) und logistischer Unterstützung durch lizenzierte Partner (Kategorie B).',
    catAEyebrow: 'Kernkompetenz des Hauses',
    catATitle: 'Kategorie A — Vermittlung & Direktmandat',
    catASubtitle: 'Diese Aufgaben werden von NOVELTRIA International Trade Services unmittelbar wahrgenommen. Sie basieren auf einem formellen schriftlichen Mandatsvertrag, der uneingeschränkte Loyalität zu Ihren Interessen und die Vermeidung von Interessenkonflikten garantiert.',
    a1Title: 'Lieferantensuche & -qualifizierung',
    a1Desc: 'Wir identifizieren und überprüfen leistungsstarke, bonitätsgeprüfte internationale Hersteller, die Ihre technischen Spezifikationen und Qualitätsanforderungen exakt erfüllen.',
    a1Points: [
      'Methodische Identifikation wettbewerbsfähiger weltweiter Fertigungsstandorte.',
      'Vorabprüfung von Betriebslizenzen und tatsächlichen Produktionskapazitäten.',
      'Betreuung und technische Abnahme von Vorserienmustern.',
      'Erstellung fundierter Vergleichsdossiers zu Preisen und Werkskonditionen.'
    ],
    a2Title: 'Käufersuche & Exportmärkte',
    a2Desc: 'Wir akquirieren zielgerichtet solvente Abnehmer, Händler und Importeure, um Ihren Produkten nachhaltige Absatzchancen auf Auslandsmärkten zu eröffnen.',
    a2Points: [
      'Kartierung relevanter regionaler Distributoren und Einkaufsverbände.',
      'Prüfung der Bonität und des wiederkehrenden Auftragsvolumens.',
      'Strukturierte Präsentation Ihres Leistungsspektrums und Katalogs.',
      'Direkte Herbeiführung von Gesprächen mit kaufmännischen Entscheidern.'
    ],
    a3Title: 'Handelsvermittlung & formalisierte Verhandlung',
    a3Desc: 'Wir verhandeln Vertragskonditionen ausschließlich in Ihrem Auftrag, um vorteilhafte Margen, Zahlungssicherheit und belastbare Vereinbarungen zu erzielen.',
    a3Points: [
      'Strukturierte Preisverhandlungen auf Basis definierter Mengenstaffeln.',
      'Vereinbarung verbindlicher Liefertermine und durchsetzbarer Pönale.',
      'Einsatz abgesicherter internationaler Zahlungsinstrumente (Akkreditive).',
      'Ausarbeitung transparenter, eindeutiger Rahmenverträge ohne Klausellücken.'
    ],
    catBEyebrow: 'Begleitung & Koordination',
    catBTitle: 'Kategorie B — Sicherheit & Koordination mit Dritten',
    catBSubtitle: 'Diese Leistungen werden bedarfsorientiert erbracht, um Ihre Transaktionen abzusichern. NOVELTRIA übt keine reglementierten Berufe (Spediteur, Zollagent oder Assekuranz) direkt aus, koordiniert aber akkreditierte Dienstleister für Sie.',
    b1Title: 'Qualitätskontrolle & Vorversandinspektion',
    b1Desc: 'Gemeinsame Festlegung von Prüfplänen und Koordination unabhängiger Prüfgesellschaften zur Kontrolle der Warenkonformität vor Verladung nach internationalen AQL-Vorgaben.',
    b2Title: 'Multimodaler internationaler Transport',
    b2Desc: 'Strategische Beratung bei der Wahl zwischen Seefracht (FCL Vollcontainer oder LCL Sammelladung), Luftfracht und Landverkehr mit Einholung von Speditionsangeboten.',
    b3Title: 'Zollformalitäten & Incoterms 2020',
    b3Desc: 'Fundierte Beratung zur Wahl der sachgerechten Incoterm-Klausel (FOB, CIF, DAP, DDP) zur Vermeidung von Verzögerungen sowie Schnittstellenführung zu zugelassenen Zollagenturen.',
    b4Title: 'Warentransportversicherung Ad Valorem',
    b4Desc: 'Aufklärung über gesetzliche Haftungsbeschränkungen der Frachtführer und Vermittlung von Transportversicherungsangeboten zur Deckung von bis zu 100 % des Warenwerts.',
    methodEyebrow: 'Methodik',
    methodTitle: 'Unser strukturierter Ablauf in 4 Phasen',
    methodSubtitle: 'Ein verlässlicher Handlungsrahmen für den planbaren Erfolg jedes internationalen Handelsvermittlungsmandats.',
    s1Num: 'Schritt 1',
    s1Title: 'Abstimmung & NDA',
    s1Desc: 'Abschluss einer beiderseitigen Geheimhaltungsvereinbarung und detaillierte Erfassung Ihrer technischen, kaufmännischen und terminlichen Parameter.',
    s2Num: 'Schritt 2',
    s2Title: 'Mandatsvertrag',
    s2Desc: 'Ausarbeitung und Unterzeichnung des schriftlichen Mandats mit exakter Definition des Verhandlungsumfangs und der Vergütungsstruktur.',
    s3Num: 'Schritt 3',
    s3Title: 'Sourcing & Verhandlung',
    s3Desc: 'Aktive Marktrecherche, dokumentarische Überprüfung von Werken, Verhandlungsführung und Freigabe von Produktionsmustern.',
    s4Num: 'Schritt 4',
    s4Title: 'Abschluss & Übergabe',
    s4Desc: 'Direkter Vertragsabschluss zwischen Ihnen und dem gewählten Partner mit koordinierender Begleitung von Fracht und Qualitätsprüfung.',
    ctaEyebrow: 'Ersteinschätzung',
    ctaTitle: 'Bereit, Ihre internationalen Beschaffungs- oder Exportvorhaben abzusichern?',
    ctaSubtitle: 'Kontaktieren Sie uns für eine vertrauliche Vorabanalyse der Machbarkeit Ihres Außenhandelsprojekts.',
    ctaBtn: 'Beratungsgespräch anfragen'
  },
  zh: {
    pageTitle: '服务项目 | NOVELTRIA International Trade Services — 全球寻源与商业居间',
    metaDesc: '探索我们专业的国际贸易中介服务：独家书面委托下的采购寻源与市场拓展（A 类）以及协同第三方的综合物流保障支持（B 类）。创始人：Laurent Huiskens。',
    metaKeywords: '国际采购寻源, 进出口居间中介, 委托谈判, 质量控制, 国际多式联运, 贸易术语 Incoterms, NOVELTRIA',
    ogTitle: '服务项目 | NOVELTRIA International Trade Services',
    ogDesc: '系统化解决方案保障您的全球跨境贸易：A 类（直接专业委托服务）与 B 类（协同第三方专业支持）。',
    serviceSchemaType: '国际贸易中介与书面委托采购寻源',
    serviceSchemaDesc: '供应商寻源审核、海外买家开发、书面委托商业谈判及第三方物流协同支持。',
    heroBadge: '官方服务目录',
    heroTitle: '以结构化专业方案，全面保障您的全球贸易',
    heroSlogan: '清晰划定直接专业委托与协同第三方物流支持的服务边界',
    heroDesc: 'NOVELTRIA 秉承业务范围透明化原则：我们严格区分依据书面委托直接执行的商业中介服务（A 类），与协同具备法定资质的特许机构提供的综合物流支持服务（B 类）。',
    catAEyebrow: '核心主营业务',
    catATitle: 'A 类 — 商业中介与直接委托服务',
    catASubtitle: '此类服务由 NOVELTRIA International Trade Services 依据双方签署的正规书面委托合同直接执行，确保对委托方商业利益的绝对忠诚，从机制上杜绝利益冲突。',
    a1Title: '供应商寻源与资质审核',
    a1Desc: '精准甄选信誉卓著、产能真实的全球优质制造厂商，严格对照您的技术规格书与质量标准进行多维核验。',
    a1Points: [
      '系统调研全球极具竞争力的重点产业集聚区与优势产地。',
      '严格核查生产资质、排污许可证、国际合规认证及实际产能。',
      '产前打样样品的测试跟进、实物比对与技术合规确认。',
      '提供详实的工厂横向比对报告、阶梯报价明细与供货周期表。'
    ],
    a2Title: '买家开发与出口市场拓展',
    a2Desc: '为您的优质工业产能与商业产品，在全球范围内精准对接具备真实采购需求且商业信誉良好的海外进口商与分销商。',
    a2Points: [
      '梳理目标国别市场的重点分销渠道、大型商超及专业采购集团。',
      '评估意向买家的商业资信状况、付款履约记录与采购规模。',
      '以国际商务标准呈现您的企业制造优势、核心产品线及资质背书。',
      '协助安排与海外采购高管或关键决策人的直接商务会晤。'
    ],
    a3Title: '商业居间与规范化谈判',
    a3Desc: '全权代表委托方利益开展深入的商业条款谈判，协助锁定合理利润空间，规范结算方式并确立违约保障条款。',
    a3Points: [
      '基于不同订单体量开展严谨的阶梯单价与付款账期谈判。',
      '敲定明确的交付截止日、迟延履约惩罚机制与品质违约责任。',
      '运用跟单信用证（L/C）等国际通用安全支付工具规避收汇风险。',
      '起草表述精确、权责平衡且无漏洞的国际商业买卖框架协议。'
    ],
    catBEyebrow: '协同服务与合规保障',
    catBTitle: 'B 类 — 流程安全与第三方专业协同支持',
    catBSubtitle: '视客户具体需求量身定制。NOVELTRIA 本身不直接从事承运人、报关行或保险承保人等法定特许经营业务，但代表客户协调对接具备权威资质的第三方专业机构。',
    b1Title: '质量控制与装运前检验',
    b1Desc: '共同制定出厂验货标准，协同具备国际公信力的独立第三方检验检测机构，严格依照 AQL 国际标准在货物装运前完成抽检与全检。',
    b2Title: '多式联运国际运输',
    b2Desc: '为海运整箱（FCL）、拼箱（LCL）、空运货运及跨境铁路陆运提供最优路径规划建议，协助在优质货代中进行透明比价。',
    b3Title: '报关手续与贸易术语 Incoterms 2020',
    b3Desc: '针对 FOB、CIF、DAP、DDP 等国际贸易术语的选用提供合规指引，避免高额港口滞箱费，并协调专业持牌报关行对接清关手续。',
    b4Title: '货物运输一切险（Ad Valorem）',
    b4Desc: '剖析国际货运承运人法定责任豁免条款，协助对接专业货运险承保经纪，将货物保障范围提升至实际申报价值的 100%。',
    methodEyebrow: '专业流程',
    methodTitle: '四步标准化服务流程',
    methodSubtitle: '清晰透明的业务推进节点，确保每一项国际商业中介委托均达成预期目标。',
    s1Num: '第一步',
    s1Title: '前期对接与 NDA',
    s1Desc: '签署具备法律约束力的双边保密协议，深入梳理技术标准、预算指标及交付时间线。',
    s2Num: '第二步',
    s2Title: '委托协议确立',
    s2Desc: '拟定并正式签署书面委托协议，严格明确居间授权边界、考核目标与佣金计提标准。',
    s3Num: '第三步',
    s3Title: '寻源调研与商务谈判',
    s3Desc: '开展全球市场实地甄选、工厂资质深度穿透、商务条款博弈以及试制样品检测验证。',
    s4Num: '第四步',
    s4Title: '合同缔结与交付协同',
    s4Desc: '协助委托方与入选合作伙伴直接完成具有法律效力的签约，并协同跟踪质检与发运。',
    ctaEyebrow: '初步诊断',
    ctaTitle: '准备好开启或优化您的跨国采购与出口业务了吗？',
    ctaSubtitle: '欢迎随时联系我们，我们将为您提供关于项目可行性的前期保密诊断分析。',
    ctaBtn: '预约咨询'
  }
};

function generateServicesHtml(lang) {
  const d = servicesData[lang];
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
  <link rel="canonical" href="https://www.noveltria.com/${lang}/services.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${n.locale}">
  <meta property="og:title" content="${d.ogTitle}">
  <meta property="og:description" content="${d.ogDesc}">
  <meta property="og:url" content="https://www.noveltria.com/${lang}/services.html">
  <meta property="og:image" content="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "${d.serviceSchemaType}",
    "provider": {
      "@type": "Organization",
      "name": "NOVELTRIA International Trade Services",
      "founder": {
        "@type": "Person",
        "name": "Laurent Huiskens",
        "jobTitle": "${lang === 'es' ? 'Fundador' : (lang === 'it' ? 'Fondatore' : (lang === 'de' ? 'Gründer' : '创始人'))}"
      }
    },
    "description": "${d.serviceSchemaDesc}"
  }
  </script>
</head>
<body>

${renderHeader(lang, 'services', 'services.html')}

  <!-- ==========================================================================
       HERO PAGE
       ========================================================================== -->
  <main>
    <section class="hero hero--page hero--services" aria-labelledby="servicesHeroTitle">
      <div class="container">
        <div class="hero-content">
          <div class="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            <span>${d.heroBadge}</span>
          </div>
          <h1 id="servicesHeroTitle" class="hero__title">${d.heroTitle}</h1>
          <p class="hero__slogan">${d.heroSlogan}</p>
          <p class="hero__desc">${d.heroDesc}</p>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         CATEGORY A: CORE DIRECT SERVICES
         ========================================================================== -->
    <section id="category-a" class="section" aria-labelledby="catATitle">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <span class="service-badge service-badge--a" style="margin-bottom: 12px;">${d.catAEyebrow}</span>
          <h2 id="catATitle" class="section-title">${d.catATitle}</h2>
          <p class="section-subtitle">${d.catASubtitle}</p>
        </div>

        <div class="services-grid" style="margin-bottom: 48px;">
          <!-- Service A1 -->
          <div class="service-card reveal-on-scroll delay-1" style="border-top: 4px solid var(--color-primary);">
            <div class="service-item__icon" style="margin-bottom: 20px;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <h3 class="service-card__title">${d.a1Title}</h3>
            <p class="service-card__desc">${d.a1Desc}</p>
            <ul style="font-size: 14px; color: var(--color-gray-text); padding-left: 18px; line-height: 1.8;">
              ${d.a1Points.map(p => `<li>${p}</li>`).join('\n              ')}
            </ul>
          </div>

          <!-- Service A2 -->
          <div class="service-card reveal-on-scroll delay-2" style="border-top: 4px solid var(--color-primary);">
            <div class="service-item__icon" style="margin-bottom: 20px;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 2 12 12 19 12"></polyline></svg>
            </div>
            <h3 class="service-card__title">${d.a2Title}</h3>
            <p class="service-card__desc">${d.a2Desc}</p>
            <ul style="font-size: 14px; color: var(--color-gray-text); padding-left: 18px; line-height: 1.8;">
              ${d.a2Points.map(p => `<li>${p}</li>`).join('\n              ')}
            </ul>
          </div>

          <!-- Service A3 -->
          <div class="service-card reveal-on-scroll delay-3" style="border-top: 4px solid var(--color-primary);">
            <div class="service-item__icon" style="margin-bottom: 20px;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            </div>
            <h3 class="service-card__title">${d.a3Title}</h3>
            <p class="service-card__desc">${d.a3Desc}</p>
            <ul style="font-size: 14px; color: var(--color-gray-text); padding-left: 18px; line-height: 1.8;">
              ${d.a3Points.map(p => `<li>${p}</li>`).join('\n              ')}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         CATEGORY B: THIRD-PARTY COORDINATION SUPPORT
         ========================================================================== -->
    <section id="category-b" class="section section--alt" aria-labelledby="catBTitle">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <span class="service-badge service-badge--b" style="margin-bottom: 12px;">${d.catBEyebrow}</span>
          <h2 id="catBTitle" class="section-title">${d.catBTitle}</h2>
          <p class="section-subtitle">${d.catBSubtitle}</p>
        </div>

        <div class="services-grid">
          <!-- Service B1 -->
          <div class="service-card reveal-on-scroll delay-1" style="border-top: 4px solid var(--color-accent);">
            <div class="service-item__icon" style="margin-bottom: 20px; color: var(--color-accent);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="service-card__title">${d.b1Title}</h3>
            <p class="service-card__desc">${d.b1Desc}</p>
          </div>

          <!-- Service B2 -->
          <div class="service-card reveal-on-scroll delay-2" style="border-top: 4px solid var(--color-accent);">
            <div class="service-item__icon" style="margin-bottom: 20px; color: var(--color-accent);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <h3 class="service-card__title">${d.b2Title}</h3>
            <p class="service-card__desc">${d.b2Desc}</p>
          </div>

          <!-- Service B3 -->
          <div class="service-card reveal-on-scroll delay-3" style="border-top: 4px solid var(--color-accent);">
            <div class="service-item__icon" style="margin-bottom: 20px; color: var(--color-accent);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h3 class="service-card__title">${d.b3Title}</h3>
            <p class="service-card__desc">${d.b3Desc}</p>
          </div>

          <!-- Service B4 -->
          <div class="service-card reveal-on-scroll delay-1" style="border-top: 4px solid var(--color-accent);">
            <div class="service-item__icon" style="margin-bottom: 20px; color: var(--color-accent);">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 class="service-card__title">${d.b4Title}</h3>
            <p class="service-card__desc">${d.b4Desc}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         METHODOLOGY IN 4 STEPS
         ========================================================================== -->
    <section class="section" aria-labelledby="methodTitle">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <span class="section-eyebrow">${d.methodEyebrow}</span>
          <h2 id="methodTitle" class="section-title">${d.methodTitle}</h2>
          <p class="section-subtitle">${d.methodSubtitle}</p>
        </div>

        <div class="sectors-grid">
          <div class="sector-card reveal-on-scroll delay-1" style="padding: 28px;">
            <div style="font-size: 28px; font-weight: 800; color: var(--color-accent); margin-bottom: 8px;">${d.s1Num}</div>
            <h3 style="font-size: 18px; margin-bottom: 8px; color: var(--color-primary);">${d.s1Title}</h3>
            <p style="font-size: 13px; color: var(--color-gray-text); line-height: 1.6;">${d.s1Desc}</p>
          </div>

          <div class="sector-card reveal-on-scroll delay-2" style="padding: 28px;">
            <div style="font-size: 28px; font-weight: 800; color: var(--color-accent); margin-bottom: 8px;">${d.s2Num}</div>
            <h3 style="font-size: 18px; margin-bottom: 8px; color: var(--color-primary);">${d.s2Title}</h3>
            <p style="font-size: 13px; color: var(--color-gray-text); line-height: 1.6;">${d.s2Desc}</p>
          </div>

          <div class="sector-card reveal-on-scroll delay-3" style="padding: 28px;">
            <div style="font-size: 28px; font-weight: 800; color: var(--color-accent); margin-bottom: 8px;">${d.s3Num}</div>
            <h3 style="font-size: 18px; margin-bottom: 8px; color: var(--color-primary);">${d.s3Title}</h3>
            <p style="font-size: 13px; color: var(--color-gray-text); line-height: 1.6;">${d.s3Desc}</p>
          </div>

          <div class="sector-card reveal-on-scroll delay-1" style="padding: 28px;">
            <div style="font-size: 28px; font-weight: 800; color: var(--color-accent); margin-bottom: 8px;">${d.s4Num}</div>
            <h3 style="font-size: 18px; margin-bottom: 8px; color: var(--color-primary);">${d.s4Title}</h3>
            <p style="font-size: 13px; color: var(--color-gray-text); line-height: 1.6;">${d.s4Desc}</p>
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
  const filePath = path.join(websiteDir, lang, 'services.html');
  const html = generateServicesHtml(lang);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: ${filePath}`);
});
