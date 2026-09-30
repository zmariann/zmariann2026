import { ReactNode } from "react";
import { Text } from "./typography/Text";

type IconTextListProps = {
  items: {
    icon: ReactNode;
    text: ReactNode;
  }[];
};

export function IconTextList({ items }: IconTextListProps) {
  return (
    <div className="flex flex-col max-w-lg text-left">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 border-b border-ink/20 py-6 border-gray-400"
        >
          <div className="mt-1 shrink-0 text-carrot">
            {item.icon}
          </div>

          <Text>{item.text}</Text>
        </div>
      ))}
    </div>
  );
}
