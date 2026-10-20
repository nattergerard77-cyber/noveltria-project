const fs = require('fs');
const path = require('path');
const { languages, renderHeader, renderFooter, websiteDir } = require('./generator-core');

const contactData = {
  es: {
    pageTitle: 'Contacto | NOVELTRIA International Trade Services',
    metaDesc: 'Contacte con NOVELTRIA International Trade Services para tratar sus proyectos de aprovisionamiento internacional, desarrollo de mercados de exportación o intermediación bajo mandato. Fundador: Laurent Huiskens.',
    metaKeywords: 'contacto NOVELTRIA, intermediación import export, sourcing internacional, Laurent Huiskens, corretaje comercio internacional',
    ogTitle: 'Contacto | NOVELTRIA International Trade Services',
    ogDesc: 'Contacte directamente con nuestro equipo para asegurar sus compras o abrir nuevos mercados internacionales de exportación.',
    contactSchemaName: 'Contacto NOVELTRIA International Trade Services',
    contactSchemaDesc: 'Formulario de contacto y canales de comunicación para solicitar un mandato de intermediación en comercio internacional.',
    jobTitle: 'Fundador',
    heroBadge: 'Contacto Directo',
    heroTitle: 'Hablemos de sus Proyectos Internacionales',
    heroSlogan: 'Una consulta atenta, confidencial y sin compromiso inicial',
    heroDesc: 'Tanto si desea homologar fábricas fiables en el extranjero como abrir canales de exportación, comparta sus requisitos preliminares con nosotros. Respondemos en un plazo máximo de 24 horas laborables.',
    infoEyebrow: 'Disponibilidad y Marco Operativo',
    infoTitle: 'Un interlocutor dedicado para su proyecto',
    infoDesc: 'Cada solicitud es examinada personalmente por nuestro fundador <strong>Laurent Huiskens</strong> con el fin de evaluar la viabilidad operativa de su iniciativa y recomendarle el marco contractual más protector para sus intereses.',
    hoursTitle: 'Horario de Atención',
    hoursVal: 'De lunes a viernes: 09:00 – 18:30 (CET / Hora de París)',
    meetingTitle: 'Videoconferencia y Teléfono',
    meetingVal: 'Previa cita tras un primer análisis de viabilidad',
    confTitle: 'Garantía de Confidencialidad',
    confVal: 'Acuerdo de confidencialidad (NDA) firmado antes de cualquier estudio técnico detallado',
    officeAlt: 'Oficina de relaciones comerciales y coordinación internacional NOVELTRIA',
    noticeText: '<strong>Aviso legal:</strong> NOVELTRIA International Trade Services es un proyecto en fase de constitución liderado por su fundador Laurent Huiskens.',
    formTitle: 'Formulario de Consulta',
    formSubtitle: 'Los campos marcados con un asterisco (*) son obligatorios.',
    hpLabel: 'No rellene este campo si es humano:',
    nameLabel: 'Nombre y Apellidos *',
    namePlaceholder: 'Ej. Carlos Martínez',
    companyLabel: 'Empresa (Opcional)',
    companyPlaceholder: 'Ej. Iberia Industrial S.L.',
    emailLabel: 'Correo Electrónico Profesional *',
    emailPlaceholder: 'Ej. carlos.martinez@empresa.com',
    phoneLabel: 'Teléfono (Opcional)',
    phonePlaceholder: 'Ej. +34 91 123 4567',
    catLabel: 'Objeto Principal de su Consulta *',
    catPlaceholder: 'Seleccione una categoría de servicio...',
    catSourcing: 'Búsqueda y Homologación de Proveedores (Categoría A)',
    catDebouchers: 'Búsqueda de Compradores y Mercados de Exportación (Categoría A)',
    catNegociation: 'Intermediación Comercial y Negociación bajo Mandato (Categoría A)',
    catAccompagnement: 'Coordinación Logística y de Calidad con Terceros (Categoría B)',
    catAutre: 'Otras consultas informativas',
    msgLabel: 'Descripción Resumida de su Proyecto * (mín. 20 caracteres)',
    msgPlaceholder: 'Indique sectores, volúmenes estimados, países de destino o plazos previstos...',
    submitBtn: 'Enviar Consulta'
  },
  it: {
    pageTitle: 'Contatti | NOVELTRIA International Trade Services',
    metaDesc: 'Contattate NOVELTRIA International Trade Services per esaminare i vostri progetti di approvvigionamento internazionale, espansione export o negoziazione su mandato. Fondatore: Laurent Huiskens.',
    metaKeywords: 'contatti NOVELTRIA, intermediazione import export, sourcing internazionale, Laurent Huiskens, broker commercio internazionale',
    ogTitle: 'Contatti | NOVELTRIA International Trade Services',
    ogDesc: 'Contattate direttamente il nostro team per mettere in sicurezza i vostri acquisti o sviluppare nuovi sbocchi commerciali internazionali.',
    contactSchemaName: 'Contatti NOVELTRIA International Trade Services',
    contactSchemaDesc: 'Modulo di contatto e canali operativi per richiedere un mandato di intermediazione nel commercio internazionale.',
    jobTitle: 'Fondatore',
    heroBadge: 'Mettiti in Contatto',
    heroTitle: 'Parliamo dei Vostri Progetti Internazionali',
    heroSlogan: 'Un ascolto attento, riservato e senza impegno iniziale',
    heroDesc: 'Sia che desideriate qualificare stabilimenti esteri affidabili o aprire canali di vendita internazionali, condividete con noi il vostro capitolato iniziale. Rispondiamo entro 24 ore lavorative.',
    infoEyebrow: 'Disponibilità e Quadro Operativo',
    infoTitle: 'Un referente dedicato per il vostro progetto',
    infoDesc: 'Ogni richiesta viene esaminata attentamente dal nostro fondatore <strong>Laurent Huiskens</strong> per valutare la fattibilità operativa del progetto e proporvi il quadro contrattuale più tutelante.',
    hoursTitle: 'Orari di Attività',
    hoursVal: 'Da lunedì a venerdì: 09:00 – 18:30 (CET / Ora di Roma)',
    meetingTitle: 'Videoconferenza e Telefono',
    meetingVal: 'Su appuntamento previa valutazione preliminare del progetto',
    confTitle: 'Garanzia di Riservatezza',
    confVal: 'Accordo di riservatezza (NDA) bilaterale sottoscritto prima di qualsiasi analisi tecnica dettagliata',
    officeAlt: 'Ufficio di relazioni d\'affari e coordinamento internazionale NOVELTRIA',
    noticeText: '<strong>Avviso:</strong> NOVELTRIA International Trade Services è un progetto in fase di costituzione guidato dal fondatore Laurent Huiskens.',
    formTitle: 'Modulo di Contatto',
    formSubtitle: 'I campi contrassegnati da un asterisco (*) sono obbligatori.',
    hpLabel: 'Non compilare questo campo se sei un utente umano:',
    nameLabel: 'Nome e Cognome *',
    namePlaceholder: 'Es. Marco Rossi',
    companyLabel: 'Azienda (Opzionale)',
    companyPlaceholder: 'Es. Milano Meccanica S.r.l.',
    emailLabel: 'Indirizzo E-mail Aziendale *',
    emailPlaceholder: 'Es. marco.rossi@azienda.it',
    phoneLabel: 'Telefono (Opzionale)',
    phonePlaceholder: 'Es. +39 02 1234 5678',
    catLabel: 'Oggetto Principale della Richiesta *',
    catPlaceholder: 'Selezionare una categoria di servizio...',
    catSourcing: 'Sourcing e Qualifica Fornitori (Categoria A)',
    catDebouchers: 'Ricerca Acquirenti e Canali Export (Categoria A)',
    catNegociation: 'Intermediazione Commerciale e Negoziazione su Mandato (Categoria A)',
    catAccompagnement: 'Coordinamento Logistico e Qualità con Terzi (Categoria B)',
    catAutre: 'Altra richiesta di informazioni',
    msgLabel: 'Descrizione Sintetica del Progetto * (min. 20 caratteri)',
    msgPlaceholder: 'Specificare categorie merceologiche, volumi stimati, paesi di destinazione o tempistiche previste...',
    submitBtn: 'Invia Richiesta'
  },
  de: {
    pageTitle: 'Kontakt | NOVELTRIA International Trade Services',
    metaDesc: 'Kontaktieren Sie NOVELTRIA International Trade Services, um Ihre globalen Sourcing-Bedarfe, Exportmarktstrategien oder Mandatsverhandlungen zu besprechen. Gründer: Laurent Huiskens.',
    metaKeywords: 'Kontakt NOVELTRIA, Außenhandelsvermittlung, globales Sourcing, Laurent Huiskens, Außenhandel Brokerage',
    ogTitle: 'Kontakt | NOVELTRIA International Trade Services',
    ogDesc: 'Treten Sie direkt mit unserem Team in Kontakt, um Ihre weltweiten Einkäufe abzusichern oder neue Exportmärkte zu erschließen.',
    contactSchemaName: 'Kontakt NOVELTRIA International Trade Services',
    contactSchemaDesc: 'Kontaktformular und Kommunikationskanäle zur Beauftragung eines Mandats zur internationalen Handelsvermittlung.',
    jobTitle: 'Gründer',
    heroBadge: 'Direkter Kontakt',
    heroTitle: 'Besprechen Sie Ihre internationalen Projekte',
    heroSlogan: 'Eine fundierte, vertrauliche und unverbindliche Erstberatung',
    heroDesc: 'Ganz gleich, ob Sie zuverlässige Produktionsbetriebe im Ausland qualifizieren oder neue Exportmärkte erschließen möchten: Übermitteln Sie uns Ihre Eckdaten. Wir antworten innerhalb von 24 Arbeitsstunden.',
    infoEyebrow: 'Erreichbarkeit &amp; Rahmenbedingungen',
    infoTitle: 'Ein engagierter Ansprechpartner für Ihr Vorhaben',
    infoDesc: 'Jede Anfrage wird von unserem Gründer <strong>Laurent Huiskens</strong> geprüft, um die operative Machbarkeit Ihres Vorhabens zu bewerten und den für Ihre Interessen sichersten vertraglichen Rahmen zu definieren.',
    hoursTitle: 'Geschäftszeiten',
    hoursVal: 'Montag bis Freitag: 09:00 – 18:30 Uhr MEZ (Berlin / Paris)',
    meetingTitle: 'Telefon &amp; Videokonferenz',
    meetingVal: 'Nach Terminvereinbarung im Anschluss an eine erste Machbarkeitsprüfung',
    confTitle: 'Vertraulichkeitsgarantie',
    confVal: 'Bilaterale Vertraulichkeitsvereinbarung (NDA) vor jeder detaillierten technischen Prüfung',
    officeAlt: 'Büro für internationale Handelskoordination und Geschäftsbeziehungen NOVELTRIA',
    noticeText: '<strong>Hinweis:</strong> NOVELTRIA International Trade Services ist ein Projekt im Gründungsstadium unter Leitung des Gründers Laurent Huiskens.',
    formTitle: 'Projektanfrage',
    formSubtitle: 'Mit einem Sternchen (*) gekennzeichnete Felder sind Pflichtfelder.',
    hpLabel: 'Bitte dieses Feld nicht ausfüllen, wenn Sie ein Mensch sind:',
    nameLabel: 'Vollständiger Name *',
    namePlaceholder: 'z. B. Thomas Müller',
    companyLabel: 'Unternehmen (Optional)',
    companyPlaceholder: 'z. B. Müller Industrie GmbH',
    emailLabel: 'Geschäftliche E-Mail-Adresse *',
    emailPlaceholder: 'z. B. t.mueller@unternehmen.de',
    phoneLabel: 'Telefonnummer (Optional)',
    phonePlaceholder: 'z. B. +49 30 12345678',
    catLabel: 'Hauptanliegen Ihrer Anfrage *',
    catPlaceholder: 'Bitte Leistungskategorie wählen...',
    catSourcing: 'Lieferantensuche &amp; Qualifizierung (Kategorie A)',
    catDebouchers: 'Käufersuche &amp; Exportmärkte (Kategorie A)',
    catNegociation: 'Handelsvermittlung &amp; Verhandlung unter Mandat (Kategorie A)',
    catAccompagnement: 'Drittanbieter-Logistik &amp; Qualitätskoordination (Kategorie B)',
    catAutre: 'Sonstige Informationsanfrage',
    msgLabel: 'Kurzbeschreibung Ihres Vorhabens * (mind. 20 Zeichen)',
    msgPlaceholder: 'Geben Sie Produktkategorien, geschätzte Volumina, Zielländer oder Zeitfenster an...',
    submitBtn: 'Anfrage absenden'
  },
  zh: {
    pageTitle: '联系我们 | NOVELTRIA International Trade Services',
    metaDesc: '联系 NOVELTRIA International Trade Services，深入探讨您的全球采购寻源需求、海外出口市场拓展或独家委托商业谈判。创始人：Laurent Huiskens。',
    metaKeywords: '联系 NOVELTRIA, 进出口贸易中介, 全球采购寻源, Laurent Huiskens, 国际贸易代理',
    ogTitle: '联系我们 | NOVELTRIA International Trade Services',
    ogDesc: '直接与我们的专业团队取得联系，全面保障您的跨境采购安全并开拓全球国际市场。',
    contactSchemaName: '联系 NOVELTRIA International Trade Services',
    contactSchemaDesc: '申请国际贸易中介委托的联络表格与官方沟通渠道。',
    jobTitle: '创始人',
    heroBadge: '直接与我们联络',
    heroTitle: '洽谈您的跨国贸易合作项目',
    heroSlogan: '严谨专注、绝对保密且无前期强加约束的专业咨询',
    heroDesc: '无论您希望筛选核验可靠的海外制造工厂，还是拓展海外新兴出口市场，均可在此向我们提交您的初步业务构想。我们的专业团队将在 24 个工作小时内予以正式答复。',
    infoEyebrow: '服务时效与合规框架',
    infoTitle: '专属合伙人级团队全程护航您的跨国项目',
    infoDesc: '每份合作咨询均由创始人 <strong>Laurent Huiskens</strong> 亲自审阅，深度评估其实操可行性，并为您量身推荐最具法律保障的独家委托合同框架。',
    hoursTitle: '办公与咨询时间',
    hoursVal: '周一至周五：09:00 – 18:30（欧洲中部时间 CET）',
    meetingTitle: '电话与视频会议',
    meetingVal: '在完成初步项目可行性研判后，预约举行专场视频或电话会谈',
    confTitle: '严格保密承诺',
    confVal: '在交流任何涉及商业秘密的技术图纸或商业机密前，全面签署双边保密协议 (NDA)',
    officeAlt: 'NOVELTRIA 国际贸易统筹与商业关系协调办公室',
    noticeText: '<strong>合规说明：</strong>NOVELTRIA International Trade Services 是一个由创始人 Laurent Huiskens 领导的、正在筹建中的商业项目（projet en cours de constitution / project under constitution）。',
    formTitle: '业务咨询表单',
    formSubtitle: '标有星号 (*) 的字段为必填项。',
    hpLabel: '如果您是人类访客，请勿填写此字段：',
    nameLabel: '您的姓名 *',
    namePlaceholder: '例如：张伟（Mr. Zhang）',
    companyLabel: '公司名称（选填）',
    companyPlaceholder: '例如：远洋国际实业有限公司',
    emailLabel: '企业工作电子邮箱 *',
    emailPlaceholder: '例如：zhangwei@company.com',
    phoneLabel: '联系电话（选填）',
    phonePlaceholder: '例如：+86 138 0000 0000',
    catLabel: '您咨询的核心业务类型 *',
    catPlaceholder: '请选择业务分类...',
    catSourcing: '优质供应商寻源与资质核验 (Category A)',
    catDebouchers: '海外买家开发与出口市场拓展 (Category A)',
    catNegociation: '独家书面委托商业谈判与中介 (Category A)',
    catAccompagnement: '第三方跨境物流与质检定制协调 (Category B)',
    catAutre: '其他业务或通用信息咨询',
    msgLabel: '您的合作项目简要说明 * (至少 20 个字符)',
    msgPlaceholder: '请注明产品品类、预估采购或销售规模、目标目的国、交付周期等关键信息...',
    submitBtn: '提交合作咨询'
  }
};

