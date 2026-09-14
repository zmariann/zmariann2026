import { TextList } from "../ui/TextList";
import { Text } from "../ui/typography/Text";
import { Heading } from "../ui/typography/Heading";

export function Testimonials() {
  return (
    <section className="flex justify-center items-center flex-col">
      <Heading level={1} color="carrot">
        Kind Words
      </Heading>

      <div className="flex flex-col gap-20 sm:gap-25 mt-15">
        <TextList>
          <Text weight="medium" italic className="sm:text-center">
            “Her images are shaped by presence, trust and genuine
            human&nbsp;connection.”
          </Text>
          <Text weight="medium" className="text-right sm:text-center">
            — Beáta Sosity | Co-founder of CTRL+ALT+CRIT&nbsp;Magazine
          </Text>
        </TextList>
        <TextList>
          <Text weight="medium" italic className="sm:text-center">
            “Mariann and I have been working together for almost two years. She
            fully manages the company’s social media video content across
            multiple platforms, taking a huge workload off our&nbsp;shoulders.”
          </Text>
          <Text weight="medium" className="text-right sm:text-center">
            — Ildikó Varga | Owner of Fürge Füge Kft.
          </Text>
        </TextList>
        <TextList>
          <Text weight="medium" italic className="sm:text-center">
            “A creative, thoughtful and reliable creator.”
          </Text>
          <Text weight="medium" className="text-right sm:text-center">
            — Ivett Zahorján | Founder of Rebellive.net
          </Text>
        </TextList>
      </div>
    </section>
  );
}
