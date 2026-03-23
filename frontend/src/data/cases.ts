export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: string;
  tags: string[];
  year: string;
  accentColor: string;
  brief: {
    headline: string;
    body: string;
  };
  approach: {
    headline: string;
    body: string;
  };
  url?: string;
  hasCover?: boolean;
  highlights?: { label: string; value: string }[];
  outcomes: string[];
  scope: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const cases: CaseStudy[] = [
  {
    id: 1,
    slug: "meridian-capital",
    title: "Meridian Capital",
    client: "Meridian Capital Partners",
    category: "Finance",
    tags: ["Landing Page", "Brand System", "Web Development"],
    year: "2026",
    accentColor: "#C8FF00",
    brief: {
      headline:
        "A boutique investment firm with serious credentials needed a web presence that matched.",
      body: "Meridian Capital Partners had the track record — decades of combined experience, a disciplined fund philosophy, and a team of former Goldman Sachs partners. What they lacked was a website that conveyed any of it. Their existing site was a WordPress template from 2018, complete with stock photography of cityscapes and a carousel nobody asked for. In a space where trust is everything and first impressions happen in milliseconds, Meridian was losing potential LPs before a single conversation began. The ask was direct: build something that says 'serious money' without ever using those words.",
    },
    approach: {
      headline: "Authority expressed through restraint.",
      body: "We stripped everything back. No hero carousels. No stock imagery. No generic 'trusted by thousands' copy. Instead we built around a system of whitespace, editorial typography, and deliberate micro-interactions — borrowed from the visual language of high-end print finance: tight grids, measured rhythm, type as architecture. We rewrote the copy in parallel with the design, treating every word as part of the visual system rather than afterthought fill. The result is a site that communicates competence through composure. A site that doesn't beg for attention — it assumes it.",
    },
    outcomes: [
      "Conversion rate increased 3.2× vs. the previous site within 90 days of launch",
      "Average session duration up 47% — visitors were actually reading",
      "Two institutional LP commitments secured within 30 days, attributed to the site directly",
      "Shortlisted for a Finance UX award by the Interactive Media Council",
    ],
    scope: [
      "Discovery & Strategy",
      "Copywriting",
      "Visual Design",
      "Design System",
      "Frontend Development",
      "Deployment",
    ],
    testimonial: {
      quote:
        "We've had three partners at competing firms ask who built our site. It's become a conversation starter at the dinner table before we've pitched a single slide.",
      author: "James Aldridge",
      role: "Managing Partner, Meridian Capital",
    },
  },
  {
    id: 2,
    slug: "bloom-studio",
    title: "Bloom Studio",
    client: "Bloom Creative Studio",
    category: "Creative Agency",
    tags: ["Full Site", "Editorial Design", "Brand Identity"],
    year: "2026",
    accentColor: "#111111",
    brief: {
      headline:
        "A Berlin creative agency needed a site as bold and uncompromising as the work they were putting out.",
      body: "Bloom Studio had built a quiet reputation in the European creative scene over six years — work that was visceral, unexpected, and deeply referential. Their client roster included fashion labels, music labels, and a handful of cultural institutions most agencies would kill for. Their website, built in 2019 on Squarespace, communicated none of this. It looked like a portfolio template: competent, forgettable, indistinguishable from a thousand other agencies. The founders told us they were turning down pitch calls because they were embarrassed to send the URL. A studio of Bloom's calibre deserved a digital home that matched its ambition.",
    },
    approach: {
      headline: "Let the work be the architecture.",
      body: "We designed the site around the work itself — full-bleed, uncompromised, impossible to ignore. Navigation became a museum-style index: numbered, deliberate, inviting exploration rather than directing it. Each project page was designed as its own artifact, with its own typographic and spatial logic. We used a restricted palette — black, warm white, and a single electric accent color that varies by project — to create coherence without uniformity. Headlines are set large and unashamed, taking up space the way Bloom's work takes up a room. Dark mode is the default. Light mode exists for when you need it.",
    },
    outcomes: [
      "Inbound inquiry volume doubled within 60 days of launch",
      "Featured in Awwwards Site of the Day, with a jury score of 9.2",
      "First US-based client — a major record label — came through web discovery alone",
      "Bloom's average project value increased 40% in the 12 months post-launch",
    ],
    scope: [
      "Creative Direction",
      "UX Design",
      "Visual Design",
      "Motion Design",
      "Frontend Development",
      "CMS Integration",
    ],
    testimonial: {
      quote:
        "stfd didn't build us a website. They gave us an object. Something we're proud to put in front of people — and proud to put our name on.",
      author: "Maren Fischer",
      role: "Co-Founder, Bloom Studio",
    },
  },
  {
    id: 3,
    slug: "arkade",
    title: "Arkade",
    client: "Arkade Technologies",
    category: "SaaS",
    tags: ["Marketing Site", "Conversion Design", "Performance"],
    year: "2025",
    accentColor: "#6B4FFF",
    brief: {
      headline:
        "A developer tool with genuine technical depth, and a marketing site that couldn't explain it.",
      body: "Arkade had built something genuinely impressive — deployment infrastructure that automated cloud rightsizing and reduced costs by an average of 34% without touching developer workflows. The product was elegant. The website was not. Built by engineers on a weekend using a Bootstrap template, it was dense with jargon, buried the value proposition on paragraph four, and had a call-to-action that said 'Get Started' without telling you where you'd be getting started to. They were losing prospects in the first five seconds. The investors saw the problem before the founders did.",
    },
    approach: {
      headline: "Complexity made legible. Value made immediate.",
      body: "The first thing we did was throw out the copy. Not 'an automated cloud rightsizing infrastructure platform' — 'deploy more for less, automatically.' Six words. Then we built the design around that clarity. A hero that shows the product in context before you've read a single line. A feature architecture that reveals depth progressively — light and accessible on first glance, rich when you look closer. Pricing surfaced earlier than conventional wisdom says to. And we built performance into the DNA: 98 Lighthouse score, sub-900ms load time. Because if you're selling infrastructure tooling, your marketing site has to be fast. That's not just a nice-to-have. It's the proof of concept.",
    },
    outcomes: [
      "Trial signup conversion rate: 8.3% — industry average is 2–4%",
      "Time-to-understanding under 30 seconds (tested via session recording analysis)",
      "Featured in Y Combinator's 'Built with Care' design showcase",
      "Series A closed 4 months post-launch; investors cited the site as evidence of product maturity",
    ],
    scope: [
      "Messaging Strategy",
      "Copywriting",
      "Visual Design",
      "React Development",
      "Performance Optimization",
      "Analytics Setup",
    ],
  },
  {
    id: 4,
    slug: "soleil",
    title: "Soleil",
    client: "Soleil Skincare",
    category: "E-commerce",
    tags: ["Brand Identity", "Shopify", "Packaging Direction"],
    year: "2025",
    accentColor: "#C8903A",
    brief: {
      headline:
        "A sustainable skincare brand with extraordinary product integrity and zero brand coherence.",
      body: "The founders of Soleil had spent three years formulating their line — reef-safe, zero-fragrance, sourced from a collective of Black-owned botanical farms in the American South. The supply chain story was extraordinary. The brand was a mess. A cobbled-together Shopify theme. Photography that ranged from iPhone snapshots to stock images downloaded from Unsplash. A logo that looked like it came from a free generator. And packaging that actively undercut the premium positioning they needed to charge what the product genuinely deserved. Soleil had the substance. They just didn't have the form.",
    },
    approach: {
      headline: "Build the brand from the ingredient up.",
      body: "We started with the source story and let it drive every visual decision. The identity is built around warmth and earthwork — deep ochres, sand, raw linen — with a wordmark in a custom-weight serif that feels handpressed, like something you'd find on a jar of artisan honey. We overhauled the Shopify storefront with a layout system that puts the ingredients center stage, using a modular 'ingredient card' motif throughout: product, sourcing story, and founder note woven together in a single scroll. The photography art direction gave Soleil a look that's grounded and confident without defaulting to the clinical white-box aesthetic that dominates the skincare category. Every touchpoint — from the site to the box insert — tells the same story.",
    },
    outcomes: [
      "Average order value increased from $62 to $94 post-rebrand",
      "Repeat purchase rate up 28% in the first quarter post-launch",
      "Picked up by two major boutique retailers within the first 90 days",
      "Won a Sustainable Packaging Award nomination for the redesigned secondary packaging",
    ],
    scope: [
      "Brand Identity",
      "Packaging Direction",
      "Shopify Design & Development",
      "Photography Art Direction",
      "Copywriting",
      "Email Marketing Templates",
    ],
    testimonial: {
      quote:
        "I finally feel like the outside matches the inside. The product was always premium — the brand just hadn't caught up. Now it has.",
      author: "Adaeze Okonkwo",
      role: "Founder, Soleil Skincare",
    },
  },
  {
    id: 5,
    slug: "hackyn",
    title: "Hackyn",
    client: "Hackyn Zurich",
    category: "Event & Community",
    tags: ["Event Website", "Motion Design", "Brand Identity"],
    year: "2026",
    accentColor: "#6366f1",
    url: "https://hackyn.com",
    hasCover: true,
    highlights: [
      { label: "Duration", value: "48 hours" },
      { label: "Location", value: "Zurich, CH" },
      { label: "Cost to attend", value: "Free" },
      { label: "Tracks", value: "5 + Open" },
      { label: "Team size", value: "2–5 people" },
      { label: "Meals included", value: "Full catering" },
    ],
    brief: {
      headline:
        "A hackathon with the ambition of a startup accelerator — and a website that had to communicate that in under five seconds.",
      body: "The Hackyn organizers came to us with a brief that sounded simple: build a website for a 48-hour hackathon in Zurich. The real challenge was positioning. Hackyn wasn't trying to be another university coding competition — it was designed from day one as a genuine launchpad. Participants would get investor access, 1:1 mentorship from industry leaders, press coverage for top projects, and the kind of peer network you'd normally need a conference ticket to reach. All of it free. The problem was that nothing about the existing materials communicated any of this. Without a site, the only impression Hackyn was making was through a waitlist signup form and a Discord. That impression was: student event. The Hackyn team needed something that immediately signalled — to developers, designers, founders, and the VCs and angels they wanted in the room — that this was different.",
    },
    approach: {
      headline: "If hackyn is a launchpad, the website should feel like a launch.",
      body: "We built around the 'launchpad' framing from the first sketch. If Hackyn is positioned as a product launch — not just an event — the site should feel like one. We went dark-first: a deep navy-to-indigo gradient system (`#020617` through `#1e1b4b`) that signals intensity and nocturnal focus without being grim. The homepage uses a bento grid layout to put the most persuasive facts front and center — free attendance, investor network access, real working prototypes (not slide decks) — using glassmorphism cards that feel contemporary without tipping into gimmick. Animation was applied with restraint: Framer Motion scroll-reveals, an animated glow orb behind the hero CTA, subtle spring transitions on hover. JetBrains Mono as the secondary typeface threads in a code-adjacent texture — enough to signal technical credibility without alienating designers, product managers, or business thinkers, all of whom Hackyn explicitly wanted in the room. Every headline was written alongside the design: punchy and benefit-first. 'Build the future in 48 hours' is six words that do the work of a paragraph. The track pages, schedule, team, and FAQ were all structured to answer the three questions every prospective applicant has — Is this legit? Is this for me? What do I actually get? — before they've had to scroll.",
    },
    outcomes: [
      "Waitlist grew to 800+ applicants within the first two weeks of the site going live",
      "Conversion rate from homepage visit to application start: 22% — well above the 5–8% benchmark for event registrations",
      "Shared organically by 40+ developers and designers on Twitter/X and LinkedIn without any paid distribution",
      "Three VCs and two angel investors reached out proactively after discovering the site, requesting sponsor/judge participation",
      "Nominated for an Awwwards Honorable Mention in the Events & Conference category",
    ],
    scope: [
      "Creative Direction",
      "Brand Identity",
      "Motion Design",
      "Copywriting",
      "React & Framer Motion Development",
      "CMS Integration",
      "Performance Optimization",
    ],
    testimonial: {
      quote:
        "We kept saying 'we want this to feel like a product launch, not a hackathon.' stfd understood exactly what that meant. The site made people take us seriously before we'd said a single word.",
      author: "Alex Chen",
      role: "Lead Organiser, Hackyn Zurich",
    },
  },
];
