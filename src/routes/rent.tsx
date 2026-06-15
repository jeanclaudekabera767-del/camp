import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { BedDouble, Users, Fuel, Star, MapPin, ArrowRight } from "lucide-react";
import heroLux from "@/assets/hero-lux-2.jpg";
import van1 from "@/assets/van-1.jpg";
import van2 from "@/assets/van-2.jpg";
import van3 from "@/assets/van-3.jpg";
import lux1 from "@/assets/hero-lux-1.jpg";
import lux3 from "@/assets/hero-lux-3.jpg";
import lux4 from "@/assets/hero-lux-4.jpg";

const fleet = [
  { img: lux1, name: "Sprinter Noir Edition", loc: "Malibu, California", rent: 389, beds: 2, seats: 4, fuel: "Diesel", rating: 4.98 },
  { img: lux3, name: "Canyon Silver Voyager", loc: "Moab, Utah", rent: 279, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92 },
  { img: lux4, name: "Lakeside Skyview Camper", loc: "Bavaria, Germany", rent: 259, beds: 2, seats: 4, fuel: "Diesel", rating: 4.97 },
  { img: van1, name: "Sprinter Summit 4×4", loc: "Denver, Colorado", rent: 189, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96 },
  { img: van2, name: "Coastline Classic", loc: "Lisbon, Portugal", rent: 119, beds: 4, seats: 5, fuel: "Petrol", rating: 4.88 },
  { img: van3, name: "Canyon Voyager Class A", loc: "Las Vegas, Nevada", rent: 279, beds: 6, seats: 7, fuel: "Diesel", rating: 4.92 },
];

export const Route = createFileRoute("/rent")({
  head: () => ({
    meta: [
      { title: "Rent a Camper Van — CampVan" },
      { name: "description", content: "Rent premium camper vans, RVs, and motorhomes by the day or week across the USA and Europe." },
      { property: "og:title", content: "Rent a Camper Van — CampVan" },
      { property: "og:description", content: "Hand-picked rental fleet across two continents." },
      { property: "og:image", content: heroLux },
    ],
  }),
  component: RentPage,
});

function RentPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Rental fleet"
        title="Rent a van. Anywhere worth going."
        desc="From weekend escapes to month-long expeditions — every van is fully equipped and ready to roll."
        image={heroLux}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((v) => (
            <article key={v.name} className="group rounded-3xl overflow-hidden glass shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={v.img} alt={v.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 bg-white/90 text-foreground text-xs font-semibold rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" /> {v.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg">{v.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-3.5 w-3.5" /> {v.loc}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-foreground/70">
                  <span className="flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" /> {v.beds}</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {v.seats}</span>
                  <span className="flex items-center gap-1"><Fuel className="h-3.5 w-3.5" /> {v.fuel}</span>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/50">From</p>
                    <p className="font-display font-black text-2xl">${v.rent}<span className="text-sm font-medium text-foreground/60">/night</span></p>
                  </div>
                  <Link to="/" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--sunset)] hover:gap-2 transition-all">
                    Book <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
