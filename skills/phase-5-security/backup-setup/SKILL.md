---
name: backup-setup
description: Mettre en place un plan et des scripts de sauvegarde automatique pour les fichiers et la base de données de NOVELTRIA
type: skill
agent: web-developer + quality-assurance
---

# Skill : Backup Setup (Sauvegarde automatique)

## Quand utiliser ce skill
- Avant toute mise en production.
- Avant une mise à jour majeure du site ou de la base de données.
- Pour assurer la continuité d'activité (disaster recovery).

## Prérequis
- Accès aux fichiers du site (`website/`).
- Accès aux données stockées (ex: base de données `database.sqlite` ou messages).

## Stratégie de sauvegarde (Règle 3-2-1)
Pour un site professionnel :
- **3** copies des données.
- Sur **2** supports différents (ex: serveur local + stockage cloud).
- **1** copie externalisée hors site (ex: Google Drive, AWS S3, ou backup distant).

## 1. Script de sauvegarde automatique (Bash / Linux)

Pour un hébergement web avec accès SSH ou tâche Cron :

```bash
#!/bin/bash
# ==========================================
# Backup Script — NOVELTRIA
# ==========================================

DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/var/backups/noveltria"
SITE_DIR="/var/www/noveltria"

mkdir -p $BACKUP_DIR

# 1. Sauvegarde des fichiers du site
tar -czf $BACKUP_DIR/site_files_$DATE.tar.gz -C $SITE_DIR .

# 2. Sauvegarde de la base de données SQLite (si existante)
if [ -f "$SITE_DIR/database.sqlite" ]; then
    sqlite3 $SITE_DIR/database.sqlite ".backup '$BACKUP_DIR/db_$DATE.sqlite'"
fi

# 3. Suppression des sauvegardes de plus de 30 jours (rotation)
find $BACKUP_DIR -type f -mtime +30 -delete

echo "Sauvegarde NOVELTRIA réussie le $DATE"
```

## 2. Automatisation via Cron Job

Pour exécuter la sauvegarde tous les jours à 2h du matin :

```text
0 2 * * * /usr/local/bin/backup-noveltria.sh > /dev/null 2>&1
```

## 3. Sauvegarde manuelle rapide (Pour hébergement mutualisé)

Si le site est hébergé sur un mutualisé classique (cPanel / OVH) :
1. **Sauvegarde cPanel** : Utiliser la fonction "Sauvegarde complète" en 1 clic.
2. **Sauvegarde FTP** : Télécharger l'intégralité du dossier `www` ou `public_html` via FileZilla.
3. Conserver une copie datée sur un disque dur externe ou cloud sécurisé.

## Checklist sauvegarde

- [ ] Script ou procédure de sauvegarde testé.
- [ ] Sauvegarde des fichiers HTML/CSS/JS effectuée.
- [ ] Sauvegarde de la base de données SQLite/contacts effectuée.
- [ ] Test de restauration réalisé avec succès (vérifier qu'on peut réinstaller le site à partir de la sauvegarde).
- [ ] Fréquence définie (hebdomadaire minimum pour un site vitrine).

## Sorties attendues

1. **Script de backup** : `backup.sh` configuré.
2. **Procédure de restauration** : `restoration-procedure.md` documentée.
