import { Link } from "react-router-dom";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { MoveRight, ArrowRight } from "lucide-react";

// Logo Marquee section
function LogoMarquee() {
  const logos = ["Notion", "Linear", "Vercel", "Stripe", "Figma", "Loom", "Arc", "Raycast"];
  return (
    <section className="border-y border-border bg-background py-10 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className="font-serif text-xl text-muted-foreground/40 tracking-tight shrink-0">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}

// Value Proposition section
function ValueProp() {
  const values = [
    {
      number: "01",
      title: "Speed without compromise",
      description: "We deliver polished, production-ready websites in 7 days flat. No shortcuts — just a process refined for speed.",
    },
    {
      number: "02",
      title: "Brand-first design",
      description: "Every pixel reflects your brand. We don't use templates. We build custom design systems tailored to your identity.",
    },
    {
      number: "03",
      title: "AI-accelerated craft",
      description: "We leverage AI to move faster, so you get agency-quality work at a fraction of the time and cost.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Why stfd</p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl max-w-2xl">
            The studio that moves at startup speed.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((v) => (
            <div key={v.number} className="flex flex-col gap-4">
              <span className="font-sans text-xs text-muted-foreground/50 tracking-widest">{v.number}</span>
              <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">{v.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process section
function Process() {
  const steps = [
    { step: "1", title: "Discovery", desc: "30-min call to understand your brand, goals, and vision." },
    { step: "2", title: "Design", desc: "We build your site in Figma — you approve before we code." },
    { step: "3", title: "Development", desc: "Clean, fast, production-ready code shipped in days." },
    { step: "4", title: "Launch", desc: "We handle deployment and hand off everything you need." },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F5F4F0] border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">The process</p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
            From idea to live in a week.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="flex flex-col gap-3 p-6 bg-background border border-border">
              <span className="font-serif text-3xl font-light text-muted-foreground/30">{s.step}</span>
              <h3 className="font-serif text-lg font-medium tracking-tight">{s.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Cases Teaser section
function CasesTeaser() {
  const cases = [
    { title: "Meridian Capital", category: "Finance · Landing Page", year: "2026" },
    { title: "Bloom Studio", category: "Creative Agency · Full Site", year: "2026" },
    { title: "Arkade", category: "SaaS · Marketing Site", year: "2025" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Selected work</p>
            <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Recent projects.
            </h2>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex gap-2 font-sans text-sm">
            <Link to="/cases">
              View all work <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col divide-y divide-border">
          {cases.map((c, i) => (
            <div key={i} className="flex items-center justify-between py-6 group cursor-pointer">
              <div className="flex flex-col gap-1">
                <span className="font-serif text-2xl font-light tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
                  {c.title}
                </span>
                <span className="font-sans text-sm text-muted-foreground">{c.category}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-sans text-xs text-muted-foreground/50">{c.year}</span>
                <ArrowRight size={16} className="text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <Button asChild variant="outline" className="rounded-none w-full gap-2">
            <Link to="/cases">
              View all work <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Stats section
function Stats() {
  const stats = [
    { value: "7", label: "Days to launch" },
    { value: "100%", label: "Custom design" },
    { value: "3×", label: "Faster than agencies" },
    { value: "∞", label: "Brand precision" },
  ];

  return (
    <section className="py-16 border-y border-border bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <span className="font-serif text-4xl font-light text-white md:text-5xl">{s.value}</span>
              <span className="font-sans text-sm text-white/50">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA section
function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Ready to start?</p>
        <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl max-w-2xl mx-auto mb-8">
          Let's build your web identity.
        </h2>
        <p className="font-sans text-base text-muted-foreground max-w-md mx-auto mb-10">
          We take on a limited number of projects each month. Book your spot now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="h-11 rounded-none px-8 font-sans text-sm gap-2">
            <Link to="/inquire">
              Start your project <MoveRight size={14} />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 rounded-none px-8 font-sans text-sm">
            <Link to="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
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
