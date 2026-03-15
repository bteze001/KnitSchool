export interface Stitch {
  id: string;
  name: string;
  type: "Knitting" | "Crochet";
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  instructions: string[];
  recommendedProjects: string[];
}

export const stitches: Stitch[] = [
  {
    id: "garter", name: "Garter Stitch", type: "Knitting", difficulty: "Easy",
    description: "The simplest knitting pattern — just knit every row. Creates a bumpy, reversible fabric.",
    instructions: ["Cast on any number of stitches", "Row 1: Knit all stitches", "Repeat Row 1 for pattern"],
    recommendedProjects: ["Scarves", "Dishcloths", "Blankets"],
  },
  {
    id: "stockinette", name: "Stockinette Stitch", type: "Knitting", difficulty: "Easy",
    description: "The classic smooth 'V' pattern. Alternating knit and purl rows.",
    instructions: ["Cast on any number of stitches", "Row 1 (RS): Knit all stitches", "Row 2 (WS): Purl all stitches", "Repeat Rows 1-2"],
    recommendedProjects: ["Sweaters", "Hats", "Socks"],
  },
  {
    id: "rib", name: "Rib Stitch", type: "Knitting", difficulty: "Easy",
    description: "Alternating columns of knit and purl create a stretchy, elastic fabric.",
    instructions: ["Cast on a multiple of 2 stitches", "Row 1: *K1, P1* repeat to end", "Repeat Row 1 for pattern"],
    recommendedProjects: ["Hat brims", "Cuffs", "Necklines"],
  },
  {
    id: "seed", name: "Seed Stitch", type: "Knitting", difficulty: "Easy",
    description: "A textured pattern created by alternating knit and purl in a checkerboard.",
    instructions: ["Cast on an odd number of stitches", "Row 1: *K1, P1* repeat, end K1", "Repeat Row 1"],
    recommendedProjects: ["Washcloths", "Borders", "Baby blankets"],
  },
  {
    id: "cable", name: "Cable Stitch", type: "Knitting", difficulty: "Medium",
    description: "Twisted rope-like patterns created by crossing groups of stitches.",
    instructions: ["Requires a cable needle", "Work stitches out of order by holding some on cable needle", "Cross left or right to create twist direction"],
    recommendedProjects: ["Aran sweaters", "Cable scarves", "Pillow covers"],
  },
  {
    id: "moss", name: "Moss Stitch", type: "Knitting", difficulty: "Easy",
    description: "Similar to seed stitch but with a two-row repeat for a more subtle texture.",
    instructions: ["Cast on a multiple of 2", "Rows 1-2: *K1, P1* repeat", "Rows 3-4: *P1, K1* repeat", "Repeat Rows 1-4"],
    recommendedProjects: ["Blankets", "Scarves", "Bags"],
  },
  {
    id: "chain-stitch", name: "Chain Stitch", type: "Crochet", difficulty: "Easy",
    description: "The foundation of crochet — a series of interlocking loops.",
    instructions: ["Make a slip knot", "Yarn over, pull through loop", "Repeat for desired length"],
    recommendedProjects: ["Foundation rows", "Ties", "Drawstrings"],
  },
  {
    id: "sc-stitch", name: "Single Crochet", type: "Crochet", difficulty: "Easy",
    description: "The most basic crochet stitch — short and dense.",
    instructions: ["Insert hook into stitch", "Yarn over, pull up a loop", "Yarn over, pull through both loops"],
    recommendedProjects: ["Amigurumi", "Potholders", "Bags"],
  },
  {
    id: "dc-stitch", name: "Double Crochet", type: "Crochet", difficulty: "Easy",
    description: "A taller stitch that creates open, drapey fabric.",
    instructions: ["Yarn over", "Insert hook into stitch", "Yarn over, pull up a loop", "Yarn over, pull through 2 loops", "Yarn over, pull through 2 loops"],
    recommendedProjects: ["Blankets", "Scarves", "Garments"],
  },
  {
    id: "treble-stitch", name: "Treble Crochet", type: "Crochet", difficulty: "Medium",
    description: "An even taller stitch for lacy, open fabric.",
    instructions: ["Yarn over twice", "Insert hook", "Yarn over, pull up loop", "Yarn over, pull through 2 loops (3 times)"],
    recommendedProjects: ["Lace shawls", "Doilies", "Summer tops"],
  },
  {
    id: "puff-stitch", name: "Puff Stitch", type: "Crochet", difficulty: "Medium",
    description: "Multiple half-finished double crochets pulled together for a puffy bobble.",
    instructions: ["Yarn over, insert hook, pull up a long loop", "Repeat 3-5 times in same stitch", "Yarn over, pull through all loops"],
    recommendedProjects: ["Textured blankets", "Hats", "Baby items"],
  },
  {
    id: "shell-stitch", name: "Shell Stitch", type: "Crochet", difficulty: "Medium",
    description: "Multiple stitches worked into the same stitch, creating a fan or shell shape.",
    instructions: ["Work 5 dc into the same stitch", "Skip stitches between shells", "Creates a scalloped pattern"],
    recommendedProjects: ["Baby blankets", "Shawls", "Skirts"],
  },
  {
    id: "slip-stitch-crochet", name: "Slip Stitch", type: "Crochet", difficulty: "Easy",
    description: "The shortest crochet stitch — used for joining and moving yarn.",
    instructions: ["Insert hook into stitch", "Yarn over", "Pull through stitch and loop on hook in one motion"],
    recommendedProjects: ["Joining rounds", "Edging", "Surface crochet"],
  },
];
