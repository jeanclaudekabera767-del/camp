import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BedDouble, Users, Fuel, Star, MapPin, Crown, ShieldCheck, ShoppingCart } from "lucide-react";
import { categories, type CategoryData, type Van } from "@/lib/categories";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const data = categories[params.slug];
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — CampVan Locations & Ventes` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} sur CampVan` },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.hero },
          { name: "twitter:image", content: loaderData.hero },
        ]
      : [{ title: "Catégorie — CampVan" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-6">
      <div className="text-center">
        <h1 className="font-display font-black text-4xl">Catégorie non trouvée</h1>
        <Link to="/" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full bg-foreground text-background font-semibold">
          <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="text-center">
        <h1 className="font-display font-bold text-2xl">Quelque chose s'est mal passé</h1>
        <button onClick={reset} className="mt-4 px-5 py-2 rounded-full bg-foreground text-background">Réessayer</button>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const data = Route.useLoaderData() as CategoryData;
  const { add } = useCart();


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={data.hero} alt={data.name} className="absolute inset-0 h-full w-full object-cover animate-kenburns" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 h-full flex flex-col justify-between pt-8 pb-12">
          <Link to="/" className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full glass-dark text-white text-sm font-semibold hover:bg-white/20 transition">
            <ArrowLeft className="h-4 w-4" /> Toutes les catégories
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
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--forest)]">Entrez à l'intérieur</span>
                <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl">Un regard sur les intérieurs</h2>
              </div>
              <p className="text-foreground/70 max-w-md">Des salons en noyer aux salles de bain de qualité spa — chaque détail est conçu pour la longue route.</p>
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
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--forest)]">Disponible maintenant</span>
              <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl">{data.vans.length} {data.name.toLowerCase()} prêt(e)s à partir</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <ShieldCheck className="h-4 w-4 text-[var(--forest)]" /> Annulation gratuite · Assistance routière 24/7
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {data.vans.map((v: Van, i: number) => (
              <Link
                key={`${v.name}-${i}`}
                to="/van/$slug/$idx"
                params={{ slug: data.slug, idx: String(i) }}
                className="group block bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border/40 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={v.img}
                    alt={v.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-115"
                  />
                  {v.badge && (
                    <div className="absolute top-3 left-3 flex gap-2 z-10">
                      <span className="glass-dark text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xl">
                        {v.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-3/4 pointer-events-none" />
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base line-clamp-2 leading-snug">
                      {v.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 mt-1.5">
                      <MapPin className="h-3 w-3" /> {v.location}
                    </p>
                  </div>
                  <ul className="grid grid-cols-3 gap-2 text-[11px] sm:text-xs">
                    <li className="flex items-center gap-1.5 bg-muted/40 rounded-xl px-2.5 py-2 border border-border/20">
                      <BedDouble className="h-3 w-3" />
                      <span className="truncate text-foreground/80 font-medium">{v.beds} lits</span>
                    </li>
                    <li className="flex items-center gap-1.5 bg-muted/40 rounded-xl px-2.5 py-2 border border-border/20">
                      <Users className="h-3 w-3" />
                      <span className="truncate text-foreground/80 font-medium">{v.seats} places</span>
                    </li>
                    <li className="flex items-center gap-1.5 bg-muted/40 rounded-xl px-2.5 py-2 border border-border/20">
                      <Fuel className="h-3 w-3" />
                      <span className="truncate text-foreground/80 font-medium">{v.fuel}</span>
                    </li>
                  </ul>
                  <div className="flex items-end justify-between gap-2 pt-3 border-t border-border/30">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Prix TTC</p>
                      <p className="font-display font-extrabold text-lg sm:text-xl" style={{ color: "var(--sunset)" }}>
                        {v.sale.toLocaleString()} €
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-foreground">
                      Voir détails
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--gradient-warm)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">
          <h2 className="font-display font-black text-3xl sm:text-5xl">Vous ne trouvez pas votre véhicule idéal?</h2>
          <p className="mt-4 text-white/90 text-lg">Dites-nous vos dates et destination de rêve — nous vous trouverons un van sélectionné à la main.</p>
          <Link to="/" className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-white text-foreground font-semibold shadow-elevated hover:-translate-y-0.5 transition">
            Voir toutes les catégories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
