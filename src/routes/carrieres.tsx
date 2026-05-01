import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Sparkles, ArrowRight, Users2, Handshake } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/carrieres")({
  head: () => ({
    meta: [
      { title: "Rejoindre l'écosystème — CIM-MC²" },
      {
        name: "description",
        content:
          "Devenez partenaire résident ou rejoignez les équipes du CIM-MC² — innovation médicale au cœur de Charleroi.",
      },
      { property: "og:title", content: "Rejoindre l'écosystème — CIM-MC²" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const { t } = useLang();
  const c = t.careers;

  return (
    <>
      <PageHero kicker="06" title={c.title} subtitle={c.subtitle} />

      {/* SUB-NAV */}
      <section className="py-12 border-b border-border">
        <div className="container-narrow grid sm:grid-cols-2 gap-4">
          <a
            href="#partenaires"
            className="group flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-coral/50 hover:shadow-soft transition-smooth"
          >
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center group-hover:bg-coral group-hover:text-coral-foreground transition-smooth">
              <Handshake className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs text-coral">I</p>
              <h3 className="font-display text-xl text-primary">{c.partnersTitle}</h3>
            </div>
          </a>
          <a
            href="#carrieres"
            className="group flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-coral/50 hover:shadow-soft transition-smooth"
          >
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center group-hover:bg-coral group-hover:text-coral-foreground transition-smooth">
              <Users2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs text-coral">II</p>
              <h3 className="font-display text-xl text-primary">{c.careersTitle}</h3>
            </div>
          </a>
        </div>
      </section>

      {/* I — PARTENAIRES */}
      <section id="partenaires" className="py-24 scroll-mt-24">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— {c.partnersKicker}</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">{c.partnersTitle}</h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg text-foreground/85 leading-relaxed">
            <p>{c.partnersIntro}</p>
            <p>{c.partnersBody}</p>
          </div>

          {/* Why */}
          <div className="mt-14 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-display italic text-coral text-lg">— Avantages</p>
              <h3 className="mt-2 font-display text-3xl">{c.partnersWhyTitle}</h3>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {c.partnersWhy.map((w, i) => (
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

          {/* Modalités */}
          <div className="mt-16 rounded-3xl bg-secondary/40 border border-border p-8 md:p-10">
            <h3 className="font-display text-2xl text-primary">{c.partnersModalitiesTitle}</h3>
            <p className="mt-3 text-foreground/80 leading-relaxed">{c.partnersModalitiesBody}</p>
          </div>

          {/* Join CTA */}
          <div className="mt-12 rounded-3xl bg-gradient-coral text-coral-foreground p-10 md:p-14 relative overflow-hidden shadow-coral">
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cream/15 blur-3xl" />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="font-display text-3xl md:text-4xl text-cream">
                  {c.partnersJoinTitle}
                </h3>
                <p className="mt-4 text-cream/85 max-w-xl">{c.partnersJoinBody}</p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cream text-coral px-7 py-4 font-medium hover:scale-[1.03] transition-smooth"
                >
                  {c.partnersCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* II — CARRIÈRES */}
      <section id="carrieres" className="py-24 scroll-mt-24 bg-secondary/40 border-t border-border">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— {c.careersKicker}</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">{c.careersTitle}</h2>
          <p className="mt-6 max-w-3xl text-lg text-foreground/85 leading-relaxed">
            {c.careersIntro}
          </p>

          {/* Why */}
          <div className="mt-14 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-display italic text-coral text-lg">— Rejoignez-nous</p>
              <h3 className="mt-2 font-display text-3xl">{c.whyTitle}</h3>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {c.why.map((w, i) => (
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

          {/* Open positions */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-5 w-5 text-coral" />
              <h3 className="font-display text-3xl">{c.openTitle}</h3>
            </div>
            <div className="bg-card rounded-3xl p-12 border border-dashed border-border text-center">
              <p className="font-display text-2xl text-primary">·</p>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {c.openPlaceholder}
              </p>
            </div>
          </div>

          {/* Spontaneous */}
          <div className="mt-12 rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="font-display text-3xl md:text-4xl text-cream">
                  {c.spontaneousTitle}
                </h3>
                <p className="mt-4 text-cream/85 max-w-xl">{c.spontaneousBody}</p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-7 py-4 font-medium shadow-coral hover:scale-[1.03] transition-smooth"
                >
                  {c.cta}
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
