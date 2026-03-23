"use client";

import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas, ShineBorder, TypeWriter } from "@/components/ui/hero-designali";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#FAFAF8]"
    >
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e5e0 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e0 1px, transparent 1px)
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
        className="absolute left-4 top-4 z-20 text-[#e5e5e0]"
        size={20}
        strokeWidth={1.5}
      />
      <Plus
        className="absolute right-4 top-4 z-20 text-[#e5e5e0]"
        size={20}
        strokeWidth={1.5}
      />
      <Plus
        className="absolute bottom-4 left-4 z-20 text-[#e5e5e0]"
        size={20}
        strokeWidth={1.5}
      />
      <Plus
        className="absolute bottom-4 right-4 z-20 text-[#e5e5e0]"
        size={20}
        strokeWidth={1.5}
      />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center gap-8 px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#111111]/10 bg-white/80 px-4 py-1.5 text-xs font-medium text-[#111111] shadow-sm backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
          AI-powered · 1-week delivery
        </div>

        {/* Main heading */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-[#111111] sm:text-6xl md:text-7xl lg:text-8xl">
            Your web identity.
          </h1>
          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-[#111111] sm:text-6xl md:text-7xl lg:text-8xl">
            Transformed.
          </h1>
          <h2 className="font-serif text-3xl font-light italic leading-tight tracking-tight text-[#111111]/50 sm:text-4xl md:text-5xl lg:text-6xl">
            in one week.
          </h2>
        </div>

        {/* TypeWriter */}
        <div className="font-sans text-base font-medium text-[#111111]/60 sm:text-lg">
          <TypeWriter
            strings={[
              "Web Design",
              "Brand Identity",
              "Landing Pages",
              "Digital Presence",
              "UX Design",
            ]}
          />
        </div>

        {/* Subtitle */}
        <p className="max-w-xl font-sans text-base leading-relaxed text-[#111111]/60 sm:text-lg">
          We design and build complete web identities for ambitious businesses —
          faster than anyone else.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link href="/inquire">
            <Button
              className="h-11 rounded-full bg-[#111111] px-7 font-sans text-sm font-medium text-white transition-opacity hover:bg-[#111111]/90 hover:opacity-90"
            >
              Start your project
            </Button>
          </Link>
          <Link href="/cases">
            <Button
              variant="outline"
              className="h-11 rounded-full border-[#111111]/20 bg-white/80 px-7 font-sans text-sm font-medium text-[#111111] backdrop-blur-sm hover:bg-white"
            >
              View our work
            </Button>
          </Link>
        </div>

        {/* Taking new projects indicator */}
        <div className="flex items-center gap-2 font-sans text-xs text-[#111111]/40">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
          Taking new projects
        </div>
      </div>

      {/* ShineBorder showcase card */}
      <div className="relative z-20 mt-16 w-full max-w-sm px-6">
        <ShineBorder
          borderRadius={16}
          borderWidth={1}
          duration={14}
          color={["#111111", "#888888", "#111111"]}
          className="bg-[#FAFAF8]"
        >
          <div className="flex w-full flex-col gap-3 px-2 py-2">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-[#111111]/40">
                stfd studio
              </span>
              <span className="rounded-full bg-[#111111]/5 px-2.5 py-0.5 font-sans text-xs text-[#111111]/60">
                2026
              </span>
            </div>
            <div className="h-px w-full bg-[#111111]/8" />
            <div className="flex flex-col gap-1">
              <span className="font-serif text-2xl font-light text-[#111111]">
                Web identity in a week.
              </span>
              <span className="font-sans text-xs text-[#111111]/50">
                AI-accelerated · brand-first · fixed timeline
              </span>
            </div>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
}
