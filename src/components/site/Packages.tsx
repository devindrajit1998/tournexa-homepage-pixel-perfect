import { Heart, Calendar, Settings2, ArrowRight } from "lucide-react";
import sikkim from "@/assets/pkg-sikkim.jpg";
import meghalaya from "@/assets/pkg-meghalaya.jpg";
import andaman from "@/assets/pkg-andaman.jpg";

const pkgs = [
  { tag: "Best Seller", title: "Sikkim Serenity Escape", duration: "5 Nights / 6 Days", price: "₹24,999", img: sikkim },
  { tag: "Popular", title: "Meghalaya Explorer", duration: "4 Nights / 5 Days", price: "₹22,499", img: meghalaya },
  { tag: "Trending", title: "Andaman Beach Getaway", duration: "5 Nights / 6 Days", price: "₹27,999", img: andaman },
];

export function Packages() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Handcrafted Experiences</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Handpicked Tour Packages</h2>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark md:inline-flex">
            View All Packages <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pkgs.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{p.tag}</span>
                <button aria-label="Add to wishlist" className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/95 text-foreground shadow transition hover:text-primary">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" />{p.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><Settings2 className="h-3.5 w-3.5 text-primary" />Customizable</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-extrabold text-foreground">{p.price}</span>
                    <span className="ml-1 text-xs text-muted-foreground">/ per person</span>
                  </div>
                  <button className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-dark">
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
