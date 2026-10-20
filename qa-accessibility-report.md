# Rapport d'Audit Qualité, Accessibilité & Sécurité — NOVELTRIA
**Agent** : Quality Assurance  
**Skills utilisés** : `design-accessibility-check`, `secure-form-inputs`  
**Date d'audit** : 19 Octobre 2026  
**Périmètre** : Les 6 pages du site `noveltria-project/website/` (`index.html`, `about.html`, `services.html`, `faq.html`, `blog.html`, `contact.html`)

---

## 1. Synthèse de l'Audit

| Critère de Contrôle | Norme Cible | Statut | Commentaire |
|---------------------|-------------|--------|-------------|
| **Accessibilité globale** | WCAG 2.2 Niveau AA | ✅ CONFORME | Structure sémantique HTML5 complète, contrastes validés, balises ARIA |
| **Navigation au Clavier** | Focus visible & Tabulation | ✅ CONFORME | Tous les boutons et liens ont un focus outline et un ordre de tabulation logique |
| **Conformité Juridique** | Mentions obligatoires | ✅ 100% CONFORME | Statut "Projet en cours de constitution" + Titre "Fondateur" sur toutes les pages |
| **Distinction Services** | Catégorie A vs Catégorie B | ✅ CONFORME | Aucune confusion entre intermédiation directe et coordination logistique |
| **Sécurité du Formulaire** | Protection Anti-Spam & Injection | ✅ CONFORME | Honeypot invisible `#website_hp` + Validation regex + Sanitisation des données |
| **Responsive Design** | 375px (Mobile) à 1440px (Desktop) | ✅ VALIDÉ | Menus burgers fonctionnels, flexbox wrap et grilles fluides sans débordement |

---

## 2. Détail des Vérifications d'Accessibilité (WCAG 2.2 AA)

1. **Hiérarchie des Titres** :
   - Chaque page dispose d'un **unique titre H1** identifiant clairement le sujet.
   - Les sous-sections s'enchaînent logiquement en H2, puis H3 sans saut de niveau.
2. **Attributs et Rôles ARIA** :
   - Le bouton burger dispose de `aria-label="Ouvrir le menu de navigation"` et `aria-expanded="false/true"`.
   - Les boutons d'accordéons FAQ disposent de `type="button"`, `aria-expanded` synchronisé dynamiquement via JavaScript.
   - La zone de message du formulaire de contact est annotée `role="alert"` et `aria-live="polite"` pour les lecteurs d'écran.
3. **Contrastes des Couleurs** :
   - Or Prestige `#C8A566` sur Bleu Marine `#0A2540` : Ratio > 4.8:1 (Conforme AA).
   - Blanc `#FFFFFF` sur Bleu Marine `#0A2540` : Ratio > 14:1 (Conforme AAA).
   - Gris anthracite `#4A5568` sur fond clair `#FFFFFF` : Ratio > 5.5:1 (Conforme AA).
4. **Attributs d'Images** :
   - Toutes les balises `<img>` disposent d'un attribut `alt` descriptif et contextualisé.
   - Chargement différé `loading="lazy"` activé sur les images sous la ligne de flottaison.

---

## 3. Sécurité du Formulaire de Contact (`contact.html`)

1. **Technique du Pot de Miel (Honeypot)** :
   - Présence d'un champ masqué en CSS (`.hp-field`) et désactivé de la navigation au clavier (`tabindex="-1"`).
   - Tout bot automatisé remplissant ce champ entraîne un rejet silencieux de la soumission sans polluer la base ni envoyer de spam.
2. **Validation Côté Client** :
   - Vérification du format strict de l'adresse email professionnelle via Regex RFC 5322 simplifié.
   - Contrôle de la longueur minimale du message (>= 20 caractères) pour prévenir les messages vides ou génériques.
   - Nettoyage automatique des espaces superflus (`trim()`).

---

## 4. Conclusion & Feu Vert de Mise en Ligne
Le site internet autonome NOVELTRIA International Trade Services répond rigoureusement à l'ensemble des standards de qualité, de sécurité et d'accessibilité exigés pour une institution d'affaires haut de gamme.
Le dossier est prêt pour validation client finale par Laurent Huiskens.
