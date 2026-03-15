import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Clock, ArrowLeft } from "lucide-react";
import { patterns } from "@/data/patterns";

function PatternDetail({ patternId }: { patternId: string }) {
  const pattern = patterns.find((p) => p.id === patternId);
  if (!pattern) return <div className="p-12 text-center text-muted-foreground">Pattern not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/patterns" className="text-sm text-muted-foreground hover:text-foreground mb-6 flex items-center gap-1"><ArrowLeft size={14} /> All Patterns</Link>

        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${pattern.difficulty === "Beginner" ? "bg-secondary/10 text-secondary" : pattern.difficulty === "Intermediate" ? "bg-accent text-accent-foreground" : "bg-destructive/10 text-destructive"}`}>
            {pattern.difficulty}
          </span>
          <span className="px-2.5 py-1 bg-muted text-muted-foreground rounded-full text-xs font-bold uppercase tracking-wider">{pattern.type}</span>
        </div>
        <h1 className="text-4xl font-serif mb-3">{pattern.title}</h1>
        <p className="text-muted-foreground mb-8">{pattern.description}</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-card p-4 shadow-soft border border-border/50">
            <div className="text-xs text-muted-foreground mb-1">Time</div>
            <div className="font-medium text-sm">{pattern.estimatedTime}</div>
          </div>
          <div className="bg-card rounded-card p-4 shadow-soft border border-border/50">
            <div className="text-xs text-muted-foreground mb-1">Yarn</div>
            <div className="font-medium text-sm">{pattern.yarnType}</div>
          </div>
          <div className="bg-card rounded-card p-4 shadow-soft border border-border/50">
            <div className="text-xs text-muted-foreground mb-1">Needle/Hook</div>
            <div className="font-medium text-sm">{pattern.needleSize}</div>
          </div>
        </div>

        <div className="bg-card rounded-card p-6 shadow-soft border border-border/50 mb-6">
          <h2 className="font-serif text-xl mb-4">Materials</h2>
          <ul className="space-y-2">
            {pattern.materials.map((m, i) => (
              <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {m}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card rounded-card p-6 shadow-soft border border-border/50">
          <h2 className="font-serif text-xl mb-4">Instructions</h2>
          <ol className="space-y-4">
            {pattern.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 pl-2 border-l-2 border-primary/20">
                <span className="font-medium text-primary tabular-nums shrink-0">{i + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </div>
  );
}

function PatternList() {
  const [filter, setFilter] = useState<"All" | "Beginner" | "Intermediate" | "Advanced">("All");
  const [typeFilter, setTypeFilter] = useState<"All" | "Knitting" | "Crochet">("All");
  const [search, setSearch] = useState("");

  const filtered = patterns.filter((p) => {
    if (filter !== "All" && p.difficulty !== filter) return false;
    if (typeFilter !== "All" && p.type !== typeFilter) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const diffColors: Record<string, string> = {
    Beginner: "text-secondary",
    Intermediate: "text-primary",
    Advanced: "text-destructive",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-serif mb-2">Patterns</h1>
        <p className="text-muted-foreground mb-8">Ready-to-follow patterns for every skill level.</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search patterns..."
            className="w-full pl-9 pr-4 py-2.5 rounded-button bg-card border border-border text-sm outline-none focus:ring-2 ring-ring/20" />
        </div>
        <div className="flex gap-1 flex-wrap">
          {(["All", "Beginner", "Intermediate", "Advanced"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-3 py-2 rounded-button text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          {(["All", "Knitting", "Crochet"] as const).map((f) => (
            <button key={f} onClick={() => setTypeFilter(f)}
              className={`px-3 py-2 rounded-button text-sm font-medium transition-colors ${typeFilter === f ? "bg-secondary text-secondary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
            <Link to={`/patterns/${p.id}`}>
              <div className="bg-card rounded-card p-5 shadow-soft hover:shadow-hover transition-all border border-border/50 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${diffColors[p.difficulty]}`}>{p.difficulty}</span>
                  <span className="text-xs text-muted-foreground">• {p.type}</span>
                </div>
                <h3 className="font-serif text-lg mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock size={12} />{p.estimatedTime}</span>
                  <span>{p.needleSize}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground">No patterns match your filters.</div>
        )}
      </div>
    </div>
  );
}

export default function PatternsPage() {
  const { patternId } = useParams();
  if (patternId) return <PatternDetail patternId={patternId} />;
  return <PatternList />;
}
