---
name: create-style-guide
description: Créer la charte graphique complète pour NOVELTRIA (couleurs, typographie, espacements, composants visuels)
type: skill
agent: web-developer
---

# Skill : Create Style Guide (Créer la charte graphique)

## Quand utiliser ce skill
- Au tout début du projet, avant toute conception de page.
- Quand le client demande une refonte visuelle complète.
- Pour documenter et standardiser l'identité visuelle validée.

## Prérequis
- Avoir validé avec le client l'univers visuel souhaité (palette, ambiance, ton).
- Lire `memory/project-context.md` et `memory/user-preferences.md`.

## Palette de couleurs validée pour NOVELTRIA

### Univers : Corporate & Prestigieux
**Direction visuelle** : Bleu marine profond, blanc épuré, touches d'or ou de bronze. Classique, rassurant, institutionnel.

#### Couleurs principales
- **Bleu Marine Principal** : `#0A2540` (Textes titres, navigation, footer)
- **Bleu Nuit Secondaire** : `#1B4965` (Sections alternées, boutons secondaires)
- **Or Prestige** : `#C8A566` (Accents, boutons principaux, éléments clés)
- **Blanc Pur** : `#FFFFFF` (Fond principal, respiration visuelle)
- **Gris Perle** : `#F5F7FA` (Fond sections alternées)

#### Couleurs de soutien
- **Gris Texte** : `#4A5568` (Textes courants, paragraphes)
- **Gris Clair Bordures** : `#E2E8F0` (Séparateurs, bordures subtiles)
- **Vert Succès** : `#10B981` (Messages de confirmation formulaire)
- **Rouge Alerte** : `#EF4444` (Erreurs formulaire)

## Typographie

### Police principale (titres et navigation)
**Famille recommandée** : `'Poppins', sans-serif` (Google Fonts)
- **Poids utilisés** : 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Usage** : Titres H1-H6, navigation, boutons, labels importants

### Police secondaire (textes courants)
**Famille recommandée** : `'Inter', sans-serif` (Google Fonts)
- **Poids utilisés** : 400 (Regular), 500 (Medium)
- **Usage** : Paragraphes, listes, formulaires, pied de page

### Échelle typographique
```css
/* Titres */
h1 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; } /* 40px */
h2 { font-size: 2rem; font-weight: 600; line-height: 1.3; }   /* 32px */
h3 { font-size: 1.5rem; font-weight: 600; line-height: 1.4; } /* 24px */
h4 { font-size: 1.25rem; font-weight: 600; line-height: 1.4; } /* 20px */

/* Corps de texte */
body { font-size: 1rem; line-height: 1.6; } /* 16px */
small { font-size: 0.875rem; } /* 14px */
```

## Espacements (système de grille en base 8px)

```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  --space-2xl: 4rem;    /* 64px */
  --space-3xl: 6rem;    /* 96px */
}
```

## Composants visuels standards

### Boutons

#### Bouton principal (Call-to-Action)
```css
.btn-primary {
  background: #C8A566; /* Or Prestige */
  color: #FFFFFF;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem; /* 6px */
  font-weight: 600;
  border: none;
  transition: background 0.2s ease;
}
.btn-primary:hover {
  background: #B39456; /* Or légèrement assombri */
}
```

#### Bouton secondaire
```css
.btn-secondary {
  background: transparent;
  color: #1B4965; /* Bleu Nuit */
  padding: 0.75rem 1.5rem;
  border: 2px solid #1B4965;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background: #1B4965;
  color: #FFFFFF;
}
```

### Cartes (Cards)
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 0.5rem; /* 8px */
  padding: var(--space-lg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
}
.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Sections alternées
Pour créer un rythme visuel, alterner les fonds des sections :
- Section paire : fond `#FFFFFF`
- Section impaire : fond `#F5F7FA` (Gris Perle)

## Éléments graphiques

### Icônes
- Utiliser des icônes en ligne (line icons) dans le style "heroicons" ou "lucide".
- Couleur par défaut : `#1B4965` (Bleu Nuit).
- Taille standard : 24px × 24px.

### Images et visuels
- Photos professionnelles haute résolution (min 1920px de large).
- Traitement chromatique : légère teinte bleue froide pour uniformiser.
- Formats : WebP en priorité (fallback JPG).

## Variables CSS globales

```css
:root {
  /* Couleurs principales */
  --color-primary: #0A2540;
  --color-secondary: #1B4965;
  --color-accent: #C8A566;
  --color-white: #FFFFFF;
  --color-gray-bg: #F5F7FA;
  --color-gray-text: #4A5568;
  --color-gray-border: #E2E8F0;
  --color-success: #10B981;
  --color-error: #EF4444;
  
  /* Typographie */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  /* Espacements */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  
  /* Bordures */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  
  /* Ombres */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 10px 24px rgba(0, 0, 0, 0.2);
}
```

## Sorties attendues

1. **Fichier `style-guide.md`** : Document markdown récapitulant cette charte.
2. **Fichier `variables.css`** : Toutes les variables CSS prêtes à l'emploi.
3. **Validation client** : Présenter au moins 2 exemples visuels (bouton + carte) avant d'appliquer massivement.

## Notes importantes
- Cette charte doit être respectée sur TOUTES les pages.
- Toute modification de couleur ou de police doit être validée par le client et mise à jour ici.
- L'agent Quality Assurance vérifiera la conformité à cette charte avant chaque livraison.
