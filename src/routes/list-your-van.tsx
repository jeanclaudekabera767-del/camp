import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { useState } from "react";
import heroList from "@/assets/hero-lux-2.jpg";

export const Route = createFileRoute("/list-your-van")({
  head: () => ({
    meta: [
      { title: "Sell Your Van — List on CampVan" },
      { name: "description", content: "Sell your camper van for what it's worth. Free listing, inspection, photography and paperwork handled." },
      { property: "og:title", content: "Sell Your Van — CampVan" },
      { property: "og:description", content: "Most vans sell within 3 weeks. Free to list — concierge service included." },
      { property: "og:image", content: heroList },
    ],
  }),
  component: ListPage,
});

function ListPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Sellers earn more"
        title="Sell your van for the price it deserves."
        desc="Free listing, professional photography, full inspection and paperwork handled. Most CampVan sellers close within 21 days."
        image={heroList}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            {[
              { k: "$84,500", v: "Average selling price", d: "Based on Sprinter-class vans sold through CampVan, last 12 months." },
              { k: "0% listing fee", v: "Free to list", d: "Only pay a service fee when your van sells. No upfront cost." },
              { k: "21 days", v: "Average time to sell", d: "Backed by a buyer-ready marketplace of 50,000+ active shoppers." },
              { k: "4.9★", v: "Seller satisfaction", d: "Sellers rate our payouts, support, and buyer quality." },
            ].map((s) => (
              <div key={s.v} className="glass rounded-3xl p-6 shadow-soft flex gap-5">
                <p className="font-display font-black text-3xl text-[var(--sunset)] min-w-[120px]">{s.k}</p>
                <div>
                  <p className="font-display font-bold">{s.v}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass rounded-3xl p-7 shadow-soft sticky top-28">
            <h2 className="font-display font-black text-2xl">Get a free valuation</h2>
            <p className="text-sm text-muted-foreground mt-1">Takes under 60 seconds. No commitment.</p>
            {submitted ? (
              <div className="mt-8 rounded-2xl bg-[var(--sunset)]/10 p-5 text-center">
                <p className="font-display font-bold text-lg">Thanks — we'll be in touch within 24h.</p>
                <p className="text-sm text-muted-foreground mt-1">Check your inbox for your custom valuation report.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="mt-6 space-y-4"
              >
                <Field label="Van make & model" placeholder="e.g. Mercedes Sprinter 2022" />
                <Field label="City" placeholder="Where is your van based?" />
                <Field label="Email" type="email" placeholder="you@email.com" />
                <button type="submit" className="w-full px-5 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition">
                  Get my valuation
                </button>
                <p className="text-[11px] text-muted-foreground text-center">By submitting, you agree to our terms & privacy policy.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</span>
      <input
        required
        {...rest}
        className="mt-1.5 w-full rounded-2xl border border-foreground/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[var(--sunset)] transition"
      />
    </label>
  );
}
