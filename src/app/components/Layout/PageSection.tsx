export default function PageSection({ children, dark = false }: any) {
  return (
    <section
      className={`min-h-screen px-6 py-24 ${
        dark
          ? "bg-primary text-primary-foreground"
          : "bg-background text-foreground"
      }`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}