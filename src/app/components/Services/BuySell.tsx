export default function BuySell({ setPage }: any) {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-20 overflow-hidden">
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <button
          onClick={() => setPage("services")}
          className="mb-10 text-accent hover:underline"
        >
          ← Back to Services
        </button>

        <div className="mb-16">
          <p className="uppercase tracking-[0.35em] text-accent mb-4">
            Business Continuity
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Buy-Sell Planning
          </h1>

<p className="text-white/75 text-lg leading-relaxed max-w-4xl">
  Most partnerships run smoothly until something unexpected happens — such as sickness, injury, or the death of a partner. Without proper planning,
  including a buy-sell agreement and funding to support it, many businesses may face the possibility of having a new partner the remaining owners
  have no say in.
</p>
</div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-4">
            The Big Question
          </h2>

          <p className="text-white/75 leading-relaxed mb-6">
            How do the remaining partners purchase the shares of a partner who
            can no longer work in the business?
          </p>

          <p className="text-white/75 leading-relaxed">
            The business itself may not have enough cash on hand to buy the
            shares of the partner who can no longer work due to sickness, injury,
            or death. That is why the funding plan is just as important as the
            agreement itself.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-accent mb-6">
            Ways to Fund the Buyout
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              "Use corporate or personal assets to purchase the shares",
              "Get a loan to fund the buyout",
              "Use insurance as the funding mechanism so money is available when the business needs it",
            ].map((item) => (
              <div key={item} className="premium-card p-6 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-accent mb-6">
            Key Aspects of a Buy-Sell Agreement
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="premium-card p-7">
              <h3 className="text-2xl font-serif text-accent mb-4">
                Triggering Events
              </h3>

              <p className="text-white/75 leading-relaxed">
                Defines when the agreement takes effect, including death,
                disability, retirement, or insolvency.
              </p>
            </div>

            <div className="premium-card p-7">
              <h3 className="text-2xl font-serif text-accent mb-4">
                Funding Options
              </h3>

              <p className="text-white/75 leading-relaxed">
                Often funded by life insurance for death or disability insurance
                for injury or illness, helping provide immediate cash for the
                purchase.
              </p>
            </div>

            <div className="premium-card p-7">
              <h3 className="text-2xl font-serif text-accent mb-4">
                Valuation Methods
              </h3>

              <p className="text-white/75 leading-relaxed">
                Sets a formula or method, such as agreed value, appraisal, or a
                formula, to determine the purchase price and simplify the process.
              </p>
            </div>
          </div>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-4">
            Structuring the Funding
          </h2>

          <p className="text-white/75 leading-relaxed">
            There are several ways to structure the funding of a buy-sell
            agreement. Each approach has its own advantages and disadvantages.
            The right option depends on the business structure, ownership group,
            cash flow, tax considerations, and the specific goals of the
            partners.
          </p>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-6">
            Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Ensures Stability",
                text: "Helps prevent business operations from stalling during an ownership crisis.",
              },
              {
                title: "Provides Liquidity",
                text: "Helps ensure departing owners or their families receive fair cash value for their shares.",
              },
              {
                title: "Maintains Control",
                text: "Helps prevent outsiders, such as a deceased partner’s spouse, from becoming business owners.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-accent/25 bg-white/5 p-5"
              >
                <h3 className="text-xl font-serif text-accent mb-3">
                  {item.title}
                </h3>

                <p className="text-white/75 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Is your buy-sell agreement properly funded?
          </h2>

          <p className="text-white/75 mb-8 max-w-3xl leading-relaxed">
            A buy-sell agreement is only useful if there is a clear plan to fund
            it when the business needs it most. Insurance can help ensure cash is
            available at the exact time the agreement is triggered.
          </p>

          <button
            onClick={() => setPage("contact")}
            className="px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition"
          >
            Learn More About Buy-Sell Planning
          </button>
        </div>
      </div>
    </section>
  );
}
