import { Link } from "react-router-dom";

const navLinks = [
  { label: "Work", href: "/cases" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Inquire", href: "/inquire" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex flex-col leading-none w-fit">
              <span className="font-serif text-xl font-semibold tracking-tight">
                stfd.
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                Studio
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
              Your web identity. Transformed in a week.
            </p>
            <p className="text-xs text-muted-foreground mt-auto">
              &copy; 2025 stfd studio
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
              Navigation
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
              Legal
            </p>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
            <p className="text-xs text-muted-foreground mt-auto pt-4">
              Made with AI ✦
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
