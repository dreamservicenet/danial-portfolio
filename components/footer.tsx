import { Github } from "lucide-react";
import { GITHUB_URL } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-page gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">DANIYAL<span className="text-accent">.</span> / DREAMSERVICE</p>
          <p className="mt-2 max-w-sm text-sm text-mute">Building practical digital solutions through technology and thoughtful engineering.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-6 text-sm text-mute">
            <li><a href="#about" className="py-2 transition hover:text-ink">About</a></li>
            <li><a href="#projects" className="py-2 transition hover:text-ink">Projects</a></li>
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-2 text-ink transition hover:text-glow">
                <Github aria-hidden className="size-4" />github.com/daniyalbadrlou
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-mute">© {new Date().getFullYear()} DreamService. All rights reserved.</p>
    </footer>
  );
}
