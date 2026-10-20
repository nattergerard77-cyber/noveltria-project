---
name: design-accessibility-check
description: Vérifier la conformité aux normes d'accessibilité web WCAG (contraste, taille, navigation)
type: skill
agent: quality-assurance
---

# Skill : Design Accessibility Check (Vérification accessibilité)

## Quand utiliser ce skill
- Après chaque création de maquette visuelle par le Web Developer.
- Avant validation définitive d'une page pour publication.
- Lors de tests d'ergonomie sur mobile et tablette.

## Prérequis
- Avoir lu `skills/phase-1-design/create-style-guide/SKILL.md` pour connaître la palette de couleurs.
- Le prototype ou la page HTML doit être accessible dans un navigateur.

## Normes de référence
**WCAG 2.1 niveau AA** (recommandé pour les sites institutionnels).

### Niveaux de conformité WCAG :
- **A** : Conformité minimale (cible basse).
- **AA** : Conformité standard (cible NOVELTRIA).
- **AAA** : Conformité avancée (non obligatoire pour un site standard).

## Règles essentielles à vérifier

### 1. Contraste des couleurs (WCAG 1.4.3)
Les textes doivent avoir un **ratio de contraste suffisant** :
- **Texte normal** (<= 18pt) : ratio >= 4.5:1
- **Texte gros** (> 18pt) ou gras (> 14pt gras) : ratio >= 3:1

**Exemple concret NOVELTRIA** :
- Bleu Marine (#0A2540) sur blanc (#FFFFFF) → **11.5:1** ✅ OK.
- Bleu Nuit (#1B4965) sur Gris Perle (#F5F7FA) → **6.7:1** ✅ OK.
- Or Prestige (#C8A566) sur blanc (#FFFFFF) → **3.2:1** ⚠️ Risque sur texte normal, OK sur gros texte.
- Gris Texte (#4A5568) sur blanc (#FFFFFF) → **7.5:1** ✅ OK.

**Outils de vérification** :
- Outil en ligne : [contrast-ratio.com](https://contrast-ratio.com)
- Extension Chrome : WCAG Color contrast checker

### 2. Tailles de texte lisibles (WCAG 1.4.4)
- La taille de base des textes doit être **au moins 16px**.
- Pas de réduction du zoom empêchant la lecture (utiliser `rem` ou `%`).
- Vérifier sur mobile que le texte reste lisible sans zoom.

### 3. Accessibilité clavier (WCAG 2.1.1)
- Toutes les fonctionnalités (liens, boutons, formulaires) doivent être navigables **uniquement au clavier**.
- Indicateur de focus visible (`:focus`) présent sur chaque élément interactif.

### 4. Navigation et structure (WCAG 2.4.1)
- **Un seul `<h1>`** par page.
- Hiérarchie `<h1>` → `<h2>` → `<h3>` respectée.
- Éléments répétitifs (menu) ont une étiquette ARIA (`aria-label`).

### 5. Alternatives textuelles (WCAG 1.1.1)
- Toutes les images ont un attribut `alt` pertinent.
- Images décoratives ont `alt=""` (vide).
- Images de texte privilégient le HTML réel.

## Grille d'audit d'accessibilité

### Audit 1 — Contraste
- [ ] Contraste texte principal >= 4.5:1
- [ ] Contraste boutons primaires >= 3:1
- [ ] Couleurs d'erreur (rouge) visibles suffisamment

### Audit 2 — Typographie
- [ ] Corps de texte >= 16px
- [ ] Polices utilisables (pas de fontes fantaisistes illisibles)
- [ ] Line-height >= 1.5 (pour les longues lignes)

### Audit 3 — Navigation clavier
- [ ] Bouton menu burger accessible au clavier
- [ ] Ordre de tabulation logique (gauche → droite, haut → bas)
- [ ] Indicateur de focus visible sur les éléments interactifs

### Audit 4 — Structure sémantique
- [ ] `<h1>` unique
- [ ] Pas de saut dans la hiérarchie H1 → H2 → H3
- [ ] Utilisation de `<section>` et `<article>` pour délimiter le contenu

### Audit 5 — Images
- [ ] Attributs `alt` non vides sur les images de contenu
- [ ] Attributs `alt=""` sur les images décoratives
- [ ] Aucune image de texte remplaçable par du HTML

## Exemple pratique pour NOVELTRIA

**Test de la page d'accueil** :
- Titre H1 « NOVELTRIA International Trade Services » → contraste OK ?
- Bouton « Découvrir nos services » → contraste OK ? taille tactile OK ?
- Images du secteur Textile → `alt="Composant électronique exporté"` ou `alt=""` si décoratif ?
- Formulaire de contact → champs labélisés, focus visible ?

## Outils recommandés pour la vérification

- **Wave** : [wave.webaim.org](https://wave.webaim.org)
- **axe DevTools** (extension Chrome)
- **Color Contrast Analyzer** (plugin Chrome)
- **NVDA** ou **VoiceOver** pour tests lecteur d'écran (optionnel)

## Procédure de remédiation

Si un problème est détecté :
1. **Prioriser** les erreurs bloquantes (contraste insuffisant, navigation clavier cassée).
2. **Signaler** au Web Developer avec un screenshot et description précise.
3. **Vérifier** la correction après intervention.

## Checklist avant validation définitive d'une page

- [ ] Aucune erreur de contraste détectée (ratio >= 4.5:1 pour le texte normal).
- [ ] Navigation clavier complète et fluide.
- [ ] H1 unique et hiérarchie H2-H3 respectée.
- [ ] Taille de texte >= 16px.
- [ ] Attributs `alt` présents sur toutes les images de contenu.
- [ ] Boutons avec label explicite (`aria-label` si texte manquant).
- [ ] Formulaire avec labels associés aux champs via `for`.
- [ ] Pas de lecture automatique de vidéos ou sons.

## Sorties attendues

1. **Rapport d'audit** : `accessibility-audit-[page].md` avec liste des problèmes et recommandations.
2. **Validation Quality Assurance** : Pass/fail avec actions requises.
3. **Transmission au Web Developer** : Issues à corriger avant mise en production.
