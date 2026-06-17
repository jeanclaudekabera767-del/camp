import heroLux1 from "@/assets/hero-lux-1.jpg";
import heroLux2 from "@/assets/hero-lux-2.jpg";
import heroLux3 from "@/assets/hero-lux-3.jpg";
import heroLux4 from "@/assets/hero-lux-4.jpg";
import intLux1 from "@/assets/int-lux-1.jpg";
import intLux2 from "@/assets/int-lux-2.jpg";
import intLux3 from "@/assets/int-lux-3.jpg";
import intLux4 from "@/assets/int-lux-4.jpg";
import extLux1 from "@/assets/ext-lux-1.jpg";
import extLux2 from "@/assets/ext-lux-2.jpg";
import extLux3 from "@/assets/ext-lux-3.jpg";
import extOff1 from "@/assets/ext-off-1.jpg";
import extFam1 from "@/assets/ext-fam-1.jpg";
import extRv1 from "@/assets/ext-rv-1.jpg";
import extBudget1 from "@/assets/ext-budget-1.jpg";
import extVan1 from "@/assets/ext-van-1.jpg";
import van1 from "@/assets/van-1.jpg";
import van2 from "@/assets/van-2.jpg";
import van3 from "@/assets/van-3.jpg";
import catVan from "@/assets/cat-van.jpg";
import catRv from "@/assets/cat-rv.jpg";
import catFamily from "@/assets/cat-family.jpg";
import catOffroad from "@/assets/cat-offroad.jpg";
import catBudget from "@/assets/cat-budget.jpg";

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
  { img: heroLux1, name: "Mercedes Sprinter Noir Edition", location: "Malibu, California", rent: 389, sale: 168500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.98, reviews: 142, badge: "Signature" },
  { img: heroLux2, name: "Alpine Summit 4×4 Pop-Top", location: "Chamonix, France", rent: 329, sale: 142000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.95, reviews: 98, badge: "Overland" },
  { img: heroLux3, name: "Canyon Silver Voyager", location: "Moab, Utah", rent: 279, sale: 124900, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92, reviews: 76 },
  { img: heroLux4, name: "Lakeside Skyview Camper", location: "Bavaria, Germany", rent: 259, sale: 119000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.97, reviews: 88, badge: "Glass Roof" },
  { img: extLux1, name: "Amalfi Black Pearl", location: "Amalfi Coast, Italy", rent: 349, sale: 156000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 64 },
  { img: extLux2, name: "Tuscany White Voyager", location: "Tuscany, Italy", rent: 299, sale: 138000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.93, reviews: 51 },
  { img: extLux3, name: "Joshua Tree Airstream Suite", location: "Joshua Tree, CA", rent: 319, sale: 149500, beds: 4, seats: 5, fuel: "Diesel", rating: 4.94, reviews: 73, badge: "Iconic" },
  { img: intLux1, name: "Walnut Lounge Sprinter", location: "Aspen, Colorado", rent: 359, sale: 162000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.99, reviews: 41, badge: "Suite" },
  { img: intLux2, name: "Stargazer Loft Edition", location: "Banff, Canada", rent: 289, sale: 132000, beds: 2, seats: 2, fuel: "Diesel", rating: 4.95, reviews: 59 },
  { img: intLux3, name: "Chef's Galley Premium", location: "Provence, France", rent: 269, sale: 121500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.91, reviews: 47 },
  { img: intLux4, name: "Onyx Spa Camper", location: "Lake Como, Italy", rent: 309, sale: 144000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 38, badge: "Spa Bath" },
  { img: van1, name: "Sprinter Summit 4×4", location: "Denver, Colorado", rent: 229, sale: 98500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92, reviews: 128 },
];

