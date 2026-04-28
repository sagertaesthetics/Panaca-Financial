import Link from "next/link";
import { ownerEmail, services } from "../Config_Files/Services/servicesConfig";

export default function Tax() {
  const service = services.find((item) => item.id === "tax");

  if (!service) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <Link href="/services" className="mb-10 inline-block text-[#b88924] hover:underline">
        ← Back to services
      </Link>

      <p className="uppercase tracking-[0.35em] text-[#b88924] mb-4">
        Panaca Financial
      </p>

      <h1 className="text-5xl md:text-7xl font-serif mb-6">
        {service.title}
      </h1>

      <p className="text-xl text-[#315345] leading-relaxed mb-10">
        {service.short}
      </p>

      <div className="grid gap-5 mb-12">
        {service.details.map((detail) => (
          <div
            key={detail}
            className="rounded-2xl bg-white border border-[#c79a2d]/30 p-6 shadow-sm"
          >
            {detail}
          </div>
        ))}
      </div>

      <a
        href={`mailto:${ownerEmail}?subject=Panaca Financial Inquiry - ${service.title}`}
        className="inline-block px-8 py-3 rounded-full bg-[#062f1f] text-white hover:bg-[#0d462f] transition"
      >
        Contact Owner
      </a>
    </section>
  );
}