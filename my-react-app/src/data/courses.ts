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
        content: `## What Is Knitting?

Knitting is the craft of making fabric by pulling loops of yarn through other loops with needles. It is one of the oldest textile skills and is still popular because it is practical, creative, and relaxing.

### Why Learn to Knit?

- **Relaxing:** The repeated motion can feel calm and meditative.
- **Creative:** You can make scarves, hats, sweaters, blankets, and gifts.
- **Useful:** Knitting lets you create items you can wear or use every day.
- **Social:** Yarn shops, classes, and online groups make it easy to learn with others.

### What You Need to Begin

1. A pair of knitting needles, such as US size 8 / 5mm.
2. Smooth, light-colored worsted-weight yarn.
3. Scissors.
4. A yarn needle for weaving in ends.`,
        commonMistakes: [
          "Starting with yarn that is dark, fuzzy, or slippery.",
          "Choosing very small needles that make the stitches hard to see.",
          "Trying to learn too many new techniques in the first session.",
        ],
        practiceExercise: "Gather your first knitting supplies and make sure the yarn and needle size feel comfortable in your hands before you begin stitching.",
      },
      {
        id: "types-of-needles",
        title: "Types of Knitting Needles",
        description: "Explore straight, circular, double-pointed, and interchangeable needles.",
        duration: "12 min",
        content: `## Knitting Needle Types

### Straight Needles
Straight needles are the classic beginner option. They are best for flat projects like scarves, washcloths, and simple panels.

### Circular Needles
Circular needles have two needle tips connected by a flexible cable. They work well for knitting in the round, and they can also hold wide flat projects more comfortably than straight needles.

### Double-Pointed Needles (DPNs)
Double-pointed needles come in sets of 4 or 5. They are useful for small tubes like socks, mitten thumbs, and hat crowns.

### Interchangeable Needles
Interchangeable sets let you connect different needle tips to different cable lengths. They are a flexible long-term option if you plan to knit many kinds of projects.

### Common Sizes
| US Size | Metric |
|---------|--------|
| 0 | 2mm |
| 4 | 3.5mm |
| 7 | 4.5mm |
| 8 | 5mm |
| 10 | 6mm |
| 11 | 8mm |`,
        commonMistakes: [
          "Using slippery metal needles before you feel comfortable controlling the stitches.",
          "Choosing a needle length that is too short or too long for the project.",
        ],
        practiceExercise: "Compare two needle materials, such as bamboo and metal, and notice which one gives you the most control.",
      },
      {
        id: "holding-yarn",
        title: "How to Hold Yarn",
        description: "Learn the English and Continental methods of holding yarn for consistent tension.",
        duration: "15 min",
        content: `## How to Hold Yarn

The goal is not to hold the yarn in one perfect way. The goal is to keep the yarn moving smoothly so your stitches stay even and your hands stay relaxed.

### English Style
In English style, the working yarn is controlled with your **right hand**.

1. Let the yarn run over your right index finger.
2. Guide the yarn with your other fingers so it does not slip away.
3. Keep your grip light so the yarn can move when you wrap it around the needle.

### Continental Style
In Continental style, the working yarn is controlled with your **left hand**.

1. Let the yarn rest over your left index finger.
2. Use your other fingers to add gentle tension.
3. Move the needle to pick the yarn instead of wrapping the yarn by hand.

### What to Watch For
- Your shoulders and hands should stay relaxed.
- The yarn should glide, not yank or drag.
- If the stitches feel tight, loosen your grip slightly.
- If the stitches look uneven, slow down and watch how the yarn moves across your fingers.`,
        commonMistakes: [
          "Wrapping the yarn so tightly that the stitches become stiff.",
          "Holding the yarn so loosely that every stitch ends up a different size.",
          "Gripping the needles too hard instead of letting your fingers guide them.",
        ],
        practiceExercise: "Spend 5 minutes holding the yarn in English style and 5 minutes in Continental style, then choose the version that feels easier to control.",
      },
      {
        id: "casting-on",
        title: "Casting On",
        description: "The first step: getting stitches onto your needle using the long-tail cast on.",
        duration: "15 min",
        content: `## The Long-Tail Cast On

The long-tail cast on makes a neat, stretchy edge and is a great beginner method.

### Step-by-Step

1. **Measure the tail:** Pull out roughly 1 inch of yarn for each stitch you need, plus a few extra inches.
2. **Make a slip knot:** Form a loop, pull the yarn through, and place the knot on the needle.
3. **Set up your hand:** Hold the tail over your thumb and the working yarn over your index finger so the yarn forms a slingshot shape.
4. **Insert the needle:** Bring the needle under the strand on your thumb.
5. **Catch the yarn:** Move the needle over and around the strand on your index finger.
6. **Pull the loop back:** Bring that strand back through the thumb loop.
7. **Tighten gently:** Release the thumb loop and snug the new stitch without making it tight.
8. **Repeat:** Keep making stitches until you reach the number you need.

### Helpful Tip
Your cast-on stitches should slide along the needle easily. If they do not move, you are pulling too tightly.`,
        commonMistakes: [
          "Leaving too short a yarn tail before starting.",
          "Pulling the cast-on stitches so tightly that the next row is hard to knit.",
          "Twisting the slip knot or the cast-on edge as you work.",
        ],
        videoUrl: "https://www.youtube.com/watch?v=1vm6oaYzHyA&t=367s",
        practiceExercise: "Cast on 20 stitches several times until you can make a neat row of stitches that all slide smoothly on the needle.",
      },
      {
        id: "knit-stitch",
        title: "The Knit Stitch",
        description: "Learn the fundamental knit stitch — the building block of all knitting.",
        duration: "20 min",
        content: `## The Knit Stitch

The knit stitch is one of the two basic stitches in knitting. Once you can make this stitch comfortably, you can create garter stitch and begin many beginner projects.

### Step-by-Step

1. **Start with the yarn in back:** Hold the needle with the stitches in your left hand and the empty needle in your right hand.
2. **Insert the right needle:** Go into the front of the first stitch from left to right.
3. **Wrap the yarn:** Bring the working yarn around the right needle counterclockwise.
4. **Pull through:** Use the right needle to draw a new loop through the old stitch.
5. **Slide off the old stitch:** Let the original stitch fall off the left needle.
6. **Repeat across the row:** Knit each stitch the same way until the row is complete.

### What It Makes
If you knit every row, you create **garter stitch**, a stretchy fabric with ridges on both sides.`,
        commonMistakes: [
          "Inserting the needle from the wrong direction and accidentally making a purl-style motion.",
          "Wrapping the yarn the wrong way around the needle.",
          "Accidentally adding extra stitches at the edges by lifting the yarn over the needle.",
          "Pulling the yarn so tightly that it becomes hard to insert the needle into the next row.",
        ],
        videoUrl: "https://www.youtube.com/watch?v=Egp4NRhlMDg",
        practiceExercise: "Cast on 20 stitches and knit every row until you have a small square swatch, focusing on keeping the stitches the same size.",
      },
      {
        id: "purl-stitch",
        title: "The Purl Stitch",
        description: "Learn the purl stitch — the reverse of knit — to unlock countless stitch patterns.",
        duration: "20 min",
        content: `## The Purl Stitch

The purl stitch is the reverse of the knit stitch. When you combine knit and purl stitches, you can create stockinette, ribbing, seed stitch, and many other textures.

### Step-by-Step

1. **Bring the yarn to the front:** The working yarn should sit in front of the needles.
2. **Insert the right needle:** Go into the first stitch from right to left, with the right needle in front of the left needle.
3. **Wrap the yarn:** Bring the yarn counterclockwise around the tip of the right needle.
4. **Pull through:** Draw the new loop through the stitch toward the back.
5. **Slide off the old stitch:** Let the original stitch drop from the left needle.
6. **Repeat across the row:** Purl each stitch in the same way until the row is complete.

### What It Makes
If you knit one row and purl the next, you create **stockinette stitch**, the smooth fabric seen in many sweaters and hats.`,
        commonMistakes: [
          "Forgetting to move the yarn to the front before starting the purl stitch.",
          "Inserting the needle from the wrong direction.",
          "Accidentally creating extra yarn-overs while moving the yarn between front and back.",
        ],
        videoUrl: "https://www.youtube.com/watch?v=7ePhLqw6HDM",
        practiceExercise: "Cast on 20 stitches and alternate one knit row with one purl row until you can clearly see the smooth stockinette side and the bumpy reverse side.",
      },
      {
        id: "binding-off",
        title: "Binding Off",
        description: "Learn how to finish your knitting by securely binding off stitches.",
        duration: "12 min",
        content: `## Binding Off

Binding off secures the final row so your knitting will not unravel.

### Standard Bind Off

1. **Knit the first 2 stitches** onto the right needle.
2. **Lift the first stitch over the second:** Use the tip of the left needle to pull the older stitch up and over the newer stitch.
3. **Knit 1 more stitch** so you again have 2 stitches on the right needle.
4. **Repeat the lift-over motion** to bind off another stitch.
5. **Continue across the row** until only 1 stitch remains.
6. **Cut the yarn,** leaving a tail of about 6 inches.
7. **Pull the tail through the last loop** and tighten gently.

### Helpful Tip
The bound-off edge should stretch. If it pulls inward, try binding off more loosely or using a slightly larger needle.`,
        commonMistakes: [
          "Binding off so tightly that the edge puckers or curls.",
          "Forgetting to cut the yarn before pulling it through the last loop.",
          "Leaving the tail unsecured instead of weaving it in.",
        ],
        videoUrl: "https://www.youtube.com/watch?v=VSwjIUiQZlM",
        practiceExercise: "Bind off a practice swatch and compare the final edge to the cast-on edge, aiming for both sides to look neat and flexible.",
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
        content: `## Welcome to Crochet

Crochet uses one hook to pull yarn through loops and build fabric one stitch at a time. Unlike knitting, crochet usually keeps only one active loop on the hook.

### Crochet vs. Knitting
- **Crochet** uses one hook, while knitting usually uses two needles.
- Crochet is excellent for **3D shapes** like toys, flowers, and baskets.
- Crochet fabric is often thicker and a little firmer than knitted fabric.
- Crochet can be easier to pause and restart because there is usually only one live loop to manage.

### What You Need to Begin
1. A crochet hook, such as 5mm / H-8.
2. Smooth, light-colored worsted-weight yarn.
3. Scissors.
4. A yarn needle.`,
        commonMistakes: ["Choosing a hook that is too small for beginner practice.", "Starting with dark yarn that makes the stitches hard to see."],
        practiceExercise: "Gather a beginner hook and yarn, then practice holding them together before you try your first stitches.",
      },
      {
        id: "crochet-hooks",
        title: "Types of Crochet Hooks",
        description: "Learn about aluminum, steel, ergonomic, and Tunisian hooks.",
        duration: "10 min",
        content: `## Crochet Hook Types

### Aluminum Hooks
Aluminum hooks are lightweight, smooth, and widely available. They are a common beginner choice.

### Steel Hooks
Steel hooks are very small and are used mostly for thread crochet and lace.

### Ergonomic Hooks
Ergonomic hooks have thicker, softer handles to make long crochet sessions more comfortable.

### Tunisian Hooks
Tunisian hooks are longer than standard hooks and can hold many loops at once for Tunisian crochet.

### Common Sizes
| Letter | Metric | Best For |
|--------|--------|----------|
| B/1 | 2.25mm | Thread |
| G/6 | 4mm | DK yarn |
| H/8 | 5mm | Worsted |
| J/10 | 6mm | Bulky |`,
        commonMistakes: ["Using a hook size that does not match the yarn weight or the pattern recommendation."],
        practiceExercise: "Hold two different crochet hooks if you can, and notice which handle shape feels more comfortable in your hand.",
      },
      {
        id: "crochet-holding-yarn",
        title: "How to Hold Yarn for Crochet",
        description: "Master yarn tension and hook grip for smooth, even crochet.",
        duration: "12 min",
        content: `## Holding Your Hook and Yarn

Good crochet tension comes from a comfortable grip, not from squeezing the hook tightly.

### Hook Grip
**Pencil Grip:** Hold the hook like a pencil between your thumb and index finger.

**Knife Grip:** Hold the hook like a dinner knife with your hand over the top.

### Yarn Control
1. Drape the yarn over the index finger of your non-dominant hand.
2. Use your other fingers to guide the yarn and create light tension.
3. Pinch the work close to the stitch you are making so the hook has support.

### What to Watch For
- The yarn should move smoothly when you pull it.
- Your hook hand should stay relaxed.
- If your stitches are too tight, loosen your grip slightly.
- If your loops keep getting large and uneven, slow down and adjust how the yarn rests over your finger.`,
        commonMistakes: ["Gripping the hook too tightly and tiring your hand.", "Letting the yarn move with no control so the loops become uneven."],
        practiceExercise: "Practice holding the hook and yarn for several minutes without crocheting until the position feels natural and steady.",
      },
      {
        id: "chain-stitch",
        title: "Chain Stitch",
        description: "The foundation of nearly every crochet project.",
        duration: "15 min",
        content: `## The Chain Stitch (ch)

The chain stitch forms the starting foundation for many crochet projects.

### Step-by-Step
1. **Make a slip knot:** Place it on the hook with one loop on the hook.
2. **Yarn over:** Wrap the yarn over the hook from back to front.
3. **Pull through:** Draw the yarn through the loop already on the hook.
4. **Repeat:** Each new pull-through creates one chain.
5. **Check your tension:** The chain should stay loose enough to bend without twisting.

### How to Count Chains
- Count each V-shaped chain.
- Do not count the loop currently on the hook.
- Do not count the slip knot as a chain.`,
        commonMistakes: ["Making the chains so tight that the next row is hard to work.", "Losing count of the chains.", "Twisting the chain before starting the next row."],
        videoUrl: "https://www.youtube.com/watch?v=o-Il8OcNAZA",
        practiceExercise: "Make several chains of 20 to 30 stitches and aim for each chain to match the others in size.",
      },
      {
        id: "slip-stitch",
        title: "Slip Stitch",
        description: "A versatile stitch for joining, edging, and moving yarn.",
        duration: "10 min",
        content: `## Slip Stitch (sl st)

The slip stitch is short and flat. It is used more for joining and moving the yarn than for building height.

### Step-by-Step
1. Insert the hook into the next stitch or space.
2. Yarn over once.
3. Pull the yarn through the stitch and the loop already on the hook in one motion.
4. Keep the motion gentle so the stitch stays flexible.

### Common Uses
- Joining a chain into a ring.
- Closing a round.
- Moving the yarn to a new position.
- Making a neat edging or surface detail.`,
        commonMistakes: ["Pulling the stitch too tight when joining rounds or edging."],
        videoUrl: "https://www.youtube.com/watch?v=8ir3v31G0sg",
        practiceExercise: "Chain 20 and work a slip stitch into each chain so you can practice pulling through in one smooth motion.",
      },
      {
        id: "single-crochet",
        title: "Single Crochet",
        description: "The most fundamental crochet stitch — short, tight, and versatile.",
        duration: "20 min",
        content: `## Single Crochet (sc)

Single crochet makes a short, sturdy fabric and is one of the most useful stitches in crochet.

### Step-by-Step
1. Insert the hook into the next stitch.
2. Yarn over and pull up a loop so you have 2 loops on the hook.
3. Yarn over again.
4. Pull through both loops on the hook.
5. Repeat in each stitch across the row.

### Starting a New Row
- Chain 1.
- Turn your work.
- Insert the hook into the first stitch of the new row.

### Helpful Tip
The turning chain usually does **not** count as a stitch in single crochet.`,
        commonMistakes: ["Skipping the first stitch of the row.", "Forgetting to count stitches and accidentally increasing or decreasing.", "Pulling the loops too tight to work into easily."],
        videoUrl: "https://www.youtube.com/watch?v=7FcRdxg0aeY",
        practiceExercise: "Chain 21, then work 20 single crochets across each row until you can keep the stitch count the same from top to bottom.",
      },
      {
        id: "double-crochet",
        title: "Double Crochet",
        description: "A taller stitch that works up quickly and creates a softer fabric.",
        duration: "20 min",
        content: `## Double Crochet (dc)

Double crochet is taller than single crochet, so projects grow faster and feel more open.

### Step-by-Step
1. **Yarn over** before inserting the hook.
2. Insert the hook into the next stitch.
3. Yarn over and pull up a loop so you have 3 loops on the hook.
4. Yarn over and pull through the first 2 loops.
5. Yarn over again and pull through the last 2 loops.
6. Repeat in each stitch across the row.

### Starting a New Row
- Chain 3.
- Turn your work.
- In many patterns, that chain 3 counts as the first double crochet.`,
        commonMistakes: ["Forgetting the first yarn-over before inserting the hook.", "Missing the top of the turning chain when counting stitches.", "Skipping or adding stitches at the ends of rows."],
        videoUrl: "https://www.youtube.com/watch?v=a1whu6Gub1M",
        practiceExercise: "Chain 23 and work double crochet rows, checking that each row has the same number of stitches before you continue.",
      },
      {
        id: "half-double-crochet",
        title: "Half Double Crochet",
        description: "A stitch between single and double crochet in height.",
        duration: "15 min",
        content: `## Half Double Crochet (hdc)

Half double crochet is a medium-height stitch that creates a soft, slightly textured fabric.

### Step-by-Step
1. Yarn over once.
2. Insert the hook into the next stitch.
3. Yarn over and pull up a loop so you have 3 loops on the hook.
4. Yarn over again and pull through all 3 loops at the same time.
5. Repeat in each stitch across the row.

### When It Is Useful
- Hat bands.
- Blanket borders.
- Projects that need more height than single crochet but more density than double crochet.`,
        commonMistakes: ["Pulling through only 2 loops instead of all 3.", "Letting the loop heights vary so the row becomes uneven."],
        videoUrl: "https://www.youtube.com/watch?v=f9C1C21MNiM",
        practiceExercise: "Work a small swatch in half double crochet and compare it to your single crochet and double crochet swatches so you can feel the difference in height and texture.",
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
