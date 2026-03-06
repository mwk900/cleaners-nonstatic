"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL, OPENING_HOURS, PHONE, PHONE_HREF } from "@/lib/data";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Book", href: "#contact" },
];

export default function DesktopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const contactPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!contactOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!contactPanelRef.current?.contains(event.target as Node)) {
        setContactOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [contactOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      style={{
        background: scrolled ? "rgba(250,255,254,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(45,184,154,0.12)" : "none",
        transition: "background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-sm font-bold tracking-tight"
          style={{ color: "var(--accent)" }}
        >
          Spotless Nottingham
        </a>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}
          <div className="relative" ref={contactPanelRef}>
            <button
              type="button"
              aria-expanded={contactOpen}
              aria-controls="desktop-contact-panel"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-xl px-5 text-sm font-semibold text-white transition-colors"
              style={{ background: "var(--accent)" }}
              onClick={() => setContactOpen((open) => !open)}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "var(--accent-hover)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "var(--accent)")
              }
            >
              Call us
              <ChevronIcon open={contactOpen} />
            </button>

            {contactOpen ? (
              <div
                id="desktop-contact-panel"
                className="absolute right-0 top-full mt-3 w-80 rounded-3xl border p-5 shadow-[0_20px_50px_rgba(18,38,34,0.14)]"
                style={{
                  background: "rgba(255,255,255,0.98)",
                  borderColor: "var(--accent-soft)",
                  backdropFilter: "blur(18px)",
                }}
              >
                <div className="mb-4">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Contact details
                  </p>
                  <p
                    className="mt-1 text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Call or email us during opening hours and we&apos;ll get
                    back to you quickly.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={PHONE_HREF}
                    className="block rounded-2xl border px-4 py-3 transition-colors"
                    style={{
                      borderColor: "var(--accent-soft)",
                      background: "var(--bg-primary)",
                    }}
                    onClick={() => setContactOpen(false)}
                  >
                    <span
                      className="block text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Phone
                    </span>
                    <span
                      className="mt-1 block text-sm font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {PHONE}
                    </span>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="block rounded-2xl border px-4 py-3 transition-colors"
                    style={{
                      borderColor: "var(--accent-soft)",
                      background: "var(--bg-primary)",
                    }}
                    onClick={() => setContactOpen(false)}
                  >
                    <span
                      className="block text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Email
                    </span>
                    <span
                      className="mt-1 block text-sm font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {EMAIL}
                    </span>
                  </a>

                  <div
                    className="rounded-2xl border px-4 py-3"
                    style={{
                      borderColor: "var(--accent-soft)",
                      background: "var(--bg-primary)",
                    }}
                  >
                    <span
                      className="block text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Opening times
                    </span>
                    <span
                      className="mt-1 block text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {OPENING_HOURS}
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
      }}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
