import Link from "next/link";
import { business } from "@/lib/constants";

const nav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Pricing", "/pricing"],
  ["Booking", "/booking"],
  ["Contact", "/contact"],
  ["Admin", "/admin"]
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-brand-700">
          {business.name}
        </Link>
        <nav className="hidden gap-5 text-sm font-medium md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-slate-700 transition hover:text-brand-700">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
