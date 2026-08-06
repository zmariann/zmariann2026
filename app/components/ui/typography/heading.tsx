type HeadingProps = {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
};

const styles = {
  1: "text-8xl leading-none tracking-tight",
  2: "text-xl leading-none tracking-wide font-semibold",
  3: "text-xl leading-wide font-semibold",
};

export function Heading({
  level = 2,
  children,
}: HeadingProps) {
  const Component = `h${level}` as "h1" | "h2" | "h3";

  return (
    <Component className={styles[level]}>
      {children}
    </Component>
  );
}