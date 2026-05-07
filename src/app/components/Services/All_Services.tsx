import PageHeader from "../Layout/PageHeader";
import PageSection from "../Layout/PageSection";
import { services } from "../Config_Files/ServiceConfigs";
import BuySellImg from "../Assets/BuySell.jpg";
import CDAImg from "../Assets/CDA.jpg";
import CharitableGivingImg from "../Assets/CharitableGiving.jpg";
import ColiImg from "../Assets/Coli.jpg";
import CorporateTaxPlanningImg from "../Assets/CorporateTaxPlanning.jpg";
import EstatePreservationImg from "../Assets/EstatePreservation.jpg";

const serviceImages: Record<string, string> = {
  "estate-preservation": EstatePreservationImg,
  "charitable-giving": CharitableGivingImg,
  "buy-sell": BuySellImg,
  "corporate-life": ColiImg,
  cda: CDAImg,
  taxes: CorporateTaxPlanningImg,
};

export default function AllServices({ setPage }: any) {
  return (
    <PageSection dark>
      <div className="relative overflow-hidden">
        <div className="soft-orb top-20 left-10 w-40 h-40" />
        <div className="soft-orb bottom-24 right-24 w-44 h-44 opacity-70" />

        <div className="relative z-10">
          <PageHeader
            label="Services"
            title="Keep more. Protect more."
            highlight="Pass on more."
            description="Panaca Financial helps clients reduce tax pressure, protect what matters most, and build long-term wealth for future generations."
            dark
          />

          <div className="gold-divider mb-16" />

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setPage(service.id)}
                className="group text-left premium-card p-7"
              >
<img
  src={serviceImages[service.id]}
  alt={service.title}
  className="w-full h-56 object-cover rounded-2xl mb-6"
/>

                <h3 className="text-2xl font-serif text-accent mb-4">
                  {service.title}
                </h3>

                <p className="text-white/75 mb-6 leading-relaxed">
                  {service.short}
                </p>

                <span className="text-accent text-sm tracking-wide group-hover:tracking-widest transition-all">
                  Learn More →
                </span>
              </button>
            ))}
          </div>

          <div className="gold-divider mt-20" />
        </div>
      </div>
    </PageSection>
  );
}
