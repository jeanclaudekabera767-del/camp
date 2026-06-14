import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BedDouble, Users, Fuel, Star, MapPin, Crown, ShieldCheck } from "lucide-react";

// Reuse asset library
import heroLux1 from "@/assets/hero-lux-1.jpg";
import heroLux2 from "@/assets/hero-lux-2.jpg";
import heroLux3 from "@/assets/hero-lux-3.jpg";
import heroLux4 from "@/assets/hero-lux-4.jpg";
import intLux1 from "@/assets/int-lux-1.jpg";
import intLux2 from "@/assets/int-lux-2.jpg";
import intLux3 from "@/assets/int-lux-3.jpg";
import intLux4 from "@/assets/int-lux-4.jpg";
import extLux1 from "@/assets/ext-lux-1.jpg";
import extLux2 from "@/assets/ext-lux-2.jpg";
import extLux3 from "@/assets/ext-lux-3.jpg";
import extOff1 from "@/assets/ext-off-1.jpg";
import extFam1 from "@/assets/ext-fam-1.jpg";
import extRv1 from "@/assets/ext-rv-1.jpg";
import extBudget1 from "@/assets/ext-budget-1.jpg";
import extVan1 from "@/assets/ext-van-1.jpg";
import van1 from "@/assets/van-1.jpg";
import van2 from "@/assets/van-2.jpg";
import van3 from "@/assets/van-3.jpg";
import catVan from "@/assets/cat-van.jpg";
import catRv from "@/assets/cat-rv.jpg";
import catLuxury from "@/assets/cat-luxury.jpg";
import catFamily from "@/assets/cat-family.jpg";
import catOffroad from "@/assets/cat-offroad.jpg";
import catBudget from "@/assets/cat-budget.jpg";

type Van = {
  img: string;
  name: string;
  location: string;
  rent: number;
  sale: number;
  beds: number;
  seats: number;
  fuel: string;
  rating: number;
  reviews: number;
  badge?: string;
};

type CategoryData = {
  slug: string;
  name: string;
  hero: string;
  tagline: string;
  description: string;
  count: string;
  interiors?: { img: string; label: string }[];
  vans: Van[];
};

const luxuryVans: Van[] = [
  { img: heroLux1, name: "Mercedes Sprinter Noir Edition", location: "Malibu, California", rent: 389, sale: 168500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.98, reviews: 142, badge: "Signature" },
  { img: heroLux2, name: "Alpine Summit 4×4 Pop-Top", location: "Chamonix, France", rent: 329, sale: 142000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.95, reviews: 98, badge: "Overland" },
  { img: heroLux3, name: "Canyon Silver Voyager", location: "Moab, Utah", rent: 279, sale: 124900, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92, reviews: 76 },
  { img: heroLux4, name: "Lakeside Skyview Camper", location: "Bavaria, Germany", rent: 259, sale: 119000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.97, reviews: 88, badge: "Glass Roof" },
  { img: extLux1, name: "Amalfi Black Pearl", location: "Amalfi Coast, Italy", rent: 349, sale: 156000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 64 },
  { img: extLux2, name: "Tuscany White Voyager", location: "Tuscany, Italy", rent: 299, sale: 138000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.93, reviews: 51 },
  { img: extLux3, name: "Joshua Tree Airstream Suite", location: "Joshua Tree, CA", rent: 319, sale: 149500, beds: 4, seats: 5, fuel: "Diesel", rating: 4.94, reviews: 73, badge: "Iconic" },
  { img: intLux1, name: "Walnut Lounge Sprinter", location: "Aspen, Colorado", rent: 359, sale: 162000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.99, reviews: 41, badge: "Suite" },
  { img: intLux2, name: "Stargazer Loft Edition", location: "Banff, Canada", rent: 289, sale: 132000, beds: 2, seats: 2, fuel: "Diesel", rating: 4.95, reviews: 59 },
  { img: intLux3, name: "Chef's Galley Premium", location: "Provence, France", rent: 269, sale: 121500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.91, reviews: 47 },
  { img: intLux4, name: "Onyx Spa Camper", location: "Lake Como, Italy", rent: 309, sale: 144000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 38, badge: "Spa Bath" },
  { img: van1, name: "Sprinter Summit 4×4", location: "Denver, Colorado", rent: 229, sale: 98500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92, reviews: 128 },
];

