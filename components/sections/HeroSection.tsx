"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { PHONE, PHONE_HREF } from "@/lib/data";

export default function HeroSection() {
  const overlayControls = useAnimation();
  const sparkleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      overlayControls.start({
        clipPath: "inset(0 0 0 100%)",
        transition: {
          duration: 2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [overlayControls]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-20 text-center"
      style={{ background: "var(--bg-mint)" }}
    >
      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-3xl">
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
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Reliable domestic cleaning across Nottingham. Weekly, fortnightly, or
          one-off deep cleans.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="#pricing"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-2xl px-8 text-base font-semibold text-white transition-colors sm:w-auto"
            style={{ background: "var(--accent)" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "var(--accent-hover)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "var(--accent)")
            }
          >
            See pricing ↓
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-2xl border-2 px-8 text-base font-semibold transition-colors sm:w-auto"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              background: "transparent",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "var(--accent-soft)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Call {PHONE}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="mt-7 flex flex-wrap justify-center gap-2"
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
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
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

      {/* Frosted overlay — wipes away on load */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(135deg, #f0efec 0%, #e8e7e4 40%, #ededea 100%)",
          clipPath: "inset(0 0 0 0)",
        }}
        animate={overlayControls}
      >
        {/* Grain texture */}
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Sparkle that follows the wipe edge */}
      <SparkleEdge />
    </section>
  );
}

function SparkleEdge() {
  return (
    <motion.div
      ref={undefined}
      className="pointer-events-none absolute inset-y-0 z-30 flex items-center"
      style={{ left: 0 }}
      initial={{ x: "0vw", opacity: 0 }}
      animate={{ x: "100vw", opacity: [0, 1, 1, 0] }}
      transition={{
        x: { delay: 0.3, duration: 2, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: {
          delay: 0.3,
          duration: 2,
          times: [0, 0.05, 0.9, 1],
        },
      }}
    >
      <div className="relative -translate-x-1/2">
        {[
          { dx: 0, dy: -20, size: 14, delay: 0 },
          { dx: 6, dy: 2, size: 18, delay: 0.15 },
          { dx: -4, dy: 22, size: 11, delay: 0.3 },
        ].map((star, i) => (
          <motion.svg
            key={i}
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            className="absolute"
            style={{
              left: star.dx,
              top: star.dy - star.size / 2,
            }}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 0.9, 0],
              rotate: [0, 45, 90],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              delay: 0.5 + star.delay,
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 0.6,
            }}
          >
            <path
              d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74z"
              fill="#2DB89A"
            />
          </motion.svg>
        ))}
      </div>
    </motion.div>
  );
}
