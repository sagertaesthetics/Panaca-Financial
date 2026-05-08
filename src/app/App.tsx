import { useState } from "react";
import logoMark from "./components/Assets/Panaca_Mark.png";
import NavBar from "./components/Nav_Bar/Nav_Bar";
import Contact from "./components/Nav_Bar/Contact";
import {ownerEmail,services,} from "./components/Config_Files/ServiceConfigs";
import AllServices from "./components/Services/All_Services";
import FAQPage from "./components/Services/FAQ";
import EstatePreservation from "./components/Services/EstatePreservation";
import BuySell from "./components/Services/BuySell";
import CharitableGiving from "./components/Services/CharitableGiving";
import CorporateTax from "./components/Services/CorporateTax";
import CDA from "./components/Services/CDA";
import CorporateLifeInsurance from "./components/Services/CorporateLifeInsurance";
import EstateFreeze from "./components/Services/EstateFreeze";

import BuySellImg from "./components/Assets/BuySell.jpg";
import CDAImg from "./components/Assets/CDA.jpg";
import CharitableGivingImg from "./components/Assets/CharitableGiving.jpg";
import ColiImg from "./components/Assets/Coli.jpg";
import CorporateTaxPlanningImg from "./components/Assets/CorporateTaxPlanning.jpg";
import EstatePreservationImg from "./components/Assets/EstatePreservation.jpg";

const serviceImages: Record<string, string> = {
  "estate-preservation": EstatePreservationImg,
  "charitable-giving": CharitableGivingImg,
  "buy-sell": BuySellImg,
  "corporate-life": ColiImg,
  cda: CDAImg,
  taxes: CorporateTaxPlanningImg,
};

type Page =
  | "home"
  | "services"
  | "estate-preservation"
  | "estate-freeze"
  | "charitable-giving"
  | "buy-sell"
  | "corporate-life"
  | "cda"
  | "taxes"
  | "resources"
  | "guides"
  | "faq"
  | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const selectedService = services.find((s) => s.id === page);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar setPage={setPage} />

      {page === "home" && (
        <>
          <section className="relative overflow-hidden px-6 py-24 bg-primary text-primary-foreground">
            <div className="soft-orb top-20 left-10 w-32 h-32" />
            <div className="soft-orb bottom-40 right-10 w-40 h-40" />

            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="uppercase tracking-[0.35em] text-accent mb-5">
                  Tax Planning •  Estate Preservation • Legacy Creation
                </p>

<p className="text-accent tracking-[0.25em] uppercase mb-4">
  Don&apos;t leave your legacy to chance.
</p>

<p className="text-lg md:text-xl text-white/75 max-w-xl leading-relaxed mb-8">
  Welcome to a world where paying less tax, ensuring your business or estate has the liquidity it needs when it matters most, and building multi-generational wealth becomes a reality.
</p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setPage("services")}
                    className="px-7 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition shadow-md"
                  >
                    Explore Services
                  </button>

                  <button
                    onClick={() => setPage("contact")}
                    className="px-7 py-3 rounded-full border border-accent text-white hover:bg-accent/10 transition"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute w-96 h-96 bg-accent/25 rounded-full blur-3xl" />
                <img
                  src={logoMark}
                  alt="Panaca Financial"
                  className="relative w-72 md:w-96 mix-blend-screen drop-shadow-xl"
                />
              </div>
            </div>
          </section>

          <div className="gold-divider" />

     <section className="relative overflow-hidden px-6 py-24 bg-primary text-primary-foreground">
  <div className="relative z-10 max-w-7xl mx-auto">
    <p className="uppercase tracking-[0.35em] text-accent mb-4">
      Services
    </p>

    <h2 className="text-4xl md:text-6xl font-serif mb-10">
      Keep more. Protect more.
      <span className="block text-accent">
        Pass on more.
      </span>
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {services.map((s) => (
        <button
          key={s.id}
          onClick={() => setPage(s.id as Page)}
          className="group text-left premium-card p-7"
        >
          <img
            src={serviceImages[s.id]}
            alt={s.title}
            className="w-full h-56 object-cover rounded-2xl mb-6"
          />

          <h3 className="text-2xl font-serif text-accent mb-4">
            {s.title}
          </h3>

          <p className="text-white/75 leading-relaxed mb-6">
            {s.short}
          </p>

          <span className="text-accent text-sm tracking-wide group-hover:tracking-widest transition-all">
            Learn More →
          </span>
        </button>
      ))}
    </div>
  </div>
</section>
          <div className="gold-divider" />

          <section className="px-6 py-24 bg-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto rounded-[2rem] bg-white/8 p-10 md:p-16 text-center shadow-2xl border border-accent/30 gold-glow">
              <p className="uppercase tracking-[0.35em] text-accent mb-4">
                Start Planning
              </p>

              <h2 className="text-4xl md:text-6xl font-serif mb-6">
                Ready to plan with confidence?
              </h2>

              <p className="text-white/75 max-w-2xl mx-auto mb-8">
                Start with a conversation about your taxes,
                legacy, family goals, and long-term financial
                future.
              </p>

              <button
                onClick={() => setPage("contact")}
                className="px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition"
              >
                Contact Panaca Financial
              </button>
            </div>
          </section>
        </>
      )}

      {page === "services" && <AllServices setPage={setPage} />}

      {page === "estate-freeze" && (<EstateFreeze setPage={setPage} />)}

      {page === "resources" && (
        <section className="relative min-h-screen bg-primary text-primary-foreground px-6 py-24 overflow-hidden">
          <div className="soft-orb top-20 left-10 w-40 h-40" />
          <div className="soft-orb bottom-20 right-10 w-56 h-56" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="uppercase tracking-[0.35em] text-accent mb-4">
              Resources
            </p>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
              Learn more.
              <span className="block text-accent">
                Plan better.
              </span>
            </h1>

            <p className="text-white/75 max-w-3xl text-lg leading-relaxed mb-12">
              Explore guides and answers designed to help you
              understand tax, wealth building, and long-term
              financial planning.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <button
                onClick={() => setPage("guides")}
                className="text-left premium-card p-7"
              >
                <h3 className="text-2xl font-serif text-accent mb-4">
                  Guides
                </h3>

                <p className="text-white/75 mb-6">
                  Step-by-step insights on tax planning, estate
                  strategy, and building long-term wealth.
                </p>

                <span className="text-accent text-sm tracking-wide">
                  View Guides →
                </span>
              </button>

              <button
                onClick={() => setPage("faq")}
                className="text-left premium-card p-7"
              >
                <h3 className="text-2xl font-serif text-accent mb-4">
                  FAQ
                </h3>

                <p className="text-white/75 mb-6">
                  Common questions about financial planning,
                  taxes, and protecting your future.
                </p>

                <span className="text-accent text-sm tracking-wide">
                  View FAQ →
                </span>
              </button>
            </div>
          </div>
        </section>
      )}

