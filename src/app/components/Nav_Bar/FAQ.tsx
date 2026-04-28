import { faqs } from "../Config_Files/FAQConfig";

export default function FAQPage() {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-24 overflow-hidden">
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-accent mb-4">
          FAQ
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
          Common questions.
          <span className="block text-accent">Clear answers.</span>
        </h1>

        <p className="text-white/75 max-w-3xl text-lg leading-relaxed mb-12">
          Answers to common questions about tax, legacy, and long-term planning.
        </p>

        <div className="grid gap-5">
          {faqs.map((item) => (
            <div key={item.question} className="premium-card p-6">
              <h3 className="text-xl font-serif text-accent mb-3">
                {item.question}
              </h3>
              <p className="text-white/75 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}