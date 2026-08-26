import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { TextList } from "../ui/typography/TextList";

export function Collaborations() {
  return (
    <section className="flex flex-col items-center justify-center sm:min-h-screen pt-24 sm:pt-0">
      <div className="w-fit max-w-full">
        <Heading level={1} color="carrot">
          Selected <br />
          collaborations
        </Heading>

        <TextList>
          <Text weight="medium">
            <span>Ludwig Museum</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">Museum of Contemporary Art</span>
          </Text>

          <Text weight="medium">
            <span> MOCA Taipei</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">
              Museum of Contemporary Art Taipei
            </span>
          </Text>

          <Text weight="medium">Museum of Fine Arts, Budapest</Text>

          <Text weight="medium">Ctrl+Alt+Crip Magazine</Text>
        </TextList>
      </div>
    </section>
  );
}
