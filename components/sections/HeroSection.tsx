"use client";

import { motion } from "framer-motion";

import IntroWipe from "@/components/ui/IntroWipe";

type HeroSectionProps = {
  splitLayout?: boolean;
};

export default function HeroSection({
  splitLayout = false,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={`relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[var(--bg-mint)] px-5 py-20 text-center ${
        splitLayout
          ? "items-center md:px-0 md:py-12 md:text-left md:items-start"
          : "items-center"
      }`}
    >
      {/* Main content */}
      <div
        className={`relative z-10 mx-auto max-w-3xl ${
          splitLayout ? "md:mx-0 md:max-w-2xl" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          Spotless Nottingham
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="font-bold tracking-tight"
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
            lineHeight: 1.15,
          }}
        >
          Clean home.
          <br />
          Clear head.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.65, duration: 0.6 }}
          className={`mx-auto mt-5 max-w-xl text-lg leading-relaxed ${
            splitLayout ? "md:mx-0" : ""
          }`}
          style={{ color: "var(--text-secondary)" }}
        >
          Reliable domestic cleaning across Nottingham. Weekly, fortnightly, or
          one-off deep cleans.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className={`mt-7 flex flex-wrap gap-2 ${
            splitLayout ? "justify-center md:justify-start" : "justify-center"
          }`}
        >
          {["Insured", "DBS checked", "4.9★ rated"].map((pill) => (
            <span
              key={pill}
              className="rounded-full border px-4 py-1.5 text-sm font-medium"
              style={{
                borderColor: "var(--accent-soft)",
                background: "rgba(255,255,255,0.8)",
                color: "var(--text-primary)",
              }}
            >
              ✓ {pill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={`absolute bottom-7 z-10 ${
          splitLayout
            ? "left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"
            : "left-1/2 -translate-x-1/2"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        style={{ color: "var(--text-secondary)" }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs">scroll</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 3v10M3 9l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mobile sticky logo — back to top */}
      <motion.a
        href="#hero"
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center py-3 md:hidden"
        style={{
          background: "rgba(240,248,246,0.88)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(45,184,154,0.1)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
        aria-label="Back to top"
      >
        <span
          className="text-sm font-bold tracking-tight"
          style={{ color: "var(--accent)" }}
        >
          Spotless Nottingham
        </span>
      </motion.a>

      <IntroWipe className={splitLayout ? "md:hidden" : ""} />
    </section>
  );
}
