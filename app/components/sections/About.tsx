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
            <TextList>
              <Text>Egy megrendelőm szerint valószínűleg ilyennek ismersz majd&nbsp;meg:</Text>
              <Text>
                Tökre rugalmas, az ötleteidet, kéréseidet figyelembe vevő, saját
                elképzelésekkel rendelkező, de soha nem tukmáló, felügyeletet nem igénylő&nbsp;kollégád.
              </Text>
              <Text>Így gondolkodom:</Text>
              <Text>
                Olyan tervezői folyamatokat valósítok meg, ahol a vizuális
                elemek sosem csak úgy önmagukban vannak, hanem egy nagyobb
                rendszer részei: pl. meglévő arculathoz illeszkednek, landing
                oldaladat egészítik ki, közösségi média felületeid
                kommunikációját&nbsp;támogatják…
              </Text>
              <Text>
                A látvány egésze, a vizuális elemek, a projekted tartalma és a
                felhasználás módja, célja összhangban kell&nbsp;legyen.
              </Text>
            </TextList>
          </div>
        </div>
        <Image
          src="/imgs/landing/landing-04.jpg"
          alt="portrait"
          width={720}
          height={1080}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
