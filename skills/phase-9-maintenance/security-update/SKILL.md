---
name: security-update
description: Procédure périodique de contrôle et d'application des mises à jour de sécurité pour NOVELTRIA
type: skill
agent: web-developer + quality-assurance
---

# Skill : Security Update (Maintenance de sécurité)

## Quand utiliser ce skill
- Mensuellement ou trimestriellement après mise en ligne.
- Immédiatement si une vulnérabilité critique est signalée.

## Checklist d'audit de sécurité régulier
1. **Certificat SSL** : Vérifier que le renouvellement automatique Let's Encrypt fonctionne (validité > 30 jours).
2. **Formulaire de contact** : Tester la réception des messages et l'absence de spams massifs.
3. **Fichiers serveur** : Vérifier les permissions de fichiers (644 pour les fichiers, 755 pour les dossiers).
4. **Headers de sécurité** : Re-tester le score sur [securityheaders.com](https://securityheaders.com).
5. **Sauvegarde** : Vérifier que les backups automatiques s'exécutent bien et sont restaurables.

## Sorties attendues
- Rapport d'audit de sécurité périodique consigné.
