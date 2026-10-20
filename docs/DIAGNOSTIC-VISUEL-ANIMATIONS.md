# AUDIT VISUEL & ANIMATIONS — NOVELTRIA INTERNATIONAL TRADE SERVICES
**Date d'audit** : 19 Octobre 2026  
**Auditeur** : Équipe Multi-Agents NOVELTRIA (Design System Manager, Web Developer, Quality Assurance)  
**Projet** : NOVELTRIA International Trade Services (`noveltria-project/website/`)  
**Périmètre** : `index.html`, `about.html`, `services.html`, `faq.html`, `blog.html`, `contact.html`, `css/style.css`, `js/script.js`

---

## RÉSUMÉ EXÉCUTIF & NOTATION

| Axe d'Audit | Score Actuel | Cible Prestige | Statut |
|-------------|:------------:|:--------------:|:------:|
| **Identité Visuelle & Diversité des Images** | **48 / 100** | **95 / 100** | ⚠️ Répétitions critiques, manque de personnalisation contextuelle |
| **Animations & Micro-interactions** | **38 / 100** | **92 / 100** | ⚠️ Animations basiques, aucun scroll reveal, pas de morphing burger |
| **Conformité & Accessibilité Mouvement** | **60 / 100** | **100 / 100** | ⚠️ Absence de clause `@media (prefers-reduced-motion)` |

---

## 1. DIAGNOSTIC DES IMAGES & VISUELS (EXHAUSTIF)

### 1.1 Inventaire Actuel des Images par Page

| Page | Emplacement / Section | Image(s) utilisée(s) | URL source Unsplash | Dimensions natives | Usage contextuel | Évaluation (1-5) | Commentaire critique |
|------|------------------------|---------------------|---------------------|-------------------|------------------|:----------------:|----------------------|
| **Index** | Hero Banner | Port cargo conteneurs | `photo-1578575437130-527eed3abbec` | 1920×1080 | Arrière-plan héro | **3/5** | Bonne qualité mais répété sur 4 autres emplacements |
| **Index** | Section Présentation | Réunion d'affaires | `photo-1556761175-5973dc0f32e7` | 1000×667 | Carte Fondateur | **3/5** | Visuel générique, ne montre pas de portrait identifiable |
| **Index** | Filière Textile | Rouleaux de tissus | `photo-1558769132-cb1aea458c5e` | 800×533 | Carte Secteur | **4/5** | Pertinent, bonne colorimétrie industrielle |
| **Index** | Filière Électronique | Microprocesseur / PCB | `photo-1518770660439-4636190af475` | 800×533 | Carte Secteur | **4/5** | Précis et technologique |
| **Index** | Filière Matériaux | Bobines d'acier / métaux | `photo-1504917599217-d4dc5ebe6122` | 800×533 | Carte Secteur | **4/5** | Robuste et industriel |
| **About** | Hero Page | Port cargo conteneurs (2) | `photo-1586528116311-ad8dd3c8310d` | 1920×1080 | Arrière-plan `.hero--page` | **2/5** | Identique aux 4 autres sous-pages (redondance forte) |
| **About** | Section Fondateur | Consultant en costume | `photo-1507679799987-c73779587ccf` | 1000×667 | Illustration fondateur | **3/5** | Sobre mais impersonnel, manque de chaleur humaine |
| **Services** | Hero Page | Port cargo conteneurs (2) | `photo-1586528116311-ad8dd3c8310d` | 1920×1080 | Arrière-plan `.hero--page` | **2/5** | Doublon avec les autres pages |
| **Services** | Cartes Catégorie A & B | *Aucune image* | *N/A (uniquement icônes SVG)* | *N/A* | Cartes de service | **2/5** | Manque d'immersion visuelle pour des prestations clés |
| **FAQ** | Hero Page | Port cargo conteneurs (2) | `photo-1586528116311-ad8dd3c8310d` | 1920×1080 | Arrière-plan `.hero--page` | **2/5** | Doublon avec les autres pages |
| **Blog** | Hero Page | Port cargo conteneurs (2) | `photo-1586528116311-ad8dd3c8310d` | 1920×1080 | Arrière-plan `.hero--page` | **2/5** | Doublon avec les autres pages |
| **Blog** | Article 1 (Sourcing) | Port cargo conteneurs (2) | `photo-1586528116311-ad8dd3c8310d` | 800×533 | Vignette article | **2/5** | Triple redondance de la même image sur la même page ! |
| **Blog** | Article 2 (Incoterms) | Port cargo conteneurs (1) | `photo-1578575437130-527eed3abbec` | 800×533 | Vignette article | **2/5** | Réutilisation de l'image de la Hero Index |
| **Blog** | Article 3 (Audit Usine) | Contrôle qualité confection | `photo-1551836022-d5d88e9218df` | 800×533 | Vignette article | **4/5** | Très pertinent et contextuel |
| **Contact** | Hero Page | Port cargo conteneurs (2) | `photo-1586528116311-ad8dd3c8310d` | 1920×1080 | Arrière-plan `.hero--page` | **2/5** | Doublon avec les autres pages |
| **Contact** | Section Coordonnées | *Aucune image* | *N/A (uniquement icônes)* | *N/A* | Bloc informations | **2/5** | Page très austère sur la colonne gauche |

