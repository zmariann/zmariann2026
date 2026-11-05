import Image from "next/image";
import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { TextList } from "../ui/TextList";

export function About() {
  return (
    <section className="flex flex-col items-center">
      <div className="md:grid md:grid-cols-2 md:gap-20 flex flex-col gap-10">
        <div className="flex justify-center items-center">
          <div className="sm:max-w-xl md:max-w-full">
            <Heading level={2} className="mb-8">
              Kedves Vállalkozó!
            </Heading>

            <TextList>
              {" "}
              <Text>
                Foglalkoztat, hogy hogyan tudlak úgy segíteni, hogy a sablon
                megoldásokon túl megtaláld azt a bizonyos egyedi hangot, amit
                magadénak&nbsp;érzel.
              </Text>
              <Text>
                Passzolunk, ha a szórakoztató tartalmak helyett számodra is
                fontosabb a tudásátadás. Valamint, ha nem csak úgy gyorsba’ egy
                végrehajtót keresel, hanem egy veled együtt gondolkodó partnert,
                akit érdekel, hogy miben vagy éppen és merre&nbsp;tartasz.
              </Text>
              <Text>
                Olyan tervezői folyamatokat valósítok meg, ahol a vizuális
                elemek sosem csak úgy önmagukban vannak, hanem egy nagyobb
                rendszer részei: pl. meglévő arculathoz illeszkednek, landing
                oldaladat egészítik ki, közösségi média felületeid
                kommunikációját&nbsp;támogatják…
              </Text>
              <Text>
                A látvány egésze, a vizuális elemek, a
                projekted tartalma és a felhasználás módja, célja összhangban
                kell&nbsp;legyen.
              </Text>
              <Text>
                Mivel személyesen a te projektedhez keressük a megoldást, ezért
                egyéni konzultáció keretében tudunk&nbsp;egyeztetni.
              </Text>
              <Text>Kérdésed esetén bátran telefonon is&nbsp;hívhatsz:</Text>
              <Text>+3630</Text>
            </TextList>
          </div>
        </div>
        <Image
          src="/imgs/landing/landing-04.jpg"
          alt="CTRL+ALT+CRIP projekt fotó"
          width={720}
          height={1080}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
