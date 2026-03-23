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
        {/* Essential */}
        <Card className="rounded-none ring-1 ring-border flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-2xl font-medium tracking-tight">
              Essential
            </CardTitle>
            <div className="pt-2">
              <span className="font-serif text-4xl font-light tracking-tight">
                €1,997
              </span>
            </div>
            <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
              Perfect for startups and solopreneurs who need a high-converting
              landing page, fast.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 gap-6">
            <ul className="flex flex-col gap-3">
              {[
                "Single landing page (up to 6 sections)",
                "Custom design — no templates",
                "Mobile-optimized & SEO ready",
                "5-day delivery",
                "1 round of revisions",
                "Next.js or Webflow delivery",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0 text-foreground"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <Button
                variant="outline"
                className="w-full rounded-none gap-2 h-9"
              >
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
                €3,997
              </span>
            </div>
            <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
              For growing businesses ready for a complete web presence that
              reflects their brand.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 gap-6">
            <ul className="flex flex-col gap-3">
              {[
                "Up to 8 pages",
                "Full brand alignment & custom UI system",
                "Copywriting guidance included",
                "CMS integration (Sanity or Notion)",
                "7-day delivery",
                "2 rounds of revisions",
                "Dedicated Slack channel",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0 text-foreground"
                  />
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

        {/* Brand+ */}
        <Card className="rounded-none ring-1 ring-border flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-2xl font-medium tracking-tight">
              Brand+
            </CardTitle>
            <div className="pt-2">
              <span className="font-serif text-4xl font-light tracking-tight">
                Custom
              </span>
            </div>
            <CardDescription className="text-sm text-muted-foreground leading-relaxed pt-1">
              Full brand identity plus website. The complete transformation
              package.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 gap-6">
            <ul className="flex flex-col gap-3">
              {[
                "Full brand identity system (logo, colors, typography)",
                "Up to 12 pages",
                "Custom animations & interactions",
                "Priority support & handoff",
                "7-day delivery",
                "Unlimited revisions for 30 days",
                "Quarterly strategy call",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    size={15}
                    className="mt-0.5 shrink-0 text-foreground"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-2">
              <Button
                variant="outline"
                className="w-full rounded-none gap-2 h-9"
              >
                Book a call
                <PhoneCall size={15} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
