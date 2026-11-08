import { Reveal } from "@/components/reveal";

export function DreamServiceSection() {
  return (
    <section id="dreamservice" className="mx-auto max-w-page px-5 py-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-card via-deep to-card p-8 sm:p-14">
          <div aria-hidden className="hero-glow absolute -right-40 -top-40 size-[480px]" />
          <div className="relative max-w-2xl">
            <p className="mb-4 font-mono text-xs tracking-widest text-glow">05 / DREAMSERVICE</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Let’s turn your idea into something <span className="text-gradient">useful.</span></h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/90">At DreamService, the goal is simple: help businesses solve practical problems through thoughtfully designed digital solutions.</p>
            <p className="mt-4 leading-relaxed text-mute">Whether you&apos;re exploring an AI-powered feature, looking to automate a repetitive workflow, or planning a new digital product, the first step is understanding the problem.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
