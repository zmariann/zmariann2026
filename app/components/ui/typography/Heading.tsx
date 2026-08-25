type HeadingProps = {
  level?: 1 | 2 | 3;
  color?: "ink" | "carrot";
  children: React.ReactNode;
};

const styles = {
  1: "text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tight",
  2: "text-xl leading-none tracking-wide font-semibold",
  3: "text-xl leading-wide font-semibold",
};

const colors = {
  ink: "text-ink",
  carrot: "text-carrot",
};

export function Heading({ level = 2, color = "ink", children }: HeadingProps) {
  const Component = `h${level}` as "h1" | "h2" | "h3";

  return (
    <Component className={`${styles[level]} ${colors[color]}`}>
      {children}
    </Component>
  );
}
