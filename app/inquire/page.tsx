import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, Clock, Phone } from "lucide-react";

const inputClass =
  "flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const labelClass = "block text-sm font-medium text-foreground mb-1.5";

export default function InquirePage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col pt-14">
        {/* Page header */}
        <SectionWrapper className="border-b border-border pb-12">
          <Container className="px-6">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Inquire
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.1] tracking-tight text-foreground mb-6">
              Start your project.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              Tell us about your business and we&apos;ll get back within 24 hours
              with a tailored proposal.
            </p>
          </Container>
        </SectionWrapper>

        {/* Form + Sidebar */}
        <SectionWrapper>
          <Container className="px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Form — takes 2 of 3 columns */}
              <div className="lg:col-span-2">
                <form className="flex flex-col gap-7" noValidate>
                  {/* Name & Company row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company / Brand name
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Acme Inc."
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  {/* Email & Website row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className={labelClass}>
                        Website{" "}
                        <span className="text-muted-foreground font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="website"
                        type="url"
                        placeholder="https://yoursite.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Package interest */}
                  <div>
                    <label htmlFor="package" className={labelClass}>
                      Package interest
                    </label>
                    <select
                      id="package"
                      className={`${inputClass} cursor-pointer`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a package…
                      </option>
                      <option value="essential">Essential</option>
                      <option value="studio">Studio</option>
                      <option value="brand-plus">Brand+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  {/* Project brief */}
                  <div>
                    <label htmlFor="brief" className={labelClass}>
                      Project brief
                    </label>
                    <textarea
                      id="brief"
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className={`${inputClass} h-auto resize-none py-3`}
                      required
                    />
                  </div>

                  {/* How did you find us */}
                  <div>
                    <label htmlFor="source" className={labelClass}>
                      How did you find us?
                    </label>
                    <select
                      id="source"
                      className={`${inputClass} cursor-pointer`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an option…
                      </option>
                      <option value="google">Google</option>
                      <option value="referral">Referral</option>
                      <option value="social">Social Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col gap-3 pt-2">
                    <Button
                      type="submit"
                      className="h-11 w-full rounded-none bg-foreground text-background hover:bg-foreground/90 font-sans text-sm font-medium"
                    >
                      Send inquiry
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      We&apos;ll respond within 24 hours.
                    </p>
                  </div>
                </form>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-8 lg:border-l lg:border-border lg:pl-12">
                {/* What to expect */}
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
                    What to expect
                  </p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "We review your inquiry and research your industry",
                      "You receive a tailored proposal within 24 hours",
                      "We schedule a 30-min discovery call to align on vision",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Discovery call */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone size={14} className="text-muted-foreground" />
                    Discovery call
                  </div>
                  <p className="text-sm text-muted-foreground">
                    30 minutes · video or phone · no commitment
                  </p>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mail size={14} className="text-muted-foreground" />
                    Direct contact
                  </div>
                  <a
                    href="mailto:hello@stfd.studio"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hello@stfd.studio
                  </a>
                </div>

                {/* Response time */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock size={14} className="text-muted-foreground" />
                    Response time
                  </div>
                  <p className="text-sm text-muted-foreground">&lt; 24 hours</p>
                </div>
              </div>
            </div>
          </Container>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
