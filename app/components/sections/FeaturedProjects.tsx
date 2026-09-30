import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { TextList } from "../ui/TextList";

type FeaturedItemProps = {
  image: string;
  alt: string;
  title: string;
  children: React.ReactNode;
};

function FeaturedItem({ image, alt, title, children }: FeaturedItemProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-15">
      <img src={image} alt={alt} className="h-auto w-full" />

      <TextList>
        <Heading>{title}</Heading>
        {children}
      </TextList>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Heading level={1} color="carrot">
        Megvalósult projektek
      </Heading>

      <Text className="text-center">Válogatás a legutóbbi munkáimból</Text>

      <div className="flex flex-col gap-25 mt-15">
        <FeaturedItem
          image="/imgs/landing/landing-01.jpg"
          alt="Exhibition installation at MOCA Taipei"
          title="Rövid formátumú videók a Ludwig Múzeum megbízásából, a MOCA Taipei számára"
        >
          <Text>Letisztult stílusú&nbsp;videók.</Text>
        </FeaturedItem>

        <FeaturedItem
          image="/imgs/landing/landing-02.jpg"
          alt="Artwork Documentation"
          title="Műtárgy fotózás egy csapat részeként, felszerelt stúdióban, magyarország múzeumainak"
        >
          <Text>
            Egységes kinézetű, a tárgyat részletesen bemutató&nbsp;fotók.
          </Text>
        </FeaturedItem>

        <FeaturedItem
          image="/imgs/landing/landing-03.jpg"
          alt="CTRL+ALT+CRIT Magazine"
          title="Dokumentarista fotók a CTRL+ALT+CRIP Magazin számára"
        >
          <Text weight="medium">
            Ha van egy ügyed, amivel kiállsz emberek jogai mellett és el tudnál
            képzelni egy együttműködést, akkor bátran írj olyan esetben is, ha a
            büdzsé miatt esetleg kétségeid&nbsp;lennének.
          </Text>
        </FeaturedItem>
      </div>
    </section>
  );
}
