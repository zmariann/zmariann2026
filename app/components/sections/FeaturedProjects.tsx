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
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-15">
      <div className="flex items-center">
        <img src={image} alt={alt} className="h-auto w-full" />
      </div>

      <div className="flex items-center">
        <div>
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
        Ötletek számodra
      </Heading>

      <Text className="text-center">
        Itt olyan projekekről olvashatsz, amik inspirációként szolgálhatnak a
        saját&nbsp;vállalkozásodhoz.
      </Text>

      <div className="flex flex-col gap-25 mt-15">
        <FeaturedItem
          image="/imgs/landing/landing-01.jpg"
          alt="Exhibition installation at MOCA Taipei"
          title="Rövid formátumú videók a Ludwig Múzeum megbízásából, a MOCA Taipei számára"
        >
          <Text>
            Visszafogott, effektek nélküli, letisztult stílusú&nbsp;videók.
          </Text>

          <Text>
            Ez a projekt jó példa arra, milyen mikor egy videónak a célja, nem a
            viralitás, hanem hogy vonzó módon mutassa be a szolgáltatásodat az
            érdeklődőidnek. Egy felvételből többféle verzió készülhet: például
            reels, közösségi médiára és a landing oldaladra
            egy&nbsp;bemutatkozó.
          </Text>

          <Text>
            Nem csak kulturális intézmények szeretik ezt a típusú megoldást. A
            szépségipar, építészirodák, oktatók és tanácsadók kedvelt
            kommunikációs formája&nbsp;ez.
          </Text>
        </FeaturedItem>

        <FeaturedItem
          image="/imgs/landing/landing-02.jpg"
          alt="Artwork Documentation"
          title="Műtárgy digitalizálás egy csapat részeként, kiválóan felszerelt stúdióban"
        >
          <Text>
            Egységes kinézetű, a tárgyat részletesen bemutató&nbsp;fotók.
          </Text>

          <Text>
            A stúdióban történő tárgyfotózás akkor jöhet szóba, ha fizikai
            terméked van. Sokféle stílusú világítás és hangulat közül
            dönthetünk, hogy mi illik leginkább a termékedhez. A megszokott
            webshopos fotók mellett jól jöhet néhány kreatívabb kép is
            weboldalra,&nbsp;hirdetéshez.
          </Text>
        </FeaturedItem>

        <FeaturedItem
          image="/imgs/landing/landing-03.jpg"
          alt="CTRL+ALT+CRIT Magazine"
          title="Dokumentarista fotók a CTRL+ALT+CRIP Magazin számára"
        >
          <Text weight="medium">
            Rendezvény dokumentációnál, portrénál vagy a vállalkozásodat
            bemutató hangulatképeknél is passzolhat ez a stílus hozzád.
            Karakteres személyes márkák, kreatív emberek, alkotók kedvelt
            stílusa&nbsp;ez.
          </Text>
          <Text weight="medium">
            Ha van egy ügyed, amivel kiállsz emberek alapvető jogai mellett és
            el tudnál képzelni egy együttműködést, akkor bátran írj olyan
            esetben is, ha a büdzsé miatt esetleg kétségeid&nbsp;lennének.
          </Text>
        </FeaturedItem>
      </div>
    </section>
  );
}
