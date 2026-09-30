import { Text } from "../ui/typography/Text";
import { TextList } from "../ui/TextList";
import { Heading } from "../ui/typography/Heading";

export function About() {
  return (
    <section>
      <div className="sm:text-center text-left">
        <Heading level={1} color="carrot">
          Neked személyesen
        </Heading>
      </div>

      <div className="flex justify-center">Portrait pic</div>

      <Text>

      </Text>

      <div className="flex justify-center">video</div>
    </section>
  );
}
