import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { useState } from "react";
import heroList from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-1.jpeg";

export const Route = createFileRoute("/list-your-van")({
  head: () => ({
    meta: [
      { title: "Vendez votre van — Inscrivez-le sur CampVan" },
      { name: "description", content: "Vendez votre camping-car au prix qu'il mérite. Annonce gratuite, inspection, photographie et paperasse gérées." },
      { property: "og:title", content: "Vendez votre van — CampVan" },
      { property: "og:description", content: "La plupart des vans se vendent en 3 semaines. Gratuit à lister — service concierge inclus." },
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
        eyebrow="Les vendeurs gagnent plus"
        title="Vendez votre van au prix qu'il mérite."
        desc="Annonce gratuite, photographie professionnelle, inspection complète et paperasse gérée. La plupart des vendeurs CampVan concluent dans les 21 jours."
        image={heroList}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            {[
              { k: "68 500 €", v: "Prix de vente moyen", d: "Basé sur les vans de classe Sprinter vendus via CampVan, ces 12 derniers mois." },
              { k: "0% frais d'annonce", v: "Gratuit à lister", d: "Ne payez de frais de service que lorsque votre van est vendu. Pas de coût initial." },
              { k: "21 jours", v: "Temps moyen de vente", d: "Soutenus par une place de marché prête à l'achat de 50 000+ acheteurs actifs." },
              { k: "4.9★", v: "Satisfaction vendeur", d: "Les vendeurs notent nos paiements, notre support et la qualité des acheteurs." },
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
            <h2 className="font-display font-black text-2xl">Obtenez une évaluation gratuite</h2>
            <p className="text-sm text-muted-foreground mt-1">Prend moins de 60 secondes. Pas d'engagement.</p>
            {submitted ? (
              <div className="mt-8 rounded-2xl bg-[var(--sunset)]/10 p-5 text-center">
                <p className="font-display font-bold text-lg">Merci — nous vous recontacterons dans les 24h.</p>
                <p className="text-sm text-muted-foreground mt-1">Vérifiez votre boîte mail pour votre rapport d'évaluation personnalisé.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="mt-6 space-y-4"
              >
                <Field label="Marque & modèle du van" placeholder="ex. Mercedes Sprinter 2022" />
                <Field label="Ville" placeholder="Où est basé votre van?" />
                <Field label="Email" type="email" placeholder="vous@email.com" />
                <button type="submit" className="w-full px-5 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition">
                  Obtenir mon évaluation
                </button>
                <p className="text-[11px] text-muted-foreground text-center">En soumettant, vous acceptez nos conditions et notre politique de confidentialité.</p>
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
