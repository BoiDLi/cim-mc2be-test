import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label="CIM-MC² — accueil"
    >
      <div className="relative h-10 w-10 shrink-0">
        <div
          className={`absolute inset-0 rounded-xl transition-smooth ${
            light ? "bg-cream/10 ring-1 ring-cream/30" : "bg-primary"
          } group-hover:scale-110`}
        />
        <div className="absolute inset-0 grid place-items-center font-display text-lg font-semibold text-coral-foreground">
          <span className={light ? "text-cream" : "text-coral"}>C</span>
        </div>
        <div
          className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full ${
            light ? "bg-coral" : "bg-coral"
          } shadow-coral`}
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight ${
            light ? "text-cream" : "text-primary"
          }`}
        >
          CIM-MC<sup className="text-coral">2</sup>
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.18em] ${
            light ? "text-cream/70" : "text-muted-foreground"
          }`}
        >
          Medical Innovation
        </span>
      </div>
    </Link>
  );
}
