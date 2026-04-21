import { Compass, Phone } from "lucide-react";
import bg from "@/assets/cta-mountains.jpg";

export function FinalCTA() {
  return (
    <section className="px-6 pt-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-t-3xl">
        <img src={bg} alt="" loading="lazy" width={1920} height={512} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-dark-section/80" />
        <div className="relative flex flex-col items-center justify-between gap-5 p-8 md:flex-row md:p-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white md:text-3xl">Ready to Start Your Journey?</h3>
            <p className="mt-1 text-sm text-white/75">Let's make your next trip unforgettable!</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark">
              <Compass className="h-4 w-4" /> Explore Tours
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-dark-section transition hover:bg-white/90">
              <Phone className="h-4 w-4" /> Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