function generateContactHtml(lang) {
  const d = contactData[lang];
  const headerHtml = renderHeader(lang, 'contact', 'contact.html');
  const footerHtml = renderFooter(lang);

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": d.contactSchemaName,
    "description": d.contactSchemaDesc,
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
  <link rel="canonical" href="https://www.noveltria.com/${lang}/contact.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${contactData[lang].locale || lang}">
  <meta property="og:title" content="${d.ogTitle}">
  <meta property="og:description" content="${d.ogDesc}">
  <meta property="og:url" content="https://www.noveltria.com/${lang}/contact.html">
  <meta property="og:image" content="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85">

  <!-- Favicon -->\n  <link rel="icon" type="image/png" href="../assets/images/favicon.png">\n\n  <!-- Stylesheet -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org ContactPage Structured Data -->
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
    <section class="hero hero--page hero--contact" aria-labelledby="contactHeroTitle">
      <div class="container">
        <div class="hero-content">
          <div class="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span>${d.heroBadge}</span>
          </div>
          <h1 id="contactHeroTitle" class="hero__title">${d.heroTitle}</h1>
          <p class="hero__slogan">${d.heroSlogan}</p>
          <p class="hero__desc">${d.heroDesc}</p>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         CONTACT INFO & FORM SECTION
         ========================================================================== -->
    <section class="section" aria-labelledby="formSectionTitle">
      <div class="container">
        <div class="contact-wrapper">
          <!-- Information & Framework -->
          <div class="contact-info reveal-on-scroll">
            <span class="section-eyebrow">${d.infoEyebrow}</span>
            <h2 id="formSectionTitle" class="section-title" style="font-size: 28px;">${d.infoTitle}</h2>
            <p style="margin-bottom: 24px; font-size: 14px; color: var(--color-gray-text); line-height: 1.7;">${d.infoDesc}</p>

            <div class="contact-box">
              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h4 style="font-size: 14px; font-weight: 700; color: var(--color-primary); margin-bottom: 2px;">${d.hoursTitle}</h4>
                  <p style="font-size: 13px; color: var(--color-gray-text);">${d.hoursVal}</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 style="font-size: 14px; font-weight: 700; color: var(--color-primary); margin-bottom: 2px;">${d.meetingTitle}</h4>
                  <p style="font-size: 13px; color: var(--color-gray-text);">${d.meetingVal}</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-item__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div>
                  <h4 style="font-size: 14px; font-weight: 700; color: var(--color-primary); margin-bottom: 2px;">${d.confTitle}</h4>
                  <p style="font-size: 13px; color: var(--color-gray-text);">${d.confVal}</p>
                </div>
              </div>
            </div>

            <!-- Coordination Office Image -->
            <div style="margin-top: 24px; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=85" alt="${d.officeAlt}" style="width: 100%; height: 180px; object-fit: cover; display: block;" loading="lazy">
            </div>

            <div style="margin-top: 24px; padding: 20px; background-color: #F8FAFC; border-radius: var(--radius-md); border-left: 3px solid var(--color-accent);">
              <p style="font-size: 12px; color: var(--color-gray-muted); line-height: 1.6;">${d.noticeText}</p>
            </div>
          </div>

          <!-- Secure Form Card -->
          <div class="contact-form-card reveal-on-scroll delay-1">
            <h3 style="font-size: 20px; margin-bottom: 6px; color: var(--color-primary);">${d.formTitle}</h3>
            <p style="font-size: 13px; color: var(--color-gray-muted); margin-bottom: 24px;">${d.formSubtitle}</p>

            <!-- Accessible Feedback Area -->
            <div id="formFeedback" class="form-feedback" role="alert" aria-live="polite"></div>

            <form id="contactForm" action="https://formspree.io/f/xplaceholder" method="POST" novalidate>
              <!-- Hidden fields for Formspree -->
              <input type="hidden" name="_subject" value="New project inquiry - NOVELTRIA (${lang.toUpperCase()})">
              <input type="hidden" name="_cc" value="contact@noveltria.online">
              <!-- Spam Honeypot (hidden from real users) -->
              <div class="hp-field" aria-hidden="true">
                <label for="website_hp">${d.hpLabel}</label>
                <input type="text" id="website_hp" name="website_hp" tabindex="-1" autocomplete="off">
              </div>

              <div class="form-group row">
                <div>
                  <label for="fullname" class="form-label">${d.nameLabel}</label>
                  <input type="text" id="fullname" name="fullname" class="form-input" placeholder="${d.namePlaceholder}" required autocomplete="name">
                </div>
                <div>
                  <label for="company" class="form-label">${d.companyLabel}</label>
                  <input type="text" id="company" name="company" class="form-input" placeholder="${d.companyPlaceholder}" autocomplete="organization">
                </div>
              </div>

              <div class="form-group row">
                <div>
                  <label for="email" class="form-label">${d.emailLabel}</label>
                  <input type="email" id="email" name="email" class="form-input" placeholder="${d.emailPlaceholder}" required autocomplete="email">
                </div>
                <div>
                  <label for="phone" class="form-label">${d.phoneLabel}</label>
                  <input type="tel" id="phone" name="phone" class="form-input" placeholder="${d.phonePlaceholder}" autocomplete="tel">
                </div>
              </div>

              <div class="form-group">
                <label for="category" class="form-label">${d.catLabel}</label>
                <select id="category" name="category" class="form-select" required>
                  <option value="" disabled selected>${d.catPlaceholder}</option>
                  <option value="sourcing-a">${d.catSourcing}</option>
                  <option value="debouchers-a">${d.catDebouchers}</option>
                  <option value="negociation-a">${d.catNegociation}</option>
                  <option value="accompagnement-b">${d.catAccompagnement}</option>
                  <option value="autre">${d.catAutre}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">${d.msgLabel}</label>
                <textarea id="message" name="message" class="form-textarea" placeholder="${d.msgPlaceholder}" required minlength="20"></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px; font-size: 15px;">
                <span>${d.submitBtn}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

${footerHtml}

  <script src="../js/script.js"></script>
  <script src="../js/form-validation.js"></script>
</body>
</html>
`;
}

languages.forEach(lang => {
  const filePath = path.join(websiteDir, lang, 'contact.html');
  fs.writeFileSync(filePath, generateContactHtml(lang), 'utf-8');
  console.log(`Generated: ${filePath}`);
});
