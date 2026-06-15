import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { ShieldCheck, Gauge, MapPin, ArrowRight, Sparkles } from "lucide-react";
import heroBuy from "@/assets/hero-lux-3.jpg";
import van1 from "@/assets/van-1.jpg";
import van2 from "@/assets/van-2.jpg";
import van3 from "@/assets/van-3.jpg";
import lux1 from "@/assets/hero-lux-1.jpg";
import lux2 from "@/assets/hero-lux-2.jpg";
import lux4 from "@/assets/hero-lux-4.jpg";

const market = [
  { img: lux1, name: "Sprinter Noir Edition", loc: "Malibu, CA", price: 168500, year: 2024, miles: "8,200" },
  { img: lux2, name: "Alpine Summit 4×4 Pop-Top", loc: "Chamonix, FR", price: 142000, year: 2023, miles: "14,500" },
  { img: lux4, name: "Lakeside Skyview", loc: "Bavaria, DE", price: 119000, year: 2024, miles: "6,400" },
  { img: van1, name: "Sprinter Summit 4×4", loc: "Denver, CO", price: 84500, year: 2022, miles: "32,000" },
  { img: van2, name: "Coastline Classic", loc: "Lisbon, PT", price: 42000, year: 2019, miles: "58,000" },
  { img: van3, name: "Canyon Voyager Class A", loc: "Las Vegas, NV", price: 142000, year: 2023, miles: "11,200" },
];

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy a Camper Van — CampVan Marketplace" },
      { name: "description", content: "Shop a curated marketplace of camper vans, RVs, and overland rigs — inspected, financed, delivered." },
      { property: "og:title", content: "Buy a Camper Van — CampVan" },
      { property: "og:description", content: "Inspected listings, transparent pricing, flexible financing." },
      { property: "og:image", content: heroBuy },
    ],
  }),
  component: BuyPage,
});

function BuyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Marketplace"
        title="Own the road. Buy a van you'll love."
        desc="Every listing is inspected, verified, and backed by our buyer protection guarantee."
        image={heroBuy}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Buyer protection", desc: "200-point inspection on every van" },
            { icon: Gauge, title: "Verified mileage", desc: "Service history & title check included" },
            { icon: Sparkles, title: "Concierge financing", desc: "Pre-approval in under 24 hours" },
          ].map((p) => (
            <div key={p.title} className="glass rounded-3xl p-6 shadow-soft">
              <p.icon className="h-6 w-6 text-[var(--sunset)]" />
              <h3 className="font-display font-bold text-lg mt-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <h2 className="font-display font-black text-3xl sm:text-4xl mb-8">For sale this week</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {market.map((v) => (
            <article key={v.name} className="group rounded-3xl overflow-hidden glass shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={v.img} alt={v.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg">{v.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-3.5 w-3.5" /> {v.loc}</p>
                <div className="mt-3 flex gap-3 text-xs text-foreground/70">
                  <span>{v.year}</span><span>·</span><span>{v.miles} mi</span>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <p className="font-display font-black text-2xl">${v.price.toLocaleString()}</p>
                  <Link to="/" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--sunset)] hover:gap-2 transition-all">
                    View <ArrowRight className="h-4 w-4" />
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
