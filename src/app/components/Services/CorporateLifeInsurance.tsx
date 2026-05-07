export default function CorporateLifeInsurance({ setPage }: any) {
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
          Corporate-Owned Life Insurance
        </h1>

        <p className="text-white/75 text-lg leading-relaxed max-w-4xl mb-16">
          Corporate-owned life insurance (COLI) allows a corporation to own a
          policy on a shareholder or key employee, using tax-efficient corporate
          dollars to protect the business, fund obligations, and transfer wealth
          tax-efficiently.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              Tax Efficiency
            </h2>
            <p className="text-white/75">
              Premiums are paid using corporate income, which is often taxed at
              lower rates than personal income — making it an efficient way to
              deploy excess corporate cash.
            </p>
          </div>

          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              Tax-Free Payout
            </h2>
            <p className="text-white/75">
              Upon death, the benefit is paid to the corporation tax-free. The
              proceeds (minus ACB) can often be distributed to shareholders
              tax-free through the Capital Dividend Account (CDA).
            </p>
          </div>

          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              Wealth Accumulation
            </h2>
            <p className="text-white/75">
              Permanent policies can build cash value on a tax-deferred basis,
              which can be accessed during the insured’s lifetime.
            </p>
          </div>

          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              Key Uses
            </h2>
            <div className="space-y-2 text-white/75">
              <p>Shareholder buyout funding</p>
              <p>Key person protection</p>
              <p>Debt and loan coverage</p>
            </div>
          </div>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-6">
            Accessing Cash Inside the Policy
          </h2>

          <p className="text-white/75 mb-6 leading-relaxed">
            Corporations can access the cash value of a policy in several
            tax-efficient ways without immediately triggering taxation.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-white/75">
            <div className="rounded-2xl border border-accent/25 bg-white/5 p-5">
              <strong className="text-white">Policy Loans:</strong> Borrow
              directly from the insurance company.
            </div>

            <div className="rounded-2xl border border-accent/25 bg-white/5 p-5">
              <strong className="text-white">Collateral Loans:</strong> Use the
              policy to secure a bank loan while cash value continues to grow.
            </div>

            <div className="rounded-2xl border border-accent/25 bg-white/5 p-5">
              <strong className="text-white">Withdrawals:</strong> Access cash
              directly, but may trigger taxable events and reduce coverage.
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Turn corporate cash into a long-term personal asset while improving tax efficiency.
          </h2>

          <p className="text-white/75 mb-8 max-w-3xl">
            Corporate-owned life insurance can be a powerful strategy to protect
            your business, manage tax exposure, and transfer wealth efficiently.
          </p>

          <button
            onClick={() => setPage("contact")}
            className="px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition"
          >
            Learn More About Corporate Insurance
          </button>
        </div>
      </div>
    </section>
  );
}
