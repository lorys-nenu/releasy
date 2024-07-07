"use client";

import { ReleaseNote } from "@prisma/client";
import { useState } from "react";
import { saveTitle } from "@/helpers/editorHelpers";
import { useDebounceCallback } from "usehooks-ts";

export default function TitleEditor({note}: {note: ReleaseNote}) {
  const [title, setTitle] = useState(note.title);

  const debouncedSaveTitle = useDebounceCallback(saveTitle, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    debouncedSaveTitle(note.id, e.target.value);
  };

  return (
    <input
      type="text"
      value={title}
      onChange={handleChange}
      placeholder="Title"
      className="text-4xl font-semibold w-full"
    />
  )
}