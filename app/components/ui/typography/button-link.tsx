"use client";

import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  variant?: "default" | "carrot" | "minimalist";
  className?: string;
};

const variants = {
  default: "bg-graphite text-platinum",
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

        text-m
        font-semibold
        tracking-wider

        active:opacity-90

       ${variants[variant]}
       ${className}
      `}
      {...props}
    >
      <span className="flex-1 text-left">{children}</span>
      <ArrowRight
        strokeWidth={1.5}
        className="
          h-6
          w-6
          shrink-0
          transition-transform
          duration-300
          ease-[cubic-bezier(0.34,1.56,0.64,1)]
          group-hover:translate-x-2
          group-active:translate-x-2
        "
      />
    </Link>
  );
}
