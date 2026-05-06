import { faqSections } from "../Config_Files/FAQConfig";

export default function FAQPage() {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-24 overflow-hidden">
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-accent mb-4">
          Resources
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-accent mb-6">
          FAQ
        </h1>

        <p className="text-white/75 max-w-3xl mb-14">
          Answers to common questions about tax planning, estate planning,
          business continuity, charitable giving, and corporate strategies.
        </p>

        <div className="space-y-14">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
                {section.title}
              </h2>

              <div className="grid gap-5">
                {section.faqs.map((faq) => (
                  <div key={faq.question} className="premium-card p-6">
                    <h3 className="text-xl font-serif text-accent mb-3">
                      {faq.question}
                    </h3>

                    <p className="text-white/75 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
