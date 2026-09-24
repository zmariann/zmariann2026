import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { ProjectHeader } from "@/app/components/ui/ProjectHeader";
import { Text } from "@/app/components/ui/typography/Text";
import Image from "next/image";

export default function CtrlAltCrip() {
  return (
    <section>
      <Section>
        <Container>
          <div className="flex flex-col md:gap-40 gap-20">
            <ProjectHeader
              title="Rend/ellenes"
              client="CTRL+ALT+CRIP"
              category="Dokumentarista fotósorozat"
            />

            <div className="flex items-center justify-center">
              <div className="sm:max-w-lg flex flex-col gap-3">
                <Text>
                  „A CTRL+ALT+CRIP egy nyomtatott és digitális&nbsp;magazin.
                </Text>
                <Text>
                  A fogyatékosság, a design, a művészet, a technológia és a
                  testi tapasztalatból születő tudás találkozásáról&nbsp;szól.”
                </Text>
                <Text>— ctrlaltcrip.com</Text>
              </div>
            </div>

            <Image
              src="/projects/ctrlaltcrip/hero.jpg"
              alt="CTRL+ALT+CRIP projekt fotó"
              width={1410}
              height={940}
              priority
              className="h-auto w-full"
            />

            <div className="flex items-center justify-center">
              <div className="sm:max-w-sm">
                {" "}
                <Text>
                  „Zászlós Mariann a CTRL+ALT+CRIP Magazin fotográfusaként
                  dolgozott&nbsp;velünk.”
                </Text>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-2 xl:gap-20 sm:gap-5 flex flex-col gap-10">
              <Image
                src="/projects/ctrlaltcrip/ctrlaltcrip-01.jpg"
                alt="CTRL+ALT+CRIP projekt fotó"
                width={659}
                height={988}
                priority
                className="h-auto w-full"
              />

              <Image
                src="/projects/ctrlaltcrip/ctrlaltcrip-02.jpg"
                alt="CTRL+ALT+CRIP projekt fotó"
                width={661}
                height={991}
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="flex items-center justify-center">
              <div className="sm:max-w-xl flex flex-col gap-3">
                {" "}
                <Text>
                  „A vele való munka során az volt a legerősebb, hogy nem
                  kívülről közelít a helyzetekhez, hanem belép&nbsp;ezekbe.
                </Text>
                <Text>
                  Nem ‘fotóz’, hanem jelen van. Ez a jelen-lét és együtt-lét
                  teszi lehetővé, hogy a képei ne beállítottak vagy
                  reprezentatívak legyenek, hanem valódi viszonyokból
                  épüljenek&nbsp;fel.”
                </Text>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-20 flex flex-col gap-10">
              <Image
                src="/projects/ctrlaltcrip/ctrlaltcrip-03.jpg"
                alt="CTRL+ALT+CRIP projekt fotó"
                width={843}
                height={1264}
                priority
                className="h-auto w-full"
              />

              <div className="flex justify-center items-center">
                <div className="sm:max-w-xl md:max-w-full">
                  {" "}
                  <Text>
                    „Portréiban és helyzetképeiben egyszerre van jelen az
                    intimitás és a pontosság: észreveszi a gyorsan tovatűnő
                    gesztusokat, a testek bizonytalan működését és a közeg, a
                    környezet&nbsp;jelentőségét.”
                  </Text>
                </div>
              </div>
            </div>

            <Image
              src="/projects/ctrlaltcrip/ctrlaltcrip-04.jpg"
              alt="CTRL+ALT+CRIP projekt fotó"
              width={1405}
              height={2107}
              priority
              className="h-auto w-full"
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-10">
              <div className="max-w-9/11 md:max-w-3/4 md:grid md:grid-cols-2 flex flex-col sm:gap-10">
                <div className="flex justify-center items-center">
                  <div className="sm:max-w-xl md:max-w-full">
                    {" "}
                    <Text>
                      „Nem egyszerűen megmutat embereket, hanem teret ad annak,
                      hogy saját ritmusukban és valóságukban jelenjenek meg,
                      megmutassák&nbsp;magukat.”
                    </Text>
                  </div>
                </div>

                <Image
                  src="/projects/ctrlaltcrip/ctrlaltcrip-05.jpg"
                  alt="CTRL+ALT+CRIP projekt fotó"
                  width={1200}
                  height={1084}
                  priority
                  className="h-auto w-full hidden sm:block"
                />
              </div>

              <Image
                src="/projects/ctrlaltcrip/ctrlaltcrip-05.jpg"
                alt="CTRL+ALT+CRIP projekt fotó"
                width={1200}
                height={1084}
                priority
                className="h-auto w-full block sm:hidden"
              />
            </div>

            <div className="flex w-full justify-center">
              <div className="w-10/11 md:w-2/3">
                {" "}
                <Image
                  src="/projects/ctrlaltcrip/ctrlaltcrip-06.jpg"
                  alt="CTRL+ALT+CRIP projekt fotó"
                  width={1074}
                  height={859}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <div className="sm:max-w-lg flex flex-col gap-3">
              <Text>
                „Ez különösen fontos volt egy olyan közös munkában, ahol a
                fogyatékosság nem téma és nem hiány, hanem tudás, tapasztalat és
                viszony. Mariann képei ezt nem magyarázzák, hanem hagyják
                láthatóvá&nbsp;válni.
              </Text>
              <Text>
                <span className="font-bold">
                  Szeretnénk ezt a közös munkát a jövőben is folytatni, mert
                  mind szakmailag, mind emberileg társak lettünk egy
                  közös&nbsp;ügyben.
                </span>
              </Text>
              <Text>Természetesen nagyon jó szívvel&nbsp;ajánljuk.”</Text>

              <Text>
                — Sosity Beáta, a CTRL+ALT+CRIP Magazin&nbsp;társalapítója
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
}
