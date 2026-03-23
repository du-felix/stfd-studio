# stfd studio — Brand Guide

---

## Brand Identity

**Name:** stfd studio
- Always lowercase — never "STFD" or "Stfd"
- "studio" is always lowercase and subordinate to "stfd"
- Full usage: "stfd studio" / Short usage: "stfd"

**Tagline:** Your web identity. Transformed in a week.

**USP:** AI-powered web design agency. 1-week delivery guaranteed.

**Tone of Voice**
- Confident, minimal, editorial
- No fluff. No buzzwords. No filler.
- Direct and declarative — short sentences, strong verbs
- Speaks to founders, operators, and builders who value their time

**Brand Personality**
- Premium — quality signals in every detail
- Efficient — respects the reader's attention
- Modern — aware of the current design landscape
- Trustworthy — makes promises and keeps them

---

## Typography

### Typefaces

| Role | Font | Source | Usage |
|---|---|---|---|
| Display / Headlines | Cormorant Garamond | Google Fonts (free) | Hero text, large headings, editorial pull quotes |
| Body | DM Sans | Google Fonts (free) | All body copy, UI labels, navigation |
| Mono | Geist Mono | Vercel / Google Fonts | Technical labels, code snippets, tags |

**Cormorant Garamond** — editorial serif with strong optical personality. Use at large sizes (36px+) where contrast is dramatic. Set tight — letter-spacing: -0.02em or tighter at display sizes.

**DM Sans** — geometric grotesque. Clean and highly readable at small sizes. The workhorse for all functional text.

**Geist Mono** — sparse, technical. Used sparingly for labels like "01 / Strategy", tags, or code.

### Type Scale

| Token | px | rem |
|---|---|---|
| xs | 12px | 0.75rem |
| sm | 14px | 0.875rem |
| base | 16px | 1rem |
| lg | 18px | 1.125rem |
| xl | 20px | 1.25rem |
| 2xl | 24px | 1.5rem |
| 3xl | 30px | 1.875rem |
| 4xl | 36px | 2.25rem |
| 5xl | 48px | 3rem |
| 6xl | 60px | 3.75rem |
| 7xl | 72px | 4.5rem |
| 8xl | 96px | 6rem |

### Typography Rules
- Headlines (h1–h3): Cormorant Garamond, tracking -0.02em to -0.04em, font-weight 400–600
- Body: DM Sans, line-height 1.7, font-weight 400
- Captions / labels: DM Sans, uppercase, tracking-widest (0.1em+), font-size sm
- No decorative fonts. No system fonts in visible UI.

---

## Color System

### Light Mode Palette

| Token | Hex | Usage |
|---|---|---|
| `--background` | `#FAFAF8` | Page background — warm white, not pure |
| `--foreground` | `#111111` | Primary text |
| `--primary` | `#111111` | Primary actions, CTAs |
| `--primary-foreground` | `#FAFAF8` | Text on primary backgrounds |
| `--secondary` | `#F4F4F0` | Secondary sections, subtle backgrounds |
| `--secondary-foreground` | `#111111` | Text on secondary backgrounds |
| `--muted` | `#F4F4F0` | Muted surface areas |
| `--muted-foreground` | `#737373` | Secondary text, captions, subtext |
| `--accent` | `#EBEBEB` | Hover states, subtle highlights |
| `--accent-foreground` | `#111111` | Text on accent backgrounds |
| `--card` | `#FFFFFF` | Card backgrounds |
| `--card-foreground` | `#111111` | Text on cards |
| `--border` | `#E5E5E0` | Borders, dividers |
| `--input` | `#E5E5E0` | Input field borders |
| `--ring` | `#111111` | Focus rings |
| `--destructive` | `#EF4444` | Error states, destructive actions |

