import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { ShieldCheck, Gauge, MapPin, ArrowRight, Sparkles } from "lucide-react";
import heroBuy from "@/assets/van/van-new-1.jpg";
import van1 from "@/assets/van/van-new-2.jpg";
import van2 from "@/assets/van/van-new-3.jpg";
import van3 from "@/assets/van/van-new-4.jpg";
import lux1 from "@/assets/van/van-new-5.jpg";
import lux2 from "@/assets/van/van-new-6.jpg";
import lux4 from "@/assets/van/van-new-7.jpg";

const market = [
  { img: lux1, name: "Sprinter Edition Noir", loc: "Malibu, CA", price: 68500, year: 2024, km: "13 200" },
  { img: lux2, name: "Alpine Summit 4×4 Pop-Top", loc: "Chamonix, FR", price: 42000, year: 2023, km: "23 300" },
  { img: lux4, name: "Lakeside Skyview", loc: "Bavière, DE", price: 39000, year: 2024, km: "10 300" },
  { img: van1, name: "Sprinter Summit 4×4", loc: "Denver, CO", price: 44500, year: 2022, km: "51 500" },
  { img: van2, name: "Classique Côte Ouest", loc: "Lisbonne, PT", price: 42000, year: 2019, km: "93 300" },
  { img: van3, name: "Canyon Voyager Classe A", loc: "Las Vegas, NV", price: 62000, year: 2023, km: "18 000" },
];

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Acheter un camping-car — CampVan" },
      { name: "description", content: "Explorez une place de marché sélectionnée de camping-cars, vans et véhicules tout-terrain — inspectés, financés et livrés." },
      { property: "og:title", content: "Acheter un camping-car — CampVan" },
      { property: "og:description", content: "Annonces inspectées, prix transparents, financement flexible." },
      { property: "og:image", content: heroBuy },
    ],
  }),
  component: BuyPage,
});

function BuyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Place de marché"
        title="Possédez la route. Achetez un van que vous aimerez."
        desc="Chaque annonce est inspectée, vérifiée et garantie par notre protection acheteur."
        image={heroBuy}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Protection acheteur", desc: "Inspection en 200 points sur chaque van" },
            { icon: Gauge, title: "Kilométrage vérifié", desc: "Historique de service et vérification du titre inclus" },
            { icon: Sparkles, title: "Financement concierge", desc: "Pré-approbation en moins de 24 heures" },
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
        <h2 className="font-display font-black text-3xl sm:text-4xl mb-8">À la vente cette semaine</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {market.map((v) => (
            <article key={v.name} className="group rounded-3xl overflow-hidden glass shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={v.img} alt={v.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg">{v.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-3.5 w-3.5" /> {v.loc}</p>
                <div className="mt-3 flex gap-3 text-xs text-foreground/70">
                  <span>{v.year}</span><span>·</span><span>{v.km} km</span>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <p className="font-display font-black text-2xl">{v.price.toLocaleString()} €</p>
                  <Link to="/" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--sunset)] hover:gap-2 transition-all">
                    Voir <ArrowRight className="h-4 w-4" />
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
