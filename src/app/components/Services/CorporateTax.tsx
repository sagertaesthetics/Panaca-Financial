export default function CorporateTax({ setPage }: any) {
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
          Corporate Tax Planning
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
          Reduce corporate tax traps.
          <span className="block text-accent">
            Protect business wealth.
          </span>
        </h1>

        <p className="text-white/75 text-lg leading-relaxed max-w-4xl mb-10">
          Many successful businesses have excess cash trapped inside their
          corporation that cannot easily be withdrawn without significant tax
          consequences. While investing surplus cash inside the corporation may
          seem logical, passive investments can create serious tax issues.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#small-business-deduction"
            className="px-5 py-2 rounded-full border border-accent/30 bg-white/5 text-white/75 hover:bg-accent/10 hover:text-white transition"
          >
            Small Business Deduction
          </a>

          <a
            href="#lifetime-capital-gains"
            className="px-5 py-2 rounded-full border border-accent/30 bg-white/5 text-white/75 hover:bg-accent/10 hover:text-white transition"
          >
            Lifetime Capital Gains
          </a>

          <a
            href="#double-taxation"
            className="px-5 py-2 rounded-full border border-accent/30 bg-white/5 text-white/75 hover:bg-accent/10 hover:text-white transition"
          >
            Double Taxation
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "1. High Tax on Passive Income",
              text:
                "Passive investment income such as interest, dividends, and capital gains inside a corporation may be taxed at up to 50.2% from dollar one, meaning nearly half of the investment growth can be lost to tax.",
            },
            {
              title: "2. Small Business Deduction Grind Down",
              text:
                "Once passive income exceeds $50,000, the corporation begins losing access to the Small Business Deduction. At $150,000+ of passive income, the small business deduction is fully eliminated, causing your corporation to pay more corporate tax than necessary.",
            },
            {
              title: "3. Loss of Lifetime Capital Gains Exemption",
              text:
                "Too much passive income or excess cash inside a corporation can affect whether shares qualify for the Lifetime Capital Gains Exemption, potentially putting significant tax-free gains at risk.",
            },
            {
              title: "4. Double Taxation",
              text:
                "When a shareholder of a Canadian-Controlled Private Corporation passes away, the estate may face tax on the shares at death and again when corporate assets are distributed to heirs.",
            },
          ].map((item) => (
            <div key={item.title} className="premium-card p-8">
              <h2 className="text-3xl font-serif text-accent mb-4">
                {item.title}
              </h2>

              <p className="text-white/75 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          id="small-business-deduction"
          className="premium-card p-8 mb-16 scroll-mt-32"
        >
          <h2 className="text-3xl font-serif text-accent mb-4">
            Tax Impact of Losing the Small Business Deduction
          </h2>

          <p className="text-white/75 leading-relaxed mb-6">
            Once passive income becomes too high, the Small Business Deduction
            may be reduced or eliminated entirely. This means the corporation
            may lose access to the lower small business tax rate on active
            business income.
          </p>

<div className="grid md:grid-cols-3 gap-4 mb-8">
  <div className="rounded-2xl border border-accent/25 bg-white/5 p-5">
    <p className="text-white/70 mb-3">
      Tax on $500,000 business revenue at 11.2%
    </p>

    <p className="text-sm text-white/50 mb-2">
      $500,000 × 11.2%
    </p>

    <p className="text-accent font-serif text-xl">
      = $56,000 corporate tax bill
    </p>
  </div>

  <div className="rounded-2xl border border-accent/25 bg-white/5 p-5">
    <p className="text-white/70 mb-3">
      Tax on $500,000 business revenue at 26.5%
    </p>

    <p className="text-sm text-white/50 mb-2">
      $500,000 × 26.5%
    </p>

    <p className="text-accent font-serif text-xl">
      = $132,500 corporate tax bill
    </p>
  </div>

  <div className="rounded-2xl border border-accent/25 bg-white/5 p-5">
    <p className="text-white/70 mb-3">
      Additional annual tax owing
    </p>

    <p className="text-sm text-white/50 mb-2">
      $132,500 − $56,000
    </p>

    <p className="text-accent font-serif text-xl">
      = $76,500
    </p>
  </div>
</div>

<div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-6">
  <p className="text-white/80 leading-relaxed">
    In this example, excessive passive income causes the Small Business
    Deduction to be fully clawed back, resulting in $76,500 in additional
    annual corporate tax on the first $500,000 of active business income
    alone.
  </p>
</div>
        <div
          id="lifetime-capital-gains"
          className="premium-card p-8 mb-16 scroll-mt-32"
        >
          <h2 className="text-3xl font-serif text-accent mb-4">
            Lifetime Capital Gains Exemption Risk
          </h2>

          <p className="text-white/75 leading-relaxed mb-6">
            The Lifetime Capital Gains Exemption may allow Canadian taxpayers to
            shelter up to $1,250,000 of capital gains when selling qualifying
            small business corporation shares. However, excess passive assets
            inside the corporation can cause the corporation to fail the active
            business asset tests.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Shares must generally qualify as shares of a Qualified Small Business Corporation.",
              "At least 90% of the fair market value of corporate assets must generally be used in active business at the time of sale.",
              "Excess cash, passive investments, rents, royalties, or investment assets may affect eligibility.",
              "Purification planning may help remove or reposition passive assets before a sale.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-accent/25 bg-white/5 p-5 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          id="double-taxation"
          className="premium-card p-8 mb-16 scroll-mt-32"
        >
          <h2 className="text-3xl font-serif text-accent mb-4">
            Double Taxation on Death
          </h2>

          <p className="text-white/75 leading-relaxed mb-6">
            When a shareholder of a Canadian-Controlled Private Corporation
            passes away, they are deemed to have disposed of their shares at
            fair market value. This may trigger a capital gain on the final tax
            return. Later, when corporate assets are distributed to heirs, those
            same underlying values may be taxed again as dividends or through a
            wind-up. Without proper planning, the value of the business could be
            significantly reduced, in some cases up to 75%. With the right
            corporate tax and estate planning strategy, this burden may be
            reduced or avoided.
          </p>

          <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-6">
            <p className="text-white/80 leading-relaxed">
              Without proper planning, the value of the business could be
              significantly reduced. With the right corporate tax and estate
              planning strategy, this burden may be reduced or avoided.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Plan before passive income creates a larger tax problem.
          </h2>

          <p className="text-white/75 leading-relaxed mb-8 max-w-4xl">
            Corporate tax planning can help business owners manage surplus
            corporate cash, reduce tax erosion, protect access to key tax
            benefits, and preserve more wealth for the next generation.
          </p>

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
