import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { ProjectHeader } from "@/app/components/ui/ProjectHeader";

export default function Moca() {
  return (
    <section>
      <Section>
        <Container>
          <div className="flex min-h-screen flex-col gap-10 sm:flex-row sm:items-start">
            {/* Szöveg */}
            <div className="w-full sm:w-1/2">
              <ProjectHeader
                title="Vihar előtt. Tajvan múlt és jövő&nbsp;határán"
                client="Ludwig Múzeum"
                category="Rövid formátumú videók"
                website="https://www.ludwigmuseum.hu/kiallitas/vihar-elott-tajvan-mult-es-jovo-hataran"
              />
            </div>

            {/* Videó */}
            <div className="w-full sm:w-2/3 flex justify-end">
              <video
                className="w-full h-auto sm:w-auto sm:max-h-[80vh] sm:max-w-full object-contain"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
              >
                <source src="/videos/01-lee-mingwei.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
}
