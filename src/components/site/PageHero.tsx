import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.62 0.14 158) 0, transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.42 0.11 158) 0, transparent 45%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        {eyebrow && (
          <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="relative overflow-hidden rounded-xl gradient-primary p-8 text-primary-foreground shadow-elegant md:p-14">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Ready to source premium halal meat for your business?
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Get a tailored wholesale quote within 24 hours. Competitive pricing, reliable supply, full UK food compliance.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center rounded-xl bg-background px-6 py-4 text-base font-semibold text-primary shadow-card-soft hover:bg-background/90"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+442012345678"
              className="inline-flex items-center justify-center rounded-xl border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              Call +44 20 1234 5678
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
