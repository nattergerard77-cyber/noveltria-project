---
name: seo-optimize-content
description: Optimiser le contenu textuel pour le référencement naturel (mots-clés, balises, structure)
type: skill
agent: seo-specialist
---

# Skill : SEO Optimize Content (Optimisation SEO du contenu)

## Quand utiliser ce skill
- Après rédaction d'une page par le Copywriter.
- Avant intégration du contenu dans le HTML par le Web Developer.
- Pour enrichir les meta-descriptions, title tags, et balises d'en-tête.

## Prérequis
- Le contenu textuel brut doit être disponible (fichier markdown ou texte).
- Lire `memory/project-context.md` pour comprendre les secteurs et services.
- Consulter `skills/phase-1-design/design-research/SKILL.md` pour les mots-clés identifiés.

## Étape 1 : Audit des mots-clés cibles

Avant de rédiger ou optimiser, établir une **liste de mots-clés prioritaires** pour la page.

### Mots-clés principaux pour NOVELTRIA
- **Courtage import-export**
- **Sourcing international fournisseurs**
- **Négociation commerciale internationale**
- **Recherche débouchés export**
- **Intermédiaire commerce international**
- **Accompagnement import textile, électronique, matériaux**
- **Transitaire, dédouanement, transport international**

### Mots-clés par page
| Page | Mots-clés principaux |
|------|----------------------|
| Accueil | courtage import-export, sourcing fournisseurs, partenaire commerce international |
| À propos | fondateur Laurent Huiskens, projet intermédiation, rigueur commerce |
| Services | sourcing, débouchés, négociation commerciale, accompagnement logistique |
| FAQ | comment fonctionne import-export, qu'est-ce qu'un mandat commercial, incoterms |
| Actualités | tendances import-export, sourcing textile, réglementation douane |

## Étape 2 : Optimisation des balises HTML (title & meta-description)

### Balise `<title>`
**Règle** : 50-60 caractères, structure « Sujet + Marque ».

**Exemples validés** :
- ✅ Sourcing & Intermédiation Import-Export | NOVELTRIA (56 char)
- ✅ Services de Courtage International | NOVELTRIA (45 char)
- ❌ Page d'accueil NOVELTRIA (trop vague)

### Meta-description
**Règle** : 150-160 caractères, phrase complète, appel à l'action si possible.

**Exemple** :
```html
<meta name="description" content="NOVELTRIA accompagne votre stratégie d'import-export : sourcing de fournisseurs, recherche de débouchés, négociation commerciale internationale. Partenaire de confiance en commerce B2B.">
```

## Étape 3 : Optimisation de la structure interne (H1, H2, H3)

### Règle : Une hiérarchie claire avec mots-clés pertinents

**Page Services — Exemple** :
```
<h1>Nos Services d'Intermédiation Commerciale Internationale</h1>
  <h2>Sourcing et Recherche de Fournisseurs Qualifiés</h2>
    <h3>Identification et Évaluation Rigoureuse</h3>
  <h2>Recherche d'Acheteurs et Débouchés Commerciaux</h2>
    <h3>Prospection Ciblée & Validation de Marchés</h3>
  <h2>Négociation et Intermédiation Commerciale</h2>
    <h3>Mandats Formalisés & Sécurité Juridique</h3>
```

## Étape 4 : Intégration naturelle des mots-clés dans le corps de texte

### Densité de mots-clés : 1-2% du texte total
- Texte de 300 mots → 3-6 occurrences du mot-clé principal.
- Répartition : titre (1x), introduction (1x), corps (2-3x), conclusion (1x).

**BON** :
> « NOVELTRIA facilite le sourcing de fournisseurs internationaux en identifiant des partenaires rigoureux dans le textile, l'électronique et les matériaux. Notre service de sourcing combine analyse approfondie et négociation commerciale. »

**MAUVAIS** (keyword stuffing) :
> « Sourcing sourcing sourcing. Le sourcing international de fournisseurs pour sourcing. Sourcing textile sourcing. »

## Étape 5 : Attributs d'accessibilité et richesse sémantique

### Balises sémantiques encourageant le SEO
- `<strong>` pour mettre en avant les concepts-clés (pas `<b>`).
- Listes à puces (`<ul>`) plutôt que texte continu pour énumérer les services.
- Structure logique avec `<section>` et rôles ARIA si nécessaire.

## Étape 6 : Données structurées (JSON-LD)

Pour les pages de services ou de FAQ, intégrer un schéma JSON-LD :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NOVELTRIA International Trade Services",
  "description": "Intermédiation commerciale, sourcing, et courtage international.",
  "url": "https://noveltria.com",
  "telephone": "+33 (à confirmer)",
  "areaServed": ["FR", "EU"],
  "serviceType": ["Import-Export", "Sourcing", "Négociation commerciale"]
}
</script>
```

## Checklist avant livraison au Web Developer

- [ ] Le title tag (50-60 char) contient le mot-clé principal.
- [ ] La meta-description (150-160 char) est accrocheuse et actionnable.
- [ ] Hiérarchie H1 > H2 > H3 respectée (un seul H1).
- [ ] Mots-clés intégrés naturellement (1-2% densité).
- [ ] Aucun keyword stuffing détecté.
- [ ] Attributs alt sur les images sont descriptifs et contiennent les mots-clés si pertinent.
- [ ] Les liens internes utilisent des ancres explicites (« nos services » plutôt que « cliquez ici »).
- [ ] Les schémas JSON-LD sont valides (test avec https://validator.schema.org).

## Sorties attendues

1. **Fichier markdown enrichi** : Contenu original + annotations SEO (title, meta, mots-clés repérés).
2. **Validation Quality Assurance** : Vérification de la cohérence et de l'absence d'erreurs.
3. **Transmission au Web Developer** : Prêt pour l'intégration HTML.
