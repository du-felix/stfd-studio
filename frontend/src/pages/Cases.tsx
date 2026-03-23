import { useState, useEffect } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

interface Case {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image?: string;
  url?: string;
}

const fallbackCases: Case[] = [
  {
    id: 1,
    title: "Meridian Capital",
    category: "Finance · Landing Page",
    year: "2026",
    description: "A high-converting landing page for a boutique investment firm. Clean, authoritative, conversion-focused.",
    image: "/placeholder-case-1.jpg",
  },
  {
    id: 2,
    title: "Bloom Studio",
    category: "Creative Agency · Full Site",
    year: "2026",
    description: "Full web presence for a Berlin-based creative agency. Editorial layout, expressive typography, dark mode.",
    image: "/placeholder-case-2.jpg",
  },
  {
    id: 3,
    title: "Arkade",
    category: "SaaS · Marketing Site",
    year: "2025",
    description: "Marketing site for a developer tool startup. Fast, modern, built to convert trial signups.",
    image: "/placeholder-case-3.jpg",
  },
  {
    id: 4,
    title: "Soleil",
    category: "E-commerce · Brand Identity",
    year: "2025",
    description: "Complete brand identity and Shopify storefront for a sustainable skincare brand.",
    image: "/placeholder-case-4.jpg",
  },
];

export default function Cases() {
  const [cases, setCases] = useState<Case[]>(fallbackCases);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/cases/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: Case[]) => {
        if (data && data.length > 0) {
          setCases(data);
        }
        setLoading(false);
      })
      .catch(() => {
        // Fallback to hardcoded cases
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Header */}
        <section className="py-24 lg:py-32 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Work</p>
            <h1 className="font-serif text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Selected projects.
            </h1>
          </div>
        </section>

        {/* Cases grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            {loading ? (
              <div className="flex items-center justify-center py-32">
                <span className="font-sans text-sm text-muted-foreground">Loading...</span>
              </div>
            ) : (
              <div className="flex flex-col">
                {cases.map((c, i) => (
                  <div
                    key={c.id}
                    className="group border-b border-border py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                  >
                    {/* Case image */}
                    <div className="aspect-video bg-muted overflow-hidden">
                      {c.image && (
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>

                    {/* Case info */}
                    <div className="flex flex-col gap-4 md:pt-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-sans text-xs text-muted-foreground/50 mb-2">
                            {String(i + 1).padStart(2, "0")} — {c.year}
                          </p>
                          <h2 className="font-serif text-3xl font-light tracking-tight text-foreground">
                            {c.title}
                          </h2>
                        </div>
                        {c.url && (
                          <a
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground/30 hover:text-foreground transition-colors mt-1"
                          >
                            <ArrowUpRight size={18} />
                          </a>
                        )}
                      </div>
                      <p className="font-sans text-sm text-muted-foreground">{c.category}</p>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
