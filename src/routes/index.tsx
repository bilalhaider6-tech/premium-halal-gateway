import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Award, ShieldCheck, Truck, Snowflake, Globe2, Handshake, ArrowRight, Star, Phone, FileText, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-meat.jpg";
import supplyImg from "@/assets/supply-chain.jpg";
import { products } from "@/lib/products";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/PageHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DBS Meat Ltd — UK Halal Meat Importer & Wholesale Supplier" },
      { name: "description", content: "Premium halal beef, lamb, mutton, chicken & frozen meat. UK wholesale supplier to retailers, QSR chains, manufacturers & food service. Request a quote today." },
      { property: "og:title", content: "DBS Meat Ltd — UK Halal Meat Wholesale Supplier" },
      { property: "og:description", content: "Premium halal meat imported from Pakistan. UK wholesale supplier to retailers, QSR, manufacturers & food service." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const trustBadges = [
  { icon: ShieldCheck, label: "Halal Certified" },
  { icon: Award, label: "UK Food Compliance" },
  { icon: Truck, label: "Nationwide Delivery" },
  { icon: Snowflake, label: "Cold-Chain Verified" },
  { icon: Globe2, label: "Direct Import" },
  { icon: Handshake, label: "Long-Term Partnerships" },
];

const whyUs = [
  { title: "Direct Import from Pakistan", body: "We control the supply chain end-to-end — from approved abattoirs to UK cold storage — eliminating middlemen and protecting your margins." },
  { title: "Consistent Wholesale Pricing", body: "Volume-based contracts and stable forward pricing help you plan menus, ranges and promotions with confidence." },
  { title: "Full Halal Certification", body: "Every consignment ships with independent halal certification and full traceability documentation for audit-ready compliance." },
  { title: "Reliable UK Delivery", body: "Temperature-controlled distribution across England, Scotland & Wales — daily, weekly or scheduled drops to suit your operation." },
];

const industries = [
  { title: "Retailers", body: "Branded and white-label meat ranges for independent stores and supermarket chains." },
  { title: "QSR Chains", body: "High-volume, spec-consistent supply for burger, kebab and chicken concepts." },
  { title: "Manufacturers", body: "Ingredient meat for ready meals, sausages, pies and prepared foods." },
  { title: "Food Service", body: "Restaurants, caterers and hotels — premium cuts on flexible delivery schedules." },
  { title: "Distributors", body: "Container loads and bulk pallets with full documentation for resale partners." },
  { title: "Hospitality", body: "Hotels and event caterers requiring consistent quality at scale." },
];

const testimonials = [
  { quote: "DBS Meat has become our default halal supplier across 14 stores. Pricing is stable, quality is consistent — exactly what a multi-site operator needs.", name: "Imran S.", role: "Procurement Director, UK Retail Group" },
  { quote: "Their cold-chain reliability is outstanding. In two years we've never had a missed delivery or a quality reject.", name: "Sarah K.", role: "Head of Supply, QSR Chain" },
  { quote: "Documentation is always on point. Halal certificates, traceability, BRC — everything ready for audit, every time.", name: "David M.", role: "Quality Manager, Ready-Meal Manufacturer" },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 15% 25%, oklch(0.62 0.14 158) 0, transparent 45%), radial-gradient(circle at 85% 75%, oklch(0.42 0.11 158) 0, transparent 50%)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/85">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-glow" />
              UK Halal Meat Wholesale
            </span>
            <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.04] tracking-tight text-balance md:text-6xl lg:text-[4.25rem]">
              Premium halal meat,
              <br />
              <span className="bg-gradient-to-r from-primary-foreground to-primary-glow bg-clip-text text-transparent">
                supplied at scale.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              DBS Meat Ltd is a UK-based importer and wholesale supplier of premium halal beef, lamb, mutton, chicken and frozen meat — sourced directly from Pakistan and delivered with British compliance and consistency.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-xl px-7 text-base font-semibold shadow-elegant">
                <Link to="/quote"><FileText className="h-5 w-5" /> Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-xl border-primary-foreground/30 bg-primary-foreground/5 px-7 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="tel:+442012345678"><Phone className="h-5 w-5" /> Call Now</a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-8 max-w-lg">
              <div>
                <div className="font-display text-3xl font-extrabold md:text-4xl"><Counter to={500} suffix="+" /></div>
                <p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/65">Business clients</p>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold md:text-4xl"><Counter to={15} suffix="+" /></div>
                <p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/65">Years experience</p>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold md:text-4xl"><Counter to={99} suffix="%" /></div>
                <p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/65">On-time delivery</p>
              </div>
            </div>
          </div>

          <div className="fade-up relative" style={{ animationDelay: "150ms" }}>
            <div className="relative overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-elegant">
              <img src={heroImg} alt="Premium halal beef cuts on slate" className="aspect-[4/5] w-full object-cover" width={1600} height={1024} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent p-6">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary-glow" />
                  <span className="font-semibold">100% Halal Certified · Fully Traceable</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-5 text-foreground shadow-elegant sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Trusted Supplier</p>
                  <p className="font-display text-base font-bold">UK · EU · Halal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-3 md:px-8 lg:grid-cols-6">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80">
              <b.icon className="h-5 w-5 shrink-0 text-primary" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Products</span>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                A complete halal meat range, ready for your business.
              </h2>
            </div>
            <Link to="/products" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View all products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link to="/products" className="group block hover-lift overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
                    <span className="rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary">Halal Certified</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs font-medium text-foreground/70">{p.availability}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Request Quote <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why DBS Meat Ltd</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Built for serious B2B buyers.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              From independent retailers to multi-site QSR chains, we deliver the consistency, documentation and pricing that professional buyers depend on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/about">About DBS Meat</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Industries We Serve</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Supplying every part of the UK food industry.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="hover-lift group h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold tracking-tight">{s.title}</h3>
                  <ArrowRight className="h-5 w-5 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/who-we-help" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            See all sectors we support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SUPPLY RELIABILITY */}
      <section className="bg-foreground py-20 text-background md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-background/10 shadow-elegant">
              <img src={supplyImg} alt="Modern cold storage warehouse" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow">Supply Reliability</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Cold-chain integrity from origin to your dock.
            </h2>
            <p className="mt-5 text-background/75">
              Our supply chain combines approved Pakistani abattoirs, sea-freight cold storage, UK customs clearance and temperature-controlled UK distribution — managed by a team that knows what "on time, in spec, in full" really means.
            </p>
            <ul className="mt-8 space-y-4">
              {["Approved halal abattoirs with EU export approval", "Full sea-freight cold-chain documentation", "UK bonded cold-storage facilities", "Daily temperature-controlled UK distribution"].map((l) => (
                <li key={l} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-glow" />
                  <span className="text-background/85">{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Client Trust</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              The UK food industry trusts DBS Meat.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="hover-lift flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card-soft">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" style={{ color: "var(--color-gold)" }} />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-foreground/90 leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
