"use client";
import { LazyMotion, domAnimation } from "framer-motion";

/** Loads only the lightweight animation feature set, keeping the JS bundle small. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
