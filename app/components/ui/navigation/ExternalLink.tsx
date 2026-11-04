import { ArrowUpRight } from "lucide-react";
import { Text } from "../typography/Text";

type ExternalLink = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className = "" }: ExternalLink) {
  return (
    <div className="flex items-center gap-1">
      {" "}
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.3}
        className="h-6 w-6 shrink-0"
      />
      <Text className="pt-0.5">
        <a href={href}>{children}</a>
      </Text>
    </div>
  );
}
