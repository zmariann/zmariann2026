import { Dot } from "lucide-react";
import { Text } from "./typography/Text";

type DotListProps = {
  items: string[];
};

export function DotList({ items }: DotListProps) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden flex-col gap-2 sm:flex">
        {items.map((item) => (
          <div key={item} className="flex items-center">
            <Dot
              aria-hidden="true"
              className="h-5 w-5 shrink-0"
              strokeWidth={1.5}
            />
            <Text>{item}</Text>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center gap-2 sm:hidden">
        {items.map((item, index) => (
          <div key={item} className="contents">
            <Text>{item}</Text>

            {index < items.length - 1 && (
              <Dot
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
                strokeWidth={1.5}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}