const categories: Record<string, CategoryData> = {
  "luxury-campers": {
    slug: "luxury-campers",
    name: "Luxury Campers",
    hero: heroLux1,
    tagline: "Five-star living on four wheels",
    description: "Hand-crafted leather interiors, marble galleys and starlit suites. Our luxury fleet redefines what a road trip can feel like.",
    count: "210+ premium vehicles",
    interiors: [
      { img: intLux1, label: "Lounge & living area" },
      { img: intLux2, label: "Master bed suite" },
      { img: intLux3, label: "Chef's galley" },
      { img: intLux4, label: "Spa bathroom" },
    ],
    vans: luxuryVans,
  },
  "camper-vans": {
    slug: "camper-vans",
    name: "Camper Vans",
    hero: extVan1,
    tagline: "Compact freedom, anywhere you point it",
    description: "Nimble, fuel-efficient camper vans built for spontaneous weekends and continent-crossing escapes alike.",
    count: "1,240+ camper vans",
    vans: [
      { img: extVan1, name: "Alpine Mist Compact", location: "Innsbruck, Austria", rent: 139, sale: 64000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.9, reviews: 312 },
      { img: van1, name: "Sprinter Summit 4×4", location: "Denver, Colorado", rent: 189, sale: 84500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 128 },
      { img: van2, name: "Coastline Classic", location: "Lisbon, Portugal", rent: 119, sale: 42000, beds: 4, seats: 5, fuel: "Petrol", rating: 4.88, reviews: 211 },
      { img: heroLux3, name: "Canyon Silver Voyager", location: "Moab, Utah", rent: 279, sale: 124900, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92, reviews: 76 },
      { img: extLux2, name: "Tuscany White Voyager", location: "Tuscany, Italy", rent: 199, sale: 88000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.93, reviews: 51 },
      { img: catVan, name: "Urban Roamer", location: "Berlin, Germany", rent: 129, sale: 56000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.85, reviews: 167 },
    ],
  },
  "rvs-motorhomes": {
    slug: "rvs-motorhomes",
    name: "RVs & Motorhomes",
    hero: extRv1,
    tagline: "Roll with a full-size home",
    description: "Spacious Class A & C motorhomes with full kitchens, slide-outs and master bedrooms — perfect for long-haul trips.",
    count: "860+ motorhomes",
    vans: [
      { img: extRv1, name: "Lakeside Class A 36'", location: "Orlando, Florida", rent: 349, sale: 215000, beds: 6, seats: 7, fuel: "Diesel", rating: 4.91, reviews: 84, badge: "Slide-outs" },
      { img: van3, name: "Canyon Voyager Class A", location: "Las Vegas, Nevada", rent: 279, sale: 142000, beds: 6, seats: 7, fuel: "Diesel", rating: 4.92, reviews: 87 },
      { img: catRv, name: "Heritage Class C Family", location: "Portland, Oregon", rent: 219, sale: 118000, beds: 5, seats: 6, fuel: "Diesel", rating: 4.86, reviews: 142 },
      { img: extLux3, name: "Joshua Tree Airstream Suite", location: "Joshua Tree, CA", rent: 319, sale: 149500, beds: 4, seats: 5, fuel: "Diesel", rating: 4.94, reviews: 73 },
      { img: heroLux4, name: "Lakeside Skyview Motorhome", location: "Bavaria, Germany", rent: 259, sale: 119000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.97, reviews: 88 },
      { img: extRv1, name: "Sunset Bay Diesel Pusher", location: "San Diego, CA", rent: 389, sale: 245000, beds: 6, seats: 8, fuel: "Diesel", rating: 4.93, reviews: 56 },
    ],
  },
  "family-vans": {
    slug: "family-vans",
    name: "Family Vans",
    hero: extFam1,
    tagline: "Adventures with everyone on board",
    description: "Roomy layouts, bunk beds and bike racks — built for families who don't want to choose between comfort and the open road.",
    count: "540+ family vans",
    vans: [
      { img: extFam1, name: "Campsite Cruiser Family", location: "Bordeaux, France", rent: 169, sale: 78000, beds: 5, seats: 5, fuel: "Diesel", rating: 4.92, reviews: 198, badge: "Bunk bed" },
      { img: van2, name: "Coastline Classic", location: "Lisbon, Portugal", rent: 119, sale: 42000, beds: 4, seats: 5, fuel: "Petrol", rating: 4.88, reviews: 211 },
      { img: catFamily, name: "Meadow Family 6-Sleeper", location: "Munich, Germany", rent: 199, sale: 92000, beds: 6, seats: 6, fuel: "Diesel", rating: 4.89, reviews: 133 },
      { img: extRv1, name: "Lakeside Family RV", location: "Orlando, Florida", rent: 249, sale: 158000, beds: 6, seats: 7, fuel: "Diesel", rating: 4.9, reviews: 102 },
      { img: heroLux2, name: "Alpine Family Pop-Top", location: "Chamonix, France", rent: 229, sale: 112000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.94, reviews: 67 },
      { img: extFam1, name: "Summer Tour Wagon", location: "Tuscany, Italy", rent: 159, sale: 71000, beds: 4, seats: 5, fuel: "Diesel", rating: 4.86, reviews: 178 },
    ],
  },
  "off-road-adventure": {
    slug: "off-road-adventure",
    name: "Off-Road Adventure",
    hero: extOff1,
    tagline: "Where the pavement ends, we begin",
    description: "4×4 chassis, lifted suspension and rooftop tents. Tackle Moab, the Alps and beyond with rigs built for the rough stuff.",
    count: "320+ overland rigs",
    vans: [
      { img: extOff1, name: "Moab Overland 4×4", location: "Moab, Utah", rent: 249, sale: 138000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.96, reviews: 89, badge: "4×4" },
      { img: heroLux2, name: "Alpine Summit 4×4 Pop-Top", location: "Chamonix, France", rent: 329, sale: 142000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.95, reviews: 98 },
      { img: catOffroad, name: "Trailblazer Expedition", location: "Patagonia, Chile", rent: 289, sale: 156000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.94, reviews: 47 },
      { img: van1, name: "Sprinter Summit 4×4", location: "Denver, Colorado", rent: 189, sale: 84500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 128 },
      { img: extOff1, name: "Desert Wolf Camper", location: "Marrakech, Morocco", rent: 219, sale: 104000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.89, reviews: 62 },
      { img: extOff1, name: "Iceland Ring Road 4×4", location: "Reykjavik, Iceland", rent: 269, sale: 132000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.93, reviews: 71 },
    ],
  },
  "budget-campers": {
    slug: "budget-campers",
    name: "Budget Campers",
    hero: extBudget1,
    tagline: "Big adventure, small price",
    description: "Affordable, characterful vans for first-timers and weekend wanderers. Hit the road from just €69 a day.",
    count: "780+ budget rides",
    vans: [
      { img: extBudget1, name: "Surf Bus Classic", location: "Lagos, Portugal", rent: 69, sale: 24000, beds: 2, seats: 4, fuel: "Petrol", rating: 4.88, reviews: 421, badge: "From €69" },
      { img: van2, name: "Coastline Classic", location: "Lisbon, Portugal", rent: 89, sale: 32000, beds: 4, seats: 5, fuel: "Petrol", rating: 4.85, reviews: 311 },
      { img: catBudget, name: "Weekender Mini", location: "Valencia, Spain", rent: 79, sale: 28000, beds: 2, seats: 3, fuel: "Petrol", rating: 4.82, reviews: 256 },
      { img: extVan1, name: "Alpine Mist Compact", location: "Innsbruck, Austria", rent: 99, sale: 46000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.9, reviews: 188 },
      { img: extBudget1, name: "Retro Beach Cruiser", location: "Biarritz, France", rent: 95, sale: 34000, beds: 2, seats: 4, fuel: "Petrol", rating: 4.86, reviews: 162 },
      { img: catVan, name: "City Sleeper", location: "Amsterdam, NL", rent: 75, sale: 26000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.8, reviews: 209 },
    ],
  },
};

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const data = categories[params.slug];
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — CampVan Rentals & Sales` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} on CampVan` },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.hero },
          { name: "twitter:image", content: loaderData.hero },
        ]
      : [{ title: "Category — CampVan" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-6">
      <div className="text-center">
        <h1 className="font-display font-black text-4xl">Category not found</h1>
        <Link to="/" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-foreground text-background font-semibold">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="text-center">
        <h1 className="font-display font-bold text-2xl">Something went wrong</h1>
        <button onClick={reset} className="mt-4 px-5 py-2 rounded-full bg-foreground text-background">Try again</button>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const data = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={data.hero} alt={data.name} className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 h-full flex flex-col justify-between pt-8 pb-12">
          <Link to="/" className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full glass-dark text-white text-sm font-semibold hover:bg-white/20 transition">
            <ArrowLeft className="h-4 w-4" /> All categories
          </Link>
          <div className="text-white max-w-3xl">
            <span className="inline-flex items-center gap-2 glass-dark text-white/90 text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
              <Crown className="h-3.5 w-3.5 text-[var(--sunset)]" />
              {data.count}
            </span>
            <h1 className="mt-4 font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
              {data.name}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-2xl">{data.tagline}. {data.description}</p>
          </div>
        </div>
      </section>

      {/* Interior gallery (luxury only) */}
      {data.interiors && (
        <section className="py-20 sm:py-24" style={{ background: "var(--gradient-sand)" }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--forest)]">Step inside</span>
                <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl">A look at the interiors</h2>
              </div>
              <p className="text-foreground/70 max-w-md">From walnut-trimmed lounges to spa-grade bathrooms — every detail is designed for the long way home.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {data.interiors.map((i) => (
                <figure key={i.label} className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
                  <img src={i.img} alt={i.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white font-semibold">{i.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vans grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--forest)]">Available now</span>
              <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl">{data.vans.length} {data.name.toLowerCase()} ready to roam</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <ShieldCheck className="h-4 w-4 text-[var(--forest)]" /> Free cancellation · 24/7 roadside
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.vans.map((v, i) => (
              <article key={`${v.name}-${i}`} className="group rounded-3xl bg-white shadow-soft hover:shadow-elevated transition overflow-hidden border border-black/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={v.img} alt={v.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  {v.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[var(--sunset)] text-white text-[11px] font-bold uppercase tracking-wider shadow-glow">
                      {v.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-foreground text-xs font-bold">
                    <Star className="h-3 w-3 fill-[var(--sunset)] text-[var(--sunset)]" /> {v.rating}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display font-bold text-lg leading-tight">{v.name}</h3>
                      <p className="mt-1 inline-flex items-center gap-1 text-xs text-foreground/60">
                        <MapPin className="h-3 w-3" /> {v.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-xs text-foreground/70">
                    <span className="inline-flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" /> {v.beds}</span>
                    <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {v.seats}</span>
                    <span className="inline-flex items-center gap-1"><Fuel className="h-3.5 w-3.5" /> {v.fuel}</span>
                  </div>
                  <div className="mt-5 flex items-end justify-between border-t border-black/5 pt-4">
                    <div>
                      <div className="text-xs text-foreground/60">From</div>
                      <div className="font-display font-black text-xl">${v.rent}<span className="text-xs font-medium text-foreground/60">/day</span></div>
                      <div className="text-[11px] text-foreground/60 mt-0.5">or buy from ${v.sale.toLocaleString()}</div>
                    </div>
                    <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition">
                      View <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">
          <h2 className="font-display font-black text-3xl sm:text-5xl">Can't find your perfect ride?</h2>
          <p className="mt-4 text-white/90 text-lg">Tell us your dates and dream destination — we'll match you with a hand-picked van.</p>
          <Link to="/" className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold shadow-elevated hover:-translate-y-0.5 transition">
            Browse all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
