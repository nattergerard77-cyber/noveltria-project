---
name: create-css-styles
description: Développer des feuilles de style CSS3 modulaires, maintenables et conformes à la charte graphique NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Create CSS Styles (Stylisation CSS3 professionnelle)

## Quand utiliser ce skill
- Pour concevoir la feuille de style globale (`css/style.css`).
- Pour styliser de nouveaux composants ou ajuster la présentation visuelle.
- Pour garantir la cohérence esthétique "Corporate & Prestigieux".

## Prérequis
- Consulter impérativement `skills/phase-1-design/create-style-guide/SKILL.md`.

## Architecture CSS préconisée

Le fichier `css/style.css` doit être structuré en sections claires :
1. **Variables & Design Tokens** (`:root`)
2. **Reset / Normalisation** (Box-sizing, marges neutres)
3. **Typographie globale** (Titres, corps de texte, liens)
4. **Layout & Grilles** (Containers, Flexbox, CSS Grid)
5. **Composants d'interface** (Boutons, cartes, badges, formulaires)
6. **Sections spécifiques** (Hero, Services, Secteurs, Footer)
7. **Utilitaires** (Classes d'espacement, alignement)

## Règles de codage CSS

### 1. Utilisation exclusive des variables
Ne jamais coder de couleurs en dur dans les règles. Utiliser toujours les tokens :
```css
/* BON */
.section-title {
  color: var(--color-primary);
  font-family: var(--font-heading);
}

/* INTERDIT */
.section-title {
  color: #0A2540;
}
```

### 2. Organisation des boutons
Les boutons doivent offrir un retour d'état visuel net (hover, focus, active) :
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}

.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-white);
  border: 1px solid var(--color-accent);
}

.btn-primary:hover {
  background-color: #B39456;
  border-color: #B39456;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
}

.btn-secondary:hover {
  background-color: var(--color-white);
  color: var(--color-primary);
}
```

### 3. Cartes de services et de secteurs
Une présentation structurée et fonctionnelle repose sur des bordures nettes et des ombres légères :
```css
.card {
  background: var(--color-white);
  border: 1px solid var(--color-gray-border);
  border-radius: var(--radius-md);
  padding: var(--space-xl);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-accent);
}
```

## Checklist de qualité CSS
- [ ] Les variables du style guide sont toutes déclarées dans `:root`.
- [ ] Aucun framework externe lourd (Bootstrap, Tailwind complet) n'alourdit la page sans nécessité.
- [ ] Les transitions sont fluides (durée entre 0.2s et 0.3s).
- [ ] Le code est commenté par blocs logiques.
