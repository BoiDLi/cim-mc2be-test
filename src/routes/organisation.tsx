import { createFileRoute } from "@tanstack/react-router";
import { Building2, Users, Network, Briefcase, Heart, Stethoscope, Cog, GraduationCap } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/organisation")({
  head: () => ({
    meta: [
      { title: "Organisation — CIM-MC²" },
      {
        name: "description",
        content:
          "Équipe, partenaires hébergés, partenariats académiques (ULB, UMONS, CHU Charleroi, Biopark, Multitel) et écosystème du CIM-MC².",
      },
      { property: "og:title", content: "Organisation — CIM-MC²" },
    ],
  }),
  component: OrganisationPage,
});

function OrganisationPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        kicker="02"
        title={t.organisation.title}
        subtitle={t.organisation.subtitle}
      />

      <section className="py-24">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          {/* TEAM */}
          <article className="lg:col-span-12 bg-card rounded-3xl p-10 border border-border shadow-soft">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-coral text-coral-foreground grid place-items-center">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="font-display text-3xl">{t.organisation.teamTitle}</h2>
            </div>
            <p className="mt-6 text-lg text-foreground/85 leading-relaxed max-w-3xl">
              {t.organisation.teamBody}
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {/* Direction */}
              <div className="rounded-2xl bg-secondary p-6">
                <div className="h-10 w-10 rounded-full bg-accent/15 grid place-items-center mb-3">
                  <Briefcase className="h-4 w-4 text-accent" />
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-coral">{t.organisation.direction}</p>
                <ul className="mt-3 space-y-1.5">
                  {t.organisation.directionMembers.map((d) => (
                    <li key={d} className="text-sm text-foreground/85">{d}</li>
                  ))}
                </ul>
              </div>

              {/* Médecins */}
              <div className="rounded-2xl bg-secondary p-6">
                <div className="h-10 w-10 rounded-full bg-coral/15 grid place-items-center mb-3">
                  <Stethoscope className="h-4 w-4 text-coral" />
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-coral">{t.organisation.doctorsTitle}</p>
                <ul className="mt-3 space-y-1.5">
                  {t.organisation.doctors.map((d) => (
                    <li key={d} className="text-sm text-foreground/85">{d}</li>
                  ))}
                </ul>
              </div>

              {/* Ingénieurs */}
              <div className="rounded-2xl bg-secondary p-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center mb-3">
                  <Cog className="h-4 w-4 text-primary" />
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-coral">{t.organisation.engineersTitle}</p>
                <ul className="mt-3 space-y-1.5">
                  {t.organisation.engineers.map((e) => (
                    <li key={e} className="text-sm text-foreground/85">{e}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Comité scientifique */}
            <div className="mt-10 rounded-2xl bg-gradient-soft p-6 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <h3 className="font-display text-xl">{t.organisation.scientificCommitteeTitle}</h3>
              </div>
              <ul className="mt-5 grid md:grid-cols-3 gap-5">
                {t.organisation.scientificCommittee.map((m) => (
                  <li key={m.name} className="border-l-2 border-coral pl-4">
                    <p className="font-medium text-primary">{m.name}</p>
                    <p className="text-sm text-foreground/75 mt-1 leading-relaxed">{m.role}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground italic">{t.organisation.scientificCommitteeNote}</p>
            </div>
          </article>

          {/* HOSTED */}
          <article className="lg:col-span-6 bg-card rounded-3xl p-10 border border-border">
            <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
              <Building2 className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl">{t.organisation.hostedTitle}</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t.organisation.hostedBody}</p>
          </article>

          {/* STRATEGIC */}
          <article className="lg:col-span-6 bg-primary text-primary-foreground rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-coral/20 blur-2xl" />
            <div className="relative">
              <div className="h-12 w-12 rounded-2xl bg-coral text-coral-foreground grid place-items-center">
                <Network className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-2xl text-cream">{t.organisation.strategicTitle}</h2>
              <p className="mt-4 text-cream/80">{t.organisation.strategicBody}</p>
              <ul className="mt-6 space-y-2">
                {t.organisation.partners.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-cream/90">
                    <span className="h-1 w-6 bg-coral" />
                    <span className="font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* ECOSYSTEM */}
          <article className="lg:col-span-12 bg-gradient-soft rounded-3xl p-10 border border-border">
            <h2 className="font-display text-3xl">{t.organisation.ecosystemTitle}</h2>
            <p className="mt-4 max-w-3xl text-lg text-foreground/85 leading-relaxed">
              {t.organisation.ecosystemBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Sirris", "Multitel", "BioWin", "Pôle MecaTech", "Wallonie Entreprendre", "Innoviris"].map((tag) => (
                <span key={tag} className="rounded-full bg-card border border-border px-4 py-2 text-sm text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* SHAREHOLDING */}
          <article className="lg:col-span-6 bg-card rounded-3xl p-10 border border-border">
            <div className="h-12 w-12 rounded-2xl bg-accent text-accent-foreground grid place-items-center">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl">{t.organisation.shareTitle}</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t.organisation.shareBody}</p>
          </article>

          {/* FOUNDATION */}
          <article className="lg:col-span-6 bg-card rounded-3xl p-10 border border-border">
            <div className="h-12 w-12 rounded-2xl bg-coral text-coral-foreground grid place-items-center">
              <Heart className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl">{t.organisation.foundationTitle}</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t.organisation.foundationBody}</p>
            <a
              href="https://michelcremerfoundation.eu"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-coral font-medium hover:gap-3 transition-smooth"
            >
              {t.organisation.foundationLink} →
            </a>
          </article>

          {/* GEEW */}
          <article className="lg:col-span-12 bg-secondary/50 rounded-3xl p-10 border border-dashed border-border">
            <p className="font-mono text-xs uppercase tracking-wider text-coral">À préciser</p>
            <h2 className="mt-3 font-display text-2xl">{t.organisation.geewTitle}</h2>
            <p className="mt-3 text-foreground/70 italic">{t.organisation.geewBody}</p>
          </article>
        </div>
      </section>
    </>
  );
}
