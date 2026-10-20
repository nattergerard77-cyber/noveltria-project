# pending-tasks.md — Tâches en cours et à venir

> Ce fichier suit l'avancement du projet. Mettre à jour après chaque session de travail.

---

## État d'avancement global

| Étape | Description | Statut | Date |
|-------|-------------|--------|------|
| Étape 1 | Structure des dossiers | ✅ Terminée | 2026-10-19 |
| Étape 2 | Initialisation mémoire | ✅ Terminée | 2026-10-19 |
| Étape 3 | Création des agents | ✅ Terminée | 2026-10-19 |
| Étape 4 | Implémentation des skills (35 skills Phases 1 à 9) | ✅ Terminée | 2026-10-19 |
| Étape 5 | Orchestration Multi-Agents & Construction du site (6 pages) | ✅ Terminée | 2026-10-19 |
| Étape 6 | Validation finale client (Laurent Huiskens) | ⏳ En attente client | — |

---

## Tâches terminées

- [x] Structure des 58 dossiers créée sur le Bureau (Étape 1)
- [x] Initialisation de la mémoire partagée : 5 fichiers copiés dans `memory/` (Étape 2)
- [x] Création des 5 agents spécialisés (Étape 3)
- [x] Déploiement exhaustif des 35 skills NOVELTRIA (Phases 1 à 9) (Étape 4)
- [x] Initialisation & finalisation du prototype haute fidélité Plasmic Studio (`fAGGfC8GT9bDnjAkgq6Wvo`) :
  - Tokens officiels, Master Navbar Prestige (`Z0csjb1lw5m-`), Footer institutionnel conforme
  - Visuels HD Unsplash & icônes vectorielles SVG
- [x] **Orchestration Multi-Agents des 5 pages restantes & construction du site complet dans `website/`** :
  - **Copywriter Agent** : Rédaction des 5 livrables éditoriaux (`about-content.md`, `services-content.md`, `faq-entries.md`, `blog-content.md`, `contact-content.md`)
  - **Web Developer Agent** : Génération des 6 pages HTML autonomes (`index.html`, `about.html`, `services.html`, `faq.html`, `blog.html`, `contact.html`), de la feuille de style unique `css/style.css` et des scripts `js/script.js`
  - **Quality Assurance Agent** : Sécurisation du formulaire (`js/form-validation.js`, honeypot `#website_hp`), audit d'accessibilité WCAG 2.2 AA (`qa-accessibility-report.md`)
  - **SEO Specialist Agent** : Balises OpenGraph/Twitter, Schema.org JSON-LD (FAQPage, Org, Service, Blog, Contact), `sitemap.xml`, `robots.txt`
  - **Project Manager Agent** : Respect strict du cadre juridique (*Laurent Huiskens, fondateur* / *Projet en cours de constitution* / *Catégorie A vs B*)
- [x] **Refonte Visuelle & Système d'Animations de Prestige (Phases 1, 2 & 3 de l'audit)** :
  - **Élimination 100% des doublons d'images** : Attribution de 6 arrière-plans Unsplash haute définition dédiés par Hero (`.hero--index`, `.hero--about`, `.hero--services`, `.hero--faq`, `.hero--blog`, `.hero--contact`)
  - **Unification du portrait du fondateur Laurent Huiskens** : Portrait corporate sobre et identique sur `index.html` et `about.html` (`photo-1560250097-0b93528c311a`)
  - **Diversification des articles du blog** (`blog.html`) : 3 visuels distincts (Usine industrielle, Navire porte-conteneurs, Contrôle qualité atelier)
  - **Enrichissement de la page Contact** (`contact.html`) : Intégration du visuel bureau de coordination d'affaires internationales
  - **Système d'Animations & Scroll Reveal** : Keyframes `nvFadeInUp`, `.hero-content`, `IntersectionObserver` sur `.reveal-on-scroll` avec délais échelonnés (`delay-1`, `delay-2`, `delay-3`)
  - **Micro-interactions boutons et cartes** : Enfoncement tactile (`:active scale(0.97)`), élévation au survol (`:hover translateY(-3px)`), zoom doux des images de cartes (`scale(1.05)`)
  - **Menu Burger Mobile Prestige** : Morphing dynamique des 3 barres en croix (X) (`is-active`), déroulement fluide du tiroir mobile (`.nv-mobile-drawer.open`), fermeture au clic hors-zone
  - **Clause d'accessibilité obligatoire** : `@media (prefers-reduced-motion: reduce)` intégrée pour neutraliser les animations selon le choix de l'utilisateur

---

## Livrables de site produits (`noveltria-project/website/`)

| Page / Fichier | Statut | Rôle / Agent |
|----------------|--------|--------------|
| `index.html` | ✅ Terminé | Web Developer & SEO Specialist |
| `about.html` | ✅ Terminé | Web Developer & Copywriter |
| `services.html` | ✅ Terminé | Web Developer (Distinction A/B) |
| `faq.html` | ✅ Terminé | Web Developer (Accordéons + JSON-LD) |
| `blog.html` | ✅ Terminé | Web Developer (Grille responsive) |
| `contact.html` | ✅ Terminé | Web Developer & QA (Formulaire sécurisé) |
| `css/style.css` | ✅ Terminé | Charte Corporate & Prestigieux unique |
| `js/script.js` | ✅ Terminé | Interactions burger & accordéons |
| `js/form-validation.js` | ✅ Terminé | Validation & honeypot anti-spam |
| `sitemap.xml` & `robots.txt` | ✅ Terminé | SEO Specialist |
| `qa-accessibility-report.md` | ✅ Terminé | Quality Assurance (WCAG AA) |

---

## Décisions et actions EN ATTENTE de validation client (Laurent Huiskens)

- [ ] Revue globale des 6 pages du site par Laurent Huiskens
- [ ] Choix final de l'hébergeur et du nom de domaine
- [ ] Confirmation des secteurs conditionnels futurs
