import Link from "next/link";
import { ButtonLink } from "../ui/typography/button-link";
import { Text } from "../ui/typography/text";
import LanguageToggle from "../ui/typography/language-toggle";
import { Heading } from "../ui/typography/heading";

export function Footer() {
  return (
    <footer className="bg-graphite text-platinum">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20">
        <div>
          {" "}
          <Heading>Contact</Heading>
          <Text>Zászlós Mariann</Text>
          <ButtonLink href="/contact" variant="carrot">
            Say hello
          </ButtonLink>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Heading>Links</Heading>

          <nav
            aria-label="Social links"
            className=" text-lg leading-relaxed font-normal tracking-wider"
          >
            <ul className="flex items-center gap-2">
              <li>
                <Link href="https://zamarka.hu">Zamarka Studio</Link>
              </li>

              <li aria-hidden="true">|</li>

              <li>
                <Link href="https://linkedin.com">LinkedIn</Link>
              </li>

              <li aria-hidden="true">|</li>

              <li>
                <Link href="https://instagram.com">Instagram</Link>
              </li>

              <li aria-hidden="true">|</li>

              <li>
                <Link href="https://behance.net">Behance</Link>
              </li>
            </ul>
          </nav>
        </div>

        <LanguageToggle />

        <Link href="/privacy">
          <p className="text-sm leading-relaxed tracking-widest">
            Adatvédelmi irányelvek
          </p>
        </Link>

        <p className="text-sm leading-relaxed tracking-widest">
          © {new Date().getFullYear()} | Mariann Zászlós Portfolio |
          zmariann.com
        </p>
      </div>
    </footer>
  );
}
