---
name: implement-https
description: Configurer le certificat SSL/TLS pour sécuriser les échanges entre les visiteurs et le site NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Implement HTTPS (Certificat SSL/TLS)

## Quand utiliser ce skill
- Avant la mise en production.
- Lors du choix et de la configuration de l'hébergement.
- Si l'hébergeur nécessite une configuration manuelle du SSL.

## Prérequis
- Un hébergement web choisi (voir `skills/phase-8-deployment/choose-hosting/SKILL.md`).
- Un nom de domaine enregistré.

## Pourquoi HTTPS est obligatoire pour NOVELTRIA

1. **Confiance** : Chrome et Firefox affichent un cadenas vert → signal fort de professionnalisme.
2. **SEO** : Google favorise les sites en HTTPS dans son classement.
3. **Protection des données** : Les données du formulaire de contact sont chiffrées en transit.
4. **Conformité RGPD** : Obligation légale pour les données personnelles collectées.

## Options d'obtention d'un certificat SSL

### Option 1 : Let's Encrypt (Recommandé — Gratuit)
**Qu'est-ce que c'est** : Autorité de certification gratuite, automatique et reconnue.
**Durée** : Certificats valides 90 jours, renouvelés automatiquement.
**Prise en charge** : Ovh, Infomaniak, o2switch, Cloudflare, AWS, et la plupart des hébergeurs.

### Option 2 : Certificat standard de l'hébergeur
De nombreux hébergeurs (OVH, Infomaniak) incluent un SSL Let's Encrypt **dans leur panneau de contrôle** (1 clic).

### Option 3 : Certificat payant (EV SSL)
**Quand** : Pour les sites commerciaux à fort volume de transactions.
**Coût** : 50-300€/an.
**Recommandation NOVELTRIA** : Let's Encrypt est suffisant pour cette phase.

## Procédure d'activation sur les hébergeurs courants

### OVH / Kimsufi
1. Se connecter à l'espace client.
2. Hébergement → Informations générales → SSL.
3. Activer SSL Let's Encrypt.
4. Confirmer l'activation (quelques minutes).

### Infomaniak
1. Se connecter au gestionnaire.
2. Hébergement web → Sites web → Votre site.
3. HTTPS → Activer Let's Encrypt.

### o2switch
1. cPanel → Sécurité → Let's Encrypt SSL.
2. Sélectionner le domaine, générer.

### Cloudflare (CDN)
1. Ajouter votre domaine sur Cloudflare.
2. SSL/TLS → Mode : **Full (strict)**.
3. Cloudflare fournit automatiquement un certificat.

## Configuration de la redirection HTTP → HTTPS

### Via .htaccess (Apache — hébergement mutualisé)

```apache
# Redirection HTTPS absolue
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Via nginx.conf (VPS nginx)

```nginx
server {
    listen 80;
    server_name noveltria.com www.noveltria.com;
    
    # Redirection permanente vers HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name noveltria.com www.noveltria.com;
    
    ssl_certificate /etc/letsencrypt/live/noveltria.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/noveltria.com/privkey.pem;
    
    root /var/www/noveltria;
    index index.html;
}
```

### Redirection www → non-www (ou inverse)
**Choisir une version canonique** et toujours y rediriger :

```apache
# Non-www vers www
RewriteCond %{HTTP_HOST} ^noveltria\.com [NC]
RewriteRule ^(.*)$ https://www.noveltria.com/$1 [R=301,L]
```

## Vérification du SSL

### 1. SSL Labs (ssllabs.com)
Outil de référence pour vérifier la qualité du certificat.
- Cible : Grade **A ou A+**.
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)

### 2. Vérification dans Chrome
- Cliquer sur le cadenas dans la barre d'adresse.
- Vérifier « Connexion sécurisée ».
- Consulter « Certificat valide ».

### 3. Redirection
Tester `http://noveltria.com` → doit rediriger vers `https://noveltria.com` (code 301).

## Renouvellement automatique Let's Encrypt

Let's Encrypt expirant tous les 90 jours, le renouvellement doit être automatisé :

```bash
# Commande manuelle de renouvellement
certbot renew

# Cron job pour renouvellement automatique (recommandé)
0 12 * * * /usr/bin/certbot renew --quiet
```

## Points de vigilance RGPD

- Le formulaire de contact transmet des données personnelles (email, nom) → **HTTPS obligatoire**.
- Mentionner dans la politique de confidentialité que les données sont chiffrées en transit.
- Stocker les données du formulaire sur un serveur sécurisé en Union Européenne.

## Checklist d'implémentation HTTPS

- [ ] Certificat SSL activé (Let's Encrypt ou équivalent).
- [ ] Redirection HTTP → HTTPS configurée (301 permanent).
- [ ] Redirection www / non-www cohérente.
- [ ] Test SSL Labs : grade A minimum.
- [ ] Cadenas vert visible dans Chrome.
- [ ] Contenu mixte (mixed content) absent (toutes les ressources en HTTPS).
- [ ] Renouvellement automatique configuré.

## Contenu mixte (Mixed Content) — à éviter

Le mixed content survient quand une page HTTPS charge des ressources HTTP.

**Vérification** :
```console
Chrome DevTools → Console → "Mixed Content:"
```

**Correction** : Remplacer **toutes** les URL `http://` par `https://` dans les HTML, CSS, JS.

## Sorties attendues

1. **SSL activé** : Confirmé via Chrome et SSL Labs.
2. **Redirection fonctionnelle** : HTTP → HTTPS vérifiée.
3. **Rapport** : `ssl-implementation-report.md` avec grade et date d'expiration.
