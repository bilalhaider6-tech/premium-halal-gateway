import beefImg from "@/assets/cat-beef.jpg";
import lambImg from "@/assets/cat-lamb.jpg";
import muttonImg from "@/assets/cat-mutton.jpg";
import chickenImg from "@/assets/cat-chicken.jpg";
import frozenImg from "@/assets/cat-frozen.jpg";
import halalImg from "@/assets/cat-halal.jpg";

export const products = [
  {
    slug: "beef",
    name: "Premium Beef",
    tagline: "Grass-fed, hand-cut, fully traceable",
    image: beefImg,
    details: "Whole cuts, primals, diced & minced beef from approved Pakistani slaughterhouses. Available chilled or frozen for retail, manufacturing and food service.",
    availability: "In stock · Year-round supply",
  },
  {
    slug: "lamb",
    name: "Premium Lamb",
    tagline: "Tender, lean, signature flavour",
    image: lambImg,
    details: "Whole carcasses, racks, chops, leg, shoulder, and diced lamb. Consistent grading and weight specs for QSR, retail and butchery.",
    availability: "In stock · Weekly shipments",
  },
  {
    slug: "mutton",
    name: "Premium Mutton",
    tagline: "Rich flavour, mature cuts",
    image: muttonImg,
    details: "Bone-in and boneless mutton for ethnic retailers, restaurants and ready-meal manufacturers. Custom cuts on request.",
    availability: "In stock · Bulk pricing available",
  },
  {
    slug: "chicken",
    name: "Premium Chicken",
    tagline: "Whole birds, portions & fillets",
    image: chickenImg,
    details: "Whole chicken, breast, thigh, drumstick, wings, and IQF portions. High-volume capacity for QSR chains and food manufacturers.",
    availability: "In stock · Daily fresh & frozen",
  },
  {
    slug: "frozen",
    name: "Frozen Meat",
    tagline: "IQF, vacuum-packed, cold-chain certified",
    image: frozenImg,
    details: "Individually quick-frozen and bulk-frozen products maintained -18°C throughout the supply chain. Long shelf life, full traceability.",
    availability: "Container loads · LCL & FCL",
  },
  {
    slug: "halal-certified",
    name: "Halal Certified Range",
    tagline: "Hand-slaughtered · Independently certified",
    image: halalImg,
    details: "Every product is fully halal certified by accredited authorities, with documentation supplied per consignment for compliance audits.",
    availability: "All products · 100% halal",
  },
] as const;

export type Product = (typeof products)[number];
