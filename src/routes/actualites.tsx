import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Newspaper, FileText, Mail, Star, MapPin, Clock } from "lucide-react";
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

const CAT_ICONS = [Calendar, Star, Newspaper, FileText, Mail];

function NewsPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero kicker="04" title={t.news.title} subtitle={t.news.subtitle} />

      {/* CATEGORIES */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="font-display text-2xl text-primary mb-8">{t.news.categoriesTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {t.news.categories.map((c, i) => {
              const Icon = CAT_ICONS[i];
              return (
                <button
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-5 py-2.5 text-sm font-medium text-primary hover:border-coral hover:text-coral transition-smooth"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="pb-8">
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

      {/* SAMPLE NEWS GRID */}
      <section className="pb-24 pt-8">
        <div className="container-narrow grid md:grid-cols-3 gap-6">
          {t.news.sample.map((n, i) => (
            <article
              key={n.title}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div
                className={`aspect-[4/3] relative overflow-hidden ${
                  i === 0 ? "bg-gradient-hero" : i === 1 ? "bg-gradient-coral" : "bg-gradient-soft"
                }`}
              >
                <div className="absolute inset-0 grain" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-cream/90 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  {n.tag}
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  {n.date}
                </p>
                <h3 className="mt-2 font-display text-xl text-primary group-hover:text-coral transition-smooth">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="container-narrow mt-12 text-center">
          <p className="text-sm italic text-muted-foreground">{t.news.placeholder}</p>
        </div>
      </section>

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
