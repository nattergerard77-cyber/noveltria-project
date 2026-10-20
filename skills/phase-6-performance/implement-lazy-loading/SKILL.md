---
name: implement-lazy-loading
description: Mettre en œuvre le chargement différé (lazy loading) des images et iframes pour améliorer les performances initiales
type: skill
agent: web-developer
---

# Skill : Implement Lazy Loading (Chargement différé)

## Quand utiliser ce skill
- Quand une page contient beaucoup d'images (section Actualités, Portfolio, Secteurs).
- Pour optimiser les pages avec plusieurs iframes (cartes Google Maps, vidéos).
- Dès l'intégration des images sur la page.

## Prérequis
- Les images doivent être optimisées (`optimize-images` skill appliqué).
- Connaître la structure de la page pour identifier les images au-dessus et au-dessous du seuil de visibilité.

## Concept du lazy loading

Le **lazy loading** consiste à différer le chargement des ressources non essentielles (images, iframes) jusqu'à ce que l'utilisateur ait besoin de les voir.

### Règle empirique
- **Above the fold** : Images dans le viewport initial → chargement immédiat.
- **Below the fold** : Images hors écran → chargement différé au défilement.

## Méthodes d'implémentation

### 1. Native lazy loading (HTML5 natif)
L'attribut `loading="lazy"` est pris en charge par tous les navigateurs modernes.

```html
<img src="image.webp" alt="Description" loading="lazy" width="1200" height="800">
```

**Support navigateur** : Chrome 77+, Firefox 75+, Edge 79+, Safari 15.4+.

### 2. Lazy loading pour les iframes
```html
<iframe src="https://maps.google.com/maps" 
        loading="lazy" 
        title="Carte Google Maps de nos bureaux"
        width="600" 
        height="450">
</iframe>
```

### 3. `<picture>` avec lazy loading
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy" width="1200" height="800">
</picture>
```

### 4. Images avec srcset & lazy loading
```html
<img src="image-small.webp"
     srcset="image-small.webp 600w,
             image-medium.webp 1200w,
             image-large.webp 1920w"
     sizes="(max-width: 768px) 600px,
            (max-width: 1280px) 1200px,
            1920px"
     alt="Description"
     loading="lazy"
     width="1920"
     height="1080">
```

### 5. Lazy loading CSS background images (avancé)
Pour les images d'arrière-plan CSS, utiliser l'API IntersectionObserver.

**HTML** :
```html
<div class="lazy-background" data-bg="url('background.webp')"></div>
```

**CSS** :
```css
.lazy-background {
  background-color: #F5F7FA; /* Couleur de placeholder */
  min-height: 400px;
  transition: background-image 0.3s ease;
}

.lazy-background.loaded {
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
}
```

**JavaScript** :
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const lazyBackgrounds = document.querySelectorAll('.lazy-background');
  
  const bgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bg = entry.target;
        const bgUrl = bg.getAttribute('data-bg');
        bg.style.setProperty('--bg-image', bgUrl);
        bg.classList.add('loaded');
        observer.unobserve(bg);
      }
    });
  });

  lazyBackgrounds.forEach(bg => bgObserver.observe(bg));
});
```

## Règles spécifiques pour NOVELTRIA

### 1. Image hero (above the fold)
**Chargement immédiat** → pas de lazy loading pour la première image de la bannière principale.
```html
<img src="hero-bg.webp" alt="Bannière NOVELTRIA" width="1920" height="1080">
<!-- NO loading="lazy" ici -->
```

### 2. Images de secteurs (Textile, Électronique, Matériaux)
**Chargement différé** → images en bas de page.
```html
<img src="textile-industry.webp" 
     alt="Usine textile moderne" 
     loading="lazy" 
     width="1200" 
     height="800">
```

### 3. Images d'articles de blog
**Chargement différé** → l'utilisateur doit défiler pour voir les articles.
```html
<img src="blog-import-trends.webp" 
     alt="Graphique tendances import 2026" 
     loading="lazy" 
     width="800" 
     height="450">
```

### 4. Logos partenaires (si présents)
```html
<img src="partner-logo.svg" 
     alt="Logo partenaire transport" 
     loading="lazy" 
     width="200" 
     height="80">
```

## Configurer un placeholder de chargement (optionnel)

Pour améliorer l'expérience utilisateur pendant le chargement :

### 1. Placeholder couleur unie
```css
img[loading="lazy"] {
  background-color: #E2E8F0; /* Gris clair */
  min-height: 1px; /* Évite les flashs */
}
```

### 2. Placeholder blur up (technique avancée)
**HTML** :
```html
<img src="image-small.webp"
     data-src="image-large.webp"
     class="lazy-image"
     alt="Description"
     width="1200"
     height="800">
```

**CSS** :
```css
.lazy-image {
  filter: blur(10px);
  transition: filter 0.5s ease;
}

.lazy-image.loaded {
  filter: blur(0);
}
```

**JavaScript** :
```javascript
const lazyImages = document.querySelectorAll('.lazy-image');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

## Vérification du lazy loading

### Chrome DevTools
1. Ouvrir l'onglet **Network**.
2. Rafraîchir la page.
3. Défiler pour observer les requêtes images déclenchées.

### Lighthouse
- **Performance audit** : Vérifie si le lazy loading est correctement implémenté.

### WebPageTest
- Analyse filmstrip pour voir le chargement progressif.

## Checklist d'implémentation

- [ ] Attribut `loading="lazy"` sur toutes les images below the fold.
- [ ] `width` et `height` définis sur toutes les images (évite les CLS).
- [ ] Hero image exclue du lazy loading.
- [ ] Test de défilement pour vérifier le chargement au bon moment.
- [ ] Pas de régression visuelle (images manquantes).
- [ ] Compatibilité navigateurs vérifiée.

## Performance attendue

- **LCP** (Largest Contentful Paint) : Amélioration si hero image bien gérée.
- **FID** (First Input Delay) : Moins de compétition réseau pour le JS critique.
- **CLS** (Cumulative Layout Shift) : Stable grâce à `width`/`height`.

## Sorties attendues

1. **Code HTML mis à jour** : Attributs `loading="lazy"` sur les images concernées.
2. **Script JavaScript** (optionnel) : Pour les cas spéciaux (background images).
3. **Rapport de vérification** : `lazy-loading-report.md` avec avant/après LCP.
