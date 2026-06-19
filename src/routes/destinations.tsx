import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { ArrowRight } from "lucide-react";
import heroDest from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-1.jpeg";
import lux1 from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-2.jpeg";
import lux2 from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-3.jpeg";
import lux3 from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-4.jpeg";
import van1 from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-5.jpeg";
import van2 from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-6.jpeg";

const places = [
  { img: lux1, country: "États-Unis", region: "Pacific Coast Highway", vans: "320+ vans" },
  { img: lux2, country: "France", region: "Alpes françaises & Provence", vans: "180+ vans" },
  { img: lux3, country: "États-Unis", region: "Moab & le Sud-Ouest", vans: "210+ vans" },
  { img: heroDest, country: "Allemagne", region: "Alpes bavaroises & lacs", vans: "140+ vans" },
  { img: van1, country: "Italie", region: "Dolomites & Amalfi", vans: "160+ vans" },
  { img: van2, country: "Portugal", region: "Côte atlantique", vans: "95+ vans" },
];

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Où camper & rouler | CampVan" },
      { name: "description", content: "Explorez les itinéraires et destinations en camping-car les plus pittoresques aux États-Unis et en Europe." },
      { property: "og:title", content: "Destinations — CampVan" },
      { property: "og:description", content: "Routes côtières, cols alpins, canyons désertiques — votre prochain itinéraire vous attend." },
      { property: "og:image", content: heroDest },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Où rouler"
        title="Des itinéraires à conduire deux fois."
        desc="Des côtes bordées de falaises aux cols alpins — découvrez où va la communauté CampVan."
        image={heroDest}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p) => (
            <Link key={p.region} to="/buy" className="group relative overflow-hidden rounded-3xl shadow-soft aspect-[4/5]">
              <img src={p.img} alt={p.region} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs uppercase tracking-widest text-white/70">{p.country}</p>
                <h3 className="font-display font-black text-2xl mt-1">{p.region}</h3>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-white/80">{p.vans}</span>
                  <span className="inline-flex items-center gap-1 font-semibold">Explorer <ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
