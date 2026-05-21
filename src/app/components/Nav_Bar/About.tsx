import { aboutJeff, aboutPanaca } from "../Config_Files/AboutConfig";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-24 overflow-hidden">
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-24">
        
        {/* About Jeff */}
        <div>
          <p className="uppercase tracking-[0.35em] text-accent mb-4">
            About Jeff
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Meet
            <span className="block text-accent">Jeff Panaca.</span>
          </h1>

          <div className="grid gap-5">
            {aboutJeff.map((item, index) => (
              <div key={index} className="premium-card p-6">
                <p className="text-white/75 leading-relaxed text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About Panaca */}
        <div>
          <p className="uppercase tracking-[0.35em] text-accent mb-4">
            About Panaca Financial
          </p>

          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Protecting your
            <span className="block text-accent">legacy.</span>
          </h2>

          <div className="grid gap-5">
            {aboutPanaca.map((item, index) => (
              <div key={index} className="premium-card p-6">
                <p className="text-white/75 leading-relaxed text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
