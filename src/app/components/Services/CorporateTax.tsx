export default function CorporateTax({ setPage }: any) {
  return (
    <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-20 overflow-hidden">
      <div className="soft-orb top-20 left-10 w-40 h-40" />
      <div className="soft-orb bottom-20 right-10 w-56 h-56" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <button onClick={() => setPage("services")} className="mb-10 text-accent hover:underline">
          ← Back to Services
        </button>

        <p className="uppercase tracking-[0.35em] text-accent mb-4">
          Corporate Tax Planning
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
          Reduce hidden tax traps.
          <span className="block text-accent">Protect corporate growth.</span>
        </h1>

        <p className="text-white/75 text-lg leading-relaxed max-w-4xl mb-16">
          Many successful businesses have surplus cash trapped inside their corporation.
          When that cash is invested passively, it can create major tax consequences.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              High Tax on Passive Income
            </h2>
            <p className="text-white/75 leading-relaxed">
              Passive investment income such as interest, dividends, and capital gains
              inside a corporation can be taxed at up to 50.2%, meaning nearly half of
              investment growth may be lost to tax.
            </p>
          </div>

          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              Small Business Deduction Grind Down
            </h2>
            <p className="text-white/75 leading-relaxed">
              Once passive income exceeds $50,000, the business begins losing access to
              the Small Business Deduction. At $150,000+ in passive income, the SBD is
              completely eliminated.
            </p>
          </div>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-6">
            What It Looks Like
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-accent/30 text-accent">
                  <th className="py-3 pr-4">Income Type</th>
                  <th className="py-3 pr-4">Tax Rate with SBD</th>
                  <th className="py-3 pr-4">Tax Rate without SBD</th>
                </tr>
              </thead>
              <tbody className="text-white/75">
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">First $500K Active Income</td>
                  <td className="py-3 pr-4">~12.2%</td>
                  <td className="py-3 pr-4">26.5%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">Over $500K Active Income</td>
                  <td className="py-3 pr-4">26.5%</td>
                  <td className="py-3 pr-4">26.5%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Passive Income</td>
                  <td className="py-3 pr-4">~50.2%</td>
                  <td className="py-3 pr-4">~50.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-4">
            Tax Impact of Losing the SBD
          </h2>

          <p className="text-white/75 leading-relaxed mb-6">
            On the first $500,000 of active income alone, the business may pay
            approximately $71,500 more in tax annually when the Small Business Deduction
            is fully clawed back.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-accent/25 bg-white/5 p-5">
              <p className="text-accent font-serif text-xl mb-2">$61,000</p>
              <p className="text-white/70">Tax at 12.2%</p>
            </div>

            <div className="rounded-2xl border border-accent/25 bg-white/5 p-5">
              <p className="text-accent font-serif text-xl mb-2">$132,500</p>
              <p className="text-white/70">Tax at 26.5%</p>
            </div>

            <div className="rounded-2xl border border-accent/25 bg-white/5 p-5">
              <p className="text-accent font-serif text-xl mb-2">$71,500</p>
              <p className="text-white/70">Additional tax owing</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Build tax-efficient savings inside the corporation.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-white/75 mb-8">
            {[
              "Small Business Deduction is not affected",
              "Tax-free growth opportunities",
              "Tax-free access while living",
              "Tax-free transfer to heirs via the Capital Dividend Account",
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
            Learn More About Corporate Tax Planning
          </button>
        </div>
      </div>
    </section>
  );
}