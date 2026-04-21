import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin, Heart } from "lucide-react";

const quick = ["Home", "Destinations", "Packages", "Custom Trip", "About Us", "Contact"];
const tops = ["Sikkim & North East", "Andaman & Nicobar", "Himachal Pradesh", "Kerala", "Bali & International"];
const support = ["FAQ", "Terms & Conditions", "Privacy Policy", "Cancellation Policy"];

export function Footer() {
  return (
    <footer className="bg-dark-section px-6 pb-8 pt-12 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary">
              <span className="text-lg font-extrabold text-primary">T</span>
            </div>
            <div className="text-xl font-extrabold">
              <span className="text-white">Tour</span>
              <span className="text-primary">nexa</span>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            We create journeys that bring you closer to nature, culture and unforgettable experiences.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links" items={quick} />
        <FooterCol title="Top Destinations" items={tops} />

        <div>
          <h4 className="text-sm font-bold text-white">Support</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            {support.map((s) => <li key={s}><a href="#" className="hover:text-primary">{s}</a></li>)}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">
        <div className="grid gap-4 text-sm text-white/65 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98745 67890</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@tournexa.com</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Kolkata, West Bengal, India</div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs text-white/55 md:flex-row">
          <span>© 2024 Tournexa. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5"><Heart className="h-3.5 w-3.5 fill-primary text-primary" /> Travel More. Live More.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-white">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-white/65">
        {items.map((i) => <li key={i}><a href="#" className="hover:text-primary">{i}</a></li>)}
      </ul>
    </div>
  );
}