{page === "guides" && (
  <section className="min-h-screen bg-primary text-primary-foreground px-6 py-24">
    <div className="max-w-7xl mx-auto">
      <button
        onClick={() => setPage("resources")}
        className="mb-10 text-accent hover:underline"
      >
        ← Back to Resources
      </button>

      <p className="uppercase tracking-[0.35em] text-accent mb-4">
        Resources
      </p>

      <h1 className="text-5xl md:text-7xl font-serif text-accent mb-6">
        Guides
      </h1>

      <p className="text-white/75 max-w-3xl mb-14">
        Download guides from trusted financial providers.
      </p>

      {[
        {
          title: "Wealth & Estate Planning",
          items: [
            ["Wealth Transfer", "Manulife", "/pdfs/WealthTransfer-Manulife.pdf"],
            ["RRSP Estate Preservation", "Manulife", "/pdfs/RRSPEstatePreservation-Manulife.pdf"],
            ["Estate Bond", "Manulife", "/pdfs/EstateBond-Manulife.pdf"],
            ["Intergenerational Wealth Transfer", "Equitable", "/pdfs/IntergenerationalWealthTransfer-Equitable.pdf"],
            ["Corporate Estate Transfer", "Equitable", "/pdfs/CorporateEstateTransfer-Equitable.pdf"],
            ["Corporate Estate Transfer", "Cooperators", "/pdfs/CorporateEstateTransfer-Cooperators.pdf"],
          ],
        },
        {
          title: "Retirement Planning",
          items: [
            ["Insured Retirement", "BMO", "/pdfs/InsuredRetirement-BMO.pdf"],
            ["Insured Retirement", "Manulife", "/pdfs/InsuredRetirement-Manulife.pdf"],
            ["Corporate Retirement", "Equitable", "/pdfs/CorporateRetirement-Equitable.pdf"],
          ],
        },
        {
          title: "Business & Corporate Planning",
          items: [
            ["Buy Sell", "RBC", "/pdfs/BuySell-RBC.pdf"],
            ["Buy Sell", "Cooperators", "/pdfs/BuySell-Cooperators.pdf"],
            ["Buy Sell", "BMO", "/pdfs/BuySell-BMO.pdf"],
            ["Business Planning", "Manulife", "/pdfs/BusinessPlanning-Manulife.pdf"],
            ["Immediate Financing Agreement", "RBC", "/pdfs/ImmediateFinancingAgreement-RBC.pdf"],
            ["Immediate Financing Agreement", "Cooperators", "/pdfs/ImmediateFinancingAgreement-Cooperators.pdf"],
          ],
        },
        {
          title: "Insurance Strategies",
          items: [
            ["Life Insurance as an Asset Class", "Equitable", "/pdfs/LifeInsuranceAssetClass-Equitable.pdf"],
            ["Corporate Owned Insurance", "RBC", "/pdfs/CorporateOwnedInsurance-RBC.pdf"],
            ["Key Person", "Cooperators", "/pdfs/KeyPerson-Cooperators.pdf"],
            ["Secure Rental Property", "Cooperators", "/pdfs/SecureRentalProperty-Cooperators.pdf"],
          ],
        },
        {
          title: "Family, Property & Giving",
          items: [
            ["Keep Your Cottage", "Cooperators", "/pdfs/KeepYourCottage-Cooperators.pdf"],
            ["Keep Your Cottage", "Manulife", "/pdfs/KeepYourCottage-Manulife.pdf"],
            ["Charitable Giving", "Equitable", "/pdfs/CharitableGiving-Equitable.pdf"],
            ["Charitable Giving", "Cooperators", "/pdfs/CharitableGiving-Cooperators.pdf"],
          ],
        },
        {
          title: "Checklists & Tools",
          items: [
            ["Executor Checklist", "Empire", "/pdfs/ExecutorChecklist-Empire.pdf"],
          ],
        },
      ].map((section) => (
        <div key={section.title} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
            {section.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map(([title, provider, file]) => (
              <a
                key={`${title}-${provider}`}
                href={file}
                download
                className="group relative block overflow-hidden rounded-[1.75rem] border border-accent/25 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/[0.1]"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.25em] text-accent">
                      {provider}
                    </p>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-primary/40 text-accent text-xs">
                      PDF
                    </div>
                  </div>

                  <h3 className="mb-6 text-2xl font-serif leading-snug">
                    {title}
                  </h3>

                  <div className="mt-auto flex items-center justify-between border-t border-accent/20 pt-5">
                    <span className="text-sm uppercase tracking-[0.2em] text-accent transition-all group-hover:tracking-[0.28em]">
                      Download Guide
                    </span>

                    <span className="text-accent transition-transform group-hover:translate-y-1">
                      ↓
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)}

      {page === "faq" && <FAQPage setPage={setPage} />}

      {page === "cda" && <CDA setPage={setPage} />}

      {page === "contact" && <Contact />}

      {page === "buy-sell" && <BuySell setPage={setPage} />}

      {page === "taxes" && <CorporateTax setPage={setPage} />}

      {page === "charitable-giving" && (
        <CharitableGiving setPage={setPage} />
      )}

      {page === "corporate-life" && (
        <CorporateLifeInsurance setPage={setPage} />
      )}

      {page === "estate-preservation" && (
        <EstatePreservation setPage={setPage} />
      )}

      {selectedService &&
        page !== "home" &&
        page !== "services" &&
        page !== "resources" &&
        page !== "guides" &&
        page !== "faq" &&
        page !== "contact" &&
        page !== "buy-sell" &&
        page !== "charitable-giving" &&
        page !== "taxes" &&
        page !== "cda" &&
        page !== "corporate-life" &&
        page !== "estate-freeze" &&
        page !== "estate-preservation" && (
          <section className="min-h-screen bg-primary text-primary-foreground px-6 py-24">
            <div className="max-w-5xl mx-auto">
              <button
                onClick={() => setPage("services")}
                className="mb-10 text-accent hover:underline"
              >
                ← Back to Services
              </button>

              <p className="uppercase tracking-[0.35em] text-accent mb-4">
                Panaca Financial
              </p>

              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
                {selectedService.title}
              </h1>

              <p className="text-white/75 max-w-3xl text-lg leading-relaxed mb-12">
                {selectedService.short}
              </p>

              <div className="grid gap-5 mb-12">
                {selectedService.details.map((d) => (
                  <div
                    key={d}
                    className="premium-card p-6 text-white/80"
                  >
                    {d}
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${ownerEmail}`}
                className="inline-block px-8 py-3 rounded-full bg-accent text-primary hover:opacity-90 transition"
              >
                Contact Owner
              </a>
            </div>
          </section>
        )}
    </main>
  );
}
