import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-soft">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl" aria-hidden />
      <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-coral/10 blur-3xl" aria-hidden />

      <div className="relative container-narrow">
        {kicker && (
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            {kicker}
          </div>
        )}
        <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
