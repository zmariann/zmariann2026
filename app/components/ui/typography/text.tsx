import { HTMLAttributes } from "react";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  weight?: "regular" | "medium";
};

const variants = {
  regular: "font-normal",
  medium: "font-medium",
};

export function Text({
  weight = "regular",
  className = "",
  ...props
}: TextProps) {
  return (
    <p
      className={`
        text-lg
        leading-relaxed
        tracking-wider
        ${variants[weight]}
        ${className}
      `}
      {...props}
    />
  );
}
