import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { Search, Calendar, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroHow from "@/assets/hero-lux-1.jpg";

const steps = [
  { icon: Search, title: "1. Search & compare", desc: "Filter by dates, location, sleeps, and amenities. Every van comes with a verified host." },
  { icon: Calendar, title: "2. Book in minutes", desc: "Instant confirmation, transparent pricing, and free 24-hour cancellation." },
  { icon: MapPin, title: "3. Pick up & roam", desc: "Meet your host, get the keys, hit the road. Roadside support included." },
];

const faqs = [
  { q: "Do I need a special license?", a: "For most vans, a standard driver's license is all you need. Larger Class A motorhomes may require additional endorsements depending on your country." },
  { q: "Is insurance included?", a: "Yes — every rental includes comprehensive insurance and 24/7 roadside assistance." },
  { q: "Can I take a van across borders?", a: "Many of our European hosts allow cross-border travel. Check the listing or message the host directly." },
  { q: "What if I want to buy instead of rent?", a: "Browse our marketplace — every listing is inspected and financing is available." },
];

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it Works — CampVan" },
      { name: "description", content: "Booking a camper van takes three simple steps. Here's how CampVan works for renters and buyers." },
      { property: "og:title", content: "How it Works — CampVan" },
      { property: "og:description", content: "Search, book, and hit the road in minutes." },
      { property: "og:image", content: heroHow },
    ],
  }),
  component: HowPage,
});

function HowPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How it works"
        title="Three steps to the open road."
        desc="No paperwork marathon. No surprises. Just a van and the next exit sign."
        image={heroHow}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="glass rounded-3xl p-7 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: "var(--gradient-warm)" }}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-xl mt-5">{s.title}</h3>
              <p className="text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Verified hosts", desc: "Every owner is identity-checked and reviewed." },
            { icon: Sparkles, title: "Premium fleet", desc: "Hand-picked vans, regularly serviced." },
            { icon: Star, title: "4.9★ average", desc: "Over 40,000 trips and counting." },
          ].map((p) => (
            <div key={p.title} className="rounded-3xl p-6 border border-foreground/10">
              <p.icon className="h-5 w-5 text-[var(--sunset)]" />
              <h4 className="font-display font-bold mt-3">{p.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-24">
        <h2 className="font-display font-black text-3xl sm:text-4xl text-center">Frequently asked</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="glass rounded-2xl p-5 shadow-soft group">
              <summary className="font-display font-bold cursor-pointer list-none flex items-center justify-between">
                {f.q}
                <span className="text-[var(--sunset)] group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/rent" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition">
            Start exploring vans
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
