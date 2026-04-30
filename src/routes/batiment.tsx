import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Calendar, PlayCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";
import buildingImg from "@/assets/building-archipelago.jpg";
import buildingRenderImg from "@/assets/building-cim.jpg";

export const Route = createFileRoute("/batiment")({
  head: () => ({
    meta: [
      { title: "Le bâtiment — CIM-MC² Charleroi" },
      {
        name: "description",
        content:
          "Bâtiment dédié du CIM-MC² à proximité du CHU Hôpital Marie Curie à Charleroi. Ouverture prévue septembre 2027.",
      },
      { property: "og:title", content: "Le bâtiment — CIM-MC²" },
      { property: "og:image", content: buildingImg },
    ],
  }),
  component: BuildingPage,
});

function BuildingPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero kicker="05" title={t.building.title} subtitle={t.building.subtitle} />

      {/* HERO IMAGE */}
      <section className="pb-16">
        <div className="container-narrow">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[16/9]">
            <img
              src={buildingImg}
              alt="Rendu architectural du bâtiment CIM-MC² au crépuscule"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
              <p className="font-display italic text-coral text-sm">Rendu architectural</p>
              <p className="font-display text-2xl md:text-3xl text-cream max-w-xl">
                Charleroi — à proximité immédiate du CHU Marie Curie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="py-16">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-display italic text-coral text-lg">— Conception</p>
            <h2 className="mt-2 font-display text-4xl">{t.building.designTitle}</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-foreground/85 leading-relaxed">{t.building.designBody}</p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-secondary/40">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-10">
            <Calendar className="h-5 w-5 text-coral" />
            <h2 className="font-display text-3xl">{t.building.timelineTitle}</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />
            {t.building.timeline.map((step, i) => (
              <div
                key={step.t}
                className={`relative grid md:grid-cols-2 gap-6 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "" : "md:[&>:first-child]:order-2"
                }`}
              >
                <div className="md:text-right md:pr-12 pl-12 md:pl-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-coral">
                    {step.date}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{step.t}</h3>
                  <p className="mt-2 text-muted-foreground">{step.d}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 h-3 w-3 rounded-full bg-coral ring-4 ring-background" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24">
        <div className="container-narrow grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-coral" />
              <p className="font-display italic text-coral text-lg">— Localisation</p>
            </div>
            <h2 className="mt-2 font-display text-4xl">{t.building.locationTitle}</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t.building.locationBody}</p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 text-coral shrink-0" />
                <span>CHU Hôpital Marie Curie · 6042 Charleroi · Belgique</span>
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

      {/* VIDEO */}
      <section className="pb-24">
        <div className="container-narrow">
          <a
            href="https://netclick.io/pixel/5NDJdvmjcR7UG9oC"
            target="_blank"
            rel="noopener noreferrer"
            className="group block aspect-[16/9] rounded-3xl bg-gradient-hero relative overflow-hidden"
            aria-label={t.building.videoTitle}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-smooth"
              style={{ backgroundImage: `url(${buildingImg})` }}
            />
            <div className="absolute inset-0 grain" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="inline-grid h-20 w-20 place-items-center rounded-full bg-cream/10 ring-1 ring-cream/30 backdrop-blur group-hover:bg-coral group-hover:scale-110 transition-smooth">
                  <PlayCircle className="h-10 w-10 text-cream" />
                </span>
                <p className="mt-6 font-display text-cream/90 italic">{t.building.videoTitle}</p>
                <p className="mt-1 text-xs text-cream/60">{t.building.videoNote}</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
