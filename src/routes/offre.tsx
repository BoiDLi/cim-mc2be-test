import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
} from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";
import { NeedForm } from "@/components/site/NeedForm";
import clinicalImg from "@/assets/cim-cleanroom-prototyping.jpg";
import buildingImg from "@/assets/cim-building-entrance.jpg";
import transmissionImg from "@/assets/cim-transmission-space.png";
import usabilityImg from "@/assets/cim-usability-room.jpg";

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
      {
        property: "og:description",
        content: "Services, expertises et infrastructures du CIM-MC² pour accélérer les projets Medtech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OfferPage,
});

function OfferPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero kicker={t.offer.hero.kicker} title={t.offer.hero.title}>
        <div className="mt-12 max-w-3xl">
          <p className="text-lg text-foreground/85 leading-relaxed">
            {t.offer.conclusionBody}
          </p>
          <ul className="mt-8 grid sm:grid-cols-3 gap-5">
            {t.offer.conclusionPoints.map((p, i) => (
              <li
                key={p}
                className="rounded-2xl bg-card/80 backdrop-blur border border-border p-7 hover:border-coral/40 hover:shadow-soft transition-smooth"
              >
                <span className="font-mono text-sm text-coral">0{i + 1}</span>
                <p className="mt-3 font-display text-xl md:text-2xl font-semibold text-primary leading-snug">
                  {p}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-foreground/80 leading-relaxed">
            {t.offer.conclusionFooter}
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary">
            {t.offer.hero.pathKicker}
          </h2>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
            {t.offer.hero.pathIntro}
          </p>
          <ol className="mt-8 space-y-4">
            {t.offer.hero.pathSteps.map((s, i) => (
              <li
                key={s.t}
                className="rounded-2xl bg-card/80 backdrop-blur border border-border p-6 hover:border-coral/50 hover:shadow-soft transition-smooth"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-coral">{i + 1}.</span>
                  <h3 className="font-display text-xl text-primary">{s.t}</h3>
                </div>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-foreground/75 leading-relaxed border-l-2 border-coral pl-5">
            {t.offer.hero.pathNote}
          </p>
        </div>

        <div className="mt-10 max-w-3xl space-y-4">
          <p className="text-foreground/80 leading-relaxed">{t.offer.hero.idea}</p>
          <p className="text-foreground/80 leading-relaxed">{t.offer.hero.support}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/deposer-projet"
            className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-8 py-4 text-lg font-medium shadow-coral hover:scale-[1.03] transition-smooth"
          >
            {t.offer.hero.ctaPrimary}
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-8 py-4 text-lg font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            {t.offer.hero.ctaSecondary}
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#infra-form"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-medium hover:scale-[1.03] transition-smooth"
          >
            {t.offer.ctaInfra}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </PageHero>

      {/* VALUE CHAIN SCHEMA */}
      <section className="py-20 border-b border-border">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— {t.offer.hero.chainKicker}</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">{t.offer.hero.chainTitle}</h2>
          <p className="mt-5 max-w-4xl text-lg text-foreground/80 leading-relaxed">
            {t.offer.intro}
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3">
            {t.offer.hero.chain.map((c, i) => (
              <div
                key={c.t}
                className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-coral/50 hover:shadow-soft transition-smooth"
              >
                <div className="bg-primary text-primary-foreground px-4 py-3">
                  <p className="font-mono text-[10px] text-coral">0{i + 1}</p>
                  <p className="font-display text-base leading-tight">{c.t}</p>
                </div>
                <ul className="p-4 space-y-2">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2 items-start">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-coral shrink-0" />
                      <span className="text-xs text-foreground/80 leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-foreground/75 italic border-l-2 border-coral pl-5">
            {t.offer.hero.chainNote}
          </p>
        </div>
      </section>

      {/* ============ A — OFFRE DE SERVICES ============ */}
      <section id="services" className="py-20 scroll-mt-24 border-b border-border">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— A · Services</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">{t.offer.servicesBlockTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80 leading-relaxed">
            {t.offer.servicesBlockIntro}
          </p>
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

          <div className="mt-14">
            <NeedForm
              id="service-form"
              kicker="Offre de services"
              title="Vous avez besoin d'un service ?"
              intro="Décrivez votre besoin en quelques lignes. Notre équipe vous oriente vers le bon référent du CIM-MC² sous 5 jours ouvrés."
              needLabel="Description du besoin"
              needPlaceholder="Décrivez le service ou l'accompagnement recherché…"
              topicsLabel="Quels services vous intéressent ?"
              topics={[
                "Conseils techniques",
                "Design industriel",
                "Préparation des essais cliniques",
                "Séminaire",
                "PI",
                "Aspects régulatoires et qualité",
                "Market development",
                "Autre",
              ]}
              mailSubject="Offre de services — CIM-MC²"
            />
          </div>
        </div>
      </section>

      {/* ============ B — OFFRE D'INFRASTRUCTURES ============ */}
      <section id="infrastructures" className="py-20 scroll-mt-24 border-y border-border">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— B · Infrastructures</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">{t.offer.spacesBlockTitle}</h2>
          <p className="mt-4 max-w-3xl text-lg text-foreground/80 leading-relaxed">
            {t.offer.spacesBlockIntro}
          </p>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src={clinicalImg}
                  alt="Technicien en salle blanche assemblant un dispositif médical"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-display italic text-coral text-lg">— B.1 · Espaces techniques</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">{t.offer.infraTitle}</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">{t.offer.infraBody}</p>

              <div className="mt-10 space-y-8">
                {t.offer.infraGroups.map((g, gi) => (
                  <div key={g.t} className="bg-card rounded-2xl p-6 border border-border">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-coral">3.{gi + 1}</span>
                      <h3 className="font-display text-xl text-primary">{g.t}</h3>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {g.items.map((it) => (
                        <li key={it} className="flex gap-3 items-start">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                          <p className="text-sm text-foreground/85 leading-relaxed">{it}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      <section
        id="espaces"
        className="py-24 bg-primary text-primary-foreground relative overflow-hidden scroll-mt-24"
      >
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute inset-0 grain" />
        <div className="relative container-narrow">
          <p className="font-display italic text-coral text-lg">— B.2 · Espaces de travail</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-cream">
            Bureaux, coworking et espaces collectifs
          </h2>

          <div className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
            <p className="lg:col-span-7 max-w-2xl text-lg text-cream/80 leading-relaxed">
              {t.offer.spacesBlockIntro}
            </p>
            <figure className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={buildingImg}
                alt="Entrée du bâtiment CIM-MC² — projet ARCHIPELAGO"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </figure>
          </div>

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

          {/* Visual gallery — transmission & usability */}
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            <figure className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={transmissionImg}
                alt="Espace de transmission de cas cliniques et R&D du CIM-MC²"
                className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
                width={1280}
                height={960}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-5">
                <p className="font-mono text-xs text-coral">Espace de transmission</p>
                <p className="font-display text-lg text-cream">Transmission de cas cliniques & R&D</p>
              </figcaption>
            </figure>
            <figure className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={usabilityImg}
                alt="Usability room du CIM-MC² pour tests d'utilisabilité de dispositifs médicaux"
                className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
                width={1280}
                height={960}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-5">
                <p className="font-mono text-xs text-coral">Usability room</p>
                <p className="font-display text-lg text-cream">Tests d'utilisabilité & validation</p>
              </figcaption>
            </figure>
          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="container-narrow">
          <NeedForm
            id="infra-form"
            kicker="Offre d'infrastructures"
            title="Vous avez besoin d'une infrastructure ?"
            intro="Indiquez les espaces ou équipements qui vous intéressent. Notre équipe revient vers vous sous 5 jours ouvrés."
            needLabel="Description du besoin d'infrastructure"
            needPlaceholder="Précisez vos besoins en espaces ou équipements…"
            topicsLabel="Quelles infrastructures vous intéressent ?"
            topics={[
              "Bureaux",
              "Salle propre",
              "Place de coworking",
              "Salle de réunion",
              "Salle de transmission des cas cliniques",
              "Accès aux espaces techniques",
              "Autre",
            ]}
            mailSubject="Offre d'infrastructures — CIM-MC²"
          />
        </div>
      </section>

    </>
  );
}
