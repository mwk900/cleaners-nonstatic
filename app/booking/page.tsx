import { QuoteForm } from "@/components/quote-form";

export default function BookingPage() {
  return (
    <section className="section max-w-3xl">
      <h1 className="text-4xl font-bold">Booking & Quote</h1>
      <p className="mt-3 text-slate-600">Tell us about your property and preferred date, and we will confirm shortly.</p>
      <div className="mt-8">
        <QuoteForm />
      </div>
    </section>
  );
}
