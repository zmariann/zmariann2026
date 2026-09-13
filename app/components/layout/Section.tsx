type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`px-5 py-15 lg:py-20 ${className}`}>{children}</section>
  );
}
