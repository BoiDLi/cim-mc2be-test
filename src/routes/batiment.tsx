import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, PlayCircle, ArrowRight, Building2, Sun, CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";
import buildingImg from "@/assets/building-archipelago.jpg";
import plan1 from "@/assets/batiment/img-3.png.asset.json";
import plan2 from "@/assets/batiment/img-4.png.asset.json";
import planning from "@/assets/batiment/img-5.png.asset.json";
import site1 from "@/assets/batiment/img-8.png.asset.json";
import site2 from "@/assets/batiment/img-7.png.asset.json";
import site3 from "@/assets/batiment/img-6.png.asset.json";

const VIDEO_URL = "https://netclick.io/pixel/5NDJdvmjcR7UG9oC";

export const Route = createFileRoute("/batiment")({
  head: () => ({
    meta: [
      { title: "Le bâtiment — CIM-MC² Charleroi" },
      {
        name: "description",
        content:
          "1 750 m² sur 2 niveaux à proximité immédiate du CHU Hôpital Marie Curie : espaces de recherche collectifs, bureaux, salles propres et prototypage. Ouverture 4ᵉ trimestre 2027.",
      },
      { property: "og:title", content: "Le bâtiment — CIM-MC²" },
      {
        property: "og:description",
        content:
          "Une infrastructure unique de 1 750 m² dédiée à la collaboration entre cliniciens, chercheurs et industriels.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BuildingPage,
});

function BuildingPage() {
  const { t } = useLang();
  const b = t.building;

  return (
    <>
      <PageHero kicker="05" title={b.title} subtitle={b.subtitle} />

      {/* HERO VIDEO */}
      <section className="pb-16">
        <div className="container-narrow">
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block aspect-[16/9] rounded-3xl bg-gradient-hero relative overflow-hidden shadow-elegant"
            aria-label={b.videoTitle}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-60 transition-smooth"
              style={{ backgroundImage: `url(${buildingImg})` }}
            />
            <div className="absolute inset-0 grain" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-grid h-20 w-20 place-items-center rounded-full bg-cream/10 ring-1 ring-cream/30 backdrop-blur group-hover:bg-coral group-hover:scale-110 transition-smooth">
                <PlayCircle className="h-10 w-10 text-cream" />
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
              <p className="font-display italic text-coral text-sm">Projet ARCHIPELAGO</p>
              <p className="font-display text-2xl md:text-3xl text-cream max-w-xl">
                Charleroi — à proximité immédiate du CHU Marie Curie
              </p>
              <p className="mt-2 text-xs text-cream/70">{b.videoNote}</p>
            </div>
          </a>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-16">
        <div className="container-narrow">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-coral" />
            <p className="font-display italic text-coral text-lg">— Conception</p>
          </div>
          <h2 className="mt-2 font-display text-4xl max-w-2xl">{b.archTitle}</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl">{b.archCollectiveLabel}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{b.archCollectiveBody}</p>
              <Link
                to="/offre"
                hash="espaces"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-coral hover:gap-3 transition-smooth"
              >
                {b.archCollectiveLink}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl">{b.archPrivateLabel}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{b.archPrivateBody}</p>
            </div>
          </div>

          {/* PROXIMITY + PLANS */}
          <div className="mt-14">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 text-coral shrink-0" />
              <div>
                <h3 className="font-display text-3xl">{b.archProximityLabel}</h3>
                <p className="mt-2 text-foreground/80 leading-relaxed max-w-2xl">
                  {b.archProximityBody}
                </p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                { src: plan1.url, caption: b.plan1Caption },
                { src: plan2.url, caption: b.plan2Caption },
              ].map((p) => (
                <figure key={p.src} className="rounded-3xl overflow-hidden border border-border bg-card">
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="w-full h-auto object-cover bg-background"
                  />
                  <figcaption className="px-5 py-4 text-sm text-muted-foreground">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RENTAL SPACES */}
      <section className="py-16 bg-secondary/40">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-display italic text-coral text-lg">— Location</p>
            <h2 className="mt-2 font-display text-4xl">{b.rentTitle}</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">{b.rentIntro}</p>
            <Link
              to="/offre"
              hash="espaces"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-coral hover:gap-3 transition-smooth"
            >
              {b.rentLink}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {b.rentItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-card border border-border p-6"
                >
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-coral shrink-0" />
                  <span className="text-foreground/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/offre"
                hash="infra-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-coral-foreground font-medium shadow-coral hover:scale-[1.03] transition-smooth"
              >
                {b.ctaReserve}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/offre"
                hash="visite-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 font-medium hover:bg-primary/5 transition-smooth"
              >
                {b.ctaVisit}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHASES & PLANNING */}
      <section className="py-20">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— Calendrier</p>
          <h2 className="mt-2 font-display text-4xl">{b.phasesTitle}</h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {b.phases.map((p) => (
              <div key={p.n} className="rounded-3xl border border-border bg-card p-8">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-coral">
                  {p.n}
                </span>
                <h3 className="mt-3 font-display text-3xl">{p.t}</h3>
                <p className="mt-1 text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl">{b.milestonesTitle}</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {b.milestones.map((m) => (
                <li
                  key={m}
                  className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-coral" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <figure className="mt-10 rounded-3xl overflow-hidden border border-border bg-card p-4 md:p-8">
            <img
              src={planning.url}
              alt={b.planningCaption}
              loading="lazy"
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-sm text-muted-foreground">
              {b.planningCaption}
            </figcaption>
          </figure>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-secondary/50 border border-border p-6">
            <Sun className="h-5 w-5 mt-0.5 text-coral shrink-0" />
            <p className="text-foreground/85 leading-relaxed">{b.envNote}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral text-coral-foreground font-medium shadow-coral hover:scale-[1.03] transition-smooth"
            >
              {b.ctaNews}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 font-medium hover:bg-primary/5 transition-smooth"
            >
              <PlayCircle className="h-4 w-4 text-coral" />
              {b.ctaVirtual}
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-secondary/40">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— Chantier</p>
          <h2 className="mt-2 font-display text-4xl">{b.galleryTitle}</h2>
          <p className="mt-3 text-muted-foreground">{b.gallerySubtitle}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[site1.url, site2.url, site3.url].map((src, i) => (
              <figure
                key={src}
                className="rounded-3xl overflow-hidden border border-border bg-card shadow-soft"
              >
                <img
                  src={src}
                  alt={`${b.gallery[i].caption} — ${b.gallery[i].date}`}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="px-5 py-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-coral">
                    {b.gallery[i].date}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{b.gallery[i].caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-24">
        <div className="container-narrow grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-coral" />
              <p className="font-display italic text-coral text-lg">— Localisation</p>
            </div>
            <h2 className="mt-2 font-display text-4xl">{b.locationTitle}</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">{b.locationBody}</p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 text-coral shrink-0" />
                <span>CHU Hôpital Marie Curie · 24 Rue de la Marine · 6042 Lodelinsart (Charleroi)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant border border-border">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.40%2C50.40%2C4.50%2C50.46&amp;layer=mapnik&amp;marker=50.435%2C4.452"
                title="Carte de localisation"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
