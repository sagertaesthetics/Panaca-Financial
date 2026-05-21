import { useState } from "react";
import logoMark from "../Assets/Panaca_Mark.png";

type Card = "jeff" | "panaca" | null;

export default function About({ setPage }: { setPage: (page: string) => void }) {
  const [active, setActive] = useState<Card>(null);

  const goTo = (page: string) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggle = (card: Card) => setActive((prev) => (prev === card ? null : card));

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

      <section className="px-6 py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto space-y-5">

          {/* JEFF CARD */}
          <div className={`rounded-3xl border transition-all duration-300 overflow-hidden ${active === "jeff" ? "border-accent shadow-2xl" : "border-accent/25"}`}>
            <button
              onClick={() => toggle("jeff")}
              className="w-full flex items-center justify-between gap-6 px-8 py-6 bg-white/5 hover:bg-white/8 transition focus:outline-none"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-accent/40 bg-white/5 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 40 40" className="w-7 h-7 text-accent/50" fill="currentColor">
                    <circle cx="20" cy="14" r="8" />
                    <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16H4z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg font-serif text-white">About Jeff Sagert</p>
                  <p className="text-accent text-xs tracking-widest uppercase mt-0.5">Founder, Panaca Financial</p>
                </div>
              </div>
              <span
                className="text-accent text-2xl leading-none shrink-0 transition-transform duration-300"
                style={{ transform: active === "jeff" ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>

            <div
              className="transition-all duration-500 overflow-hidden"
              style={{ maxHeight: active === "jeff" ? "1200px" : "0px" }}
            >
              <div className="px-8 pb-8 pt-5 border-t border-accent/20 space-y-5 text-white/80 leading-relaxed">
                <p>
                  Born and raised in Tottenham, ON, Jeff grew up with a love for sports especially hockey and baseball. After graduating high school on the honour roll, he went on to Wilfrid Laurier University, earning an honours degree in Economics and Financial Management.
                </p>
                <p>
                  Over 25 years in financial services, Jeff is committed to providing exceptional service. Even though the subject matter is complex, he makes it easy to understand using plain language so clients fully grasp how working with him leads to passing on as much of their estate as possible to their heirs.
                </p>
                <p className="italic text-accent/90 font-serif text-lg border-l-2 border-accent/40 pl-5">
                  "Do right by my client every single time without fail."
                </p>
                <p>
                  Each client is unique and their situation different from anyone else's. That means solutions Jeff recommends are tailored to address your own individual circumstances.
                </p>
                <p>
                  Jeff is married to his wife Kerri-Ann, who is a teacher with the Toronto District School Board. He also has two daughters, Tasha and Jadyn, who love playing soccer and baseball respectively.
                </p>
              </div>
            </div>
          </div>

          {/* PANACA CARD */}
          <div className={`rounded-3xl border transition-all duration-300 overflow-hidden ${active === "panaca" ? "border-accent shadow-2xl" : "border-accent/25"}`}>
            <button
              onClick={() => toggle("panaca")}
              className="w-full flex items-center justify-between gap-6 px-8 py-6 bg-white/5 hover:bg-white/8 transition focus:outline-none"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-accent/40 bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src={logoMark} alt="Panaca" className="w-9 h-9 object-contain mix-blend-screen" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-serif text-white">About Panaca Financial</p>
                  <p className="text-accent text-xs tracking-widest uppercase mt-0.5">Tax · Wealth · Legacy</p>
                </div>
              </div>
              <span
                className="text-accent text-2xl leading-none shrink-0 transition-transform duration-300"
                style={{ transform: active === "panaca" ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>

            <div
              className="transition-all duration-500 overflow-hidden"
              style={{ maxHeight: active === "panaca" ? "1200px" : "0px" }}
            >
              <div className="px-8 pb-8 pt-5 border-t border-accent/20 space-y-5 text-white/80 leading-relaxed">
                <p>
                  At Panaca Financial we believe that you should pay as little tax as possible throughout your lifetime. Our underlying belief is that you should pass as much of your net worth as possible onto your heirs, estate, charity or wherever you choose. Without proper planning CRA becomes your unintended beneficiary of your estate. Don't leave your legacy to chance. Our mission is to help you create multi-generational wealth.
                </p>
                <p>
                  Think of us as the quarterback for your financial defense. We clarify the complexities, help you understand the full picture, and build strategies and structures tailored specifically to your objectives.
                </p>
                <p>
                  We believe in building long-term relationships with our clients, based on trust, transparency, and mutual respect. We take the time to get to know our clients and their families, their financial goals, and their unique circumstances. This helps us develop a customized plan that is designed to meet your specific needs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[2rem] bg-white/8 p-10 text-center shadow-2xl border border-accent/30 gold-glow !mt-12">
            <p className="uppercase tracking-[0.35em] text-accent mb-3">Don't leave your legacy to chance.</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to start the conversation?</h2>
            <p className="text-white/75 max-w-xl mx-auto mb-6">
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
