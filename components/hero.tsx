"use client";
import { m } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { HeroVisual } from "@/components/hero-visual";

export function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: 0.08 * i, ease: "easeOut" },
  } as const);

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="hero-glow absolute -top-48 left-1/2 h-[640px] w-[900px] max-w-[160%] -translate-x-1/2" />
      <div className="relative mx-auto grid max-w-page items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <m.p {...item(0)} className="mb-6 font-mono text-xs tracking-widest text-glow">DREAMSERVICE / TEAM</m.p>
          <m.h1 {...item(1)} className="font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl">
            Ideas are everywhere. <span className="text-gradient">Building is what matters.</span>
          </m.h1>
          <m.p {...item(2)} className="mt-8 font-display text-2xl font-medium sm:text-3xl">I&apos;m <span className="text-gradient">Daniyal.</span></m.p>
          <m.p {...item(3)} className="mt-4 max-w-xl text-lg leading-relaxed text-ink/90">
            Engineer, AI developer, and entrepreneur focused on machine learning, intelligent systems, and building practical digital products.
          </m.p>
          <m.p {...item(4)} className="mt-4 max-w-xl leading-relaxed text-mute">
            I explore complex problems, experiment with emerging technologies, and turn ideas into systems that can be tested, improved, and put to use.
          </m.p>
          <m.p {...item(5)} className="mt-10 font-mono text-xs tracking-wider text-mute">
            AI &amp; MACHINE LEARNING · DATA SCIENCE · LLMs · AUTOMATION
          </m.p>
        </div>
        <m.div {...item(3)} className="px-6 sm:px-0"><HeroVisual /></m.div>
      </div>
    </section>
  );
}
