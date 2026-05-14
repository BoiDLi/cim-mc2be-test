import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().trim().min(1, "Prénom requis").max(80),
  lastName: z.string().trim().min(1, "Nom requis").max(80),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z
    .string()
    .trim()
    .min(6, "Téléphone invalide")
    .max(30)
    .regex(/^[+0-9 ().\-]+$/, "Téléphone invalide"),
  organization: z.string().trim().max(150).optional(),
  need: z.string().trim().min(10).max(1500),
});

export interface NeedFormProps {
  id?: string;
  kicker: string;
  title: string;
  intro?: string;
  needLabel: string;
  needPlaceholder: string;
  suggestions?: string;
  submitLabel?: string;
  mailto?: string;
  mailSubject: string;
  /** Optional sidebar (e.g., bullets); if omitted, only the form is rendered. */
  side?: ReactNode;
}

export function NeedForm({
  id,
  kicker,
  title,
  intro,
  needLabel,
  needPlaceholder,
  suggestions,
  submitLabel = "Envoyer ma demande",
  mailto = "contact@cim-mc2.be",
  mailSubject,
  side,
}: NeedFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      organization: String(fd.get("organization") ?? ""),
      need: String(fd.get("need") ?? ""),
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
    const body = `Prénom: ${parsed.data.firstName}\nNom: ${parsed.data.lastName}\nEmail: ${parsed.data.email}\nTéléphone: ${parsed.data.phone}\nOrganisation: ${
      parsed.data.organization ?? ""
    }\n\n${parsed.data.need}`;
    window.location.href = `mailto:${mailto}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div id={id} className="scroll-mt-24 grid lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-coral">
          {kicker}
        </div>
        <h3 className="mt-4 font-display text-3xl md:text-4xl text-primary">{title}</h3>
        {intro && <p className="mt-4 text-foreground/80 leading-relaxed">{intro}</p>}
        {side}
      </div>

      <div className="lg:col-span-7">
        {submitted ? (
          <div className="rounded-3xl bg-card border border-border p-8 shadow-elegant">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/15 text-coral">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="mt-5 font-display text-2xl text-primary">
              Merci, votre demande est enregistrée.
            </h4>
            <p className="mt-3 text-foreground/80 leading-relaxed">
              Un membre de l'équipe vous recontacte sous 5 jours ouvrés.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-muted-foreground hover:text-primary underline underline-offset-4"
            >
              Soumettre une autre demande
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-card border border-border p-7 md:p-8 shadow-soft space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nom et prénom" error={errors.name}>
                <input name="name" maxLength={100} required className="form-input" />
              </Field>
              <Field label="Email professionnel" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  maxLength={255}
                  required
                  className="form-input"
                />
              </Field>
            </div>

            <Field label="Organisation (optionnel)">
              <input name="organization" maxLength={150} className="form-input" />
            </Field>

            <Field label={needLabel} error={errors.need}>
              <textarea
                name="need"
                maxLength={1500}
                required
                rows={5}
                className="form-input resize-none"
                placeholder={needPlaceholder}
              />
              {suggestions && (
                <span className="mt-2 block text-xs text-muted-foreground italic">
                  Suggestions : {suggestions}
                </span>
              )}
            </Field>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground max-w-md">
                Vos informations sont traitées confidentiellement et utilisées uniquement pour
                l'orientation de votre demande.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium shadow-soft hover:bg-primary-glow transition-smooth"
              >
                {submitLabel}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground/85 mb-1.5">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
