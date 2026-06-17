import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/dms-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/who-we-help", label: "Who We Help" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-card-soft"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logoAsset.url}
            alt="DMS Meat Supplier"
            className="h-11 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+442012345678"
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-accent md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            +44 20 1234 5678
          </a>
          <Button asChild size="sm" className="hidden md:inline-flex font-semibold">
            <Link to="/quote">Request Quote</Link>
          </Button>
          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-accent lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-accent"
                activeProps={{ className: "text-primary font-semibold bg-accent" }}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2 font-semibold">
              <Link to="/quote" onClick={() => setOpen(false)}>Request Quote</Link>
            </Button>
            <a
              href="tel:+442012345678"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-input px-4 py-2.5 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" /> Call +44 20 1234 5678
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
