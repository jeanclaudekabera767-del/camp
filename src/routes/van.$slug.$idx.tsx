import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, BedDouble, Users, Fuel, Star, MapPin, ShieldCheck, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { getVan, type Van } from "@/lib/categories";
import { useCart } from "@/lib/cart";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/van/$slug/$idx")({
  loader: ({ params }) => {
    const data = getVan(params.slug, Number(params.idx));
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.van.name} — CampVan` },
          { name: "description", content: `${loaderData.van.name} à vendre à ${loaderData.van.location}. Achetez à partir de ${loaderData.van.sale.toLocaleString()} €.` },
          { property: "og:title", content: `${loaderData.van.name} — CampVan` },
          { property: "og:image", content: loaderData.van.img },
          { name: "twitter:image", content: loaderData.van.img },
        ]
      : [{ title: "Van — CampVan" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center p-6 bg-background">
      <div className="text-center">
        <h1 className="font-display font-black text-3xl">Van non trouvé</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-semibold">
          <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center p-6">
      <button onClick={reset} className="px-5 py-2 rounded-full bg-foreground text-background">Réessayer</button>
    </div>
  ),
  component: VanPage,
});

function VanPage() {
  const { van, category, idx } = Route.useLoaderData();
  const { add } = useCart();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const related: Van[] = category.vans.filter((_v: Van, i: number) => i !== idx).slice(0, 3);
  const monthly = Math.round(van.sale / 60);

  function handleAdd(go?: boolean) {
    add({
      slug: category.slug,
      idx,
      name: van.name,
      img: van.img,
      location: van.location,
      price: van.sale,
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
    if (go) navigate({ to: "/cart" });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            to="/category/$slug"
            params={{ slug: category.slug }}
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Retour à {category.name}
          </Link>

          <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
              <img src={van.img} alt={van.name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              {van.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--sunset)] text-white text-[11px] font-bold uppercase tracking-wider shadow-glow">
                  {van.badge}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--forest)]">{category.name}</span>
              <h1 className="mt-2 font-display font-black text-3xl sm:text-4xl leading-tight">{van.name}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-foreground/70">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {van.location}</span>
                <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-[var(--sunset)] text-[var(--sunset)]" /> {van.rating} ({van.reviews} avis)</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Spec icon={<BedDouble className="h-4 w-4" />} label="Couchettes" value={van.beds} />
                <Spec icon={<Users className="h-4 w-4" />} label="Places" value={van.seats} />
                <Spec icon={<Fuel className="h-4 w-4" />} label="Carburant" value={van.fuel} />
              </div>

              <div className="mt-6 rounded-3xl border border-black/5 bg-white p-5 shadow-soft">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--forest)]/10 text-[var(--forest)] text-[10px] font-bold uppercase tracking-wider">
                  À vendre
                </span>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display font-black text-4xl">{van.sale.toLocaleString()} €</span>
                </div>
                <p className="mt-2 text-sm text-foreground/70">
                  Ou financez à partir de <span className="font-semibold text-foreground">{monthly.toLocaleString()} €/mois</span> sur 60 mois.
                </p>
                <p className="mt-3 text-sm text-foreground/70">Inclut une garantie mécanique de 12 mois, une inspection en 200 points et une livraison gratuite dans un rayon de 300 km.</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleAdd(false)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-sm font-semibold transition"
                  >
                    {added ? <><Check className="h-4 w-4" /> Ajouté</> : <><ShoppingCart className="h-4 w-4" /> Ajouter au panier</>}
                  </button>
                  <button
                    onClick={() => handleAdd(true)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition"
                  >
                    Acheter maintenant
                  </button>
                </div>

                <p className="mt-4 inline-flex items-center gap-2 text-xs text-foreground/60">
                  <ShieldCheck className="h-3.5 w-3.5 text-[var(--forest)]" /> Garantie satisfait ou remboursé 7 jours
                </p>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="font-display font-black text-2xl">À propos de ce {category.name.slice(0, -1).toLowerCase()}</h2>
            <p className="mt-4 max-w-3xl text-foreground/75 leading-relaxed">
              {van.name} est situé à {van.location} et prêt à être remis. Chaque van vendu via CampVan est accompagné d'une
              inspection complète en 200 points, d'un historique de service vérifié, d'une vérification du titre et d'une garantie mécanique de 12 mois. {category.description}
            </p>
          </section>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display font-black text-2xl">Plus de {category.name.toLowerCase()}</h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r: Van) => {
                  const ri = category.vans.indexOf(r);
                  return (
                    <Link
                      key={`${r.name}-${ri}`}
                      to="/van/$slug/$idx"
                      params={{ slug: category.slug, idx: String(ri) }}
                      className="group rounded-3xl bg-white shadow-soft hover:shadow-elevated transition overflow-hidden border border-black/5"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={r.img} alt={r.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-display font-bold text-base leading-tight">{r.name}</h3>
                        <p className="mt-1 text-xs text-foreground/60 inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.location}</p>
                        <div className="mt-3 font-display font-black text-lg">{r.sale.toLocaleString()} €</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-foreground/5 p-3 text-center">
      <div className="inline-flex items-center gap-1 text-foreground/60 text-xs">{icon} {label}</div>
      <div className="mt-1 font-display font-bold">{value}</div>
    </div>
  );
}
