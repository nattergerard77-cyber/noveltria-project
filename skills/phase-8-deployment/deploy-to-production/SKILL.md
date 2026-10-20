---
name: deploy-to-production
description: Procédure complète et sécurisée pour mettre en ligne le site web NOVELTRIA sur le serveur de production
type: skill
agent: web-developer + quality-assurance
---

# Skill : Deploy to Production (Mise en ligne finale)

## Quand utiliser ce skill
- Une fois que toutes les pages, styles, formulaires et sécurités ont été validés par le Quality Assurance et approuvés par Laurent Huiskens.
- Pour publier les mises à jour majeures du site.

## Prérequis
- Hébergement actif (`choose-hosting`) et domaine pointé (`setup-domain`).
- Certificat SSL opérationnel (`implement-https`).
- Sauvegarde préalable effectuée (`backup-setup`).

## Procédure de déploiement étape par étape

### Étape 1 : Vérification pré-déploiement (Checklist QA)
- [ ] Tous les textes contiennent la mention « projet en cours de constitution ».
- [ ] Laurent Huiskens est qualifié de « fondateur ».
- [ ] Les formulaires fonctionnent et envoient bien les emails.
- [ ] Pas de liens morts (Erreurs 404).
- [ ] Images optimisées au format WebP.
- [ ] Fichiers CSS et JS minifiés (`style.min.css`, `script.min.js`).

### Étape 2 : Préparation des fichiers de production
Le dossier à transférer (`website/`) doit contenir :
```
website/
├── index.html
├── about.html
├── services.html
├── faq.html
├── blog.html
├── contact.html
├── contact.php (ou script de traitement)
├── sitemap.xml
├── robots.txt
├── .htaccess (avec règles HTTPS et headers de sécurité)
├── css/
│   └── style.min.css
├── js/
│   └── script.min.js
└── images/
    └── (images optimisées)
```

### Étape 3 : Transfert sécurisé (via SFTP / SSH ou Git)

#### Option A : Transfert par SFTP (FileZilla / WinSCP)
1. Connexion au serveur via port 22 (SFTP sécurisé).
2. Se placer dans le répertoire racine web (`public_html`, `www` ou `/var/www/noveltria`).
3. Téléverser l'intégralité du contenu du dossier `website/`.

#### Option B : Déploiement par Git (Recommandé)
```bash
# Sur le serveur de production
cd /var/www/noveltria
git pull origin main
```

### Étape 4 : Vérification post-déploiement en ligne
1. **Navigation** : Ouvrir `https://www.noveltria.com` dans plusieurs navigateurs (Chrome, Safari, Firefox, Edge).
2. **Cadenas SSL** : Vérifier que le certificat HTTPS est actif sans alerte de sécurité.
3. **Test mobile** : Naviguer depuis un smartphone réel.
4. **Test Formulaire réel** : Soumettre une demande de contact test et vérifier la bonne réception de l'email.

## Procédure de retour arrière (Rollback) en cas de bug
Si un problème critique apparaît en ligne :
1. Restaurer la version précédente depuis la sauvegarde locale (`backup-setup`).
2. Remplacer les fichiers sur le serveur par SFTP.
3. Analyser et corriger le problème en local avant toute nouvelle tentative.

## Sorties attendues

1. **Site NOVELTRIA en ligne** et accessible publiquement sur son nom de domaine.
2. **Rapport de mise en production** : `deployment-report.md`.
