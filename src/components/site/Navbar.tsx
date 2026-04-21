import { MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const links = ["Home", "Destinations", "Packages", "Custom Trip", "About Us", "Contact"];

export function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-4 z-30 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-background/95 px-6 py-3 shadow-[var(--shadow-card)] backdrop-blur">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`relative text-sm font-medium transition-colors hover:text-primary ${i === 0 ? "text-primary" : "text-foreground"}`}
            >
              {l}
              {i === 0 && (
                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-6 rounded-full bg-primary" />
              )}
            </a>
          ))}
        </nav>
        <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-dark">
          <MessageCircle className="h-4 w-4" />
          Enquire Now
        </button>
      </div>
    </header>
  );
}
