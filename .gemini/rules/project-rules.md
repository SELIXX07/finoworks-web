# Finoworks Redesign Project Rules (Shared AI Environment)

## Tech Stack & Architecture
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom White & Deep Blue theme variables
- **Animations**: Framer Motion, GSAP + ScrollTrigger, Lenis for inertia smooth scroll
- **Deployment Target**: Vercel

## Color Theme Tokens
- `--bg-primary`: `#FFFFFF` (Pure White)
- `--bg-secondary`: `#F8FAFC` (Ice Light Blue)
- `--text-navy`: `#0A192F` / `#0F172A` (Deep Imperial Navy)
- `--accent-blue`: `#0066FF` (Electric Sapphire Blue)
- `--accent-cyan`: `#00D2FF` (Glowing Cyan)
- `--border-subtle`: `rgba(15, 23, 42, 0.08)`

## Development Workflow for Multiple Developers
- Both developers push to feature branches and deploy preview links directly on Vercel.
- Keep components modular inside `/components` and route subpages cleanly inside `/app`.
