import { TextList } from "../ui/TextList";
import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";

export function Intro() {
  return (
    <section className="flex flex-col sm:items-center justify-center">
      <Heading level={1} color="carrot" className="text-center">
        Úgy tűnik éppen fotóst vagy videóst&nbsp;keresel.
      </Heading>

      <Text className="text-center pb-6">Ezek miatt lehetsz&nbsp;itt:</Text>

      <TextList>
        <Text>
          Vállalkozó vagy és a szolgáltatásod vagy terméked bemutatásához van
          szükséged képekre,&nbsp;videókra.
        </Text>
        <Text>
          Elköteleződtél egy fontos ügy mellett és most vizuális anyagokra van szükséged a&nbsp;projektedhez.
        </Text>
        <Text>Csapatodat bővítenéd egy tapasztalt&nbsp;kollégával.</Text>
      </TextList>

      <TextList className="mt-6 sm:text-center">
        <Text>
          Bárki is vagy a kulturális területen szerzett tapasztalatom,
          látásmódom valószínűleg jól jön&nbsp;számodra.
        </Text>
        <Text>Lássuk, mit jelent ez a&nbsp;gyakorlatban...</Text>
      </TextList>
    </section>
  );
}
