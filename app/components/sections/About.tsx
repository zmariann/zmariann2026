import Image from "next/image";
import { Heading } from "../ui/typography/Heading";

export function About() {
  return (
    <section className="flex flex-col items-center">
      <div className="sm:text-center text-left">
        <Heading level={1} color="carrot">
          neked készül személyesen
        </Heading>
      </div>

      <div className="flex justify-center sm:w-1/3 w-3/4">
        <Image
          src="/imgs/landing/landing-04.jpg"
          alt="CTRL+ALT+CRIP projekt fotó"
          width={720}
          height={1080}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
