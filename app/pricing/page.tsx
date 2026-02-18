const tiers = [
  { name: "Regular Clean", price: "from £22/hr" },
  { name: "Deep Clean", price: "from £180" },
  { name: "End of Tenancy", price: "from £220" }
];

export default function PricingPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="mt-3 text-slate-600">Fair and transparent pricing tailored to your property and requirements.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
            <h2 className="text-xl font-semibold">{tier.name}</h2>
            <p className="mt-2 text-2xl font-bold text-brand-700">{tier.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
