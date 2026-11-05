"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Text } from "../typography/Text";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="flex gap-1">
      {" "}
      <button
        type="button"
        onClick={() => router.back()}
        className="flex items-center gap-2 cursor-pointer"
        aria-label="Go back"
      >
        <Text className="pt-0.5">Vissza</Text>
      </button>
      <ArrowLeft
        aria-hidden="true"
        strokeWidth={1.3}
        className="h-6 w-6 shrink-0"
      />
    </div>
  );
}
