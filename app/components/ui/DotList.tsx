import { Dot } from "lucide-react";
import { Text } from "./typography/Text";

type DotListProps = {
  items: React.ReactNode[];
};

export function DotList({ items }: DotListProps) {
  return (
    <>
   

      {/* Mobile */}
      <div className="flex flex-col items-center gap-2">
        {items.map((item, index) => (
          <div key={index} className="contents">
            <Text>{item}</Text>

            {index < items.length - 1 && (
              <Dot
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
                strokeWidth={5}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}