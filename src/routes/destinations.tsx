import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { ArrowRight } from "lucide-react";
import heroDest from "@/assets/hero-lux-4.jpg";
import lux1 from "@/assets/hero-lux-1.jpg";
import lux2 from "@/assets/hero-lux-2.jpg";
import lux3 from "@/assets/hero-lux-3.jpg";
import van1 from "@/assets/van-1.jpg";
import van2 from "@/assets/van-2.jpg";

const places = [
  { img: lux1, country: "United States", region: "Pacific Coast Highway", vans: "320+ vans" },
  { img: lux2, country: "France", region: "French Alps & Provence", vans: "180+ vans" },
  { img: lux3, country: "United States", region: "Moab & the Southwest", vans: "210+ vans" },
  { img: heroDest, country: "Germany", region: "Bavarian Alps & Lakes", vans: "140+ vans" },
  { img: van1, country: "Italy", region: "Dolomites & Amalfi", vans: "160+ vans" },
  { img: van2, country: "Portugal", region: "Atlantic Coast", vans: "95+ vans" },
];

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Where to Camp & Roam | CampVan" },
      { name: "description", content: "Explore the most scenic camper van routes and destinations across the USA and Europe." },
      { property: "og:title", content: "Destinations — CampVan" },
      { property: "og:description", content: "Coast roads, alpine passes, desert canyons — your next route awaits." },
      { property: "og:image", content: heroDest },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Where to roam"
        title="Routes worth driving twice."
        desc="From cliffside coastlines to alpine passes — discover where the CampVan community is going next."
        image={heroDest}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p) => (
            <Link key={p.region} to="/rent" className="group relative overflow-hidden rounded-3xl shadow-soft aspect-[4/5]">
              <img src={p.img} alt={p.region} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-widest text-white/70">{p.country}</p>
                <h3 className="font-display font-black text-2xl mt-1">{p.region}</h3>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-white/80">{p.vans}</span>
                  <span className="inline-flex items-center gap-1 font-semibold">Explore <ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
