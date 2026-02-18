import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { services } from "@/lib/constants";

const trustBadges = ["Fully insured", "Local team", "Flexible scheduling", "Satisfaction guarantee"];

export default function HomePage() {
  return (
    <>
      <section className="section grid gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
              Professional Cleaning Services in Nottingham
            </h1>
            <p className="text-lg text-slate-600">
              Reliable domestic and commercial cleaning from a trusted local team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/booking" className="rounded-md bg-brand-700 px-5 py-3 font-semibold text-white">Get a Quote</Link>
              <Link href="/contact" className="rounded-md border border-slate-300 px-5 py-3 font-semibold">Book Cleaning</Link>
            </div>
          </div>
        </FadeIn>
        <div className="grid gap-3 sm:grid-cols-2">
          {trustBadges.map((badge) => (
            <div key={badge} className="rounded-lg border border-slate-200 bg-white p-4 text-center font-medium text-slate-700">
              {badge}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="mb-6 text-3xl font-bold">Our Services</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.slug}>
              <article className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="mt-4 inline-block font-semibold text-brand-700">Learn more →</Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="mb-6 text-3xl font-bold">How it works</h2>
        <ol className="grid gap-4 md:grid-cols-4">
          {["Request quote", "We confirm", "We clean", "You relax"].map((step, index) => (
            <li key={step} className="rounded-xl bg-brand-50 p-5 text-center">
              <p className="text-sm font-semibold text-brand-700">Step {index + 1}</p>
              <p className="mt-1 font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2 className="mb-6 text-3xl font-bold">Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Always punctual and thorough. Brilliant service.",
            "Our office looks spotless every week.",
            "Great communication and very professional team."
          ].map((quote) => (
            <blockquote key={quote} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700">
              “{quote}”
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
