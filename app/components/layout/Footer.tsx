import { Text } from "../ui/typography/Text";
import { Heading } from "../ui/typography/Heading";
import { Display } from "../ui/typography/Display";
import { ExternalLink } from "../ui/navigation/ExternalLink";
import { InternalLink } from "../ui/navigation/InternalLink";
import BackButton from "../ui/navigation/BackButton";
import { CopyEmail } from "../ui/CopyEmail";

export function Footer() {
  return (
    <>
      <nav className="md:mx-12 mx-5 pb-2 flex justify-between">
        <InternalLink href="/">Főoldal</InternalLink>
        <BackButton />
      </nav>

      {/* Desktop view */}
      <footer className="border-carrot border-y-2 md:flex md:gap-20 flex-col justify-between md:mx-12 py-10 mb-20 hidden">
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

      {/* Mobile view */}
      <footer className="md:hidden flex flex-col mb-20 ">
        <div className="flex flex-col gap-15 mx-5 py-15 border-carrot border-y-2">
          {" "}
          <Contact />
          <Projects />
          <Links />
          <div className="flex justify-center">
            {" "}
            <PortfolioInfo />
          </div>
        </div>
      </footer>
    </>
  );
}

export function Contact() {
  return (
    <div className="md:text-right">
      <Heading level={1} color="carrot">
        Kontakt
      </Heading>
      <CopyEmail />
      <Text>+3630</Text>
    </div>
  );
}

export function Projects() {
  return (
    <div>
      <Heading level={1} color="carrot" className="mb-0">
        Projektek
      </Heading>
      <nav className="flex flex-col gap-3">
        <InternalLink href="/projects/ctrlaltcrip">CTRL+ALT+CRIP</InternalLink>
        <InternalLink href="/projects/ctrlaltcrip">MOCA Taipei</InternalLink>
        <InternalLink href="/projects/ctrlaltcrip">
          Portfólió | Tárgyfotók
        </InternalLink>
        <InternalLink href="/projects/ctrlaltcrip">
          Portfólió | Rendezvényfotók
        </InternalLink>
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
      <ExternalLink href="https://linkedin.com/in/zmariann">
        LinkedIn
      </ExternalLink>
      <ExternalLink href="https://instagram.com/zamarka.studio">
        Instagram
      </ExternalLink>
      <ExternalLink href="https://www.behance.net/gallery/227752169/Product-Photography-Portfolio">
        Behance
      </ExternalLink>
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
