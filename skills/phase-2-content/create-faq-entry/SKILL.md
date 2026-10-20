---
name: create-faq-entry
description: Rédiger une question-réponse pour la FAQ du site NOVELTRIA
type: skill
agent: copywriter
---

# Skill : Create FAQ Entry (Rédiger une entrée FAQ)

## Quand utiliser ce skill
- Quand une question fréquente est identifiée par le client ou l'équipe.
- Pour enrichir progressivement la page FAQ au fur et à mesure du lancement.
- Lors de la création de contenu récurrent destiné à répondre aux doutes courants sur l'import-export.

## Prérequis
- Lire `memory/project-context.md` et `memory/decisions.md`.
- Consulter la page FAQ existante pour maintenir la cohérence de ton et de structure.

## Structure standardisée d'une entrée FAQ

### 1. Titre de la question (Q)
**Format** : Phrase interrogative complète, naturelle, longue tail keyword-friendly.

**Exemples validés** :
- ✅ « Comment fonctionne le sourcing de fournisseurs internationaux ? »
- ✅ « Qu'est-ce qu'un mandat de négociation commerciale ? »
- ✅ « Quels sont les avantages de passer par un intermédiaire en import-export ? »
- ❌ « Sourcing ? » (trop vague)

### 2. Réponse (A)
**Longueur** : 150-300 mots pour équilibrer clarté et exhaustivité.
**Structure interne** :
1. Phrase d'ouverture : réponse directe et concise à la question.
2. Contexte ou explication détaillée (2-3 paragraphes).
3. Exemple concret si pertinent.
4. Lien vers une page ou service NOVELTRIA si applicable.

**Exemple complet** :

**Q : Comment fonctionne le service de sourcing chez NOVELTRIA ?**

> A : Le sourcing international est une recherche rigoureuse de fournisseurs qualifiés répondant à vos besoins techniques et tarifaires spécifiques.
>
> Chez NOVELTRIA, le processus comprend trois étapes :
> 1. **Analyse de votre besoin** : Nous comprenons vos exigences (quantités, délais, certifications).
> 2. **Identification de fournisseurs candidats** : Nous prospectent notre réseau et scrutent les marchés ciblés.
> 3. **Évaluation et présentation** : Nous vous présentons les meilleurs candidats avec devis comparatifs.
>
> Exemple : Pour sourcer des composants électroniques en Asie, NOVELTRIA identifie 5-10 fournisseurs certifiés, les évalue sur qualité/prix/délai, puis vous présente un classement détaillé.
>
> [Découvrir notre service de sourcing →](services.html)

## Catégories standard de FAQ pour NOVELTRIA

### Bloc 1 : Compréhension générale
- Qu'est-ce que l'intermédiation commerciale ?
- Quels sont les avantages de faire appel à un courtier import-export ?
- Comment NOVELTRIA peut-elle m'aider à exporter ?
- Quelles sont les différences entre sourcing et import ?

### Bloc 2 : Services & Processus
- Comment fonctionne le sourcing de fournisseurs ?
- Qu'est-ce qu'un mandat de négociation commerciale ?
- Quels services complémentaires offrez-vous (transport, douane, assurance) ?
- Comment confirmez-vous la qualité des fournisseurs ?

### Bloc 3 : Secteurs & Marchés
- Dans quels secteurs êtes-vous spécialisés ?
- Pouvez-vous m'aider pour l'import de textile ?
- Quelles régions couvrez-vous pour le sourcing de composants électroniques ?

### Bloc 4 : Processus & Engagement
- Quel est le coût d'un service de sourcing ?
- Combien de temps faut-il pour trouver un fournisseur ?
- Comment se formalise votre engagement (mandat, contrat) ?

### Bloc 5 : Conformité & Transparence
- NOVELTRIA est-elle une société constituée ?
- Qui puis-je contacter pour plus d'informations ?

## Règles obligatoires pour NOVELTRIA

⚠️ **Statut juridique** :
- Si la question porte sur le statut, répondre : « NOVELTRIA International Trade Services est un projet en cours de constitution. »
- Ne jamais mentir ou masquer cette information.

⚠️ **Distinction services A/B** :
- Si la réponse mentionne les services, clarifier :
  - Services directs (Catégorie A) : sourcing, débouchés, négociation (affirmation claire).
  - Services complémentaires (Catégorie B) : accompagnement au cas par cas, mise en relation avec partenaires.

⚠️ **Ton** :
- Professionnel, rassurant, expert.
- Pas de promesses exagérées ou invérifiables.
- Accessibilité : expliquer le jargon commercial pour les débutants.

## Checklist avant publication

- [ ] La question est formulée naturellement (comme un utilisateur réel la poserait).
- [ ] La réponse est concise (150-300 mots) et répond directement à la question.
- [ ] Le ton respecte la charte (professionnel, rassurant, expert).
- [ ] Aucune fausse promesse ou affirmation invérifiable.
- [ ] Les termes techniques sont expliqués.
- [ ] Les liens internes (si présents) pointent vers des pages existantes.
- [ ] La mention légale est incluse si pertinent.

## Sorties attendues

1. **Fichier markdown** : `faq-entry-[question-id].md` contenant Q et A structurées.
2. **Validation SEO** : Long-tail keywords repérés dans la question.
3. **Intégration** : Prêt à être inséré dans la page FAQ finale.
