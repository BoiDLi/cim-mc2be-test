import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Send } from "lucide-react";
import { z } from "zod";
import { useLang } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/deposer-projet")({
  head: () => ({
    meta: [
      { title: "Déposer mon projet — CIM-MC²" },
      { name: "description", content: "Présentez votre projet d'innovation médicale au CIM-MC² : besoin clinique, maturité, attentes. Réponse de notre équipe sous 5 jours ouvrés." },
      { property: "og:title", content: "Déposer mon projet — CIM-MC²" },
      { property: "og:description", content: "Présentez votre projet d'innovation médicale au CIM-MC² : besoin clinique, maturité, attentes." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cim-mc2be-test.lovable.app/deposer-projet" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://cim-mc2be-test.lovable.app/deposer-projet" }],
  }),
  component: SubmitProjectPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  organisation: z.string().trim().min(2).max(150),
  phone: z.string().trim().max(40).optional(),
  profile: z.string().min(1),
  title: z.string().trim().min(3).max(150),
  description: z.string().trim().min(20).max(2000),
  clinicalNeed: z.string().trim().min(10).max(1000),
  maturity: z.string().min(1),
  needs: z.array(z.string()).min(1),
  timing: z.string().trim().max(200).optional(),
});

const COPY = {
  fr: {
    kicker: "— Déposer mon projet",
    title: "Présentez-nous votre projet",
    intro:
      "Quelques minutes suffisent. Ces informations permettent à notre équipe multidisciplinaire (médecins, ingénieurs, experts réglementaires) d'évaluer votre projet et de vous proposer un accompagnement adapté. Réponse sous 5 jours ouvrés.",
    s1: "1. Vous",
    s2: "2. Votre projet",
    s3: "3. Vos besoins",
    name: "Nom et prénom",
    email: "E-mail",
    organisation: "Organisation / institution",
    phone: "Téléphone (optionnel)",
    profile: "Votre profil",
    profiles: ["Clinicien / hôpital", "Start-up / PME", "Grande entreprise", "Université / centre de recherche", "Investisseur", "Autre"],
    pTitle: "Titre du projet",
    pDesc: "Décrivez votre projet",
    pNeed: "À quel besoin clinique répond-il ?",
    maturity: "Niveau de maturité (TRL)",
    maturities: ["Idée / concept (TRL 1-3)", "Preuve de concept (TRL 4)", "Prototype validé en labo (TRL 5-6)", "Validation clinique (TRL 7-8)", "Mise sur le marché (TRL 9)"],
    needs: "Quels accompagnements recherchez-vous ?",
    needsList: ["Co-conception & design", "Prototypage", "Tests & validation", "Affaires réglementaires / PI", "Essais cliniques", "Infrastructure / location d'espaces", "Financement & valorisation", "Formation"],
    timing: "Échéance souhaitée",
    submit: "Envoyer mon projet",
    okTitle: "Merci, votre projet est enregistré",
    okBody: "Notre équipe revient vers vous sous 5 jours ouvrés. Pour toute question :",
    required: "Merci de compléter les champs obligatoires correctement.",
  },
  en: {
    kicker: "— Submit my project",
    title: "Tell us about your project",
    intro:
      "It only takes a few minutes. This information allows our multidisciplinary team (physicians, engineers, regulatory experts) to assess your project and propose tailored support. Reply within 5 working days.",
    s1: "1. About you",
    s2: "2. Your project",
    s3: "3. Your needs",
    name: "Full name",
    email: "Email",
    organisation: "Organisation / institution",
    phone: "Phone (optional)",
    profile: "Your profile",
    profiles: ["Clinician / hospital", "Start-up / SME", "Large company", "University / research centre", "Investor", "Other"],
    pTitle: "Project title",
    pDesc: "Describe your project",
    pNeed: "Which clinical need does it address?",
    maturity: "Maturity level (TRL)",
    maturities: ["Idea / concept (TRL 1-3)", "Proof of concept (TRL 4)", "Lab-validated prototype (TRL 5-6)", "Clinical validation (TRL 7-8)", "Market launch (TRL 9)"],
    needs: "What support are you looking for?",
    needsList: ["Co-design", "Prototyping", "Testing & validation", "Regulatory affairs / IP", "Clinical trials", "Infrastructure / space rental", "Funding & valorisation", "Training"],
    timing: "Preferred timeline",
    submit: "Send my project",
    okTitle: "Thank you, your project has been recorded",
    okBody: "Our team will get back to you within 5 working days. Any question:",
    required: "Please complete the required fields correctly.",
  },
} as const;

