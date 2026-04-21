import { Leaf, User, Users, BadgeCheck } from "lucide-react";

const items = [
  { icon: Leaf, title: "Nature-Centric Experiences", desc: "Reconnect with nature through curated journeys." },
  { icon: User, title: "Personalized Trips", desc: "Customized itineraries made just for you." },
  { icon: Users, title: "Group & Private Tours", desc: "Perfect for friends, families or solo travelers." },
  { icon: BadgeCheck, title: "Best Value Guarantee", desc: "Premium experiences at fair and transparent pricing." },
];

export function Features() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-3xl bg-secondary/60 p-10 md:p-14">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Travel With Tournexa</p>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Travel made meaningful</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-card p-6 text-center shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <i.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
