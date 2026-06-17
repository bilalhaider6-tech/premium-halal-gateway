import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { CertificationBadges } from "./CertificationBadges";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24">
        <div className="mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-glow">
            Accreditations & Compliance
          </p>
          <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            Audit-ready supply you can stand behind.
          </h3>
          <div className="mt-6">
            <CertificationBadges variant="dark" />
          </div>
        </div>

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-extrabold text-lg">
                D
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-extrabold tracking-tight">DBS Meat Ltd</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-glow">Premium Halal Supply</span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-background/70">
              UK-based importer and wholesale supplier of premium halal meat sourced directly from Pakistan. Trusted by retailers, manufacturers and QSR chains nationwide.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-background/90">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li><Link to="/about" className="transition-colors hover:text-background">About Us</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-background">Products</Link></li>
              <li><Link to="/who-we-help" className="transition-colors hover:text-background">Who We Help</Link></li>
              <li><Link to="/quote" className="transition-colors hover:text-background">Request a Quote</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-background">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-background/90">Products</h4>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li><Link to="/products" className="transition-colors hover:text-background">Premium Beef</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-background">Lamb &amp; Mutton</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-background">Chicken</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-background">Frozen Meat</Link></li>
              <li><Link to="/products" className="transition-colors hover:text-background">Halal Certified</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-background/90">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <a href="tel:+442012345678" className="transition-colors hover:text-background">+44 20 1234 5678</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <a href="mailto:sales@dbsmeat.co.uk" className="transition-colors hover:text-background">sales@dbsmeat.co.uk</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <span className="leading-relaxed">Unit 14, Cold Storage Park, London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-8 text-xs text-background/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DBS Meat Ltd. All rights reserved. Halal certified · UK Food Compliance.</p>
          <p>Company No. 12345678 · Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  );
}
