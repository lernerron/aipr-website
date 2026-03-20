@AGENTS.md

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.
Visual preview: `docs/design-system-preview.html`

## Project Overview
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 with `@tailwindcss/postcss` — tokens defined in `globals.css` `@theme` block
- **Fonts:** Playfair Display (headings) + DM Sans (body) via `next/font/google`
- **Icons:** lucide-react
- **Deployed to:** Vercel (https://aipr-website-five.vercel.app)
- **Repo:** https://github.com/lernerron/aipr-website

## Code Conventions

### Components
- All components live in `src/components/`
- Shared UI primitives (Button, Section, Container) in `src/components/ui/`
- One component per file, default export
- Use Next.js `<Image>` for all images — never raw `<img>` tags

### Styling Rules
- Use Tailwind utility classes — no inline `style={{}}` attributes
- Reference design tokens via Tailwind: `text-primary`, `bg-bg-alt`, `font-heading`
- Section spacing: `py-16 md:py-20 lg:py-24` (consistent everywhere)
- Container: `max-w-7xl mx-auto px-5`
- Card gaps: `gap-6 md:gap-8`

### CTA Buttons (HARD RULE)
- Primary CTA: `<Button variant="primary">` — blue background, white text
- Secondary: `<Button variant="secondary">` — blue outline, fills on hover
- Ghost: `<Button variant="ghost">` — text only
- NEVER use accent/terracotta (#c4724a) for buttons — decorative accent only

### Testing & QA Workflow
1. `npm run build` must pass before any deploy
2. Use `/design-review` for visual QA
3. Use `/qa` for systematic testing
4. Use `/review` before merging

## Commands
- `npm run dev` — local dev server (localhost:3000)
- `npm run build` — production build
- `vercel --yes --prod` — deploy to production
- `git push origin main` — push to GitHub
