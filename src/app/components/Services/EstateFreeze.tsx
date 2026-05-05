import { motion } from "motion/react";

export default function EstateFreeze({ setPage }: any) {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-24 overflow-hidden">
      
      {/* Background orbs */}
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => setPage("services")}
          className="mb-10 text-accent hover:underline"
        >
          ← Back to Services
        </button>

        {/* HERO */}
        <div className="max-w-5xl mb-24">
          <p className="uppercase tracking-[0.35em] text-accent mb-4">
            Advanced Strategies
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Protect today’s value.
            <span className="block text-accent">
              Transfer tomorrow’s growth.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl">
            An estate freeze can help business owners and families lock in
            current asset values while transferring future growth to the next
            generation in a tax-efficient manner.
          </p>
        </div>

        {/* WHAT IS IT */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-accent mb-8">
            What is an Estate Freeze?
          </h2>

          <div className="premium-card p-8 text-white/75 leading-relaxed text-lg">
            An estate freeze is a planning strategy used to lock in the current
            value of assets — often shares in a private corporation — while
            transferring future growth to family members or successors. This
            approach is commonly used in family business succession and
            intergenerational wealth planning across Canada.
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-accent mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Exchange of Shares",
                text: "The current owner exchanges growth shares for preferred shares with a fixed value based on the company’s current fair market value.",
              },
              {
                title: "Issuance of New Shares",
                text: "New common shares are issued to successors, family members, or a family trust to capture future growth.",
              },
              {
                title: "Future Growth Allocation",
                text: "Any future appreciation in value accrues to the newly issued common shares rather than the frozen shares.",
              },
              {
                title: "Tax Deferral",
                text: "Capital gains taxes may be deferred until the preferred shares are eventually disposed of or transferred.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="premium-card p-7"
              >
                <h3 className="text-2xl font-serif text-accent mb-4">
                  {item.title}
                </h3>

                <p className="text-white/75 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-accent mb-10">
            Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Tax Planning",
              "Business Succession",
              "Wealth Preservation",
              "Estate Efficiency",
            ].map((benefit) => (
              <div
                key={benefit}
                className="premium-card p-8 text-center"
              >
                <p className="text-xl font-serif text-accent">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WHEN TO CONSIDER */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-accent mb-8">
            When to Consider an Estate Freeze
          </h2>

          <div className="grid gap-5">

            {[
              "Your business or assets are expected to appreciate significantly.",
              "There is a clear successor ready to take over the business.",
              "You want to minimize future tax liabilities.",
              "Intergenerational wealth transfer is a priority.",
            ].map((item) => (
              <div
                key={item}
                className="premium-card p-6 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* IMPORTANT CONSIDERATIONS */}
        <div className="mb-24">
          <div className="rounded-[2rem] border border-accent/30 bg-white/5 p-10 md:p-14 gold-glow">
            <p className="uppercase tracking-[0.35em] text-accent mb-4">
              Important Considerations
            </p>

            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Estate freeze strategies should be tailored carefully.
            </h2>

            <p className="text-white/75 leading-relaxed text-lg max-w-4xl">
              Estate freezes are complex planning strategies that should be
              customized based on retirement goals, successor readiness, tax
              implications, and long-term estate objectives. Professional tax,
              legal, and financial advice is essential to ensure the strategy is
              structured effectively and complies with Canadian tax law.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-accent mb-4">
            Start Planning
          </p>

          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Explore advanced wealth strategies.
          </h2>

          <p className="text-white/75 max-w-2xl mx-auto mb-8">
            Learn how strategic planning today can help preserve and transfer
            wealth more efficiently for future generations.
          </p>

          <button
            onClick={() => setPage("contact")}
            className="px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition"
          >
            Contact Panaca Financial
          </button>
        </div>
      </div>
    </section>
  );
}
