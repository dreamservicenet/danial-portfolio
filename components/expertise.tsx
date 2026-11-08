import { BrainCircuit, Boxes, Workflow, type LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

const items: { icon: LucideIcon; title: string; text: string; tags: string[] }[] = [
  { icon: BrainCircuit, title: "Machine Learning & Data Science", text: "Developing and evaluating machine learning approaches for classification, prediction, and data-driven problem-solving.", tags: ["Python", "pandas", "NumPy", "scikit-learn", "XGBoost", "LightGBM"] },
  { icon: Boxes, title: "Large Language Models", text: "Exploring the architecture and underlying mechanisms of large language models, from tokenization and embeddings to attention and transformer-based architectures.", tags: ["Python", "Tokenization", "Embeddings", "Transformers", "Self-Attention"] },
  { icon: Workflow, title: "Workflow Automation", text: "Designing workflows that connect digital tools, process information, and reduce repetitive business tasks.", tags: ["n8n", "APIs", "RSS", "Data processing", "LLM integrations"] },
];

export function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-page px-5 py-24 sm:px-8">
      <SectionHeading label="02 / EXPERTISE" title="Areas I work across." />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text, tags }, i) => (
          <li key={title}>
            <Reveal delay={i * 0.08} className="h-full">
              <article className="panel lift h-full p-7">
                <Icon aria-hidden className="mb-5 size-7 text-glow" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-mute">{text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">{tags.map((t) => <li key={t}><Badge>{t}</Badge></li>)}</ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
