export function SdgIcon({
  src,
  alt,
  highlighted = false,
}: {
  src: string;
  alt: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden ring-1 bg-card transition-smooth hover:scale-[1.03] ${
        highlighted ? "ring-coral/40 shadow-coral" : "ring-border"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="aspect-square w-full h-full object-contain p-2"
        loading="lazy"
      />
    </div>
  );
}
