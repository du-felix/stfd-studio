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
    </div>
  );
}