---

### 1.2 Problèmes Identifiés (Diagnostic Critique)

- [x] **Répétition excessive** : L'image `photo-1586528116311-ad8dd3c8310d` est utilisée simultanément comme fond de Hero pour 5 sous-pages (`about`, `services`, `faq`, `blog`, `contact`) et comme illustration du premier article de blog ! L'image `photo-1578575437130-527eed3abbec` est quant à elle répétée sur l'Index Hero, l'article 2 du Blog et dans les balises OpenGraph.
- [x] **Images hors contexte ou trop génériques** : Les photos du fondateur présentent deux personnes totalement différentes (`photo-1556761175-5973dc0f32e7` sur l'index et `photo-1507679799987-c73779587ccf` sur la page à propos), ce qui brise la cohérence narrative autour de Laurent Huiskens.
- [x] **Absence d'immersion dans les services** : Les 7 sous-services (Sourcing usine, Débouchés, Négociation, Contrôle qualité, Transport multimodal, Douane, Assurance) ne reposent que sur des icônes SVG dans des cartes textuelles, sans photographie de terrain.
- [x] **Incohérence stylistique des arrière-plans** : Toutes les sous-pages ont le même calque sombre uniforme sans variations thématiques (finance/contrat pour About, logistique/chaîne pour Services, bureau/accueil pour Contact).
- [x] **Page Contact austère** : Pas de photo de bureau d'affaires ni de représentation cartographique stylisée des flux internationaux.

---

### 1.3 Banque d'Images Recommandées par Section (17 Emplacements Cibles)

| Section / Emplacement | Image Recommandée | Description Détaillée | Ambiance & Traitement Suggéré | URL Source Unsplash Optimisée |
|-----------------------|-------------------|----------------------|--------------------------------|-------------------------------|
| **1. Hero Index** | Hub portuaire au crépuscule | Port international avec reflets dorés, grues modernes et conteneurs | Corporate, prestige, envergure mondiale | `https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1920&q=85` |
| **2. Hero À propos** | Financial district & pont d'affaires | Tour de verre moderne et perspective architecturale | Stabilité institutionnelle, ponts mondiaux | `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85` |
| **3. Section Fondateur** | Portrait exécutif sobre | Dirigeant en costume sombre sur fond architectural épuré | Confiance, sérieux, approche personnalisée | `https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85` |
| **4. Section Présentation** | Négociation de contrats | Deux dirigeants analysant un dossier d'approvisionnement | Partenariat exclusif, rigueur contractuelle | `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=85` |
| **5. Hero Services** | Terminal logistique multimodal | Centre d'aiguillage de fret moderne avec éclairage soigné | Maîtrise opérationnelle des flux | `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=85` |
| **6. Service A.1 (Sourcing)** | Usine et ingénierie de pointe | Ingénieur inspectant une ligne de production industrielle | Rigueur technique, sélection usine | `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=85` |
| **7. Service A.2 (Débouchés)** | Cartographie des marchés export | Analyse de données de distribution sur écran d'affaires | Croissance commerciale, opportunités | `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85` |
| **8. Service A.3 (Négociation)** | Conclusion d'accord sous mandat | Signature de convention et poignée de main professionnelle | Sécurité contractuelle, transparence | `https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=85` |
| **9. Service B.1 (Contrôle Qualité)**| Métrologie et inspection usine | Technicien procédant au contrôle dimensionnel strict | Tolérance zéro, conformité AQL | `https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=85` |
| **10. Service B.2 (Transport)** | Navire porte-conteneurs en mer | Grand navire naviguant en pleine mer, mer calme | Fret maritime au long cours | `https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=85` |
| **11. Service B.3 (Douane/Incoterms)**| Documentation & conformité | Vérification de manifestes et documents d'expédition | Rigueur réglementaire, respect Incoterms | `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85` |
| **12. Service B.4 (Assurance)** | Protection des flux financiers | Vue métaphorique de coffre-fort d'affaires / sécurité | Garantie financière ad valorem | `https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=85` |
| **13. Hero FAQ** | Salle de conseil et clarté | Bureau contemporain épuré, boiseries et lumière douce | Sérénité, transparence, écoute | `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85` |
| **14. Hero Blog** | Cartes du monde & routes de fret | Mappemonde stylisée avec connexions aériennes/maritimes | Veille stratégique, analyse macroéconomique | `https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&w=1920&q=85` |
| **15. Hero Contact** | Espace de rencontre d'affaires | Salon de réception corporate feutré | Disponibilité, accueil confidentiel | `https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=85` |
| **16. Contact (Illustration cadre)**| Bureau d'étude internationale | Ordinateur portable avec plans logistiques et téléphone | Réactivité sous 24h, proximité client | `https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=85` |
| **17. Footer** | *Pas de photo* | Fond institutionnel Bleu Marine `#0A2540` + Logo Or | Pureté typographique institutionnelle | — |

---

## 2. DIAGNOSTIC DES ANIMATIONS & INTERACTIONS

### 2.1 Inventaire Actuel des Animations

| Page / Contexte | Élément Visé | Propriété CSS animée | Durée | Easing | Trigger | Note (1-5) | Constat |
|-----------------|--------------|----------------------|-------|--------|---------|:----------:|---------|
| Toutes | Liens texte (`<a>`) | `color` | 0.25s | `cubic-bezier(0.16, 1, 0.3, 1)` | `:hover` | **3/5** | Transition standard correcte |
| Toutes | Boutons Prestige (`.btn`) | `transform: translateY(-2px)`, `box-shadow` | 0.25s | cubic-bezier | `:hover` | **3/5** | Élévation basique, pas d'état `:active` tactile |
| Navigation | Bouton CTA Header | `transform: translateY(-2px)`, `box-shadow` | 0.25s | cubic-bezier | `:hover` | **3/5** | Léger effet doré, mais manque de micro-glow |
| Mobile | Bouton Burger | `width` des 3 barres | 0.25s | cubic-bezier | `:hover` | **2/5** | Les barres ne se transforment **pas** en croix (X) lors de l'ouverture |
| Mobile | Tiroir Mobile (`.nv-mobile-drawer`) | `display: flex` (aucune transition) | 0s | Brutal | `.open` | **1/5** | Apparition sèche sans slide-down ni fondu progressif |
| Index & Blog | Cartes (`.sector-card`, `.blog-card`) | `transform: translateY(-4px)`, `box-shadow` | 0.25s | cubic-bezier | `:hover` | **3/5** | Élévation classique, manque d'un léger zoom image interne |
| FAQ | Chevron déroulant (`.faq-chevron`) | `transform: rotate(180deg)` | 0.30s | `ease` | `.open` | **4/5** | Rotation fluide et efficace |
| FAQ | Réponse accordéon (`.faq-answer`) | `display: block` (aucune transition de hauteur) | 0s | Brutal | `.open` | **2/5** | Ouverture sans animation de hauteur (`max-height` / CSS grid row) |
| Formulaire | Champs (`.form-input`) | `border-color`, `box-shadow` | 0.25s | cubic-bezier | `:focus` | **3.5/5**| Anneau doré correct, mais pas de label flottant |
| Global | Arrivée sur la page | *Aucune animation* | 0s | N/A | `load` | **1/5** | Tous les éléments apparaissent d'un coup (effet rigide) |
| Global | Défilement (Scroll) | *Aucune animation* | 0s | N/A | `scroll` | **1/5** | Aucun `IntersectionObserver`, aucun effet de cascade (stagger) |

---

### 2.2 Problèmes Identifiés (Analyse Technique)

- [x] **Absence totale d'animations d'entrée au chargement** : Les titres H1, badges et CTA s'affichent brutalement sans le moindre fondu progressif (`fade-in-up`).
- [x] **Aucune animation au scroll (Scroll Reveal manquant)** : Lors du défilement, les sections et cartes apparaissent fixes, sans dynamique d'apparition échelonnée (*stagger*).
- [x] **Ouverture de l'accordéon FAQ et du menu burger sans transition fluide** : Le menu mobile et le texte de la FAQ passent instantanément de `display: none` à `display: block/flex`, ce qui nuit au ressenti haut de gamme.
- [x] **Absence de retour tactile sur les boutons** : Aucun effet d'enfoncement (`transform: scale(0.98)`) n'est implémenté au clic.
- [x] **Images statiques au survol** : Les photos des cartes ne réagissent pas au survol (manque un léger zoom d'échelle `scale(1.05)` avec `overflow: hidden`).
- [x] **Non-respect du standard d'accessibilité `prefers-reduced-motion`** : Si un utilisateur a activé la réduction de mouvement dans son OS, les transitions continuent de tourner sans être désactivées.

---

### 2.3 Animations Recommandées par Composant (Spécifications Précises)

| Élément | Animation Suggérée | Durée | Courbe d'Animation | Priorité | Gain UX / Esthétique |
|---------|-------------------|-------|-------------------|:--------:|----------------------|
| **Hero Badge & H1** | `nvFadeInDown` (décalage 0.1s) | 0.8s | `cubic-bezier(0.16, 1, 0.3, 1)` | **Haute** | Impact majestueux immédiat |
| **Hero Sous-titre & CTA**| `nvFadeInUp` (décalage 0.3s) | 0.8s | `cubic-bezier(0.16, 1, 0.3, 1)` | **Haute** | Hiérarchie visuelle guidée |
| **Boutons CTA** | Hover: `translateY(-3px)` + Glow or / Click: `scale(0.98)` | 0.25s | `ease-out` | **Haute** | Sensation de bouton physique noble |
| **Cartes Services & Secteurs** | Scroll Reveal Stagger + Hover lift (`-6px`) | 0.6s | `cubic-bezier(0.2, 0.8, 0.2, 1)` | **Haute** | Sentiment de modernité et de relief |
| **Images de cartes** | Subtle Zoom: `transform: scale(1.04)` au survol | 0.5s | `cubic-bezier(0.25, 1, 0.5, 1)` | **Moyenne** | Dynamisme photographique immersif |
| **Menu Burger Mobile** | Morphing en Croix (Bar 1: 45°, Bar 2: opacité 0, Bar 3: -45°) | 0.3s | `cubic-bezier(0.4, 0, 0.2, 1)` | **Haute** | Clarté immédiate de l'état ouvert/fermé |
| **Tiroir Menu Mobile** | Slide-down fluide (`max-height: 0 -> 400px` + opacité) | 0.35s | `ease-out` | **Haute** | Élimination de l'ouverture brutale |
| **Accordéons FAQ** | Transition de hauteur fluide via CSS Grid `grid-template-rows: 0fr -> 1fr` | 0.35s | `cubic-bezier(0.4, 0, 0.2, 1)` | **Moyenne** | Confort de lecture supérieur |
| **Bouton Scroll-to-Top** | Apparition douce au-delà de 350px de scroll + Smooth scroll | 0.3s | `ease-in-out` | **Moyenne** | Ergonomie de navigation |

---

### 2.4 Architecture Scroll Animations (Intersection Observer)

Le système reposera sur un script léger dans `script.js` ajoutant la classe `.is-visible` dès que l'élément franchit le seuil du viewport.

| Section Cible | Déclencheur (Threshold) | Effet CSS Déclenché | Éléments Ciblés |
|---------------|:-----------------------:|---------------------|-----------------|
| **Hero** | Immédiat au chargement | `animation: nvFadeInUp 0.8s forwards` | Titre, citation, boutons |
| **Présentation & Fondateur** | 15% visible | Slide-up textuel + Fade-in image | Texte gauche, photo droite |
| **Grille Services (A & B)** | 20% visible | Stagger fade-in (`animation-delay: 0.1s, 0.25s`) | Carte A puis Carte B |
| **Secteurs Industriels** | 20% visible | Stagger cascade (`0.1s, 0.2s, 0.3s`) | Les 3 cartes de filières |
| **Articles de Blog** | 20% visible | Stagger cascade (`0.1s, 0.2s, 0.3s`) | Les 3 cartes d'actualités |
| **Formulaire de Contact** | 15% visible | Fade-in progressif | Colonne coordonnées + Card Form |

---

### 2.5 Code Prêt à Intégrer (CSS & JS)

#### A. Morphing Burger & Tiroir Mobile (`style.css`)
```css
/* Morphing du Burger en X */
.nv-burger.is-active .nv-burger__bar:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
  width: 24px;
}
.nv-burger.is-active .nv-burger__bar:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}
.nv-burger.is-active .nv-burger__bar:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
  width: 24px;
}

/* Transition du tiroir mobile */
.nv-mobile-drawer {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.35s ease-out, opacity 0.25s ease-out, padding 0.35s ease;
  padding: 0 24px;
}
.nv-mobile-drawer.open {
  max-height: 480px;
  opacity: 1;
  padding: 24px;
}
```

#### B. Scroll Reveal & Keyframes Universelles (`style.css`)
```css
/* Keyframes Prestige */
@keyframes nvFadeInUp {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Classes Scroll Reveal */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Délai en cascade (Stagger) */
.delay-1 { transition-delay: 0.10s; }
.delay-2 { transition-delay: 0.22s; }
.delay-3 { transition-delay: 0.34s; }

/* Micro-interaction d'enfoncement des boutons */
.btn:active, .nv-nav-cta:active {
  transform: scale(0.97) translateY(0);
  box-shadow: 0 2px 6px rgba(10, 37, 64, 0.2);
}

/* Zoom élégant sur les images de cartes */
.sector-card, .blog-card {
  overflow: hidden;
}
.sector-card__img, .blog-card__img {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.sector-card:hover .sector-card__img,
.blog-card:hover .blog-card__img {
  transform: scale(1.05);
}
```

#### C. Contrôleur Intersection Observer (`script.js`)
```javascript
// Initialisation de la détection au défilement
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Animation jouée une seule fois
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => scrollObserver.observe(el));
```

#### D. Clause d'Accessibilité Obligatoire (`style.css`)
```css
/* Respect absolu des préférences utilisateur (WCAG AA / AAA) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal-on-scroll {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 3. FEUILLE DE ROUTE D'AMÉLIORATION PROPOSÉE (PLAN EN 3 PHASES)

### Phase 1 : Rénovation Visuelle & Suppression des Doublons (Semaine 1)
| Priorité | Tâche | Fichiers Impactés | Gain Estimé | Temps Estimé |
|:--------:|-------|-------------------|-------------|:------------:|
| **P1** | Remplacement de la Hero unique partagée par 5 arrière-plans contextuels distincts | `css/style.css`, HTMLs | Suppression de 100% des doublons d'en-tête | 2h30 |
| **P1** | Intégration d'un portrait exécutif cohérent pour Laurent Huiskens | `index.html`, `about.html` | Crédibilité et incarnation humaine | 1h00 |
| **P2** | Diversification des 3 visuels d'articles de blog | `blog.html` | Élimination de la triple répétition | 0h45 |
| **P2** | Ajout d'un visuel d'espace d'accueil d'affaires dans `contact.html` | `contact.html` | Suppression de l'effet d'austérité | 1h00 |
| **P3** | Vignettes photographiques contextuelles pour les 4 services clés de Catégorie B | `services.html` | Immersion et standing de niveau cabinet | 2h00 |

### Phase 2 : Animations Structurelles & Scroll Reveal (Semaine 1-2)
| Priorité | Tâche | Fichiers Impactés | Gain Estimé | Temps Estimé |
|:--------:|-------|-------------------|-------------|:------------:|
| **P1** | Implémentation du script Intersection Observer & classes `.reveal-on-scroll` | `js/script.js`, `css/style.css` | Fin du rendu statique figé | 2h00 |
| **P1** | Animations d'entrée Hero au chargement (`nvFadeInUp` étagé) | `css/style.css` | Effet "Wow" dès les 2 premières secondes | 1h30 |
| **P2** | Transition accordéon FAQ fluide via CSS Grid | `css/style.css`, `js/script.js` | Confort de lecture sans saut brutal | 1h15 |
| **P1** | Intégration de la clause `@media (prefers-reduced-motion: reduce)` | `css/style.css` | Conformité WCAG 2.2 AA / AAA | 0h30 |

### Phase 3 : Micro-Interactions & Finitions Haut de Gamme (Semaine 2)
| Priorité | Tâche | Fichiers Impactés | Gain Estimé | Temps Estimé |
|:--------:|-------|-------------------|-------------|:------------:|
| **P1** | Morphing du bouton burger en croix (X) lors de l'ouverture mobile | `css/style.css`, `js/script.js` | Clarté de l'UI mobile | 1h00 |
| **P2** | Effet tactile au clic sur boutons (`:active scale(0.97)`) | `css/style.css` | Rendu applicatif tactile moderne | 0h45 |
| **P2** | Effet de zoom doux au survol des cartes images (`scale(1.05)`) | `css/style.css` | Dynamisme et sentiment de profondeur | 0h45 |
| **P3** | Bouton flottant "Retour en haut" (Scroll to top) | `js/script.js`, `css/style.css` | Praticité sur les longues pages | 1h15 |

---

## 4. ESTIMATION BUDGÉTAIRE & PRIORISATION

```
Total Effort Estimé : 15 Heures (~ 2 Jours Homme)
├── Phase 1 (Images & Visuels)         : 7h15  [Essentiel : 4h15 | Nice to have : 3h00]
├── Phase 2 (Animations & Reveal)      : 5h15  [Essentiel : 4h00 | Nice to have : 1h15]
└── Phase 3 (Micro-interactions)       : 3h45  [Essentiel : 1h00 | Nice to have : 2h45]
```

### Synthèse de Décision pour Bérénice :
1. **Actions Immédiates Indispensables (Jour 1 - ~5h)** :
   - Remplacer les doublons d'images de fond des Heroes (dissocier `about`, `services`, `faq`, `blog`, `contact`).
   - Unifier le portrait du fondateur Laurent Huiskens sur `index.html` et `about.html`.
   - Activer le morphing du burger mobile en X et le slide-down fluide.
   - Injecter le script Intersection Observer pour animer les cartes et sections au défilement.
2. **Actions de Raffinement Secondaires (Jour 2 - ~5h)** :
   - Ajouter les zooms doux sur les photos de cartes.
   - Transitionner la hauteur des accordéons FAQ.
   - Enrichir la colonne gauche de la page Contact avec un visuel de bureau d'affaires international.
