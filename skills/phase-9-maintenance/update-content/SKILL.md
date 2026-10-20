---
name: update-content
description: Procédure standardisée pour modifier ou actualiser des contenus existants sur le site NOVELTRIA sans régression
type: skill
agent: copywriter + web-developer
---

# Skill : Update Content (Mise à jour de contenu)

## Quand utiliser ce skill
- Pour corriger une coquille ou réécrire un paragraphe.
- Pour actualiser les secteurs cibles ou les descriptifs de services.
- Dès que Laurent Huiskens demande un ajustement textuel.

## Règles impératives
1. Ne jamais modifier un texte validé sans validation explicite du client.
2. Toujours préserver les mentions obligatoires (statut en cours de constitution, fondateur).
3. Conserver la hiérarchie HTML (ne pas casser les balises `<h2>`, `<p>`, etc.).

## Procédure
1. **Identifier** la page et le bloc exact à modifier.
2. **Rédiger** la proposition de nouveau texte avec le Copywriter.
3. **Faire valider** par le client.
4. **Intégrer** dans le fichier HTML concerné.
5. **Mettre à jour** la date `<lastmod>` dans `sitemap.xml`.

## Sorties attendues
- Fichier HTML mis à jour.
- Entrée consignée dans `memory/decisions.md`.
