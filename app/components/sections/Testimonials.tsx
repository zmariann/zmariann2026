import { TextList } from "../ui/typography/TextList";
import { Text } from "../ui/typography/Text";
import { Heading } from "../ui/typography/Heading";

export function Testimonials() {
  return (
    <section className="flex justify-center items-center flex-col">
      <Heading level={1} color="carrot">
        Kind Words
      </Heading>
      <TextList>
        <Text weight="medium" italic>
          “Her images are shaped by presence, trust and genuine
          human&nbsp;connection.”
        </Text>
        <Text weight="medium" className="text-right">
          — Beáta Sosity | Co-founder of CTRL+ALT+CRIT&nbsp;Magazine
        </Text>
      </TextList>
    </section>
  );
}
