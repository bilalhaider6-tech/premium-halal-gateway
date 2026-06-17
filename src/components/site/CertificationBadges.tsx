import { ShieldCheck, Award, BadgeCheck, Truck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "Halal Certified", sub: "100% Compliant" },
  { icon: Award, title: "UK Food Compliance", sub: "BRC & FSA Aligned" },
  { icon: BadgeCheck, title: "Quality Assured", sub: "ISO Standards" },
  { icon: Truck, title: "Reliable Supply Chain", sub: "Cold-Chain Verified" },
];

export function CertificationBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {badges.map((b) => (
        <div
          key={b.title}
          className={`group flex items-center gap-3 rounded-lg border p-3.5 transition-all duration-300 hover:-translate-y-0.5 ${
            isDark
              ? "border-background/15 bg-background/5 hover:bg-background/10 hover:border-background/25"
              : "border-border bg-card hover:border-primary/40 shadow-card-soft hover:shadow-elegant"
          }`}
        >
          <div
            className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-md ${
              isDark ? "bg-primary-glow/15 text-primary-glow" : "gradient-primary text-primary-foreground"
            }`}
          >
            <b.icon className="h-5 w-5" strokeWidth={2.25} />
          </div>
          <div className="min-w-0">
            <p className={`font-display text-sm font-bold leading-tight ${isDark ? "text-background" : "text-foreground"}`}>
              {b.title}
            </p>
            <p className={`mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] ${isDark ? "text-background/55" : "text-muted-foreground"}`}>
              {b.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
