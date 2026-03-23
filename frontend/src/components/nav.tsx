import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Work", href: "/cases" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/inquire" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 leading-none group">
          <span className="font-serif text-xl font-semibold tracking-tight">
            stfd.
          </span>
          <span className="w-px h-[14px] bg-foreground/20 self-center" />
          <span className="text-[9px] tracking-[0.35em] uppercase text-muted-foreground self-center pb-px">
            Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-none bg-brand text-brand-foreground hover:bg-brand/90 border-0">
            <Link to="/inquire">Start a project</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild size="sm" className="rounded-none w-full bg-brand text-brand-foreground hover:bg-brand/90 border-0">
                <Link to="/inquire" onClick={() => setMobileOpen(false)}>
                  Start a project
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
