---
name: add-security-headers
description: Ajouter les headers HTTP de sécurité pour protéger NOVELTRIA contre les attaques courantes
type: skill
agent: web-developer
---

# Skill : Add Security Headers (Headers HTTP de sécurité)

## Quand utiliser ce skill
- Avant mise en production, après activation du HTTPS.
- Lors de l'audit de sécurité final par Quality Assurance.

## Prérequis
- HTTPS activé et fonctionnel (`implement-https`).
- Avoir accès à la configuration serveur (`.htaccess` ou `nginx.conf`).

## Headers de sécurité à implémenter

### 1. Strict-Transport-Security (HSTS)
Force l'utilisation de HTTPS en précisant au navigateur de ne jamais utiliser HTTP.

```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```
- `max-age=31536000` : 1 an (recommandé).
- `includeSubDomains` : Appliqué à tous les sous-domaines.
- `preload` : Inclusion dans la liste de préchargement HSTS des navigateurs.

### 2. X-Content-Type-Options
Empêche les navigateurs d'interpréter les fichiers différemment de leur type MIME déclaré.

```apache
Header always set X-Content-Type-Options "nosniff"
```

### 3. X-Frame-Options
Empêche l'intégration du site dans des iframes (protection contre le clickjacking).

```apache
Header always set X-Frame-Options "SAMEORIGIN"
```
- `SAMEORIGIN` : Le site peut être intégré uniquement par lui-même.
- `DENY` : Aucune intégration iframe (plus restrictif).

### 4. X-XSS-Protection
Active le filtre XSS natif des navigateurs anciens. Toujours activer pour la rétrocompatibilité.

```apache
Header always set X-XSS-Protection "1; mode=block"
```

### 5. Content-Security-Policy (CSP)
Le header le plus puissant. Contrôle les sources autorisées pour chaque type de ressource.

**CSP minimale pour NOVELTRIA** (page statique sans ressource externe complexe) :

```apache
Header always set Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none';"
```

**Explication** :
- `default-src 'self'` : Par défaut, tout vient du domaine lui-même.
- `script-src 'self'` : Scripts uniquement depuis le serveur.
- `style-src 'self' https://fonts.googleapis.com` : CSS + Google Fonts.
- `font-src 'self' https://fonts.gstatic.com` : Polices depuis gstatic (Google).
- `img-src 'self' data:` : Images locales + data URIs (icônes inline).
- `frame-ancestors 'none'` : Remplace X-Frame-Options.

### 6. Referrer-Policy
Contrôle les informations de référent envoyées lors d'une navigation.

```apache
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

### 7. Permissions-Policy (anciennement Feature-Policy)
Désactive les fonctionnalités inutiles du navigateur.

```apache
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
```

## Implémentation complète

### Via .htaccess (Apache)

```apache
# =============================
# Security Headers — NOVELTRIA
# =============================

# HSTS - Forcer HTTPS
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

# Empêcher le sniffing MIME
Header always set X-Content-Type-Options "nosniff"

# Protection clickjacking
Header always set X-Frame-Options "SAMEORIGIN"

# Filtre XSS
Header always set X-XSS-Protection "1; mode=block"

# Politique de référent
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Permissions navigateur
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"

# Content Security Policy
Header always set Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; frame-ancestors 'none';"
```

### Via nginx.conf

```nginx
# Security Headers — NOVELTRIA
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()";
add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; frame-ancestors 'none';" always;
```

## Vérification des headers

### Outil en ligne
- [securityheaders.com](https://securityheaders.com) : Grade A+ = parfait.

### Chrome DevTools
1. F12 → Network.
2. Cliquer sur la page principale.
3. Headers → Response Headers.
4. Vérifier la présence des headers.

## Résolution des problèmes courants

### Google Fonts bloquées par CSP
Si les polices ne se chargent plus après activation CSP, vérifier que `fonts.googleapis.com` est dans `style-src` et `fonts.gstatic.com` dans `font-src`.

### Scripts inline bloqués par CSP
Si un script inline est indispensable, utiliser un **nonce** :
```apache
Header always set Content-Security-Policy "script-src 'self' 'nonce-[generateNonce]'"
```

```html
<script nonce="[generateNonce]">
// Script inline sécurisé
</script>
```

## Checklist de sécurité headers

- [ ] HSTS configuré (`max-age` >= 31536000).
- [ ] X-Content-Type-Options : `nosniff`.
- [ ] X-Frame-Options : `SAMEORIGIN` ou `DENY`.
- [ ] X-XSS-Protection : `1; mode=block`.
- [ ] Referrer-Policy configurée.
- [ ] Content-Security-Policy basique en place.
- [ ] Permissions-Policy désactivant les fonctionnalités inutiles.
- [ ] Test securityheaders.com >= grade B.

## Sorties attendues

1. **Fichier `.htaccess` ou `nginx.conf`** : Mise à jour avec tous les security headers.
2. **Rapport** : `security-headers-report.md` avec grade obtenu sur securityheaders.com.
3. **Tests de régression** : Vérification que Google Fonts, scripts et images fonctionnent toujours.
