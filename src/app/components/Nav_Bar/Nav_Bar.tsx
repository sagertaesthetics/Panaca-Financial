import { useState } from "react";
import logoMark from "../Assets/Panaca_Mark.png";
import { services } from "../Config_Files/ServiceConfigs";

export default function NavBar({ setPage }: any) {
  const [open, setOpen] = useState(false);

  const goTo = (page: string) => {
    setPage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/30">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <button onClick={() => goTo("home")} className="flex items-center gap-2 md:gap-3">
          <img
            src={logoMark}
            alt="Panaca Financial"
            className="h-9 md:h-12 w-auto object-contain"
          />

          <div className="leading-none hidden sm:block">
            <p className="font-serif text-lg md:text-2xl tracking-[0.18em] text-primary">
              PANACA
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="h-px w-6 md:w-8 bg-accent" />
              <p className="text-[9px] md:text-[11px] tracking-[0.28em] md:tracking-[0.32em] text-accent">
                FINANCIAL
              </p>
              <span className="h-px w-6 md:w-8 bg-accent" />
            </div>
          </div>
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-10 items-center text-base font-medium tracking-wide text-primary">
          <button onClick={() => goTo("home")} className="hover:text-accent transition">
            Home
          </button>

          <div className="relative group">
            <button onClick={() => goTo("services")} className="hover:text-accent transition">
              Services ▾
            </button>

            <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl bg-background border border-accent/30 shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <button onClick={() => goTo("services")} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10">
                Services Overview
              </button>

              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => goTo(service.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10"
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button onClick={() => goTo("resources")} className="hover:text-accent transition">
              Resources ▾
            </button>

            <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl bg-background border border-accent/30 shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <button onClick={() => goTo("resources")} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10">
                Resources Overview
              </button>

              <button onClick={() => goTo("guides")} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10">
                Guides
              </button>

              <button onClick={() => goTo("faq")} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-accent/10">
                FAQ
              </button>
            </div>
          </div>

          <button onClick={() => goTo("about")} className="hover:text-accent transition">
            About
          </button>

          <button onClick={() => goTo("contact")} className="hover:text-accent transition">
            Contact
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden bg-accent rounded-full px-4 py-2 text-primary font-medium"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-accent/20 bg-background px-5 py-6 text-primary">
          <div className="flex flex-col gap-1">

            <button onClick={() => goTo("home")} className="text-left px-3 py-3 rounded-xl font-medium hover:bg-accent/10 hover:text-accent transition">
              Home
            </button>

            <div className="h-px bg-accent/15 my-1" />

            <button onClick={() => goTo("services")} className="text-left px-3 py-3 rounded-xl font-medium text-accent hover:bg-accent/10 transition">
              Services
            </button>
            <div className="flex flex-col gap-0.5 pl-4 border-l-2 border-accent/25 ml-3 mb-1">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => goTo(service.id)}
                  className="text-left px-3 py-2 rounded-lg text-sm text-primary/80 hover:text-accent hover:bg-accent/10 transition"
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div className="h-px bg-accent/15 my-1" />

            <button onClick={() => goTo("resources")} className="text-left px-3 py-3 rounded-xl font-medium text-accent hover:bg-accent/10 transition">
              Resources
            </button>
            <div className="flex flex-col gap-0.5 pl-4 border-l-2 border-accent/25 ml-3 mb-1">
              <button onClick={() => goTo("guides")} className="text-left px-3 py-2 rounded-lg text-sm text-primary/80 hover:text-accent hover:bg-accent/10 transition">
                Guides
              </button>
              <button onClick={() => goTo("faq")} className="text-left px-3 py-2 rounded-lg text-sm text-primary/80 hover:text-accent hover:bg-accent/10 transition">
                FAQ
              </button>
            </div>

            <div className="h-px bg-accent/15 my-1" />

            <button onClick={() => goTo("about")} className="text-left px-3 py-3 rounded-xl font-medium text-accent hover:bg-accent/10 transition">
              About
            </button>

            <div className="h-px bg-accent/15 my-1" />

            <button
              onClick={() => goTo("contact")}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-primary font-medium"
            >
              Contact
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}
