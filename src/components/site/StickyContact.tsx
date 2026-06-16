import { Link } from "@tanstack/react-router";
import { Phone, FileText } from "lucide-react";

export function StickyContact() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:bottom-6">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-background/90 p-1.5 shadow-elegant backdrop-blur-xl">
        <a
          href="tel:+442012345678"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
        >
          <Phone className="h-4 w-4 text-primary" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
        <Link
          to="/quote"
          className="inline-flex items-center gap-2 rounded-full gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card-soft hover:opacity-95"
        >
          <FileText className="h-4 w-4" />
          Request Quote
        </Link>
      </div>
    </div>
  );
}
