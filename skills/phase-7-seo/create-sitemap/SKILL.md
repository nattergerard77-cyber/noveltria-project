---
name: create-sitemap
description: Générer et configurer le fichier sitemap.xml pour assurer une indexation optimale par les moteurs de recherche
type: skill
agent: seo-specialist
---

# Skill : Create Sitemap (Génération du sitemap.xml)

## Quand utiliser ce site
- Une fois que toutes les pages du site NOVELTRIA sont créées et validées.
- Avant la soumission du site à Google Search Console.
- Lors de l'ajout de nouvelles pages (ex: nouveaux articles de blog).

## Prérequis
- Liste exhaustive des URLs de production.
- Hiérarchie des pages et niveaux d'importance connus.

## Objectif du fichier sitemap.xml
Le sitemap est un fichier XML qui répertorie toutes les pages importantes de votre site web, informant les robots d'indexation (Googlebot, Bingbot) de l'architecture du site et de la fréquence des mises à jour.

## Structure standard du sitemap NOVELTRIA

Pour un site vitrine de 6 pages + sections :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Page d'accueil -->
  <url>
    <loc>https://www.noveltria.com/</loc>
    <lastmod>2026-10-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Page Services -->
  <url>
    <loc>https://www.noveltria.com/services.html</loc>
    <lastmod>2026-10-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Page À propos -->
  <url>
    <loc>https://www.noveltria.com/about.html</loc>
    <lastmod>2026-10-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Page FAQ -->
  <url>
    <loc>https://www.noveltria.com/faq.html</loc>
    <lastmod>2026-10-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Page Actualités / Blog -->
  <url>
    <loc>https://www.noveltria.com/blog.html</loc>
    <lastmod>2026-10-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Page Contact -->
  <url>
    <loc>https://www.noveltria.com/contact.html</loc>
    <lastmod>2026-10-19</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

## Attributs XML expliqués

- `<loc>` : URL absolue de la page (commence obligatoirement par `https://`).
- `<lastmod>` : Date de dernière modification au format ISO 8601 (`AAAA-MM-JJ`).
- `<changefreq>` : Fréquence estimée des modifications (`always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, `never`).
- `<priority>` : Importance relative de la page par rapport aux autres du même site (valeur de `0.0` à `1.0`).

## Bonnes pratiques sitemap

1. **URLs canoniques uniquement** : Ne pas inclure d'URLs redirigées (ex: http ou sans-www si redirection active).
2. **Exclusion des pages privées** : Ne jamais inclure les pages de remerciement post-formulaire si elles ne doivent pas être indexées.
3. **Mise à jour de `lastmod`** : Mettre à jour la date chaque fois qu'une modification substantielle est apportée à la page.
4. **Encodage UTF-8** : Le fichier doit être encodé en UTF-8 sans BOM.

## Déclaration dans robots.txt

Pour aider les robots à trouver le sitemap, l'indiquer dans le fichier `robots.txt` :

```text
Sitemap: https://www.noveltria.com/sitemap.xml
```

## Soumission aux moteurs de recherche

### Google Search Console
1. Se connecter à [Google Search Console](https://search.google.com/search-console).
2. Sélectionner la propriété `noveltria.com`.
3. Menu latéral gauche → **Sitemaps**.
4. Saisir l'URL du sitemap (`sitemap.xml`) et cliquer sur **Envoyer**.

### Bing Webmaster Tools
1. Se connecter à Bing Webmaster Tools.
2. Menu Sitemaps → Soumettre un sitemap.

## Automatisation (pour les articles de blog)
Si la section blog s'enrichit régulièrement, utiliser un script Node.js ou un générateur de sitemap pour inclure automatiquement les nouveaux articles :

```javascript
// Exemple de script simple pour générer dynamiquement le sitemap
const fs = require('fs');
const baseUrl = 'https://www.noveltria.com';
const pages = ['/', '/services.html', '/about.html', '/faq.html', '/blog.html', '/contact.html'];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

pages.forEach(page => {
  sitemap += `  <url>\n    <loc>${baseUrl}${page}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemap += `</urlset>`;
fs.writeFileSync('website/sitemap.xml', sitemap);
```

## Checklist sitemap

- [ ] Toutes les pages publiques du site sont listées.
- [ ] Les URLs sont absolues et en HTTPS.
- [ ] Pas d'URL redirigée ou cassée (erreur 404).
- [ ] Balises `<lastmod>` à jour.
- [ ] Fichier encodé en UTF-8.
- [ ] Référence déclarée dans `robots.txt`.
- [ ] Soumis à Google Search Console.

## Sorties attendues

1. **Fichier `sitemap.xml`** : Placé à la racine du site (`website/sitemap.xml`).
2. **Confirmation d'indexation** : Capture d'écran ou statut OK dans Google Search Console.
