export default function PageHeader({
  label,
  title,
  highlight,
  description,
  dark = false,
}: any) {
  return (
    <div className="mb-16">
      <p
        className={`uppercase tracking-[0.35em] mb-4 ${
          dark ? "text-accent" : "text-accent"
        }`}
      >
        {label}
      </p>

      <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
        {title}
        {highlight && (
          <span className="block text-accent">{highlight}</span>
        )}
      </h1>

      <p
        className={`max-w-3xl text-lg leading-relaxed ${
          dark ? "text-white/75" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
    </div>
  );
}