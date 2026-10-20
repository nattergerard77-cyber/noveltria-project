---
name: add-structured-data
description: Intégrer des données structurées Schema.org (JSON-LD) pour enrichir l'affichage dans les moteurs de recherche
type: skill
agent: seo-specialist
---

# Skill : Add Structured Data (Données structurées Schema.org)

## Quand utiliser ce skill
- Lors de la finalisation HTML des pages principales (Accueil, À propos, Contact, Services).
- Pour améliorer le référencement local et les rich snippets (extraits enrichis).

## Prérequis
- Avoir les informations officielles de l'entreprise (nom, adresse, contact).
- Connaître le format JSON-LD (recommandé par Google).

## Qu'est-ce que les données structurées ?
Les données structurées sont un code standardisé (au format JSON-LD) inséré dans le `<head>` ou le `<body>` d'une page pour aider les moteurs de recherche à comprendre précisément la nature de l'entreprise, ses services, ses horaires et ses contacts.

## Schéma 1 : LocalBusiness / Organization (Page Accueil & Contact)

Ce schéma indique à Google qu'il s'agit d'une entreprise d'intermédiation commerciale.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NOVELTRIA International Trade Services",
  "alternateName": "NOVELTRIA",
  "url": "https://www.noveltria.com",
  "logo": "https://www.noveltria.com/images/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Laurent Huiskens"
  },
  "description": "Intermédiation en import-export international, courtage et accompagnement.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Service client",
    "email": "contact@noveltria.com",
    "availableLanguage": ["French"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/noveltria"
  ]
}
</script>
```

## Schéma 2 : Service (Page Services)

Permet de décrire précisément les prestations proposées.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Sourcing et Négociation Commerciale Internationale",
  "provider": {
    "@type": "Organization",
    "name": "NOVELTRIA International Trade Services"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "International"
  },
  "description": "Sourcing de fournisseurs, recherche d'acheteurs et intermédiation en import-export.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "EUR"
  }
}
</script>
```

## Schéma 3 : FAQPage (Page FAQ)

Indique à Google que la page contient des questions/réponses, permettant d'afficher un accordéon direct dans les résultats de recherche (Rich Snippets).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment fonctionne le sourcing de fournisseurs chez NOVELTRIA ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le sourcing international consiste à identifier, évaluer et présélectionner des fabricants rigoureux correspondant à vos critères techniques et tarifaires."
      }
    },
    {
      "@type": "Question",
      "name": "NOVELTRIA est-elle une société constituée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NOVELTRIA International Trade Services est un projet en cours de constitution."
      }
    }
  ]
}
</script>
```

## Schéma 4 : BreadcrumbList (Fil d'Ariane)

Améliore l'affichage de l'arborescence dans les résultats Google.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://www.noveltria.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.noveltria.com/services.html"
    }
  ]
}
</script>
```

## Outil de validation

Toujours valider le code JSON-LD avant mise en production :
- **Validateur officiel Schema.org** : [validator.schema.org](https://validator.schema.org)
- **Test des résultats enrichis Google** : [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

## Checklist données structurées

- [ ] Schéma Organization/LocalBusiness présent sur l'accueil.
- [ ] Schéma Service présent sur la page services.
- [ ] Schéma FAQPage présent sur la page FAQ.
- [ ] Format JSON-LD valide sans erreur de syntaxe.
- [ ] Données cohérentes avec le contenu textuel de la page.
- [ ] Validé via le testeur de rich snippets Google.

## Sorties attendues

1. **Blocs JSON-LD** : Insérés dans le code HTML des pages correspondantes.
2. **Rapport de validation** : Capture d'écran du test de rich snippets sans erreur.
