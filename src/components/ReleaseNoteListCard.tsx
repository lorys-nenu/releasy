import { ReleaseNote } from "@prisma/client";

export default function ReleaseNoteListCard({note}: {note: ReleaseNote}) {
  return (
    <div className="flex flex-row items-center justify-between p-4 
                    border border-gray-200 rounded-lg shadow-sm
                    hover:bg-purple-50 transition-all">
      <p className="text-lg font-semibold">{note.title}</p>
      <p className="text-sm text-gray-400">{note.createdAt.toLocaleDateString()}</p>
    </div>
  )
}