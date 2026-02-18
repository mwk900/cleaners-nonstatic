"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitInquiry } from "@/lib/actions";

const initialState: { error?: string; success?: string } = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-brand-700 px-4 py-2 font-semibold text-white transition hover:bg-brand-500 disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Submit Quote Request"}
    </button>
  );
}

export function QuoteForm() {
  const [state, action] = useFormState(async (_state: typeof initialState, formData: FormData) => submitInquiry(formData), initialState);

  return (
    <form action={action} className="grid gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Full name" className="rounded-md border border-slate-300 px-3 py-2" />
        <input required type="email" name="email" placeholder="Email" className="rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="phone" placeholder="Phone" className="rounded-md border border-slate-300 px-3 py-2" />
        <input required type="date" name="preferredDate" className="rounded-md border border-slate-300 px-3 py-2" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <select required name="propertyType" className="rounded-md border border-slate-300 px-3 py-2">
          <option value="">Property type</option>
          <option>House</option>
          <option>Flat</option>
          <option>Office</option>
        </select>
        <select required name="serviceType" className="rounded-md border border-slate-300 px-3 py-2">
          <option value="">Service type</option>
          <option>Regular</option>
          <option>Deep Clean</option>
          <option>End of Tenancy</option>
        </select>
      </div>
      <textarea required name="message" placeholder="Tell us what you need cleaned" rows={5} className="rounded-md border border-slate-300 px-3 py-2" />
      <SubmitButton />
      {state.error ? <p className="text-sm text-red-600">{state.error}</p> : null}
      {state.success ? <p className="text-sm text-green-700">{state.success}</p> : null}
    </form>
  );
}
