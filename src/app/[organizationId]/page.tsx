import ReleaseNoteListCard from "@/components/ReleaseNoteListCard";
import prisma from "@/lib/prisma";
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
    <div className="mx-3 md:mx-48 mt-8">
      <h1 className="text-2xl text-center text-pretty">Release Notes from {organization.name}</h1>
      <div className="flex-col mt-4 gap-2">
        {organization.ReleaseNotes.map((releaseNote) => (
          <Link key={releaseNote.id} href={`/${organizationId}/${releaseNote.title.replace(" ", "-")}-${releaseNote.id}`}>
            <ReleaseNoteListCard note={releaseNote} />
          </Link>
        ))}
    </div>
    </div>
  );
}