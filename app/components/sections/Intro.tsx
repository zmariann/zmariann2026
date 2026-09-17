import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";

export function Intro() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 sm:text-center">
      <Heading level={1} color="carrot">
        Ha éppen a vállalkozásodhoz keresel fotóst vagy&nbsp;videóst,
      </Heading>

      <div className="sm:max-w-3xl">
        <Text>
          akkor jó helyen jársz. A célom az, hogy olyan képeket és videókat
          készítsek, amik az érdeklődőid és vásárlóid számára releváns
          témájúak és vizuálisan is rendben&nbsp;vannak.
        </Text>
      </div>

    </section>
  );
}
