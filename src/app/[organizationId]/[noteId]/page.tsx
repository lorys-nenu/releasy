import Button from "@/components/Button";
import TitleEditor from "@/components/TitleEditor";
import prisma from "@/lib/prisma";
import { ReleaseNote } from "@prisma/client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu"

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

export default async function EditorPage({params}: {params: {noteId: string, organizationId: string}}) {
  const noteId = params.noteId.split("-").pop();

  if (!noteId || isNaN(Number(noteId))) {
    return notFound();
  }

  const note: ReleaseNote | null = await prisma.releaseNote.findUnique({
    where: { id: Number(noteId) },
  });

  if (!note) {
    return notFound();
  }

  return (
    <div className="md:mx-24 p-2">
      <Link href={`/${params.organizationId}`}>
      <Button>
        <LuArrowLeft className="inline-block mr-2" />
        Back
        </Button>
        </Link>
      <div className="md:mx-14 mb-2">
        <TitleEditor note={note} />
      </div>
      <Editor note={note} />
    </div>
  );
}

