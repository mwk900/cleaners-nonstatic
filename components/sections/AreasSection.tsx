"use client";

import { motion } from "framer-motion";
import { areas } from "@/lib/data";

export default function AreasSection() {
  return (
    <section
      id="areas"
      className="px-5 py-14 sm:px-6 lg:py-24"
      style={{ background: "var(--bg-mint)" }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-bold"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            color: "var(--text-primary)",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We clean across Nottingham.
        </motion.h2>

        <motion.div
          className="mt-7 flex flex-wrap justify-center gap-2.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {areas.map((area, i) => (
            <motion.span
              key={area}
              className="cursor-default rounded-full px-4 py-2 text-sm font-medium transition-colors"
              style={{
                background: "white",
                border: "1.5px solid var(--accent-soft)",
                color: "var(--text-primary)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              whileHover={{
                background: "var(--accent-soft)",
                borderColor: "var(--accent)",
                scale: 1.05,
              }}
              whileTap={{ scale: 0.97 }}
            >
              {area}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="mt-6 text-sm"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Not listed? We probably cover you too.{" "}
          <a
            href="#contact"
            className="font-medium underline underline-offset-2"
            style={{ color: "var(--accent)" }}
          >
            Just ask.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
