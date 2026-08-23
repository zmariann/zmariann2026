import { Hero } from "./components/sections/Hero";
import { Heading } from "./components/ui/typography/Heading";
import { Text } from "./components/ui/typography/Text";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div>
          <Heading level={1} color="carrot">
            Selected <br />
            collaborations
          </Heading>

          <div className="mt-6 flex flex-col gap-3">
            <Text weight="medium">
              <span>Ludwig Museum</span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline">
                Museum of Contemporary Art
              </span>
            </Text>

            <Text weight="medium">
              Museum of Fine Arts, Budapest
            </Text>

            <Text weight="medium">
              Ctrl+Alt+Crip Magazine
            </Text>
          </div>
        </div>
      </section>
    </main>
  );
}