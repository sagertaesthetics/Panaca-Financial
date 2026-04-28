import logoMark from "../Assets/Panaca_Mark.png";
import { ownerEmail } from "../Config_Files/ServiceConfigs";

export const contactInfo = {
  email: "jeff@panacafinancial.com",
  phone: "(123) 456-7890", // optional
};

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#f8f6ef] text-[#062f1f] px-6 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-[#b88924] mb-4">
            Contact
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Ready to start planning with confidence?
          </h1>

          <p className="text-lg text-[#315345] leading-relaxed mb-8">
            Reach out to Panaca Financial to discuss tax planning, CRA reduction,
            legacy planning, estate protection, and multi-generational wealth.
          </p>

          <a
            href={`mailto:${ownerEmail}?subject=Panaca Financial Inquiry`}
            className="inline-block px-8 py-3 rounded-full bg-[#062f1f] text-white hover:bg-[#0d462f] transition shadow-lg"
          >
            Email Panaca Financial
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-[#b88924]/20 rounded-full blur-3xl" />

          <img
            src={logoMark}
            alt="Panaca Financial"
            className="relative w-72 md:w-96 mix-blend-multiply drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}