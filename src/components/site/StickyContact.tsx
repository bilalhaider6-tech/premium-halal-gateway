import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, FileText } from "lucide-react";

export function StickyContact() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:bottom-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-border bg-background/95 p-1.5 shadow-elegant backdrop-blur-xl ring-1 ring-foreground/5">
        <a
          href="tel:+442012345678"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
        >
          <Phone className="h-4 w-4 text-primary" />
          <span className="hidden sm:inline">Call Now</span>
        </a>
        <Link
          to="/quote"
          className="inline-flex items-center gap-2 rounded-full gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card-soft transition-all hover:shadow-elegant hover:-translate-y-0.5"
        >
          <FileText className="h-4 w-4" />
          Request Quote
        </Link>
      </div>
    </div>
  );
}
