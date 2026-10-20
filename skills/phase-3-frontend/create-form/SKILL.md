---
name: create-form
description: Concevoir et styliser un formulaire de contact professionnel, accessible et ergonomique pour NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Create Form (Création de formulaire)

## Quand utiliser ce skill
- Lors de l'intégration de la page `contact.html`.
- Pour tout formulaire de demande de devis ou de rappel sur le site.

## Prérequis
- Respecter la charte graphique (`create-style-guide`).
- Intégrer les exigences de sécurité (`secure-form-inputs`).

## Structure HTML recommandée

```html
<section class="section contact-section">
  <div class="container">
    <div class="form-wrapper">
      <h2 class="form-title">Parlez-nous de votre projet</h2>
      <p class="form-subtitle">Nos équipes vous répondent sous 24h à 48h ouvrées.</p>

      <form id="contact-form" action="contact.php" method="POST" novalidate>
        <!-- Champ Honeypot (Anti-Spam) -->
        <div style="display:none;" aria-hidden="true">
          <input type="text" name="website" tabindex="-1" autocomplete="off">
        </div>

        <div class="form-group">
          <label for="name">Nom complet <span class="required">*</span></label>
          <input type="text" id="name" name="name" class="form-control" required placeholder="Ex : Laurent Huiskens">
          <span class="error-message" id="name-error"></span>
        </div>

        <div class="form-group">
          <label for="email">Adresse email professionnelle <span class="required">*</span></label>
          <input type="email" id="email" name="email" class="form-control" required placeholder="nom@entreprise.com">
          <span class="error-message" id="email-error"></span>
        </div>

        <div class="form-group">
          <label for="phone">Téléphone</label>
          <input type="tel" id="phone" name="phone" class="form-control" placeholder="+33 6 00 00 00 00">
        </div>

        <div class="form-group">
          <label for="service-interest">Service concerné</label>
          <select id="service-interest" name="service" class="form-control">
            <option value="sourcing">Sourcing & Recherche de fournisseurs</option>
            <option value="acheteurs">Recherche d'acheteurs & Débouchés</option>
            <option value="negociation">Intermédiation & Négociation commerciale</option>
            <option value="autre">Autre demande</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">Votre message <span class="required">*</span></label>
          <textarea id="message" name="message" class="form-control" rows="5" required placeholder="Décrivez votre besoin..."></textarea>
          <span class="error-message" id="message-error"></span>
        </div>

        <button type="submit" class="btn btn-primary btn-block">Envoyer votre demande</button>
      </form>
    </div>
  </div>
</section>
```

## Styles CSS pour formulaire

```css
.form-wrapper {
  background: var(--color-white);
  padding: var(--space-2xl);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-gray-border);
  max-width: 650px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: var(--space-md);
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: var(--space-xs);
  color: var(--color-primary);
}

.form-control {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid var(--color-gray-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(200, 165, 102, 0.2);
}

.required {
  color: var(--color-error);
}
```

## Checklist Formulaire

- [ ] Champs obligatoires clairement signalés (`*`).
- [ ] Labels correctement liés aux champs via `for` et `id`.
- [ ] Style conforme à la charte Corporate & Prestigieux.
- [ ] Sécurité intégrée (honeypot masqué).
- [ ] Bouton d'action proéminent.

## Sorties attendues

1. **Composant formulaire** : HTML et CSS prêts à l'intégration.
