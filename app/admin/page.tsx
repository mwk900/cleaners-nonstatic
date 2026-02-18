import { cookies } from "next/headers";
import { AdminLoginForm } from "@/components/admin-login-form";
import { updateInquiryStatus } from "@/lib/actions";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const isAuthed = cookies().get("admin-auth")?.value === process.env.ADMIN_PASSWORD;

  if (!isAuthed) {
    return (
      <section className="section">
        <h1 className="mb-6 text-4xl font-bold">Admin Dashboard</h1>
        <AdminLoginForm />
      </section>
    );
  }

  const inquiries = await prisma.inquiry.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <section className="section">
      <h1 className="mb-6 text-4xl font-bold">Admin Dashboard</h1>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Preferred Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="border-t border-slate-100">
                <td className="px-4 py-3">{inquiry.name}</td>
                <td className="px-4 py-3">{inquiry.serviceType}</td>
                <td className="px-4 py-3">{new Date(inquiry.preferredDate).toLocaleDateString("en-GB")}</td>
                <td className="px-4 py-3">{inquiry.status}</td>
                <td className="px-4 py-3">{new Date(inquiry.createdAt).toLocaleString("en-GB")}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <form action={updateInquiryStatus}>
                      <input type="hidden" name="id" value={inquiry.id} />
                      <input type="hidden" name="status" value="Contacted" />
                      <button className="rounded border border-slate-300 px-2 py-1">Contacted</button>
                    </form>
                    <form action={updateInquiryStatus}>
                      <input type="hidden" name="id" value={inquiry.id} />
                      <input type="hidden" name="status" value="Completed" />
                      <button className="rounded border border-slate-300 px-2 py-1">Completed</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
