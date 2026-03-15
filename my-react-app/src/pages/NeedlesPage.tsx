import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { needleTypes } from "@/data/needles";
import { needleSizeChart, hookSizeChart } from "@/data/tools";

function NeedleDetail({ needleId }: { needleId: string }) {
  const needle = needleTypes.find((n) => n.id === needleId);
  if (!needle) return <div className="p-12 text-center text-muted-foreground">Not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/needles" className="text-sm text-muted-foreground hover:text-foreground mb-6 block">← All Needles & Hooks</Link>
        <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{needle.category}</span>
        <h1 className="text-4xl font-serif mt-1 mb-4">{needle.name}</h1>
        <p className="text-muted-foreground mb-8">{needle.description}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-card rounded-card p-5 shadow-soft border border-border/50">
            <h3 className="font-serif text-lg mb-3">Sizes Available</h3>
            <p className="text-sm text-foreground/80">{needle.sizes}</p>
          </div>
          <div className="bg-card rounded-card p-5 shadow-soft border border-border/50">
            <h3 className="font-serif text-lg mb-3">Materials</h3>
            <div className="flex flex-wrap gap-1.5">
              {needle.materials.map((m) => (
                <span key={m} className="px-2.5 py-1 bg-muted rounded-full text-xs">{m}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-accent rounded-card p-6 border border-primary/10">
          <h3 className="font-serif text-lg mb-3">Best For</h3>
          <div className="flex flex-wrap gap-2">
            {needle.bestFor.map((b) => (
              <span key={b} className="px-3 py-1 bg-card rounded-full text-sm border border-border">{b}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function NeedleList() {
  const [filter, setFilter] = useState<"All" | "Knitting" | "Crochet">("All");
  const filtered = needleTypes.filter((n) => filter === "All" || n.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-serif mb-2">Needles & Hooks Guide</h1>
        <p className="text-muted-foreground mb-8">Everything you need to know about knitting needles and crochet hooks.</p>
      </motion.div>

      <div className="flex gap-1 mb-8">
        {(["All", "Knitting", "Crochet"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-button text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {filtered.map((n, i) => (
          <motion.div key={n.id} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Link to={`/needles/${n.id}`}>
              <div className="bg-card rounded-card p-6 shadow-soft hover:shadow-hover transition-all border border-border/50 hover:-translate-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{n.category}</span>
                <h3 className="font-serif text-xl mt-1 mb-2">{n.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{n.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {n.bestFor.slice(0, 3).map((b) => (
                    <span key={b} className="px-2 py-0.5 bg-accent text-accent-foreground rounded-full text-xs">{b}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="space-y-12">
        {(filter === "All" || filter === "Knitting") && (
          <div>
            <h2 className="text-2xl font-serif mb-4">Knitting Needle Size Chart</h2>
            <div className="bg-card rounded-card shadow-soft border border-border/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="bg-muted/50">
                    <th className="text-left px-4 py-3 font-medium">US Size</th>
                    <th className="text-left px-4 py-3 font-medium">Metric</th>
                    <th className="text-left px-4 py-3 font-medium">Recommended Yarn</th>
                  </tr></thead>
                  <tbody>
                    {needleSizeChart.map((r) => (
                      <tr key={r.us} className="border-t border-border/50">
                        <td className="px-4 py-2.5 tabular-nums">{r.us}</td>
                        <td className="px-4 py-2.5 tabular-nums">{r.metric}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{r.yarn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        {(filter === "All" || filter === "Crochet") && (
          <div>
            <h2 className="text-2xl font-serif mb-4">Crochet Hook Size Chart</h2>
            <div className="bg-card rounded-card shadow-soft border border-border/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="bg-muted/50">
                    <th className="text-left px-4 py-3 font-medium">Letter/Number</th>
                    <th className="text-left px-4 py-3 font-medium">Metric</th>
                    <th className="text-left px-4 py-3 font-medium">Recommended Yarn</th>
                  </tr></thead>
                  <tbody>
                    {hookSizeChart.map((r) => (
                      <tr key={r.letter} className="border-t border-border/50">
                        <td className="px-4 py-2.5 tabular-nums">{r.letter}</td>
                        <td className="px-4 py-2.5 tabular-nums">{r.metric}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{r.yarn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function NeedlesPage() {
  const { needleId } = useParams();
  if (needleId) return <NeedleDetail needleId={needleId} />;
  return <NeedleList />;
}
