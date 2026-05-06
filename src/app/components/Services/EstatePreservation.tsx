export default function EstatePreservation({ setPage }: any) {
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

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-16">
          <div>
            <p className="uppercase tracking-[0.35em] text-accent mb-4">
              Panaca Financial
            </p>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
              Estate Preservation
            </h1>

            <p className="text-white/75 text-lg leading-relaxed max-w-3xl">
              Help ensure your estate has enough liquidity when it is needed most
            </p>
          </div>

          <div className="premium-card p-7">
            <h2 className="text-2xl font-serif text-accent mb-4">
              What is estate planning?
            </h2>
            <p className="text-white/75 leading-relaxed">
              Estate planning is all about getting your possessions to whom you wish with as little hassle and tax as possible.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {[
            "Ensure your assets are distributed according to your wishes",
            "Minimize tax liabilities and administrative delays",
            "Prepare for potential incapacity or health-related challenges",
            "Provide clarity and peace of mind for your family",
          ].map((item) => (
            <div key={item} className="premium-card p-5 text-white/80">
              {item}
            </div>
          ))}
        </div>

        <div className="premium-card p-8 mb-16">
          <h2 className="text-3xl font-serif mb-4 text-accent">
            The Hidden Tax Problem
          </h2>

          <p className="text-white/75 mb-6 leading-relaxed">
            Upon death, CRA deems all assets are sold and applicable taxes must
            be paid. This capital gain tax can erode anywhere from 25% to over
            50% of the value of the estate depending on the type of assets you
            own.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Sell assets — which may not be ideal if markets are low",
              "Borrow money — placing financial burden on heirs",
              "Use life insurance — often the most cost-effective solution",
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

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
          <div
            onClick={() => setPage("estate-freeze")}
            className="premium-card p-8 cursor-pointer group transition-all hover:-translate-y-1"
          >
            <h2 className="text-3xl font-serif mb-4 text-accent">
              Advanced Strategies
            </h2>

            <p className="text-white/75 leading-relaxed mb-6">
              For owners of private corporations, strategies such as an estate
              freeze can lock in today’s value of your company while allowing
              future growth to pass to the next generation in a tax-efficient
              manner.
            </p>

            <span className="text-accent text-sm tracking-wide group-hover:tracking-widest transition-all">
              Learn More About Estate Freeze Planning →
            </span>
          </div>

          <div className="rounded-[2rem] border border-accent/30 bg-accent/10 p-8 flex flex-col justify-between">
            <div>
              <p className="uppercase tracking-[0.35em] text-accent mb-4">
                Next Step
              </p>

              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Want to protect your estate?
              </h2>

              <p className="text-white/75 mb-8">
                Start with a conversation about your assets, family goals, and
                long-term legacy plan.
              </p>
            </div>

            <button
              onClick={() => setPage("contact")}
              className="w-fit px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition"
            >
              Learn More About Estate Planning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
