"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { ReleaseNote } from "@prisma/client";
import { saveContent } from "@/helpers/editorHelpers";
import { useDebounceCallback } from "usehooks-ts";
import { PartialBlock } from "@blocknote/core";

type Props = {
  note: ReleaseNote;
};
 
export default function Editor({note}: Props) {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: note.content as PartialBlock[],
  });

  const debouncedSaveContent = useDebounceCallback(saveContent, 500);
 
  // Renders the editor instance using a React component.
  return (
    <BlockNoteView 
      editor={editor} 
      onChange={() => debouncedSaveContent(note.id, editor.document)}
    />
  )
  ;
}
 