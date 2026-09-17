import { TextList } from "../ui/TextList";
import { Text } from "../ui/typography/Text";
import { Heading } from "../ui/typography/Heading";

export function Testimonials() {
  return (
    <section className="flex justify-center items-center flex-col">
      <Heading level={1} color="carrot">
        Így zajlott a közös munka
      </Heading>

      <div className="flex flex-col gap-20 sm:gap-25 mt-15">
        <TextList>
          <div>
            <Text>
              „Szerintem nagyon jól néz ki, a hang is nagyon jó és a vágások is,{" "}
              <span className="font-bold">
                {" "}
                szuperül megoldotta, ami a kérés&nbsp;volt.
              </span>
            </Text>
            <Text>
              <span className="font-bold">
                Köszönjük Mariannak a gyors, profi és kiváló&nbsp;munkáját.
              </span>
              ”
            </Text>
          </div>

          <Text className="text-right">
            — Kucsera Eszter Panna | Social media manager | Ludwig Múzeum
          </Text>
        </TextList>

        <TextList>
          <Text>
            „Zászlós Mariann a CTRL+ALT+CRIP Magazin fotográfusaként dolgozott
            velünk.
          </Text>
          <Text>
            A vele való munka során az volt a legerősebb, hogy nem kívülről
            közelít a helyzetekhez, hanem belép ezekbe. Nem ‘fotóz’, hanem jelen
            van. Ez a jelen-lét és együtt-lét teszi lehetővé, hogy a képei ne
            beállítottak vagy reprezentatívak legyenek, hanem valódi
            viszonyokból épüljenek&nbsp;fel.
          </Text>
          <Text>
            Portréiban és helyzetképeiben egyszerre van jelen az intimitás és a
            pontosság: észreveszi a gyorsan tovatűnő gesztusokat, a testek
            bizonytalan működését és a közeg, a környezet jelentőségét.
          </Text>
          <Text>
            <span className="font-bold">
              Nem egyszerűen megmutat embereket, hanem teret ad annak, hogy
              saját ritmusukban és valóságukban jelenjenek meg,
              megmutassák&nbsp;magukat.
            </span>
          </Text>
          <Text>
            Ez különösen fontos volt egy olyan közös munkában, ahol a
            fogyatékosság nem téma és nem hiány, hanem tudás, tapasztalat és
            viszony. Mariann képei ezt nem magyarázzák, hanem hagyják
            láthatóvá&nbsp;válni.
          </Text>
          <Text>
            <span className="font-bold">
              Szeretnénk ezt a közös munkát a jövőben is folytatni, mert mind
              szakmailag, mind emberileg társak lettünk egy közös&nbsp;ügyben.
            </span>
          </Text>
          <Text>Természetesen nagyon jó szívvel&nbsp;ajánljuk.”</Text>

          <Text className="text-right">
            — Sosity Beáta, a CTRL+ALT+CRIP Magazin&nbsp;társalapítója
          </Text>
        </TextList>

        <TextList>
          <Text>
            „Mariannal lassan két éve dolgozunk együtt, a cég social media
            videót teljesen ő kezeli több platformon is, ezzel{" "}
            <span className="font-bold">hatalmas terhet vett&nbsp;le&nbsp;rólunk.</span>{" "}
            [...]”
          </Text>
          <Text className="text-right">
            — Varga Ildikó | tulajdonos | Fürge Füge Kft.
          </Text>
        </TextList>
        <TextList>
          <Text>
            „[…] Ami igazán erős Mariann munkájában, hogy nem csúszik bele a
            megszokott ábrázolási sémákba. Nem sajnál, nem „cukisít”, és nem is
            emel piedesztálra. Nem próbálja feloldani a feszültséget — inkább
            megtartja és láthatóvá teszi.
          </Text>

          <Text>
            <span className="font-bold">
              Nem jön zavarba attól, ha egy fogyatékos testet kell megmutatni.
              Képes nyíltan, őszintén és érdeklődéssel közelíteni olyan
              helyzetekhez, amelyektől sokan inkább elfordítanák a fejüket. Nem
              eltakar, hanem megmutat — de úgy, hogy közben nem veszi el az
              érintett személy méltóságát és autonómiáját.
            </span>
          </Text>
          <Text>
            Számomra ez a hozzáállás nemcsak szakmailag erős, hanem ritka is.
            Mariann munkája nem reprezentál, hanem jelenlétet hoz létre. Nagyon
            jó szívvel ajánlom.”
          </Text>
          <Text className="text-right">
            — Csángó Dániel, a CTRL+ALT+CRIP Magazin társalapítója
          </Text>
        </TextList>
      </div>
    </section>
  );
}
