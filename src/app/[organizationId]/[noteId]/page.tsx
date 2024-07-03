import prisma from "@/lib/prisma";
import { ReleaseNote } from "@prisma/client";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

export default async function EditorPage({params}: {params: {noteId: string}}) {
  const noteId = params.noteId.split("-").pop();

  const note: ReleaseNote | null = await prisma.releaseNote.findUnique({
    where: { id: Number(noteId) },
  });

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      <Editor note={note} />
    </div>
  );
}

