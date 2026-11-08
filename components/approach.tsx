import { Reveal, SectionHeading } from "@/components/reveal";

const steps = [
  { n: "01", t: "Understand", d: "Identify the problem, clarify requirements, and define what success should look like." },
  { n: "02", t: "Explore", d: "Research possible approaches, evaluate constraints, and choose a practical direction." },
  { n: "03", t: "Build", d: "Develop a testable solution, validate its behavior, and iterate on the implementation." },
  { n: "04", t: "Improve", d: "Use feedback and evaluation to refine the solution and identify the next steps." },
];

export function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-page px-5 py-24 sm:px-8">
      <SectionHeading label="04 / APPROACH" title="From problem to practical solution." />
      <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
        <span aria-hidden className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-accent/60 to-transparent md:left-5 md:right-5 md:top-5 md:h-px md:w-auto md:bg-gradient-to-r" />
        {steps.map((s, i) => (
          <li key={s.n} className="relative pl-16 md:pl-0 md:pt-16">
            <Reveal delay={i * 0.1}>
              <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-accent/60 bg-base font-mono text-xs text-glow">{s.n}</span>
              <h3 className="font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 leading-relaxed text-mute">{s.d}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
