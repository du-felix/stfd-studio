import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";

const cases = [
  {
    client: "Meridian Co.",
    type: "Brand + Website",
    year: "2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    alt: "Meridian Co. — data dashboard with charts",
  },
  {
    client: "Opus Digital",
    type: "Landing Page",
    year: "2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    alt: "Opus Digital — laptop with code on screen",
  },
  {
    client: "Arklight",
    type: "Brand Identity",
    year: "2024",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600",
    alt: "Arklight — person working on design",
  },
  {
    client: "Vanta Works",
    type: "Full Website",
    year: "2024",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
    alt: "Vanta Works — team in a meeting",
  },
  {
    client: "Helios Studio",
    type: "Website Redesign",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    alt: "Helios Studio — analytics dashboard",
  },
  {
    client: "Solum Agency",
    type: "Landing Page",
    year: "2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    alt: "Solum Agency — professional headshot",
  },
];

export default function CasesPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col pt-14">
        {/* Header */}
        <SectionWrapper className="border-b border-border pb-12">
          <Container className="px-6">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Work
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.1] tracking-tight text-foreground">
                Our work.
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground max-w-sm sm:text-right">
                A selection of web identities we&apos;ve built.
              </p>
            </div>
          </Container>
        </SectionWrapper>

        {/* Cases grid */}
        <SectionWrapper>
          <Container className="px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {cases.map((c) => (
                <article
                  key={c.client}
                  className="group bg-background flex flex-col overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-muted">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col gap-2 p-5 border-t border-border">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="font-serif text-lg font-light text-foreground">
                        {c.client}
                      </h2>
                      <span className="text-xs text-muted-foreground/60 font-mono flex-shrink-0">
                        {c.year}
                      </span>
                    </div>
                    <span className="inline-flex w-fit items-center rounded-none border border-border bg-muted px-2 py-0.5 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                      {c.type}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="border-t border-border bg-muted/30">
          <Container className="px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                  Want results like these?
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  Your web identity, delivered in 7 days.
                </p>
              </div>
              <Link href="/inquire">
                <Button className="h-11 rounded-none bg-foreground text-background hover:bg-foreground/90 px-8 font-sans text-sm font-medium">
                  Start your project
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
