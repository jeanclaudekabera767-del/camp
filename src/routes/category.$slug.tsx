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
  const data = Route.useLoaderData() as CategoryData;
  const { add } = useCart();


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
