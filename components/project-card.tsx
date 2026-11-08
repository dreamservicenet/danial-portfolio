import { Badge } from "@/components/ui/badge";
import { ChurnVisual, LlmVisual, WorkflowVisual } from "@/components/visuals";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const visuals = { llm: LlmVisual, churn: ChurnVisual, automation: WorkflowVisual };

export function ProjectCard({ project }: { project: Project }) {
  const Visual = visuals[project.id];
  return (
    <article className={cn("panel lift flex flex-col p-6 sm:p-7", project.featured && "lg:col-span-2 lg:row-span-2 lg:p-9")}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-glow">{project.number}</span>
        <Badge className="border-accent/40 bg-accent/10 font-mono uppercase tracking-wider text-glow">
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />{project.status}
        </Badge>
      </div>
      <p className="mt-5 font-mono text-xs uppercase tracking-wider text-mute">{project.category}</p>
      <h3 className={cn("mt-2 font-display font-semibold tracking-tight", project.featured ? "text-3xl sm:text-4xl" : "text-xl")}>{project.name}</h3>
      <p className="mt-3 leading-relaxed text-mute">{project.description}</p>

      <div className="my-6 rounded-xl border border-line bg-base/60 p-4"><Visual /></div>

      {project.objective && (
        <p className="mb-5 text-sm leading-relaxed"><span className="text-ink">Objective: </span><span className="text-mute">{project.objective}</span></p>
      )}
      <p className="mb-2 text-sm text-ink">{project.featured ? "Areas of exploration" : "Focus areas"}</p>
      <ul className={cn("grid gap-x-6 gap-y-1 text-sm text-mute", project.featured && "sm:grid-cols-2 lg:grid-cols-3")}>
        {project.areas.map((a) => <li key={a} className="flex gap-2"><span aria-hidden className="text-accent">–</span>{a}</li>)}
      </ul>
      <ul className="mt-6 flex flex-wrap gap-2">{project.tags.map((t) => <li key={t}><Badge>{t}</Badge></li>)}</ul>
    </article>
  );
}
