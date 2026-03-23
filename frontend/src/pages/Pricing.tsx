import { Link } from "react-router-dom";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Pricing as PricingCards } from "@/components/ui/pricing-cards";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Pricing() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Header */}
        <section className="py-16 md:py-24 lg:py-32 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Pricing</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl mb-6">
              Simple, transparent pricing.
            </h1>
            <p className="font-sans text-base text-muted-foreground max-w-lg mx-auto">
              No hidden fees. No scope creep. Fixed price, fixed timeline — every time.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <PricingCards />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Common questions</p>
            <Accordion type="single" collapsible className="w-full">
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
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="font-serif text-lg font-light tracking-tight text-left hover:no-underline py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-background">
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
