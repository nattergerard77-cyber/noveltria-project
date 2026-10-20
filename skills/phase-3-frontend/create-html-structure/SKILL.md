---
name: create-html-structure
description: Créer la structure HTML5 sémantique, propre et accessible d'une page pour NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Create HTML Structure (Structure HTML5 sémantique)

## Quand utiliser ce skill
- Pour toute nouvelle page du site web de NOVELTRIA.
- Lors de la conversion d'une maquette validée en page définitive.
- Pour s'assurer de la conformité aux standards du web (W3C, WCAG).

## Prérequis
- Avoir le contenu textuel validé par le Copywriter (`write-page-content`).
- Lire `memory/project-context.md` pour garantir l'intégration des mentions obligatoires.

## Règles impératives de structure HTML5

### 1. Doctype et métadonnées de base
Toute page doit commencer par un squelette standardisé :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Titre Unique — NOVELTRIA International Trade Services</title>
  <meta name="description" content="Description concise rédigée avec le SEO Specialist.">
  
  <!-- Polices Google Fonts (Poppins & Inter) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="css/style.css">
</head>
```

### 2. Balises sémantiques obligatoires
Ne pas abuser des `<div>` neutres. Utiliser les balises de sens :
- `<header>` : Contient le logo, le slogan et la navigation principale.
- `<nav>` : Délimite le menu de liens de navigation avec attribut `aria-label="Navigation principale"`.
- `<main>` : Zone de contenu principal unique de la page (id="main-content").
- `<section>` : Découpage thématique. Chaque section doit comporter un titre (`<h2>` ou `<h3>`).
- `<article>` : Pour les billets de blog ou actualités autonomes.
- `<aside>` : Pour les encadrés d'informations secondaires.
- `<footer>` : Pied de page commun à toutes les pages.

### 3. Hiérarchie des titres (Heading Hierarchy)
- Un seul et unique `<h1>` par page.
- Pas de saut de niveau (ex: passer de `<h2>` directement à `<h4>` est proscrit).
- Titres descriptifs intégrant le vocabulaire métier.

### 4. Règle absolue NOVELTRIA dans le `<footer>`
Le pied de page doit systématiquement comporter :
```html
<p class="legal-mention">NOVELTRIA International Trade Services est un projet en cours de constitution.</p>
```

## Checklist de conformité HTML
- [ ] La langue est déclarée (`<html lang="fr">`).
- [ ] La balise viewport est présente.
- [ ] Il n'y a qu'un seul `<h1>`.
- [ ] Toutes les images comportent un attribut `alt=""` pertinent.
- [ ] Les liens ont un texte explicite (éviter les « cliquez ici » anonymes).
- [ ] La mention légale obligatoire figure dans le footer.
