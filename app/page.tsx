import Link from "next/link";
import Hero from "@/components/hero";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Zap, Shield, Clock, ArrowRight } from "lucide-react";

// ─── Logo Marquee ──────────────────────────────────────────────────────────────

const clients = [
  "Meridian Co.",
  "Opus Brand",
  "Helios Studio",
  "Arklight",
  "Vanta Works",
  "Solum Agency",
];

function LogoMarquee() {
  const repeated = [...clients, ...clients];
  return (
    <section
      id="clients"
      className="w-full overflow-hidden border-y border-[#111111]/8 bg-[#FAFAF8] py-5"
    >
      <div className="flex animate-[marquee_28s_linear_infinite] items-center gap-16 whitespace-nowrap">
        {repeated.map((name, i) => (
          <span
            key={i}
            className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#111111]/30"
          >
            {name}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

// ─── USP / Value Prop ──────────────────────────────────────────────────────────

const valueProps = [
  {
    icon: Zap,
    title: "AI-Accelerated",
    description:
      "We use cutting-edge AI tools to compress what normally takes months into 7 days.",
  },
  {
    icon: Shield,
    title: "Brand-First",
    description:
      "Every pixel is intentional. We build web identities that convert and inspire.",
  },
  {
    icon: Clock,
    title: "Fixed Timeline",
    description:
      "1 week, always. You know exactly when your new identity goes live.",
  },
];

function ValueProp() {
  return (
    <section
      id="value"
      className="w-full bg-[#FAFAF8] px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif mb-16 text-center text-4xl font-light tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
          One week.{" "}
          <span className="italic text-[#111111]/40">No compromises.</span>
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {valueProps.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#111111]/10 bg-white">
                <Icon size={18} strokeWidth={1.5} className="text-[#111111]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-[#111111]">
                  {title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#111111]/55">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ───────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "A focused 30-minute conversation to understand your brand, goals, and audience.",
  },
  {
    number: "02",
    title: "Design sprint",
    description:
      "We translate your brief into a complete visual identity — typography, colour, layout.",
  },
  {
    number: "03",
    title: "Build & refine",
    description:
      "Your site is built in code, pixel-perfect and performant, with one revision round.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy your new identity live. Day 7. On schedule, every time.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="w-full border-t border-[#111111]/8 bg-white px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif mb-16 text-4xl font-light tracking-tight text-[#111111] sm:text-5xl">
          How it works
        </h2>
        <div className="grid gap-10 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-light text-[#111111]/15">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-[#111111]/10 md:block" />
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-sans text-sm font-semibold text-[#111111]">
                  {step.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#111111]/50">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Cases Teaser ──────────────────────────────────────────────────────────────

const cases = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    client: "Meridian Co.",
    type: "Brand Identity & Web",
    year: "2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    client: "Helios Studio",
    type: "Landing Page",
    year: "2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
    client: "Opus Brand",
    type: "Visual Identity",
    year: "2026",
  },
];

function CasesTeaser() {
  return (
    <section
      id="cases"
      className="w-full border-t border-[#111111]/8 bg-[#FAFAF8] px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-serif text-4xl font-light tracking-tight text-[#111111] sm:text-5xl">
            Selected work
          </h2>
          <Link
            href="/cases"
            className="group flex items-center gap-1.5 font-sans text-sm text-[#111111]/50 transition-colors hover:text-[#111111]"
          >
            All cases
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.client}
              href="/cases"
              className="group flex flex-col gap-3"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#111111]/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.client}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="font-sans text-sm font-medium text-[#111111]">
                    {c.client}
                  </span>
                  <span className="font-sans text-xs text-[#111111]/45">
                    {c.type}
                  </span>
                </div>
                <span className="font-sans text-xs text-[#111111]/30">
                  {c.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "45+", label: "projects delivered" },
  { value: "7 days", label: "average delivery" },
  { value: "98%", label: "client satisfaction" },
];

function Stats() {
  return (
    <section
      id="stats"
      className="w-full border-t border-[#111111]/8 bg-white px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="font-serif text-5xl font-light text-[#111111] sm:text-6xl">
                {stat.value}
              </span>
              <span className="font-sans text-sm uppercase tracking-widest text-[#111111]/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section
      id="contact"
      className="w-full bg-[#111111] px-6 py-28 md:px-12 lg:px-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Ready to transform your web identity?
        </h2>
        <p className="font-sans text-base leading-relaxed text-white/50 sm:text-lg">
          Start your project in 60 seconds — no commitment, just a quick
          conversation.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link href="/inquire">
            <button className="inline-flex h-11 items-center justify-center rounded-full bg-white px-7 font-sans text-sm font-medium text-[#111111] transition-opacity hover:opacity-90">
              Book a discovery call
            </button>
          </Link>
          <Link href="/pricing">
            <button className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-7 font-sans text-sm font-medium text-white transition-colors hover:bg-white/10">
              View pricing
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <LogoMarquee />
        <ValueProp />
        <Process />
        <CasesTeaser />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
