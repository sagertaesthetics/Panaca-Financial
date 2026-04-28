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
            Charitable giving can help you leave a meaningful legacy while also
            reducing taxes on a terminal tax return.
          </p>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-4">
            Charitable Donations at Death
          </h2>

          <p className="text-white/75 leading-relaxed">
            Charitable donations on a terminal tax return in Canada can
            significantly reduce taxes. In the year of death and the preceding
            year, up to 100% of net income may be claimable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              Bequest of Policy Proceeds
            </h2>

            <p className="text-white/75 leading-relaxed mb-4">
              An individual can donate life insurance proceeds through their
              Will. The individual owns the policy during their lifetime, and
              the estate is named as the beneficiary.
            </p>

            <p className="text-white/75 leading-relaxed">
              The Will can direct that an amount equal to the insurance proceeds
              be paid to a named charity after death.
            </p>
          </div>

          <div className="premium-card p-8">
            <h2 className="text-3xl font-serif text-accent mb-4">
              Considerations
            </h2>

            <div className="space-y-4 text-white/75">
              <p>Insurance proceeds pass through the estate.</p>
              <p>Funds may be subject to probate fees where applicable.</p>
              <p>Funds may be exposed to creditor claims or estate litigation.</p>
              <p>Donor confidentiality may not be protected.</p>
              <p>The donor keeps full control of the policy during life.</p>
            </div>
          </div>
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif text-accent mb-4">
            Donor-Owned Policy with Charity as Beneficiary
          </h2>

          <p className="text-white/75 leading-relaxed">
            If a donor owns a policy and names a charity as the beneficiary,
            they generally will not receive a charitable donation tax credit for
            premiums paid. However, a charitable donation tax credit can arise
            on death.
          </p>
        </div>

        <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8">
          <p className="uppercase tracking-[0.35em] text-accent mb-4">
            Result
          </p>

          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Increase donation. Decrease taxes.
          </h2>

          <p className="text-white/75 mb-8 max-w-3xl">
            Your favourite charities can receive a significant donation while
            the corresponding donation helps reduce your final tax bill.
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