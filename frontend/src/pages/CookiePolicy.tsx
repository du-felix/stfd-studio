import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function CookiePolicy() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <section className="py-24 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Legal</p>
            <h1 className="font-serif text-5xl font-light tracking-tight text-foreground">Cookie Policy</h1>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex flex-col gap-8 font-sans text-sm text-muted-foreground leading-relaxed">
              <p className="font-sans text-xs text-muted-foreground/50">Last updated: January 2026</p>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">1. What are cookies?</h2>
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help us understand how you use our site and improve your experience.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">2. Cookies we use</h2>
                <p>
                  We use only essential cookies necessary for the website to function. We do not use tracking or advertising cookies.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">3. Analytics</h2>
                <p>
                  We may use privacy-respecting analytics tools (such as Plausible or Fathom) that do not use cookies and do not track individual users.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">4. Managing cookies</h2>
                <p>
                  You can control cookies through your browser settings. Disabling essential cookies may affect website functionality.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">5. Contact</h2>
                <p>
                  For questions about our cookie use, contact us at hello@stfd.studio.
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
