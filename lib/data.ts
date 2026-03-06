export const PHONE = "0115 000 0000";
export const PHONE_HREF = "tel:01150000000";
export const EMAIL = "hello@spotlessnottingham.co.uk";
export const OPENING_HOURS = "Mon–Fri 8am–6pm · Sat 9am–1pm";
export const WHATSAPP_HREF = "https://wa.me/441150000000";

export const services = [
  {
    id: "regular",
    title: "Regular Cleaning",
    description: "Weekly or fortnightly visits that keep your home consistently fresh.",
    icon: "home",
  },
  {
    id: "deep",
    title: "Deep Clean",
    description: "Top-to-bottom reset. Oven, fridge, skirting boards, the lot.",
    icon: "sparkle",
  },
  {
    id: "tenancy",
    title: "End of Tenancy",
    description: "Deposit-standard cleaning for landlords and tenants.",
    icon: "key",
  },
  {
    id: "office",
    title: "Small Office",
    description: "Desks, kitchens, washrooms. Reliable contract cleaning.",
    icon: "office",
  },
  {
    id: "oneoff",
    title: "One-Off Blitz",
    description: "Moving in? Post-party? We'll sort it.",
    icon: "bolt",
  },
  {
    id: "addons",
    title: "Add-Ons",
    description: "Oven cleaning, inside windows, laundry, ironing.",
    icon: "plus",
  },
] as const;

export type PricingTier = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceNote: string;
  description: string;
  included: string[];
  details: string[];
  bg: string;
  popular?: boolean;
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "tidy",
    name: "Tidy",
    subtitle: "Regular clean",
    price: "from £55",
    priceNote: "per visit",
    description: "Your essentials: kitchen, bathrooms, hoovering, mopping, dusting, surfaces.",
    included: [
      "Kitchen surfaces & sink",
      "Bathrooms top to bottom",
      "Hoovering & mopping",
      "Dusting throughout",
      "Bed making",
    ],
    details: ["2–3 bed home", "~2.5 hours", "Weekly or fortnightly"],
    bg: "#E8F5F2",
    cta: "Book Tidy",
  },
  {
    id: "thorough",
    name: "Thorough",
    subtitle: "Detailed clean",
    price: "from £85",
    priceNote: "per visit",
    description: "Everything in Tidy plus inside appliances, skirting boards, interior windows, bed making.",
    included: [
      "Everything in Tidy",
      "Inside fridge & microwave",
      "Skirting boards & light switches",
      "Interior windows",
      "Inside wardrobes",
    ],
    details: ["2–4 bed home", "~4 hours", "Any frequency"],
    bg: "#EDE8F5",
    popular: true,
    cta: "Book Thorough",
  },
  {
    id: "reset",
    name: "Reset",
    subtitle: "Deep clean / one-off",
    price: "from £160",
    priceNote: "one-off",
    description: "The full works. Every room, every surface, every corner. Oven and fridge included.",
    included: [
      "Complete deep clean",
      "Oven & fridge inside-out",
      "Limescale removal",
      "Grout & tile scrubbing",
      "Any size property",
    ],
    details: ["Any size (quote-based)", "5–8 hours", "One-off or seasonal"],
    bg: "#F5EDE8",
    cta: "Book Reset",
  },
];

export const testimonials = [
  {
    text: "Honestly the best money we spend each fortnight. Coming home to a clean house on Friday is everything.",
    author: "Lisa M.",
    initials: "LM",
  },
  {
    text: "Same cleaner for 8 months now. She knows where everything goes. Total trust.",
    author: "Andy P.",
    initials: "AP",
  },
  {
    text: "Used them for end of tenancy. Got full deposit back. Legend.",
    author: "Megan S.",
    initials: "MS",
  },
  {
    text: "My mum's 74 and lives alone. Knowing her house is looked after properly means a lot to us.",
    author: "Rob T.",
    initials: "RT",
  },
] as const;

export const areas = [
  "Nottingham City",
  "West Bridgford",
  "Beeston",
  "Arnold",
  "Mapperley",
  "Sherwood",
  "Wollaton",
  "Carlton",
  "Long Eaton",
  "Hucknall",
  "Ruddington",
  "Gedling",
] as const;

export const processSteps = [
  {
    number: "1",
    title: "Book",
    description: "Pick your clean type and a time that works.",
  },
  {
    number: "2",
    title: "We clean",
    description: "Same cleaner every visit. They know your home.",
  },
  {
    number: "3",
    title: "Done",
    description: "You come home to clean surfaces, fresh beds, and that feeling.",
  },
] as const;
