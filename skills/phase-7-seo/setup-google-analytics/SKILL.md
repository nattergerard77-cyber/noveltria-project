---
name: setup-google-analytics
description: Configurer le suivi d'audience Google Analytics 4 (GA4) pour le site NOVELTRIA
type: skill
agent: seo-specialist
---

# Skill : Setup Google Analytics (Configuration GA4)

## Quand utiliser ce skill
- Après la mise en production du site web.
- Pour mesurer l'audience, le trafic par pays, et les conversions (formulaires de contact).

## Prérequis
- Un compte Google Analytics actif.
- Un ID de mesure GA4 valide (format `G-XXXXXXXXXX`).

## Procédure d'intégration

### 1. Obtenir le code de suivi GA4
Le script de suivi Google Tag (gtag.js) fourni par Google :
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag.js?G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Intégration dans le HTML
Placer ce script dans le `<head>` de **toutes les pages** du site NOVELTRIA (via le template ou l'inclusion du header).

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>NOVELTRIA</title>
  <!-- Google Analytics GA4 -->
  <script async src="https://www.googletagmanager.com/gtag.js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

## Configuration du suivi des conversions (Formulaire de contact)

Pour mesurer l'efficacité du site, suivre les soumissions du formulaire de contact en tant qu'événement de conversion.

### Script JavaScript de suivi de conversion
Lors de la soumission réussie du formulaire de contact :
```javascript
document.getElementById('contact-form').addEventListener('submit', function(e) {
  // Envoi de l'événement à GA4
  gtag('event', 'generate_lead', {
    'event_category': 'Contact',
    'event_label': 'Formulaire de contact principal'
  });
});
```

## Conformité RGPD & Politique de Confidentialité

En Europe, l'utilisation de Google Analytics nécessite le respect du RGPD :
1. **Anonymisation des IP** : GA4 anonymise les adresses IP par défaut.
2. **Bandeau de consentement** : Si requis par la législation locale, intégrer une solution de gestion des consentements (CMP) avant de charger le script GA4.
3. **Politique de confidentialité** : Mentionner l'utilisation de cookies analytiques dans une page dédiée ou dans le footer.

## Checklist GA4

- [ ] ID de mesure GA4 correct inséré dans toutes les pages.
- [ ] Script placé dans le `<head>`.
- [ ] Événement de conversion configuré pour le formulaire de contact.
- [ ] Test en temps réel dans GA4 (onglet Realtime) pour vérifier la réception des données.
- [ ] Conformité RGPD / consentement prise en compte.

## Sorties attendues

1. **Code HTML avec GA4** : Inséré dans les pages.
2. **Rapport de configuration** : `ga4-setup-report.md` confirmant le bon fonctionnement du tracking.
