# Daniyal — Portfolio (DreamService)

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion (LazyMotion) · Lucide

A single-page portfolio with section navigation. No environment variables are required.

Use Node.js 22.x (also declared in `package.json` for Vercel).

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run typecheck
npm run build   # production check
npm start       # serve the production build
```

## Structure
```
app/         layout.tsx (fonts, metadata), page.tsx, globals.css, icon.svg
components/  navbar, hero, hero-visual, about, expertise, projects, project-card,
             approach, dreamservice-cta, footer, reveal, visuals, motion-provider, ui/badge
lib/         config.ts (nav, GitHub URL), projects.ts (project data), utils.ts,
             use-reduced-motion.ts (hydration-safe media preference)
```

## Vercel

Select the Next.js framework preset and Node.js 22.x. Use `npm ci` to install
dependencies and `npm run build` to build; let Vercel detect the output directory.
No custom server, filesystem persistence, or secrets are needed.

The canonical and Open Graph URLs default to
`https://daniyalbadrloo.dreamservice.net`. Optionally set `NEXT_PUBLIC_SITE_URL`
to another absolute HTTPS origin when deploying to a different domain.
Add the custom domain in the Vercel project settings and configure the DNS records
shown there. Domain and DNS setup are separate from the application build.

Inter, Sora, and JetBrains Mono use `next/font/google`: the build needs access to
Google Fonts, and the generated font files are served locally in production.
Illustrations and Lucide icons render as inline SVGs.

The PostCSS override keeps Next.js's transitive PostCSS dependency on the patched
version used by this project. Keep it until Next.js depends on a patched version.
The scoped minimatch override fixes the TypeScript ESLint parser's transitive glob
dependency; remove it when the parser itself requires minimatch 11.0.1 or later.
