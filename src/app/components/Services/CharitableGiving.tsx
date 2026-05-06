export default function CharitableGiving({ setPage }: any) {
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
            Legacy Planning
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Charitable Giving
          </h1>

          <p className="text-white/75 text-lg leading-relaxed max-w-4xl">
            Charitable giving can help create a meaningful legacy while also
            providing potential tax advantages for individuals, families, and
            estates.
          </p>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-4">
            Charitable Giving Through Life Insurance
          </h2>

          <p className="text-white/75 leading-relaxed">
            In Canada, charitable giving through life insurance can be structured
            in several ways, each offering unique benefits and planning
            considerations. These strategies may help support charitable causes
            while also improving tax efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <div className="premium-card p-8">
            <h2 className="text-2xl font-serif text-accent mb-4">
              Naming a Charity as Beneficiary
            </h2>

            <p className="text-white/75 leading-relaxed">
              A charity can be named as the beneficiary of a life insurance
              policy, allowing the charity to receive the death benefit upon the
              policyholder’s passing. The estate may receive a charitable tax
              receipt that can help offset the terminal tax bill.
            </p>
          </div>

          <div className="premium-card p-8">
            <h2 className="text-2xl font-serif text-accent mb-4">
              Transferring Ownership of a Policy
            </h2>

            <p className="text-white/75 leading-relaxed">
              An existing policy that is no longer required for family protection
              may be transferred to a charity. In this structure, the charity
              becomes the owner and receives the death benefit directly.
            </p>
          </div>

          <div className="premium-card p-8">
            <h2 className="text-2xl font-serif text-accent mb-4">
              Purchasing a New Policy
            </h2>

            <p className="text-white/75 leading-relaxed">
              A new life insurance policy can be created specifically for
              charitable purposes, with the structure tailored to the donor’s
              goals, financial situation, and estate planning strategy.
            </p>
          </div>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-6">
            Potential Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Potential charitable donation tax credits",
              "May help offset taxes on the terminal tax return",
              "Creates a lasting charitable legacy",
              "Can improve estate planning efficiency",
              "Allows larger charitable gifts using leveraged dollars",
              "Supports causes that are important to the donor and family",
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

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-4">
            Important Considerations
          </h2>

          <p className="text-white/75 leading-relaxed mb-6">
            Every charitable giving strategy should be aligned with broader
            financial, tax, and estate planning goals. The right structure will
            depend on the donor’s intentions, family priorities, and long-term
            planning objectives.
          </p>

          <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-6">
            <p className="text-white/80 leading-relaxed">
              Professional financial, legal, and tax advice is essential to help
              ensure charitable giving strategies are structured properly and
              integrated into the overall estate plan.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8">
          <p className="uppercase tracking-[0.35em] text-accent mb-4">
            Legacy Planning
          </p>

          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Increase your impact. Improve tax efficiency.
          </h2>

          <p className="text-white/75 mb-8 max-w-3xl leading-relaxed">
            Strategic charitable giving may allow your favourite causes to
            receive significant support while also helping reduce taxes and
            preserve more wealth for your estate and beneficiaries.
          </p>

          <button
            onClick={() => setPage("contact")}
            className="px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition"
          >
            Learn More About Charitable Giving
          </button>
        </div>
      </div>
    </section>
  );
}
