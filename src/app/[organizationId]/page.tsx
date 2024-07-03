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
    <div>
      <h1>{organization.name}</h1>
      {organization.ReleaseNotes.map((releaseNote) => (
        <Link key={releaseNote.id} href={`/${organizationId}/${releaseNote.title.replace(" ", "-")}-${releaseNote.id}`}>
        <div key={releaseNote.id}>
          {releaseNote.title}
          </div>
        </Link>
      ))}
    </div>
  );
}