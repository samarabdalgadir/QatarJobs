import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export async function GET() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(jobs);
}

export async function POST(request: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, description, location, salary } = body;

  if (!title || !description || !location) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // العثور على المستخدم في DB عبر clerkId
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const newJob = await prisma.job.create({
    data: {
      title,
      description,
      location,
      salary,
      ownerId: user.id,
    },
  });

  return NextResponse.json(newJob, { status: 201 });
}
