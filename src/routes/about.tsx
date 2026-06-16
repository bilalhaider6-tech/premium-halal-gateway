import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Award, Globe2, ShieldCheck, Truck, Users, Leaf } from "lucide-react";
import supplyImg from "@/assets/supply-chain.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DBS Meat Ltd — UK Halal Meat Importer & Supplier" },
      { name: "description", content: "Learn about DBS Meat Ltd — UK-based halal meat importer with 15+ years of supply chain expertise, sourcing directly from Pakistan for British retailers, manufacturers and QSR chains." },
      { property: "og:title", content: "About DBS Meat Ltd" },
      { property: "og:description", content: "UK halal meat importer and wholesale supplier with deep supply chain expertise and a commitment to compliance and quality." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Compliance First", body: "Halal, BRC, HACCP and full UK food regulations — embedded in every shipment." },
  { icon: Award, title: "Premium Quality", body: "Hand-selected cuts and consistent grading you can build a brand around." },
  { icon: Truck, title: "Reliable Supply", body: "Stable forward contracts and resilient cold-chain logistics — no surprises." },
  { icon: Leaf, title: "Ethical Sourcing", body: "Partnerships with audited Pakistani abattoirs and welfare-aligned suppliers." },
];

const team = [
  { name: "Daniyal B. Siddiqui", role: "Managing Director", initials: "DS" },
  { name: "Aisha Khan", role: "Head of Procurement", initials: "AK" },
  { name: "James Whitford", role: "UK Logistics Lead", initials: "JW" },
  { name: "Hassan Raza", role: "Quality & Compliance", initials: "HR" },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About DBS Meat Ltd"
        title="A UK halal meat supplier built on trust, traceability and the long game."
        description="For over 15 years we've connected approved Pakistani producers with British retailers, manufacturers and food service buyers — and we've done it by treating every consignment, every customer and every certificate like our reputation depends on it. Because it does."
      >
        <Button asChild size="lg" className="rounded-xl">
          <Link to="/quote">Work With Us</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-xl border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </PageHero>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
              <img src={supplyImg} alt="DBS Meat cold storage facility" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Story</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              From a single import line to a national halal supply partner.
            </h2>
            <div className="mt-6 space-y-5 text-foreground/80 leading-relaxed">
              <p>
                DBS Meat Ltd was founded by a team of British-Pakistani professionals who saw a clear gap in the UK halal market: reliable, compliant, premium-grade meat supplied at wholesale scale — without the inconsistency that frustrated buyers for years.
              </p>
              <p>
                Today we operate dedicated cold storage in the UK, run forward-contracted shipping lanes from Pakistan, and supply hundreds of retailers, restaurants and manufacturers across England, Scotland and Wales.
              </p>
              <p>
                Our edge isn't just price. It's the discipline of a supply chain we control end-to-end — and a team that picks up the phone.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="font-display text-3xl font-extrabold text-primary"><Counter to={15} suffix="+" /></div>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Years trading</p>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-primary"><Counter to={500} suffix="+" /></div>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">B2B clients</p>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-primary"><Counter to={40} suffix="+" /></div>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">UK cities served</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-card-soft md:p-12 lg:grid-cols-2">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Mission</span>
                <h3 className="mt-3 font-display text-2xl font-extrabold md:text-3xl">
                  To set the standard for halal meat wholesale in the United Kingdom.
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We exist to give UK businesses a halal supply partner they don't have to worry about — one whose pricing, paperwork and product all show up as promised.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Vision</span>
                <h3 className="mt-3 font-display text-2xl font-extrabold md:text-3xl">
                  A reliable bridge between premium Pakistani producers and UK food buyers.
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  By controlling sourcing, certification, shipping and distribution as one connected operation, we make halal meat sourcing simpler and more dependable.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Values</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-5xl">What we won't compromise on.</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="hover-lift h-full rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Team</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-5xl">
                The people behind your supply.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Procurement specialists, logistics experts and compliance leads — working as one team to keep your shelves and kitchens full.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-7 text-center shadow-card-soft">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full gradient-primary text-primary-foreground font-display text-2xl font-extrabold">
                    {m.initials}
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
