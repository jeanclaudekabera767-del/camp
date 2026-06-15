import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { useState } from "react";
import heroList from "@/assets/hero-lux-2.jpg";

export const Route = createFileRoute("/list-your-van")({
  head: () => ({
    meta: [
      { title: "List Your Van — Earn with CampVan" },
      { name: "description", content: "Turn your camper van into income. List for free and start earning when it sits parked." },
      { property: "og:title", content: "List Your Van — CampVan" },
      { property: "og:description", content: "Average hosts earn $1,840/month. List in minutes." },
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
        eyebrow="Hosts earn more"
        title="List your van. Earn on the days it sits."
        desc="Average CampVan hosts earn $1,840/month. Free to list, insured every trip, and you stay in full control of your calendar."
        image={heroList}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            {[
              { k: "$1,840", v: "Average monthly earnings", d: "Based on a Sprinter-class van in California, last 12 months." },
              { k: "0% setup fee", v: "Free to list", d: "Only pay a service fee when you earn. No subscription." },
              { k: "$1M cover", v: "Insurance per trip", d: "Comprehensive coverage plus 24/7 roadside support for renters." },
              { k: "4.9★", v: "Host satisfaction", d: "Hosts rate our payouts, support, and renter quality." },
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
            <h2 className="font-display font-black text-2xl">Get a free earnings estimate</h2>
            <p className="text-sm text-muted-foreground mt-1">Takes under 60 seconds. No commitment.</p>
            {submitted ? (
              <div className="mt-8 rounded-2xl bg-[var(--sunset)]/10 p-5 text-center">
                <p className="font-display font-bold text-lg">Thanks — we'll be in touch within 24h.</p>
                <p className="text-sm text-muted-foreground mt-1">Check your inbox for your custom earnings report.</p>
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
                  Estimate my earnings
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
