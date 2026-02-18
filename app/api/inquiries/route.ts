export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      serviceType: true,
      status: true,
      preferredDate: true,
      createdAt: true
    }
  });
  return NextResponse.json(inquiries);
}
