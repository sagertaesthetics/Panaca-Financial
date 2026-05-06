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
          Insuring your corporation has enough moneyto purchase shares of a partner should they no longer be able to work in the business
          </p>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-4">
            Why Buy-Sell Planning Matters
          </h2>

          <p className="text-white/75 leading-relaxed mb-6">
            Most partnerships run smoothly until something unexpected happens,
            such as sickness, injury, or the death of a partner. Without proper
            planning, the remaining owners may face the possibility of a new
            partner they had no say in.
          </p>

          <p className="text-white/75 leading-relaxed">
            The big question is how the remaining partners purchase the shares
            of the partner who can no longer work in the business — especially
            when the business may not have enough cash available.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-serif text-accent mb-6">
            Funding the Buyout
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              "Use corporate or personal assets to purchase the shares",
              "Get a loan to fund the buyout",
              "Use insurance as the funding mechanism so money is available when needed",
            ].map((item) => (
              <div key={item} className="premium-card p-6 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <div className="premium-card p-7">
            <h3 className="text-2xl font-serif text-accent mb-4">
              Triggering Events
            </h3>
            <p className="text-white/75">
              Defines when the agreement takes effect, including death,
              disability, retirement, or insolvency.
            </p>
          </div>

          <div className="premium-card p-7">
            <h3 className="text-2xl font-serif text-accent mb-4">
              Funding Options
            </h3>
            <p className="text-white/75">
              Often funded by life insurance or disability insurance to provide
              immediate cash for the purchase.
            </p>
          </div>

          <div className="premium-card p-7">
            <h3 className="text-2xl font-serif text-accent mb-4">
              Valuation Methods
            </h3>
            <p className="text-white/75">
              Sets a formula or method to determine the purchase price and
              simplify the process.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              Main Structures
            </h2>

            <div className="space-y-4 text-white/75">
              <p>
                <strong className="text-white">Cross-Purchase Agreement:</strong>{" "}
                Remaining owners purchase the departing owner’s shares directly.
              </p>

              <p>
                <strong className="text-white">Redemption Agreement:</strong>{" "}
                The business entity buys back the departing owner’s shares.
              </p>
            </div>
          </div>

          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              Benefits
            </h2>

            <div className="space-y-4 text-white/75">
              <p>Ensures stability during an ownership crisis.</p>
              <p>Provides liquidity for departing owners or their families.</p>
              <p>Maintains control by preventing outsiders from becoming owners.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Is your buy-sell agreement properly funded?
          </h2>

          <p className="text-white/75 mb-8 max-w-3xl">
            A buy-sell agreement is only useful if there is a clear plan to fund
            it when the business needs it most.
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
