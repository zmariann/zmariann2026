import { Text } from "../ui/typography/Text";
import { TextList } from "../ui/TextList";
import { Heading } from "../ui/typography/Heading";

export function About() {
  return (
    <section>
      <TextList>
        <div className="sm:text-center text-left">
          <Heading level={1} color="carrot">
            What to expect when working with me
          </Heading>
        </div>

        <div className="flex justify-center">Portrait pic</div>

        <Text>
          My visual approach is shaped by my interest in fine art and my
          professional experience working in a museum environment.
        </Text>
        <Text>
          At the same time, my priority is always to find a solution that feels
          right for you and your business, something that matches your vision
          and brings to life what you’ve always imagined.
        </Text>

        <Text>
          I find joy in every project, whether it’s capturing an event or
          putting together a short video. I want you to experience that same joy
          that comes from the creative process and the right end result.
        </Text>

        <Text>
          My goal is to create work that your audience will want to come back
          to, content that feels relevant to them while being visually engaging.
        </Text>

        <Text>
          Since no two projects are the same, I always tailor my services to
          your specific needs.
        </Text>
        <Text>
          Not sure what you need yet? That’s perfectly fine — I can help you
          find the right direction.
        </Text>
      </TextList>

      <div className="flex justify-center">video</div>
    </section>
  );
}
