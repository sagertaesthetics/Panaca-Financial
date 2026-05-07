export default function CDA({ setPage }: any) {
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

        <p className="uppercase tracking-[0.35em] text-accent mb-4">
          Corporate Planning
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
          Capital Dividend Account
        </h1>

        <p className="text-white/75 text-lg leading-relaxed max-w-4xl mb-16">
          A Capital Dividend Account (CDA) is a notional, cumulative tax account
          used by private Canadian corporations to track certain tax-free
          surpluses and distribute cash to residential shareholders as tax free income after tax.
        </p>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-6">
            Key CDA Transactions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Realized capital gains — 50% of net capital gains are added",
              "Capital losses — 50% of net capital losses reduce the CDA balance",
              "Life insurance proceeds — proceeds minus the policy’s adjusted cost basis are added",
              "Capital dividends received from other private corporations",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-accent/25 bg-white/5 p-5 text-white/75">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Get corporate cash trapped inside a business into your estate or heirs hands tax efficiently.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-white/75 mb-8">
            {[
              "Provides one of the most efficient ways to dsitribute cash inside a company tax free",
              "CDA balance should be verified before distribution",
              "Timing and filing matter",
              "Processing and confirmation can take several months",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-accent/25 bg-white/5 p-5">
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={() => setPage("contact")}
            className="px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition"
          >
            Learn More About CDA Planning
          </button>
        </div>
      </div>
    </section>
  );
}
