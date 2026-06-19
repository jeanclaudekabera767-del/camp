import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Search,
  Star,
  BedDouble,
  Fuel,
  Crown,
  Gauge,
  ShieldCheck,
  Globe2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Menu,
} from "lucide-react";
import { categories } from "@/lib/categories";
import adriaImg from "@/assets/Adria Sonic Supreme I 710S/adria-1.jpeg";
import adriaSupersonicImg from "@/assets/ADRIA SUPERSONIC 780 DL – INTÉGRAL/adria-supersonic-780-1.jpeg";
import benimarImg from "@/assets/ford-benimar/benimar-tessoro-444-1.jpeg";
import buerstnerImg from "@/assets/Camping Car Bürstner Élégance i890g/buerstner-1.jpeg";
import burstnerEleganceImg from "@/assets/Camping Car BURSTNER ELEGANCE I 800/burstner-elegance-800-1.jpeg";
import carthagoImg from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-1.jpeg";
import carthagoNewImg from "@/assets/CARTHAGO  Fiat Ducato 2.2 de 180/carthago-new-2.jpeg";
import fiatKnausSafariImg from "@/assets/FIAT KNAUS SKY 700 MOSKUS SAFARI/fiat-knaus-safari-2-1.jpeg";
import fiatRapidoImg from "@/assets/FIAT 2.3 165 CH Rapido 7099+F/fiat-rapido-7099-1-1.jpeg";
import xgoImg from "@/assets/XGO DYNAMIC 27 – CAPUCINE/xgo-dynamic-27-1.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampVan — Louer ou acheter un camping-car" },
      { description: "Trouvez votre camping-car idéal, à louer ou à acheter, pour vos aventures en France et en Europe." },
      { property: "og:title", content: "CampVan — Trouvez votre camping-car idéal" },
      { property: "og:description", content: "Louez ou achetez un camping-car pour vos prochaines aventures en Europe." },
    ],
  }),
  component: Home,
});

