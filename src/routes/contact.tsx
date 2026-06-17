import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DBS Meat Ltd — UK Halal Meat Supplier" },
      { name: "description", content: "Contact DBS Meat Ltd for wholesale halal meat enquiries. Call +44 20 1234 5678, email sales@dbsmeat.co.uk or send us a message." },
      { property: "og:title", content: "Contact DBS Meat Ltd" },
      { property: "og:description", content: "Get in touch with our UK halal meat wholesale team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(5, "Please add a message").max(1000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Please review the form");
      return;
    }
    toast.success("Message sent — we'll be in touch shortly.");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Speak with our wholesale team."
        description="Whether you're scoping a new supply partner or need a fast quote on a specific cut, we're here to help. Real people, fast replies, straight answers."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                  <a href="tel:+442012345678" className="font-display text-lg font-bold text-foreground">+44 20 1234 5678</a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <a href="mailto:sales@dbsmeat.co.uk" className="font-display text-lg font-bold text-foreground">sales@dbsmeat.co.uk</a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card-soft">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Head Office</p>
                  <p className="font-display text-base font-bold leading-snug">Unit 14, Cold Storage Park<br />London, United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-card-soft">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Business Hours</p>
                  <p className="text-sm font-medium leading-relaxed">Mon – Fri · 8:00am – 6:00pm<br />Sat · 9:00am – 1:00pm<br />Sun · Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-card-soft md:p-10">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h2 className="font-display text-2xl font-extrabold">Send a message</h2>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">We aim to respond within one business day.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required maxLength={80} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required maxLength={160} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" type="tel" maxLength={40} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" rows={5} required maxLength={1000} />
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-8 w-full rounded-lg text-base font-semibold transition-all hover:-translate-y-0.5 hover:shadow-elegant sm:w-auto">
                Speak With Our Team
              </Button>
              {sent && <p className="mt-3 text-sm text-primary">Thanks — we'll be in touch shortly.</p>}
            </form>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-card-soft">
          <iframe
            title="DBS Meat Ltd Location"
            src="https://www.google.com/maps?q=London,UK&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
