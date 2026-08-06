import { ArrowDown } from "lucide-react";
import { ButtonLink } from "./components/ui/typography/button-link";
import { Display } from "./components/ui/typography/display";
import { Heading } from "./components/ui/typography/heading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <section className="flex flex-col min-h-screen lg:min-h-0 lg:flex-1 items-center justify-center text-carrot py-5">
        <div className="flex flex-col gap-4">
          <div className="pb-1">
            {" "}
            <Display>Mariann Zászlós</Display>
            <Heading level={2}>Photographer & Videographer</Heading>
          </div>

          <ButtonLink href="#contact" variant="carrot">
            Say Hello
          </ButtonLink>
          <ButtonLink href="#projects">Explore my work</ButtonLink>

          <div className="flex justify-between pt-1">
            <Display>Portfolio </Display>
            <Display>{new Date().getFullYear()}</Display>
          </div>
        </div>

        <div className="lg:hidden py-10">
          <ArrowDown className="h-8 w-8 text-carrot animate-bounce" strokeWidth={1.5} />
        </div>
      </section>

      <section className="min-h-screen lg:flex-1 bg-mist-400"></section>
    </main>
  );
}
