"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  propertyType: z.enum(["House", "Flat", "Office"]),
  serviceType: z.enum(["Regular", "Deep Clean", "End of Tenancy"]),
  preferredDate: z.string().min(1),
  message: z.string().min(5),
});

export async function submitInquiry(formData: FormData) {
  const parsed = inquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    propertyType: formData.get("propertyType"),
    serviceType: formData.get("serviceType"),
    preferredDate: formData.get("preferredDate"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { error: "Please check your details and try again." };
  }

  await prisma.inquiry.create({
    data: {
      ...parsed.data,
      preferredDate: new Date(parsed.data.preferredDate),
    },
  });

  revalidatePath("/admin");
  return { success: "Thanks! We received your quote request." };
}

// Server Actions used in <form action={...}> must return void / Promise<void>
export async function adminLogin(formData: FormData): Promise<void> {
  const password = String(formData.get("password") ?? "");

  if (password && password === process.env.ADMIN_PASSWORD) {
    cookies().set("admin-auth", password, {
      httpOnly: true,
      sameSite: "lax",
    });
    redirect("/admin");
  }

  // Invalid password: redirect back with an error flag
  redirect("/admin/login?error=1");
}

export async function updateInquiryStatus(formData: FormData) {
  const id = Number(formData.get("id"));
  const status = String(formData.get("status"));

  const authCookie = cookies().get("admin-auth")?.value;
  if (!authCookie || authCookie !== process.env.ADMIN_PASSWORD) {
    throw new Error("Unauthorized");
  }

  if (!Number.isFinite(id) || !["Contacted", "Completed"].includes(status)) {
    throw new Error("Invalid request");
  }

  await prisma.inquiry.update({ where: { id }, data: { status } });
  revalidatePath("/admin");
}

