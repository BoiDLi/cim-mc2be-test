# Page Bâtiment — refonte complète

L'onglet "Bâtiment" existe déjà (`/batiment`). Son contenu sera entièrement remplacé par la structure demandée, avec les images fournies.

## Structure de la page

1. **En-tête** — "Le CIM-MC²" / "Une infrastructure unique de 1 750 m² répartis sur 2 niveaux, dédiée à la collaboration entre cliniciens, chercheurs et industriels."

2. **Architecture & fonctions**
   - Espaces de recherche collectifs → lien vers l'offre d'infrastructures (`/offre#infra`)
   - Espaces privatifs : bureaux, salles propres, salle de prototypage et d'assemblage, …
   - Proximité immédiate de l'hôpital Marie-Curie, illustrée par les **2 plans d'implantation** fournis (plan de circulation et plan d'insertion paysagère), côte à côte.

3. **Espaces en location**
   - Rappel des espaces techniques partagés avec lien vers l'offre d'infrastructures
   - Une dizaine d'espaces à louer (bureaux, prototypage & salles propres privatifs, accès salles de réunion et espace convivial) pour spin-offs, centres de recherche et chercheurs
   - Places de co-working
   - **CTA** "Je souhaite réserver un espace à l'avance" → formulaire infrastructure (`/offre#infra-form`)
   - **CTA** "Je souhaite visiter le centre" → formulaire visite (`/offre#visite-form`)

4. **Phases du projet**
   - Phase 1 : construction (2026-2027)
   - Phase 2 : exploitation (à partir du 4e trimestre 2027)
   - Étapes clés franchies : octroi du permis, choix de l'entrepreneur, démarrage du chantier
   - **Image du planning** (frise octobre 2023 → sept. 2027) affichée en pleine largeur
   - Mention : normes environnementales en vigueur + panneaux solaires
   - **CTA** "Je souhaite être tenu au courant de l'avancement du projet et des opportunités d'hébergement" → formulaire (page contact / formulaire besoin)
   - **CTA** "Je souhaite visiter le site virtuellement" → vidéo du projet (lien netclick existant)

5. **Galerie chantier** — grille de photos avec légendes de date : 14/04/2026, 19/05/2026, 24/06/2026, à partir des 3 planches fournies.

6. **Carte** — la carte OpenStreetMap est déplacée en toute fin de page, avec l'adresse.

## Détails techniques

- Textes ajoutés dans `src/i18n/translations.ts` (FR + EN) sous la clé `building`.
- `src/routes/batiment.tsx` réécrit selon la structure ci-dessus, en conservant le style existant (PageHero, sections, cartes arrondies, accent corail).
- Les 6 images téléversées (2 plans d'implantation, 1 planning, 3 planches chantier) seront publiées sur le CDN Lovable via des pointeurs `.asset.json` et importées dans la page.
- Meta `head()` de la route mise à jour (titre, description, og).

## Point à confirmer

Le CTA "être tenu au courant de l'avancement" pointera vers le formulaire de contact existant, avec un objet pré-rempli — sauf si vous préférez un formulaire d'inscription dédié.
