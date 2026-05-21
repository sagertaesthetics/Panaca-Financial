import { useState } from "react";
import logoMark from "../Assets/Panaca_Mark.png";

type Card = "jeff" | "panaca" | null;

export default function About({ setPage }: { setPage: (page: string) => void }) {
  const [active, setActive] = useState<Card>(null);

  const goTo = (page: string) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggle = (card: Card) => {
    setActive((prev) => (prev === card ? null : card));
  };

  return (
    <div className="bg-background text-foreground min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-14 bg-primary text-primary-foreground">
        <div className="soft-orb top-10 right-20 w-64 h-64" />
        <div className="soft-orb bottom-10 left-10 w-40 h-40" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-accent mb-4">About</p>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-4">
              The people behind
              <span className="block text-accent">your plan.</span>
            </h1>
            <p className="text-white/70 max-w-xl text-lg leading-relaxed">
              Select a card to learn more.
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

      {/* CARDS */}
      <section className="px-6 py-16 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* JEFF CARD */}
          <button
            onClick={() => toggle("jeff")}
            className={`w-full text-left rounded-3xl border transition-all duration-300 overflow-hidden focus:outline-none ${
              active === "jeff"
                ? "border-accent bg-white/10 shadow-2xl"
                : "border-accent/25 bg-white/5 hover:border-accent/60 hover:bg-white/8"
            }`}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between px-8 py-6 gap-6">
              <div className="flex items-center gap-5">
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-full border border-accent/40 bg-white/5 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 40 40" className="w-8 h-8 text-accent/50" fill="currentColor">
                    <circle cx="20" cy="14" r="8" />
                    <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16H4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-serif text-white">Jeff</p>
                  <p className="text-accent text-xs tracking-widest uppercase mt-0.5">
                    Founder, Panaca Financial
                  </p>
                </div>
              </div>
              <span
                className="text-accent text-2xl leading-none transition-transform duration-300 shrink-0"
                style={{ transform: active === "jeff" ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </div>

            {/* Jeff Content */}
            <div
              className="transition-all duration-500 overflow-hidden"
              style={{ maxHeight: active === "jeff" ? "1200px" : "0px" }}
            >
              <div className="px-8 pb-8 border-t border-accent/20 pt-6 grid md:grid-cols-2 gap-8">
                {/* Headshot */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-full max-w-xs">
                    <div className="absolute inset-0 rounded-2xl bg-accent/15 blur-2xl scale-105" />
                    <div className="relative rounded-2xl border border-accent/30 bg-white/5 h-64 flex flex-col items-center justify-center gap-2 overflow-hidden">
                      <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/50 rounded-tl-md" />
                      <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/50 rounded-tr-md" />
                      <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/50 rounded-bl-md" />
                      <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/50 rounded-br-md" />
                      <svg viewBox="0 0 80 80" className="w-20 h-20 text-accent/35" fill="currentColor">
                        <circle cx="40" cy="28" r="18" />
                        <path d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30H10z" />
                      </svg>
                      <p className="text-accent/50 text-xs tracking-[0.2em] uppercase">Headshot</p>
                    </div>
                  </div>
                </div>

                {/* Bio Text */}
                <div className="space-y-5 text-white/80 leading-relaxed">
                  <div>
                    <p className="text-accent text-xs uppercase tracking-widest mb-1">Background</p>
                    <p>Born and raised in Tottenham, ON, Jeff grew up with a love for sports — especially hockey and baseball. After graduating high school on the honour roll, he went on to Wilfrid Laurier University, earning an honours degree in Economics and Financial Management.</p>
                  </div>
                  <div>
                    <p className="text-accent text-xs uppercase tracking-widest mb-1">25+ Years in Financial Services</p>
                    <p>Committed to exceptional service, Jeff makes even the most complex topics easy to understand — using plain language so clients fully grasp how working with him leads to passing on as much of their estate as possible to their heirs.</p>
                  </div>
                  <div>
                    <p className="text-accent text-xs uppercase tracking-widest mb-1">Guiding Principle</p>
                    <p className="italic text-accent/90 font-serif">"Do right by my client every single time without fail."</p>
                    <p className="mt-1">Each client is unique. Every solution is tailored to your individual circumstances — never one-size-fits-all.</p>
                  </div>
                  <div>
                    <p className="text-accent text-xs uppercase tracking-widest mb-1">Family</p>
                    <p>Jeff is married to Kerri-Ann, a teacher with the Toronto District School Board. Together they have two daughters, Tasha and Jadyn, who love soccer and baseball.</p>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* PANACA CARD */}
          <button
            onClick={() => toggle("panaca")}
            className={`w-full text-left rounded-3xl border transition-all duration-300 overflow-hidden focus:outline-none ${
              active === "panaca"
                ? "border-accent bg-white/10 shadow-2xl"
                : "border-accent/25 bg-white/5 hover:border-accent/60 hover:bg-white/8"
            }`}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between px-8 py-6 gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border border-accent/40 bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src={logoMark} alt="Panaca" className="w-10 h-10 object-contain mix-blend-screen" />
                </div>
                <div>
                  <p className="text-xl font-serif text-white">Panaca Financial</p>
                  <p className="text-accent text-xs tracking-widest uppercase mt-0.5">
                    Tax · Wealth · Legacy
                  </p>
                </div>
              </div>
              <span
                className="text-accent text-2xl leading-none transition-transform duration-300 shrink-0"
                style={{ transform: active === "panaca" ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </div>

            {/* Panaca Content */}
            <div
              className="transition-all duration-500 overflow-hidden"
              style={{ maxHeight: active === "panaca" ? "1200px" : "0px" }}
            >
              <div className="px-8 pb-8 border-t border-accent/20 pt-6 space-y-6 text-white/80 leading-relaxed">
                <div>
                  <p className="text-accent text-xs uppercase tracking-widest mb-1">Our Belief</p>
                  <p>You should pay as little tax as possible throughout your lifetime. Our underlying belief is that you should pass as much of your net worth as possible onto your heirs, estate, charity — or wherever you choose. Without proper planning, CRA becomes your unintended beneficiary. Don't leave your legacy to chance.</p>
                </div>
                <div>
                  <p className="text-accent text-xs uppercase tracking-widest mb-1">Our Mission</p>
                  <p>To help you create multi-generational wealth. We clarify the complexities, help you see the full picture, and build strategies and structures tailored specifically to your objectives. Think of us as the quarterback for your financial defense.</p>
                </div>
                <div>
                  <p className="text-accent text-xs uppercase tracking-widest mb-1">Our Approach</p>
                  <p>We believe in long-term relationships built on trust, transparency, and mutual respect. We take the time to know our clients and their families, their financial goals, and their unique circumstances — developing a customized plan designed to meet your specific needs.</p>
                </div>
              </div>
            </div>
          </button>

          {/* CTA */}
          <div className="rounded-[2rem] bg-white/8 p-10 md:p-14 text-center shadow-2xl border border-accent/30 gold-glow mt-10">
            <p className="uppercase tracking-[0.35em] text-accent mb-4">
              Don't leave your legacy to chance.
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-5">
              Ready to start the conversation?
            </h2>
            <p className="text-white/75 max-w-xl mx-auto mb-7">
              Every great plan begins with a single conversation. Let's talk about your taxes, your legacy, and the future you want to build.
            </p>
            <button
              onClick={() => goTo("contact")}
              className="px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition font-medium"
            >
              Contact Panaca Financial
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
