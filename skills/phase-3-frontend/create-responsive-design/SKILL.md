---
name: create-responsive-design
description: Adapter le site NOVELTRIA pour une lisibilité et une ergonomie irréprochables sur mobiles, tablettes et ordinateurs de bureau
type: skill
agent: web-developer
---

# Skill : Create Responsive Design (Adaptabilité multi-écrans)

## Quand utiliser ce skill
- Dès la conception de la feuille de style principale.
- Lors de l'intégration de tableaux, grilles de services ou formulaires.
- Lors des audits de compatibilité mobile conduits avec le Quality Assurance.

## Approche technique : Mobile-First

L'approche **Mobile-First** consiste à écrire les styles de base pour les écrans réduits (smartphones), puis à enrichir progressivement l'affichage pour les grands écrans via `min-width`.

### Points de rupture (Breakpoints) standards

```css
/* 1. Base : Smartphones (< 768px) -> Styles par défaut */

/* 2. Tablettes & Petits ordinateurs portables (>= 768px) */
@media (min-width: 768px) {
  /* Disposition en 2 colonnes, paddings plus larges */
}

/* 3. Ordinateurs de bureau standards (>= 1024px) */
@media (min-width: 1024px) {
  /* Navigation desktop déployée, grilles à 3 colonnes */
}

/* 4. Grands écrans (>= 1280px) */
@media (min-width: 1280px) {
  /* Conteneur centré avec largeur maximale */
}
```

## Règles d'ergonomie mobile spécifiques à NOVELTRIA

1. **Tailles de cibles tactiles** :
   Les boutons et liens de navigation sur mobile doivent mesurer au moins **44px × 44px** pour être facilement cliquables au doigt.

2. **Typographie responsive** :
   Les titres imposants sur grand écran (`2.5rem` / 40px) doivent automatiquement être réduits sur mobile (`1.75rem` / 28px) pour éviter les coupures de mots disgracieuses.

3. **Images et médias fluides** :
   ```css
   img, svg, video {
     max-width: 100%;
     height: auto;
     display: block;
   }
   ```

4. **Gestion du défilement horizontal** :
   Le défilement horizontal involontaire sur smartphone est strictement interdit.
   ```css
   html, body {
     overflow-x: hidden;
     width: 100%;
   }
   ```

## Grilles fluides (CSS Grid & Flexbox)

Pour les 3 secteurs confirmés (Textile, Électronique, Matériaux) ou les services :
```css
.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Checklist Responsive
- [ ] Pas de défilement horizontal sur mobile.
- [ ] Le texte reste lisible sans zoomer.
- [ ] Les menus et formulaires sont utilisables au toucher.
- [ ] L'affichage a été testé aux résolutions 375px (iPhone), 768px (iPad) et 1440px (Desktop).
