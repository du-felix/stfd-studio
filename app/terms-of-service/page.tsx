import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionWrapper } from "@/components/section-wrapper";

export const metadata = {
  title: "Terms of Service — stfd studio",
  description: "Terms governing the use of stfd studio services.",
};

export default function TermsOfServicePage() {
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
              Terms of Service
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
                  These Terms of Service (&ldquo;Terms&rdquo;) govern the
                  relationship between stfd studio (&ldquo;we&rdquo;,
                  &ldquo;our&rdquo;, or &ldquo;us&rdquo;) and the client
                  (&ldquo;you&rdquo; or &ldquo;Client&rdquo;) when you engage
                  our web design and development services. By placing an order
                  or signing a project agreement with stfd studio, you agree to
                  be bound by these Terms.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  These Terms are governed by the laws of the European Union and
                  the jurisdiction in which stfd studio is registered. Any
                  disputes arising from these Terms shall be subject to the
                  exclusive jurisdiction of the competent courts of that
                  jurisdiction.
                </p>
              </div>

              {/* Section 1 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  1. Services
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  stfd studio provides web design, web development, brand
                  identity, and related digital services as described in the
                  agreed project scope. The scope, deliverables, and timeline
                  for each project are defined in a written project brief or
                  proposal accepted by both parties prior to commencement of
                  work.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We reserve the right to decline or discontinue any project at
                  our sole discretion, subject to the refund provisions set out
                  in Section 4.
                </p>
              </div>

              {/* Section 2 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  2. Service Delivery
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  stfd studio operates on a 7-day delivery model for standard
                  packages. The delivery timeline begins upon receipt of all
                  required materials and information from the Client, and upon
                  confirmation of payment in accordance with Section 3. Delays
                  caused by the Client&apos;s failure to provide required
                  content, feedback, or approvals on time may extend the
                  delivery timeline accordingly.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Deliverables are provided in formats agreed in the project
                  scope. We will notify you promptly if we anticipate any
                  material deviation from the agreed timeline. Each project
                  includes up to two rounds of revisions within the agreed
                  scope. Additional revisions or changes to the project scope
                  may be subject to additional fees agreed in writing.
                </p>
              </div>

              {/* Section 3 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  3. Payment Terms
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Payment terms are as follows:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "A deposit of 50% of the total project fee is due before work commences. Work will not begin until the deposit is received.",
                    "The remaining 50% is due upon project completion, prior to delivery of final files and/or live deployment.",
                    "All invoices are issued in EUR and are payable within 14 days of the invoice date unless otherwise agreed in writing.",
                    "Late payments (beyond 14 days) may incur interest charges at a rate of 8% per annum above the European Central Bank base rate, in accordance with EU Late Payment Directive 2011/7/EU.",
                    "All prices are exclusive of VAT. VAT will be applied at the applicable rate according to applicable EU rules.",
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
                  4. Cancellation Policy
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Either party may cancel a project by providing written notice.
                  The following conditions apply:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "Cancellation before project commencement: the deposit will be refunded in full, minus any third-party costs already incurred on your behalf.",
                    "Cancellation after project commencement but before delivery: you will be charged for work completed to date, calculated on a pro-rata basis. The deposit may be applied against this charge. Any remaining balance will be refunded or invoiced accordingly.",
                    "Cancellation after delivery of final files: no refund will be issued. The final payment remains due in full.",
                    "stfd studio reserves the right to cancel a project if the Client fails to provide required materials or payment within 14 days of a written request. In such cases, charges for completed work apply.",
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
                  5. Intellectual Property
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Upon receipt of full and final payment, the Client is granted
                  full ownership of all final deliverables produced specifically
                  for their project, including but not limited to website files,
                  design assets, and brand materials. This transfer of ownership
                  is absolute and irrevocable.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The following shall remain the sole property of stfd studio
                  and are not included in the deliverables:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "Proprietary tools, frameworks, templates, processes, and methodologies developed by stfd studio.",
                    "Pre-existing intellectual property, code libraries, or design systems owned by stfd studio that are incorporated into the project (a perpetual, non-exclusive licence to use such elements within the delivered project is granted).",
                    "Any work product for which full payment has not been received.",
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
                  The Client warrants that any materials, content, images, or
                  other assets provided to stfd studio for use in the project do
                  not infringe the intellectual property rights of any third
                  party. The Client indemnifies stfd studio against any claims,
                  damages, or costs arising from such infringement.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Unless the Client expressly requests otherwise in writing,
                  stfd studio reserves the right to display completed work in
                  its portfolio and to reference the Client as a past client.
                </p>
              </div>

              {/* Section 6 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  6. Client Responsibilities
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The Client agrees to:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "Provide all required materials, content, access credentials, and feedback in a timely manner.",
                    "Nominate a single point of contact with authority to provide approvals and decisions.",
                    "Review and provide feedback on deliverables within the timeframes specified in the project brief.",
                    "Ensure all content and materials provided to stfd studio are lawful, accurate, and owned by the Client or licenced for the intended use.",
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

              {/* Section 7 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  7. Limitation of Liability
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  To the fullest extent permitted by applicable law:
                </p>
                <ul className="flex flex-col gap-3 pl-4">
                  {[
                    "stfd studio's total aggregate liability to the Client for any claims arising under or in connection with a project shall not exceed the total fees paid by the Client for that project.",
                    "stfd studio shall not be liable for any indirect, consequential, incidental, special, or punitive damages, including loss of profits, loss of revenue, loss of data, or loss of business opportunity, even if stfd studio has been advised of the possibility of such damages.",
                    "stfd studio makes no warranties, express or implied, regarding the fitness of deliverables for a particular purpose, or that the website will achieve specific business outcomes, conversion rates, or search engine rankings.",
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
                  Nothing in these Terms limits or excludes liability for death
                  or personal injury caused by negligence, fraud or fraudulent
                  misrepresentation, or any other liability that cannot be
                  excluded by law.
                </p>
              </div>

              {/* Section 8 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  8. Confidentiality
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Both parties agree to keep confidential any proprietary or
                  sensitive information disclosed during the course of a project.
                  This obligation survives termination of the project. Neither
                  party shall disclose confidential information to any third
                  party without the prior written consent of the other party,
                  except as required by law or regulation.
                </p>
              </div>

              {/* Section 9 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  9. Amendments
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  stfd studio reserves the right to amend these Terms at any
                  time. Updated Terms will be published on this page with a
                  revised &ldquo;last updated&rdquo; date. Changes take effect
                  for new projects initiated after publication. Ongoing projects
                  are governed by the Terms in effect at the time of agreement.
                </p>
              </div>

              {/* Section 10 */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-light text-foreground">
                  10. Contact
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  For questions about these Terms, please contact:
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
