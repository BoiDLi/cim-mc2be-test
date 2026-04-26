import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = [
  { to: "/", key: "about" as const, exact: true },
  { to: "/organisation", key: "organisation" as const },
  { to: "/offre", key: "offer" as const },
  { to: "/actualites", key: "news" as const },
  { to: "/batiment", key: "building" as const },
  { to: "/carrieres", key: "careers" as const },
];

export function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-background/0"
      }`}
    >
      <div className="container-narrow flex h-20 items-center justify-between gap-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="nav-link text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
              activeProps={{ className: "text-primary" }}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="text-sm font-medium px-4 py-2 rounded-full text-primary hover:bg-secondary transition-smooth"
          >
            {t.nav.contact}
          </Link>
          <Link
            to="/soutenir"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-coral text-coral-foreground shadow-coral hover:scale-[1.03] transition-smooth"
          >
            <Heart className="h-3.5 w-3.5" />
            {t.nav.support}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-background border-t border-border overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="container-narrow py-8 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-display text-foreground border-b border-border"
                activeProps={{ className: "text-coral" }}
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-display text-foreground border-b border-border"
            >
              {t.nav.contact}
            </Link>
            <Link
              to="/soutenir"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-coral text-coral-foreground font-medium shadow-coral"
            >
              <Heart className="h-4 w-4" />
              {t.nav.support}
            </Link>
            <div className="mt-6 self-start">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
