import { useState, type FormEvent } from "react";
import { ArrowRight, Stethoscope, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { useLang } from "@/i18n/LanguageContext";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  role: z.string().trim().min(2).max(100),
  specialty: z.string().trim().max(100).optional(),
  need: z.string().trim().min(20).max(1000),
  domain: z.string().min(1),
});

type Domain = "surgery" | "diagnostic" | "training" | "prevention" | "other";

const ROUTING: Record<Domain, { fr: string; en: string; mailto: string }> = {
  surgery: {
    fr: "Pôle Dispositifs chirurgicaux & interventionnels",
    en: "Surgical & Interventional Devices unit",
    mailto: "clinique@cim-mc2.be",
  },
  diagnostic: {
    fr: "Pôle Diagnostic & imagerie",
    en: "Diagnostic & Imaging unit",
    mailto: "diagnostic@cim-mc2.be",
  },
  training: {
    fr: "Pôle Simulation & formation",
    en: "Simulation & Training unit",
    mailto: "formation@cim-mc2.be",
  },
  prevention: {
    fr: "Pôle Prévention & santé publique",
    en: "Prevention & Public Health unit",
    mailto: "prevention@cim-mc2.be",
  },
  other: {
    fr: "Référent besoins cliniques",
    en: "Clinical needs referent",
    mailto: "besoins@cim-mc2.be",
  },
};

export function ClinicalNeed() {
  const { t, lang } = useLang();
  const [domain, setDomain] = useState<Domain>("surgery");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<null | { contact: string; email: string }>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      role: String(fd.get("role") ?? ""),
      specialty: String(fd.get("specialty") ?? ""),
      need: String(fd.get("need") ?? ""),
      domain: String(fd.get("domain") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const route = ROUTING[parsed.data.domain as Domain];
    setSubmitted({
      contact: lang === "fr" ? route.fr : route.en,
      email: route.mailto,
    });
  };

  return (
    <section className="py-24 bg-secondary/40">
      <div className="container-narrow grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-coral">
            <Stethoscope className="h-3.5 w-3.5" />
            {t.clinicalNeed.kicker}
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">{t.clinicalNeed.title}</h2>
          <p className="mt-5 text-lg text-foreground/80 leading-relaxed">
            {t.clinicalNeed.intro}
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {t.clinicalNeed.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-coral shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div className="rounded-3xl bg-card border border-border p-8 shadow-elegant">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/15 text-coral">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">
                {t.clinicalNeed.thanksTitle}
              </h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                {t.clinicalNeed.thanksBody}
              </p>
              <div className="mt-6 rounded-2xl bg-secondary/60 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t.clinicalNeed.routedTo}
                </p>
                <p className="mt-2 font-display text-lg text-primary">{submitted.contact}</p>
                <a
                  href={`mailto:${submitted.email}?subject=${encodeURIComponent(
                    t.clinicalNeed.mailSubject,
                  )}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-coral hover:underline"
                >
                  {submitted.email}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(null)}
                className="mt-6 text-sm text-muted-foreground hover:text-primary underline underline-offset-4"
              >
                {t.clinicalNeed.newRequest}
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-card border border-border p-7 md:p-8 shadow-soft space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t.clinicalNeed.f.name} error={errors.name}>
                  <input
                    name="name"
                    maxLength={100}
                    required
                    className="form-input"
                    placeholder="Dr. Marie Dupont"
                  />
                </Field>
                <Field label={t.clinicalNeed.f.email} error={errors.email}>
                  <input
                    name="email"
                    type="email"
                    maxLength={255}
                    required
                    className="form-input"
                    placeholder="marie.dupont@hopital.be"
                  />
                </Field>
                <Field label={t.clinicalNeed.f.role} error={errors.role}>
                  <input
                    name="role"
                    maxLength={100}
                    required
                    className="form-input"
                    placeholder={t.clinicalNeed.f.rolePh}
                  />
                </Field>
                <Field label={t.clinicalNeed.f.specialty}>
                  <input
                    name="specialty"
                    maxLength={100}
                    className="form-input"
                    placeholder={t.clinicalNeed.f.specialtyPh}
                  />
                </Field>
              </div>

              <Field label={t.clinicalNeed.f.domain}>
                <select
                  name="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value as Domain)}
                  className="form-input"
                >
                  {(Object.keys(ROUTING) as Domain[]).map((k) => (
                    <option key={k} value={k}>
                      {t.clinicalNeed.domains[k]}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label={t.clinicalNeed.f.need} error={errors.need}>
                <textarea
                  name="need"
                  maxLength={1000}
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder={t.clinicalNeed.f.needPh}
                />
              </Field>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground max-w-md">
                  {t.clinicalNeed.privacy}
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium shadow-soft hover:bg-primary-glow transition-smooth"
                >
                  {t.clinicalNeed.submit}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground/85 mb-1.5">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
