import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Scissors } from "lucide-react";
import { stitches } from "@/data/stitches";

function StitchDetail({ stitchId }: { stitchId: string }) {
  const stitch = stitches.find((s) => s.id === stitchId);
  if (!stitch) return <div className="p-12 text-center text-muted-foreground">Stitch not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/stitches" className="text-sm text-muted-foreground hover:text-foreground mb-6 block">← Stitch Library</Link>

        <div className="flex items-center gap-3 mb-2">
          <span className="px-2.5 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">{stitch.type}</span>
          <span className="px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold uppercase tracking-wider">{stitch.difficulty}</span>
        </div>
        <h1 className="text-4xl font-serif mb-4">{stitch.name}</h1>
        <p className="text-muted-foreground mb-8">{stitch.description}</p>

        <div className="bg-card rounded-card p-6 shadow-soft border border-border/50 mb-6">
          <h2 className="font-serif text-xl mb-4">Instructions</h2>
          <ol className="space-y-3">
            {stitch.instructions.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs font-medium text-primary shrink-0 tabular-nums">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-accent rounded-card p-6 border border-primary/10">
          <h3 className="font-serif text-lg mb-3">Recommended Projects</h3>
          <div className="flex flex-wrap gap-2">
            {stitch.recommendedProjects.map((p) => (
              <span key={p} className="px-3 py-1 bg-card rounded-full text-sm text-foreground/80 border border-border">{p}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StitchList() {
  const [filter, setFilter] = useState<"All" | "Knitting" | "Crochet">("All");
  const [search, setSearch] = useState("");

  const filtered = stitches.filter((s) => {
    if (filter !== "All" && s.type !== filter) return false;
    if (search && !s.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-serif mb-2">Stitch Library</h1>
        <p className="text-muted-foreground mb-8">A visual encyclopedia of knitting and crochet stitches.</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stitches..."
            className="w-full pl-9 pr-4 py-2.5 rounded-button bg-card border border-border text-sm outline-none focus:ring-2 ring-ring/20"
          />
        </div>
        <div className="flex gap-1">
          {(["All", "Knitting", "Crochet"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-button text-sm font-medium transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((stitch, i) => (
          <motion.div
            key={stitch.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
          >
            <Link to={`/stitches/${stitch.id}`}>
              <div className="bg-card rounded-card p-5 shadow-soft hover:shadow-hover transition-all border border-border/50 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Scissors size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg">{stitch.name}</h3>
                    <div className="flex gap-2 text-xs">
                      <span className="text-secondary font-medium">{stitch.type}</span>
                      <span className="text-muted-foreground">• {stitch.difficulty}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{stitch.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function StitchLibraryPage() {
  const { stitchId } = useParams();
  if (stitchId) return <StitchDetail stitchId={stitchId} />;
  return <StitchList />;
}
