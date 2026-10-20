---
name: setup-form-handling
description: Configurer le traitement côté serveur des soumissions de formulaires de contact pour NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Setup Form Handling (Traitement des formulaires)

## Quand utiliser ce skill
- Une fois le formulaire HTML de contact créé et sécurisé.
- Pour configurer l'envoi des messages reçus vers la boîte mail de NOVELTRIA.

## Prérequis
- Formulaire HTML validé (`secure-form-inputs`).
- Un serveur web avec support PHP, Node.js ou un service tiers de formulaire (Formspree, EmailJS, etc.).

## Options de traitement du formulaire

### Option 1 : Service Tiers (Recommandé pour site statique / MVP)
Des services comme **Formspree**, **EmailJS** ou **Netlify Forms** gèrent l'envoi d'emails sans nécessiter de code backend complexe.
- **Avantage** : Aucun serveur mail à configurer, protection anti-spam intégrée.
- **Inconvénient** : Dépendance externe (mais gratuit/peu coûteux pour un volume standard).

### Option 2 : Script PHP natif (Hébergement mutualisé standard)
Un script `contact.php` simple et sécurisé sur le serveur.

---

## Implémentation avec un script PHP sécurisé (`contact.php`)

### 1. Code PHP (`contact.php`)
```php
<?php
// Démarrage de session pour protection CSRF (optionnel)
session_start();

// Vérification de la méthode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Vérification du Honeypot anti-spam
    if (!empty($_POST['website'])) {
        // Spam détecté silencieusement
        header("Location: contact-merci.html");
        exit();
    }

    // Récupération et nettoyage des données
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = isset($_POST["phone"]) ? strip_tags(trim($_POST["phone"])) : "";
    $message = trim($_POST["message"]);

    // Validation des champs obligatoires
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Veuillez remplir tous les champs obligatoires avec un email valide.";
        exit;
    }

    // Paramètres de l'email
    $recipient = "contact@noveltria.com"; // Email de destination NOVELTRIA
    $subject = "Nouveau contact site NOVELTRIA de : " . $name;
    
    // Construction du corps du message
    $email_content = "Nom : $name\n";
    $email_content .= "Email : $email\n";
    $email_content .= "Téléphone : $phone\n\n";
    $email_content .= "Message :\n$message\n";

    // Headers de sécurité (anti-injection)
    $email_headers = "From: $name <$email>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "X-Mailer: PHP/" . phpversion();

    // Envoi de l'email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        // Redirection vers une page de remerciement
        header("Location: contact-merci.html");
        exit();
    } else {
        http_response_code(500);
        echo "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.";
    }

} else {
    http_response_code(403);
    echo "Accès refusé.";
}
?>
```

### 2. Adaptation du formulaire HTML pour pointer vers le script
```html
<form id="contact-form" method="POST" action="contact.php">
  <!-- Champs du formulaire -->
  <input type="text" name="name" required placeholder="Votre nom">
  <input type="email" name="email" required placeholder="Votre email">
  <input type="tel" name="phone" placeholder="Votre téléphone">
  <textarea name="message" required placeholder="Votre message"></textarea>
  
  <!-- Honeypot -->
  <div style="display:none;" aria-hidden="true">
    <input type="text" name="website" tabindex="-1" autocomplete="off">
  </div>

  <button type="submit" class="btn btn-primary">Envoyer le message</button>
</form>
```

---

## Implémentation avec Formspree (Alternative sans serveur PHP)

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" required placeholder="Votre nom">
  <input type="email" name="email" required placeholder="Votre email">
  <textarea name="message" required placeholder="Votre message"></textarea>
  
  <!-- Redirection après succès -->
  <input type="hidden" name="_redirect" value="https://www.noveltria.com/contact-merci.html">
  
  <button type="submit" class="btn btn-primary">Envoyer</button>
</form>
```

## Checklist traitement formulaire

- [ ] Script configuré avec l'email de destination correct (`contact@noveltria.com`).
- [ ] Protection anti-spam (honeypot) active et testée.
- [ ] Nettoyage (`strip_tags`) et validation (`filter_var`) des entrées.
- [ ] Page de remerciement (`contact-merci.html`) créée.
- [ ] Test réel d'envoi de message effectué avec succès.

## Sorties attendues

1. **Script de traitement** : `contact.php` ou configuration Formspree.
2. **Page de remerciement** : `contact-merci.html`.
3. **Rapport de test** : Validation de la réception effective des emails.
