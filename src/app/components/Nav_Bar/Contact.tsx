import { contactInfo } from "../Config_Files/ContactConfig";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-24 overflow-hidden">
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.35em] text-accent mb-4">
          Contact
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
          Let’s talk about your future.
        </h1>

        <p className="text-lg md:text-xl text-white/75 mb-12 max-w-2xl mx-auto">
          Reach out to discuss tax strategies, legacy planning, and building
          long-term wealth for you and your family.
        </p>

{/* ACTION BUTTONS */}
<div className="flex flex-col sm:flex-row justify-center gap-4">

  {/* EMAIL */}
  <a
    href={`mailto:${contactInfo.email}?subject=Panaca Financial Inquiry`}
    className="px-10 py-4 rounded-full bg-accent text-primary text-lg hover:opacity-90 transition shadow-xl"
  >
    Email Us
  </a>

  {/* PHONE */}
  <a
    href={`tel:${contactInfo.phone}`}
    className="px-10 py-4 rounded-full border border-accent text-white text-lg hover:bg-accent/10 transition"
  >
    Call Us
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/in/jeff-sagert-121609150/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-10 py-4 rounded-full border border-accent text-white text-lg hover:bg-accent/10 transition"
  >
    LinkedIn
  </a>

</div>

        {/* CONTACT DETAILS */}
        <div className="mt-12 space-y-3 text-white/60 text-sm">
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
          <p>{contactInfo.location}</p>
        </div>
      </div>
    </section>
  );
}
