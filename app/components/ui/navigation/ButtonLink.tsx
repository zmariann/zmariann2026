"use client";

import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Text } from "../typography/Text";

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  variant?: "default" | "carrot" | "minimalist";
  className?: string;
};

const variants = {
  default: "border-graphite border-1 text-graphite",
  carrot: "bg-carrot text-graphite",
  minimalist: "bg-accent text-ink",
};

export function ButtonLink({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`
        group
        inline-flex
        w-full
        min-w-44
        items-center
        px-6
        py-3

       ${variants[variant]}
       ${className}
      `}
      {...props}
    >
      <Text className="flex-1 text-left pt-0.5">{children}</Text>
      <ArrowRight
        strokeWidth={1.3}
        className="
          h-6
          w-6
          shrink-0
          transition-transform
          duration-300
          ease-[cubic-bezier(0.34,1.56,0.64,1)]
          group-hover:translate-x-2
        "
      />
    </Link>
  );
}
