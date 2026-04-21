import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SearchBar } from "@/components/site/SearchBar";
import { Features } from "@/components/site/Features";
import { Destinations } from "@/components/site/Destinations";
import { Packages } from "@/components/site/Packages";
import { CustomTripBanner } from "@/components/site/CustomTripBanner";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tournexa — Explore More. Connect Deeper." },
      { name: "description", content: "Discover handpicked travel journeys across Sikkim, Andaman, Himachal, Bali and beyond. Personalized tours by Tournexa." },
      { property: "og:title", content: "Tournexa — Explore More. Connect Deeper." },
      { property: "og:description", content: "Handcrafted travel experiences that bring you closer to nature, culture and unforgettable moments." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SearchBar />
      <Features />
      <Destinations />
      <Packages />
      <CustomTripBanner />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
