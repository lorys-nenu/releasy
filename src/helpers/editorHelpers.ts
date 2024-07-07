"use server";

import prisma from "@/lib/prisma";
import { ReleaseNote } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function saveContent (id: number, content: ReleaseNote["content"]) {
  if (!content) {
    return;
  }

  await prisma.releaseNote.update({
    where: { id },
    data: { content },
  });
}

export async function saveTitle (id: number, title: ReleaseNote["title"]) {
  if (!title) {
    return;
  }

  const updatedNote = await prisma.releaseNote.update({
    where: { id },
    data: { title },
    include: {
      Organization: true,
    }
  });
  revalidatePath(`/${updatedNote.Organization.identifier}/`);
}