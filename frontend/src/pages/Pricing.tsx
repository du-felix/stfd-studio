import { Link } from "react-router-dom";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Pricing as PricingCards } from "@/components/ui/pricing-cards";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Pricing() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Header */}
        <section className="py-24 lg:py-32 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Pricing</p>
            <h1 className="font-serif text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl mb-6">
              Simple, transparent pricing.
            </h1>
            <p className="font-sans text-base text-muted-foreground max-w-lg mx-auto">
              No hidden fees. No scope creep. Fixed price, fixed timeline — every time.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <PricingCards />
          </div>
        </section>

        {/* FAQ / Note */}
        <section className="py-16 border-t border-border bg-[#F5F4F0]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Common questions</p>
              <div className="flex flex-col divide-y divide-border">
                {[
                  {
                    q: "What's included in the price?",
                    a: "Design, development, and deployment. Everything you need to go live — no extras.",
                  },
                  {
                    q: "Do you work with clients outside Europe?",
                    a: "Yes. We work with clients worldwide. All projects are remote.",
                  },
                  {
                    q: "What if I need changes after launch?",
                    a: "Each package includes revision rounds during the project. Post-launch support can be arranged separately.",
                  },
                  {
                    q: "Can I pay in installments?",
                    a: "Yes — 50% upfront, 50% on delivery.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="py-6">
                    <p className="font-serif text-lg font-medium tracking-tight mb-2">{faq.q}</p>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl mb-8">
              Ready to get started?
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
