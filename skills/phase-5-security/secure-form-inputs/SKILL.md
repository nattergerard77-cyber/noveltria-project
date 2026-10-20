---
name: secure-form-inputs
description: Protéger le formulaire de contact de NOVELTRIA contre injections, spams et attaques courantes
type: skill
agent: quality-assurance
---

# Skill : Secure Form Inputs (Sécurisation des formulaires)

## Quand utiliser ce skill
- Après la création du formulaire de contact par le Web Developer.
- Avant l'intégration du back-end (traitement des soumissions).
- Pour s'assurer que le front-end offre une base sécurisée.

## Prérequis
- Le formulaire HTML doit être disponible (page contact.html ou section contact).
- Connaissance des principes de validation côté client.

## Principes de sécurité applicables

### 1. Validation côté client (HTML5 & JavaScript)
- **Empêche les erreurs humaines** mais ne garantit pas la sécurité (vérification côté serveur obligatoire).
- **Utiliser les attributs HTML5 natifs** : `required`, `type="email"`, `pattern`.

### 2. Validation côté serveur (recommandations)
Cette skill couvre les **préparatifs front-end** pour faciliter la sécurité backend ultérieure.

### 3. Limitation du spam
- **Honeypot** : Champ caché invisible pour les humains mais détectable par les bots.
- **Rate limiting** (côté serveur) : Limiter les soumissions répétées.
- **reCAPTCHA** : Optionnel, à évaluer selon le volume attendu.

## Attaques courantes visées

### A. Cross-Site Scripting (XSS)
- Injection de scripts malveillants via les champs de saisie.
- **Remède** : Encodage des caractères spéciaux côté serveur, validation des formats.

### B. Injection SQL (ou NoSQL)
- Si les données sont stockées dans une base de données.
- **Remède** : Préparées statements côté serveur, échappement.

### C. Spam via formulaires
- Bots automatisés inondant le formulaire.
- **Remède** : Honeypot, captcha, validation humaine.

### D. Header injection
- Insertion de headers HTTP via les champs (email, sujet).
- **Remède** : Sanitisation des entrées avant envoi.

## Règles de sécurité front-end pour NOVELTRIA

### 1. Attributs HTML natifs de validation
```html
<!-- Exemple de formulaire NOVELTRIA -->
<form id="contact-form" method="POST" action="/submit">
  <!-- Nom : text, requis, sans format particulier -->
  <input type="text" id="name" name="name" required minlength="2" maxlength="100">

  <!-- Email : type email, validation standard -->
  <input type="email" id="email" name="email" required>

  <!-- Message : textarea, limité à 5000 caractères -->
  <textarea id="message" name="message" required minlength="10" maxlength="5000"></textarea>

  <!-- Bouton d'envoi -->
  <button type="submit">Envoyer</button>
</form>
```

### 2. Honeypot (Champ piège)
Ajouter un champ caché invisible pour les utilisateurs réels mais détecté par les bots.

```html
<!-- Honeypot -->
<div class="honeypot" style="position: absolute; left: -9999px;">
  <label for="website">Veuillez laisser ce champ vide</label>
  <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
</div>
```

**Logique côté serveur** : Si le champ `website` est rempli, rejeter la soumission automatiquement.

### 3. Validation JavaScript complémentaire
Après validation HTML5 native, ajouter une validation en JavaScript pour améliorer l'expérience utilisateur.

```javascript
document.getElementById('contact-form').addEventListener('submit', function(event) {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Vérification email via regex simple
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    event.preventDefault();
    alert('Veuillez saisir une adresse email valide.');
    return;
  }
  
  // Vérification longueur minimale du message
  if (message.trim().length < 10) {
    event.preventDefault();
    alert('Votre message est trop court. Veuillez fournir plus de détails.');
    return;
  }
});
```

### 4. Protection CSRF (Cross-Site Request Forgery)
Côté serveur, générer un token unique par session et l'inclure dans le formulaire.

**Côté HTML (à générer dynamiquement côté serveur)** :
```html
<input type="hidden" name="csrf_token" value="{{csrf_token}}">
```

**Remarque** : Cette skill ne couvre pas la génération côté serveur mais prépare le front-end à l'intégrer.

### 5. Limitation de la longueur des entrées
- **Nom** : max 100 caractères.
- **Email** : max 254 caractères (RFC standard).
- **Message** : max 5000 caractères (pragmatique pour éviter l'injection massive).

```html
<input type="text" id="name" name="name" maxlength="100">
<textarea id="message" name="message" maxlength="5000"></textarea>
```

### 6. Sanitisation côté client (optionnel)
Utiliser une bibliothèque de sanitisation légère pour échapper les caractères spéciaux avant l'affichage des erreurs.

**Exemple avec DOMPurify** (pour éviter l'affichage de scripts dans les messages d'erreur) :
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.3.6/purify.min.js"></script>
<script>
  function sanitizeInput(input) {
    return DOMPurify.sanitize(input);
  }
</script>
```

## Checklist de sécurité front-end

- [ ] Attributs HTML5 `required` sur les champs obligatoires.
- [ ] Type `email` sur le champ adresse email.
- [ ] Longueurs maximales définies (`maxlength`).
- [ ] Champ honeypot présent et masqué proprement.
- [ ] Validation JavaScript complémentaire (email, longueur).
- [ ] Message d'erreur explicite sans révéler d'information sensible.
- [ ] Pas d'erreur console JavaScript liée au formulaire.

## Préparatifs pour la sécurité côté serveur (recommandations)

Le Web Developer transmet les recommandations suivantes à l'équipe backend (ou à lui-même s'il traite le back-end) :

### 1. Validation des données côté serveur
- Vérifier à nouveau les champs obligatoires.
- Valider le format email (RFC 5322).
- Vérifier les longueurs max.

### 2. Sanitisation des entrées
- Échapper les caractères spéciaux pour éviter XSS.
- Utiliser des requêtes préparées pour les bases de données.

### 3. Gestion des honeypots
- Si le champ `website` est rempli, ignorer la soumission silencieusement.

### 4. Protection CSRF
- Générer un token unique par session.
- Vérifier le token à chaque soumission.

### 5. Rate limiting
- Limiter à 10 soumissions par heure par adresse IP.

### 6. Logging sécurisé
- Journaliser les tentatives suspectes (honeypot déclenché, IP bloquée).
- Ne pas loger les mots de passe ou contenu des messages.

## Sorties attendues

1. **Formulaire HTML sécurisé** : Code avec attributs de validation, honeypot, validation JS.
2. **Rapport de vérification** : `security-report-contact-form.md` avec checklist passée.
3. **Recommandations backend** : Document décrivant les mesures à implémenter côté serveur.
