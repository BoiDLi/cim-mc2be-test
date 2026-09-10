import { createFileRoute } from "@tanstack/react-router";
import { ClinicalNeed } from "@/components/site/ClinicalNeed";

export const Route = createFileRoute("/besoin-clinique")({
  head: () => ({
    meta: [
      { title: "Vous avez un besoin clinique ? — CIM-MC²" },
      { name: "description", content: "Décrivez votre besoin clinique. L'équipe du CIM-MC² vous oriente vers le bon référent sous 5 jours ouvrés." },
      { property: "og:title", content: "Vous avez un besoin clinique ? — CIM-MC²" },
      { property: "og:description", content: "Décrivez votre besoin clinique. L'équipe du CIM-MC² vous oriente vers le bon référent sous 5 jours ouvrés." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cim-mc2be-test.lovable.app/besoin-clinique" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://cim-mc2be-test.lovable.app/besoin-clinique" },
    ],
  }),
  component: ClinicalNeedPage,
});

function ClinicalNeedPage() {
  return (
    <main className="pt-32 pb-24">
      <ClinicalNeed />
    </main>
  );
}
