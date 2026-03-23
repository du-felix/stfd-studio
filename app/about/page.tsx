import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Felix",
    role: "Creative Director",
    quote:
      "I started stfd because I was tired of watching great businesses launch with mediocre websites. Now we fix that in a week.",
  },
  {
    name: "Ana",
    role: "Lead Developer",
    quote:
      "Technology should serve creativity. Our stack is chosen to be fast, maintainable, and beautiful.",
  },
];

const values = [
  {
    title: "Speed without sacrifice",
    description:
      "Fast doesn't mean cheap. We've built systems that make premium design sustainable at 7-day timelines.",
  },
  {
    title: "Design is strategy",
    description:
      "Every visual decision has a business reason. We design for conversion, trust, and memorability.",
  },
  {
    title: "Transparency",
    description:
      "Fixed prices. Fixed timelines. No scope creep. You always know what you're getting.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col pt-14">
        {/* Hero */}
        <SectionWrapper className="border-b border-border">
          <Container className="px-6">
            <div className="max-w-4xl">
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
                About
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.1] tracking-tight text-foreground mb-8">
                We build web identities at the speed of thought.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                stfd studio is a design-first agency backed by AI technology. We
                don&apos;t just make websites — we craft digital identities.
              </p>
            </div>
          </Container>
        </SectionWrapper>

        {/* Mission */}
        <SectionWrapper className="border-b border-border bg-muted/30">
          <Container className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
                  Mission
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-light leading-snug tracking-tight text-foreground">
                  Remove the barrier between a great idea and a great web
                  presence.
                </h2>
              </div>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Our mission is to remove the barrier between a great idea and
                  a great web presence. With AI-accelerated workflows, we deliver
                  what used to take months — in 7 days.
                </p>
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* Team */}
        <SectionWrapper className="border-b border-border">
          <Container className="px-6">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Team
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground mb-12">
              The people behind the work.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col gap-5 border border-border p-8 bg-card"
                >
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-muted flex-shrink-0" />
                  <div>
                    <p className="font-serif text-xl font-light text-foreground">
                      {member.name}
                    </p>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* Values */}
        <SectionWrapper className="border-b border-border bg-muted/30">
          <Container className="px-6">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Values
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground mb-12">
              What we believe.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-xs text-muted-foreground/50 font-mono mt-1 w-5 flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-serif text-xl font-light text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper>
          <Container className="px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                  Ready to start?
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  Let&apos;s build your web identity in a week.
                </p>
              </div>
              <Link href="/inquire">
                <Button className="h-11 rounded-none bg-foreground text-background hover:bg-foreground/90 px-8 font-sans text-sm font-medium">
                  Work with us
                </Button>
              </Link>
            </div>
          </Container>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
