const fs = require('fs');
const path = require('path');
const { languages, renderHeader, renderFooter, websiteDir } = require('./generator-core');

const faqData = {
  es: {
    pageTitle: 'Preguntas Frecuentes (FAQ) | NOVELTRIA International Trade Services',
    metaDesc: 'Todas las respuestas a sus preguntas sobre intermediación en comercio internacional, mandatos de sourcing, compras globales y marco operativo. Fundador: Laurent Huiskens.',
    metaKeywords: 'FAQ import export, intermediación comercio internacional, mandato de sourcing, preguntas frecuentes NOVELTRIA, Laurent Huiskens',
    ogTitle: 'Preguntas Frecuentes (FAQ) | NOVELTRIA International Trade Services',
    ogDesc: 'Respuestas claras y transparentes sobre nuestro modelo de mandato escrito y la seguridad de sus operaciones transfronterizas.',
    heroBadge: 'Centro de Ayuda y Transparencia',
    heroTitle: 'Preguntas Frecuentes',
    heroSlogan: 'Todo lo que necesita saber sobre nuestra intermediación bajo mandato y nuestro marco operativo',
    heroDesc: 'Encuentre respuestas detalladas a las preguntas más frecuentes sobre nuestro enfoque de abastecimiento, catálogo de servicios, garantías de confidencialidad y estructura contractual.',
    sectionEyebrow: 'Respuestas Detalladas',
    sectionTitle: 'Aclaraciones Clave',
    sectionSubtitle: 'Haga clic en cada pregunta para desplegar información precisa sobre nuestra metodología y garantías.',
    ctaEyebrow: '¿Tiene una Pregunta Específica?',
    ctaTitle: '¿Tiene una consulta no cubierta en esta sección de preguntas frecuentes?',
    ctaSubtitle: 'Nuestro fundador y equipo están a su entera disposición para brindarle orientación personalizada.',
    ctaButton: 'Plantear su pregunta',
    questions: [
      {
        q: '01. ¿Qué es NOVELTRIA International Trade Services?',
        a: 'NOVELTRIA International Trade Services es una casa de intermediación especializada en comercio internacional, impulsada por su fundador <strong>Laurent Huiskens</strong>. Su misión es acompañar a las empresas en su abastecimiento global (sourcing), negociación comercial bajo mandato y desarrollo de mercados de exportación. El proyecto se encuentra actualmente en fase de constitución.'
      },
      {
        q: '02. ¿Cuál es la diferencia entre un intermediario tradicional y la intermediación bajo mandato de NOVELTRIA?',
        a: 'A diferencia de los intermediarios tradicionales que pueden percibir comisiones ocultas de ambas partes generando zonas de opacidad, NOVELTRIA opera estrictamente bajo un mandato escrito exclusivo: actuamos únicamente en nombre del comprador (mandato de compra) o del vendedor (mandato de venta). Esto garantiza una total lealtad contractual y la ausencia absoluta de conflictos de intereses.'
      },
      {
        q: '03. ¿Por qué diferenciar los servicios de Categoría A y Categoría B?',
        a: 'La Categoría A comprende nuestros servicios directos de asesoramiento y negociación (sourcing, negociación bajo mandato, prospección de exportación) ejecutados directamente por NOVELTRIA. La Categoría B abarca logística, trámites aduaneros, seguros de transporte y control de calidad, los cuales se coordinan a medida con terceros especialistas homologados, ya que NOVELTRIA no ejerce directamente estas actividades reglamentadas.'
      },
      {
        q: '04. ¿Cuáles son los sectores industriales confirmados por NOVELTRIA?',
        a: 'Nuestros sectores de intervención confirmados son <strong>Textil y Confección</strong>, <strong>Electrónica y Componentes</strong>, y <strong>Materiales Industriales y Materias Primas</strong>. Cualquier otro sector requiere un estudio de viabilidad previo por parte de nuestro equipo.'
      },
      {
        q: '05. ¿Cómo garantizan la fiabilidad de las fábricas y proveedores seleccionados?',
        a: 'Cada proveedor identificado se somete a una rigurosa auditoría documental: registro mercantil oficial, licencias de producción y normativas (ISO, CE), solvencia financiera, capacidad fabril verificada y conformidad física de muestras de preproducción antes de cualquier compromiso de compra.'
      },
      {
        q: '06. ¿Gestionan directamente el despacho de aduanas y el transporte de mercancías?',
        a: 'No. NOVELTRIA no es transportista ni agente de aduanas colegiado. No obstante, dentro de nuestros servicios de Categoría B, le asesoramos en la elección óptima de las reglas Incoterms 2020 y coordinamos fluidamente con transitarios homologados y representantes aduaneros autorizados.'
      },
      {
        q: '07. ¿Qué perfil de empresas puede asociarse con NOVELTRIA?',
        a: 'Nuestros servicios están dirigidos a pymes y empresas de mediana capitalización que desean asegurar o diversificar sus cadenas de suministro internacionales o abrir mercados de exportación, así como a grupos industriales consolidados que buscan alternativas competitivas de aprovisionamiento.'
      },
      {
        q: '08. ¿Cómo se estructuran los honorarios de NOVELTRIA?',
        a: 'Nuestra estructura de remuneración se define con total transparencia en el contrato de mandato previo. Según la naturaleza y complejidad del proyecto, puede combinar una provisión fija inicial y/o una comisión de éxito vinculada a los volúmenes negociados o al ahorro obtenido.'
      },
      {
        q: '09. ¿Cómo se protege la confidencialidad de nuestros proyectos de compra o venta?',
        a: 'La confidencialidad es la base fundamental de nuestro código de conducta. Antes de cualquier intercambio de especificaciones técnicas, planos industriales o estrategias comerciales, se formaliza obligatoriamente un acuerdo bilateral de estricta confidencialidad (NDA).'
      },
      {
        q: '10. ¿Cuál es la situación jurídica actual de NOVELTRIA?',
        a: 'NOVELTRIA International Trade Services es un proyecto en fase de constitución liderado por su fundador, Laurent Huiskens. Esta transparencia total desde el primer contacto forma parte de nuestro estándar de rigor y profesionalidad.'
      }
    ]
  },
  it: {
    pageTitle: 'Domande Frequenti (FAQ) | NOVELTRIA International Trade Services',
    metaDesc: 'Tutte le risposte alle vostre domande su intermediazione nel commercio internazionale, mandati di sourcing, approvvigionamenti globali e quadro operativo. Fondatore: Laurent Huiskens.',
    metaKeywords: 'FAQ import export, intermediazione commercio internazionale, mandato di sourcing, domande frequenti NOVELTRIA, Laurent Huiskens',
    ogTitle: 'Domande Frequenti (FAQ) | NOVELTRIA International Trade Services',
    ogDesc: 'Risposte chiare e trasparenti sul nostro modello a mandato scritto e sulla sicurezza delle vostre transazioni transfrontaliere.',
    heroBadge: 'Centro Assistenza e Trasparenza',
    heroTitle: 'Domande Frequenti',
    heroSlogan: 'Tutto ciò che dovete sapere sulla nostra intermediazione su mandato e sul nostro quadro operativo',
    heroDesc: 'Trovate risposte complete alle domande più frequenti sul nostro approccio al sourcing, sul nostro portafoglio di servizi, sulle garanzie di riservatezza e sulla struttura contrattuale.',
    sectionEyebrow: 'Risposte Dettagliate',
    sectionTitle: 'Chiarimenti Chiave',
    sectionSubtitle: 'Cliccate su ciascuna domanda per consultare i dettagli sulla nostra metodologia e sulle nostre garanzie.',
    ctaEyebrow: 'Avete una Domanda Specifica?',
    ctaTitle: 'Desiderate maggiori informazioni non presenti in questa sezione FAQ?',
    ctaSubtitle: 'Il nostro fondatore e il team dedicato sono a vostra completa disposizione per offrirvi un orientamento personalizzato.',
    ctaButton: 'Inviare una richiesta',
    questions: [
      {
        q: '01. Cos\'è NOVELTRIA International Trade Services?',
        a: 'NOVELTRIA International Trade Services è una casa di intermediazione specializzata nel commercio internazionale, avviata dal suo fondatore <strong>Laurent Huiskens</strong>. La sua missione è accompagnare le aziende nel sourcing globale, nella negoziazione commerciale su mandato e nello sviluppo di canali di esportazione. Il progetto è attualmente in fase di costituzione.'
      },
      {
        q: '02. Qual è la differenza tra un intermediario tradizionale e l\'intermediazione su mandato di NOVELTRIA?',
        a: 'A differenza dei broker tradizionali che possono percepire compensi non dichiarati da entrambe le parti generando zone d\'ombra, NOVELTRIA opera rigorosamente sotto mandato scritto esclusivo: interveniamo solo a favore dell\'acquirente (mandato di acquisto) o del fornitore (mandato di vendita). Ciò garantisce assoluta lealtà contrattuale e assenza totale di conflitti di interesse.'
      },
      {
        q: '03. Perché distinguere tra servizi di Categoria A e Categoria B?',
        a: 'La Categoria A include le nostre prestazioni dirette di consulenza strategica (sourcing, negoziazione commerciale su mandato, ricerca di mercati esteri) svolte direttamente da NOVELTRIA. La Categoria B copre logistica, procedure doganali, assicurazioni di trasporto e verifiche qualitative, coordinate su misura con partner terzi abilitati, poiché NOVELTRIA non esercita direttamente queste professioni regolamentate.'
      },
      {
        q: '04. Quali settori industriali sono confermati da NOVELTRIA?',
        a: 'I nostri settori di intervento confermati sono <strong>Tessile e Abbigliamento</strong>, <strong>Elettronica e Componenti</strong>, e <strong>Materiali Industriali e Materie Prime</strong>. Ogni altro settore è subordinato a una valutazione preliminare di fattibilità.'
      },
      {
        q: '05. In che modo garantite l\'affidabilità delle fabbriche e dei fornitori selezionati?',
        a: 'Ogni fornitore identificato è sottoposto a un accurato audit documentale: verifica dell\'iscrizione societaria, conformità agli standard produttivi (ISO, CE), solidità finanziaria, capacità operativa verificata e collaudo fisico dei campioni prima di qualsiasi impegno contrattuale o d\'acquisto.'
      },
      {
        q: '06. Gestite direttamente lo sdoganamento e la spedizione merci?',
        a: 'No. NOVELTRIA non è uno spedizioniere né uno spedizioniere doganale autorizzato. Tuttavia, nell\'ambito dei servizi di Categoria B, forniamo consulenza sulla selezione degli Incoterms 2020 appropriati e coordiniamo direttamente i rapporti con vettori certificati e doganalisti autorizzati.'
      },
      {
        q: '07. Quali tipologie di aziende collaborano con NOVELTRIA?',
        a: 'I nostri servizi si rivolgono a PMI e imprese mid-cap desiderose di consolidare e diversificare la propria catena di fornitura internazionale o di aprire mercati di esportazione, nonché a gruppi industriali consolidati in cerca di alternative di acquisto competitive.'
      },
      {
        q: '08. Come sono strutturati i compensi di NOVELTRIA?',
        a: 'La nostra struttura di compenso è definita in modo trasparente nel contratto di mandato preventivo. A seconda della complessità del progetto, può prevedere una quota fissa iniziale (retainer) e/o una commissione di successo proporzionata ai volumi negoziati o ai risparmi generati.'
      },
      {
        q: '09. Come viene tutelata la riservatezza dei nostri progetti aziendali?',
        a: 'La riservatezza costituisce un cardine inderogabile del nostro operato. Prima di condividere qualsiasi specifica tecnica, disegno industriale o strategia commerciale, viene formalizzato un rigoroso accordo bilaterale di riservatezza (NDA).'
      },
      {
        q: '10. Qual è l\'attuale assetto giuridico di NOVELTRIA?',
        a: 'NOVELTRIA International Trade Services è un progetto in fase di costituzione guidato dal fondatore, Laurent Huiskens. Questa trasparenza informativa iniziale rispecchia pienamente il nostro rigore deontologico.'
      }
    ]
  },
  de: {
    pageTitle: 'Häufig gestellte Fragen (FAQ) | NOVELTRIA International Trade Services',
    metaDesc: 'Alle Antworten auf Ihre Fragen zu internationaler Handelsvermittlung, Sourcing-Mandaten, globaler Beschaffung und operativem Rahmen. Gründer: Laurent Huiskens.',
    metaKeywords: 'FAQ Import Export, Außenhandelsvermittlung, Sourcing-Mandat, Häufig gestellte Fragen NOVELTRIA, Laurent Huiskens',
    ogTitle: 'Häufig gestellte Fragen (FAQ) | NOVELTRIA International Trade Services',
    ogDesc: 'Klare und transparente Antworten zu unserem Mandatsmodell und der Absicherung Ihrer grenzüberschreitenden Handelsgeschäfte.',
    heroBadge: 'Hilfebereich &amp; Transparenz',
    heroTitle: 'Häufig gestellte Fragen',
    heroSlogan: 'Alles Wissenswerte über unsere mandatsbasierte Vermittlung und unseren vertraglichen Rahmen',
    heroDesc: 'Hier finden Sie präzise Antworten auf die wesentlichen Fragen zu unserem Beschaffungsansatz, Leistungsspektrum, Geheimhaltungsschutz und rechtlichen Rahmenbedingungen.',
    sectionEyebrow: 'Detaillierte Antworten',
    sectionTitle: 'Zentrale Klarstellungen',
    sectionSubtitle: 'Klicken Sie auf eine Frage, um die Einzelheiten zu unserer Methodik und unseren Sicherheitsstandards einzusehen.',
    ctaEyebrow: 'Haben Sie eine spezifische Frage?',
    ctaTitle: 'Wünschen Sie weitere Auskünfte, die hier nicht aufgeführt sind?',
    ctaSubtitle: 'Unser Gründer und unser Fachteam stehen Ihnen gerne für eine individuelle Abstimmung zur Verfügung.',
    ctaButton: 'Ihre Frage stellen',
    questions: [
      {
        q: '01. Was ist NOVELTRIA International Trade Services?',
        a: 'NOVELTRIA International Trade Services ist ein auf den internationalen Handel spezialisiertes Vermittlungshaus, initiiert von Gründer <strong>Laurent Huiskens</strong>. Seine Aufgabe besteht darin, Industrie- und Handelsunternehmen beim weltweiten Sourcing, bei Verhandlungen im Rahmen eines exklusiven Mandats sowie bei der Erschließung von Exportmärkten zu begleiten. Das Projekt befindet sich im Gründungsstadium.'
      },
      {
        q: '02. Worin besteht der Unterschied zwischen einem klassischen Broker und der mandatsbasierten Vermittlung von NOVELTRIA?',
        a: 'Im Gegensatz zu traditionellen Brokern, die oft intransparente Doppelprovisionen von beiden Seiten beziehen, agiert NOVELTRIA strikt im Rahmen eines exklusiven schriftlichen Mandats: Wir handeln ausschließlich im Auftrag des Käufers (Einkaufsmandat) oder des Verkäufers (Vertriebsmandat). Dies schließt jegliche Interessenkonflikte aus und sichert uneingeschränkte Vertragstreue zu.'
      },
      {
        q: '03. Warum wird zwischen Leistungen der Kategorie A und Kategorie B unterschieden?',
        a: 'Kategorie A umfasst unsere direkten Beratungs- und Verhandlungsleistungen (Sourcing, Mandatsverhandlungen, Exportmarkterschließung), die unmittelbar von NOVELTRIA erbracht werden. Kategorie B umfasst Frachtlogistik, Zollabfertigung, Transportversicherungen und Qualitätsprüfungen, die mit zugelassenen Drittanbietern koordiniert werden, da NOVELTRIA diese reglementierten Tätigkeiten nicht unmittelbar ausübt.'
      },
      {
        q: '04. Welche Industriezweige werden von NOVELTRIA bestätigt abgedeckt?',
        a: 'Unsere bestätigten Schwerpunktbranchen sind <strong>Textil &amp; Bekleidung</strong>, <strong>Elektronik &amp; Komponenten</strong> sowie <strong>Industriewerkstoffe &amp; Rohstoffe</strong>. Alle weiteren Branchen bedürfen einer vorherigen Prüfung durch unser Fachteam.'
      },
      {
        q: '05. Wie stellen Sie die Zuverlässigkeit der ausgewählten Fabriken und Lieferanten sicher?',
        a: 'Jeder identifizierte Lieferant durchläuft eine detaillierte Dokumentenprüfung: amtliche Unternehmensregistrierung, Qualitätszertifikate (ISO, CE), Bonitätsbewertung, Überprüfung der tatsächlichen Produktionskapazitäten sowie physische Prüfung von Vorproduktionsmustern vor jeder vertraglichen Bindung.'
      },
      {
        q: '06. Führen Sie Zollabfertigung und Gütertransport eigenständig durch?',
        a: 'Nein. NOVELTRIA ist weder Spediteur noch lizenzierter Zollagent. Im Rahmen unserer Kategorie-B-Leistungen beraten wir Sie jedoch bei der optimalen Ausgestaltung der Incoterms 2020 und steuern die Schnittstellen zu zugelassenen Speditionsgesellschaften und Zollexperten.'
      },
      {
        q: '07. An welche Unternehmen richten sich die Leistungen von NOVELTRIA?',
        a: 'Unser Angebot richtet sich an mittelständische Unternehmen (KMU/Mittelstand), die ihre Beschaffungskanäle international absichern und diversifizieren oder neue Exportmärkte erschließen wollen, sowie an Industrieunternehmen, die wettbewerbsfähige Beschaffungsalternativen suchen.'
      },
      {
        q: '08. Wie setzt sich die Vergütung von NOVELTRIA zusammen?',
        a: 'Unsere Honorarstruktur wird vor Beginn jedes Auftrags transparent im Mandatsvertrag fixiert. Je nach Projektumfang setzt sie sich aus einer Grundpauschale (Retainer) und/oder einer erfolgsabhängigen Vergütung zusammen, berechnet auf Basis des Verhandlungsvolumens oder der erzielten Einsparungen.'
      },
      {
        q: '09. Wie wird die Vertraulichkeit unserer Geschäftsdaten und Pläne gewahrt?',
        a: 'Vertraulichkeit hat bei uns oberste Priorität. Vor dem Austausch technischer Spezifikationen, Zeichnungen oder vertraulicher Geschäftsdaten wird stets eine strikte bilaterale Vertraulichkeitsvereinbarung (NDA) geschlossen.'
      },
      {
        q: '10. Welchen rechtlichen Status hat NOVELTRIA gegenwärtig?',
        a: 'NOVELTRIA International Trade Services ist ein Projekt im Gründungsstadium unter Leitung des Gründers Laurent Huiskens. Diese lückenlose Transparenz ist elementarer Bestandteil unserer professionellen Arbeitsweise.'
      }
    ]
  },
  zh: {
    pageTitle: '常见问题 (FAQ) | NOVELTRIA International Trade Services',
    metaDesc: '关于国际贸易中介、独家采购委托、全球供应链拓展与运营条款的全面解答。创始人：Laurent Huiskens。',
    metaKeywords: '进出口常见问题, 国际贸易中介, 采购委托, NOVELTRIA 常见问答, Laurent Huiskens',
    ogTitle: '常见问题 (FAQ) | NOVELTRIA International Trade Services',
    ogDesc: '关于我们独家书面委托模式及保障跨境商业安全的全方位透明解答。',
    heroBadge: '帮助中心与合规透明',
    heroTitle: '常见问题解答',
    heroSlogan: '全面了解我们的独家委托中介机制与专业运营框架',
    heroDesc: '在此查阅有关我们全球寻源方法、服务体系、保密机制和合同架构的详细解答。',
    sectionEyebrow: '详细解答',
    sectionTitle: '核心解答概览',
    sectionSubtitle: '点击各问题即可展开查看我们专业方法与安全保障机制的详细内容。',
    ctaEyebrow: '有特定疑问？',
    ctaTitle: '您是否还有此处未列出的其他业务疑问？',
    ctaSubtitle: '我们的创始人与专业团队随时准备为您提供量身定制的咨询与协助。',
    ctaButton: '提出您的疑问',
    questions: [
      {
        q: '01. 什么是 NOVELTRIA International Trade Services？',
        a: 'NOVELTRIA International Trade Services 是一家专注于国际贸易的专业中介服务机构，由创始人 <strong>Laurent Huiskens</strong> 创立。其宗旨是协助企业开展全球供应商寻源、书面委托项下的商务谈判以及海外出口市场拓展。该项目目前正处于筹建阶段（projet en cours de constitution / project under constitution）。'
      },
      {
        q: '02. 传统经纪人与 NOVELTRIA 的独家书面委托中介有何本质区别？',
        a: '传统贸易经纪人可能从买卖双方两头收取隐性佣金，导致利益冲突与信息不透明；而 NOVELTRIA 严格在独家书面委托框架下运作：我们仅代表买方（采购委托）或仅代表卖方（销售委托），确保绝对的契约忠诚度，彻底杜绝任何利益冲突。'
      },
      {
        q: '03. 为何严格区分 A 类（Category A）与 B 类（Category B）服务？',
        a: 'A 类涵盖由 NOVELTRIA 在委托框架下直接执行的核心专业服务（采购寻源、商业谈判、出口渠道开发）。B 类则涉及物流运输、进出口报关清关、货物保险与质量检验；鉴于 NOVELTRIA 本身并不直接从事此类特许法定行业，我们协同具备官方资质的持牌第三方机构提供定制协调。'
      },
      {
        q: '04. NOVELTRIA 确认覆盖哪些工业行业领域？',
        a: '我们目前已确立的核心行业领域为：<strong>纺织与服装（Textile &amp; Apparel）</strong>、<strong>电子与元器件（Electronics &amp; Components）</strong>以及<strong>工业原材料与大宗物资（Industrial Materials &amp; Raw Commodities）</strong>。其他行业需经专业团队预先进行可行性评估。'
      },
      {
        q: '05. 你们如何确保入选工厂与供货商的资质可靠？',
        a: '每家初选供应商均须经过严格的文件与合规审核：企业营业执照、权威生产资质与质量认证（ISO、CE等）、财务稳健性、核验后的实际产能，并在正式签订合同前对样品进行实物技术核验。'
      },
      {
        q: '06. 你们是否直接处理国际货运和海关清关手续？',
        a: '不直接承接。NOVELTRIA 既非货运承运商，亦非持牌报关行。但在我们的 B 类协助服务中，我们为您提供关于《国际贸易术语解释通则》（Incoterms 2020）的最佳合规建议，并负责与具备官方资质的国际货运代理和报关行进行无缝对接。'
      },
      {
        q: '07. 哪些类型的企业适合与 NOVELTRIA 合作？',
        a: '我们的服务面向希望强化并分散国际供应链风险或开拓海外出口渠道的中小企业（SMEs）与中型企业，同时也服务于寻求极具竞争力且合规采购解决方案的大型工业集团。'
      },
      {
        q: '08. NOVELTRIA 的服务报酬机制如何构成？',
        a: '我们的收费机制在合作初期的委托合同中完全公开透明约定。根据项目复杂程度，通常由初始固定咨询费（retainer）及/或按谈判成交金额或实现的成本节约比例计算的成功佣金构成。'
      },
      {
        q: '09. 你们如何保护客户商业机密与采购计划的安全性？',
        a: '保密是我们执业伦理的核心。在接触任何技术图纸、商业参数或采购规格之前，双方必须首先正式签署具有法律效力的双边保密协议（NDA）。'
      },
      {
        q: '10. NOVELTRIA 目前的法定设立状态是什么？',
        a: 'NOVELTRIA International Trade Services 是由创始人 Laurent Huiskens 发起、正在筹建中的商业实体（projet en cours de constitution / project under constitution）。从首度接触起即保持全方位公开透明，是我们恪守专业严谨精神的基石。'
      }
    ]
  }
};

