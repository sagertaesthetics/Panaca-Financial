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
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="premium-card p-7 space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </p>

          <div>
            <label className="block text-sm text-accent mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl bg-white/10 border border-accent/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm text-accent mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
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
              name="phone"
              placeholder="Phone number"
              className="w-full rounded-xl bg-white/10 border border-accent/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm text-accent mb-2">Message</label>
            <textarea
              name="message"
              required
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
        </form>
      </div>
    </section>
  );
}
