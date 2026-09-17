import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { TextList } from "../ui/TextList";

export function Collaborations() {
  return (
    <section className="flex flex-col items-center justify-center sm:min-h-screen pt-24 sm:pt-0">
      <Heading level={1} color="carrot" className="hidden sm:block">
        Együttműködések
      </Heading>
      <div className="w-fit max-w-full pt-6">
        <Heading level={1} color="carrot" className="block sm:hidden">
          Együttműködések
        </Heading>
        <TextList>
          <Text weight="medium">
            <span>Ludwig Múzeum</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">Kortárs Művészeti Múzeum</span>
          </Text>

          <Text weight="medium">
            <span> MOCA Taipei</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">
              Museum of Contemporary Art Taipei
            </span>
          </Text>

          <Text weight="medium">Szépművészeti Múzeum, Budapest</Text>

          <Text weight="medium">Ctrl+Alt+Crip Magazin</Text>
        </TextList>
      </div>
    </section>
  );
}