function generateFaqHtml(lang) {
  const d = faqData[lang];
  const headerHtml = renderHeader(lang, 'faq', 'faq.html');
  const footerHtml = renderFooter(lang);

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": d.questions.map(q => ({
      "@type": "Question",
      "name": q.q.replace(/^\d+\.\s*/, ''),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a.replace(/<[^>]*>/g, '')
      }
    }))
  };

  const accordionItemsHtml = d.questions.map((item, index) => {
    const isOpen = index === 0;
    return `          <!-- Question ${index + 1} -->
          <div class="faq-item${isOpen ? ' open' : ''}">
            <button class="faq-question" type="button" aria-expanded="${isOpen ? 'true' : 'false'}">
              <span>${item.q}</span>
              <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="faq-answer">
              <p>${item.a}</p>
            </div>
          </div>`;
  }).join('\n\n');

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
  <link rel="canonical" href="https://www.noveltria.online/${lang}/faq.html">

  <!-- Multilingual Alternate Links (hreflang) -->
  <link rel="alternate" hreflang="fr" href="https://www.noveltria.online/faq.html">
  <link rel="alternate" hreflang="en" href="https://www.noveltria.online/en/faq.html">
  <link rel="alternate" hreflang="es" href="https://www.noveltria.online/es/faq.html">
  <link rel="alternate" hreflang="it" href="https://www.noveltria.online/it/faq.html">
  <link rel="alternate" hreflang="de" href="https://www.noveltria.online/de/faq.html">
  <link rel="alternate" hreflang="zh" href="https://www.noveltria.online/zh/faq.html">
  <link rel="alternate" hreflang="x-default" href="https://www.noveltria.online/en/faq.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="NOVELTRIA International Trade Services">
  <meta property="og:locale" content="${faqData[lang].locale || lang}">
  <meta property="og:title" content="${d.ogTitle}">
  <meta property="og:description" content="${d.ogDesc}">
  <meta property="og:url" content="https://www.noveltria.online/${lang}/faq.html">
  <meta property="og:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${d.ogTitle}">
  <meta name="twitter:description" content="${d.ogDesc}">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85">

  <!-- Favicon -->\n  <link rel="icon" type="image/png" href="../assets/images/favicon.png">\n\n  <!-- Stylesheet -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org FAQPage Structured Data -->
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
    <section class="hero hero--page hero--faq" aria-labelledby="faqHeroTitle">
      <div class="container">
        <div class="hero-content">
          <div class="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <span>${d.heroBadge}</span>
          </div>
          <h1 id="faqHeroTitle" class="hero__title">${d.heroTitle}</h1>
          <p class="hero__slogan">${d.heroSlogan}</p>
          <p class="hero__desc">${d.heroDesc}</p>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
         FAQ ACCORDION
         ========================================================================== -->
    <section class="section" aria-labelledby="faqListTitle">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <span class="section-eyebrow">${d.sectionEyebrow}</span>
          <h2 id="faqListTitle" class="section-title">${d.sectionTitle}</h2>
          <p class="section-subtitle">${d.sectionSubtitle}</p>
        </div>

        <div class="faq-list reveal-on-scroll">
${accordionItemsHtml}
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
        <a href="contact.html" class="btn btn-primary" style="padding: 16px 36px; font-size: 15px;">${d.ctaButton}</a>
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
  const filePath = path.join(websiteDir, lang, 'faq.html');
  fs.writeFileSync(filePath, generateFaqHtml(lang), 'utf-8');
  console.log(`Generated: ${filePath}`);
});
