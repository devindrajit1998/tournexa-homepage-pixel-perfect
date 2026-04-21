import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const reviews = [
  { text: "Tournexa made our trip so smooth and memorable. The team planned everything perfectly. Highly recommended!", name: "Priya Sharma", loc: "Kolkata", img: a1 },
  { text: "Amazing experience with Tournexa! From hotels to transport, everything was top-notch.", name: "Rahul Verma", loc: "Delhi", img: a2 },
  { text: "The best travel decisions we made! We felt connected to nature and enjoyed every moment.", name: "Ananya & Saurav", loc: "Bangalore", img: a3 },
];

export function Testimonials() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Travelers Love Us</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">What Our Travelers Say</h2>
          </div>
          <div className="flex gap-2">
            <button aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-secondary">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary-dark">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-muted-foreground/40" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">{r.text}</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.loc}</div>
                </div>
                <img src={r.img} alt={r.name} loading="lazy" width={512} height={512} className="h-10 w-10 rounded-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
