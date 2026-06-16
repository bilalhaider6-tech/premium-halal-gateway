import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ShieldCheck, Clock, Phone, FileText } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Wholesale Halal Meat Quote — DBS Meat Ltd" },
      { name: "description", content: "Get a tailored wholesale quote for halal beef, lamb, mutton, chicken or frozen meat. UK B2B supply within 24 hours." },
      { property: "og:title", content: "Request a Quote — DBS Meat Ltd" },
      { property: "og:description", content: "Tailored wholesale halal meat quotes for UK retailers, manufacturers, QSR chains and food service." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

const productOptions = ["Beef", "Lamb", "Mutton", "Chicken", "Frozen Meat", "Mixed / Other"];
const businessTypes = ["Retailer", "Manufacturer", "Food Service", "QSR Chain", "Distributor", "Wholesaler", "Hospitality", "Other"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().min(2, "Please enter your company").max(120),
  email: z.string().trim().email("Please enter a valid email").max(160),
  phone: z.string().trim().min(6, "Please enter a contact number").max(40),
  businessType: z.string().min(1, "Select your business type"),
  products: z.array(z.string()).min(1, "Select at least one product"),
  quantity: z.string().trim().min(1, "Estimated quantity required").max(80),
  notes: z.string().max(1000).optional(),
});

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [businessType, setBusinessType] = useState<string>("");

  const toggle = (p: string) =>
    setSelected((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      businessType,
      products: selected,
      quantity: String(fd.get("quantity") || ""),
      notes: String(fd.get("notes") || ""),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Please review the form");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <section className="mx-auto max-w-3xl px-4 py-24 text-center md:px-8 md:py-32">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full gradient-primary text-primary-foreground shadow-elegant">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="mt-8 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Quote request received.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Thank you. A member of our wholesale team will reply within 24 business hours with tailored pricing and availability. For urgent orders, please call us directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-xl">
              <a href="tel:+442012345678"><Phone className="h-5 w-5" /> Call +44 20 1234 5678</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        eyebrow="Request a Quote"
        title="Tailored wholesale pricing within 24 hours."
        description="Tell us what you need — we'll come back with pricing, availability and delivery options. No obligation, just straight answers from our wholesale team."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-card-soft md:p-10"
          >
            <h2 className="font-display text-2xl font-extrabold">Tell us about your business</h2>
            <p className="mt-1 text-sm text-muted-foreground">All fields marked * are required.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your name *</Label>
                <Input id="name" name="name" required maxLength={80} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" name="company" required maxLength={120} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Business email *</Label>
                <Input id="email" name="email" type="email" required maxLength={160} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" name="phone" type="tel" required maxLength={40} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Business type *</Label>
                <Select value={businessType} onValueChange={setBusinessType}>
                  <SelectTrigger><SelectValue placeholder="Select your business type" /></SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-8">
              <Label>Products required *</Label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {productOptions.map((p) => {
                  const checked = selected.includes(p);
                  return (
                    <label
                      key={p}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-sm font-medium transition-all ${
                        checked ? "border-primary bg-primary/5 text-primary" : "border-border bg-background hover:border-primary/40"
                      }`}
                    >
                      <Checkbox checked={checked} onCheckedChange={() => toggle(p)} />
                      {p}
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="quantity">Estimated quantity / frequency *</Label>
                <Input id="quantity" name="quantity" placeholder="e.g. 2 tonnes/month, 1 FCL container" required maxLength={80} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="notes">Additional requirements</Label>
                <Textarea id="notes" name="notes" rows={4} placeholder="Cut specs, delivery location, packaging, certifications…" maxLength={1000} />
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-8 w-full rounded-xl text-base font-semibold sm:w-auto">
              <FileText className="h-5 w-5" /> Submit Quote Request
            </Button>
          </form>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card-soft">
              <h3 className="font-display text-lg font-bold">What happens next</h3>
              <ul className="mt-4 space-y-4 text-sm">
                {[
                  { icon: Clock, text: "We review your requirements within 24 business hours." },
                  { icon: FileText, text: "You receive a tailored quote with pricing, availability and lead times." },
                  { icon: ShieldCheck, text: "Halal certification and full traceability documentation included." },
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <span className="leading-relaxed text-foreground/85">{s.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl gradient-primary p-6 text-primary-foreground shadow-elegant">
              <h3 className="font-display text-lg font-bold">Need to speak with us today?</h3>
              <p className="mt-2 text-sm text-primary-foreground/85">
                Our wholesale team is available Mon–Fri, 8:00am – 6:00pm UK time.
              </p>
              <a href="tel:+442012345678" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-primary shadow-card-soft">
                <Phone className="h-4 w-4" /> +44 20 1234 5678
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
