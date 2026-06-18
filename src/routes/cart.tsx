import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingCart, Trash2, ShieldCheck, MapPin } from "lucide-react";
import { useCart } from "@/lib/cart";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your cart — CampVan" },
      { name: "description", content: "Review and check out your camper van purchases." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, remove, update, subtotal, clear } = useCart();
  const fees = items.length > 0 ? 499 : 0;
  const total = subtotal + fees;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--forest)]">Checkout</span>
              <h1 className="mt-2 font-display font-black text-4xl sm:text-5xl">Your cart</h1>
            </div>
            {items.length > 0 && (
              <button onClick={clear} className="text-sm font-semibold text-foreground/60 hover:text-foreground inline-flex items-center gap-1">
                <Trash2 className="h-4 w-4" /> Clear cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-dashed border-foreground/15 p-12 text-center">
              <div className="mx-auto h-16 w-16 grid place-items-center rounded-full bg-foreground/5">
                <ShoppingCart className="h-7 w-7 text-foreground/50" />
              </div>
              <h2 className="mt-5 font-display font-bold text-2xl">Your cart is empty</h2>
              <p className="mt-2 text-foreground/60">Browse the marketplace and find your dream camper.</p>
              <Link to="/buy" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-semibold">
                Shop vans <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid lg:grid-cols-[1.5fr_1fr] gap-8">
              <ul className="space-y-4">
                {items.map((i) => {
                  const line = i.price * i.qty;
                  return (
                    <li key={i.id} className="flex gap-4 p-4 rounded-3xl bg-white border border-black/5 shadow-soft">
                      <Link
                        to="/van/$slug/$idx"
                        params={{ slug: i.slug, idx: String(i.idx) }}
                        className="relative h-28 w-36 sm:h-32 sm:w-44 flex-shrink-0 overflow-hidden rounded-2xl"
                      >
                        <img src={i.img} alt={i.name} className="absolute inset-0 h-full w-full object-cover" />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--forest)]/10 text-[var(--forest)]">
                              Purchase
                            </span>
                            <h3 className="mt-1 font-display font-bold text-base sm:text-lg truncate">{i.name}</h3>
                            <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-foreground/60">
                              <MapPin className="h-3 w-3" /> {i.location}
                            </p>
                          </div>
                          <button onClick={() => remove(i.id)} aria-label="Remove" className="text-foreground/40 hover:text-foreground transition">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-3 flex items-end justify-between gap-3 flex-wrap">
                          <div className="inline-flex items-center gap-2 text-sm">
                            <span className="text-foreground/60">Qty:</span>
                            <button
                              onClick={() => update(i.id, { qty: Math.max(1, i.qty - 1) })}
                              className="h-7 w-7 rounded-full bg-foreground/5 font-bold"
                            >−</button>
                            <span className="font-semibold w-6 text-center">{i.qty}</span>
                            <button
                              onClick={() => update(i.id, { qty: i.qty + 1 })}
                              className="h-7 w-7 rounded-full bg-foreground/5 font-bold"
                            >+</button>
                          </div>
                          <div className="font-display font-black text-lg">${line.toLocaleString()}</div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <aside className="h-fit rounded-3xl bg-white border border-black/5 shadow-soft p-6 sticky top-28">
                <h2 className="font-display font-black text-xl">Order summary</h2>
                <dl className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-foreground/70">Subtotal</dt><dd className="font-semibold">${subtotal.toLocaleString()}</dd></div>
                  <div className="flex justify-between"><dt className="text-foreground/70">Delivery & inspection</dt><dd className="font-semibold">${fees}</dd></div>
                  <div className="flex justify-between pt-3 border-t border-black/5">
                    <dt className="font-display font-black">Total</dt>
                    <dd className="font-display font-black text-xl">${total.toLocaleString()}</dd>
                  </div>
                </dl>
                <button className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition">
                  Checkout <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 inline-flex items-center gap-2 text-xs text-foreground/60">
                  <ShieldCheck className="h-3.5 w-3.5 text-[var(--forest)]" /> Secure payment · 7-day money-back guarantee
                </p>
              </aside>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
