type TextListProps = {
  children: React.ReactNode;
  className?: string;
};

export function TextList({ children, className = "" }: TextListProps) {
  return (
    <div className={`mt-6 flex flex-col gap-5 ${className}`}>
      {children}
    </div>
  );
}