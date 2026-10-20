---
name: create-animations
description: Ajouter des micro-interactions et transitions fluides et discrètes adaptées au standing prestigieux de NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Create Animations (Animations & Micro-interactions)

## Quand utiliser ce skill
- Une fois les pages et composants statiques en place.
- Pour rehausser le sentiment de qualité, de dynamisme et de modernité.
- ⚠️ **Règle absolue** : Les animations doivent rester subtiles et professionnelles, jamais agressives ou distrayantes.

## 1. Principes d'animation pour NOVELTRIA

- **Durée courte** : Entre 150ms et 300ms pour les interactions au survol (hover) ; max 600ms pour les apparitions au scroll.
- **Courbes d'accélération douces** : `ease-out` ou `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Respect des préférences utilisateur** (`prefers-reduced-motion`) : Obligatoire pour l'accessibilité.

## 2. Animations CSS standards

### Animation de survol sur les boutons
```css
.btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn:active {
  transform: translateY(0);
}
```

### Élévation des cartes de services
```css
.card {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(10, 37, 64, 0.08);
}
```

### Apparition progressive au défilement (Fade-in on scroll)
```css
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### JavaScript ultra-léger pour le Fade-in au Scroll
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in-section');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(sec => observer.observe(sec));
  } else {
    // Fallback pour anciens navigateurs
    sections.forEach(sec => sec.classList.add('is-visible'));
  }
});
```

## 3. Respect du mode d'accessibilité (Mouvement réduit)

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Checklist Animations

- [ ] Les animations ne ralentissent pas le navigateur (utiliser `transform` et `opacity`).
- [ ] Durées courtes (< 400ms).
- [ ] Aucun élément clignotant ou rotation agressive.
- [ ] Règle `@media (prefers-reduced-motion)` implémentée.

## Sorties attendues

1. **Règles CSS d'animations** : Ajoutées dans `css/style.css`.
2. **Script d'animation scroll** : Ajouté dans `js/script.js`.
