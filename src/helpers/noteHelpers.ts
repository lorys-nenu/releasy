"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBlankNote() {
  const newNote = await prisma.releaseNote.create({
    data: {
      title: "New Note",
      content: "",
      organizationId: 1,
    },
    include: {
      Organization: true,
    },
  });
  revalidatePath(`/${newNote.Organization.identifier}/`);
  return newNote;
}