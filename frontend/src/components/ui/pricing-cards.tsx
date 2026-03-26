import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {/* Launch */}
        <Card className="rounded-none ring-1 ring-border flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-2xl font-medium tracking-tight">
              Launch
            </CardTitle>
            <div className="pt-2">
              <span className="font-serif text-4xl font-light tracking-tight">
                CHF 1,490
              </span>
            </div>
            <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
              For startups that need a sharp landing page live before the next meeting.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 gap-6">
            <ul className="flex flex-col gap-3">
              {[
                "Single landing page, up to 5 sections",
                "No templates — built from scratch",
                "Mobile optimised + SEO ready",
                "Copy guidelines & suggestions included",
                "1 round of revisions",
                "30 days of free changes after launch",
                "5-day delivery",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check size={15} className="mt-0.5 shrink-0 text-foreground" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <Button variant="outline" className="w-full rounded-none gap-2 h-9">
                Start today
                <MoveRight size={15} />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Studio — most popular */}
        <Card className="rounded-none ring-1 ring-foreground shadow-2xl flex flex-col">
          <CardHeader className="pb-4">
            <div className="mb-2">
              <Badge className="rounded-none text-xs tracking-wide bg-foreground text-background border-0">
                Most Popular
              </Badge>
            </div>
            <CardTitle className="font-serif text-2xl font-medium tracking-tight">
              Studio
            </CardTitle>
            <div className="pt-2">
              <span className="font-serif text-4xl font-light tracking-tight">
                CHF 3,500
              </span>
            </div>
            <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
              For funded startups that need a complete web presence that matches their ambition.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 gap-6">
            <ul className="flex flex-col gap-3">
              {[
                "Up to 8 pages",
                "No templates — built from scratch",
                "Custom design system & brand alignment",
                "Mobile optimised + SEO ready",
                "Copy guidelines & suggestions included",
                "2 rounds of revisions",
                "30 days of free changes after launch",
                "7-day delivery",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check size={15} className="mt-0.5 shrink-0 text-foreground" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <Button className="w-full rounded-none gap-2 h-9">
                Start today
                <MoveRight size={15} />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Scale */}
        <Card className="rounded-none ring-1 ring-border flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-2xl font-medium tracking-tight">
              Scale
            </CardTitle>
            <div className="pt-2">
              <span className="font-serif text-4xl font-light tracking-tight">
                From CHF 6,000
              </span>
            </div>
            <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
              For companies that need a full site with advanced interactions and CMS.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 gap-6">
            <ul className="flex flex-col gap-3">
              {[
                "Up to 12 pages",
                "No templates — built from scratch",
                "Custom animations & interactions",
                "Custom design system & brand alignment",
                "CMS integration",
                "Copy guidelines & suggestions included",
                "2 rounds of revisions",
                "30 days of free changes after launch",
                "7-day delivery",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check size={15} className="mt-0.5 shrink-0 text-foreground" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <Button variant="outline" className="w-full rounded-none gap-2 h-9">
                Book a call
                <PhoneCall size={15} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Care — retainer section */}
      <div className="mt-20 pt-16 border-t border-border">
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Care</p>
              <h2 className="font-serif text-3xl font-light tracking-tight">Monthly retainer plans.</h2>
            </div>
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/60 shrink-0">
              Available exclusively to past stfd. clients
            </p>
          </div>
          <p className="font-sans text-sm text-muted-foreground max-w-xl">
            Keep your site in good hands after launch. Both plans are billed monthly, no lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl">
          {/* Keep — recommended */}
          <Card className="rounded-none ring-1 ring-foreground shadow-2xl flex flex-col">
            <CardHeader className="pb-4">
              <div className="mb-2">
                <Badge className="rounded-none text-xs tracking-wide bg-foreground text-background border-0">
                  Recommended
                </Badge>
              </div>
              <CardTitle className="font-serif text-2xl font-medium tracking-tight">
                Keep
              </CardTitle>
              <div className="pt-2 flex items-end gap-2.5">
                <span className="font-serif text-4xl font-light tracking-tight">CHF 189</span>
                <span className="font-sans text-sm text-muted-foreground mb-1">/ month</span>
              </div>
              <div className="pt-1">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-foreground/60 border border-foreground/20 px-2 py-0.5">
                  incl. hosting
                </span>
              </div>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-3">
                Your site stays fast, live, and in safe hands — hosting included.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-6">
              <ul className="flex flex-col gap-3">
                {[
                  "Hosting covered & fully managed",
                  "Uptime monitoring",
                  "Bug fixes & browser compatibility",
                  "Small content & copy updates",
                  "48h response time",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check size={15} className="mt-0.5 shrink-0 text-foreground" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Button className="w-full rounded-none gap-2 h-9">
                  Get in touch
                  <MoveRight size={15} />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Grow */}
          <Card className="rounded-none ring-1 ring-border flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-2xl font-medium tracking-tight">
                Grow
              </CardTitle>
              <div className="pt-2 flex items-end gap-2.5">
                <span className="font-serif text-4xl font-light tracking-tight">CHF 370</span>
                <span className="font-sans text-sm text-muted-foreground mb-1">/ month</span>
              </div>
              <div className="pt-1">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-foreground/60 border border-foreground/20 px-2 py-0.5">
                  incl. hosting
                </span>
              </div>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-3">
                For clients who want more — with a loyalty discount on every future project.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 gap-6">
              <ul className="flex flex-col gap-3">
                {[
                  { text: "Everything in Keep", highlight: false },
                  { text: "Hosting covered & fully managed", highlight: false },
                  { text: "50% off any future large-scale changes or new pages", highlight: true },
                  { text: "24h response time", highlight: false },
                ].map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2.5 text-sm">
                    <Check size={15} className="mt-0.5 shrink-0 text-foreground" />
                    {feature.highlight ? (
                      <span className="font-medium text-foreground">{feature.text}</span>
                    ) : (
                      <span>{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Button variant="outline" className="w-full rounded-none gap-2 h-9">
                  Get in touch
                  <MoveRight size={15} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
