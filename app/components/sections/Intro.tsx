import { Heading } from "../ui/typography/Heading";
import { Text } from "../ui/typography/Text";

export function Intro() {
    return (
        <section className="flex flex-col items-center justify-center gap-5">
            <Heading level={1} color="carrot">However you found your way here, you are probably looking for a creative&nbsp;partner.</Heading>
            <Text>Someone with experience working on real-world&nbsp;projects,
</Text>
            <Text>with an understanding of the process from start&nbsp;to&nbsp;finish.</Text>
            <Text>

                If you need:

                * short- or long-form video
                * product photography
                * documentary-style photography or studio lighting

                …you are in the right place.

                Here you will find a selection of my work.
            </Text></section>

    )
}