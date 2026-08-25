import { Hero } from "./components/sections/Hero";
import { Collaborations } from "./components/sections/Collaborations";
import { Section } from "./components/layout/Section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section>
        <Collaborations />
      </Section>
    </main>
  );
}
