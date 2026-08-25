type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`px-5 py-24 lg:py-32 ${className}`}>{children}</section>
  );
}
