import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Newspaper, MapPin, Clock, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";
import buildingImg from "@/assets/building-archipelago.jpg";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités & Événements — CIM-MC²" },
      {
        name: "description",
        content:
          "Conférences, communiqués, publications et événements du Centre d'Innovation Médicale Michel Cremer – Marie Curie.",
      },
      { property: "og:title", content: "Actualités — CIM-MC²" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const { t } = useLang();
  const [tab, setTab] = useState<"events" | "news">("events");

  const upcoming = t.news.events.filter((e) => e.status === "upcoming");
  const past = t.news.events.filter((e) => e.status === "past");

  return (
    <>
      <PageHero kicker="04" title={t.news.title} subtitle={t.news.subtitle} />

      {/* TABS */}
      <section className="pt-12">
        <div className="container-narrow">
          <div className="inline-flex rounded-full bg-card border border-border p-1.5 shadow-sm">
            <button
              onClick={() => setTab("events")}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-smooth ${
                tab === "events"
                  ? "bg-coral text-coral-foreground shadow-coral"
                  : "text-primary hover:text-coral"
              }`}
            >
              <Calendar className="h-4 w-4" />
              {t.news.tabs.events}
            </button>
            <button
              onClick={() => setTab("news")}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-smooth ${
                tab === "news"
                  ? "bg-coral text-coral-foreground shadow-coral"
                  : "text-primary hover:text-coral"
              }`}
            >
              <Newspaper className="h-4 w-4" />
              {t.news.tabs.news}
            </button>
          </div>
        </div>
      </section>

      {tab === "events" && (
        <>
          {/* FEATURED EVENT */}
          <section className="pt-12 pb-8">
            <div className="container-narrow">
              <h2 className="font-display text-2xl text-primary mb-6">{t.news.featuredTitle}</h2>
              <article className="rounded-3xl overflow-hidden bg-gradient-hero text-cream relative shadow-elegant">
                <div className="absolute inset-0 grain opacity-40" />
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-coral/30 blur-3xl" />
                <div className="relative grid md:grid-cols-12 gap-8 p-8 md:p-12">
                  <div className="md:col-span-7">
                    <div className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-wider">
                      <Calendar className="h-3.5 w-3.5" />
                      {t.news.featured.tag}
                    </div>
                    <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
                      {t.news.featured.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-cream/85">
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {t.news.featured.date}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {t.news.featured.location}
                      </span>
                    </div>
                    <p className="mt-6 text-cream/90 leading-relaxed">{t.news.featured.lead}</p>
                    <p className="mt-3 text-cream/80 leading-relaxed text-sm">
                      {t.news.featured.body}
                    </p>
                    <p className="mt-3 text-cream italic text-sm">{t.news.featured.invite}</p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-6 py-3 font-medium shadow-coral hover:scale-105 transition-smooth"
                      >
                        {t.news.featured.cta}
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-5 space-y-4">
                    <div className="rounded-2xl overflow-hidden ring-1 ring-cream/20 shadow-elegant">
                      <img
                        src={buildingImg}
                        alt="Futur bâtiment du CIM-MC² — projet ARCHIPELAGO"
                        className="h-44 w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-2xl bg-cream/10 backdrop-blur ring-1 ring-cream/20 p-6">
                      <h4 className="font-display text-lg text-cream">
                        {t.news.featured.programTitle}
                      </h4>
                      <ul className="mt-4 space-y-3 text-sm text-cream/90">
                        {t.news.featured.program.map((step, i) => (
                          <li key={step} className="flex gap-3">
                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-coral/90 text-coral-foreground text-xs font-mono inline-flex items-center justify-center">
                              {i + 1}
                            </span>
                            <span className="leading-snug pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* CALENDAR */}
          <section className="py-16">
            <div className="container-narrow">
              <div className="mb-10">
                <h2 className="font-display text-3xl text-primary">{t.news.eventsTitle}</h2>
                <p className="mt-2 text-muted-foreground">{t.news.eventsIntro}</p>
              </div>

              <h3 className="font-display text-xl text-coral mb-4">{t.news.eventsUpcoming}</h3>
              <div className="space-y-4">
                {upcoming.length === 0 && (
                  <p className="text-muted-foreground italic">{t.news.eventsEmpty}</p>
                )}
                {upcoming.map((e) => (
                  <EventRow key={e.title} ev={e} cta={t.news.eventsCta} />
                ))}
              </div>

              {past.length > 0 && (
                <>
                  <h3 className="font-display text-xl text-primary/70 mt-12 mb-4">
                    {t.news.eventsPast}
                  </h3>
                  <div className="space-y-4">
                    {past.map((e) => (
                      <EventRow key={e.title} ev={e} cta={t.news.eventsCta} muted />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </>
      )}

      {tab === "news" && (
        <section className="py-16">
          <div className="container-narrow">
            <div className="mb-10">
              <h2 className="font-display text-3xl text-primary">{t.news.newsTitle}</h2>
              <p className="mt-2 text-muted-foreground">{t.news.newsIntro}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {t.news.newsItems.map((n, i) => (
                <article
                  key={n.title}
                  className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col"
                >
                  <div
                    className={`aspect-[16/10] relative overflow-hidden ${
                      i % 3 === 0
                        ? "bg-gradient-hero"
                        : i % 3 === 1
                          ? "bg-gradient-coral"
                          : "bg-gradient-soft"
                    }`}
                  >
                    <div className="absolute inset-0 grain" />
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                      {n.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                      {n.date}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-primary group-hover:text-coral transition-smooth">
                      {n.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {n.excerpt}
                    </p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-coral hover:gap-2.5 transition-smooth"
                    >
                      {t.news.newsCta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-12 text-sm italic text-muted-foreground text-center">
              {t.news.placeholder}
            </p>
          </div>
        </section>
      )}

      {/* NEWSLETTER */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
            <div className="relative grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <h3 className="font-display text-3xl text-cream">Newsletter CIM-MC²</h3>
                <p className="mt-3 text-cream/80">
                  Recevez nos actualités, événements et publications dans votre boîte mail.
                </p>
              </div>
              <form className="md:col-span-5 flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="flex-1 rounded-full bg-cream/10 ring-1 ring-cream/20 px-5 py-3 text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-coral"
                />
                <button
                  type="submit"
                  className="rounded-full bg-coral text-coral-foreground px-6 py-3 font-medium shadow-coral hover:scale-105 transition-smooth"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function EventRow({
  ev,
  cta,
  muted,
}: {
  ev: { day: string; month: string; year: string; time: string; title: string; location: string; desc: string };
  cta: string;
  muted?: boolean;
}) {
  return (
    <article
      className={`group grid grid-cols-[auto_1fr_auto] gap-6 items-center p-5 md:p-6 rounded-2xl border border-border bg-card hover:border-coral hover:shadow-elegant transition-smooth ${
        muted ? "opacity-70" : ""
      }`}
    >
      <div className="flex flex-col items-center justify-center w-20 h-20 rounded-xl bg-gradient-coral text-coral-foreground shadow-coral">
        <span className="font-display text-3xl leading-none">{ev.day}</span>
        <span className="text-xs font-medium uppercase tracking-wider mt-1">{ev.month}</span>
        <span className="text-[10px] font-mono opacity-80">{ev.year}</span>
      </div>
      <div className="min-w-0">
        <h4 className="font-display text-lg text-primary group-hover:text-coral transition-smooth">
          {ev.title}
        </h4>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {ev.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {ev.location}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ev.desc}</p>
      </div>
      <a
        href="#"
        className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-primary hover:border-coral hover:text-coral transition-smooth"
      >
        {cta}
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </article>
  );
}
