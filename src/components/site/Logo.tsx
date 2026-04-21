export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary">
        <span className="text-lg font-extrabold text-primary">T</span>
        <svg viewBox="0 0 24 24" className="absolute -right-1 -top-1 h-3 w-3 fill-primary" aria-hidden>
          <path d="M2 12l20-10-7 20-3-9-10-1z" />
        </svg>
      </div>
      <div className="leading-none">
        <div className="text-xl font-extrabold tracking-tight">
          <span className="text-foreground">Tour</span>
          <span className="text-primary">nexa</span>
        </div>
        <div className="mt-0.5 text-[8px] font-medium tracking-[0.2em] text-muted-foreground">
          EXPLORE MORE · CONNECT DEEPER
        </div>
      </div>
    </a>
  );
}
