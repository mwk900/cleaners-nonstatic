"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { pricingTiers } from "@/lib/data";

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = el.scrollWidth / pricingTiers.length;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(idx, pricingTiers.length - 1)));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / pricingTiers.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="px-5 py-14 sm:px-6 lg:py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              color: "var(--text-primary)",
            }}
          >
            Simple, honest pricing.
          </h2>
          <p
            className="mt-2 text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            No hidden fees. Ever.
          </p>
        </motion.div>

        {/* Mobile: scroll-snap carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="pricing-scroll -mx-5 px-5"
            style={{ gap: "12px" }}
          >
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                className="pricing-card-snap"
                style={{ width: "calc(85vw - 10px)", minWidth: 280 }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <PricingCard tier={tier} featured={!!tier.popular} />
              </motion.div>
            ))}
            {/* Trailing spacer */}
            <div style={{ minWidth: "calc(7.5vw)" }} aria-hidden="true" />
          </div>

          {/* Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {pricingTiers.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === i ? 24 : 8,
                  background:
                    activeIndex === i ? "var(--accent)" : "var(--accent-soft)",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3 cards side by side */}
        <div className="hidden grid-cols-3 gap-6 md:grid">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={tier.popular ? "-mt-4 mb-4" : ""}
            >
              <PricingCard tier={tier} featured={!!tier.popular} />
            </motion.div>
          ))}
        </div>

        <p
          className="mt-8 text-center text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Prices based on a standard 3-bed home. Larger properties quoted
          individually.{" "}
          <a
            href="#contact"
            className="font-medium underline underline-offset-2"
            style={{ color: "var(--accent)" }}
          >
            Get an exact quote →
          </a>
        </p>
      </div>
    </section>
  );
}

function PricingCard({
  tier,
  featured,
}: {
  tier: (typeof pricingTiers)[number];
  featured: boolean;
}) {
  return (
    <div
      className="relative flex h-full flex-col rounded-3xl p-6 transition-shadow hover:shadow-lg"
      style={{
        background: tier.bg,
        border: featured ? "2px solid var(--accent)" : "1.5px solid transparent",
        boxShadow: featured ? "0 4px 24px rgba(45,184,154,0.12)" : undefined,
      }}
    >
      {featured && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white"
          style={{ background: "var(--accent)" }}
        >
          Most popular
        </div>
      )}

      <div>
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}
        >
          {tier.subtitle}
        </p>
        <h3
          className="mt-1 text-xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {tier.name}
        </h3>
        <p
          className="mt-3 font-extrabold tabular-nums"
          style={{
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            color: "var(--text-primary)",
            lineHeight: 1,
          }}
        >
          {tier.price}
        </p>
        <p
          className="mt-0.5 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          {tier.priceNote}
        </p>
        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {tier.description}
        </p>
      </div>

      <ul className="my-5 flex-1 space-y-2">
        {tier.included.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm"
            style={{ color: "var(--text-primary)" }}
          >
            <span
              className="mt-0.5 flex-shrink-0 font-bold"
              style={{ color: "var(--accent)" }}
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div
        className="mb-4 space-y-1 rounded-xl p-3"
        style={{ background: "rgba(255,255,255,0.5)" }}
      >
        {tier.details.map((d) => (
          <p
            key={d}
            className="text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            {d}
          </p>
        ))}
      </div>

      <a
        href="#contact"
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl text-sm font-semibold transition-all"
        style={
          featured
            ? { background: "var(--accent)", color: "#fff" }
            : {
                background: "rgba(255,255,255,0.7)",
                color: "var(--text-primary)",
                border: "1.5px solid rgba(0,0,0,0.08)",
              }
        }
      >
        {tier.cta}
      </a>
    </div>
  );
}
