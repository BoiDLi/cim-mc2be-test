import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/carrieres")({
  head: () => ({
    meta: [
      { title: "Carrières — Rejoindre le CIM-MC²" },
      {
        name: "description",
        content:
          "Postes ouverts et candidatures spontanées au CIM-MC² — innovation médicale au cœur de Charleroi.",
      },
      { property: "og:title", content: "Carrières — CIM-MC²" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero kicker="06" title={t.careers.title} subtitle={t.careers.subtitle} />

      {/* WHY */}
      <section className="py-24">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-display italic text-coral text-lg">— Rejoignez-nous</p>
            <h2 className="mt-2 font-display text-4xl">{t.careers.whyTitle}</h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-5">
              {t.careers.why.map((w, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="shrink-0 h-9 w-9 rounded-xl bg-coral/10 text-coral grid place-items-center">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <p className="pt-1.5 text-foreground/85 text-lg leading-relaxed">{w}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-16 bg-secondary/40">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-5 w-5 text-coral" />
            <h2 className="font-display text-3xl">{t.careers.openTitle}</h2>
          </div>

          <div className="bg-card rounded-3xl p-12 border border-dashed border-border text-center">
            <p className="font-display text-2xl text-primary">·</p>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              {t.careers.openPlaceholder}
            </p>
          </div>
        </div>
      </section>

      {/* SPONTANEOUS */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="rounded-3xl bg-gradient-coral text-coral-foreground p-10 md:p-14 relative overflow-hidden shadow-coral">
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cream/15 blur-3xl" />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="font-display text-3xl md:text-4xl text-cream">
                  {t.careers.spontaneousTitle}
                </h3>
                <p className="mt-4 text-cream/85 max-w-xl">{t.careers.spontaneousBody}</p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cream text-coral px-7 py-4 font-medium hover:scale-[1.03] transition-smooth"
                >
                  {t.careers.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
