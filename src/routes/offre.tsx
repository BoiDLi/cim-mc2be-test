import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Lightbulb,
  Users2,
  Wrench,
  FlaskConical,
  FileCheck,
  Factory,
  Rocket,
  ArrowRight,
  Briefcase,
  Building2,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";
import clinicalImg from "@/assets/clinical.jpg";

export const Route = createFileRoute("/offre")({
  head: () => ({
    meta: [
      { title: "Offre — Services & espaces du CIM-MC²" },
      {
        name: "description",
        content:
          "Offre de services (conseil, études cliniques, prototypage, réglementaire) et offre d'espaces (coworking, bureaux, salles de réunion, transmission de cas cliniques) du CIM-MC².",
      },
      { property: "og:title", content: "Offre — CIM-MC²" },
    ],
  }),
  component: OfferPage,
});

const STEP_ICONS = [Lightbulb, Users2, Wrench, FlaskConical, FileCheck, Factory, Rocket];

function OfferPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero kicker="03" title={t.offer.title} subtitle={t.offer.subtitle} />

      {/* SUB-NAV : deux piliers de l'offre */}
      <section className="py-12 border-b border-border">
        <div className="container-narrow grid sm:grid-cols-2 gap-4">
          <a
            href="#services"
            className="group flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-coral/50 hover:shadow-soft transition-smooth"
          >
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center group-hover:bg-coral group-hover:text-coral-foreground transition-smooth">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs text-coral">A</p>
              <h3 className="font-display text-xl text-primary">{t.offer.servicesBlockTitle}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.offer.servicesBlockIntro}</p>
            </div>
          </a>
          <a
            href="#espaces"
            className="group flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-coral/50 hover:shadow-soft transition-smooth"
          >
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center group-hover:bg-coral group-hover:text-coral-foreground transition-smooth">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs text-coral">B</p>
              <h3 className="font-display text-xl text-primary">{t.offer.spacesBlockTitle}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.offer.spacesBlockIntro}</p>
            </div>
          </a>
        </div>
      </section>

      {/* ============ A — OFFRE DE SERVICES ============ */}
      <section id="services" className="py-24 scroll-mt-24">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— A · Services</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">{t.offer.servicesBlockTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80 leading-relaxed">
            {t.offer.servicesBlockIntro}
          </p>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="font-display italic text-coral text-lg">— Méthodologie</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">{t.offer.methodTitle}</h2>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">{t.offer.methodBody}</p>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {t.offer.steps.map((s, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div
                  key={s}
                  className="relative bg-card rounded-2xl p-5 border border-border hover:border-coral/50 hover:shadow-soft transition-smooth"
                >
                  <div className="flex items-start justify-between">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary grid place-items-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] text-coral">0{i + 1}</span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-primary leading-snug">{s}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES — I. CIM-MC² */}
      <section className="py-24 bg-secondary/40">
        <div className="container-narrow">
          <div className="max-w-3xl mb-12">
            <p className="font-display italic text-coral text-lg">— I · Services CIM-MC²</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">{t.offer.servicesTitle}</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t.offer.servicesIntro}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.offer.services.map((s, i) => (
              <article
                key={s.t}
                className="group bg-card rounded-2xl p-7 border border-border hover:border-coral/40 hover:-translate-y-1 transition-smooth"
              >
                <span className="font-mono text-xs text-coral">I.0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — II. Écosystème */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="max-w-3xl mb-12">
            <p className="font-display italic text-coral text-lg">— II · Services écosystème</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">
              {t.offer.partnerServicesTitle}
            </h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              {t.offer.partnerServicesIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.offer.partnerServices.map((s, i) => (
              <article
                key={s.t}
                className="group bg-card rounded-2xl p-7 border border-dashed border-border hover:border-coral/40 hover:-translate-y-1 transition-smooth"
              >
                <span className="font-mono text-xs text-coral">II.0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* INFRASTRUCTURES (rattachées aux services) */}
      <section className="py-24">
        <div className="container-narrow grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={clinicalImg}
                alt="Salle d'opération moderne vue à travers une vitre d'observation"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="font-display italic text-coral text-lg">— Infrastructures techniques</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">{t.offer.infraTitle}</h2>
            <p className="mt-4 text-foreground/80">{t.offer.infraBody}</p>
            <ul className="mt-8 space-y-4">
              {t.offer.infrastructures.map((s, i) => (
                <li key={s} className="flex gap-4 items-start group">
                  <span className="shrink-0 h-8 w-8 rounded-full border-2 border-coral grid place-items-center text-coral font-mono text-xs group-hover:bg-coral group-hover:text-coral-foreground transition-smooth">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-foreground/85">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ B — OFFRE D'ESPACES ============ */}
      <section
        id="espaces"
        className="py-24 bg-primary text-primary-foreground relative overflow-hidden scroll-mt-24"
      >
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute inset-0 grain" />
        <div className="relative container-narrow">
          <p className="font-display italic text-coral text-lg">— B · Espaces</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-cream">
            {t.offer.spacesBlockTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-cream/80 leading-relaxed">
            {t.offer.spacesBlockIntro}
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.offer.spaces.map((s, i) => (
              <div
                key={s.t}
                className="rounded-2xl border border-cream/15 p-6 hover:bg-cream/5 transition-smooth"
              >
                <p className="font-mono text-xs text-coral">0{i + 1}</p>
                <h3 className="mt-3 font-display text-lg text-cream">{s.t}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-7 py-4 font-medium shadow-coral hover:scale-[1.03] transition-smooth"
            >
              {t.offer.spacesCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
