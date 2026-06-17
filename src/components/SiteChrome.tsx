import { Link } from "@tanstack/react-router";
import { Menu, ShoppingCart } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useCart } from "@/lib/cart";

const navLinks = [
  { to: "/rent", label: "Rent" },
  { to: "/buy", label: "Buy" },
  { to: "/destinations", label: "Destinations" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/list-your-van", label: "List your van" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-4">
        <div className="glass flex items-center justify-between rounded-full px-4 sm:px-6 py-3 shadow-soft">
          <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-lg tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full text-white shadow-glow" style={{ background: "var(--gradient-warm)" }}>
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2"><path d="M3 17V8a2 2 0 0 1 2-2h10l4 5v6"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="16.5" cy="17.5" r="2"/></svg>
            </span>
            <span className="text-foreground">CampVan</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Link to="/cart" aria-label="Cart" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-white/40 transition">
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 grid place-items-center rounded-full bg-[var(--sunset)] text-white text-[10px] font-bold">
                  {count}
                </span>
              )}
            </Link>
            <button className="px-4 py-2 text-sm font-semibold rounded-full hover:bg-white/40 transition">Sign in</button>
            <button className="px-4 py-2 text-sm font-semibold rounded-full bg-foreground text-background hover:opacity-90 transition">Get started</button>
          </div>
          <div className="md:hidden flex items-center gap-1">
            <Link to="/cart" aria-label="Cart" className="relative grid h-9 w-9 place-items-center rounded-full bg-white/60">
              <ShoppingCart className="h-4 w-4" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 grid place-items-center rounded-full bg-[var(--sunset)] text-white text-[10px] font-bold">
                  {count}
                </span>
              )}
            </Link>
            <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full bg-white/60">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden glass mt-2 rounded-3xl p-4 flex flex-col gap-2 text-sm font-medium">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <button className="mt-2 px-4 py-2 rounded-full bg-foreground text-background">Get started</button>
          </div>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="text-white/80" style={{ background: "var(--forest-deep)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-extrabold text-xl text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full text-white" style={{ background: "var(--gradient-warm)" }}>
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2"><path d="M3 17V8a2 2 0 0 1 2-2h10l4 5v6"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="16.5" cy="17.5" r="2"/></svg>
            </span>
            CampVan
          </div>
          <p className="mt-4 max-w-sm text-sm">The leading marketplace for camper van rentals and sales across the USA and Europe.</p>
        </div>
        <FooterCol title="Explore" items={[{ to: "/rent", label: "Rent" }, { to: "/buy", label: "Buy" }, { to: "/destinations", label: "Destinations" }]} />
        <FooterCol title="Owners" items={[{ to: "/list-your-van", label: "List your van" }, { to: "/how-it-works", label: "How it works" }]} />
        <FooterCol title="Company" items={[{ to: "/", label: "Home" }]} />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} CampVan, Inc. All rights reserved.</p>
          <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((l) => <li key={l.label}><Link to={l.to} className="hover:text-white transition">{l.label}</Link></li>)}
      </ul>
    </div>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="pt-28">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, desc, image }: { eyebrow: string; title: string; desc: string; image: string }) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
        <div className="relative px-6 sm:px-12 py-16 sm:py-24 max-w-2xl text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">{eyebrow}</span>
          <h1 className="mt-3 font-display font-black text-4xl sm:text-6xl leading-[1.02]">{title}</h1>
          <p className="mt-5 text-white/85 text-lg">{desc}</p>
        </div>
      </div>
    </section>
  );
}
