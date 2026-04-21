import { ArrowRight } from "lucide-react";
import sikkim from "@/assets/dest-sikkim.jpg";
import andaman from "@/assets/dest-andaman.jpg";
import himachal from "@/assets/dest-himachal.jpg";
import bali from "@/assets/dest-bali.jpg";

const dests = [
  { name: "Sikkim & North East", img: sikkim },
  { name: "Andaman & Nicobar", img: andaman },
  { name: "Himachal Pradesh", img: himachal },
  { name: "Bali & International", img: bali },
];

export function Destinations() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Explore the World</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Popular Destinations</h2>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark md:inline-flex">
            View All Destinations <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dests.map((d) => (
            <a key={d.name} href="#" className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img src={d.img} alt={d.name} loading="lazy" width={640} height={800} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <h3 className="max-w-[70%] text-lg font-bold leading-tight text-white">{d.name}</h3>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:bg-primary-dark">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
