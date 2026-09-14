import { Hero } from "./components/sections/Hero";
import { Collaborations } from "./components/sections/Collaborations";
import { Section } from "./components/layout/Section";
import { FeaturedProjects } from "./components/sections/FeaturedProjects";
import { Container } from "./components/layout/Container";
import { Testimonials } from "./components/sections/Testimonials";
import { Intro } from "./components/sections/Intro";
import { About } from "./components/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />

      <Collaborations />

      <Section>
        <Container>
          <Intro />
        </Container>
      </Section>

      <Section>
        <Container>
          <FeaturedProjects />
        </Container>
      </Section>

      <Section>
        <Container>
          <Testimonials />
        </Container>
      </Section>

      <Section>
        <Container>
          <About />
        </Container>
      </Section>
    </main>
  );
}