export const categories: Record<string, CategoryData> = {
  "luxury-campers": {
    slug: "luxury-campers",
    name: "Luxury Campers",
    hero: heroLux1,
    tagline: "Five-star living on four wheels",
    description: "Hand-crafted leather interiors, marble galleys and starlit suites. Our luxury fleet redefines what a road trip can feel like.",
    count: "210+ premium vehicles",
    interiors: [
      { img: intLux1, label: "Lounge & living area" },
      { img: intLux2, label: "Master bed suite" },
      { img: intLux3, label: "Chef's galley" },
      { img: intLux4, label: "Spa bathroom" },
    ],
    vans: luxuryVans,
  },
  "camper-vans": {
    slug: "camper-vans",
    name: "Camper Vans",
    hero: extVan1,
    tagline: "Compact freedom, anywhere you point it",
    description: "Nimble, fuel-efficient camper vans built for spontaneous weekends and continent-crossing escapes alike.",
    count: "1,240+ camper vans",
    vans: [
      { img: extVan1, name: "Alpine Mist Compact", location: "Innsbruck, Austria", rent: 139, sale: 64000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.9, reviews: 312 },
      { img: van1, name: "Sprinter Summit 4×4", location: "Denver, Colorado", rent: 189, sale: 84500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 128 },
      { img: van2, name: "Coastline Classic", location: "Lisbon, Portugal", rent: 119, sale: 42000, beds: 4, seats: 5, fuel: "Petrol", rating: 4.88, reviews: 211 },
      { img: heroLux3, name: "Canyon Silver Voyager", location: "Moab, Utah", rent: 279, sale: 124900, beds: 2, seats: 4, fuel: "Diesel", rating: 4.92, reviews: 76 },
      { img: extLux2, name: "Tuscany White Voyager", location: "Tuscany, Italy", rent: 199, sale: 88000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.93, reviews: 51 },
      { img: catVan, name: "Urban Roamer", location: "Berlin, Germany", rent: 129, sale: 56000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.85, reviews: 167 },
    ],
  },
  "rvs-motorhomes": {
    slug: "rvs-motorhomes",
    name: "RVs & Motorhomes",
    hero: extRv1,
    tagline: "Roll with a full-size home",
    description: "Spacious Class A & C motorhomes with full kitchens, slide-outs and master bedrooms — perfect for long-haul trips.",
    count: "860+ motorhomes",
    vans: [
      { img: extRv1, name: "Lakeside Class A 36'", location: "Orlando, Florida", rent: 349, sale: 215000, beds: 6, seats: 7, fuel: "Diesel", rating: 4.91, reviews: 84, badge: "Slide-outs" },
      { img: van3, name: "Canyon Voyager Class A", location: "Las Vegas, Nevada", rent: 279, sale: 142000, beds: 6, seats: 7, fuel: "Diesel", rating: 4.92, reviews: 87 },
      { img: catRv, name: "Heritage Class C Family", location: "Portland, Oregon", rent: 219, sale: 118000, beds: 5, seats: 6, fuel: "Diesel", rating: 4.86, reviews: 142 },
      { img: extLux3, name: "Joshua Tree Airstream Suite", location: "Joshua Tree, CA", rent: 319, sale: 149500, beds: 4, seats: 5, fuel: "Diesel", rating: 4.94, reviews: 73 },
      { img: heroLux4, name: "Lakeside Skyview Motorhome", location: "Bavaria, Germany", rent: 259, sale: 119000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.97, reviews: 88 },
      { img: extRv1, name: "Sunset Bay Diesel Pusher", location: "San Diego, CA", rent: 389, sale: 245000, beds: 6, seats: 8, fuel: "Diesel", rating: 4.93, reviews: 56 },
    ],
  },
  "family-vans": {
    slug: "family-vans",
    name: "Family Vans",
    hero: extFam1,
    tagline: "Adventures with everyone on board",
    description: "Roomy layouts, bunk beds and bike racks — built for families who don't want to choose between comfort and the open road.",
    count: "540+ family vans",
    vans: [
      { img: extFam1, name: "Campsite Cruiser Family", location: "Bordeaux, France", rent: 169, sale: 78000, beds: 5, seats: 5, fuel: "Diesel", rating: 4.92, reviews: 198, badge: "Bunk bed" },
      { img: van2, name: "Coastline Classic", location: "Lisbon, Portugal", rent: 119, sale: 42000, beds: 4, seats: 5, fuel: "Petrol", rating: 4.88, reviews: 211 },
      { img: catFamily, name: "Meadow Family 6-Sleeper", location: "Munich, Germany", rent: 199, sale: 92000, beds: 6, seats: 6, fuel: "Diesel", rating: 4.89, reviews: 133 },
      { img: extRv1, name: "Lakeside Family RV", location: "Orlando, Florida", rent: 249, sale: 158000, beds: 6, seats: 7, fuel: "Diesel", rating: 4.9, reviews: 102 },
      { img: heroLux2, name: "Alpine Family Pop-Top", location: "Chamonix, France", rent: 229, sale: 112000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.94, reviews: 67 },
      { img: extFam1, name: "Summer Tour Wagon", location: "Tuscany, Italy", rent: 159, sale: 71000, beds: 4, seats: 5, fuel: "Diesel", rating: 4.86, reviews: 178 },
    ],
  },
  "off-road-adventure": {
    slug: "off-road-adventure",
    name: "Off-Road Adventure",
    hero: extOff1,
    tagline: "Where the pavement ends, we begin",
    description: "4×4 chassis, lifted suspension and rooftop tents. Tackle Moab, the Alps and beyond with rigs built for the rough stuff.",
    count: "320+ overland rigs",
    vans: [
      { img: extOff1, name: "Moab Overland 4×4", location: "Moab, Utah", rent: 249, sale: 138000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.96, reviews: 89, badge: "4×4" },
      { img: heroLux2, name: "Alpine Summit 4×4 Pop-Top", location: "Chamonix, France", rent: 329, sale: 142000, beds: 4, seats: 4, fuel: "Diesel", rating: 4.95, reviews: 98 },
      { img: catOffroad, name: "Trailblazer Expedition", location: "Patagonia, Chile", rent: 289, sale: 156000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.94, reviews: 47 },
      { img: van1, name: "Sprinter Summit 4×4", location: "Denver, Colorado", rent: 189, sale: 84500, beds: 2, seats: 4, fuel: "Diesel", rating: 4.96, reviews: 128 },
      { img: extOff1, name: "Desert Wolf Camper", location: "Marrakech, Morocco", rent: 219, sale: 104000, beds: 2, seats: 3, fuel: "Diesel", rating: 4.89, reviews: 62 },
      { img: extOff1, name: "Iceland Ring Road 4×4", location: "Reykjavik, Iceland", rent: 269, sale: 132000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.93, reviews: 71 },
    ],
  },
  "budget-campers": {
    slug: "budget-campers",
    name: "Budget Campers",
    hero: extBudget1,
    tagline: "Big adventure, small price",
    description: "Affordable, characterful vans for first-timers and weekend wanderers. Hit the road from just €69 a day.",
    count: "780+ budget rides",
    vans: [
      { img: extBudget1, name: "Surf Bus Classic", location: "Lagos, Portugal", rent: 69, sale: 24000, beds: 2, seats: 4, fuel: "Petrol", rating: 4.88, reviews: 421, badge: "From €69" },
      { img: van2, name: "Coastline Classic", location: "Lisbon, Portugal", rent: 89, sale: 32000, beds: 4, seats: 5, fuel: "Petrol", rating: 4.85, reviews: 311 },
      { img: catBudget, name: "Weekender Mini", location: "Valencia, Spain", rent: 79, sale: 28000, beds: 2, seats: 3, fuel: "Petrol", rating: 4.82, reviews: 256 },
      { img: extVan1, name: "Alpine Mist Compact", location: "Innsbruck, Austria", rent: 99, sale: 46000, beds: 2, seats: 4, fuel: "Diesel", rating: 4.9, reviews: 188 },
      { img: extBudget1, name: "Retro Beach Cruiser", location: "Biarritz, France", rent: 95, sale: 34000, beds: 2, seats: 4, fuel: "Petrol", rating: 4.86, reviews: 162 },
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
