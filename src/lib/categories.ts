import heroLux1 from "@/assets/van/van-new-1.jpg";
import heroLux2 from "@/assets/van/van-new-2.jpg";
import heroLux3 from "@/assets/van/van-new-3.jpg";
import heroLux4 from "@/assets/van/van-new-4.jpg";
import intLux1 from "@/assets/van/van-new-5.jpg";
import intLux2 from "@/assets/van/van-new-6.jpg";
import intLux3 from "@/assets/van/van-new-7.jpg";
import intLux4 from "@/assets/van/van-new-8.jpg";
import extLux1 from "@/assets/van/van-new-9.jpg";
import extLux2 from "@/assets/van/van-new-10.jpg";
import extLux3 from "@/assets/van/van-new-11.jpg";
import extOff1 from "@/assets/van/van-new-12.jpg";
import extFam1 from "@/assets/van/van-new-13.jpg";
import extRv1 from "@/assets/van/van-new-14.jpg";
import extBudget1 from "@/assets/van/van-new-15.jpg";
import extVan1 from "@/assets/van/van-new-16.jpg";
import van1 from "@/assets/van/van-new-17.jpg";
import van2 from "@/assets/van/van-new-18.jpg";
import van3 from "@/assets/van/van-new-19.jpg";
import catVan from "@/assets/van/van-new-20.jpg";
import catRv from "@/assets/van/van-new-21.jpg";
import catFamily from "@/assets/van/van-new-22.jpg";
import catOffroad from "@/assets/van/van-new-23.jpg";
import catBudget from "@/assets/van/van-new-24.jpg";

export type Van = {
  img: string;
  name: string;
  location: string;
  rent: number;
  sale: number;
  beds: number;
  seats: number;
  fuel: string;
  rating: number;
  reviews: number;
  badge?: string;
};

export type CategoryData = {
  slug: string;
  name: string;
  hero: string;
  tagline: string;
  description: string;
  count: string;
  interiors?: { img: string; label: string }[];
  vans: Van[];
};

const luxuryVans: Van[] = [
  { img: heroLux1, name: "Mercedes Sprinter Édition Noire", location: "Malibu, Californie", rent: 389, sale: 68500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.98, reviews: 142, badge: "Signature" },
  { img: heroLux2, name: "Alpine Summit 4×4 Pop-Top", location: "Chamonix, France", rent: 329, sale: 42000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.95, reviews: 98, badge: "Overland" },
  { img: heroLux3, name: "Canyon Silver Voyager", location: "Moab, Utah", rent: 279, sale: 44900, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92, reviews: 76 },
  { img: heroLux4, name: "Camper Lakeside Skyview", location: "Bavière, Allemagne", rent: 259, sale: 39000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.97, reviews: 88, badge: "Toit Verre" },
  { img: extLux1, name: "Amalfi Black Pearl", location: "Côte Amalfitaine, Italie", rent: 349, sale: 56000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 64 },
  { img: extLux2, name: "Tuscany White Voyager", location: "Toscane, Italie", rent: 299, sale: 48000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.93, reviews: 51 },
  { img: extLux3, name: "Suite Airstream Joshua Tree", location: "Joshua Tree, CA", rent: 319, sale: 49500, beds: 4, seats: 5, fuel: "Diesel", rating: 4.94, reviews: 73, badge: "Iconique" },
  { img: van1, name: "Sprinter Summit 4×4", location: "Denver, Colorado", rent: 229, sale: 38500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92, reviews: 128 },
];

