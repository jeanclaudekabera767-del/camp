import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/SiteChrome";
import { Search, Calendar, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroHow from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-2.jpeg";

const steps = [
  { icon: Search, title: "1. Parcourez la place de marché", desc: "Filtrez par type de van, emplacement, année et budget. Chaque annonce est inspectée et vérifiée." },
  { icon: Calendar, title: "2. Réservez & financez", desc: "Placez un dépôt remboursable, obtenez une pré-approbation de financement en 24 heures et bloquez votre prix." },
  { icon: MapPin, title: "3. Livraison & prenez la route", desc: "Livraison à domicile ou retrait concierge. Clés en main avec une garantie de 12 mois." },
];

const faqs = [
  { q: "Ai-je besoin d'un permis spécial?", a: "Pour la plupart des vans, un permis de conduire standard suffit. Les plus grands camping-cars de classe A peuvent nécessiter des endorsements supplémentaires selon votre pays." },
  { q: "Le van est-il inspecté avant que je l'achète?", a: "Oui — chaque van vendu via CampVan passe une inspection en 200 points avec historique de service vérifié et vérification du titre." },
  { q: "Proposez-vous du financement?", a: "Oui. Nous nous associons à des prêteurs leaders pour offrir une pré-approbation en moins de 24 heures, avec des durées allant jusqu'à 84 mois." },
  { q: "Y a-t-il une garantie de retour?", a: "Chaque achat inclut une garantie satisfait ou remboursé de 7 jours et une garantie mécanique de 12 mois." },
];

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "Comment ça marche — CampVan" },
      { name: "description", content: "Acheter un camping-car se fait en trois étapes simples. Voici comment CampVan vous livre un van inspecté et financé à votre porte." },
      { property: "og:title", content: "Comment ça marche — CampVan" },
      { property: "og:description", content: "Parcourez, réservez, prenez la route — avec livraison, financement et garantie inclus." },
      { property: "og:image", content: heroHow },
    ],
  }),
  component: HowPage,
});

function HowPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Comment ça marche"
        title="Trois étapes vers la route ouverte."
        desc="Pas de marathon de paperasse. Pas de surprises. Juste un van et la prochaine sortie."
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
            { icon: ShieldCheck, title: "Vendeurs vérifiés", desc: "Chaque vendeur a son identité vérifiée et son van inspecté." },
            { icon: Sparkles, title: "Place de marché premium", desc: "Vans sélectionnés à la main, historique de service complet." },
            { icon: Star, title: "4.9★ moyenne", desc: "Fait confiance par les acheteurs sur deux continents." },
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
        <h2 className="font-display font-black text-3xl sm:text-4xl text-center">Foire aux questions</h2>
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
          <Link to="/buy" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition">
            Commencer à explorer les vans
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
