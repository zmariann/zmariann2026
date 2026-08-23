import { Hero } from "./components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="projects"
        className="min-h-screen bg-red-200"
      ></section>
    </main>
  );
}