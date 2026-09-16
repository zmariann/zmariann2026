import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";
import { DotList } from "../ui/DotList";

export function Intro() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 sm:text-center">
      <Heading level={1} color="carrot">
        Ha éppen a vállalkozásodhoz keresel fotóst vagy&nbsp;videóst...
      </Heading>

      <div className="sm:w-3xl">
        <Text>
          ... akkor jó helyen jársz. A célom az, hogy olyan képeket és videókat hozzak
          létre, amikhez az érdeklődőid és a vásárlóid szívesen térnek
          vissza,&nbsp;mert
        </Text>
        <div className="flex flex-col gap-2 my-3">
          <Text className="text-center">releváns számukra</Text>
          <Text className="text-center">és</Text>
          <Text className="text-center">vizuálisan is megnyerő.</Text>
        </div>
      </div>

      <div className="flex h-screen items-center justify-center">
        Intro video
      </div>

    </section>
  );
}
