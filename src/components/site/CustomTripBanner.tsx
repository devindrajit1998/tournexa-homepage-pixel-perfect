import { Send } from "lucide-react";
import illo from "@/assets/custom-trip-illustration.png";

export function CustomTripBanner() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-3xl bg-secondary/70 p-6 md:grid-cols-[200px_1fr_auto] md:p-10">
        <img src={illo} alt="Travel backpack illustration" loading="lazy" width={512} height={512} className="mx-auto h-40 w-40 object-contain" />
        <div className="text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Your Journey, Your Way</p>
          <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">Plan Your Own Journey</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us your dream destination and we'll craft a personalized experience just for you.
          </p>
        </div>
        <div className="flex items-center gap-3 justify-self-center md:justify-self-end">
          <Send className="hidden h-6 w-6 -rotate-12 text-primary md:block" />
          <button className="rounded-xl bg-dark-section px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            Customize My Trip
          </button>
        </div>
      </div>
    </section>
  );
}
