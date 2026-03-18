export interface Stitch {
  id: string;
  name: string;
  type: "Knitting" | "Crochet";
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  instructions: string[];
  videoUrl?: string | string[];
  recommendedProjects: string[];
}

export const stitches: Stitch[] = [
  {
    id: "garter", name: "Garter Stitch", type: "Knitting", difficulty: "Easy",
    description: "The simplest knitting pattern — just knit every row. Creates a bumpy, reversible fabric.",
    instructions: [
      "Cast on any number of stitches and hold the needle with the stitches in your left hand.",
      "Insert the right needle into the first stitch from front to back and knit it.",
      "Continue knitting every stitch across the row until the left needle is empty.",
      "Turn your work so the full needle is back in your left hand.",
      "Repeat by knitting every stitch on every row to build the garter pattern.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=VeG4_nTyXGw",
    recommendedProjects: ["Scarves", "Dishcloths", "Blankets"],
  },
  {
    id: "stockinette", name: "Stockinette Stitch", type: "Knitting", difficulty: "Easy",
    description: "The classic smooth 'V' pattern. Alternating knit and purl rows.",
    instructions: [
      "Cast on any number of stitches.",
      "Row 1 (right side): knit every stitch across the row.",
      "Turn your work.",
      "Row 2 (wrong side): move the yarn to the front and purl every stitch across.",
      "Keep the yarn in back for knit rows and in front for purl rows.",
      "Repeat Rows 1 and 2 to create the smooth stockinette fabric.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=rlaC5C5nJR8",
    recommendedProjects: ["Sweaters", "Hats", "Socks"],
  },
  {
    id: "rib", name: "Rib Stitch", type: "Knitting", difficulty: "Easy",
    description: "Alternating columns of knit and purl create a stretchy, elastic fabric.",
    instructions: [
      "Cast on an even number of stitches.",
      "Row 1: knit 1 stitch.",
      "Bring the yarn to the front between the needles and purl 1 stitch.",
      "Keep alternating knit 1, purl 1 across the row.",
      "Turn your work and repeat the same knit 1, purl 1 sequence on every row.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=dCJj3pW2nRY",
    recommendedProjects: ["Hat brims", "Cuffs", "Necklines"],
  },
  {
    id: "seed", name: "Seed Stitch", type: "Knitting", difficulty: "Easy",
    description: "A textured pattern created by alternating knit and purl in a checkerboard.",
    instructions: [
      "Cast on an odd number of stitches.",
      "Row 1: knit 1 stitch, then purl 1 stitch.",
      "Continue alternating knit 1 and purl 1 across the row, ending with knit 1.",
      "Turn your work and look at the stitch below the needle before you work it.",
      "On each new row, purl the knit stitches and knit the purl stitches to keep the seed texture.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=gfc1D9lAFhI",
    recommendedProjects: ["Washcloths", "Borders", "Baby blankets"],
  },
  {
    id: "cable", name: "Cable Stitch", type: "Knitting", difficulty: "Medium",
    description: "Twisted rope-like patterns created by crossing groups of stitches.",
    instructions: [
      "Work to the point in the row where the cable twist should happen.",
      "Slip the required number of stitches onto a cable needle.",
      "Hold the cable needle in front of the work for a front-crossing cable, or behind the work for a back-crossing cable.",
      "Knit the next stitches from the left needle, then knit the held stitches from the cable needle.",
      "Return to the written pattern and repeat the cable crossing only on the rows where it is called for.",
    ],
    recommendedProjects: ["Aran sweaters", "Cable scarves", "Pillow covers"],
  },
  {
    id: "moss", name: "Moss Stitch", type: "Knitting", difficulty: "Easy",
    description: "Similar to seed stitch but with a two-row repeat for a more subtle texture.",
    instructions: [
      "Cast on an even number of stitches.",
      "Rows 1 and 2: alternate knit 1, purl 1 across the row.",
      "Turn your work at the end of each row and keep the same knit 1, purl 1 order for both rows.",
      "Rows 3 and 4: reverse the pattern and alternate purl 1, knit 1 across the row.",
      "Pay attention to the stitch below the needle so you know when the sequence changes.",
      "Repeat Rows 1 through 4 for the full moss stitch pattern.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=V0Gm9nTP1z4",
    recommendedProjects: ["Blankets", "Scarves", "Bags"],
  },
  {
    id: "chain-stitch", name: "Chain Stitch", type: "Crochet", difficulty: "Easy",
    description: "The foundation of crochet — a series of interlocking loops.",
    instructions: [
      "Make a slip knot and place it on your hook with one loop on the hook.",
      "Wrap the yarn over the hook from back to front.",
      "Pull the yarn through the loop already on the hook to make one chain.",
      "Repeat the yarn-over and pull-through motion for each new chain.",
      "Keep the chains loose and even so the next row is easy to work into.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=o-Il8OcNAZA",
    recommendedProjects: ["Foundation rows", "Ties", "Drawstrings"],
  },
  {
    id: "sc-stitch", name: "Single Crochet", type: "Crochet", difficulty: "Easy",
    description: "The most basic crochet stitch — short and dense.",
    instructions: [
      "Insert your hook into the next stitch.",
      "Yarn over and pull up a loop so you have 2 loops on the hook.",
      "Yarn over again.",
      "Pull the yarn through both loops on the hook in one motion.",
      "Repeat these steps in each stitch across the row or round.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=7FcRdxg0aeY",
    recommendedProjects: ["Amigurumi", "Potholders", "Bags"],
  },
  {
    id: "dc-stitch", name: "Double Crochet", type: "Crochet", difficulty: "Easy",
    description: "A taller stitch that creates open, drapey fabric.",
    instructions: [
      "Yarn over once before inserting the hook.",
      "Insert the hook into the next stitch.",
      "Yarn over and pull up a loop so you have 3 loops on the hook.",
      "Yarn over and pull through the first 2 loops.",
      "Yarn over again and pull through the remaining 2 loops.",
      "Repeat the same sequence in each stitch across the row.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=a1whu6Gub1M",
    recommendedProjects: ["Blankets", "Scarves", "Garments"],
  },
  {
    id: "treble-stitch", name: "Treble Crochet", type: "Crochet", difficulty: "Medium",
    description: "An even taller stitch for lacy, open fabric.",
    instructions: [
      "Yarn over twice before inserting the hook.",
      "Insert the hook into the next stitch.",
      "Yarn over and pull up a loop so you have 4 loops on the hook.",
      "Yarn over and pull through the first 2 loops.",
      "Yarn over and pull through the next 2 loops, then yarn over and pull through the last 2 loops.",
      "Repeat this sequence in each stitch to create a tall, open fabric.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=3KtzjAAZHVY",
    recommendedProjects: ["Lace shawls", "Doilies", "Summer tops"],
  },
  {
    id: "puff-stitch", name: "Puff Stitch", type: "Crochet", difficulty: "Medium",
    description: "Multiple half-finished double crochets pulled together for a puffy bobble.",
    instructions: [
      "Yarn over, insert the hook into the target stitch, and pull up a long loop.",
      "Repeat that same motion 3 to 5 times in the same stitch, keeping the loops the same height.",
      "After the repeats, yarn over once more.",
      "Pull the yarn through all loops on the hook in one steady motion.",
      "Chain if your pattern tells you to, then move to the next stitch.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=e6YHmxNafJE",
    recommendedProjects: ["Textured blankets", "Hats", "Baby items"],
  },
  {
    id: "shell-stitch", name: "Shell Stitch", type: "Crochet", difficulty: "Medium",
    description: "Multiple stitches worked into the same stitch, creating a fan or shell shape.",
    instructions: [
      "Work the number of stitches called for by the pattern into one stitch or space, usually 5 double crochets.",
      "Let the stitches spread naturally so they fan out into a shell shape.",
      "Skip the number of stitches the pattern tells you to skip before starting the next shell.",
      "Place the next shell into the indicated stitch or space.",
      "Repeat the shell-and-skip pattern across the row to build the scalloped design.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=F4ZKmRwBGR4",
    recommendedProjects: ["Baby blankets", "Shawls", "Skirts"],
  },
  {
    id: "slip-stitch-crochet", name: "Slip Stitch", type: "Crochet", difficulty: "Easy",
    description: "The shortest crochet stitch — used for joining and moving yarn.",
    instructions: [
      "Insert the hook into the next stitch or space.",
      "Yarn over once.",
      "Pull the yarn through the stitch and the loop already on your hook in one motion.",
      "Keep the stitch relaxed so the fabric does not tighten or pucker.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=8ir3v31G0sg",
    recommendedProjects: ["Joining rounds", "Edging", "Surface crochet"],
  },
];
