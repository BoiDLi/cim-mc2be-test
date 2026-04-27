import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/cim-logo.jpg";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label="CIM-MC² — accueil"
    >
      <div
        className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-xl transition-smooth group-hover:scale-105 ${
          light ? "ring-1 ring-cream/30" : "ring-1 ring-primary/15"
        }`}
      >
        <img
          src={logoSrc}
          alt="Logo CIM-MC²"
          className="h-full w-full object-cover"
          width={44}
          height={44}
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
          Michel Cremer · Marie Curie
        </span>
      </div>
    </Link>
  );
}
