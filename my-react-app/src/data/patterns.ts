export interface Pattern {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  type: "Knitting" | "Crochet";
  estimatedTime: string;
  yarnType: string;
  needleSize: string;
  materials: string[];
  description: string;
  steps: string[];
}

export const patterns: Pattern[] = [
  {
    id: "simple-scarf", title: "Classic Garter Scarf", difficulty: "Beginner", type: "Knitting",
    estimatedTime: "8-10 hours", yarnType: "Worsted weight", needleSize: "US 8 (5mm)",
    materials: ["2 skeins worsted weight yarn", "US 8 knitting needles", "Yarn needle"],
    description: "A timeless garter stitch scarf — the perfect first knitting project.",
    steps: ["Cast on 30 stitches", "Knit every row until scarf measures 60 inches", "Bind off loosely", "Weave in ends"],
  },
  {
    id: "dishcloth", title: "Textured Dishcloth", difficulty: "Beginner", type: "Knitting",
    estimatedTime: "3-4 hours", yarnType: "Cotton worsted", needleSize: "US 7 (4.5mm)",
    materials: ["1 skein cotton yarn", "US 7 needles", "Yarn needle"],
    description: "A practical and satisfying project using seed stitch.",
    steps: ["Cast on 35 stitches", "Work in seed stitch for 9 inches", "Bind off in pattern", "Weave in ends"],
  },
  {
    id: "headband", title: "Ribbed Headband", difficulty: "Beginner", type: "Knitting",
    estimatedTime: "2-3 hours", yarnType: "Bulky weight", needleSize: "US 10 (6mm)",
    materials: ["1 skein bulky yarn", "US 10 needles", "Yarn needle"],
    description: "A quick and cozy ear warmer in 2x2 rib.",
    steps: ["Cast on 16 stitches", "Work in K2, P2 rib for 18 inches", "Bind off", "Sew short ends together"],
  },
  {
    id: "coaster-set", title: "Crochet Coaster Set", difficulty: "Beginner", type: "Crochet",
    estimatedTime: "1-2 hours per coaster", yarnType: "Cotton DK", needleSize: "4mm (G/6) hook",
    materials: ["Cotton DK yarn in 2-3 colors", "4mm crochet hook", "Yarn needle"],
    description: "Round coasters worked in the round — great for learning circles.",
    steps: ["Magic ring, 6 sc", "Round 2: 2 sc in each (12)", "Round 3: *sc, 2sc* repeat (18)", "Round 4: *sc 2, 2sc* repeat (24)", "Round 5: *sc 3, 2sc* repeat (30)", "Slip stitch to join, fasten off"],
  },
  {
    id: "beanie", title: "Simple Stockinette Beanie", difficulty: "Intermediate", type: "Knitting",
    estimatedTime: "6-8 hours", yarnType: "DK weight", needleSize: "US 6 (4mm) circular",
    materials: ["1 skein DK yarn", "16-inch circular needles US 6", "DPN set US 6", "Stitch marker"],
    description: "A classic fitted beanie knit in the round.",
    steps: ["Cast on 88 stitches, join in round", "Work K2P2 rib for 1.5 inches", "Knit stockinette until 7 inches total", "Begin crown decreases", "Graft or cinch top closed"],
  },
  {
    id: "mittens", title: "Cozy Mittens", difficulty: "Intermediate", type: "Knitting",
    estimatedTime: "10-12 hours", yarnType: "Worsted weight", needleSize: "US 7 DPNs",
    materials: ["1 skein worsted yarn", "US 7 DPNs", "Stitch holder", "Yarn needle"],
    description: "Classic mittens with a thumb gusset.",
    steps: ["Cast on 36 stitches on DPNs", "Work K2P2 cuff for 3 inches", "Increase for thumb gusset", "Place thumb stitches on holder", "Continue hand to fingertips", "Decrease for top", "Knit thumb from held stitches"],
  },
  {
    id: "tote-bag", title: "Market Tote Bag", difficulty: "Intermediate", type: "Crochet",
    estimatedTime: "12-15 hours", yarnType: "Cotton worsted", needleSize: "5mm (H/8) hook",
    materials: ["3 skeins cotton worsted", "5mm hook", "Yarn needle"],
    description: "A sturdy, reusable market bag in single crochet.",
    steps: ["Chain 36 for base", "Sc around for rectangular base", "Work in continuous rounds for body", "Decrease for mesh section", "Create handles with chain loops", "Reinforce handle joins"],
  },
  {
    id: "lace-shawl", title: "Lace Triangle Shawl", difficulty: "Advanced", type: "Knitting",
    estimatedTime: "40-50 hours", yarnType: "Lace weight", needleSize: "US 6 (4mm) circular",
    materials: ["2 skeins lace weight yarn", "Long circular needles US 6", "Stitch markers", "Blocking pins"],
    description: "An elegant lace shawl with yarn-over patterns.",
    steps: ["Cast on 3 stitches (garter tab)", "Work increase rows with lace pattern", "Follow chart for lace repeats", "Work border pattern", "Bind off with stretchy bind-off", "Block to open lace pattern"],
  },
  {
    id: "amigurumi", title: "Amigurumi Bear", difficulty: "Advanced", type: "Crochet",
    estimatedTime: "15-20 hours", yarnType: "DK weight", needleSize: "3.5mm (E/4) hook",
    materials: ["DK yarn in brown and cream", "3.5mm hook", "Safety eyes", "Fiberfill stuffing", "Yarn needle"],
    description: "An adorable stuffed bear using single crochet in the round.",
    steps: ["Crochet head in spiral rounds", "Create body, stuff as you go", "Make arms and legs separately", "Crochet ears and muzzle", "Attach safety eyes", "Assemble all pieces", "Embroider nose and mouth"],
  },
  {
    id: "cable-sweater", title: "Cable Knit Sweater", difficulty: "Advanced", type: "Knitting",
    estimatedTime: "80-100 hours", yarnType: "Aran weight", needleSize: "US 8 (5mm)",
    materials: ["8 skeins aran weight yarn", "Circular needles US 8", "Cable needle", "Stitch holders", "Yarn needle"],
    description: "A classic Aran-style pullover with cable panels.",
    steps: ["Knit back panel with side cables", "Knit front with center cable panel", "Shape neckline", "Knit sleeves with mini cables", "Seam shoulders", "Pick up and knit neckband", "Set in sleeves", "Seam sides"],
  },
];
