import { MapPin, Calendar, Users, Search } from "lucide-react";

const fields = [
  { icon: MapPin, label: "Where to?", value: "Search destination" },
  { icon: Calendar, label: "Check In", value: "Select date" },
  { icon: Calendar, label: "Check Out", value: "Select date" },
  { icon: Users, label: "Travelers", value: "2 Travelers" },
];

export function SearchBar() {
  return (
    <div className="relative z-20 mx-auto -mt-16 max-w-7xl px-6">
      <div className="grid grid-cols-1 items-center gap-2 rounded-2xl bg-card p-3 shadow-[var(--shadow-elevated)] md:grid-cols-[repeat(4,1fr)_auto]">
        {fields.map((f) => (
          <div key={f.label} className="flex items-center gap-3 px-4 py-2">
            <f.icon className="h-5 w-5 text-primary" />
            <div className="leading-tight">
              <div className="text-xs font-semibold text-foreground">{f.label}</div>
              <div className="text-xs text-muted-foreground">{f.value}</div>
            </div>
          </div>
        ))}
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark">
          Search Tours
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
