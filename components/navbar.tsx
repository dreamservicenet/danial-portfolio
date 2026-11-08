"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled((prev) => (prev !== window.scrollY > 12 ? !prev : prev));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_LINKS.forEach((l) => { const el = document.getElementById(l.href.slice(1)); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-colors", scrolled || open ? "border-line bg-base/85 backdrop-blur-md" : "border-transparent")}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">DANIYAL<span className="text-accent">.</span></a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => {
            const on = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a href={l.href} aria-current={on ? "true" : undefined} className={cn("relative py-1 text-sm transition-colors hover:text-ink", on ? "text-ink" : "text-mute")}>
                  {l.label}
                  {on && <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" />}
                </a>
              </li>
            );
          })}
        </ul>

        <button className="inline-flex size-11 items-center justify-center rounded-md md:hidden" aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-line px-5 pb-5 pt-3 md:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block rounded-md py-3 text-lg text-mute hover:text-ink">{l.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
