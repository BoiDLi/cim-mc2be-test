// Couleurs officielles des Objectifs de Développement Durable (ONU)
const SDG_COLORS: Record<number, string> = {
  1: "#E5243B",
  2: "#DDA63A",
  3: "#4C9F38",
  4: "#C5192D",
  5: "#FF3A21",
  6: "#26BDE2",
  7: "#FCC30B",
  8: "#A21942",
  9: "#FD6925",
  10: "#DD1367",
  11: "#FD9D24",
  12: "#BF8B2E",
  13: "#3F7E44",
  14: "#0A97D9",
  15: "#56C02B",
  16: "#00689D",
  17: "#19486A",
};

export function SdgTile({
  n,
  label,
  highlighted = false,
}: {
  n: number;
  label: string;
  highlighted?: boolean;
}) {
  const color = SDG_COLORS[n] ?? "#1F5DA5";
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden ring-1 transition-smooth hover:scale-[1.03] ${
        highlighted ? "ring-coral/40 shadow-coral" : "ring-border"
      }`}
    >
      <div
        className="aspect-square flex flex-col items-center justify-center text-white p-4 text-center"
        style={{ backgroundColor: color }}
        aria-label={`Objectif ${n} — ${label}`}
      >
        <span className="font-display text-3xl md:text-4xl font-semibold leading-none">
          {n}
        </span>
        <span className="mt-2 text-[11px] md:text-xs font-medium uppercase tracking-wide leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}
