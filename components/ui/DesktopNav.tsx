"use client";

import { useEffect, useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/data";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Book", href: "#contact" },
];

export default function DesktopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <a
            href={PHONE_HREF}
            className="inline-flex min-h-[40px] items-center rounded-xl px-5 text-sm font-semibold text-white transition-colors"
            style={{ background: "var(--accent)" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "var(--accent-hover)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "var(--accent)")
            }
          >
            Call us
          </a>
        </div>
      </div>
    </nav>
  );
}
