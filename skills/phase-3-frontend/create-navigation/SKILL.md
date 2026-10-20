---
name: create-navigation
description: Développer un en-tête avec menu de navigation fluide et un pied de page complet avec mentions légales obligatoires pour NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Create Navigation (En-tête & Pied de page)

## Quand utiliser ce skill
- Lors de l'initialisation de la structure globale du site.
- Pour concevoir le système de menu (version bureau et menu burger mobile).
- Pour harmoniser le footer sur l'ensemble des 6 pages validées.

## 1. En-tête (Header) & Barre de navigation

### Structure HTML recommandée
```html
<header class="site-header">
  <div class="container header-container">
    <a href="index.html" class="brand-logo" aria-label="NOVELTRIA Accueil">
      <span class="logo-main">NOVELTRIA</span>
      <span class="logo-sub">International Trade Services</span>
    </a>

    <!-- Bouton bascule mobile (Burger) -->
    <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
      <span class="sr-only">Ouvrir le menu</span>
      <span class="hamburger-bar"></span>
    </button>

    <!-- Navigation principale -->
    <nav id="primary-navigation" class="primary-nav" aria-label="Navigation principale">
      <ul class="nav-list">
        <li><a href="index.html" class="nav-link">Accueil</a></li>
        <li><a href="about.html" class="nav-link">À propos</a></li>
        <li><a href="services.html" class="nav-link">Services</a></li>
        <li><a href="faq.html" class="nav-link">FAQ</a></li>
        <li><a href="blog.html" class="nav-link">Actualités</a></li>
        <li><a href="contact.html" class="btn btn-primary nav-cta">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

### Comportement JavaScript minimal pour mobile
Un script ultra-léger et autonome sans librairie externe pour animer l'ouverture/fermeture du menu sur mobile :
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('is-open');
    });
  }
});
```

---

## 2. Pied de page (Footer)

Le footer est un élément de réassurance fondamental pour un projet institutionnel d'intermédiation commerciale.

### Structure HTML du Footer
```html
<footer class="site-footer">
  <div class="container footer-grid">
    <!-- Colonne 1 : Identité & Signature -->
    <div class="footer-col brand-col">
      <h3 class="footer-title">NOVELTRIA</h3>
      <p class="footer-tagline">« Votre partenaire pour développer vos échanges internationaux »</p>
      <p class="footer-desc">
        Facilitateur d'échanges, sourcing et négociation commerciale au service de vos flux mondiaux.
      </p>
    </div>

    <!-- Colonne 2 : Navigation rapide -->
    <div class="footer-col">
      <h4 class="footer-heading">Navigation</h4>
      <ul class="footer-links">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="about.html">À propos de nous</a></li>
        <li><a href="services.html">Nos services</a></li>
        <li><a href="faq.html">Foire aux questions</a></li>
        <li><a href="blog.html">Actualités du commerce</a></li>
        <li><a href="contact.html">Nous contacter</a></li>
      </ul>
    </div>

    <!-- Colonne 3 : Domaines clés -->
    <div class="footer-col">
      <h4 class="footer-heading">Filières cibles</h4>
      <ul class="footer-links">
        <li><span>Textile & Confection</span></li>
        <li><span>Électronique & Composants</span></li>
        <li><span>Matériaux & Matières premières</span></li>
      </ul>
    </div>
  </div>

  <!-- Barre de mentions légales obligatoires -->
  <div class="footer-bottom">
    <div class="container">
      <p class="legal-mention">
        <strong>Statut du projet :</strong> NOVELTRIA International Trade Services est un projet en cours de constitution.
      </p>
      <p class="copyright">
        &copy; 2026 NOVELTRIA — Tous droits réservés. Fondateur : Laurent Huiskens.
      </p>
    </div>
  </div>
</footer>
```

## Checklist Navigation
- [ ] Le logo renvoie bien vers `index.html`.
- [ ] La page en cours est identifiée (ex: classe `.active` sur le lien).
- [ ] Le menu burger fonctionne au clic sur mobile sans bloquer le défilement.
- [ ] La mention obligatoire sur le statut de projet est parfaitement visible dans le footer.
