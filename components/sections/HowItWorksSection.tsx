"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/data";

export default function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      className="px-5 py-14 sm:px-6 lg:py-24"
      style={{ background: "var(--bg-lavender, #f3f0fa)" }}
    >
      <div className="mx-auto max-w-3xl">
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
            Three steps. That&apos;s it.
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Desktop layout: horizontal */}
          <div className="hidden items-start gap-0 md:flex">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative flex flex-1 flex-col items-center text-center">
                {/* Step number */}
                <motion.div
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white"
                  initial={{ scale: 0, background: "#D4F0E9" }}
                  animate={
                    inView
                      ? {
                          scale: 1,
                          background: "#2DB89A",
                        }
                      : {}
                  }
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.5 }}
                  style={{ flexShrink: 0 }}
                >
                  {step.number}
                </motion.div>

                {/* Connector line (between steps) */}
                {i < processSteps.length - 1 && (
                  <div className="absolute top-7 left-1/2 w-full">
                    <svg
                      className="absolute top-0 left-0 h-0.5 w-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <motion.line
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        stroke="#2DB89A"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.5 }}
                      />
                    </svg>
                  </div>
                )}

                <motion.div
                  className="mt-5 px-4"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.5 }}
                >
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-1.5 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Mobile layout: vertical stack */}
          <div className="flex flex-col gap-0 md:hidden">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative flex gap-5">
                {/* Left: number + vertical line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
                    initial={{ scale: 0, background: "#D4F0E9" }}
                    animate={
                      inView ? { scale: 1, background: "#2DB89A" } : {}
                    }
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.5 }}
                  >
                    {step.number}
                  </motion.div>
                  {i < processSteps.length - 1 && (
                    <div className="relative w-0.5 flex-1 overflow-hidden my-1" style={{ minHeight: 48 }}>
                      <motion.div
                        className="absolute inset-x-0 top-0 origin-top"
                        style={{
                          background:
                            "repeating-linear-gradient(to bottom, #2DB89A 0px, #2DB89A 6px, transparent 6px, transparent 10px)",
                        }}
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.5 }}
                      >
                        <div style={{ height: 80 }} />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Right: content */}
                <motion.div
                  className="pb-8 pt-1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.5 }}
                >
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
