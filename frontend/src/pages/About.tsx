import { Link } from "react-router-dom";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">About</p>
            <h1 className="font-serif text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl max-w-3xl mb-8">
              We build web identities that mean something.
            </h1>
            <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-xl">
              stfd studio is a boutique design studio specializing in web identity — the intersection of brand, design, and engineering. We work with ambitious founders and growing companies who care deeply about how they present themselves online.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Our mission</p>
                <h2 className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl mb-6">
                  Fast delivery. Uncompromising craft.
                </h2>
                <div className="flex flex-col gap-4 font-sans text-sm text-muted-foreground leading-relaxed">
                  <p>
                    We believe great design shouldn't take months. We've built a process that delivers agency-quality work in one week — using AI-powered tools, a refined workflow, and a genuine obsession with detail.
                  </p>
                  <p>
                    Every project starts with your brand. We take the time to understand what you stand for, then design a web presence that communicates that with clarity and elegance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">What we value</p>
                {[
                  { title: "Precision", desc: "Every detail matters. We sweat the small stuff so you don't have to." },
                  { title: "Transparency", desc: "No hidden fees, no scope creep. Fixed scope, fixed timeline, fixed price." },
                  { title: "Speed", desc: "We move fast without sacrificing quality. That's our competitive edge." },
                  { title: "Craft", desc: "We care about the work. Not just delivering files — delivering results." },
                ].map((v) => (
                  <div key={v.title} className="flex flex-col gap-1 py-4 border-b border-border">
                    <span className="font-serif text-lg font-medium tracking-tight">{v.title}</span>
                    <span className="font-sans text-sm text-muted-foreground">{v.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-[#F5F4F0] border-y border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12">The team</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              <div className="flex flex-col gap-3">
                <div className="w-16 h-16 rounded-full bg-muted" />
                <div>
                  <p className="font-serif text-xl font-medium tracking-tight">Felix</p>
                  <p className="font-sans text-sm text-muted-foreground">Design & Strategy</p>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Designer and founder. Obsessed with the space between brand and product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl mb-8 max-w-xl">
              Ready to transform your web identity?
            </h2>
            <Button asChild className="h-11 rounded-none px-8 font-sans text-sm gap-2">
              <Link to="/inquire">
                Start a project <MoveRight size={14} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
