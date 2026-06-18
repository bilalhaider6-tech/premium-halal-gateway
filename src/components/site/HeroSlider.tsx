import { useEffect, useState } from "react";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";
import slide5 from "@/assets/hero-slide-5.jpg";

const slides = [
  { src: slide1, alt: "Premium halal beef cuts", caption: "Premium Halal Meat" },
  { src: slide2, alt: "International cargo ship", caption: "Direct Global Import" },
  { src: slide3, alt: "Cold-chain logistics", caption: "Cold-Chain Logistics" },
  { src: slide4, alt: "Meat processing facility", caption: "Processing & Quality Control" },
  { src: slide5, alt: "Retail meat counter", caption: "Retail & Food Service Supply" },
];

const INTERVAL = 5000;

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-primary-foreground/15 shadow-elegant">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={s.src}
            alt={s.alt}
            className="h-full w-full object-cover"
            style={{
              transform: i === active ? "scale(1.06)" : "scale(1)",
              transition: "transform 7s ease-out",
            }}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Dark green brand overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.32 0.07 158 / 0.55) 0%, oklch(0.22 0.05 158 / 0.65) 100%)",
            }}
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-2 md:bottom-5 md:right-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full bg-primary-foreground/40 transition-all hover:bg-primary-foreground/80"
            style={{ width: i === active ? 28 : 10, background: i === active ? "oklch(0.92 0.04 158)" : undefined }}
          />
        ))}
      </div>
    </div>
  );
}
