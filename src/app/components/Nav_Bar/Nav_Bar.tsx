import logoMark from "../Assets/Panaca_Mark.png";
import { services } from "../Config_Files/ServiceConfigs";

export default function NavBar({ setPage }: any) {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/30">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <button onClick={() => setPage("home")} className="flex items-center gap-3">
          <img
            src={logoMark}
            alt="Panaca Financial"
            className="h-12 w-auto object-contain"
          />

          <div className="leading-none">
            <p className="font-serif text-2xl tracking-[0.18em] text-primary">
              PANACA
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="h-px w-8 bg-accent" />
              <p className="text-[11px] tracking-[0.32em] text-accent">
                FINANCIAL
              </p>
              <span className="h-px w-8 bg-accent" />
            </div>
          </div>
        </button>

        <div className="flex gap-10 items-center text-base font-medium tracking-wide text-primary">
          <button onClick={() => setPage("home")} className="hover:text-accent transition">
            Home
          </button>

          <div className="relative group">
            <button onClick={() => setPage("services")} className="hover:text-accent transition">
              Services ▾
            </button>

            <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl bg-background border border-accent/30 shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <button onClick={() => setPage("services")} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10">
                Services Overview
              </button>

              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setPage(service.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10"
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button onClick={() => setPage("resources")} className="hover:text-accent transition">
              Resources ▾
            </button>

            <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl bg-background border border-accent/30 shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <button onClick={() => setPage("resources")} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10">
                Resources Overview
              </button>

              <button onClick={() => setPage("guides")} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10">
                Guides
              </button>

              <button onClick={() => setPage("faq")} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10">
                FAQ
              </button>
            </div>
          </div>

          <button onClick={() => setPage("contact")} className="hover:text-accent transition">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}