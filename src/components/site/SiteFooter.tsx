import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground font-display font-extrabold text-lg">
                D
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-extrabold tracking-tight">DBS Meat Ltd</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary-glow">Premium Halal Supply</span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              UK-based importer and wholesale supplier of premium halal meat sourced directly from Pakistan. Trusted by retailers, manufacturers and QSR chains nationwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-background/70">
              <li><Link to="/about" className="hover:text-background">About Us</Link></li>
              <li><Link to="/products" className="hover:text-background">Products</Link></li>
              <li><Link to="/who-we-help" className="hover:text-background">Who We Help</Link></li>
              <li><Link to="/quote" className="hover:text-background">Request a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-background">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Products</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-background/70">
              <li><Link to="/products" className="hover:text-background">Premium Beef</Link></li>
              <li><Link to="/products" className="hover:text-background">Lamb &amp; Mutton</Link></li>
              <li><Link to="/products" className="hover:text-background">Chicken</Link></li>
              <li><Link to="/products" className="hover:text-background">Frozen Meat</Link></li>
              <li><Link to="/products" className="hover:text-background">Halal Certified</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <a href="tel:+442012345678" className="hover:text-background">+44 20 1234 5678</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <a href="mailto:sales@dbsmeat.co.uk" className="hover:text-background">sales@dbsmeat.co.uk</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <span>Unit 14, Cold Storage Park, London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-6 text-xs text-background/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DBS Meat Ltd. All rights reserved. Halal certified · UK Food Compliance.</p>
          <p>Company No. 12345678 · Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  );
}
