---
name: create-mockup
description: Créer une maquette visuelle (prototype HTML/CSS statique) d'une page avant son intégration complète
type: skill
agent: web-developer
---

# Skill : Create Mockup (Créer une maquette visuelle)

## Quand utiliser ce skill
- Après validation de la charte graphique.
- Avant de coder une page complète, pour valider la mise en page et l'ergonomie avec le client.
- Pour tester rapidement une idée de design ou de structure.

## Prérequis
- La charte graphique (`create-style-guide`) doit être validée.
- Le contenu textuel de la page doit être disponible (au moins en draft).
- Lire `memory/project-context.md` pour respecter les contraintes (mention légale, catégories de services, etc.).

## Objectif
Produire un prototype HTML/CSS statique qui montre la structure, les couleurs, la typographie et la disposition des éléments **avant** d'écrire le code de production final.

## Étapes de création d'une maquette

### 1. Définir la structure de la page

Découper la page en sections logiques. Pour NOVELTRIA, structure type :

```
┌─────────────────────────────────────┐
│ Header (logo + navigation)          │
├─────────────────────────────────────┤
│ Hero Section (titre + accroche +    │
│ boutons CTA)                        │
├─────────────────────────────────────┤
│ Section 1 (présentation, services,  │
│ ou autre contenu principal)         │
├─────────────────────────────────────┤
│ Section 2 (avantages, secteurs,     │
│ process, etc.)                      │
├─────────────────────────────────────┤
│ Section 3 (formulaire contact ou    │
│ CTA secondaire)                     │
├─────────────────────────────────────┤
│ Footer (liens + mention légale)     │
└─────────────────────────────────────┘
```

### 2. Appliquer la charte graphique

- **Couleurs** : Utiliser les variables CSS définies dans `create-style-guide`.
- **Typographie** : Poppins pour les titres, Inter pour les textes courants.
- **Espacements** : Respecter le système en base 8px (var(--space-*)).
- **Composants** : Utiliser les boutons, cartes et styles validés.

### 3. Utiliser du contenu réel (ou lorem ipsum si contenu non finalisé)

⚠️ **Important pour NOVELTRIA** :
- Même en maquette, inclure la mention obligatoire dans le footer : « NOVELTRIA International Trade Services est un projet en cours de constitution. »
- Respecter la distinction services A (directs) vs B (accompagnement).
- Ne jamais inventer de faux clients ou partenaires.

### 4. Tester le responsive design

Vérifier l'affichage sur 3 tailles d'écran :
- **Mobile** : max 480px de large
- **Tablette** : 768px à 1024px
- **Desktop** : 1280px et plus

Utiliser des media queries simples :
```css
/* Mobile first */
.container { padding: 1rem; }

/* Tablette */
@media (min-width: 768px) {
  .container { padding: 2rem; }
}

/* Desktop */
@media (min-width: 1280px) {
  .container { max-width: 1200px; margin: 0 auto; }
}
```

### 5. Ajouter des interactions légères (hover, focus)

- Effet hover sur les boutons (changement de couleur).
- Focus visible sur les liens (accessibilité clavier).
- Transitions douces (transition: 0.2s ease).

## Code type pour une maquette (page d'accueil)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NOVELTRIA — Maquette Page d'Accueil</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --color-primary: #0A2540;
      --color-secondary: #1B4965;
      --color-accent: #C8A566;
      --color-white: #FFFFFF;
      --color-gray-bg: #F5F7FA;
      --color-gray-text: #4A5568;
      --font-heading: 'Poppins', sans-serif;
      --font-body: 'Inter', sans-serif;
    }
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: var(--font-body); color: var(--color-gray-text); line-height: 1.6; }
    h1, h2, h3 { font-family: var(--font-heading); color: var(--color-primary); }
    
    header { background: var(--color-primary); color: var(--color-white); padding: 1rem 2rem; }
    .hero { background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); color: var(--color-white); padding: 4rem 2rem; text-align: center; }
    .hero h1 { color: var(--color-white); font-size: 2.5rem; margin-bottom: 1rem; }
    .hero p { font-size: 1.25rem; margin-bottom: 2rem; }
    
    .btn-primary { background: var(--color-accent); color: var(--color-white); padding: 0.75rem 1.5rem; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer; }
    .btn-primary:hover { background: #B39456; }
    
    section { padding: 3rem 2rem; }
    .bg-gray { background: var(--color-gray-bg); }
    
    footer { background: var(--color-primary); color: var(--color-white); padding: 2rem; text-align: center; font-size: 0.875rem; }
  </style>
</head>
<body>
  <header>
    <nav>
      <strong>NOVELTRIA</strong> | Accueil | À propos | Services | FAQ | Actualités | Contact
    </nav>
  </header>
  
  <section class="hero">
    <h1>NOVELTRIA International Trade Services</h1>
    <p>Votre partenaire pour développer vos échanges internationaux</p>
    <button class="btn-primary">Découvrir nos services</button>
  </section>
  
  <section>
    <h2>Facilitez vos échanges commerciaux</h2>
    <p>Texte de présentation ici...</p>
  </section>
  
  <section class="bg-gray">
    <h2>Nos secteurs d'intervention</h2>
    <p>Textile, Électronique, Matériaux...</p>
  </section>
  
  <footer>
    <p>NOVELTRIA International Trade Services — Votre partenaire pour développer vos échanges internationaux</p>
    <p><em>NOVELTRIA International Trade Services est un projet en cours de constitution.</em></p>
  </footer>
</body>
</html>
```

## Validation de la maquette

### Checklist avant présentation au client
- [ ] La charte graphique est respectée (couleurs, typographie, espacements).
- [ ] La mention légale « projet en cours de constitution » est présente.
- [ ] Le titre de Laurent Huiskens (fondateur) est correct si mentionné.
- [ ] Les services de catégorie B sont présentés comme « accompagnement » si mentionnés.
- [ ] La maquette est responsive (mobile, tablette, desktop).
- [ ] Les boutons ont un effet hover visible.
- [ ] Le contenu est cohérent (pas de lorem ipsum si contenu réel disponible).

## Sorties attendues

1. **Fichier HTML** : `mockup-[nom-page].html` (ex: `mockup-accueil.html`)
2. **Présentation au client** : Lien direct vers le fichier pour visualisation dans le navigateur.
3. **Feedback client** : Recueillir les ajustements souhaités avant de passer à l'intégration complète.

## Notes importantes
- Une maquette est un prototype rapide, pas le code final.
- Le code peut être simplifié (CSS inline, pas de fichiers séparés).
- L'objectif est de **valider visuellement** avant de tout recoder proprement.
- L'agent Quality Assurance doit valider la conformité de la maquette avant présentation au client.
