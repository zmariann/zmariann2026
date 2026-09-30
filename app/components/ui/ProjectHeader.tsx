import { Heading } from "./typography/Heading";
import { Text } from "./typography/Text";

type ProjectHeaderProps = {
  title: string;
  category: string;
  website?: string;
  client: string;
};

export function ProjectHeader({
  title,
  category,
  website,
  client,
}: ProjectHeaderProps) {
  return (
    <section className="flex flex-col gap-7">
      <div>
        <Heading level={3} className="">
          {title}
        </Heading>
        <div className="block sm:hidden">
          <Text> Megrendelő | {client} </Text>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer"
          >
            weboldal
          </a>
        </div>
         <Text className="hidden sm:block">
          Megrendelő | {client} |{" "}
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer"
          >
            weboldal
          </a>
        </Text>
      </div>

      <Text>{category}</Text>
    </section>
  );
}
