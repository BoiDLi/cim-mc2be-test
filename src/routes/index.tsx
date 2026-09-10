import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Users,
  Microscope,
  Rocket,
  Calendar,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { SdgIcon } from "@/components/site/SdgIcon";
import heroImg from "@/assets/cim-hero-endoscopy.jpg";
import prototypingImg from "@/assets/cim-max-alix.png";
import sdg1 from "@/assets/sdg/sdg-1.png";
import sdg3 from "@/assets/sdg/sdg-3.png";
import sdg4 from "@/assets/sdg/sdg-4.png";
import sdg5 from "@/assets/sdg/sdg-5.png";
import sdg9 from "@/assets/sdg/sdg-9.png";
import sdg10 from "@/assets/sdg/sdg-10.jpg";
import sdg17 from "@/assets/sdg/sdg-17.png";

const SDG_IMG: Record<number, string> = {
  1: sdg1, 3: sdg3, 4: sdg4, 5: sdg5, 9: sdg9, 10: sdg10, 17: sdg17,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CIM-MC² — Du besoin clinique au patient" },
      { property: "og:title", content: "CIM-MC² — Du besoin clinique au patient" },
    ],
  }),
  component: HomePage,
});

const PILLAR_ICONS = [Sparkles, Microscope, Users, Rocket];

function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grain" />
        <div className="absolute -bottom-20 -right-20 h-[600px] w-[600px] rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute top-40 left-0 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />

        <div className="relative container-narrow grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-cream">
            <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 ring-1 ring-cream/20 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
              {t.home.kicker}
            </div>

            <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-cream">
              {t.home.title}
              <br />
              <span className="italic text-coral">{t.home.titleAccent}</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-cream/80 leading-relaxed">
              {t.home.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/offre"
                className="group inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-7 py-4 font-medium shadow-coral hover:scale-[1.03] transition-smooth"
              >
                {t.home.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cream/10 ring-1 ring-cream/20 backdrop-blur text-cream px-7 py-4 font-medium hover:bg-cream/15 transition-smooth"
              >
                {t.home.ctaSecondary}
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
              {[
                { n: "1 750 m²", l: "dédiés à l'innovation médicale" },
                { n: "+25 ans", l: "d'expertise medtech engineering" },
                { n: "50 m", l: "du labo à l'hôpital" },
                { n: "5+", l: "partenaires académiques" },
                { n: "2027", l: "ouverture du bâtiment" },
                { n: "TRL 4→9", l: "maturation de projets" },
              ].map((s) => (
                <div key={s.n} className="border-l-2 border-coral pl-4">
                  <p className="font-display text-3xl text-cream">{s.n}</p>
                  <p className="text-xs text-cream/60 mt-1 uppercase tracking-wider">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Équipe médicale du CIM autour d'un patient en salle d'endoscopie"
                className="absolute inset-0 h-full w-full object-cover"
                width={1230}
                height={1843}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cream rounded-2xl p-5 shadow-elegant max-w-[240px]">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-coral">
                Co-création
              </p>
              <p className="mt-2 text-sm text-primary leading-snug">
                Médecins & ingénieurs, autour d'un même prototype.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT */}
      <section className="py-32">
        <div className="container-narrow grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="font-display italic text-coral text-lg">— 01</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">{t.home.whatTitle}</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>{t.home.whatBody}</p>
            <p>{t.home.whatBody2}</p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-secondary/40">
        <div className="container-narrow">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <p className="font-display italic text-coral text-lg">— 02</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">{t.home.pillarsTitle}</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.home.pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <article
                  key={p.t}
                  className="group relative bg-card rounded-3xl p-8 border border-border hover:border-coral/40 transition-smooth hover:shadow-elegant hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center group-hover:bg-coral transition-smooth">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-primary">{p.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OBJECTIVES with image */}
      <section className="py-32">
        <div className="container-narrow grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={prototypingImg}
                alt="Ingénieurs du CIM-MC² en train de prototyper un dispositif médical"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1600}
                height={900}
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="font-display italic text-coral text-lg">— 03</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">{t.home.objectivesTitle}</h2>
            <ul className="mt-10 space-y-5">
              {t.home.objectives.map((o, i) => (
                <li key={i} className="flex gap-5 group">
                  <span className="shrink-0 font-display text-3xl text-coral/60 group-hover:text-coral transition-smooth w-12">
                    0{i + 1}
                  </span>
                  <p className="pt-2 text-lg text-foreground/85 border-t border-border flex-1">
                    {o}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />
        <div className="relative container-narrow">
          <p className="font-display italic text-coral text-lg">— 04</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-cream">
            {t.home.audienceTitle}
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.home.audience.map((a, i) => (
              <div
                key={a.t}
                className="rounded-2xl border border-cream/15 p-6 hover:bg-cream/5 transition-smooth"
              >
                <p className="font-mono text-xs text-coral">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl text-cream">{a.t}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL NEED CTA */}
      <section className="py-24 bg-secondary/40">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-14 shadow-elegant">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-coral/10 blur-2xl" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-coral">
                  <Stethoscope className="h-3.5 w-3.5" />
                  {t.home.clinicalCta.kicker}
                </div>
                <h2 className="mt-4 font-display text-3xl md:text-4xl text-primary">
                  {t.home.clinicalCta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-foreground/80 leading-relaxed">
                  {t.home.clinicalCta.body}
                </p>
                <ul className="mt-6 space-y-2">
                  {t.home.clinicalCta.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-coral shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/besoin-clinique"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium shadow-soft hover:bg-primary-glow transition-smooth"
                >
                  {t.home.clinicalCta.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG */}
      <section className="py-24 bg-gradient-soft">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— 05</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">{t.home.sdg.title}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{t.home.sdg.intro}</p>

          <div className="mt-12">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-primary">
              {t.home.sdg.directTitle}
            </h3>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {t.home.sdg.direct.map((g) => (
                <SdgIcon key={g.n} src={SDG_IMG[g.n]} alt={`Objectif ${g.n} — ${g.t}`} highlighted />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-primary">
              {t.home.sdg.contribTitle}
            </h3>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {t.home.sdg.contrib.map((g) => (
                <SdgIcon key={g.n} src={SDG_IMG[g.n]} alt={`Objectif ${g.n} — ${g.t}`} />
              ))}
            </div>
          </div>

          <p className="mt-10 text-xs text-muted-foreground italic">{t.home.sdg.source}</p>
        </div>
      </section>

      {/* EVENTS TEASER */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-coral p-10 md:p-14 shadow-coral">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cream/15 blur-2xl" />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cream">
                  <Calendar className="h-3.5 w-3.5" />
                  {t.home.eventsTeaser.kicker}
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl text-cream">
                  {t.home.eventsTeaser.title}
                </h3>
                <p className="mt-3 text-cream/85 max-w-xl">{t.home.eventsTeaser.body}</p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/actualites"
                  className="inline-flex items-center gap-2 rounded-full bg-cream text-coral px-7 py-4 font-medium hover:scale-[1.03] transition-smooth"
                >
                  {t.home.eventsTeaser.cta}
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
