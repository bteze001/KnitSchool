export interface NeedleType {
  id: string;
  name: string;
  category: "Knitting" | "Crochet";
  description: string;
  sizes: string;
  materials: string[];
  bestFor: string[];
  imageDescription: string;
}

export const needleTypes: NeedleType[] = [
  {
    id: "straight", name: "Straight Needles", category: "Knitting",
    description: "The classic knitting needle — a single point at one end and a stopper at the other. Great for flat pieces.",
    sizes: "US 0 (2mm) to US 17 (12mm), lengths 9\" to 14\"",
    materials: ["Bamboo", "Wood", "Metal", "Plastic"],
    bestFor: ["Scarves", "Dishcloths", "Flat panels", "Beginners"],
    imageDescription: "A pair of wooden straight knitting needles",
  },
  {
    id: "circular", name: "Circular Needles", category: "Knitting",
    description: "Two needle tips connected by a flexible cable. The most versatile needle type.",
    sizes: "US 0 to US 17, cable lengths 16\" to 60\"",
    materials: ["Metal tips with nylon cable", "Bamboo", "Carbon fiber"],
    bestFor: ["Hats", "Sweaters", "Large flat pieces", "Knitting in the round"],
    imageDescription: "Circular knitting needles with a flexible cable",
  },
  {
    id: "dpn", name: "Double-Pointed Needles", category: "Knitting",
    description: "Short needles pointed at both ends, sold in sets of 4-5. For small circumference projects.",
    sizes: "US 0 to US 11, lengths 5\" to 8\"",
    materials: ["Bamboo", "Metal", "Wood"],
    bestFor: ["Socks", "Mittens", "Hat crowns", "I-cord"],
    imageDescription: "A set of five double-pointed bamboo needles",
  },
  {
    id: "interchangeable", name: "Interchangeable Needles", category: "Knitting",
    description: "A system of detachable tips and cables that can be mixed and matched.",
    sizes: "US 2 to US 17, cables 16\" to 60\"",
    materials: ["Metal", "Wood", "Bamboo", "Acrylic"],
    bestFor: ["Experienced knitters", "Multiple projects", "Travel", "Cost-effective versatility"],
    imageDescription: "Interchangeable needle set in a case",
  },
  {
    id: "aluminum-hook", name: "Aluminum Hooks", category: "Crochet",
    description: "The standard crochet hook. Lightweight, smooth, and affordable.",
    sizes: "B/1 (2.25mm) to S (19mm)",
    materials: ["Anodized aluminum"],
    bestFor: ["Most yarn types", "Beginners", "General crochet"],
    imageDescription: "A set of aluminum crochet hooks in various sizes",
  },
  {
    id: "steel-hook", name: "Steel Hooks", category: "Crochet",
    description: "Very thin hooks for thread crochet and fine lace work.",
    sizes: "14 (0.75mm) to 00 (3.5mm)",
    materials: ["Steel"],
    bestFor: ["Thread crochet", "Doilies", "Lace", "Fine work"],
    imageDescription: "Thin steel crochet hooks for lace work",
  },
  {
    id: "ergonomic-hook", name: "Ergonomic Hooks", category: "Crochet",
    description: "Hooks with thick, cushioned, contoured handles designed for comfort.",
    sizes: "B/1 to N/15",
    materials: ["Aluminum shaft with rubber/silicone grip"],
    bestFor: ["Long crochet sessions", "Arthritis", "Hand fatigue", "Repetitive strain prevention"],
    imageDescription: "An ergonomic crochet hook with a soft grip handle",
  },
  {
    id: "tunisian-hook", name: "Tunisian Hooks", category: "Crochet",
    description: "Extra-long hooks for Tunisian crochet, a technique that blends knitting and crochet.",
    sizes: "H/8 (5mm) to N/15 (10mm), 12\"-14\" long",
    materials: ["Bamboo", "Aluminum", "Wood with cable"],
    bestFor: ["Tunisian crochet", "Knit-look fabric", "Dense blankets", "Entrelac"],
    imageDescription: "A long Tunisian crochet hook with a stopper end",
  },
];
