import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <section className="py-24 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Legal</p>
            <h1 className="font-serif text-5xl font-light tracking-tight text-foreground">Terms of Service</h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex flex-col gap-8 font-sans text-sm text-muted-foreground leading-relaxed">
              <p className="font-sans text-xs text-muted-foreground/50">Last updated: January 2026</p>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">1. Services</h2>
                <p>
                  stfd studio provides web design and development services. By engaging our services, you agree to these terms. We will provide the agreed deliverables within the agreed timeline and scope.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">2. Payment</h2>
                <p>
                  Projects require a 50% deposit before work begins, with the remaining 50% due upon delivery. Failure to pay may result in work being paused or cancelled.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">3. Revisions</h2>
                <p>
                  Each package includes a defined number of revision rounds as specified in your project agreement. Additional revisions beyond the included rounds may be billed separately.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">4. Intellectual property</h2>
                <p>
                  Upon receipt of final payment, you own the final deliverables. stfd studio retains the right to display the work in our portfolio unless otherwise agreed in writing.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">5. Liability</h2>
                <p>
                  Our liability is limited to the amount paid for the project. We are not liable for any indirect, incidental, or consequential damages.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">6. Contact</h2>
                <p>
                  For any questions about these terms, contact us at hello@stfd.studio.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
