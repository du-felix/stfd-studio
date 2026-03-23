import { useParams, Link, Navigate } from "react-router-dom";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { cases } from "@/data/cases";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function CaseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const caseIndex = cases.findIndex((c) => c.slug === slug);
  const c = cases[caseIndex];

  if (!c) return <Navigate to="/cases" replace />;


  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Hero */}
        <section
          className="border-b border-border"
          style={{ backgroundColor: c.accentColor + "12" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumb bar */}
            <div className="flex items-center justify-between py-3 sm:py-5 border-b border-border/40">
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={12} />
                All work
              </Link>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">
                {String(c.id).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
              </span>
            </div>

            {/* Client name — oversized editorial title */}
            <div className="pt-10 pb-8 md:pt-20 md:pb-16">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground/60 mb-6">
                {c.category} — {c.year}
              </p>
              <h1
                className="font-serif font-light tracking-tight leading-[0.88]"
                style={{ fontSize: "clamp(2.5rem, 10vw, 9rem)" }}
              >
                {c.title}
              </h1>
            </div>

            {/* Meta strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-8 border-t border-border/40">
              <div>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">
                  Client
                </p>
                <p className="font-sans text-sm text-foreground">{c.client}</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">
                  Year
                </p>
                <p className="font-sans text-sm text-foreground">{c.year}</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">
                  Category
                </p>
                <p className="font-sans text-sm text-foreground">{c.category}</p>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-2">
                  {c.url ? "Live site" : "Scope"}
                </p>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-sans text-sm text-foreground hover:opacity-70 transition-opacity"
                  >
                    {c.url.replace("https://", "")}
                    <ArrowUpRight size={12} className="shrink-0" />
                  </a>
                ) : (
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {c.scope.slice(0, 2).join(", ")}
                    {c.scope.length > 2 && ` +${c.scope.length - 2} more`}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Cover — only shown for cases with real visuals */}
        {c.hasCover && <section
          className="w-full border-b border-border relative overflow-hidden"
          style={{
            background: c.slug === "hackyn"
              ? `linear-gradient(135deg, #020617 0%, #0c1a40 50%, #1e1b4b 100%)`
              : c.accentColor + "18",
            height: "60vh",
            minHeight: "320px",
            maxHeight: "500px",
          }}
        >
          {c.slug === "hackyn" && (
            <>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${c.accentColor}22 0%, transparent 70%)`,
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[10px] tracking-[0.35em] uppercase" style={{ color: c.accentColor + "99" }}>
                    hackyn.com
                  </span>
                  <span className="font-serif text-white/90 font-light" style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}>
                    Build the future in 48 hours.
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["AI & ML", "Climate", "FinTech", "Health", "Education"].map((track) => (
                    <span
                      key={track}
                      className="font-sans text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border"
                      style={{ borderColor: c.accentColor + "40", color: c.accentColor + "cc", backgroundColor: c.accentColor + "11" }}
                    >
                      {track}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="font-serif font-light"
              style={{
                fontSize: "clamp(5rem, 18vw, 16rem)",
                color: c.slug === "hackyn" ? c.accentColor + "25" : c.accentColor + "30",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {c.title.charAt(0)}
            </span>
          </div>
        </section>}

        {/* The Brief */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 md:gap-20">
              <div>
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground/50 mt-1">
                  The Brief
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="font-serif text-2xl font-light leading-snug text-foreground md:text-3xl lg:text-4xl">
                  {c.brief.headline}
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-[1.85] max-w-2xl">
                  {c.brief.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Typographic break */}
        <section
          className="py-14 md:py-20 border-b border-border"
          style={{ backgroundColor: "#111111" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="font-serif font-light italic leading-[1.05]"
              style={{
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                color: c.accentColor,
              }}
            >
              "{c.approach.headline}"
            </p>
          </div>
        </section>

        {/* The Approach */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 md:gap-20">
              <div>
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground/50 mt-1">
                  Our Approach
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-sans text-base text-muted-foreground leading-[1.85] max-w-2xl">
                  {c.approach.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights — project facts (used for cases with real data) */}
        {c.highlights && (
          <section className="border-b border-border" style={{ backgroundColor: c.accentColor + "08" }}>
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px border border-border divide-x-0">
                {c.highlights.map((h) => (
                  <div key={h.label} className="flex flex-col gap-1.5 px-5 py-6 border border-border">
                    <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted-foreground/50">
                      {h.label}
                    </span>
                    <span
                      className="font-serif text-xl font-light"
                      style={{ color: c.accentColor }}
                    >
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Outcomes */}
        <section className="py-20 md:py-28 border-b border-border bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 md:gap-20">
              <div>
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground/50 mt-1">
                  Outcomes
                </p>
              </div>
              <div className="flex flex-col gap-0">
                {c.outcomes.map((outcome, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-6 py-6 border-b border-border last:border-0"
                  >
                    <span
                      className="font-sans text-[9px] tracking-[0.25em] shrink-0 mt-1"
                      style={{ color: c.accentColor }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-sans text-sm text-foreground leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {c.testimonial && (
          <section className="py-20 md:py-28 border-b border-border">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 md:gap-20">
                <div>
                  <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground/50 mt-1">
                    In Their Words
                  </p>
                </div>
                <div>
                  <blockquote className="flex flex-col gap-6">
                    <p
                      className="font-serif font-light italic leading-snug text-foreground"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                    >
                      "{c.testimonial.quote}"
                    </p>
                    <footer>
                      <p className="font-sans text-sm text-foreground font-medium">
                        {c.testimonial.author}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground mt-1">
                        {c.testimonial.role}
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Full scope */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 md:gap-20">
              <div>
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground/50 mt-1">
                  Full Scope
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.scope.map((item) => (
                  <span
                    key={item}
                    className="font-sans text-xs px-3 py-1.5 border border-border text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/30 mb-5">
                Start a project
              </p>
              <h2 className="font-serif font-light text-white leading-[0.92]" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
                Have something that deserves this kind of attention?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center gap-4 md:pb-1">
              <Link
                to="/inquire"
                className="inline-flex items-center gap-2 font-sans text-sm px-6 h-11 transition-colors"
                style={{ backgroundColor: c.accentColor, color: "#111" }}
              >
                Start a project <ArrowUpRight size={14} />
              </Link>
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 font-sans text-sm text-white/40 hover:text-white transition-colors"
              >
                View all work <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
