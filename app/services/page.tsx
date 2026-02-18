import Link from "next/link";
import { services } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold">Cleaning Services</h1>
      <p className="mt-3 text-slate-600">Flexible packages for homes, flats, and offices across Nottingham.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-slate-600">{service.description}</p>
            <Link href={`/services/${service.slug}`} className="mt-4 inline-block font-semibold text-brand-700">Read details →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
