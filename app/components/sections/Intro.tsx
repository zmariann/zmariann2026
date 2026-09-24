import { TextList } from "../ui/TextList";
import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";

export function Intro() {
  return (
    <section className="flex flex-col sm:items-center items-start justify-center sm:text-center pt-40">
      <Heading level={1} color="carrot">
        Úgy tűnik éppen fotóst vagy videóst&nbsp;keresel,
      </Heading>
      <Text>és az egyik munkám érdekes lehet számodra.</Text>
      <Text>Négy ok valamelyike miatt lehetsz itt:</Text>
      <TextList>
        <Text>
          Vállalkozó vagy és eladni szeretnél, ezért van szükséged vizuális
          tartalomra.{" "}
        </Text>
        <Text>
          A kulturális területen szerzett tapasztalatomra,
          látásmódomra van szükséged.{" "}
        </Text>
        <Text>
          Valamilyen társadalmi ügy támogatásához keresel szakembert, aki
          vizuális tartalommal segíti a projekted megvalósítását.{" "}
        </Text>
        <Text>
          Illetve ezeknek valamilyen kombinációja az, ami hasznos lehet
          számodra.
        </Text>
      </TextList>
    </section>
  );
}
