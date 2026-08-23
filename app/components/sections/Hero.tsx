import { ArrowDown } from "lucide-react";
import { ButtonLink } from "../ui/typography/ButtonLink";
import { Display } from "../ui/typography/Display";
import { Heading } from "../ui/typography/Heading";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
    return (
        <section className="flex min-h-screen flex-col lg:flex-row">
            <section className="flex min-h-screen flex-col items-center justify-center py-5 text-carrot lg:min-h-0 lg:flex-1">
                <div className="flex flex-col gap-4">
                    <div className="pb-1">
                        <Display>Mariann Zászlós</Display>
                        <Heading level={2}>Photographer & Videographer</Heading>
                    </div>

                    <ButtonLink href="#contact" variant="carrot">
                        Say Hello
                    </ButtonLink>

                    <ButtonLink href="#projects">
                        Explore my work
                    </ButtonLink>

                    <div className="flex justify-between pt-1">
                        <Display>Portfolio</Display>
                        <Display>{new Date().getFullYear()}</Display>
                    </div>
                </div>

                <div className="py-10">
                    <ArrowDown
                        className="h-8 w-8 animate-bounce text-carrot"
                        strokeWidth={1.5}
                    />
                </div>
            </section>

            <HeroVideo />
        </section>
    );
}