# Design System — Aging-In-Place Remodeling

## Product Context
- **What this is:** Marketing website for a home remodeling company specializing in safety and accessibility modifications
- **Who it's for:** Seniors and their adult children researching home modifications to age safely in place
- **Space/industry:** Home remodeling, aging-in-place, accessibility — peers include Live in Place Designs, Age Safe America, Aging in Place by Design
- **Project type:** Marketing / services site
- **Visual preview:** See `docs/design-system-preview.html` for rendered specimens

## Aesthetic Direction
- **Direction:** Luxury/Refined — clean, confident, with serif headings that convey authority and warmth. Not clinical, not generic. Feels like a high-end home renovation firm, not a medical supplier.
- **Decoration level:** Intentional — subtle texture through section alternation (white/light gray), card shadows, and border accents. No gradients on surfaces, no patterns, no noise.
- **Mood:** Warm, trustworthy, premium. Like walking into a well-designed showroom — calming but professional.
- **Reference sites:** liveinplacedesigns.com, agesafeamerica.com, aginginplacebydesign.com (researched 2026-03-20)

## Typography
- **Display/Hero:** Playfair Display — warm authority, serif differentiator in a sans-serif-dominated category
- **Body:** DM Sans — high x-height, excellent readability at 18px+ for aging eyes
- **UI/Labels:** DM Sans (same as body)
- **Data/Tables:** DM Mono — clear monospace for license numbers, phone numbers
- **Code:** DM Mono
- **Loading:** Google Fonts via `next/font/google` in `layout.tsx` (self-hosted by Next.js)
- **Scale:**
  - Display/H1: 48px (clamp: 2rem–3rem) / weight 800 / line-height 1.2
  - H2: 36px (clamp: 1.75rem–2.25rem) / weight 700 / line-height 1.25
  - H3: 24px / weight 600 / line-height 1.3
  - Body: 18px / weight 400 / line-height 1.7
  - Small/Caption: 14px / weight 400 / line-height 1.5
  - Mono: 15px / weight 400

## Color
- **Approach:** Restrained — primary teal does the heavy lifting, warm accent is decorative only
- **Primary:** `#154c68` — deep teal, trust and safety. Used for headings, nav, CTA buttons, section accents
- **Primary Hover:** `#0c2e40` — darker state for interactive elements
- **Primary Light:** `#1a6f9a` — links, focus rings, info states
- **Accent (Warm):** `#c4724a` — terracotta. Testimonial borders, decorative highlights. **Max 10-15% of any composition. NEVER use for CTA buttons.**
- **Background:** `#fdfdfd` — near-white, reduces eye strain
- **Background Alt:** `#f1f5f9` — alternating section backgrounds
- **Background Warm:** `#f8fafc` — testimonial/card backgrounds
- **Text Main:** `#1f2937` — body copy (never use pure black #000)
- **Text Light:** `#4b5563` — captions, secondary text (never use for body)
- **White:** `#ffffff` — card surfaces, reversed text
- **Border:** `#e5e7eb` — dividers, card borders
- **Link:** `#005bb5` — inline text links
- **Semantic:** success `#16a34a`, warning `#d97706`, error `#dc2626`, info `#1a6f9a`
- **Dark mode:** Defined but not active. Strategy: lighten primaries, darken surfaces, reduce saturation 10-20%

### CTA Button Rules (HARD RULE)
- **Primary CTA:** `bg-primary text-white` — blue button, white text. ALL call-to-action buttons.
- **Secondary/Outline:** `border-primary text-primary` → on hover: `bg-primary text-white`
- **Ghost:** `text-primary` with no border → on hover: `bg-bg-alt`
- **NEVER** use accent/terracotta for CTA buttons

### Contrast Ratios (WCAG)
| Combination | Ratio | Level |
|---|---|---|
| White on Primary (#154c68) | 8.4:1 | AAA |
| White on Primary Hover (#0c2e40) | 13.2:1 | AAA |
| Text Main on Background | 14.7:1 | AAA |
| Text Main on Background Alt | 13.4:1 | AAA |
| Primary on Background | 8.4:1 | AAA |
| White on Accent (#c4724a) | 3.2:1 | AA Large only |

## Spacing
- **Base unit:** 8px
- **Density:** Spacious — seniors need visual breathing room
- **Scale:** 2xs(2px) xs(4px) sm(8px) md(16px) lg(24px) xl(32px) 2xl(48px) 3xl(64px) 4xl(80px) 5xl(96px)
- **Section padding:** `py-16 md:py-20 lg:py-24` (64px → 80px → 96px)
- **Container:** `max-w-7xl mx-auto px-5` (1280px max, 20px side padding)
- **Card gaps:** `gap-6 md:gap-8` (24px → 32px)

## Layout
- **Approach:** Grid-disciplined — consistent containers, predictable alignment, visual calm
- **Grid:** CSS Grid with auto-fit columns: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- **Max content width:** 1280px (max-w-7xl)
- **Narrow content:** 896px (max-w-4xl) for text-heavy sections (about, video)
- **Border radius:** sm(4px) md(8px) lg(12px) full(9999px)

## Motion
- **Approach:** Minimal-functional — only transitions that aid comprehension
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms)
- **Allowed:** hover lift on cards (-2px), color transitions on buttons/links, menu open/close
- **Forbidden:** scroll-triggered animations, parallax, bouncing elements, auto-playing carousels. Seniors with vestibular sensitivity need stability.

## Component Conventions

### Shared UI Components (`src/components/ui/`)
- `Button.tsx` — variant (primary/secondary/ghost), size (sm/md/lg)
- `Section.tsx` — consistent section wrapper with background prop
- `Container.tsx` — max-width wrapper

### Image Handling
- Always use Next.js `<Image>` component, never `<img>`
- Provide explicit `width`/`height` or use `fill` with `sizes` prop
- Use `priority` on above-the-fold images only
- All images must have descriptive `alt` text

### Adding a New Page
1. Read this DESIGN.md first
2. Create page in `src/app/[route]/page.tsx`
3. Use `<Section>` and `<Container>` for layout
4. Use `<Button>` for all CTAs (primary variant, blue/white)
5. Follow the spacing scale — `py-16 md:py-20 lg:py-24` between sections
6. Use `font-heading` for headings, body font inherits from layout
7. Alternate section backgrounds: white → bg-alt → white

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-20 | Initial design system | Created by /design-consultation based on competitive research of aging-in-place websites |
| 2026-03-20 | Playfair Display for headings | Serif differentiator — every competitor uses sans-serif |
| 2026-03-20 | No hero background image | Solid gradient loads faster, ages better than stock photos |
| 2026-03-20 | All CTAs must be blue/white | User requirement — warm accent reserved for decorative use only |
| 2026-03-20 | Minimal-functional motion | Vestibular sensitivity in senior audience — no scroll animations or parallax |
