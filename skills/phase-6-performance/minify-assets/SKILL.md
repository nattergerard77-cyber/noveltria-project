---
name: minify-assets
description: Compresser et minifier les fichiers CSS et JavaScript pour améliorer les performances de chargement
type: skill
agent: web-developer
---

# Skill : Minify Assets (Minification des ressources)

## Quand utiliser ce skill
- Après avoir écrit les fichiers CSS et JS définitifs.
- Avant déploiement en production.
- Lors d'audits de performance révélant des fichiers volumineux.

## Prérequis
- Les fichiers CSS et JS doivent être finis (aucune modification prévue).
- Avoir une copie de sauvegarde des fichiers sources non minifiés.

## Principes de la minification

La **minification** consiste à supprimer tous les caractères inutiles d'un fichier source sans en altérer la fonctionnalité :
- **Espaces blancs** superflus.
- **Commentaires** de développement.
- **Retours à la ligne**.
- **Variables courtes** (optionnel, renommer en version plus courte).

## Outils recommandés pour NOVELTRIA

### CSS
- **CSSNano** (via PostCSS) : Outil moderne, supporte les variables CSS, les calques.
- **csso** : Compresseur CSS avancé.
- **clean-css** : Option simple et robuste.

### JavaScript
- **Terser** (successeur de UglifyJS) : Standard, support ES6+.
- **esbuild** : Très rapide, avec minification intégrée.
- **UglifyJS** (legacy) : Si besoin de compatibilité.

## Procédure de minification

### Étape 1 — Préparation des dossiers

Organisation recommandée :
```
website/
├── css/
│   ├── style.css          # Fichier source
│   └── style.min.css      # Fichier minifié
├── js/
│   ├── script.js          # Fichier source
│   └── script.min.js      # Fichier minifié
└── assets/                # Autres ressources
```

### Étape 2 — Minification CSS

**Avec CSSNano** (via Node.js) :
```bash
npx cssnano css/style.css css/style.min.css
```

**Avec csso** :
```bash
npx csso css/style.css -o css/style.min.css
```

### Étape 3 — Minification JavaScript

**Avec Terser** :
```bash
npx terser js/script.js -o js/script.min.js --compress --mangle
```

**Options courantes** :
- `--compress` : Active la compression.
- `--mangle` : Raccourcit les noms de variables/fonctions.
- `--mangle-props` (optionnel) : Raccourcit les propriétés objets.

### Étape 4 — Création de source maps (optionnel)

Pour faciliter le débogage en production, générer des source maps :

**CSS** :
```bash
npx cssnano css/style.css css/style.min.css --sourcemap
```

**JS** :
```bash
npx terser js/script.js -o js/script.min.js --source-map "url='script.min.js.map'"
```

### Étape 5 — Intégration HTML

Dans le fichier HTML, référencer les versions minifiées :

```html
<!-- Avant (développement) -->
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>

<!-- Après (production) -->
<link rel="stylesheet" href="css/style.min.css">
<script src="js/script.min.js"></script>
```

## Exemple concret pour NOVELTRIA

### Fichier CSS avant minification
```css
/* style.css */
:root {
  --color-primary: #0A2540;
  --color-secondary: #1B4965;
  --color-accent: #C8A566;
  /* Variables design tokens */
}

/* Bouton principal */
.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-white);
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background-color: #B39456;
}
```

### Fichier CSS après minification
```css
/* style.min.css */
:root{--color-primary:#0A2540;--color-secondary:#1B4965;--color-accent:#C8A566}.btn-primary{background-color:var(--color-accent);color:var(--color-white);padding:.75rem 1.5rem;border-radius:.375rem;font-weight:600;transition:background .2s ease}.btn-primary:hover{background-color:#B39456}
```

**Réduction** : Environ 30-50% selon les commentaires et espaces.

## Points d'attention pour NOVELTRIA

### 1. Variables CSS custom properties
Les minificateurs modernes préservent les variables CSS (`--color-*`). Pas de souci.

### 2. Autoprefixer
Si vous utilisez des préfixes vendeurs (`-webkit-`, `-moz-`), les exécuter **avant** la minification.

### 3. Fichiers multiples
Si vous avez plusieurs fichiers CSS, considérer **bundling** + minification.

### 4. Performance de compression Gzip/Brotli
La minification s'applique **avant** la compression HTTP. La combinaison des deux réduit drastiquement la taille.

## Checklist de minification

- [ ] Fichiers sources sauvegardés (style.css, script.js).
- [ ] Fichiers minifiés générés (style.min.css, script.min.js).
- [ ] Tests fonctionnels après minification (pas de régression).
- [ ] Référence HTML mise à jour vers fichiers .min.
- [ ] Taille réduite d'au moins 30% pour CSS, 20% pour JS.

## Objectifs de performance

- **CSS total** : < 50 KB minifié.
- **JS total** : < 30 KB minifié.
- **Combined** : < 100 KB minifié et compressé.

## Outils de vérification

- **Chrome DevTools** → Network tab : voir taille des ressources.
- **PageSpeed Insights** : Recommandations de minification.
- **webpack-bundle-analyzer** (si bundling) : Visualisation.

## Automatisation recommandée

Pour un workflow professionnel, intégrer la minification dans un pipeline de build :

**package.json** (exemple) :
```json
{
  "scripts": {
    "minify:css": "cssnano css/style.css css/style.min.css",
    "minify:js": "terser js/script.js -o js/script.min.js --compress --mangle",
    "build": "npm run minify:css && npm run minify:js"
  }
}
```

## Sorties attendues

1. **Fichiers minifiés** : `.min.css` et `.min.js`.
2. **Rapport de réduction** : `minification-report.md` avec tailles avant/après.
3. **Code HTML mis à jour** : Références vers fichiers minifiés.
