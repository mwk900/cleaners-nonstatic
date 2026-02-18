import { services } from "@/lib/constants";

const service = services.find((item) => item.slug === "end-of-tenancy")!;

export default function EndOfTenancyPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold">{service.title}</h1>
      <p className="mt-3 text-slate-600">{service.description}</p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-slate-700">
        {service.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
