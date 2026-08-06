import type { HTMLAttributes } from "react";

type DisplayProps = HTMLAttributes<HTMLHeadingElement>;

export function Display({ className = "", ...props }: DisplayProps) {
  return (
    <h1
      className={`
        text-5xl
        md:text-6xl
        font-semibold
        leading-none
        tracking-tight
        ${className}
      `}
      {...props}
    />
  );
}
