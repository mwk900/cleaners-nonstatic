import { PHONE, PHONE_HREF, EMAIL } from "@/lib/data";

export default function FooterSection() {
  return (
    <footer
      className="px-5 py-10 sm:px-6"
      style={{ background: "var(--bg-dark, #1a2a28)", color: "var(--text-on-dark, #f0faf8)" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-1 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="font-bold tracking-tight" style={{ fontSize: "1.1rem" }}>
            Spotless Nottingham
          </span>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm sm:justify-end" style={{ opacity: 0.8 }}>
            <a href={PHONE_HREF} className="hover:opacity-100 transition-opacity" style={{ color: "var(--text-on-dark)" }}>
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:opacity-100 transition-opacity" style={{ color: "var(--text-on-dark)" }}>
              {EMAIL}
            </a>
            <span>Nottingham, UK</span>
          </div>
        </div>

        <div
          className="mt-6 border-t pt-5 text-center text-xs"
          style={{ borderColor: "rgba(240,250,248,0.15)", opacity: 0.55 }}
        >
          <p>Demo website for portfolio purposes — Spotless Nottingham is not a real company.</p>
          <p className="mt-1">
            Website by{" "}
            <a
              href="https://northsummit.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
              style={{ color: "var(--text-on-dark)" }}
            >
              NorthSummit.agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
