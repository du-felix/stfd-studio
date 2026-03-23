import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { cases } from "@/data/cases";
import { ArrowUpRight } from "lucide-react";

export default function Cases() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Header */}
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between py-6 border-b border-border">
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground/60">
                Work
              </span>
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground/60">
                {cases.length} projects — 2025–2026
              </span>
            </div>

            <div className="py-16 md:py-24">
              <h1
                className="font-serif leading-[0.88] font-light tracking-tight text-foreground"
                style={{ fontSize: "clamp(3rem, 13vw, 9rem)" }}
              >
                Selected
                <br />
                <em>work.</em>
              </h1>
            </div>
          </div>
        </section>

        {/* Cases list */}
        <section className="bg-background">
          <div className="max-w-6xl mx-auto px-6">
            {cases.map((c) => (
              <Link
                key={c.id}
                to={`/cases/${c.slug}`}
                className="block group border-b border-border"
                onMouseEnter={() => setHoveredId(c.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-[4rem_1fr_auto] gap-x-4 md:gap-x-8 gap-y-4 items-start">
                  {/* Index number */}
                  <div className="flex items-start pt-1 md:pt-2.5">
                    <span
                      className="font-sans text-[10px] tracking-[0.25em] transition-colors duration-200"
                      style={{
                        color: hoveredId === c.id ? c.accentColor : "hsl(var(--muted-foreground) / 0.35)",
                      }}
                    >
                      {String(c.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title + meta */}
                  <div className="flex flex-col gap-3">
                    <h2
                      className="font-serif font-light tracking-tight leading-[0.92] transition-colors duration-200"
                      style={{
                        fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                        color: hoveredId === c.id ? "hsl(var(--foreground))" : "hsl(var(--foreground) / 0.85)",
                      }}
                    >
                      {c.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                      <span className="font-sans text-xs text-muted-foreground">
                        {c.category}
                      </span>
                      <span className="w-px h-3 bg-border" />
                      <div className="flex flex-wrap gap-2">
                        {c.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xl mt-2">
                      {c.brief.headline}
                    </p>
                  </div>

                  {/* Year + arrow */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:pt-2.5">
                    <span className="font-sans text-xs text-muted-foreground/40 tracking-widest">
                      {c.year}
                    </span>
                    <div
                      className="w-8 h-8 border border-border flex items-center justify-center transition-all duration-200"
                      style={{
                        borderColor: hoveredId === c.id ? c.accentColor : undefined,
                        backgroundColor: hoveredId === c.id ? c.accentColor : undefined,
                        color: hoveredId === c.id ? "#111" : "hsl(var(--muted-foreground) / 0.4)",
                      }}
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer CTA strip */}
        <section className="py-14 md:py-20 border-t border-border bg-foreground">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/40 mb-4">
                Ready?
              </p>
              <h2 className="font-serif text-4xl font-light text-white md:text-5xl leading-tight">
                Your project could<br />live here next.
              </h2>
            </div>
            <Link
              to="/inquire"
              className="inline-flex flex-wrap items-center gap-2 font-sans text-sm border px-6 h-11 transition-colors hover:bg-brand hover:border-brand hover:text-brand-foreground shrink-0"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
            >
              Start a project <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
