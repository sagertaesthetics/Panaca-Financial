import logoMark from "../Assets/Panaca_Mark.png";
import { contactInfo } from "../Config_Files/ContactConfig";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-24 overflow-hidden">
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="uppercase tracking-[0.35em] text-accent mb-4">
            Contact
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Let’s talk about your future.
          </h1>

          <p className="text-lg text-white/75 mb-8 max-w-xl">
            Reach out to discuss tax strategies, legacy planning, and building
            long-term wealth for you and your family.
          </p>

          <a
            href={`mailto:${contactInfo.email}?subject=Panaca Financial Inquiry`}
            className="inline-block px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition shadow-xl"
          >
            Email Panaca Financial
          </a>

          <div className="mt-6 text-sm text-white/60 space-y-2">
            <p>{contactInfo.email}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.location}</p>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="premium-card p-7 space-y-5"
        >
          <div>
            <label className="block text-sm text-accent mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl bg-white/10 border border-accent/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm text-accent mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-xl bg-white/10 border border-accent/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm text-accent mb-2">
              Phone optional
            </label>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-xl bg-white/10 border border-accent/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm text-accent mb-2">Message</label>
            <textarea
              placeholder="Tell us what you’d like help with..."
              rows={5}
              className="w-full rounded-xl bg-white/10 border border-accent/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition shadow-xl"
          >
            Submit Inquiry
          </button>

          <p className="text-xs text-white/50 text-center">
            Form connection can be added later. Email option works now.
          </p>
        </form>
      </div>
    </section>
  );
}