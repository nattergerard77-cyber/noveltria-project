# NOVELTRIA International Trade Services

Maison d'intermédiation en commerce international, sourcing et négociation sous mandat écrit exclusif.

- **Fondateur** : Laurent Huiskens
- **Site Web** : `https://www.noveltria.com`
- **Email de Contact** : `contact@noveltria.online`
- **Statut juridique** : Projet en cours de constitution

---

## 📂 Structure du Projet

```text
noveltria-project/
├── memory/                  # Mémoire et documentation interne du projet
├── website/                 # Code source du site web institutionnel
│   ├── css/
│   │   └── style.css        # Feuille de style officielle (Charte Corporate & Prestige)
│   ├── js/
│   │   ├── script.js        # Interactions globales (Menu Burger, FAQ, Scroll Reveal)
│   │   └── form-validation.js # Validation robuste & soumission asynchrone Formspree
│   ├── index.html           # Page d'accueil
│   ├── about.html           # Page À propos & Vision du Fondateur
│   ├── services.html        # Catalogue des prestations (Catégorie A vs Catégorie B)
│   ├── faq.html             # Foire aux questions détaillée
│   ├── blog.html            # Actualités et analyses sectorielles
│   ├── contact.html         # Formulaire de contact sécurisé
│   ├── sitemap.xml          # Plan du site XML pour le SEO
│   └── robots.txt           # Directives d'indexation robots
└── README.md                # Documentation principale
```

---

## 🎨 Identité Visuelle & Charte Graphique

- **Palette de Couleurs** :
  - `#0A2540` (Bleu Marine Principal)
  - `#1B4965` (Bleu Nuit Secondaire)
  - `#C8A566` (Or Prestige / Accent)
- **Typographie** :
  - Titres : `Poppins`
  - Corps : `Inter`

---

## ✉️ Formulaire de Contact & Back-end

Le formulaire de contact de `contact.html` est configuré pour communiquer avec **Formspree** (ou compatible AJAX).
- **Endpoint actuel (placeholder)** : `https://formspree.io/f/xplaceholder`
- **Action requise pour la mise en production** :
  1. Créez un compte sur [formspree.io](https://formspree.io).
  2. Créez un nouveau formulaire lié à l'adresse **`contact@noveltria.online`**.
  3. Remplacez l'URL `https://formspree.io/f/xplaceholder` dans `website/contact.html` par votre véritable ID de formulaire Formspree.

---

## 🚀 Lancement Local & Développement

Pour visualiser le site en local :
1. Ouvrez le dossier `website/` dans votre éditeur (VS Code, Cursor, etc.).
2. Lancez un serveur local (par exemple via l'extension *Live Server* de VS Code ou un serveur Python `python -m http.server 8000` depuis le dossier `website/`).
3. Accédez à `http://localhost:8000/index.html`.

---

## 📄 Licence & Droits

&copy; 2026 NOVELTRIA International Trade Services. Tous droits réservés.
