import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { TextList } from "../ui/TextList";
import { Dot } from "lucide-react";
import { DotList } from "../ui/DotList";

type FeaturedItemProps = {
  image: string;
  alt: string;
  title: string;
  children: React.ReactNode;
};

function FeaturedItem({ image, alt, title, children }: FeaturedItemProps) {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-15">
      <div className="flex items-center">
        <img src={image} alt={alt} className="h-auto w-full" />
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
        Kiemelt munkáim
      </Heading>

      <div className="flex flex-col gap-25 mt-15">
        <FeaturedItem
          image="/imgs/landing/landing-01.jpg"
          alt="Exhibition installation at MOCA Taipei"
          title="Interjúk és rövid formátumú videók"
        >
          <Text>
            Visszafogott hangulatú, effektmentes, letisztult stílusú&nbsp;videók.
          </Text>
          <Text>
            Ezeknek a célja elsősorban nem a viralitás, hanem hogy bemutassák a
            szolgáltatásodat. Egy felvételből többféle verzió
            készülhet: például reels, közösségi médiára és a landing oldaladra
            egy&nbsp;bemutatkozó.
          </Text>

          <Text>Megrendelő | Ludwig Múzeum, a MOCA Taipei számára.</Text>
        </FeaturedItem>

        <FeaturedItem
          image="/imgs/landing/landing-02.jpg"
          alt="Artwork Documentation"
          title="Műtárgy digitalizálás"
        >
          <Text weight="medium">
            Nagy felbontású műtárgyfotók készítése egy csapat
            részeként, felszerelt stúdióban, archiválási&nbsp;minőségben.
          </Text>
        </FeaturedItem>

        <FeaturedItem
          image="/imgs/landing/landing-03.jpg"
          alt="CTRL+ALT+CRIT Magazine"
          title="Documentary Photography"
        >
          <Text weight="medium">
            Documentary photography for CTRL+ALT+CRIP&nbsp;Magazine.
          </Text>
        </FeaturedItem>
      </div>
    </section>
  );
}
