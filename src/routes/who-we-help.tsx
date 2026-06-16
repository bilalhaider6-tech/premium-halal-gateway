import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Store, Factory, UtensilsCrossed, Hamburger, Truck, Warehouse, Hotel, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/who-we-help")({
  head: () => ({
    meta: [
      { title: "Who We Help — Retailers, QSR, Manufacturers & Food Service | DBS Meat" },
      { name: "description", content: "DBS Meat Ltd supplies halal meat to UK retailers, manufacturers, QSR chains, distributors, wholesalers, food service and hospitality businesses." },
      { property: "og:title", content: "Who We Help — DBS Meat Ltd" },
      { property: "og:description", content: "Halal meat wholesale supply for UK retailers, QSR chains, manufacturers, distributors and hospitality businesses." },
      { property: "og:url", content: "/who-we-help" },
    ],
    links: [{ rel: "canonical", href: "/who-we-help" }],
  }),
  component: WhoWeHelpPage,
});

const sectors = [
  { icon: Store, title: "Retailers", body: "Independent halal stores and supermarket groups — consistent supply, white-label options, and ranges your customers come back for.", points: ["Custom pack sizes & branding", "Daily and weekly drops", "Promotional volume planning"] },
  { icon: Factory, title: "Manufacturers", body: "Ingredient-grade meat for ready meals, sausages, pies and prepared food production lines.", points: ["Spec-tight cuts and grading", "Bulk and IQF formats", "Contracted forward pricing"] },
  { icon: UtensilsCrossed, title: "Food Service Companies", body: "Caterers, dark kitchens and central production units that need reliable halal supply at scale.", points: ["Flexible delivery schedules", "Portion-controlled cuts", "Cold-chain documentation"] },
  { icon: Hamburger, title: "QSR Chains", body: "Multi-site burger, kebab, chicken and grill brands depend on us for spec consistency across every store.", points: ["National rollout support", "Multi-DC delivery", "Promo capacity planning"] },
  { icon: Truck, title: "Distributors", body: "Container loads and pallet quantities with full export documentation for resale partners.", points: ["FCL and LCL options", "Full halal & traceability docs", "Stable lead times"] },
  { icon: Warehouse, title: "Wholesalers", body: "Cash & carry and B2B wholesalers needing dependable inbound supply of premium halal meat.", points: ["Competitive trade pricing", "Mixed-load flexibility", "Year-round availability"] },
  { icon: Hotel, title: "Hospitality Businesses", body: "Hotels, event caterers and conference venues that require premium halal options at scale.", points: ["Premium cut selection", "Event volume planning", "Discreet, on-time delivery"] },
];

function WhoWeHelpPage() {
  return (
    <div>
      <PageHero
        eyebrow="Who We Help"
        title="Trusted by the businesses that feed Britain."
        description="From single-site butchers to nationwide QSR chains, DBS Meat supplies premium halal meat to every part of the UK food industry — with the documentation, consistency and capacity each sector needs."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="hover-lift group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-5 space-y-2 text-sm text-foreground/85">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/quote" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
