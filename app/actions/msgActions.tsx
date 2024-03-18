"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/prisma/prisma";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await prisma.msg.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.msg.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function deleteMsg(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await prisma.msg.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath("/");
}

export async function msgStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const msg = await prisma.msg.findUnique({
    where: {
      id: inputId,
    },
  });

  if (!msg) {
    return;
  }

  const updatedStatus = !msg.isCompleted;

  await prisma.msg.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });

  revalidatePath("/");

  return updatedStatus;
}
