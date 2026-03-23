import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata = {
  title: "Cookie Policy — stfd studio",
  description: "Information about the cookies used on the stfd studio website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col pt-14">
        {/* Header */}
        <SectionWrapper className="border-b border-border pb-12">
          <Container className="px-6">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Legal
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl font-light leading-[1.1] tracking-tight text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: March 2025
            </p>
          </Container>
        </SectionWrapper>

        {/* Content */}
        <SectionWrapper>
          <Container className="px-6">
            <div className="max-w-3xl flex flex-col gap-10">
              {/* Back link */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                ← Back to home
              </Link>

              {/* Intro */}
              <div className="flex flex-col gap-4">
                <p className="text-base leading-relaxed text-muted-foreground">
                  This Cookie Policy explains what cookies are, how stfd studio
                  uses them on this website, and how you can manage your cookie
                  preferences. This policy should be read alongside our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-foreground underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  , which provides more detail about how we handle your personal
                  data.
                </p>
              </div>

              {/* Section 1 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  1. What Are Cookies?
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Cookies are small text files placed on your device (computer,
                  tablet, or mobile) when you visit a website. They are widely
                  used to make websites function correctly, to improve
                  performance, and to provide information to site owners.
                  Cookies can be &ldquo;session cookies&rdquo; (deleted when you
                  close your browser) or &ldquo;persistent cookies&rdquo; (which
                  remain on your device until they expire or are manually
                  deleted).
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Under EU law — specifically the ePrivacy Directive and the
                  GDPR — we are required to obtain your consent before placing
                  any cookies that are not strictly necessary for the operation
                  of the website.
                </p>
              </div>

              {/* Section 2 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  2. Cookies We Use
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We operate a minimal cookie policy. We use only two categories
                  of cookies on this website:
                </p>

                {/* Essential cookies */}
                <div className="border border-border p-6 flex flex-col gap-3 bg-card">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="font-serif text-lg font-light text-foreground">
                      Essential Cookies
                    </h3>
                    <span className="inline-flex items-center rounded-none border border-border bg-muted px-2 py-0.5 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                      Always active
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    These cookies are strictly necessary for the website to
                    function and cannot be switched off. They are typically set
                    in response to actions you take — such as setting your
                    privacy preferences or navigating the site. You can set your
                    browser to block these cookies, but some parts of the site
                    may not work as a result.
                  </p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-2 pr-4 font-medium text-foreground text-xs uppercase tracking-wider">
                            Cookie
                          </th>
                          <th className="py-2 pr-4 font-medium text-foreground text-xs uppercase tracking-wider">
                            Purpose
                          </th>
                          <th className="py-2 font-medium text-foreground text-xs uppercase tracking-wider">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="py-2.5 pr-4 text-muted-foreground font-mono text-xs">
                            stfd_consent
                          </td>
                          <td className="py-2.5 pr-4 text-muted-foreground">
                            Stores your cookie consent preferences
                          </td>
                          <td className="py-2.5 text-muted-foreground">
                            12 months
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 pr-4 text-muted-foreground font-mono text-xs">
                            __session
                          </td>
                          <td className="py-2.5 pr-4 text-muted-foreground">
                            Maintains your session state during a visit
                          </td>
                          <td className="py-2.5 text-muted-foreground">
                            Session
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="border border-border p-6 flex flex-col gap-3 bg-card">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="font-serif text-lg font-light text-foreground">
                      Analytics Cookies
                    </h3>
                    <span className="inline-flex items-center rounded-none border border-border bg-muted px-2 py-0.5 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                      Opt-in only
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    These cookies allow us to understand how visitors interact
                    with our website, which pages are most visited, and how
                    people navigate through the site. All data is aggregated and
                    anonymised — we cannot identify you personally from this
                    data. These cookies are only placed if you accept them via
                    our cookie consent banner.
                  </p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-2 pr-4 font-medium text-foreground text-xs uppercase tracking-wider">
                            Cookie
                          </th>
                          <th className="py-2 pr-4 font-medium text-foreground text-xs uppercase tracking-wider">
                            Purpose
                          </th>
                          <th className="py-2 font-medium text-foreground text-xs uppercase tracking-wider">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="py-2.5 pr-4 text-muted-foreground font-mono text-xs">
                            _plausible
                          </td>
                          <td className="py-2.5 pr-4 text-muted-foreground">
                            Privacy-first analytics (no cross-site tracking)
                          </td>
                          <td className="py-2.5 text-muted-foreground">
                            Session
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    We use Plausible Analytics, a privacy-first, cookieless
                    analytics tool by default. If analytics cookies are enabled,
                    no personally identifiable information is collected or shared
                    with third parties.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  3. What We Do Not Use
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We are committed to a minimal, respectful cookie footprint. We
                  do not use:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "Third-party advertising or tracking cookies.",
                    "Social media tracking pixels (e.g. Facebook Pixel, TikTok Pixel).",
                    "Cross-site tracking or behavioural profiling.",
                    "Fingerprinting technologies.",
                    "Any cookie that shares data with data brokers or advertising networks.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                      <span className="text-base leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  4. Your Consent
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  When you first visit our website, you will be shown a cookie
                  consent notice. You can choose to accept or decline analytics
                  cookies. Essential cookies are placed automatically as they
                  are necessary for the website to function. Your consent
                  preference is saved in the{" "}
                  <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded-sm">
                    stfd_consent
                  </code>{" "}
                  cookie and remains valid for 12 months.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  You may withdraw your consent at any time by clearing your
                  browser cookies and revisiting the site, at which point the
                  consent banner will appear again.
                </p>
              </div>

              {/* Section 5 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  5. How to Manage Cookies in Your Browser
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  You can control and delete cookies through your browser
                  settings. Most browsers allow you to:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "View cookies currently stored on your device.",
                    "Block all cookies or cookies from specific websites.",
                    "Delete all cookies or cookies from specific websites.",
                    "Set preferences for cookies before they are set.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                      <span className="text-base leading-relaxed text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Instructions for managing cookies in popular browsers:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    {
                      browser: "Google Chrome",
                      url: "https://support.google.com/chrome/answer/95647",
                    },
                    {
                      browser: "Mozilla Firefox",
                      url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer",
                    },
                    {
                      browser: "Apple Safari",
                      url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
                    },
                    {
                      browser: "Microsoft Edge",
                      url: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d",
                    },
                  ].map(({ browser, url }) => (
                    <li key={browser} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                      >
                        {browser}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Please note that disabling cookies may affect the
                  functionality of this and other websites you visit.
                </p>
              </div>

              {/* Section 6 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  6. Changes to This Policy
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We may update this Cookie Policy from time to time as our
                  website and services evolve. The &ldquo;last updated&rdquo;
                  date at the top of this page will be revised accordingly. We
                  recommend checking this page periodically to stay informed
                  about our cookie practices.
                </p>
              </div>

              {/* Section 7 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  7. Contact
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  If you have questions about this Cookie Policy or our use of
                  cookies, please contact us:
                </p>
                <div className="border border-border bg-muted/30 p-6 flex flex-col gap-1.5">
                  <p className="text-sm font-medium text-foreground">
                    stfd studio
                  </p>
                  <a
                    href="mailto:legal@stfd.studio"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    legal@stfd.studio
                  </a>
                </div>
              </div>

              {/* Back link bottom */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                ← Back to home
              </Link>
            </div>
          </Container>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
