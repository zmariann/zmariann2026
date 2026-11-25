import { ExternalLink } from "./navigation/ExternalLink";
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
        <Heading level={3}>{title}</Heading>

        <Text>Megrendelő | {client}</Text>
      </div>
      {website && <ExternalLink href={website}>weboldal</ExternalLink>}

      <Text>{category}</Text>
    </section>
  );
}
