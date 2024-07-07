import { ReleaseNote } from "@prisma/client";

function formatTitle(note: ReleaseNote) {
  const slug = encodeURIComponent(note.title.replace(/ /g, "-").toLowerCase());
  const id = note.id.toString();
  return `${slug}-${id}`;
}

export {
  formatTitle,
}