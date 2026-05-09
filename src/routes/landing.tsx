import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Microscope,
  Stethoscope,
  ShieldCheck,
  Network,
  Sparkles,
  Cpu,
  Wrench,
  Radio,
  Briefcase,
} from "lucide-react";
import buildingImg from "@/assets/cim-building-entrance.jpg";
import cleanroomImg from "@/assets/cim-cleanroom-prototyping.jpg";
import transmissionImg from "@/assets/cim-transmission-space.png";
import teamImg from "@/assets/cim-team-meeting.jpg";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "CIM-MC² — Votre dispositif. À 50 mètres des chirurgiens qui vont l'utiliser." },
      {
        name: "description",
        content:
          "Le premier centre d'innovation MedTech belge intégré à un hôpital. 1 750 m² de labos, prototypage et collaboration clinique, à 50 m du CHU Marie Curie. Devenez résident fondateur.",
      },
      { property: "og:title", content: "CIM-MC² — 50 m du labo à l'hôpital" },
      { property: "og:image", content: buildingImg },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
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
              Résidence fondatrice — ouverture 2027
            </div>

            <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-cream">
              Un Centre d'Innovation Médicale
              <br />
              <span className="italic text-coral">clé sur porte</span>
              <br />
              à 50 mètres de l'hôpital.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-cream/80 leading-relaxed">
              Le CIM-MC² est le premier centre d'innovation medtech belge adossé au CHU
              Marie Curie de Charleroi avec 1 750 m² de labos, salles propres, prototypage
              et collaborations cliniques.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#residency"
                className="group inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-7 py-4 font-medium shadow-coral hover:scale-[1.03] transition-smooth"
              >
                Devenir résident
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#inside"
                className="inline-flex items-center gap-2 rounded-full bg-cream/10 ring-1 ring-cream/20 backdrop-blur text-cream px-7 py-4 font-medium hover:bg-cream/15 transition-smooth"
              >
                Visiter le centre
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                { n: "1 750 m²", l: "dédiés à l'innovation médicale" },
                { n: "+25 ans", l: "d'expertise en ingénierie Medtech" },
                { n: "50 m", l: "du labo à l'hôpital" },
                { n: "J+30", l: "co-créateur et clinicien identifié" },
              ].map((s) => (
                <div key={s.n} className="border-l-2 border-coral pl-4">
                  <p className="font-display text-2xl text-cream">{s.n}</p>
                  <p className="text-xs text-cream/60 mt-1 uppercase tracking-wider leading-tight">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={buildingImg}
                alt="Bâtiment CIM-MC² — projet ARCHIPELAGO, entrée"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cream rounded-2xl p-5 shadow-elegant max-w-[260px]">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-coral">
                Permis approuvé
              </p>
              <p className="mt-2 text-sm text-primary leading-snug">
                Lodelinsart, Charleroi — chantier en cours, ouverture 2027.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-32">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— Le problème</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl max-w-3xl">
            Toute startup medtech se heurte aux <em className="text-coral not-italic">mêmes difficultés</em>.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            Accès clinique, infrastructure de labo, navigation réglementaire, démonstration
            de faisabilité financière pour les investisseurs. Atteindre ces quatre
            objectifs était jusqu'ici extrêmement compliqué.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              {
                t: "L'accès clinique prend des mois",
                d: "Procédures, introductions de dossiers, comités d'éthique, listes d'attente… La plupart des startups ne reçoivent pas de feedback clinique réel.",
              },
              {
                t: "L'infrastructure de labo consomme votre temps",
                d: "Location d'équipements, conformité, recherche de salles propres — avant même qu'un seul test soit lancé.",
              },
              {
                t: "Les investisseurs veulent des preuves cliniques",
                d: "Pour cela, il faut un accès aux cliniciens et aux hôpitaux.",
              },
              {
                t: "MDR et CE mark restent complexes",
                d: "La plupart des équipes naviguent seules les processus AFMPS et la sélection d'organismes notifiés.",
              },
            ].map((p, i) => (
              <article
                key={p.t}
                className="bg-card rounded-3xl p-8 border border-border hover:border-coral/40 transition-smooth"
              >
                <p className="font-mono text-xs text-coral">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl text-primary">{p.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ANSWER */}
      <section className="py-24 bg-secondary/40">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— Notre réponse</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl max-w-3xl">
            Rejoignez le CIM-MC² pour profiter des{" "}
            <em className="text-coral not-italic">ressources dont vous avez besoin</em>.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            1 750 m² conçus avec un seul objectif : mettre les technologies médicales à
            disposition des cliniciens pour mieux traiter les patients.
          </p>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: Stethoscope,
                t: "Mise en relation avec les cliniciens",
                d: "Accès aux équipes des hôpitaux pour confronter votre dispositif au terrain dès les premières itérations.",
              },
              {
                Icon: Microscope,
                t: "Infrastructures partagées",
                d: "Salles propres ISO classe 7, impression 3D, prototypage et simulation — disponibles dès le premier jour.",
              },
              {
                Icon: Sparkles,
                t: "Parcours faisabilité",
                d: "De la définition du besoin clinique aux données structurées de faisabilité. Un processus défini, co-conçu avec l'hôpital.",
              },
              {
                Icon: ShieldCheck,
                t: "Réglementaire & PI sur place",
                d: "PI, conformité MDR, AFMPS, organismes notifiés — avec l'aide des partenaires de l'écosystème.",
              },
              {
                Icon: Network,
                t: "Connexions au financement",
                d: "Liens directs avec les invests en Belgique (Sambrinvest, Wallonie Entreprendre…) et à l'étranger.",
              },
              {
                Icon: Building2,
                t: "Espaces de recherche, labo, bureaux & coworking",
                d: "Espaces privés et flexibles dans un Centre d'Innovation Médicale proche de l'hôpital et dédié aux technologies médicales.",
              },
            ].map(({ Icon, t, d }) => (
              <article
                key={t}
                className="group bg-card rounded-3xl p-8 border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center group-hover:bg-coral transition-smooth">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl text-primary">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE */}
      <section id="inside" className="py-32">
        <div className="container-narrow">
          <p className="font-display italic text-coral text-lg">— À l'intérieur</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl max-w-3xl">
            1 750 m² conçus pour <em className="text-coral not-italic">une seule chose</em> :
            mettre les dispositifs entre les mains des patients.
          </h2>

          <div className="mt-14 grid lg:grid-cols-12 gap-8">
            <figure className="lg:col-span-7 rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={cleanroomImg}
                alt="Salle propre et prototypage du CIM-MC²"
                className="w-full h-full object-cover aspect-[16/10]"
                loading="lazy"
              />
            </figure>
            <figure className="lg:col-span-5 rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={transmissionImg}
                alt="Espace de transmission live d'opérations"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: ShieldCheck,
                tag: "Production",
                t: "Salles propres ISO 7",
                d: "Environnements contrôlés pour production de prototypes, assemblage, vérification, simulation. Compatible MDR.",
              },
              {
                Icon: Cpu,
                tag: "Itération rapide",
                t: "Labo d'impression 3D",
                d: "Prototypage rapide de composants. Itérez sur des prototypes physiques dans le même bâtiment que le feedback clinique.",
              },
              {
                Icon: Radio,
                tag: "Unique en Belgique",
                t: "Transmission clinique live",
                d: "Infrastructure de retransmission live d'interventions endoscopiques. Partagez des cas cliniques en temps réel.",
              },
              {
                Icon: Wrench,
                tag: "Expertise sur place",
                t: "Engineering & design",
                d: "Conception, développement, design industriel, protocoles de recherche clinique. 25 ans d'expertise Fondation.",
              },
            ].map(({ Icon, tag, t, d }) => (
              <article
                key={t}
                className="bg-card rounded-3xl p-6 border border-border"
              >
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-coral/15 grid place-items-center">
                    <Icon className="h-4 w-4 text-coral" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />
        <div className="relative container-narrow grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="font-display italic text-coral text-lg">— Bâti sur du concret</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-cream">
              <em className="not-italic text-coral">25 ans</em> d'expérience en
              ingénierie biomédicale, co-conçue avec les médecins cliniciens.
            </h2>
            <p className="mt-6 text-cream/80 max-w-xl leading-relaxed">
              Le CIM-MC² est le résultat de 25 années de collaboration entre médecins
              et ingénieurs. Le projet a été reconnu par le pôle Mecatech et approuvé
              par la Région wallonne.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "2024 — Aide à l'investissement approuvée par le jury de la Région wallonne",
                "2024 — Labellisation Mecatech, pôle de compétitivité MedTech wallon",
                "2024 — Permis d'urbanisme ARCHIPELAGO approuvé par la Ville de Charleroi",
                "1999 — Création de la Fondation Michel Cremer, pionnière de l'endoscopie",
              ].map((m) => (
                <li key={m} className="flex gap-3 text-cream/90">
                  <CheckCircle2 className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <figure className="rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={teamImg}
                alt="Équipe d'ingénieurs du CIM-MC²"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="rounded-3xl bg-gradient-soft border border-border p-10 md:p-14">
            <p className="font-display italic text-coral text-lg">— Preuve par l'exemple</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl max-w-3xl">
              Lys Medical — Iriscope : le premier outil capable de visualiser certaines
              lésions, basé sur la méthodologie développée depuis 25 ans par les équipes
              de médecins et d'ingénieurs.
            </h2>
            <p className="mt-6 max-w-2xl text-foreground/80 leading-relaxed">
              Issu du modèle de collaboration médecin–ingénieur soutenu par la Fondation
              Michel Cremer, Lys Medical a développé l'Iriscope — un dispositif
              diagnostique totalement innovant ayant un impact réel sur le diagnostic
              des tumeurs cancéreuses. C'est exactement la raison pour laquelle le
              CIM-MC² est conçu : accélérer des projets avec un besoin clinique,
              identifié par des médecins, résolu par des ingénieurs travaillant côte à
              côte.
            </p>
            <a
              href="https://michelcremerfoundation.eu/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-coral font-medium hover:gap-3 transition-smooth"
            >
              En savoir plus sur Lys Medical →
            </a>
          </div>
        </div>
      </section>

      {/* RESIDENCY CTA */}
      <section id="residency" className="py-24">
        <div className="container-narrow">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-coral p-10 md:p-16 shadow-coral">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cream/15 blur-2xl" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cream">
                  <Briefcase className="h-3.5 w-3.5" />
                  Résidence fondatrice
                </div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl text-cream">
                  Soyez le premier à passer la porte.
                </h2>
                <p className="mt-5 text-cream/90 max-w-xl leading-relaxed">
                  Le CIM-MC² ouvre en 2027. Les résidents fondateurs choisissent leur
                  espace, contribuent à la configuration du centre, et bénéficient de
                  conditions préférentielles. Un nombre limité de places est ouvert dès
                  maintenant aux marques d'intérêt.
                </p>

                <div className="mt-8 space-y-3 text-cream/85 text-sm">
                  <p>
                    <strong className="text-cream">À qui s'adresse-t-il :</strong>{" "}
                    sociétés medtech en pré-seed à Series A, avec un dispositif ou une
                    solution digital health, idéalement dans le mini-invasif ou
                    l'endoscopie. Belges ou internationales.
                  </p>
                  <p>
                    <strong className="text-cream">Ce qui se passe ensuite :</strong>{" "}
                    un membre de l'équipe vous contacte sous 5 jours ouvrés pour un
                    appel de 30 minutes. Sans engagement.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-cream p-6 md:p-8 shadow-elegant">
                <p className="font-display text-lg text-primary">Marquer mon intérêt</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  2 minutes. Sans engagement.
                </p>
                <div className="mt-5 space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full text-center rounded-full bg-coral text-coral-foreground px-6 py-3 font-medium hover:scale-[1.02] transition-smooth"
                  >
                    Devenir résident fondateur
                    <ArrowRight className="inline h-4 w-4 ml-1" />
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full text-center rounded-full bg-secondary text-primary px-6 py-3 font-medium hover:bg-accent/30 transition-smooth"
                  >
                    Demander une visite
                  </Link>
                  <Link
                    to="/offre"
                    className="block w-full text-center rounded-full ring-1 ring-border text-primary px-6 py-3 font-medium hover:bg-secondary transition-smooth"
                  >
                    Découvrir l'offre complète
                  </Link>
                </div>
                <p className="mt-5 text-[11px] text-muted-foreground leading-relaxed">
                  Vos coordonnées sont uniquement partagées avec l'équipe CIM-MC². Aucune
                  diffusion à des tiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
