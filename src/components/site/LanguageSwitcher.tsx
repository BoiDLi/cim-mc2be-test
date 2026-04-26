import { useLang } from "@/i18n/LanguageContext";

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center rounded-full p-1 text-xs font-medium ${
        light ? "bg-cream/10 ring-1 ring-cream/20" : "bg-secondary ring-1 ring-border"
      }`}
      role="group"
      aria-label="Language switcher"
    >
      {(["fr", "en"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 rounded-full transition-smooth uppercase tracking-wider ${
              active
                ? light
                  ? "bg-coral text-coral-foreground shadow-coral"
                  : "bg-primary text-primary-foreground"
                : light
                ? "text-cream/70 hover:text-cream"
                : "text-muted-foreground hover:text-primary"
            }`}
            aria-pressed={active}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
