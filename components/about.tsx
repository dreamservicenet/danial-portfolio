import { Reveal, SectionHeading } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-page px-5 py-24 sm:px-8">
      <SectionHeading label="01 / ABOUT" title="Curious by nature. Driven to build." />
      <Reveal className="max-w-2xl space-y-5 text-base leading-relaxed text-mute sm:text-lg lg:ml-auto">
        <p>I&apos;m Daniyal, an engineering student, AI developer, and entrepreneur interested in understanding how intelligent systems work and how technology can solve meaningful problems.</p>
        <p>My interests span machine learning, data science, backend development, large language models, and digital product development. I enjoy learning by building, investigating how systems work beneath the surface, and translating technical concepts into practical applications.</p>
        <p className="text-ink">Through DreamService, I aim to help businesses turn their ideas and operational challenges into useful digital solutions.</p>
      </Reveal>
    </section>
  );
}
