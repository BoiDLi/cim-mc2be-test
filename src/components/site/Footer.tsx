import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />

      <div className="relative container-narrow py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo light />
          <p className="mt-6 max-w-sm text-cream/80 font-display text-xl leading-snug">
            {t.footer.tagline}
          </p>
          <div className="mt-8">
            <LanguageSwitcher light />
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-cream/50 text-xs uppercase tracking-[0.2em] mb-5">
            {t.footer.explore}
          </h4>
          <ul className="space-y-3 font-body text-cream/90">
            <li><Link to="/" className="hover:text-coral transition-smooth">{t.nav.about}</Link></li>
            <li><Link to="/organisation" className="hover:text-coral transition-smooth">{t.nav.organisation}</Link></li>
            <li><Link to="/offre" className="hover:text-coral transition-smooth">{t.nav.offer}</Link></li>
            <li><Link to="/actualites" className="hover:text-coral transition-smooth">{t.nav.news}</Link></li>
            <li><Link to="/batiment" className="hover:text-coral transition-smooth">{t.nav.building}</Link></li>
            <li><Link to="/carrieres" className="hover:text-coral transition-smooth">{t.nav.careers}</Link></li>
            <li><Link to="/landing" className="hover:text-coral transition-smooth">Résidence fondatrice</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-cream/50 text-xs uppercase tracking-[0.2em] mb-5">
            {t.footer.contact}
          </h4>
          <ul className="space-y-3 font-body text-cream/90">
            <li><Link to="/contact" className="hover:text-coral transition-smooth">{t.nav.contact}</Link></li>
            <li><Link to="/soutenir" className="hover:text-coral transition-smooth">{t.nav.support}</Link></li>
          </ul>
          <div className="mt-8 text-sm text-cream/60 space-y-1">
            <p>24 Rue de la Marine</p>
            <p>6042 Lodelinsart (Charleroi) · Belgique</p>
            <p className="pt-2">N° d'Entreprise : 0803.219.683</p>
            <p>N° Compte CBC : BE92 7320 7062 2923</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {year} CIM-MC². {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-coral transition-smooth">{t.footer.legal}</a>
            <a href="#" className="hover:text-coral transition-smooth">{t.footer.privacy}</a>
            <a href="#" className="hover:text-coral transition-smooth">{t.footer.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
