import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Building2, Gift, Scroll, Shield, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/soutenir")({
  head: () => ({
    meta: [
      { title: "Nous soutenir — CIM-MC²" },
      {
        name: "description",
        content:
          "Soutenez l'innovation médicale du CIM-MC² : dons, mécénat d'entreprise, contributions en nature et legs.",
      },
      { property: "og:title", content: "Nous soutenir — CIM-MC²" },
    ],
  }),
  component: SupportPage,
});

const WAY_ICONS = [Heart, Building2, Gift, Scroll];

function SupportPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero kicker="08" title={t.support.title} subtitle={t.support.subtitle} />

      {/* WHY */}
      <section className="py-24">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-display italic text-coral text-lg">— Notre mission</p>
            <h2 className="mt-2 font-display text-4xl">{t.support.whyTitle}</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-foreground/85 leading-relaxed">{t.support.whyBody}</p>
          </div>
        </div>
      </section>

      {/* WAYS */}
      <section className="py-16 bg-secondary/40">
        <div className="container-narrow">
          <h2 className="font-display text-4xl mb-12">{t.support.waysTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.support.ways.map((w, i) => {
              const Icon = WAY_ICONS[i];
              return (
                <article
                  key={w.t}
                  className="group bg-card rounded-3xl p-7 border border-border hover:border-coral/40 hover:-translate-y-1 hover:shadow-elegant transition-smooth"
                >
                  <div className="h-12 w-12 rounded-2xl bg-coral/10 text-coral grid place-items-center group-hover:bg-coral group-hover:text-coral-foreground transition-smooth">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-primary">{w.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-24">
        <div className="container-narrow grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-coral" />
              <p className="font-display italic text-coral text-lg">— Engagement</p>
            </div>
            <h2 className="mt-2 font-display text-4xl">{t.support.commitTitle}</h2>
            <p className="mt-4 text-lg text-foreground/85 leading-relaxed">{t.support.commitBody}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-primary text-primary-foreground p-10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-coral/30 blur-2xl" />
              <p className="relative font-display text-6xl text-coral">100%</p>
              <p className="relative mt-3 font-display text-xl text-cream">
                des dons affectés à la recherche & aux infrastructures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="rounded-3xl bg-gradient-coral text-coral-foreground p-10 md:p-14 relative overflow-hidden shadow-coral">
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cream/15 blur-3xl" />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <h3 className="font-display text-3xl md:text-4xl text-cream">
                  Engagez-vous à nos côtés
                </h3>
                <p className="mt-3 text-cream/85 max-w-xl">
                  Chaque contribution accélère la mise au point de dispositifs médicaux qui sauvent
                  et améliorent des vies.
                </p>
              </div>
              <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
                <a
                  href="https://michelcremerfoundation.eu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cream text-coral px-7 py-4 font-medium hover:scale-[1.03] transition-smooth"
                >
                  <Heart className="h-4 w-4" />
                  {t.support.donate}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cream/15 ring-1 ring-cream/30 backdrop-blur text-cream px-7 py-4 font-medium hover:bg-cream/25 transition-smooth"
                >
                  {t.support.partner}
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