### Dark Mode Palette
Inverted: dark background (#111111) with light foreground (#FAFAF8). Maintains the same minimal character — no neon, no gradient accents.

### Color Principles
- Monochromatic by default — no color accents in the base palette
- Warmth comes from the warm white background (#FAFAF8), not from tinted colors
- Contrast is high — foreground to background meets WCAG AA minimum
- Color is used for emphasis through value (light/dark), not hue

---

## Spacing & Sizing

### Border Radius
- Default: **4px / 0.25rem** — sharp, minimal
- This is a deliberate aesthetic choice. Avoid round-cornered cards or pill buttons.
- Buttons: 2px (nearly square)
- Inputs: 4px
- Cards: 4px
- Never exceed 8px on any surface element

### Section Spacing
| Breakpoint | Vertical padding |
|---|---|
| Mobile | 80px / 5rem |
| Desktop | 120px / 7.5rem |

### Layout
- Container max-width: **1200px**
- Horizontal gutters: 24px (mobile), 48px (desktop)
- Column grid: 12-column, 24px gap

---

## Logo

### Primary Mark
- Text-based wordmark: **"stfd"** set in Cormorant Garamond, lowercase, weight 400–500
- Optional period variant: **"stfd."** — adds editorial finality
- Studio lockup: "STUDIO" in DM Sans, uppercase, tracking-widest (letter-spacing: 0.2em), small size (10–12px), positioned below the wordmark with 4–6px spacing

### Logo Usage Rules
- Always lowercase "stfd" — the wordmark is never capitalized
- Minimum size: 80px wide
- Clear space: equal to the height of the "s" on all sides
- Preferred on: white (#FFFFFF) or warm white (#FAFAF8) backgrounds
- Reversed: white wordmark on #111111 background

### Fallback SVG
Simple typographic treatment: "stfd" in Cormorant Garamond path data, no icon, no mark — the letterforms are the logo.

---

## Component Style Guide

### Buttons
- Shape: sharp corners, border-radius 2px
- Text: uppercase, letter-spacing 0.08em, font-size 13–14px, DM Sans
- Primary: `background #111111, color #FAFAF8` — solid black fill
- Secondary / Outlined: `border 1px solid #111111, color #111111, background transparent`
- Ghost: no border, no background, underline on hover
- Padding: 12px 24px (default), 10px 20px (sm), 14px 32px (lg)
- No border-radius on icon buttons either — keep square

### Cards
- Background: #FFFFFF
- Border: 1px solid #E5E5E0
- Border-radius: 4px
- Shadow: `0 1px 3px rgba(0,0,0,0.04)` — nearly imperceptible lift
- Padding: 24px (default), 32px (large)
- No heavy shadows, no hover pop effects — use border-color shift on hover

### Navigation
- Layout: horizontal sticky bar, logo left, links right
- Background: #FAFAF8 or white with `backdrop-filter: blur(12px)` if overlay
- Height: 64px desktop, 56px mobile
- Link style: DM Sans, 14px, font-weight 500, no underline, #737373 default, #111111 on hover
- Active state: #111111, font-weight 600
- CTA in nav: primary button (outlined variant)
- No hamburger menus if possible — prefer a clean mobile treatment

### Sections
- Alternate backgrounds: #FFFFFF and #FAFAF8 — never use color-filled section backgrounds
- Section titles: Cormorant Garamond, 4xl–6xl, tight tracking, centered or left-aligned
- Section labels (above title): DM Sans uppercase, tracking-widest, 11–12px, muted-foreground
- Dividers: 1px solid #E5E5E0, used sparingly

### Headlines
- Font: Cormorant Garamond
- Tracking: -0.02em (2xl–3xl), -0.03em (4xl–5xl), -0.04em (6xl+)
- Weight: 400 (light editorial), 500 (medium emphasis), 600 (strong emphasis)
- Color: #111111
- Line-height: 1.1–1.2 for display sizes

### Body Copy
- Font: DM Sans
- Size: 16px base, 18px for larger reading columns
- Line-height: 1.7
- Color: #111111 (primary), #737373 (secondary / captions)
- Max measure: 65ch for comfortable reading

---

## Voice & Messaging Examples

| Instead of... | Say... |
|---|---|
| "We leverage cutting-edge AI technology to..." | "We use AI to build faster." |
| "Our team of experts will help you achieve..." | "You get a complete web identity in one week." |
| "Elevate your brand with our premium solutions" | "Your site. Done in a week." |
| "We're passionate about helping businesses grow" | "We build sites that work." |

**Headline formulas:**
- Statement + timeframe: "Your web identity. Transformed in a week."
- Direct benefit: "A site that converts. In 7 days."
- Minimal imperative: "Ship faster."

---

## Do's and Don'ts

**Do:**
- Use generous whitespace
- Let typography do the heavy lifting
- Keep the palette monochromatic
- Write in short, declarative sentences
- Use Cormorant Garamond at large sizes for maximum impact
- Keep corners sharp

**Don't:**
- Add color accents or gradients
- Use round corners (radius > 8px)
- Write in passive voice
- Use stock photography
- Use more than 2 font families in any single component
- Add drop shadows heavier than 0 4px 12px rgba(0,0,0,0.08)
