import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Search,
  Star,
  BedDouble,
  Fuel,
  Cog,
  Bath,
  ChefHat,
  Globe2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Menu,
  Crown,
  Gauge,
} from "lucide-react";

import heroVan from "@/assets/hero-van.jpg";
import catVan from "@/assets/cat-van.jpg";
import catRv from "@/assets/cat-rv.jpg";
import catLuxury from "@/assets/cat-luxury.jpg";
import catFamily from "@/assets/cat-family.jpg";
import catOffroad from "@/assets/cat-offroad.jpg";
import catBudget from "@/assets/cat-budget.jpg";
import lux1 from "@/assets/hero-lux-1.jpg";
import lux2 from "@/assets/hero-lux-2.jpg";
import lux3 from "@/assets/hero-lux-3.jpg";
import lux4 from "@/assets/hero-lux-4.jpg";
import van1 from "@/assets/van-1.jpg";
import van2 from "@/assets/van-2.jpg";
import van3 from "@/assets/van-3.jpg";

const luxuryFleet = [
  {
    img: lux1,
    badge: "Signature Collection",
    name: "Mercedes Sprinter Noir Edition",
    tagline: "Hand-crafted leather · Cliffside ready",
    location: "Malibu, California",
    rent: 389,
    sale: 168500,
    rating: 4.98,
    specs: { beds: 2, seats: 4, mpg: "22 mpg" },
  },
  {
    img: lux2,
    badge: "Overland Luxury",
    name: "Alpine Summit 4×4 Pop-Top",
    tagline: "Off-grid solar · Rooftop suite",
    location: "Chamonix, France",
    rent: 329,
    sale: 142000,
    rating: 4.95,
    specs: { beds: 4, seats: 4, mpg: "19 mpg" },
  },
  {
    img: lux3,
    badge: "Class B Premium",
    name: "Canyon Silver Voyager",
    tagline: "Panoramic windows · Auto-glide doors",
    location: "Moab, Utah",
    rent: 279,
    sale: 124900,
    rating: 4.92,
    specs: { beds: 2, seats: 4, mpg: "24 mpg" },
  },
  {
    img: lux4,
    badge: "Glass Roof Suite",
    name: "Lakeside Skyview Camper",
    tagline: "Stargazer roof · Teak interior",
    location: "Bavaria, Germany",
    rent: 259,
    sale: 119000,
    rating: 4.97,
    specs: { beds: 2, seats: 4, mpg: "21 mpg" },
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampVan — Buy Premium Camper Vans across USA & Europe" },
      { name: "description", content: "Shop a curated marketplace of inspected camper vans, RVs, and motorhomes for sale across the USA and Europe." },
      { property: "og:title", content: "CampVan — Own the Open Road" },
      { property: "og:description", content: "Premium camper vans for sale across the USA and Europe." },
      { property: "og:image", content: heroVan },
      { name: "twitter:image", content: heroVan },
    ],
  }),
  component: Home,
});

const categories = [
  { name: "Camper Vans", count: "1,240+", img: catVan, slug: "camper-vans" },
  { name: "RVs & Motorhomes", count: "860+", img: catRv, slug: "rvs-motorhomes" },
  { name: "Luxury Campers", count: "210+", img: catLuxury, slug: "luxury-campers" },
  { name: "Family Vans", count: "540+", img: catFamily, slug: "family-vans" },
  { name: "Off-Road Adventure", count: "320+", img: catOffroad, slug: "off-road-adventure" },
  { name: "Budget Campers", count: "780+", img: catBudget, slug: "budget-campers" },
];

const vans = [
  {
    img: van1,
    name: "Sprinter Summit 4×4",
    location: "Denver, Colorado",
    rent: 189, sale: 84500, beds: 2, seats: 4, trans: "Auto", fuel: "Diesel", bath: true, kitchen: true, rating: 4.96, reviews: 128,
  },
  {
    img: van2,
    name: "Coastline Classic",
    location: "Lisbon, Portugal",
    rent: 119, sale: 42000, beds: 4, seats: 5, trans: "Manual", fuel: "Petrol", bath: false, kitchen: true, rating: 4.88, reviews: 211,
  },
  {
    img: van3,
    name: "Canyon Voyager Class A",
    location: "Las Vegas, Nevada",
    rent: 279, sale: 142000, beds: 6, seats: 7, trans: "Auto", fuel: "Diesel", bath: true, kitchen: true, rating: 4.92, reviews: 87,
  },
];

