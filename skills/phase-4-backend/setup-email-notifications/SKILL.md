---
name: setup-email-notifications
description: Configurer les notifications par email pour les soumissions de formulaires et alertes système NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Setup Email Notifications (Notifications par email)

## Quand utiliser ce skill
- Pour configurer l'envoi de confirmations automatiques aux clients (auto-responder).
- Pour configurer les alertes internes destinées à l'équipe NOVELTRIA.

## Prérequis
- `setup-form-handling` configuré et opérationnel.
- Un serveur mail ou service tiers configuré avec domaine pro (`@noveltria.com`).

## 1. Notification Interne (Pour NOVELTRIA)

Quand un prospect remplit le formulaire, l'équipe reçoit un email structuré :

**Objet** : `[NOVELTRIA Contact] Nouveau message de [Nom du prospect]`

**Template Corps d'email** :
```text
Un nouveau message a été reçu via le formulaire de contact du site web NOVELTRIA.

--------------------------------------------------
INFORMATIONS DU PROSPECT :
--------------------------------------------------
- Nom : [Nom]
- Entreprise : [Entreprise]
- Email : [Email]
- Téléphone : [Téléphone]
- Date/Heure : [Timestamp]

--------------------------------------------------
MESSAGE :
--------------------------------------------------
[Texte complet du message]

--------------------------------------------------
Pour répondre directement au prospect, utilisez le bouton "Répondre" de votre client de messagerie (Reply-To configuré).
```

## 2. Accusé de réception automatique (Pour le Prospect)

Rassurer immédiatement le visiteur en lui envoyant un email automatique de confirmation.

**Objet** : `NOVELTRIA — Nous avons bien reçu votre message`

**Template HTML / Texte** :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Inter', sans-serif; color: #4A5568; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #F5F7FA; }
    .header { background: #0A2540; color: #FFFFFF; padding: 20px; text-align: center; }
    .content { background: #FFFFFF; padding: 30px; border-radius: 6px; margin-top: 20px; }
    .footer { text-align: center; font-size: 12px; margin-top: 20px; color: #718096; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>NOVELTRIA International Trade Services</h2>
    </div>
    <div class="content">
      <p>Bonjour [Nom],</p>
      <p>Nous vous remercions d'avoir contacté <strong>NOVELTRIA</strong>. Nous avons bien reçu votre message concernant votre projet à l'international.</p>
      <p>Notre équipe examine votre demande avec attention et reviendra vers vous dans les plus brefs délais (généralement sous 24 à 48 heures ouvrées).</p>
      <p><em>« Votre partenaire pour développer vos échanges internationaux »</em></p>
      <p>Cordialement,<br><strong>L'équipe NOVELTRIA</strong></p>
    </div>
    <div class="footer">
      <p>NOVELTRIA International Trade Services est un projet en cours de constitution.</p>
    </div>
  </div>
</body>
</html>
```

## 3. Bonnes pratiques de délivrabilité (SPF, DKIM, DMARC)

Pour éviter que les emails de NOVELTRIA atterrissent dans les spams :

1. **Enregistrement SPF** : Déclarer les serveurs autorisés à envoyer des emails pour `noveltria.com`.
2. **Signature DKIM** : Signer cryptographiquement les emails sortants.
3. **Politique DMARC** : Définir le comportement en cas d'échec SPF/DKIM.

## Checklist notifications email

- [ ] Email interne configuré vers `contact@noveltria.com`.
- [ ] Reply-To configuré sur l'email du prospect.
- [ ] Auto-responder (accusé de réception) activé pour le client.
- [ ] Mention légale « projet en cours de constitution » présente dans l'auto-responder.
- [ ] Tests d'envoi et réception validés.

## Sorties attendues

1. **Templates d'emails** : Code HTML/texte des notifications.
2. **Rapport de test** : Validation de la réception des deux côtés (interne et prospect).
