import Link from "next/link";
import { Text } from "../ui/typography/Text";
import { Heading } from "../ui/typography/Heading";
import { Display } from "../ui/typography/Display";

export function Footer() {
  return (
    <footer className="border-carrot min-h-screen border-y-2 flex flex-col justify-between md:mx-20 py-20 mb-20">
      <div className="flex items-stretch justify-between">
        <Projects />
        <Contact />
      </div>
      <div className="items-stretch justify-between flex">
        {" "}
        <Links />
        <PortfolioInfo />
      </div>
    </footer>
  );
}

export function Contact() {
  return (
    <div>
      <Heading level={1} color="carrot" className="text-right">
        Kontakt
      </Heading>
      <Text className="text-right">contact@zmariann.com</Text>
      <Text className="text-right">+3630</Text>
    </div>
  );
}

export function Projects() {
  return (
    <div>
      <Heading level={1} color="carrot">
        Projektek
      </Heading>
      <nav>
        <Text>
          <Link href="/projects/ctrlaltcrip">Ctrl+Alt+Crip</Link>
        </Text>
      </nav>
    </div>
  );
}

export function Links() {
  return (
    <div className="flex flex-col gap-3 text-left">
      <Heading level={1} color="carrot">
        Linkek
      </Heading>
      <Text>
        {" "}
        <a href="https://linkedin.com/in/zmariann">LinkedIn</a>{" "}
      </Text>

      <Text>
        {" "}
        <a href="https://instagram.com/zamarka.studio">Instagram</a>
      </Text>

      <Text>
        {" "}
        <a href="https://www.behance.net/gallery/227752169/Product-Photography-Portfolio">
          Behance
        </a>
      </Text>
    </div>
  );
}

export function PortfolioInfo() {
  return (
    <div className="flex flex-col text-carrot justify-end">
      <div className="flex flex-col gap-4">
        <Display>Zászlós Mariann</Display>

        <div className="flex justify-between pt-1">
          <Display>©</Display>
          <Display>Portfólió</Display>
          <Display>{new Date().getFullYear()}</Display>
        </div>
      </div>
    </div>
  );
}
