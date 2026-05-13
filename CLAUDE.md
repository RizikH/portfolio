# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack (preferred)
pnpm dev:legacy   # Start dev server without Turbopack
pnpm build        # Production build
pnpm lint         # ESLint
pnpm test         # Run all tests (Node.js built-in test runner, no Jest)
```

To run a single test file:
```bash
node --experimental-strip-types --test src/lib/utils.test.ts
```

## Working Rules

- Never change large portions of the codebase unless explicitly instructed. Scope changes to the single function or subcode block requested, plus only the dependent code that directly breaks without it.
- Always present a plan and get approval before writing any code.
- Never add code that isn't in the agreed plan.
- Never be creative with the implementation — do exactly what was asked, nothing more.

## Architecture

Single-page Next.js 16 portfolio. All sections (Hero, About, Projects, Contact) live on one route (`src/app/page.tsx`) and use `react-scroll` for anchor navigation. There are no API routes or backend.

**Data layer** — `src/db/data.ts` is the single source of truth for all content: hero text, skills, project entries (`projectsData`), and about section copy. To add or edit a project, edit `ProjectData` entries in that file.

**Styling** — dual system: SCSS modules per-component (`src/styles/components/*.module.scss`) plus Tailwind utility classes. Global CSS variables (colors, spacing, typography, z-index scale) are defined in `src/styles/globals.scss` under `:root` and `.dark`. Always use those variables (`var(--bg)`, `var(--accent)`, etc.) rather than hardcoded values for theme compatibility. Tailwind is v3 with the `@tailwindcss/postcss` adapter.

**Theming** — `next-themes` with `attribute="class"`. Dark mode applies the `.dark` class on `<html>`. The `Particles` component reads the current theme to switch particle color.

**Animations** — GSAP (`gsap` + `@gsap/react`) is used for all entry animations and interactive effects. The `useGSAP` hook scoped to a ref is the standard pattern. `motion` (Framer Motion v12) is also installed. Lottie is used for the scroll hint animation only.

**Modal system** — `ProjectModal` (`src/components/ProjectModal/ProjectModal.tsx`) uses `@headlessui/react` `Dialog` + `Transition`. It receives a `ProjectData | null` prop and is controlled by state in the parent `Project` card component.

**Layout shell** — `src/app/layout.tsx` wraps everything in `ViewTransitions` → `ThemeProvider` → `Particles` (background) → `main` → `Navbar` / `{children}` / `Footer`. The `Particles` component must stay outside `main` so it covers the full viewport behind content.

**Utilities** — `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge) for conditional class merging. `src/components/magicui/` contains copied third-party UI primitives (particles, safari frame, shiny button) — treat these as vendored, not generated.

**Testing** — uses Node.js built-in `node:test` + `node:assert`. No test framework configuration files exist; tests import directly from source with `--experimental-strip-types`.
