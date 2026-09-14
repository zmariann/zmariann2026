import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { DotList } from "../ui/DotList";

export function Intro() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <Heading level={1} color="carrot">
        However you found your way here, you are probably looking for a creative
        partner.
      </Heading>

      <Text>
        My visual approach is shaped by my interest in fine art and my
        professional experience working in a museum environment.
      </Text>

      <Text >
        At the same time, my priority is always to find a solution that feels
        right for you and your business, something that matches your vision and
        reflects what you’ve always imagined.
      </Text>

      <div className="flex h-screen items-center justify-center">
        Intro video
      </div>

      <div className="flex flex-col items-center gap-10 pt-15">
        <Text>
          If you recognize yourself in any of these, we might be a good match:
        </Text>

        <DotList
          items={[
            "You’re starting a business and need visual content from scratch.",
            "You already have content, but it’s time for something new.",
            "You’re building a creative team and looking for a photographer or videographer to join.",
            "Or you have existing footage that needs to be turned into something polished.",
            "Small-budget and socially minded projects are welcome too.",
          ]}
        />
      </div>
    </section>
  );
}
