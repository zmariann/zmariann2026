import { ArrowDown } from "lucide-react";
import { ButtonLink } from "../ui/typography/ButtonLink";
import { Display } from "../ui/typography/Display";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex min-h-screen flex-col items-center justify-center py-5 px-3 text-carrot lg:min-h-0 lg:flex-1">
        <div className="flex flex-col gap-4">
          <Display>Zászlós Mariann</Display>

          <ButtonLink href="#contact" variant="carrot">
            Kontakt
          </ButtonLink>
          <ButtonLink href="#projects">Fotó és videó projektek</ButtonLink>

          <div className="flex justify-between pt-1">
            <Display>Portfólió</Display>
            <Display>{new Date().getFullYear()}</Display>
          </div>
        </div>

        <div className="py-10">
          <ArrowDown
            className="h-8 w-8 animate-bounce text-carrot"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <HeroVideo />
    </section>
  );
}
