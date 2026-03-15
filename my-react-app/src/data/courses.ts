export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  content: string;
  videoUrl?: string;
  commonMistakes: string[];
  practiceExercise: string;
}

export interface Course {
  id: string;
  title: string;
  category: "Knitting" | "Crochet";
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  imageUrl?: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: "knitting-basics",
    title: "Knitting Basics",
    category: "Knitting",
    level: "Beginner",
    description: "Master the fundamentals of knitting from casting on to binding off. Perfect for absolute beginners.",
    lessons: [
      {
        id: "intro-to-knitting",
        title: "Introduction to Knitting",
        description: "Learn what knitting is, its history, and why it's a wonderful craft to pick up.",
        duration: "10 min",
        content: `## What is Knitting?\n\nKnitting is the art of creating fabric by interlocking loops of yarn with needles. It's one of the oldest textile crafts, dating back centuries.\n\n### Why Learn to Knit?\n\n- **Relaxation** — The rhythmic motion is meditative\n- **Creativity** — Design your own garments and accessories\n- **Practical** — Make gifts, clothing, and home décor\n- **Community** — Join millions of knitters worldwide\n\n### What You'll Need\n\n1. A pair of knitting needles (US size 8 / 5mm recommended for beginners)\n2. Medium-weight yarn (worsted weight)\n3. Scissors\n4. A yarn needle for weaving in ends`,
        commonMistakes: [
          "Starting with yarn that's too thin or slippery",
          "Choosing needles that are too small for beginners",
          "Trying to learn too many techniques at once"
        ],
        practiceExercise: "Visit a local yarn shop or browse online to select your first set of needles and yarn. Choose a light-colored, smooth worsted-weight yarn so you can see your stitches clearly."
      },
      {
        id: "types-of-needles",
        title: "Types of Knitting Needles",
        description: "Explore straight, circular, double-pointed, and interchangeable needles.",
        duration: "12 min",
        content: `## Knitting Needle Types\n\n### Straight Needles\nThe classic choice. Two single-pointed needles, great for flat pieces like scarves.\n\n### Circular Needles\nTwo needle tips connected by a flexible cable. Perfect for knitting in the round (hats, cowls) and large flat pieces.\n\n### Double-Pointed Needles (DPNs)\nSets of 4-5 short needles for small circumference projects like socks and mittens.\n\n### Interchangeable Needles\nA set where tips and cables can be mixed and matched. The most versatile and economical long-term choice.\n\n### Sizing\n| US Size | Metric |\n|---------|--------|\n| 0 | 2mm |\n| 4 | 3.5mm |\n| 7 | 4.5mm |\n| 8 | 5mm |\n| 10 | 6mm |\n| 11 | 8mm |`,
        commonMistakes: [
          "Using metal needles as a beginner (yarn slips off easily)",
          "Choosing the wrong needle length for your project",
        ],
        practiceExercise: "Compare holding bamboo vs metal needles. Notice how bamboo grips the yarn while metal lets it slide. Choose what feels comfortable."
      },
      {
        id: "holding-yarn",
        title: "How to Hold Yarn",
        description: "Learn the English and Continental methods of holding yarn for consistent tension.",
        duration: "15 min",
        content: `## Yarn Holding Methods\n\n### English Style (Throwing)\nThe yarn is held in your **right hand** and "thrown" around the needle.\n\n**Steps:**\n1. Wrap the yarn around your right pinky finger\n2. Bring it over your ring finger\n3. Under your middle finger\n4. Over your index finger\n\n### Continental Style (Picking)\nThe yarn is held in your **left hand** and "picked" by the needle.\n\n**Steps:**\n1. Wrap yarn around your left pinky\n2. Bring it over your index finger\n3. Use the right needle to "pick" the yarn\n\n### Which is Better?\nNeither! It's personal preference. English is more common in the US/UK, Continental in Europe. Try both and see what feels natural.`,
        commonMistakes: [
          "Holding the yarn too tightly, creating stiff fabric",
          "Holding too loosely, creating uneven stitches",
          "Gripping the needles like pencils instead of relaxing your hands"
        ],
        practiceExercise: "Practice wrapping the yarn around your fingers in both English and Continental style. Spend 5 minutes with each method, noticing which feels more natural."
      },
      {
        id: "casting-on",
        title: "Casting On",
        description: "The first step: getting stitches onto your needle using the long-tail cast on.",
        duration: "15 min",
        content: `## The Long-Tail Cast On\n\nThis is the most versatile cast-on method. It creates a neat, elastic edge.\n\n### Step-by-Step\n\n1. **Measure the tail:** Pull out about 1 inch of yarn for every stitch you need, plus 6 extra inches\n2. **Make a slip knot:** Create a loop, pull the working yarn through, and tighten on the needle\n3. **Position your hand:** Hold both yarn tails — the tail over your thumb, the working yarn over your index finger\n4. **Insert the needle:** Go under the front strand on your thumb\n5. **Grab the yarn:** Catch the strand on your index finger\n6. **Pull through:** Bring it through the thumb loop\n7. **Tighten:** Drop the thumb loop and pull gently\n8. **Repeat** for each stitch\n\n### Pro Tip\n> Don't pull your stitches too tight! You'll need to slide your needle back into them on the next row.`,
        commonMistakes: [
          "Not leaving enough tail yarn",
          "Pulling the cast-on stitches too tight",
          "Twisting the slip knot when placing on needle"
        ],
        practiceExercise: "Cast on 20 stitches using the long-tail method. Practice until you can create an even row of stitches that slide easily on the needle."
      },
      {
        id: "knit-stitch",
        title: "The Knit Stitch",
        description: "Learn the fundamental knit stitch — the building block of all knitting.",
        duration: "20 min",
        content: `## The Knit Stitch\n\nThe knit stitch is one of two fundamental stitches. Master this, and you're halfway to knitting anything!\n\n### Steps\n\n1. **Hold your work:** Left needle has the stitches, right needle is empty\n2. **Insert:** Push right needle through the first stitch from left to right, going behind the left needle\n3. **Wrap:** Bring the working yarn counterclockwise around the right needle tip\n4. **Pull through:** Slide the right needle back through the stitch, bringing the new loop with it\n5. **Slide off:** Drop the old stitch off the left needle\n\n### The Garter Stitch Pattern\nWhen you knit every row, you create **garter stitch** — a bumpy, reversible fabric. This is the simplest pattern!`,
        commonMistakes: [
          "Inserting the needle from right to left (that's purling!)",
          "Wrapping the yarn clockwise instead of counterclockwise",
          "Accidentally adding extra stitches at the edges",
          "Knitting too tightly to slide the needle through"
        ],
        practiceExercise: "Cast on 20 stitches and knit 20 rows of garter stitch. Focus on keeping even tension. Your swatch should be roughly square."
      },
      {
        id: "purl-stitch",
        title: "The Purl Stitch",
        description: "Learn the purl stitch — the reverse of knit — to unlock countless stitch patterns.",
        duration: "20 min",
        content: `## The Purl Stitch\n\nPurling is the reverse of knitting. Together, knit and purl create every stitch pattern imaginable.\n\n### Steps\n\n1. **Hold your work:** Yarn should be in front of the work\n2. **Insert:** Push right needle through the first stitch from right to left, in front of the left needle\n3. **Wrap:** Bring yarn counterclockwise around the right needle\n4. **Pull through:** Slide the needle back, bringing the new loop\n5. **Slide off:** Drop the old stitch\n\n### Stockinette Stitch\nAlternating one row of knit and one row of purl creates **stockinette stitch** — the smooth, classic "V" pattern you see in most store-bought knitwear.`,
        commonMistakes: [
          "Forgetting to move yarn to the front before purling",
          "Inserting the needle from the wrong direction",
          "Creating accidental yarn-overs by moving yarn over the needle"
        ],
        practiceExercise: "Cast on 20 stitches. Row 1: Knit all. Row 2: Purl all. Repeat for 20 rows to create a stockinette swatch."
      },
      {
        id: "binding-off",
        title: "Binding Off",
        description: "Learn how to finish your knitting by securely binding off stitches.",
        duration: "12 min",
        content: `## Binding Off (Casting Off)\n\nBinding off secures your stitches so your work doesn't unravel.\n\n### Standard Bind Off\n\n1. **Knit 2 stitches** onto the right needle\n2. **Lift over:** Using the left needle, lift the first stitch over the second and off the needle\n3. **Knit 1 more** stitch\n4. **Lift over** again\n5. **Repeat** until one stitch remains\n6. **Cut the yarn** leaving a 6-inch tail\n7. **Pull through** the last stitch and tighten\n\n### Tips for a Good Bind Off\n- Keep your bind-off loose — it should stretch as much as your cast-on edge\n- If your bind-off is too tight, try using a needle one size larger`,
        commonMistakes: [
          "Binding off too tightly, creating a puckered edge",
          "Forgetting to cut the yarn before pulling through the last stitch",
          "Not weaving in the tail securely"
        ],
        practiceExercise: "Complete your garter stitch or stockinette swatch by binding off all stitches. Practice until the edge is even and flexible."
      },
    ],
  },
  {
    id: "crochet-basics",
    title: "Crochet Basics",
    category: "Crochet",
    level: "Beginner",
    description: "Learn crochet from scratch — from holding the hook to mastering essential stitches.",
    lessons: [
      {
        id: "what-is-crochet",
        title: "What is Crochet?",
        description: "Discover the world of crochet, how it differs from knitting, and what you can create.",
        duration: "10 min",
        content: `## Welcome to Crochet!\n\nCrochet uses a single hook to create fabric from loops of yarn. Unlike knitting, you work with one active loop at a time.\n\n### Crochet vs Knitting\n- **Crochet** uses one hook, knitting uses two needles\n- Crochet is great for **3D shapes** (amigurumi, flowers)\n- Crochet uses about **30% more yarn** than knitting\n- Crochet fabric tends to be thicker and sturdier\n\n### What You'll Need\n1. A crochet hook (5mm / H-8 for beginners)\n2. Worsted weight yarn\n3. Scissors\n4. Yarn needle`,
        commonMistakes: ["Choosing a hook that's too small", "Starting with dark-colored yarn"],
        practiceExercise: "Gather your supplies: a 5mm crochet hook and a skein of light-colored worsted weight yarn."
      },
      {
        id: "crochet-hooks",
        title: "Types of Crochet Hooks",
        description: "Learn about aluminum, steel, ergonomic, and Tunisian hooks.",
        duration: "10 min",
        content: `## Crochet Hook Types\n\n### Aluminum Hooks\nLightweight and smooth. The most common type. Great for acrylic and cotton yarn.\n\n### Steel Hooks\nVery thin hooks for thread crochet and lace work. Numbered inversely (smaller number = larger hook).\n\n### Ergonomic Hooks\nThick, cushioned handles for comfort during long sessions. Excellent for anyone with hand pain.\n\n### Tunisian Hooks\nExtra-long hooks (sometimes with a cable) for Tunisian crochet, which creates a knit-like fabric.\n\n### Hook Sizes\n| Letter | Metric | Best For |\n|--------|--------|----------|\n| B/1 | 2.25mm | Thread |\n| G/6 | 4mm | DK yarn |\n| H/8 | 5mm | Worsted |\n| J/10 | 6mm | Bulky |`,
        commonMistakes: ["Using the wrong size hook for your yarn weight"],
        practiceExercise: "Hold your hook in both the pencil grip and the knife grip. Practice for 2 minutes each to find your preference."
      },
      {
        id: "crochet-holding-yarn",
        title: "How to Hold Yarn for Crochet",
        description: "Master yarn tension and hook grip for smooth, even crochet.",
        duration: "12 min",
        content: `## Holding Your Hook & Yarn\n\n### Hook Grip\n**Pencil Grip:** Hold the hook like a pencil, between thumb and index finger.\n\n**Knife Grip:** Hold the hook like a dinner knife, with your hand over the top.\n\n### Yarn Tension\n1. Drape yarn over your non-dominant index finger\n2. Wrap once around your pinky for tension\n3. The yarn should flow smoothly — not too tight, not too loose\n\n### The Working Position\n- Hook in dominant hand\n- Yarn and work in non-dominant hand\n- Pinch the work near where you're stitching`,
        commonMistakes: ["Gripping the hook too tightly", "Inconsistent yarn tension"],
        practiceExercise: "Practice holding the hook and yarn for 5 minutes without crocheting. Get comfortable with the position."
      },
      {
        id: "chain-stitch",
        title: "Chain Stitch",
        description: "The foundation of nearly every crochet project.",
        duration: "15 min",
        content: `## The Chain Stitch (ch)\n\nThe chain is the foundation row for most crochet projects.\n\n### Steps\n1. **Slip knot:** Make a loop, pull yarn through, tighten on hook\n2. **Yarn over (YO):** Wrap yarn over the hook from back to front\n3. **Pull through:** Draw the yarn through the loop on the hook\n4. **Repeat:** Each pull-through creates one chain\n\n### Counting Chains\n- Each V-shape on the front is one chain\n- Don't count the loop on the hook\n- Don't count the slip knot`,
        commonMistakes: ["Making chains too tight", "Losing count of chains", "Twisting the chain"],
        practiceExercise: "Make a chain of 30 stitches. Practice until your chains are even in size."
      },
      {
        id: "slip-stitch",
        title: "Slip Stitch",
        description: "A versatile stitch for joining, edging, and moving yarn.",
        duration: "10 min",
        content: `## Slip Stitch (sl st)\n\nThe slip stitch is the shortest crochet stitch. It's used to join rounds, create edges, and move yarn without adding height.\n\n### Steps\n1. Insert hook into the stitch\n2. Yarn over\n3. Pull through both the stitch AND the loop on your hook in one motion\n\n### Uses\n- Joining a chain into a ring\n- Joining rounds when crocheting in the round\n- Creating surface decoration\n- Invisible seaming`,
        commonMistakes: ["Pulling too tight when joining rounds"],
        practiceExercise: "Chain 20, then slip stitch back along the chain to practice the motion."
      },
      {
        id: "single-crochet",
        title: "Single Crochet",
        description: "The most fundamental crochet stitch — short, tight, and versatile.",
        duration: "20 min",
        content: `## Single Crochet (sc)\n\nSingle crochet creates a short, dense fabric. It's the most commonly used stitch.\n\n### Steps\n1. Insert hook into the stitch\n2. Yarn over and pull up a loop (2 loops on hook)\n3. Yarn over and pull through both loops\n\n### Starting a Row\n- Chain 1 (turning chain)\n- Turn your work\n- Single crochet into the first stitch\n\n### Tips\n- Count your stitches at the end of each row\n- The turning chain does NOT count as a stitch in single crochet`,
        commonMistakes: ["Skipping the first stitch", "Not counting stitches", "Accidentally increasing at row edges"],
        practiceExercise: "Chain 21, then single crochet across (20 sc). Work 20 rows to make a swatch. Count your stitches each row!"
      },
      {
        id: "double-crochet",
        title: "Double Crochet",
        description: "A taller stitch that works up quickly and creates a softer fabric.",
        duration: "20 min",
        content: `## Double Crochet (dc)\n\nDouble crochet is twice the height of single crochet, making projects grow faster.\n\n### Steps\n1. **Yarn over** before inserting the hook\n2. Insert hook into the stitch\n3. Yarn over and pull up a loop (3 loops on hook)\n4. Yarn over and pull through 2 loops (2 loops remain)\n5. Yarn over and pull through last 2 loops\n\n### Starting a Row\n- Chain 3 (turning chain — counts as first dc)\n- Turn your work\n- Skip the first stitch, dc into the second`,
        commonMistakes: ["Forgetting the initial yarn over", "Not counting the turning chain as a stitch"],
        practiceExercise: "Chain 23, dc across (20 dc + ch-3 turning chain). Work 15 rows."
      },
      {
        id: "half-double-crochet",
        title: "Half Double Crochet",
        description: "A stitch between single and double crochet in height.",
        duration: "15 min",
        content: `## Half Double Crochet (hdc)\n\nHalf double crochet is taller than single but shorter than double. It creates a slightly textured fabric.\n\n### Steps\n1. Yarn over\n2. Insert hook into the stitch\n3. Yarn over and pull up a loop (3 loops on hook)\n4. Yarn over and pull through ALL 3 loops at once\n\n### When to Use It\n- Hat bands\n- Blanket borders\n- Projects where you want moderate density\n- Transitioning between sc and dc sections`,
        commonMistakes: ["Pulling through only 2 loops instead of 3", "Inconsistent tension"],
        practiceExercise: "Create a swatch: Chain 22, hdc across for 15 rows. Compare the texture to your sc and dc swatches."
      },
    ],
  },
];

export function getCourse(id: string): Course | undefined {
  return courses.find(c => c.id === id);
}

export function getLesson(courseId: string, lessonId: string): Lesson | undefined {
  const course = getCourse(courseId);
  return course?.lessons.find(l => l.id === lessonId);
}
