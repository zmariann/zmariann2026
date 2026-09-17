type HeadingProps = {
  level?: 1 | 2 | 3;
  color?: "ink" | "carrot";
  className?: string;
  children: React.ReactNode;
};

const styles = {
  1: "text-4xl sm:text-6xl lg:text-8xl leading-[1.3] tracking-tight",
  2: "text-xl leading-[1.3] tracking-wide font-semibold",
  3: "text-xl leading-wide font-semibold",
};

const colors = {
  ink: "text-ink",
  carrot: "text-carrot",
};

export function Heading({
  level = 2,
  color = "ink",
  className = "",
  children,
}: HeadingProps) {
  const Component = `h${level}` as "h1" | "h2" | "h3";

  return (
    <Component
      className={`${styles[level]} ${colors[color]} ${className}`}
    >
      {children}
    </Component>
  );
}