"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PHONE, PHONE_HREF, WHATSAPP_HREF } from "@/lib/data";

const SERVICE_OPTIONS = [
  "Regular cleaning",
  "Deep clean",
  "End of tenancy",
  "Office cleaning",
  "One-off blitz",
  "Not sure yet",
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 py-14 sm:px-6 lg:py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              color: "var(--text-primary)",
            }}
          >
            Let&apos;s get your clean booked.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Call card */}
          <motion.div
            className="flex flex-col rounded-3xl p-7"
            style={{ background: "var(--bg-mint)", border: "1.5px solid var(--accent-soft)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div
              className="mb-1 text-2xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Prefer to call?
            </div>
            <p
              className="mb-6 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              We&apos;ll sort everything out in 2 minutes.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-2xl text-base font-semibold text-white transition-colors"
              style={{ background: "var(--accent)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "var(--accent-hover)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "var(--accent)")
              }
            >
              Call {PHONE}
            </a>
            <p
              className="mt-3 text-center text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Mon–Fri 8am–6pm · Sat 9am–1pm
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            className="flex flex-col rounded-3xl p-7"
            style={{ background: "white", border: "1.5px solid var(--accent-soft)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div
              className="mb-4 text-2xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Send a message
            </div>
            <EnquiryForm />
            <p
              className="mt-3 text-center text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              We reply within 2 hours on working days.
            </p>
          </motion.div>
        </div>

        {/* WhatsApp */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="mb-3 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Or message us directly on WhatsApp for a quick chat.
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2.5 rounded-2xl px-7 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon />
            Message on WhatsApp
          </a>
        </motion.div>

        <p
          className="mt-6 text-center text-xs"
          style={{ color: "var(--text-secondary)", opacity: 0.7 }}
        >
          * This is a portfolio demo site — Spotless Nottingham is not a real
          company. No enquiries are processed.
        </p>
      </div>
    </section>
  );
}

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        className="flex flex-1 flex-col items-center justify-center py-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className="mb-3 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
          style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
        >
          ✓
        </div>
        <p
          className="text-base font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Thanks! We&apos;ll be in touch soon.
        </p>
        <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          (Demo — no message was actually sent)
        </p>
      </motion.div>
    );
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-xs font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="min-h-[44px] rounded-xl border px-3 py-2 text-base outline-none transition-colors focus:border-[var(--accent)]"
            style={{
              borderColor: "var(--accent-soft)",
              color: "var(--text-primary)",
              background: "var(--bg-primary)",
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="phone"
            className="text-xs font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="min-h-[44px] rounded-xl border px-3 py-2 text-base outline-none transition-colors focus:border-[var(--accent)]"
            style={{
              borderColor: "var(--accent-soft)",
              color: "var(--text-primary)",
              background: "var(--bg-primary)",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="postcode"
          className="text-xs font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Postcode
        </label>
        <input
          id="postcode"
          name="postcode"
          required
          className="min-h-[44px] rounded-xl border px-3 py-2 text-base uppercase outline-none transition-colors focus:border-[var(--accent)]"
          style={{
            borderColor: "var(--accent-soft)",
            color: "var(--text-primary)",
            background: "var(--bg-primary)",
          }}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="service"
          className="text-xs font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Service type
        </label>
        <select
          id="service"
          name="service"
          className="min-h-[44px] rounded-xl border px-3 py-2 text-base outline-none transition-colors focus:border-[var(--accent)]"
          style={{
            borderColor: "var(--accent-soft)",
            color: "var(--text-primary)",
            background: "var(--bg-primary)",
          }}
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className="text-xs font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          Message{" "}
          <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
            (optional)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={2}
          className="rounded-xl border px-3 py-2 text-base outline-none transition-colors focus:border-[var(--accent)]"
          style={{
            borderColor: "var(--accent-soft)",
            color: "var(--text-primary)",
            background: "var(--bg-primary)",
            resize: "none",
          }}
        />
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl text-base font-semibold text-white transition-colors"
        style={{ background: "var(--accent)" }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = "var(--accent-hover)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "var(--accent)")
        }
      >
        Send enquiry
      </button>
    </form>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
