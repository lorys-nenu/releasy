import AddNoteButton from "@/components/AddNoteButton";
import ReleaseNoteListCard from "@/components/ReleaseNoteListCard";
import prisma from "@/lib/prisma";
import { formatTitle } from "@/utils/format";
import Link from "next/link";

export default async function OrganizationPage({params}: {params: {organizationId: string}}) {
  const organizationId = params.organizationId;
  const organization = await prisma.organization.findUnique({
    where: {
      identifier: organizationId,
    },
    include: {
      ReleaseNotes: true,
    },
  });

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="flex flex-col w-screen h-screen px-3 sm:px-48 pt-8">
      <h1 className="text-2xl text-center text-pretty">Release Notes from {organization.name}</h1>
      <div className="flex flex-col mt-4 gap-2">
        {organization.ReleaseNotes.map((releaseNote) => (
          <Link key={releaseNote.id} href={`/${organizationId}/${formatTitle(releaseNote)}`}>
            <ReleaseNoteListCard note={releaseNote} />
          </Link>
        ))}
        <AddNoteButton /> 
      </div>
    </div>
  );
}