import { Text } from "../ui/typography/Text";
import { TextList } from "../ui/TextList";
import { Heading } from "../ui/typography/Heading";

export function About() {
  return (
    <section>
      <div className="sm:text-center text-left">
        <Heading level={1} color="carrot">
          Mire számíthatsz, ha együtt dolgozunk
        </Heading>
      </div>

      <div className="flex justify-center">Portrait pic</div>

      <Text>
        Számomra minden projekt örömteli, legyen az egy rendezvény megörökítése
        vagy egy rövid videó összevágása. Azt szeretném, hogy te is
        megtapasztald azt az örömöt, amit ez a kreatív folyamat és a megfelelő
        végeredmény ad. Egy videóban összefoglaltam, hogy hogyan áll össze a munkafolyamat velem:
      </Text>

      <div className="flex justify-center">video</div>
    </section>
  );
}
