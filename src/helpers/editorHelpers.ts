"use server";

import prisma from "@/lib/prisma";
import { ReleaseNote } from "@prisma/client";

export async function saveContent (content: ReleaseNote["content"]) {
  if (!content) {
    return;
  }

  await prisma.releaseNote.update({
    where: { id: 1 },
    data: { content },
  });
}