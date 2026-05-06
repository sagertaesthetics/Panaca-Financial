import { useState } from "react";
import { faqSections } from "../Config_Files/FAQConfig";

export default function FAQPage() {
  const [activeSection, setActiveSection] = useState(faqSections[0]);

  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-24 overflow-hidden">
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-accent mb-4">
          Resources
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-accent mb-6">
          FAQ
        </h1>

        <p className="text-white/75 max-w-3xl mb-12">
          Choose a topic to view common questions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {faqSections.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveSection(section)}
              className={`text-left premium-card p-6 transition ${
                activeSection.title === section.title
                  ? "border-accent bg-accent/10"
                  : ""
              }`}
            >
              <h2 className="text-2xl font-serif text-accent mb-3">
                {section.title}
              </h2>

              <p className="text-white/60 text-sm">
                {section.faqs.length} questions
              </p>
            </button>
          ))}
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
            {activeSection.title}
          </h2>

          <div className="grid gap-5">
            {activeSection.faqs.map((faq) => (
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
      </div>
    </section>
  );
}
