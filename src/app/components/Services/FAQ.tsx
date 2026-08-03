import { useState } from "react";
import { faqSections } from "../Config_Files/FAQConfig";

function getServiceLink(title: string) {
  const cleanTitle = title.toLowerCase();

  if (cleanTitle.includes("estate")) return "estate-preservation";

  if (cleanTitle.includes("charitable"))
    return "charitable-giving";

  if (cleanTitle.includes("buy"))
    return "buy-sell";

  if (
    cleanTitle.includes("corporate owned") ||
    cleanTitle.includes("life insurance")
  )
    return "corporate-life";

  if (
    cleanTitle.includes("capital dividend") ||
    cleanTitle.includes("cda")
  )
    return "cda";

  if (cleanTitle.includes("tax"))
    return "taxes";

  return null;
}

export default function FAQPage({ setPage }: any) {
  const [activeSection, setActiveSection] = useState(faqSections[0]);

  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-24 overflow-hidden">
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <button
          onClick={() => setPage("resources")}
          className="mb-10 text-accent hover:underline"
        >
          ← Back to Resources
        </button>

        <p className="uppercase tracking-[0.35em] text-accent mb-4">
          Resources
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-accent mb-6">
          FAQ
        </h1>

        <p className="text-white/75 max-w-3xl mb-12">
          Choose a topic to explore common questions about tax planning,
          estate preservation, corporate strategies, and legacy planning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {faqSections.map((section) => (
            <button
              key={section.title}
              onClick={() => {
                setActiveSection(section);

                setTimeout(() => {
                  document
                    .getElementById("faq-questions")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 50);
              }}
              className={`text-left premium-card p-6 transition-all hover:-translate-y-1 ${
                activeSection.title === section.title
                  ? "border-accent bg-accent/10"
                  : ""
              }`}
            >
              <h2 className="text-2xl font-serif text-accent mb-3">
                {section.title}
              </h2>

              <p className="text-white/60 text-sm mb-5">
                {section.faqs.length} questions
              </p>

              {getServiceLink(section.title) && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setPage(getServiceLink(section.title));
                  }}
                  className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-white/5 text-white/75 hover:bg-accent/10 hover:text-white transition text-sm"
                >
                  Learn More →
                </span>
              )}
            </button>
          ))}
        </div>

        <div id="faq-questions">
          <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
            {activeSection.title}
          </h2>

          <div className="grid gap-5">
            {activeSection.faqs.map((faq) => (
              <div key={faq.question} className="premium-card p-6">
                <h3 className="text-xl font-serif text-accent mb-3">
                  {faq.question}
                </h3>

                <p className="text-white/75 leading-relaxed whitespace-pre-line">
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
