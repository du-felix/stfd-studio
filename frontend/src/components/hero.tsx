import { useEffect } from "react";
import { Link } from "react-router-dom";
import { renderCanvas } from "@/components/ui/hero-designali";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Canvas for wave/trail animation */}
      <canvas
        id="canvas"
        className="absolute inset-0 z-10"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Corner Plus icons */}
      <Plus
        className="absolute left-4 top-4 z-20 text-border"
        size={20}
        strokeWidth={1.5}
      />
      <Plus
        className="absolute right-4 top-4 z-20 text-border"
        size={20}
        strokeWidth={1.5}
      />
      <Plus
        className="absolute bottom-4 left-4 z-20 text-border"
        size={20}
        strokeWidth={1.5}
      />
      <Plus
        className="absolute bottom-4 right-4 z-20 text-border"
        size={20}
        strokeWidth={1.5}
      />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center gap-6 px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-border bg-white/80 px-4 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-brand" />
          AI-powered · 1-week delivery
        </div>

        {/* Main heading */}
        <div className="flex flex-col items-center gap-0">
          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Your web identity.
          </h1>
          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Transformed.
          </h1>
          <h2 className="font-serif text-3xl font-light italic leading-tight tracking-tight text-foreground/40 sm:text-4xl md:text-5xl lg:text-6xl">
            in one week.
          </h2>
        </div>

        {/* Subtitle */}
        <p className="max-w-lg font-sans text-sm leading-relaxed text-foreground/50 sm:text-base">
          We design and build complete web identities for ambitious businesses —
          faster than anyone else.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button asChild className="h-11 rounded-none bg-foreground px-7 font-sans text-sm font-medium text-background hover:bg-foreground/90">
            <Link to="/inquire">Start your project</Link>
          </Button>
          <Button asChild variant="outline" className="h-11 rounded-none border-border bg-white/80 px-7 font-sans text-sm font-medium text-foreground backdrop-blur-sm hover:bg-white">
            <Link to="/cases">View our work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
