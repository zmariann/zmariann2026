import { Hero } from "./components/sections/Hero";
import { Collaborations } from "./components/sections/Collaborations";
import { Section } from "./components/layout/Section";
import { FeaturedProjects } from "./components/sections/FeaturedProjects";
import { Container } from "./components/layout/Container";

export default function Home() {
  return (
    <main>
      <Hero />

      <Collaborations />

      <Section>
        <Container>
          <FeaturedProjects />
        </Container>
      </Section>
    </main>
  );
}
