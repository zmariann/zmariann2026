import { TextList } from "../ui/TextList";
import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";

export function Intro() {
  return (
    <section className="flex flex-col">
      <div className="sm:min-h-screen flex sm:items-center justify-center flex-col">
        {" "}
        <Heading level={1} color="carrot" className="text-center">
          Úgy tűnik éppen fotóst vagy videóst&nbsp;keresel.
        </Heading>
        <Text className="text-center pb-6">Ezek miatt lehetsz&nbsp;itt:</Text>
        <TextList className="sm:text-center">
          <Text>
            <span className="font-bold">Vállalkozó vagy </span> és a
            szolgáltatásodat vagy termékedet szeretnéd&nbsp;megmutatni.
          </Text>
          <Text>
            Elköteleződtél egy fontos ügy mellett:{" "}
            <span className="font-bold">társadalmi célú&nbsp;projektedhez</span>{" "}
            keresel vizuális&nbsp;megoldásokat.
          </Text>
          <Text>
            {" "}
            <span className="font-bold">Stúdiód, ügynökséged van </span> és a
            csapatodat bővítenéd egy tapasztalt&nbsp;kollégával.
          </Text>
        </TextList>
      </div>

      <div className="sm:min-h-screen flex sm:items-center justify-center flex-col">
        {" "}
        <Heading level={1} color="carrot" className="text-center">
          Passzolunk, ha:
        </Heading>
        <TextList className="sm:text-center">
          <Text>márkádat építenéd,</Text>
          <Text>
            meglévő marketing stratégiád mellé szeretnél képeket,&nbsp;videókat,
          </Text>

          <Text>
            egy veled együtt gondolkodó partnert keresel hosszútávra, akit
            érdekel, hogy miben vagy éppen és merre&nbsp;tartasz.
          </Text>
        </TextList>
      </div>
    </section>
  );
}
