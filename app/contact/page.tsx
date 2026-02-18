import { business } from "@/lib/constants";

export default function ContactPage() {
  return (
    <section className="section max-w-3xl">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4 text-slate-600">Speak with our local team to discuss your cleaning needs.</p>
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <p><span className="font-semibold">Phone:</span> {business.phone}</p>
        <p className="mt-2"><span className="font-semibold">Email:</span> {business.email}</p>
        <p className="mt-2"><span className="font-semibold">Location:</span> {business.location}</p>
      </div>
    </section>
  );
}
