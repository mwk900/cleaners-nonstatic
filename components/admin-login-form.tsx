import { adminLogin } from "@/lib/actions";

export function AdminLoginForm() {
  return (
    <form action={adminLogin} className="max-w-sm space-y-3 rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold">Admin Access</h2>
      <input
        required
        type="password"
        name="password"
        placeholder="Enter admin password"
        className="w-full rounded-md border border-slate-300 px-3 py-2"
      />
      <button className="rounded-md bg-brand-700 px-4 py-2 font-semibold text-white">Login</button>
      <p className="text-xs text-slate-500">Use ADMIN_PASSWORD from environment variables.</p>
    </form>
  );
}
