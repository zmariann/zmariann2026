import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Text } from "../typography/Text";

type InternalLink = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function InternalLink({ href, children, className = "" }: InternalLink) {
  return (
    <div className="flex items-center gap-1">
      {" "}
      <ArrowRight
        aria-hidden="true"
        strokeWidth={1.3}
        className="h-6 w-6 shrink-0"
      />
      <Text className="pt-0.5">
        <Link href={href}>{children}</Link>
      </Text>
    </div>
  );
}
