import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { TextList } from "../ui/typography/TextList";

type FeaturedItemProps = {
  image: string;
  alt: string;
  title: string;
  children: React.ReactNode;
};

function FeaturedItem({
  image,
  alt,
  title,
  children,
}: FeaturedItemProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
      <div>
        <img
          src={image}
          alt={alt}
          className="w-full h-auto"
        />
      </div>

      <div className="flex items-center">
        <div className="max-w-lg">
          <TextList>
            <Heading>{title}</Heading>
            {children}
          </TextList>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Heading level={1} color="carrot">
        In Practice
      </Heading>

      <div className="flex flex-col gap-25 mt-20">
        <FeaturedItem
          image="/imgs/landing/landing-01.jpg"
          alt="Exhibition installation at MOCA Taipei"
          title="Artist Interviews & Short-form Video"
        >
          <Text weight="medium">
            Produced artist interviews and short-form video content for
            MOCA Taipei, commissioned by the Ludwig Museum.
          </Text>
        </FeaturedItem>

        <FeaturedItem
          image="/imgs/landing/landing-02.jpg"
          alt="Artwork Documentation"
          title="Artwork Documentation"
        >
          <Text weight="medium">
            High-resolution artwork documentation created as part of a
            studio team, following archival-grade imaging&nbsp;practices.
          </Text>
        </FeaturedItem>

        <FeaturedItem
          image="/imgs/landing/landing-03.jpg"
          alt="CTRL+ALT+CRIT Magazine"
          title="Kind Words"
        >
          <Text weight="medium" italic>
            “Her images are shaped by presence, trust and genuine
            human&nbsp;connection.”
          </Text>

          <Text weight="medium">
            — Beáta Sosity | Co-founder of CTRL+ALT+CRIT&nbsp;Magazine
          </Text>
        </FeaturedItem>
      </div>
    </section>
  );
}