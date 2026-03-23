import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata = {
  title: "Privacy Policy — stfd studio",
  description: "How stfd studio collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
                  stfd studio (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                  &ldquo;us&rdquo;) is committed to protecting your personal
                  data and respecting your privacy in accordance with the
                  General Data Protection Regulation (GDPR) (EU) 2016/679 and
                  applicable national data protection laws. This Privacy Policy
                  explains how we collect, use, and safeguard information when
                  you use our website and services.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The data controller responsible for your personal data is
                  stfd studio. For any privacy-related enquiries, please contact
                  us at{" "}
                  <a
                    href="mailto:legal@stfd.studio"
                    className="text-foreground underline underline-offset-4"
                  >
                    legal@stfd.studio
                  </a>
                  .
                </p>
              </div>

              {/* Section 1 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  1. Data We Collect
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We collect personal data only when it is necessary for a
                  legitimate business purpose and only to the extent required.
                  The categories of data we may collect include:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "Contact information: name, email address, company name, and website URL submitted through our inquiry form.",
                    "Project information: details about your business, project goals, and timeline that you voluntarily provide.",
                    "Technical data: IP address, browser type, operating system, and pages visited, collected automatically when you access our website.",
                    "Analytics data: aggregated, pseudonymised data about how visitors use our website, collected only with your consent.",
                    "Communication records: correspondence between you and stfd studio via email or other channels.",
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

              {/* Section 2 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  2. Legal Basis for Processing
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We process your personal data under the following legal bases
                  as defined in Article 6 of the GDPR:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "Contractual necessity: to respond to your inquiry and, if engaged, to deliver our services to you.",
                    "Legitimate interests: to operate, maintain, and improve our website and business operations, provided your interests do not override ours.",
                    "Consent: for analytics cookies and any optional marketing communications, where we have obtained your explicit consent.",
                    "Legal obligation: where we are required to retain data to comply with applicable laws, such as financial and tax regulations.",
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

              {/* Section 3 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  3. How We Use Your Data
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We use the personal data we collect for the following
                  purposes:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "To respond to your project inquiry and prepare a tailored proposal.",
                    "To provide and manage our web design and development services.",
                    "To communicate with you throughout the project lifecycle.",
                    "To issue invoices and manage payment records.",
                    "To improve our website based on aggregated, anonymised usage data.",
                    "To comply with applicable legal and regulatory obligations.",
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
                  We do not sell, rent, or share your personal data with third
                  parties for marketing purposes.
                </p>
              </div>

              {/* Section 4 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  4. Data Retention
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We retain your personal data only for as long as necessary to
                  fulfil the purposes for which it was collected:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "Inquiry data (non-clients): up to 12 months after the last communication, unless you request earlier deletion.",
                    "Client project data: for the duration of the project and up to 7 years thereafter, to comply with accounting and legal obligations.",
                    "Analytics data: aggregated data is retained for up to 26 months; individual session data is deleted after 90 days.",
                    "Email correspondence: up to 7 years in line with standard business record-keeping requirements.",
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

              {/* Section 5 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  5. Cookies and Tracking
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Our website uses cookies to ensure basic functionality and,
                  with your consent, to analyse website traffic. Essential
                  cookies do not require consent as they are necessary for the
                  website to function. Analytics cookies are only placed if you
                  actively accept them via our cookie consent notice.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  For detailed information about the cookies we use and how to
                  manage them, please see our{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-foreground underline underline-offset-4"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Section 6 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  6. Third-Party Services
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We may share limited data with trusted third-party service
                  providers who assist us in operating our website and
                  delivering services. These include hosting providers,
                  analytics platforms, and payment processors. All such
                  processors are bound by data processing agreements and are
                  obligated to handle your data securely and in compliance with
                  the GDPR. We do not transfer your data outside the European
                  Economic Area (EEA) without appropriate safeguards in place,
                  such as Standard Contractual Clauses.
                </p>
              </div>

              {/* Section 7 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  7. Your Rights
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Under the GDPR, you have the following rights in relation to
                  your personal data:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "Right of access: you may request a copy of the personal data we hold about you.",
                    "Right to rectification: you may ask us to correct inaccurate or incomplete data.",
                    "Right to erasure: you may request deletion of your personal data where there is no compelling reason for us to continue processing it.",
                    "Right to restriction of processing: you may ask us to restrict how we use your data in certain circumstances.",
                    "Right to data portability: you may request a structured, machine-readable copy of data you have provided to us.",
                    "Right to object: you may object to processing based on legitimate interests or for direct marketing purposes.",
                    "Right to withdraw consent: where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.",
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
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:legal@stfd.studio"
                    className="text-foreground underline underline-offset-4"
                  >
                    legal@stfd.studio
                  </a>
                  . We will respond within 30 days. You also have the right to
                  lodge a complaint with your national data protection
                  supervisory authority.
                </p>
              </div>

              {/* Section 8 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  8. Data Security
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We implement appropriate technical and organisational measures
                  to protect your personal data against unauthorised access,
                  accidental loss, alteration, or disclosure. However, no
                  method of electronic transmission or storage is completely
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 9 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  9. Changes to This Policy
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or applicable law. The &ldquo;last
                  updated&rdquo; date at the top of this page indicates when the
                  policy was last revised. We encourage you to review this page
                  periodically. For material changes, we will provide notice via
                  email or a prominent notice on our website.
                </p>
              </div>

              {/* Section 10 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  10. Contact
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  If you have questions about this Privacy Policy or wish to
                  exercise your data protection rights, please contact us:
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
