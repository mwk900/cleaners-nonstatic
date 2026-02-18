import { business } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
        <p className="font-semibold text-slate-900">{business.name}</p>
        <p>{business.location}</p>
        <p>{business.phone} · {business.email}</p>
      </div>
    </footer>
  );
}