const inputCls =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-coral transition-smooth";

function SubmitProjectPage() {
  const { lang } = useLang();
  const c = COPY[lang === "en" ? "en" : "fr"];
  const [needs, setNeeds] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  const toggle = (n: string) =>
    setNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      organisation: String(fd.get("organisation") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      profile: String(fd.get("profile") ?? ""),
      title: String(fd.get("title") ?? ""),
      description: String(fd.get("description") ?? ""),
      clinicalNeed: String(fd.get("clinicalNeed") ?? ""),
      maturity: String(fd.get("maturity") ?? ""),
      needs,
      timing: String(fd.get("timing") ?? ""),
    });
    if (!parsed.success) {
      setError(true);
      return;
    }
    setError(false);
    setSent(true);
  };

  return (
    <main className="pt-32 pb-24">
      <section className="container-narrow">
        <p className="font-display italic text-coral text-lg">{c.kicker}</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl text-primary">{c.title}</h1>
        <p className="mt-5 max-w-3xl text-foreground/80 leading-relaxed">{c.intro}</p>

        {sent ? (
          <div className="mt-12 rounded-3xl border border-coral/40 bg-card p-10">
            <CheckCircle2 className="h-10 w-10 text-coral" />
            <h2 className="mt-4 font-display text-2xl text-primary">{c.okTitle}</h2>
            <p className="mt-2 text-foreground/80">
              {c.okBody}{" "}
              <a href="mailto:projets@cim-mc2.be" className="text-coral underline">
                projets@cim-mc2.be
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 space-y-12">
            <fieldset>
              <legend className="font-display text-2xl text-primary">{c.s1}</legend>
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                <label className="block text-sm">
                  {c.name} *<input name="name" required className={inputCls} />
                </label>
                <label className="block text-sm">
                  {c.email} *<input name="email" type="email" required className={inputCls} />
                </label>
                <label className="block text-sm">
                  {c.organisation} *<input name="organisation" required className={inputCls} />
                </label>
                <label className="block text-sm">
                  {c.phone}<input name="phone" className={inputCls} />
                </label>
                <label className="block text-sm sm:col-span-2">
                  {c.profile} *
                  <select name="profile" required defaultValue="" className={inputCls}>
                    <option value="" disabled />
                    {c.profiles.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-display text-2xl text-primary">{c.s2}</legend>
              <div className="mt-6 space-y-5">
                <label className="block text-sm">
                  {c.pTitle} *<input name="title" required className={inputCls} />
                </label>
                <label className="block text-sm">
                  {c.pDesc} *<textarea name="description" rows={5} required className={inputCls} />
                </label>
                <label className="block text-sm">
                  {c.pNeed} *<textarea name="clinicalNeed" rows={3} required className={inputCls} />
                </label>
                <label className="block text-sm">
                  {c.maturity} *
                  <select name="maturity" required defaultValue="" className={inputCls}>
                    <option value="" disabled />
                    {c.maturities.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-display text-2xl text-primary">{c.s3}</legend>
              <div className="mt-6">
                <p className="text-sm text-foreground/80">{c.needs} *</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {c.needsList.map((n) => {
                    const active = needs.includes(n);
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => toggle(n)}
                        className={`rounded-full border px-5 py-2.5 text-sm transition-smooth ${
                          active
                            ? "bg-coral text-coral-foreground border-coral"
                            : "border-border text-foreground/80 hover:border-coral/50"
                        }`}
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>
                <label className="mt-6 block text-sm">
                  {c.timing}<input name="timing" className={inputCls} />
                </label>
              </div>
            </fieldset>

            {error && <p className="text-sm text-destructive">{c.required}</p>}

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-coral text-coral-foreground px-8 py-4 text-lg font-medium shadow-coral hover:scale-[1.03] transition-smooth"
            >
              {c.submit}
              <Send className="h-5 w-5" />
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
