import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Mail, MapPin, Phone, Plus, Minus } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CIM-MC²" },
      {
        name: "description",
        content: "Formulaire de contact et FAQ du CIM-MC². Contactez l'équipe pour vos projets, partenariats ou demandes d'information.",
      },
      { property: "og:title", content: "Contact — CIM-MC²" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <PageHero kicker="07" title={t.contact.title} subtitle={t.contact.subtitle} />

      {/* FORM + INFO */}
      <section className="py-16">
        <div className="container-narrow grid lg:grid-cols-12 gap-12">
          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-soft">
              <h2 className="font-display text-2xl">{t.contact.formTitle}</h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label={t.contact.name + " *"} name="name" required />
                  <Field label={t.contact.organization} name="org" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label={t.contact.email + " *"} name="email" type="email" required />
                  <Field label={t.contact.phone} name="phone" type="tel" />
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-primary mb-1.5 block">
                    {t.contact.subject}
                  </span>
                  <select
                    name="subject"
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral"
                  >
                    {t.contact.subjects.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-primary mb-1.5 block">
                    {t.contact.message} *
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral resize-none"
                  />
                </label>

                <label className="flex items-start gap-3 text-sm text-foreground/80">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-input accent-coral"
                  />
                  <span>{t.contact.consent} *</span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium hover:bg-coral transition-smooth"
                >
                  <Send className="h-4 w-4" />
                  {t.contact.send}
                </button>

                {sent && (
                  <div className="rounded-2xl bg-coral/10 text-coral px-5 py-4 text-sm font-medium">
                    {t.contact.sent}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* INFO */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-coral/20 blur-2xl" />
              <h2 className="font-display text-2xl text-cream relative">
                {t.contact.addressTitle}
              </h2>
              <ul className="mt-6 space-y-4 relative">
                <li className="flex items-start gap-3 text-cream/90">
                  <MapPin className="h-4 w-4 mt-1 text-coral shrink-0" />
                  <span>24 Rue de la Marine<br />6042 Lodelinsart (Charleroi) · Belgique</span>
                </li>
                <li className="flex items-start gap-3 text-cream/90">
                  <Mail className="h-4 w-4 mt-1 text-coral shrink-0" />
                  <span>contact@cim-mc2.be</span>
                </li>
                <li className="flex items-start gap-3 text-cream/90">
                  <Phone className="h-4 w-4 mt-1 text-coral shrink-0" />
                  <span>+32 (0)71 — à compléter</span>
                </li>
              </ul>
              <p className="mt-6 text-xs italic text-cream/50 relative">{t.contact.addressNote}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-narrow">
          <div className="max-w-2xl mb-10">
            <p className="font-display italic text-coral text-lg">— FAQ</p>
            <h2 className="mt-2 font-display text-4xl">{t.contact.faqTitle}</h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {t.contact.faq.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className="bg-card rounded-2xl border border-border overflow-hidden transition-smooth"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-display text-lg text-primary">{f.q}</span>
                    <span className="shrink-0 h-8 w-8 rounded-full bg-secondary grid place-items-center text-coral">
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-5 text-foreground/80 leading-relaxed">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-primary mb-1.5 block">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-coral"
      />
    </label>
  );
}
