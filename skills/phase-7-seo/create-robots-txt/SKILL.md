---
name: create-robots-txt
description: Configurer le fichier robots.txt pour guider l'exploration des moteurs de recherche sur le site NOVELTRIA
type: skill
agent: seo-specialist
---

# Skill : Create Robots.txt (Configuration du fichier robots.txt)

## Quand utiliser ce skill
- Avant la mise en production du site.
- Lors de modifications de l'architecture pour bloquer certaines zones sensibles.
- Pour indiquer l'emplacement du sitemap aux robots.

## Prérequis
- Avoir défini la structure des pages et l'arborescence du site.
- Connaître le nom de domaine de production.

## Objectif du fichier robots.txt
Le fichier `robots.txt` est un fichier texte placé à la racine du site qui donne des instructions aux robots d'exploration web (crawlers) sur les pages qu'ils peuvent ou ne peuvent pas explorer.

## Configuration type pour NOVELTRIA

Pour un site vitrine professionnel sans zones d'administration publiques ou données sensibles :

```text
# ==========================================
# Robots.txt — NOVELTRIA International Trade Services
# ==========================================

User-agent: *
Allow: /

# Bloquer l'accès aux dossiers techniques ou temporaires (si existants)
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /private/

# Indiquer l'emplacement du sitemap XML
Sitemap: https://www.noveltria.com/sitemap.xml
```

## Règles d'écriture (Standard Robots Exclusion Protocol)

### 1. `User-agent: *`
S'adresse à tous les robots d'indexation (Googlebot, Bingbot, DuckDuckBot, etc.).

### 2. `Allow: /`
Autorise l'exploration de l'ensemble du site par défaut.

### 3. `Disallow: [chemin]`
Interdit l'accès à un dossier ou fichier spécifique.
- `Disallow: /private/` → bloque tout ce qui se trouve dans `/private/`.
- `Disallow: /` → bloque **tout le site** (à n'utiliser qu'en phase de développement en pré-production).

## Phase de pré-production (Attention !)

Pendant que le site est en cours de développement ou sur un serveur de test, il est crucial d'empêcher son indexation prématurée par Google :

```text
# INTERDICTION TOTALE DE CRAWL (Phase de dev uniquement)
User-agent: *
Disallow: /
```

⚠️ **Règle d'or** : Ne pas oublier de remplacer ce fichier par la version de production (Allow: /) dès la mise en ligne officielle.

## Bonnes pratiques robots.txt

1. **Emplacement exact** : Le fichier doit obligatoirement se nommer `robots.txt` (tout en minuscules) et être placé à la racine du domaine (`https://www.noveltria.com/robots.txt`).
2. **Ne pas y cacher de données secrétes** : Le fichier robots.txt est public. Tout le monde peut le lire. N'y inscrivez pas d'URLs secrètes.
3. **Lien Sitemap explicite** : Toujours inclure la ligne `Sitemap:` avec l'URL absolue.
4. **Testeur de robots.txt** : Utiliser l'outil de test dans Google Search Console pour valider la syntaxe.

## Checklist robots.txt

- [ ] Fichier nommé `robots.txt` en minuscules.
- [ ] Placé à la racine du serveur web.
- [ ] `Allow: /` présent pour la production.
- [ ] `Disallow` configuré pour les zones sensibles ou de test.
- [ ] URL absolue du sitemap indiquée (`Sitemap: https://...`).
- [ ] Testé et validé via Google Search Console.

## Sorties attendues

1. **Fichier `robots.txt`** : Prêt à être placé à la racine du site (`website/robots.txt`).
2. **Validation** : Test validé sans erreur dans les outils pour webmasters.
