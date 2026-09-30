import { TextList } from "../ui/TextList";
import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { BriefcaseBusiness, UsersRound, HeartHandshake } from "lucide-react";
import { IconTextList } from "@/app/components/ui/IconTextList";

export function Intro() {
  return (
    <section className="flex flex-col sm:items-center justify-center">
      <Heading level={1} color="carrot" className="text-center">
        Úgy tűnik éppen fotóst vagy videóst&nbsp;keresel,
      </Heading>

      <Text className="text-center">
        és az egyik munkám érdekes lehet&nbsp;számodra.
      </Text>
      <Text className="text-center pb-6">Ezek miatt lehetsz&nbsp;itt:</Text>

      <IconTextList
        items={[
          {
            icon: (
              <BriefcaseBusiness
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={1.5}
              />
            ),
            text: "Vállalkozó vagy és a branded számára van szükséged vizuális tartalomra.",
          },
          {
            icon: (
              <UsersRound
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={1.5}
              />
            ),
            text: "A csapatodba keresel olyan tapasztalt szakembert, aki érti a kivitelezés teljes folyamatát.",
          },
          {
            icon: (
              <HeartHandshake
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={1.5}
              />
            ),
            text: "Társadalmi ügy támogatásához keresel partnert, aki vizuális tartalommal segíti a projekted megvalósítását.",
          },
        ]}
      />
      <TextList className="mt-6 sm:text-center">
        <Text>
          Bárki is vagy a kulturális területen szerzett tapasztalatom,
          látásmódom valószínűleg jól jön&nbsp;számodra.
        </Text>
        <Text>
          Lássuk, mit is jelent az előbbi mondat a&nbsp;gyakorlatban...
        </Text>
      </TextList>
    </section>
  );
}