const countries = [
  "United States", "Germany", "France", "Italy", "Spain", "Netherlands", "United Kingdom",
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 -mt-6 sm:-mt-8">
        <SearchBar />
      </div>
      <Categories />
      <FeaturedVans />
      <HowItWorks />
      <Destinations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-4">
        <div className="glass flex items-center justify-between rounded-full px-4 sm:px-6 py-3 shadow-soft">
          <a href="#" className="flex items-center gap-2 font-display font-extrabold text-lg tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full text-white shadow-glow" style={{ background: "var(--gradient-warm)" }}>
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2"><path d="M3 17V8a2 2 0 0 1 2-2h10l4 5v6"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="16.5" cy="17.5" r="2"/></svg>
            </span>
            <span className="text-foreground">CampVan</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
            <Link to="/buy" className="hover:text-foreground transition">Shop Vans</Link>
            <Link to="/destinations" className="hover:text-foreground transition">Destinations</Link>
            <Link to="/how-it-works" className="hover:text-foreground transition">How it works</Link>
            <Link to="/list-your-van" className="hover:text-foreground transition">Sell your van</Link>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-semibold rounded-full hover:bg-white/40 transition">Sign in</button>
            <button className="px-4 py-2 text-sm font-semibold rounded-full bg-foreground text-background hover:opacity-90 transition">Get started</button>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden grid h-9 w-9 place-items-center rounded-full bg-white/60">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden glass mt-2 rounded-3xl p-4 flex flex-col gap-2 text-sm font-medium">
            <Link to="/buy" onClick={() => setOpen(false)}>Shop Vans</Link>
            <Link to="/destinations" onClick={() => setOpen(false)}>Destinations</Link>
            <Link to="/how-it-works" onClick={() => setOpen(false)}>How it works</Link>
            <Link to="/list-your-van" onClick={() => setOpen(false)}>Sell your van</Link>
            <button className="mt-2 px-4 py-2 rounded-full bg-foreground text-background">Get started</button>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = luxuryFleet.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4200);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (n: number) => setIndex((n + total) % total);
  const active = luxuryFleet[index];

  return (
    <section className="relative isolate min-h-[56vh] sm:min-h-[60vh] max-h-[680px] w-full overflow-hidden">
      <div
        className="absolute inset-0 flex h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.83,0,0.17,1)] will-change-transform"
        style={{ width: `${total * 100}%`, transform: `translateX(-${index * (100 / total)}%)` }}
      >
        {luxuryFleet.map((v, i) => (
          <div key={v.name} className="relative h-full shrink-0" style={{ width: `${100 / total}%` }}>
            <img
              src={v.img}
              alt={v.name}
              width={1920}
              height={1080}
              loading={i === 0 ? "eager" : "lazy"}
              className={`h-full w-full object-cover object-center ${i === index ? "animate-kenburns" : ""}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/38 via-black/8 to-black/12 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/8 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[56vh] sm:min-h-[60vh] max-h-[680px] max-w-7xl items-end px-4 sm:px-6 pt-24 sm:pt-28 pb-18 sm:pb-20">
        <div className="w-full max-w-3xl text-white">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/28 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-md">
              <Crown className="h-3.5 w-3.5 text-[var(--sunset)]" />
              Luxury Fleet · USA & Europe
            </span>
            <h1 key={index} className="mt-4 font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.02] animate-fade-up text-balance">
              Explore Without
              <span className="block gradient-text">Limits.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90">
              Own hand-picked, premium camper vans across two continents — every listing inspected, financed, and delivered to your door.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/buy" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-white font-semibold shadow-glow transition hover:-translate-y-0.5" style={{ background: "var(--gradient-warm)" }}>
                Shop the marketplace <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#categories" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-6 py-3.5 text-white font-semibold backdrop-blur-md transition hover:bg-white/20">
                Browse by style
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/90">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--sunset)]" /> Verified premium vans</span>
              <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4 text-[var(--sunset)]" /> 120+ pickup cities</span>
              <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-[var(--sunset)]" /> 4.9 guest rating</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-4 bottom-4 z-20 sm:inset-x-6 sm:bottom-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.75rem] border border-white/14 bg-black/24 px-4 py-3 text-white backdrop-blur-lg">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--sunset)]/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                <Sparkles className="h-3 w-3" /> {active.badge}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/90">
                <Star className="h-4 w-4 fill-[var(--sunset)] text-[var(--sunset)]" />
                {active.rating}
              </span>
            </div>
            <div className="mt-2 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <p className="truncate font-display text-lg font-bold sm:text-xl">{active.name}</p>
                <p className="truncate text-sm text-white/72">{active.location} · {active.specs.beds} beds · {active.specs.seats} seats · {active.specs.mpg}</p>
              </div>
              <div className="flex items-end gap-5 text-sm">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-white/60">Own for</p>
                  <p className="font-display text-2xl font-black text-[var(--sunset)]">${active.sale.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden md:flex items-center gap-2 pr-2">
              {luxuryFleet.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === index ? 30 : 12,
                    background: i === index ? "var(--sunset)" : "rgba(255,255,255,0.42)",
                  }}
                />
              ))}
            </div>
            <button onClick={() => go(index - 1)} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={() => go(index + 1)} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full text-white shadow-glow transition hover:-translate-y-0.5" style={{ background: "var(--gradient-warm)" }}>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}

function MicroSpec({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-1.5 rounded-xl bg-white/10 border border-white/10 px-2 py-2 text-xs font-medium">
      {icon} <span>{children}</span>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="relative animate-fade-up">
      <div className="glass rounded-3xl p-2 sm:p-3 shadow-elevated max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1.4fr_1fr_auto] gap-1">
          <Field icon={<MapPin className="h-4 w-4" />} label="Location" placeholder="City or country" />
          <Field icon={<BedDouble className="h-4 w-4" />} label="Van type" placeholder="Any type" />
          <Field icon={<Gauge className="h-4 w-4" />} label="Max price" placeholder="$150,000" />
          <Field icon={<Calendar className="h-4 w-4" />} label="Year" placeholder="2020+" />
          <button className="flex items-center justify-center gap-2 rounded-2xl text-white font-semibold px-6 py-4 shadow-glow hover:opacity-95 transition" style={{ background: "var(--gradient-warm)" }}>
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-foreground/70">
        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[var(--sunset)]" /> Buyer protection</span>
        <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 text-[var(--sunset)]" /> 200-point inspection</span>
        <span className="inline-flex items-center gap-1.5"><Globe2 className="h-4 w-4 text-[var(--sunset)]" /> 7 countries · 120+ cities</span>
      </div>
    </div>
  );
}

function Field({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <label className="group flex flex-col rounded-2xl bg-white/70 hover:bg-white/85 transition px-4 py-3 cursor-text">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60 flex items-center gap-1.5">
        {icon} {label}
      </span>
      <input
        placeholder={placeholder}
        className="mt-1 bg-transparent outline-none text-sm font-medium text-foreground placeholder:text-foreground/40"
      />
    </label>
  );
}

function Categories() {
  return (
    <section id="categories" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Browse by style"
          title="Find your kind of adventure"
          desc="From rugged off-road rigs to family-friendly motorhomes — your perfect ride is waiting."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((c) => (
            <Link key={c.name} to="/category/$slug" params={{ slug: c.slug }} className="group relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden rounded-3xl shadow-soft hover:shadow-elevated transition">
              <img src={c.img} alt={c.name} width={1024} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-display font-bold text-xl sm:text-2xl">{c.name}</h3>
                <p className="text-sm text-white/80 mt-1">{c.count} vehicles</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:gap-2 transition-all">
                  View more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <div className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full glass-dark text-white opacity-0 group-hover:opacity-100 transition">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedVans() {
  return (
    <section id="for-sale" className="relative py-24 sm:py-32" style={{ background: "var(--gradient-sand)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Featured this week"
            title="Hand-picked vans, ready to own"
            desc="Inspected, financed and delivered — your next camper is a click away."
            align="left"
          />
          <Link to="/buy" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold">
            See all listings <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vans.map((v) => (
            <article key={v.name} className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition border border-border/60">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={v.img} alt={v.name} width={1024} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="glass-dark text-white text-xs font-semibold px-2.5 py-1 rounded-full">For sale</span>
                </div>
                <button aria-label="Save" className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full glass-dark text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-lg truncate">{v.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5"><MapPin className="h-3.5 w-3.5" /> {v.location}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded-full" style={{ background: "color-mix(in oklab, var(--sunset) 18%, transparent)", color: "var(--forest-deep)" }}>
                    <Star className="h-3.5 w-3.5 fill-[var(--sunset)] text-[var(--sunset)]" />
                    {v.rating} <span className="text-foreground/60 font-medium">({v.reviews})</span>
                  </span>
                </div>

                <ul className="mt-4 grid grid-cols-3 gap-2 text-xs text-foreground/70">
                  <Spec icon={<BedDouble className="h-3.5 w-3.5" />}>{v.beds} beds</Spec>
                  <Spec icon={<Users className="h-3.5 w-3.5" />}>{v.seats} seats</Spec>
                  <Spec icon={<Cog className="h-3.5 w-3.5" />}>{v.trans}</Spec>
                  <Spec icon={<Fuel className="h-3.5 w-3.5" />}>{v.fuel}</Spec>
                  <Spec icon={<Bath className="h-3.5 w-3.5" />}>{v.bath ? "Bathroom" : "No bath"}</Spec>
                  <Spec icon={<ChefHat className="h-3.5 w-3.5" />}>{v.kitchen ? "Kitchen" : "Basic"}</Spec>
                </ul>

                <div className="mt-5 flex items-end justify-between gap-3 border-t border-border/60 pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-display font-extrabold text-2xl text-foreground">${v.sale.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Finance from</p>
                    <p className="font-display font-bold text-lg text-[var(--forest)]">${Math.round(v.sale / 60).toLocaleString()}<span className="text-xs font-medium text-muted-foreground">/mo</span></p>
                  </div>
                </div>
                <Link to="/buy" className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground text-background font-semibold py-3 hover:opacity-90 transition">
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spec({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-1.5 bg-muted/70 rounded-lg px-2 py-1.5">
      {icon} <span className="truncate">{children}</span>
    </li>
  );
}

function Tab({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button className={`px-4 py-2 rounded-full text-sm font-semibold transition ${active ? "bg-foreground text-background" : "bg-white/70 text-foreground/70 hover:text-foreground"}`}>
      {children}
    </button>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Browse", desc: "Filter inspected vans by style, location and budget. Save your favourites." },
    { n: "02", title: "Reserve", desc: "Place a refundable deposit, secure your van and unlock financing pre-approval in 24 hours." },
    { n: "03", title: "Drive away", desc: "We deliver to your door or arrange concierge pickup — keys in hand, road in front of you." },
  ];
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="How it works" title="Three steps to the open road" />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-3xl p-8 bg-card shadow-soft border border-border/60 overflow-hidden">
              <span className="absolute -top-6 -right-4 font-display font-black text-[8rem] leading-none select-none" style={{ color: "color-mix(in oklab, var(--sunset) 18%, transparent)" }}>{s.n}</span>
              <h3 className="relative font-display text-2xl font-bold">{s.title}</h3>
              <p className="relative mt-3 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="py-24 sm:py-32 text-white relative overflow-hidden" style={{ background: "var(--forest-deep)" }}>
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(60% 60% at 20% 30%, var(--sky) 0%, transparent 60%), radial-gradient(40% 40% at 80% 80%, var(--sunset) 0%, transparent 60%)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sunset)]">Delivery network</span>
            <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl">Two continents.<br/>One handover address — yours.</h2>
            <p className="mt-4 text-white/75 text-lg">Concierge delivery hubs across the US and Europe, with door-to-door shipping to most major cities.</p>
          </div>
          <div className="glass-dark rounded-3xl p-4 grid grid-cols-2 gap-2">
            <Stat k="3,500+" v="Vehicles" />
            <Stat k="120+" v="Cities" />
            <Stat k="7" v="Countries" />
            <Stat k="4.9★" v="Rating" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {countries.map((c) => (
            <button key={c} className="glass-dark rounded-2xl p-4 text-left hover:bg-white/10 transition">
              <MapPin className="h-4 w-4 text-[var(--sunset)]" />
              <p className="mt-2 font-semibold">{c}</p>
              <p className="text-xs text-white/60 mt-0.5">View vans →</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="px-4 py-3 rounded-2xl bg-white/5">
      <p className="font-display font-black text-2xl text-white">{k}</p>
      <p className="text-xs text-white/70">{v}</p>
    </div>
  );
}

function Testimonials() {
  const items = [
    { q: "Bought our Sprinter through CampVan and had it delivered to our driveway in 10 days. Flawless process.", a: "Marta · Solo traveler" },
    { q: "We purchased a family motorhome through CampVan. Financing was simple and the team handled every detail.", a: "The Petersons · Colorado" },
    { q: "Sold my Sprinter in three weeks at the price I wanted. The team handled the inspection and paperwork.", a: "Liam · Van seller, UK" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Loved by travelers" title="Real stories from the road" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-3xl p-7 bg-card shadow-soft border border-border/60 flex flex-col">
              <div className="flex gap-0.5 text-[var(--sunset)]">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-lg font-medium leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">{t.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="list" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 text-white" style={{ background: "var(--gradient-cool)" }}>
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--sunset)]/30 blur-3xl" />
          <div className="absolute -left-10 -bottom-20 h-72 w-72 rounded-full bg-[var(--sky)]/40 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]">Own a camper?</span>
              <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl leading-tight">Sell your van for the price it deserves.</h2>
              <p className="mt-4 text-white/85 text-lg max-w-xl">List your camper in minutes. Our team handles inspection, photography and paperwork — most vans sell within 3 weeks.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/list-your-van" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--sunset)] text-white font-semibold shadow-glow hover:-translate-y-0.5 transition">
                  Sell your van <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/how-it-works" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/25 transition">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="glass rounded-3xl p-6 text-foreground">
              <p className="text-sm text-foreground/70">Average selling price</p>
              <p className="font-display font-black text-5xl mt-1">$84,500</p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <Mini k="21 days" v="to sell" />
                <Mini k="4.9★" v="seller rating" />
                <Mini k="0%" v="listing fee" />
              </div>
              <p className="text-xs text-foreground/60 mt-4">Based on Sprinter-class vans sold through CampVan, last 12 months.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl bg-white/70 px-3 py-3">
      <p className="font-display font-bold text-lg">{k}</p>
      <p className="text-[11px] uppercase tracking-wider text-foreground/60">{v}</p>
    </div>
  );
}

function Footer() {
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
          <div className="mt-5 flex gap-2">
            <select className="bg-white/10 border border-white/15 rounded-full px-3 py-2 text-sm">
              <option>English</option><option>Deutsch</option><option>Français</option><option>Italiano</option><option>Español</option>
            </select>
            <select className="bg-white/10 border border-white/15 rounded-full px-3 py-2 text-sm">
              <option>USD $</option><option>EUR €</option><option>GBP £</option>
            </select>
          </div>
        </div>
        <FooterCol title="Rent" links={["Camper Vans", "RVs", "Luxury", "Family", "Off-road"]} />
        <FooterCol title="Buy" links={["Marketplace", "Financing", "Inspections", "Sell my van"]} />
        <FooterCol title="Company" links={["About", "Blog", "Careers", "Press", "Contact"]} />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} CampVan, Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>)}
      </ul>
    </div>
  );
}

function SectionHead({ eyebrow, title, desc, align = "center" }: { eyebrow: string; title: string; desc?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sunset)]">{eyebrow}</span>
      <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl leading-[1.05]">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground text-lg">{desc}</p>}
    </div>
  );
}
