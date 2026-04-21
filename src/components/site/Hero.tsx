import { Compass, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[760px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Traveler overlooking mountain valley"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pt-32">
        <div className="max-w-2xl">
          <p className="font-script text-4xl text-hero-script">Explore More.</p>
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Connect Deeper.
          </h1>
          <p className="mt-5 max-w-md text-base text-foreground/75">
            Discover handpicked journeys designed to bring you closer to nature, culture, and unforgettable experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-dark">
              <Compass className="h-4 w-4" />
              Explore Tours
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/95 px-6 py-3 text-sm font-semibold text-foreground shadow-md backdrop-blur transition hover:bg-background">
              <MapPin className="h-4 w-4" />
              Plan Custom Trip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
