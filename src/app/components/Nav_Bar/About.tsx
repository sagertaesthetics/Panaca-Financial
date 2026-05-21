import logoMark from "../Assets/Panaca_Mark.png";

export default function About({ setPage }: { setPage: (page: string) => void }) {
  const goTo = (page: string) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-background text-foreground min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-14 bg-primary text-primary-foreground">
        <div className="soft-orb top-10 right-20 w-64 h-64" />
        <div className="soft-orb bottom-10 left-10 w-40 h-40" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-accent mb-4">
              About
            </p>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-4">
              The person behind
              <span className="block text-accent">your plan.</span>
            </h1>
            <p className="text-white/70 max-w-xl text-lg leading-relaxed">
              Over 25 years of experience. One unwavering principle: do right by the client, every single time.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <img
              src={logoMark}
              alt="Panaca Financial"
              className="relative w-48 md:w-64 mix-blend-screen drop-shadow-xl opacity-90"
            />
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* JEFF BIO */}
      <section className="px-6 py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* HEADSHOT */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-2xl scale-110" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl border border-accent/40 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-3 overflow-hidden">
                {/* Decorative corner lines */}
                <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/60 rounded-tl-lg" />
                <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/60 rounded-tr-lg" />
                <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/60 rounded-bl-lg" />
                <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/60 rounded-br-lg" />

                <svg
                  viewBox="0 0 80 80"
                  className="w-24 h-24 text-accent/40"
                  fill="currentColor"
                >
                  <circle cx="40" cy="28" r="18" />
                  <path d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30H10z" />
                </svg>
                <p className="text-accent/60 text-sm tracking-[0.2em] uppercase">
                  Headshot
                </p>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-2xl font-serif text-white">Jeff</p>
              <p className="text-accent text-sm tracking-widest uppercase mt-1">
                President, Panaca Financial
              </p>
            </div>
          </div>

          {/* BIO TEXT */}
          <div className="space-y-8">
            <div>
              <p className="uppercase tracking-[0.25em] text-accent text-xs mb-3">
                Background
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
                Born and raised in Tottenham, ON, Jeff grew up with a love for sports especially hockey and baseball. After graduating high school on the honour roll, he went on to Wilfrid Laurier University, earning an honours degree in Economics and Financial Management.
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[0.25em] text-accent text-xs mb-3">
                25+ Years in Financial Services
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
                Over more than two decades, Jeff has committed himself to providing exceptional service. Even though the subject matter is complex, he makes it easy to understand using plain language so clients fully grasp how working with him leads to passing on as much of their estate as possible to their heirs.
              </p>
            </div>

            <div className="premium-card p-7 border-accent/40">
              <p className="text-accent font-serif text-xl mb-3">
                "Do right by my client every single time without fail."
              </p>
              <p className="text-white/70 leading-relaxed">
                Each client is unique. Their situation is different from anyone else's. That means every solution Jeff recommends is tailored to address your individual circumstances never a one size fits all approach.
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[0.25em] text-accent text-xs mb-3">
                Family
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
                Jeff is married to Kerri-Ann, a teacher with the Toronto District School Board. Together they have two daughters, Tasha and Jadyn, who love playing soccer and baseball respectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* PANACA FINANCIAL */}
      <section className="px-6 py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-accent mb-5">
            Panaca Financial
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-14 max-w-3xl">
            Your wealth. Your legacy.
            <span className="block text-accent">Your choice.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                heading: "Our Belief",
                body: "You should pay as little tax as possible throughout your lifetime. Our underlying belief is that you should pass as much of your net worth as possible onto your heirs, estate, charity or wherever you choose. Without proper planning, CRA becomes your unintended beneficiary.",
              },
              {
                heading: "Our Mission",
                body: "To help you create multi generational wealth. We clarify the complexities, help you see the full picture, and build strategies and structures tailored specifically to your objectives. Think of us as the quarterback for your financial defense.",
              },
              {
                heading: "Our Approach",
                body: "We believe in long term relationships built on trust, transparency, and mutual respect. We take the time to know our clients and their families, their financial goals, and their unique circumstances developing a customized plan designed to meet your specific needs.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="premium-card p-8">
                <h3 className="text-xl font-serif text-accent mb-4">
                  {heading}
                </h3>
                <p className="text-white/75 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-[2rem] bg-white/8 p-10 md:p-16 text-center shadow-2xl border border-accent/30 gold-glow">
            <p className="uppercase tracking-[0.35em] text-accent mb-4">
              Don't leave your legacy to chance.
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to start the conversation?
            </h2>

            <p className="text-white/75 max-w-2xl mx-auto mb-8">
              Every great plan begins with a single conversation. Let's talk about your taxes, your legacy, and the future you want to build.
            </p>

                  <button
                    onClick={() => setPage("contact")}
                    className="px-7 py-3 rounded-full border border-accent text-white hover:bg-accent/10 transition"
                  >
              Contact Panaca Financial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
