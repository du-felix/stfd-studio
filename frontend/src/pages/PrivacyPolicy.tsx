import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <section className="py-24 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Legal</p>
            <h1 className="font-serif text-5xl font-light tracking-tight text-foreground">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex flex-col gap-8 font-sans text-sm text-muted-foreground leading-relaxed">
              <p className="font-sans text-xs text-muted-foreground/50">Last updated: January 2026</p>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">1. Introduction</h2>
                <p>
                  stfd studio ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and store information when you visit our website or engage our services.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">2. Data we collect</h2>
                <p>
                  When you submit an inquiry through our website, we collect the information you provide: your name, email address, company name, and project details. We may also collect anonymized analytics data about how you use our website.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">3. How we use your data</h2>
                <p>
                  We use the information you provide solely to respond to your inquiry and, if you become a client, to deliver our services. We do not sell your data to third parties.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">4. Data retention</h2>
                <p>
                  We retain your personal data for as long as necessary to provide our services and comply with legal obligations. You can request deletion of your data at any time by contacting us.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">5. Your rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at hello@stfd.studio.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">6. Contact</h2>
                <p>
                  For any privacy-related questions, contact us at hello@stfd.studio.
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
