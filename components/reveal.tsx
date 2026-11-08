"use client";
import { m } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}

export function SectionHeading({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-4 font-mono text-xs tracking-widest text-glow">{label}</p>
      <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">{children}</p>}
    </Reveal>
  );
}
