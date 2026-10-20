---
name: optimize-images
description: Optimiser les images du site NOVELTRIA pour réduire le poids, accélérer le chargement et améliorer les performances
type: skill
agent: web-developer + quality-assurance
---

# Skill : Optimize Images (Optimisation des images)

## Quand utiliser ce skill
- Après intégration d'images dans les pages HTML.
- Avant la mise en production (déploiement final).
- Lors d'un audit de performance révélant des images trop lourdes.

## Prérequis
- Les images sources (haute résolution) doivent être disponibles.
- Connaître le contexte d'utilisation (héro, logo, photo de fond, vignettes).

## Règles d'optimisation pour NOVELTRIA

### 1. Formats adaptés selon le type d'image

| Type d'image | Format recommandé | Commentaire |
|--------------|-------------------|-------------|
| **Logo** (vectoriel) | SVG (.svg) | Évolutif sans perte, poids minimal. |
| **Photos** (héro, produit, équipe) | WebP (fallback JPG) | Compression supérieure pour qualité visuelle équivalente. |
| **Iconographie** (line icons) | SVG (.svg) | Vectoriel, parfait pour les icônes UI. |
| **Graphes & schémas** | SVG (.svg) | Vectoriel, léger et scalé. |
| **Images complexes** (infographie, bannière avec texte) | WebP (fallback PNG) | Si besoin de transparence, sinon WebP. |

### 2. Tailles et dimensions raisonnables

- **Largeur maximum** : 1920px pour les images plein écran (héro).
- **Largeur standard** : 1200px pour les images de contenu.
- **Largeur vignettes** : 400-600px pour les illustrations secondaires.

### 3. Qualité de compression
- **JPG** : Qualité 75-85% (bon compromis taille/qualité).
- **WebP** : Qualité 80-85%.
- **PNG** : Utiliser des outils de compression comme pngquant.

## Étapes d'optimisation

### Étape 1 : Identification des images à optimiser
Lister toutes les images du site (dossier `/images/`) :

| Fichier | Format | Dimensions | Poids (avant) | Besoin |
|---------|--------|------------|---------------|--------|
| `hero-bg.jpg` | JPG | 2500x1400 | 950 KB | → WebP 1920x1080 |
| `logo-noveltria.svg` | SVG | 200x60 | 15 KB | OK |
| `team-photo.jpg` | JPG | 1800x1200 | 720 KB | → WebP 1200x800 |

### Étape 2 : Conversion en WebP (avec fallback)
Utiliser des outils comme `cwebp` (Google) ou logiciel en ligne.

**Commande cwebp** :
```bash
cwebp -q 85 hero-bg.jpg -o hero-bg.webp
```

### Étape 3 : Mise en œuvre HTML avec fallback
```html
<picture>
  <source srcset="images/hero-bg.webp" type="image/webp">
  <source srcset="images/hero-bg.jpg" type="image/jpeg">
  <img src="images/hero-bg.jpg" alt="Bureau moderne NOVELTRIA" width="1920" height="1080">
</picture>
```

### Étape 4 : SVG optimisation
Pour les logos et icônes SVG, réduire le code superflu :

```bash
svgo logo.svg -o logo-optimized.svg
```

### Étape 5 : Attributs HTML obligatoires
- **`alt`** : Descriptif pertinent pour l'accessibilité.
- **`width`** et **`height`** : Définis en HTML pour éviter les CLS (Cumulative Layout Shift).
- **`loading="lazy"`** pour les images hors écran (défilement).

```html
<img src="images/team-photo.webp" 
     alt="Équipe NOVELTRIA dans un espace de travail collaboratif" 
     width="1200" 
     height="800" 
     loading="lazy">
```

### Étape 6 : Responsive images avec `srcset`
Pour les images dont la taille varie selon l'écran, utiliser `srcset` :

```html
<img src="images/service-card.webp" 
     srcset="images/service-card-600.webp 600w,
             images/service-card-1200.webp 1200w,
             images/service-card-1920.webp 1920w"
     sizes="(max-width: 768px) 600px,
            (max-width: 1280px) 1200px,
            1920px"
     alt="Service Sourcing NOVELTRIA" 
     width="1920" 
     height="1080" 
     loading="lazy">
```

## Outils recommandés

### Conversion & Compression
- **cwebp** : Google WebP encoder (ligne de commande)
- **ImageMagick** : Conversion multi-format
- **pngquant** : Compression PNG
- **TinyPNG** (en ligne) : Compression WebP/JPG/PNG

### Vérification
- **PageSpeed Insights** (Google) : Audits de performance images.
- **Lighthouse** (Chrome DevTools) : Rapports de performances.
- **WebPageTest** : Analyse approfondie des temps de chargement.

## Objectifs de performance pour NOVELTRIA

- **Poids total images par page** < 500 KB (hors héros).
- **Poids image héros** < 200 KB (WebP compressé).
- **Temps de chargement LCP** < 2.5s (Largest Contentful Paint).
- **CLS** < 0.1 (Cumulative Layout Shift).

## Checklist d'optimisation

- [ ] Toutes les photos converties en WebP avec fallback JPG.
- [ ] Logos et icônes en SVG optimisés avec svgo.
- [ ] Dimensions raisonnables (max 1920px de large).
- [ ] Attributs `alt` pertinents et descriptifs.
- [ ] `width` et `height` spécifiés en HTML.
- [ ] `loading="lazy"` pour images hors écran.
- [ ] `srcset` et `sizes` pour les images responsives.
- [ ] Poids total images par page < 500 KB.

## Sorties attendues

1. **Images optimisées** : Dossier `/images/optimized/` avec versions WebP et JPG.
2. **Rapport d'optimisation** : `image-optimization-report.md` avec poids avant/après.
3. **Code HTML mis à jour** : Intégration des balises `<picture>`, `srcset`, attributs.
