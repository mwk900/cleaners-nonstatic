"use client";

import { motion } from "framer-motion";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/data";

export default function MobileBottomBar() {
  return (
    <motion.div
      className="safe-bottom fixed bottom-0 left-0 right-0 z-50 md:hidden"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3.3, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: "rgba(250,255,254,0.92)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(45,184,154,0.15)",
      }}
    >
      <div className="flex items-stretch gap-2 px-4 py-3">
        <a
          href={PHONE_HREF}
          className="flex min-h-[48px] flex-1 items-center justify-center gap-1.5 rounded-2xl border text-sm font-semibold transition-colors"
          style={{
            borderColor: "var(--accent-soft)",
            color: "var(--accent)",
            background: "white",
          }}
        >
          <PhoneIcon />
          Call
        </a>

        <a
          href="#pricing"
          className="flex min-h-[48px] flex-1 items-center justify-center gap-1.5 rounded-2xl text-sm font-semibold transition-colors"
          style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
        >
          Pricing ↓
        </a>

        <a
          href="#contact"
          className="flex min-h-[48px] flex-1 items-center justify-center gap-1.5 rounded-2xl text-sm font-semibold text-white transition-colors"
          style={{ background: "var(--accent)" }}
        >
          Book ↓
        </a>
      </div>
    </motion.div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  );
}
