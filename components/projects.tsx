import { Reveal, SectionHeading } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-page px-5 py-24 sm:px-8">
      <SectionHeading label="03 / SELECTED WORK" title="Things I’m building and exploring.">
        A selection of technical experiments, learning projects, and product ideas currently in development.
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.06} className={p.featured ? "md:col-span-2 lg:row-span-2" : undefined}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
