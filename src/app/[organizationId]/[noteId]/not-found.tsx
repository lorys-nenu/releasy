"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const url = usePathname();
  const orgId = url.split("/")[1];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-screen w-9/12 gap-8">
        <p className="text-4xl font-semibold text-gray-500 text-center">{`This Release Note cannot be found, it may have been deleted or unpublished`}</p>
        <Link href={`/${orgId}`}>
          <Button>
            Go back
          </Button>
        </Link>
      </div>
    </div>
  );
}