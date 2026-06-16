import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CTASection } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Halal Beef, Lamb, Mutton, Chicken & Frozen Meat | DBS Meat" },
      { name: "description", content: "Wholesale halal beef, lamb, mutton, chicken and frozen meat for UK retailers, manufacturers, QSR chains and food service. Request a quote." },
      { property: "og:title", content: "Halal Meat Products — DBS Meat Ltd" },
      { property: "og:description", content: "Premium halal beef, lamb, mutton, chicken and frozen meat — wholesale supply for UK businesses." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Products"
        title="A complete halal meat range, supplied at wholesale scale."
        description="Premium beef, lamb, mutton and chicken — chilled, fresh or IQF frozen. Every product fully halal certified, fully traceable and ready for UK retailers, QSR chains, manufacturers and food service operators."
      >
        <Button asChild size="lg" className="rounded-xl">
          <Link to="/quote"><FileText className="h-5 w-5" /> Request Pricing</Link>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="space-y-16">
          {products.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={p.slug}>
                <article className="grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft md:grid-cols-2 md:gap-0">
                  <div className={`relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto ${reverse ? "md:order-2" : ""}`}>
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                    <span className="absolute left-5 top-5 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary">
                      Halal Certified
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Category {String(i + 1).padStart(2, "0")}</span>
                    <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{p.name}</h2>
                    <p className="mt-2 text-base font-medium text-foreground/70">{p.tagline}</p>
                    <p className="mt-5 leading-relaxed text-muted-foreground">{p.details}</p>
                    <ul className="mt-6 space-y-2.5 text-sm">
                      <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Custom cuts and pack sizes</li>
                      <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Full halal certification per consignment</li>
                      <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-primary" /> {p.availability}</li>
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild className="rounded-xl">
                        <Link to="/quote">Request Quote <ArrowRight className="h-4 w-4" /></Link>
                      </Button>
                      <Button asChild variant="outline" className="rounded-xl">
                        <Link to="/contact">Talk to Sales</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
