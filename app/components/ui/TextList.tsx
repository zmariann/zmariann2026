type TextListProps = {
  children: React.ReactNode;
  className?: string;
};

export function TextList({ children, className = "" }: TextListProps) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {children}
    </div>
  );
}