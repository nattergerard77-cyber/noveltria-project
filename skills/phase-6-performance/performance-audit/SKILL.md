---
name: performance-audit
description: Analyser et mesurer les performances du site NOVELTRIA via Lighthouse et identifier les améliorations prioritaires
type: skill
agent: quality-assurance
---

# Skill : Performance Audit (Audit de performances)

## Quand utiliser ce skill
- Avant la mise en production du site.
- Après tout changement majeur de code ou d'images.
- Une fois par mois après lancement pour maintenir la qualité.

## Prérequis
- Le site doit être accessible dans un navigateur (local ou hébergé).
- Avoir Chrome Desktop avec DevTools disponible.

## Métriques Core Web Vitals à mesurer

### 1. LCP — Largest Contentful Paint (Chargement)
**Mesure** : Temps de chargement du plus grand élément visible.
- ✅ Bon : < 2.5s
- ⚠️ À améliorer : 2.5s - 4s
- ❌ Mauvais : > 4s

**Impact NOVELTRIA** : Image héro ou titre H1 est souvent le LCP.

### 2. FID — First Input Delay (Interactivité)
**Mesure** : Délai entre la première interaction utilisateur et la réponse du navigateur.
- ✅ Bon : < 100ms
- ⚠️ À améliorer : 100-300ms
- ❌ Mauvais : > 300ms

### 3. CLS — Cumulative Layout Shift (Stabilité visuelle)
**Mesure** : Décalages visuels inattendus pendant le chargement.
- ✅ Bon : < 0.1
- ⚠️ À améliorer : 0.1 - 0.25
- ❌ Mauvais : > 0.25

**Impact NOVELTRIA** : Éviter en spécifiant `width`/`height` sur toutes les images.

### 4. INP — Interaction to Next Paint (nouveauté 2024)
**Mesure** : Réactivité de la page à chaque interaction.
- ✅ Bon : < 200ms

## Outil principal : Lighthouse

### Procédure d'audit Lighthouse

1. Ouvrir Chrome.
2. Naviguer vers la page à auditer.
3. DevTools → Onglet **Lighthouse**.
4. Configurer :
   - **Device** : Mobile (prioritaire) puis Desktop.
   - **Categories** : Performance, Accessibility, Best Practices, SEO.
5. **Generate report**.

### Scores cibles pour NOVELTRIA

| Catégorie | Score cible minimum |
|-----------|---------------------|
| Performance | >= 85 / 100 |
| Accessibilité | >= 90 / 100 |
| Best Practices | >= 90 / 100 |
| SEO | >= 90 / 100 |

## Améliorations prioritaires identifiées couramment

### A. Images non optimisées
**Recommandation Lighthouse** : « Properly size images », « Use modern image formats ».
**Correction** : Appliquer le skill `optimize-images`.

### B. Ressources bloquantes
**Recommandation** : « Eliminate render-blocking resources ».
**Correction** :
- Déplacer les `<script>` en bas de `<body>`.
- Utiliser `defer` ou `async` pour les scripts.
```html
<script src="js/script.min.js" defer></script>
```

### C. CSS inutilisé
**Recommandation** : « Remove unused CSS ».
**Correction** :
- Utiliser PurgeCSS pour supprimer les règles CSS non utilisées.
- Scinder le CSS en fichiers par page.

### D. TTFB élevé (Time to First Byte)
**Recommandation** : « Reduce initial server response time ».
**Correction** :
- Choisir un hébergement rapide (VPS, CDN).
- Activer le cache serveur.

### E. Fonts bloquantes
**Recommandation** : « Avoid chaining critical requests ».
**Correction** :
- Utiliser `display=swap` pour Google Fonts.
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

### F. Absence de cache navigateur
**Recommandation** : « Serve static assets with an efficient cache policy ».
**Correction** : Configurer les headers HTTP cache côté serveur.

## Rapport d'audit standard

Après chaque audit Lighthouse, remplir cette grille :

```markdown
# Rapport d'audit - [Date] - [Page]

## Scores Lighthouse

| Catégorie | Score Mobile | Score Desktop |
|-----------|-------------|---------------|
| Performance | X / 100 | X / 100 |
| Accessibilité | X / 100 | X / 100 |
| Best Practices | X / 100 | X / 100 |
| SEO | X / 100 | X / 100 |

## Core Web Vitals

| Métrique | Mobile | Desktop | Statut |
|----------|--------|---------|--------|
| LCP | Xs | Xs | ✅/⚠️/❌ |
| FID / INP | Xms | Xms | ✅/⚠️/❌ |
| CLS | X.XX | X.XX | ✅/⚠️/❌ |

## Problèmes identifiés

| Priorité | Problème | Impact | Correction préconisée |
|----------|----------|--------|-----------------------|
| Haute | ... | ... | ... |
| Moyenne | ... | ... | ... |

## Actions correctives

- [ ] Action 1 (responsable : Web Developer)
- [ ] Action 2 (responsable : Quality Assurance)

## Date prévue de réaudit
[Date + 1 semaine]
```

## Checklist avant de déclarer «production-ready»

- [ ] Score Performance Mobile >= 85/100.
- [ ] Score Accessibilité >= 90/100.
- [ ] Score SEO >= 90/100.
- [ ] LCP < 2.5s sur mobile.
- [ ] CLS < 0.1.
- [ ] Aucune erreur console JavaScript.
- [ ] Toutes les images ont `width`, `height`, `alt`.
- [ ] Scripts non bloquants (`defer` ou en bas de `<body>`).
- [ ] Fonts avec `display=swap`.

## Sorties attendues

1. **Rapport d'audit Lighthouse** : Capture d'écran + `performance-audit-report.md`.
2. **Liste priorisée des corrections** : Haute/Moyenne/Basse priorité.
3. **Transmission aux agents concernés** : Web Developer (code), Copywriter (contenu).
