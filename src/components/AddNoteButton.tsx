"use client";
import { LuPlus } from "react-icons/lu";
import Button from "./Button";
import { createBlankNote } from "@/helpers/noteHelpers";
import { useRouter } from "next/navigation";
import { formatTitle } from "@/utils/format";

export default function AddNoteButton() {
  const router = useRouter();
  const handleClick = async () => {
    const newNote = await createBlankNote();
    router.push(`/${newNote.Organization.identifier}/${formatTitle(newNote)}`);
  }

  return (
    <Button 
      onClick={handleClick}
      className="relative w-full mt-2
      sm:rounded-full sm:absolute sm:bottom-12 sm:right-16 :left-auto sm:w-fit">
      <LuPlus className="inline-block mr-2" />
      Add Note
    </Button>
  );
}