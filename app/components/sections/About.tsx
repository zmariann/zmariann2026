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
                Sok alkotóhoz hasonlóan engem is az foglalkoztat, hogy segítsek
                megtalálni neked azt a bizonyos egyedi hangot, a sablon
                megoldásokon túl, amit magadénak&nbsp;érzel.
              </Text>
              <Text>
                Szórakoztató tartalmak helyett fontosabb számomra a tudásátadás.
                A mindenki számára mást jelentő „szépség” helyett pedig harmóniára&nbsp;törekszem:
              </Text>
              <Text>
                A látvány egésze, a vizuális elemek, a projekted tartalma és a
                felhasználás módja, célja összhangban kell&nbsp;legyen.
              </Text>
              <Text>
                Olyan tervezői folyamatokat valósítok meg, ahol a vizuális
                elemek sosem csak úgy önmagukban vannak, hanem egy nagyobb
                rendszer részei: pl. meglévő arculathoz illeszkednek, landing
                oldaladat egészítik ki, közösségi média felületeid
                kommunikációját&nbsp;támogatják…
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
