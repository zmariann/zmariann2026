import { HTMLAttributes } from "react";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  weight?: "regular" | "medium";
  italic?: boolean;
};

const variants = {
  regular: "font-normal",
  medium: "font-medium",
};

export function Text({
  weight = "medium",
  italic = false,
  className = "",
  ...props
}: TextProps) {
  return (
    <p
      className={`
        text-lg
        leading-tight
        tracking-wide
        ${variants[weight]}
        ${italic ? "italic" : ""}
        ${className}
      `}
      {...props}
    />
  );
}
