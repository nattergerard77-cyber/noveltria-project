---
name: setup-domain
description: Configurer le nom de domaine, les enregistrements DNS et la messagerie professionnelle pour NOVELTRIA
type: skill
agent: web-developer
---

# Skill : Setup Domain (Configuration du nom de domaine)

## Quand utiliser ce skill
- Après l'achat du nom de domaine (ex: `noveltria.com`).
- Pour lier le nom de domaine à l'hébergement web et configurer les emails professionnels.

## 1. Choix de l'extension de domaine

- **`.com`** : Extension prioritaire recommandée pour une activité internationale d'import-export (`noveltria.com`).
- **`.fr`** : À réserver également pour protéger la marque sur le marché français (`noveltria.fr`).

## 2. Configuration des enregistrements DNS fondamentaux

Dans la zone DNS du registrar (gestionnaire de domaine) :

### Enregistrements Web (Pointage vers le serveur)
```text
# Enregistrement A (IPv4)
@   IN A   [Adresse_IP_Du_Serveur]

# Enregistrement CNAME (Pour le sous-domaine www)
www IN CNAME noveltria.com.
```

### Enregistrements Mail (Messagerie professionnelle)
```text
# Enregistrement MX (Exemple pour hébergement standard)
@ IN MX 10 mail.noveltria.com.
```

### Enregistrements de Sécurité Email (Délivrabilité)
```text
# SPF (Autoriser le serveur d'envoi)
@ IN TXT "v=spf1 include:_spf.hebergeur.com ~all"

# DMARC (Politique de surveillance)
_dmarc IN TXT "v=DMARC1; p=none; rua=mailto:admin@noveltria.com"
```

## 3. Création des adresses de messagerie

Configurer les boîtes de réception indispensables :
1. `contact@noveltria.com` (Réception des demandes du site).
2. `laurent.huiskens@noveltria.com` (Boîte personnelle du fondateur).

## Checklist Domaine & DNS

- [ ] Domaine réservé avec protection WHOIS activée.
- [ ] Enregistrements A et CNAME pointant vers le serveur web.
- [ ] Enregistrements MX configurés.
- [ ] Clés SPF et DMARC configurées pour éviter les spams.
- [ ] Propagation DNS vérifiée (via [whatsmydns.net](https://www.whatsmydns.net)).

## Sorties attendues

1. **Rapport de configuration DNS** : `dns-setup-report.md`.
2. **Accès web validé** sur `https://www.noveltria.com`.