function Home() {
  const featuredVans = categories["tous-les-camping-cars"].vans;
  const heroVans = categories["tous-les-camping-cars"].vans;
  
  // Create hero items with image + corresponding van
  const heroItems = [
    { img: adriaImg, van: heroVans.find(v => v.name.includes("Adria Sonic")) || heroVans[0] },
    { img: adriaSupersonicImg, van: heroVans.find(v => v.name.includes("ADRIA SUPERSONIC")) || heroVans[1] },
    { img: benimarImg, van: heroVans.find(v => v.name.includes("BENIMAR")) || heroVans[2] },
    { img: buerstnerImg, van: heroVans.find(v => v.name.includes("Bürstner")) || heroVans[3] },
    { img: burstnerEleganceImg, van: heroVans.find(v => v.name.includes("BURSTNER")) || heroVans[4] },
    { img: carthagoImg, van: heroVans.find(v => v.name.includes("CARTHAGO")) || heroVans[5] },
    { img: carthagoNewImg, van: heroVans.find(v => v.name.includes("CARTHAGO")) || heroVans[6] },
    { img: fiatKnausSafariImg, van: heroVans.find(v => v.name.includes("KNAUS")) || heroVans[7] },
    { img: fiatRapidoImg, van: heroVans.find(v => v.name.includes("Rapido")) || heroVans[8] },
    { img: xgoImg, van: heroVans.find(v => v.name.includes("XGO")) || heroVans[9] },
  ];
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero heroItems={heroItems} />
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 -mt-6 sm:-mt-8">
        <SearchBar />
      </div>
      <CategoriesSection />
      <FeaturedVans featuredVans={featuredVans} />
      <HowItWorks />
      <Destinations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-4">
        <div className="glass flex items-center justify-between rounded-full px-4 sm:px-6 py-3 shadow-soft">
          <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-lg tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full text-white shadow-glow" style={{ background: "var(--gradient-warm)" }}>
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 17V8a2 2 0 0 1 2-2h10l4 5v6"/>
                <circle cx="7.5" cy="17.5" r="2"/>
                <circle cx="16.5" cy="17.5" r="2"/>
              </svg>
            </span>
            <span className="text-foreground">CampVan</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80">
            <Link to="/buy" className="hover:text-foreground transition">Acheter un Camping-Car</Link>
            <Link to="/destinations" className="hover:text-foreground transition">Destinations</Link>
            <Link to="/how-it-works" className="hover:text-foreground transition">Comment ça marche</Link>
            <Link to="/list-your-van" className="hover:text-foreground transition">Vendre votre camping-car</Link>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-semibold rounded-full hover:bg-white/40 transition">Se connecter</button>
            <button className="px-4 py-2 text-sm font-semibold rounded-full bg-foreground text-background hover:opacity-90 transition">Commencer</button>
          </div>
          <div className="md:hidden flex items-center gap-1">
            <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full bg-white/60">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden glass mt-2 rounded-3xl p-4 flex flex-col gap-2 text-sm font-medium">
            <Link to="/buy" onClick={() => setOpen(false)}>Acheter un Camping-Car</Link>
            <Link to="/destinations" onClick={() => setOpen(false)}>Destinations</Link>
            <Link to="/how-it-works" onClick={() => setOpen(false)}>Comment ça marche</Link>
            <Link to="/list-your-van" onClick={() => setOpen(false)}>Vendre votre camping-car</Link>
            <button className="mt-2 px-4 py-2 rounded-full bg-foreground text-background">Commencer</button>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero({ heroItems }: { heroItems: { img: string; van: any }[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % heroItems.length), 4200);
    return () => clearInterval(id);
  }, [paused, heroItems.length]);

  const go = (n: number) => setIndex((n + heroItems.length) % heroItems.length);
  const activeItem = heroItems[index];
  const activeVan = activeItem.van;

  return (
    <section className="relative isolate min-h-[56vh] sm:min-h-[60vh] max-h-[680px] w-full overflow-hidden">
      <div
        className="absolute inset-0 flex h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.83,0,0.17,1)] will-change-transform"
        style={{ width: `${heroItems.length * 100}%`, transform: `translateX(-${index * (100 / heroItems.length)}%)` }}
      >
        {heroItems.map((item, i) => (
          <div key={i} className="relative h-full shrink-0" style={{ width: `${100 / heroItems.length}%` }}>
            <img
              src={item.img}
              alt={item.van.name}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/38 via-black/8 to-black/12 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/8 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[56vh] sm:min-h-[60vh] max-h-[680px] max-w-7xl items-end px-4 sm:px-6 pt-24 sm:pt-28 pb-18 sm:pb-20">
        <div className="w-full max-w-3xl text-white">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/28 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-md">
              <Crown className="h-3.5 w-3.5 text-[var(--sunset)]" />
              Camping-Car Premium
            </span>
            <h1 key={index} className="mt-4 font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.02] animate-fade-up text-balance">
              {activeVan.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90">
              {activeVan.details?.substring(0, 120) || "Camping-car premium avec garantie 5 ans et livraison en Europe."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={`/van/tous-les-camping-cars/${categories["tous-les-camping-cars"].vans.indexOf(activeVan)}`} className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-white font-semibold shadow-glow transition hover:-translate-y-0.5" style={{ background: "var(--gradient-warm)" }}>
                Voir les détails <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#categories" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-6 py-3.5 text-white font-semibold backdrop-blur-md transition hover:bg-white/20">
                Parcourir le catalogue
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/90">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--sunset)]" /> Garantie 5 ans</span>
              <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4 text-[var(--sunset)]" /> Livraison Europe</span>
              <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-[var(--sunset)]" /> Note {activeVan.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-4 bottom-4 z-20 sm:inset-x-6 sm:bottom-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.75rem] border border-white/14 bg-black/24 px-4 py-3 text-white backdrop-blur-lg">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--sunset)]/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                <Sparkles className="h-3 w-3" /> {activeVan.badge || "Nouveau"}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/90">
                <Star className="h-4 w-4 fill-[var(--sunset)]" />
                {activeVan.rating}
              </span>
            </div>
            <div className="mt-2 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0">
                <p className="truncate font-display text-lg font-bold sm:text-xl">{activeVan.name}</p>
                <p className="truncate text-sm text-white/72">{activeVan.location} • {activeVan.beds} lits • {activeVan.seats} places</p>
              </div>
              <div className="flex items-end gap-5 text-sm">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-white/60">Prix</p>
                  <p className="font-display text-2xl font-extrabold text-[var(--sunset)]">{activeVan.sale.toLocaleString()} €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchBar() {
  return (
    <div className="relative animate-fade-up">
      <div className="glass rounded-3xl p-2 sm:p-3 shadow-elevated max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1.4fr_1fr_auto] gap-1">
          <Field icon={<MapPin className="h-4 w-4" />} label="Emplacement" placeholder="Ville ou pays" />
          <Field icon={<BedDouble className="h-4 w-4" />} label="Type de camping-car" placeholder="N'importe quel type" />
          <Field icon={<Gauge className="h-4 w-4" />} label="Prix maximum" placeholder="75 000 €" />
          <Field icon={<Calendar className="h-4 w-4" />} label="Année" placeholder="2020+" />
          <button className="flex items-center justify-center gap-2 rounded-2xl text-white font-semibold px-6 py-4 shadow-glow hover:opacity-95 transition" style={{ background: "var(--gradient-warm)" }}>
            <Search className="h-4 w-4" />
            <span>Rechercher</span>
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-foreground/70">
        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[var(--sunset)]" /> Protection acheteur</span>
        <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 text-[var(--sunset)]" /> Garantie 5 ans</span>
        <span className="inline-flex items-center gap-1.5"><Globe2 className="h-4 w-4 text-[var(--sunset)]" /> Livraison Europe</span>
      </div>
    </div>
  );
}

function Field({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <label className="group flex flex-col rounded-2xl bg-white/70 hover:bg-white/85 transition px-4 py-3 cursor-text">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60 flex items-center gap-1.5">
        {icon} {label}
      </span>
      <input
        placeholder={placeholder}
        className="mt-1 bg-transparent outline-none text-sm font-medium text-foreground placeholder:text-foreground/40"
      />
    </label>
  );
}

function CategoriesSection() {
  return (
    <section id="categories" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Notre catalogue"
          title="Tous nos camping-cars"
          desc="Camping-cars premium, neufs et d'occasion, sélectionnés à la main."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.values(categories).map((cat: any) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="group relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={cat.hero}
                alt={cat.name}
                width={1920}
                height={1080}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                <h3 className="font-display font-bold text-2xl sm:text-3xl">{cat.name}</h3>
                <p className="text-sm text-white/80 mt-2">{cat.count}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 group-hover:gap-2 transition-all">
                  Voir les camping-cars
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedVans({ featuredVans }: { featuredVans: any[] }) {
  return (
    <section id="for-sale" className="relative py-24 sm:py-32" style={{ background: "var(--gradient-sand)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="À la une"
            title="Camping-car disponible"
            desc="Inspecté, financé et livré — votre prochain camping-car est à un clic."
            align="left"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {featuredVans.map((van, i) => (
            <VanCard key={i} van={van} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VanCard({ van, index }: { van: any; index: number }) {
  return (
    <Link
      key={index}
      to={`/van/tous-les-camping-cars/${index}`}
      className="group block bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border/40 hover:-translate-y-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={van.img}
          alt={van.name}
          width={1024}
          height={768}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-115"
        />
        {van.badge && (
          <div className="absolute top-3 left-3 flex gap-2 z-10">
            <span className="glass-dark text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-xl">
              {van.badge}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-3/4 pointer-events-none" />
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-display font-bold text-sm sm:text-base line-clamp-2 leading-snug">
            {van.name}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 mt-1.5">
            <MapPin className="h-3 w-3" /> {van.location}
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-2 text-[11px] sm:text-xs">
          <Spec icon={<BedDouble className="h-3 w-3" />}>{van.beds} lits</Spec>
          <Spec icon={<Users className="h-3 w-3" />}>{van.seats} places</Spec>
          <Spec icon={<Fuel className="h-3 w-3" />}>{van.fuel}</Spec>
        </ul>

        <div className="flex items-end justify-between gap-2 pt-3 border-t border-border/30">
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Prix TTC</p>
            <p className="font-display font-extrabold text-lg sm:text-xl" style={{ color: "var(--sunset)" }}>
              {van.sale.toLocaleString()} €
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-foreground">
            Voir détails
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function Spec({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-1.5 bg-muted/40 rounded-xl px-2.5 py-2 border border-border/20">
      {icon}
      <span className="truncate text-foreground/80 font-medium">{children}</span>
    </li>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Parcourir", desc: "Filtrez les camping-cars inspectés par style, emplacement et budget. Enregistrez vos favoris." },
    { n: "02", title: "Réserver", desc: "Placez un dépôt remboursable, sécurisez votre camping-car et obtenez une pré-approbation de financement en 24 heures." },
    { n: "03", title: "Prendre la route", desc: "Nous livrons à votre porte ou organisons un retrait conciergerie — clés en main, route devant vous." },
  ];
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Comment ça marche" title="Trois étapes vers la route ouverte" />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-3xl p-8 bg-card shadow-soft border border-border/60 overflow-hidden">
              <span className="absolute -top-6 -right-4 font-display font-extrabold text-[8rem] leading-none select-none" style={{ color: "color-mix(in oklab, var(--sunset) 18%, transparent)" }}>{s.n}</span>
              <h3 className="relative font-display text-2xl font-bold">{s.title}</h3>
              <p className="relative mt-3 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  const countries = [
    "France", "Allemagne", "Espagne", "Italie", "Suisse", "Portugal", "Pays-Bas"
  ];
  return (
    <section id="destinations" className="py-24 sm:py-32 text-white relative overflow-hidden" style={{ background: "var(--forest-deep)" }}>
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(60% 60% at 20% 30%, var(--sky) 0%, transparent 60%), radial-gradient(40% 40% at 80% 80%, var(--sunset) 0%, transparent 60%)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sunset)]">Réseau de livraison</span>
            <h2 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl">Deux continents.<br />Une adresse de livraison — la vôtre.</h2>
            <p className="mt-4 text-white/75 text-lg">Hubs de livraison conciergerie à travers toute l'Europe, avec livraison porte à porte dans la plupart des grandes villes.</p>
          </div>
          <div className="glass-dark rounded-3xl p-4 grid grid-cols-2 gap-2">
            <Stat k="1" v="Camping-car" />
            <Stat k="7" v="Pays" />
            <Stat k="5" v="Ans garantie" />
            <Stat k="5.0★" v="Note" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
          {countries.map((c) => (
            <button key={c} className="glass-dark rounded-2xl p-4 text-left hover:bg-white/10 transition">
              <MapPin className="h-4 w-4 text-[var(--sunset)]" />
              <p className="mt-2 font-semibold">{c}</p>
              <p className="text-xs text-white/60 mt-0.5">Voir les camping-cars →</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="px-4 py-3 rounded-2xl bg-white/5">
      <p className="font-display font-extrabold text-2xl text-white">{k}</p>
      <p className="text-xs text-white/70">{v}</p>
    </div>
  );
}

function Testimonials() {
  const items = [
    { 
      q: "Nous avons acheté notre camping-car via CampVan et il a été livré à notre porte en 10 jours. Processus impeccable et équipe très réactive.", 
      a: "Marta Dubois", 
      loc: "Paris, France",
      van: "Adria Sonic Supreme" 
    },
    { 
      q: "Le financement était simple et l'équipe a géré tous les détails. Notre famille adore notre nouveau camping-car !", 
      a: "Paul et Sophie Martin", 
      loc: "Lyon, France",
      van: "Challenger S194 Sport" 
    },
    { 
      q: "J'ai vendu mon Sprinter en trois semaines au prix que je voulais. L'équipe a géré l'inspection et toute la paperasse.", 
      a: "Thomas Leroy", 
      loc: "Marseille, France",
      van: "Vendeur vérifié" 
    },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Aimé par les voyageurs" title="Des histoires vraies de la route" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-3xl p-7 bg-card shadow-soft border border-border/60 flex flex-col">
              <div className="flex gap-0.5 text-[var(--sunset)]">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-lg font-medium leading-relaxed text-foreground">« {t.q} »</blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border/40">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full text-white" style={{ background: "var(--gradient-warm)" }}>
                    {t.a.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.a}</p>
                    <p className="text-xs text-muted-foreground">{t.loc} • {t.van}</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="list" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 text-white" style={{ background: "var(--gradient-cool)" }}>
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--sunset)]/30 blur-3xl" />
          <div className="absolute -left-10 -bottom-20 h-72 w-72 rounded-full bg-[var(--sky)]/40 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]">Possédez un camping-car ?</span>
              <h2 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl leading-tight">Vendez votre camping-car au prix qu'il mérite.</h2>
              <p className="mt-4 text-white/85 text-lg max-w-xl">Listez votre camping-car en quelques minutes. Notre équipe gère l'inspection, la photographie et la paperasse — la plupart des camping-cars se vendent en moins de 3 semaines.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/list-your-van" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--sunset)] text-white font-semibold shadow-glow hover:-translate-y-0.5 transition">
                  Vendre votre camping-car <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/how-it-works" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/25 transition">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="glass rounded-3xl p-6 text-foreground">
              <p className="text-sm text-foreground/70">Prix de vente</p>
              <p className="font-display font-extrabold text-5xl mt-1">75 000 €</p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <Mini k="5 ans" v="garantie" />
                <Mini k="5.0★" v="note" />
                <Mini k="0%" v="frais de liste" />
              </div>
              <p className="text-xs text-foreground/60 mt-4">Basé sur le camping-car disponible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mini({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl bg-white/70 px-3 py-3">
      <p className="font-display font-bold text-lg">{k}</p>
      <p className="text-[11px] uppercase tracking-wider text-foreground/60">{v}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-white/80" style={{ background: "var(--forest-deep)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 md:grid-cols-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-extrabold text-xl text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full text-white" style={{ background: "var(--gradient-warm)" }}>
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 17V8a2 2 0 0 1 2-2h10l4 5v6"/>
                <circle cx="7.5" cy="17.5" r="2"/>
                <circle cx="16.5" cy="17.5" r="2"/>
              </svg>
            </span>
            CampVan
          </div>
          <p className="mt-4 max-w-sm text-sm">La place de marché premium pour acheter des camping-cars, vans aménagés et motorhomes à travers toute l'Europe.</p>
          <p className="mt-4 text-xs text-white/50">CampVan, SAS • 123 Rue de la République • 75001 Paris • France</p>
        </div>
        <FooterCol title="Acheter" links={["Camping-Cars", "Motorhomes", "Luxe", "Familiaux"]} />
        <FooterCol title="Services" links={["Financement", "Inspections", "Livraison", "Garantie"]} />
        <FooterCol title="Entreprise" links={["À propos", "Blog", "Carrières", "Presse", "Contact"]} />
        <FooterCol title="Légal" links={["Conditions générales", "Politique de confidentialité", "Gestion des cookies", "Mentions légales", "Droit de rétractation"]} />
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} CampVan, SAS. Tous droits réservés.</p>
          <div className="flex gap-5"><a href="#" className="hover:text-white transition">Confidentialité</a><a href="#" className="hover:text-white transition">CGV</a><a href="#" className="hover:text-white transition">Cookies</a><a href="#" className="hover:text-white transition">Mentions légales</a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>)}
      </ul>
    </div>
  );
}

function SectionHead({ eyebrow, title, desc, align = "center" }: { eyebrow: string; title: string; desc?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sunset)]">{eyebrow}</span>
      <h2 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl leading-[1.05]">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground text-lg">{desc}</p>}
    </div>
  );
}