export const categories: Record<string, CategoryData> = {
  "luxury-campers": {
    slug: "luxury-campers",
    name: "Camping-Cars de Luxe",
    hero: heroLux1,
    tagline: "Vie cinq étoiles sur quatre roues",
    description: "Intérieurs en cuir artisanal, cuisines en marbre et suites étoilées. Notre flotte de luxe redéfinit ce que peut être un road trip.",
    count: "210+ véhicules premium",
    interiors: [
      { img: intLux1, label: "Salon & zone de détente" },
      { img: intLux2, label: "Suite chambre" },
      { img: intLux3, label: "Cuisine chef" },
      { img: intLux4, label: "Salle de bain spa" },
    ],
    vans: luxuryVans,
  },
  "camper-vans": {
    slug: "camper-vans",
    name: "Camper Vans",
    hero: extVan1,
    tagline: "Liberté compacte, où que vous alliez",
    description: "Camper vans agiles et économiques, conçus pour les week-ends spontanés et les évasions continentales.",
    count: "1 240+ camper vans",
    vans: [
      { img: extVan1, name: "Alpine Mist Compact", location: "Innsbruck, Autriche", rent: 139, sale: 44000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.9, reviews: 312 },
      { img: van1, name: "Sprinter Summit 4×4", location: "Denver, Colorado", rent: 189, sale: 44500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 128 },
      { img: van2, name: "Classique Côte Ouest", location: "Lisbonne, Portugal", rent: 119, sale: 42000, beds: 4, seats: 5, fuel: "Essence", rating: 4.88, reviews: 211 },
      { img: heroLux3, name: "Canyon Silver Voyager", location: "Moab, Utah", rent: 279, sale: 44900, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92, reviews: 76 },
      { img: extLux2, name: "Tuscany White Voyager", location: "Toscane, Italie", rent: 199, sale: 48000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.93, reviews: 51 },
      { img: catVan, name: "Rôdeur Urbain", location: "Berlin, Allemagne", rent: 129, sale: 36000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.85, reviews: 167 },
    ],
  },
  "rvs-motorhomes": {
    slug: "rvs-motorhomes",
    name: "RVs & Motorhomes",
    hero: extRv1,
    tagline: "Partez avec une maison complète",
    description: "Spacieux motorhomes Classe A & C avec cuisines complètes, extensions et chambres masters — parfaits pour les longs voyages.",
    count: "860+ motorhomes",
    vans: [
      { img: extRv1, name: "Classe A Lakeside 36'", location: "Orlando, Floride", rent: 349, sale: 75000, beds: 6, seats: 7, fuel: "Diesel", rating: 4.91, reviews: 84, badge: "Extensions" },
      { img: van3, name: "Canyon Voyager Classe A", location: "Las Vegas, Nevada", rent: 279, sale: 62000, beds: 6, seats: 7, fuel: "Diesel", rating: 4.92, reviews: 87 },
      { img: catRv, name: "Heritage Class C Famille", location: "Portland, Oregon", rent: 219, sale: 48000, beds: 5, seats: 6, fuel: "Diesel", rating: 4.86, reviews: 142 },
      { img: extLux3, name: "Suite Airstream Joshua Tree", location: "Joshua Tree, CA", rent: 319, sale: 49500, beds: 4, seats: 5, fuel: "Diesel", rating: 4.94, reviews: 73 },
      { img: heroLux4, name: "Motorhome Lakeside Skyview", location: "Bavière, Allemagne", rent: 259, sale: 39000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.97, reviews: 88 },
      { img: extRv1, name: "Sunset Bay Diesel Pusher", location: "San Diego, CA", rent: 389, sale: 65000, beds: 6, seats: 8, fuel: "Diesel", rating: 4.93, reviews: 56 },
    ],
  },
  "family-vans": {
    slug: "family-vans",
    name: "Camions Familiaux",
    hero: extFam1,
    tagline: "Aventures avec tout le monde à bord",
    description: "Aménagements spacieux, lits superposés et supports à vélos — conçus pour les familles qui ne veulent pas choisir entre confort et route libre.",
    count: "540+ camions familiaux",
    vans: [
      { img: extFam1, name: "Campsite Cruiser Family", location: "Bordeaux, France", rent: 169, sale: 48000, beds: 5, seats: 5, fuel: "Diesel", rating: 4.92, reviews: 198, badge: "Lits superposés" },
      { img: van2, name: "Classique Côte Ouest", location: "Lisbonne, Portugal", rent: 119, sale: 42000, beds: 4, seats: 5, fuel: "Essence", rating: 4.88, reviews: 211 },
      { img: catFamily, name: "Meadow Family 6 Couchages", location: "Munich, Allemagne", rent: 199, sale: 52000, beds: 6, seats: 6, fuel: "Diesel", rating: 4.89, reviews: 133 },
      { img: extRv1, name: "RV Lakeside Family", location: "Orlando, Floride", rent: 249, sale: 58000, beds: 6, seats: 7, fuel: "Diesel", rating: 4.9, reviews: 102 },
      { img: heroLux2, name: "Alpine Family Pop-Top", location: "Chamonix, France", rent: 229, sale: 42000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.94, reviews: 67 },
      { img: extFam1, name: "Summer Tour Wagon", location: "Toscane, Italie", rent: 159, sale: 41000, beds: 4, seats: 5, fuel: "Diesel", rating: 4.86, reviews: 178 },
    ],
  },
  "off-road-adventure": {
    slug: "off-road-adventure",
    name: "Aventure Tout-Terrain",
    hero: extOff1,
    tagline: "Là où le bitume finit, on commence",
    description: "Châssis 4×4, suspension surélevée et tentes sur le toit. Parcourez Moab, les Alpes et au-delà avec des véhicules construits pour le terrain rude.",
    count: "320+ véhicules overland",
    vans: [
      { img: extOff1, name: "Moab Overland 4×4", location: "Moab, Utah", rent: 249, sale: 48000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.96, reviews: 89, badge: "4×4" },
      { img: heroLux2, name: "Alpine Summit 4×4 Pop-Top", location: "Chamonix, France", rent: 329, sale: 42000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.95, reviews: 98 },
      { img: catOffroad, name: "Trailblazer Expedition", location: "Patagonie, Chili", rent: 289, sale: 56000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.94, reviews: 47 },
      { img: van1, name: "Sprinter Summit 4×4", location: "Denver, Colorado", rent: 189, sale: 44500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 128 },
      { img: extOff1, name: "Desert Wolf Camper", location: "Marrakech, Maroc", rent: 219, sale: 34000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.89, reviews: 62 },
      { img: extOff1, name: "Iceland Ring Road 4×4", location: "Reykjavik, Islande", rent: 269, sale: 42000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.93, reviews: 71 },
    ],
  },
  "budget-campers": {
    slug: "budget-campers",
    name: "Camper Économiques",
    hero: extBudget1,
    tagline: "Grande aventure, petit prix",
    description: "Vans abordables et pleins de caractère pour les débutants et les wanderers du week-end. Partez sur la route à partir de 69 € par jour.",
    count: "780+ véhicules économiques",
    vans: [
      { img: extBudget1, name: "Surf Bus Classic", location: "Lagos, Portugal", rent: 69, sale: 24000, beds: 2, seats: 4, fuel: "Essence", rating: 4.88, reviews: 421, badge: "À partir de 69 €" },
      { img: van2, name: "Classique Côte Ouest", location: "Lisbonne, Portugal", rent: 89, sale: 32000, beds: 4, seats: 5, fuel: "Essence", rating: 4.85, reviews: 311 },
      { img: catBudget, name: "Weekender Mini", location: "Valence, Espagne", rent: 79, sale: 28000, beds: 2, seats: 3, fuel: "Essence", rating: 4.82, reviews: 256 },
      { img: extVan1, name: "Alpine Mist Compact", location: "Innsbruck, Autriche", rent: 99, sale: 36000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.9, reviews: 188 },
      { img: extBudget1, name: "Retro Beach Cruiser", location: "Biarritz, France", rent: 95, sale: 34000, beds: 2, seats: 4, fuel: "Essence", rating: 4.86, reviews: 162 },
      { img: catVan, name: "City Sleeper", location: "Amsterdam, NL", rent: 75, sale: 26000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.8, reviews: 209 },
    ],
  },
};

export function getVan(slug: string, idx: number) {
  const cat = categories[slug];
  if (!cat) return null;
  const van = cat.vans[idx];
  if (!van) return null;
  return { category: cat, van, idx };
}
