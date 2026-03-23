import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pricing } from "@/components/ui/pricing-cards";

const faqs = [
  {
    question: "How does 1-week delivery actually work?",
    answer:
      "We run intensive design sprints powered by AI tooling. While most agencies spend weeks in back-and-forth, we compress that into a structured 7-day process with daily check-ins.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "All packages include post-launch revisions within 14 days. After that, we offer flexible support retainers.",
  },
  {
    question: "Do you work with existing brands?",
    answer:
      "Yes. If you have an existing brand identity, we'll align the website to it. If you want a refresh, Brand+ includes full identity redesign.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "A discovery call form, your content (or rough copy), and any existing brand assets. We handle the rest.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes — 50% upfront, 50% on delivery. Enterprise projects can arrange custom payment schedules.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex flex-col flex-1 pt-14">
        {/* Page header */}
        <section className="py-20 lg:py-28 px-6 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl flex flex-col gap-5">
              <div>
                <Badge variant="outline" className="rounded-none text-xs tracking-widest uppercase">
                  Pricing
                </Badge>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                Transparent pricing.<br />No surprises.
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                Every project ships in 7 days or less. All prices are fixed —
                you always know what you&apos;re paying.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-20 lg:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <Pricing />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight">
                  Common questions
                </h2>
              </div>
              <div className="lg:col-span-2">
                <dl className="flex flex-col divide-y divide-border">
                  {faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-start justify-between gap-4 text-sm font-medium select-none list-none">
                        <span>{faq.question}</span>
                        <span
                          aria-hidden="true"
                          className="shrink-0 mt-0.5 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="py-16 lg:py-20 px-6 border-t border-border bg-foreground text-background">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-serif text-3xl lg:text-4xl font-light tracking-tight">
              Still have questions? Let&apos;s talk.
            </p>
            <Button
              variant="outline"
              className="rounded-none shrink-0 border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
              render={<Link href="/inquire" />}
            >
              Book a free discovery call
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
