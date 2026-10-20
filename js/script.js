/**
 * NOVELTRIA International Trade Services
 * Interactions globales (Menu Mobile Morphing X, Accordéons FAQ, Scroll Reveal)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. GESTION DU MENU MOBILE BURGER AVEC MORPHING EN X ---
  const burgerBtn = document.querySelector('.nv-burger');
  const mobileDrawer = document.querySelector('.nv-mobile-drawer');

  if (burgerBtn && mobileDrawer) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      burgerBtn.classList.toggle('is-active', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Fermeture lors du clic sur un lien du menu
    const mobileLinks = mobileDrawer.querySelectorAll('.nv-mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        burgerBtn.classList.remove('is-active');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermeture lors du clic en dehors du menu
    document.addEventListener('click', (e) => {
      if (!burgerBtn.contains(e.target) && !mobileDrawer.contains(e.target) && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        burgerBtn.classList.remove('is-active');
        burgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- 2. GESTION DES ACCORDÉONS FAQ ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isCurrentlyOpen = item.classList.contains('open');

        // Fermer les autres accordéons pour une lecture épurée
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('open');
        questionBtn.setAttribute('aria-expanded', !isCurrentlyOpen);
      });
    }
  });

  // --- 3. SYSTÈME DE SCROLL REVEAL (INTERSECTION OBSERVER) ---
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animation exécutée une seule fois
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });
});
