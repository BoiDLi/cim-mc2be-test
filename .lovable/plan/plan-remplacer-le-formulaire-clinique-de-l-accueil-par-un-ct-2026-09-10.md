# Plan : remplacer le formulaire clinique de l'accueil par un CTA vers une page dédiée

## Objectif
Sur la page d'accueil (`/`), remplacer la section formulaire « Vous avez un besoin clinique ? » par un bouton d'action qui pointe vers une page dédiée (`/besoin-clinique`). Le formulaire détaillé ne doit plus apparaître sur la page principale.

## État confirmé
- `src/routes/index.tsx` importe et affiche `<ClinicalNeed />` en bas de page (ligne 226).
- `src/components/site/ClinicalNeed.tsx` contient le formulaire complet avec validation, routage par domaine et message de remerciement.
- `src/i18n/translations.ts` possède déjà les textes `clinicalNeed.*` utilisés par le composant.
- Aucune route `/besoin-clinique` n'existe actuellement.

## Travail à réaliser

1. **Créer la page dédiée**
   - Ajouter `src/routes/besoin-clinique.tsx` avec `createFileRoute("/besoin-clinique")`.
   - Le composant de la route réutilise directement `<ClinicalNeed />`.
   - Ajouter les métadonnées `head()` : titre, description, og:title, og:description, og:type, twitter:card.

2. **Transformer l'accueil en CTA**
   - Dans `src/routes/index.tsx` :
     - Supprimer l'import et l'appel `<ClinicalNeed />`.
     - Remplacer la section par une nouvelle section « Espace cliniciens » compacte : kicker, titre, 2-3 bullets et un bouton `<Link to="/besoin-clinique">`.
   - Le style suit le design existant (fond `bg-secondary/40`, typographie `font-display`, bouton principal arrondi).

3. **Ajouter les textes i18n**
   - Dans `src/i18n/translations.ts`, ajouter un bloc `home.clinicalCta` (FR et EN) avec :
     - `kicker`, `title`, `body`, `bullets[]`, `cta`.
   - Réutiliser autant que possible les textes existants de `clinicalNeed` pour éviter la duplication.

4. **Vérifications**
   - Laisser TanStack Router régénérer `src/routeTree.gen.ts` automatiquement.
   - Vérifier que le typecheck passe et que `Link to="/besoin-clinique"` est reconnu.
   - Contrôler visuellement que le formulaire a disparu de l'accueil et que le bouton mène bien à la nouvelle page.

## Livrables
- `src/routes/besoin-clinique.tsx` (nouveau)
- `src/routes/index.tsx` (modifié)
- `src/i18n/translations.ts` (modifié)
