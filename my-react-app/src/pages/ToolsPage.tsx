import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Ruler, Hash, RotateCcw, Plus, Minus } from "lucide-react";

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-serif mb-2">Crafting Tools</h1>
        <p className="text-muted-foreground mb-10">Handy calculators and trackers for your projects.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <StitchCounter />
        <RowTracker />
        <YarnCalculator />
        <NeedleConverter />
      </div>
    </div>
  );
}

function StitchCounter() {
  const [count, setCount] = useState(0);
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-card p-6 shadow-soft border border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <Hash size={18} className="text-primary" />
        <h2 className="font-serif text-xl">Stitch Counter</h2>
      </div>
      <div className="text-center">
        <div className="text-6xl font-serif text-primary tabular-nums mb-6">{count}</div>
        <div className="flex items-center justify-center gap-3">
          <button onClick={() => setCount(Math.max(0, count - 1))}
            className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-border transition-colors active:scale-95">
            <Minus size={20} />
          </button>
          <button onClick={() => setCount(count + 1)}
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-elevated transition-all active:scale-95">
            <Plus size={20} />
          </button>
          <button onClick={() => setCount(0)}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <RotateCcw size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function RowTracker() {
  const [row, setRow] = useState(1);
  const [total, setTotal] = useState(20);
  const pct = Math.min(100, Math.round((row / total) * 100));

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
      className="bg-card rounded-card p-6 shadow-soft border border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <Ruler size={18} className="text-primary" />
        <h2 className="font-serif text-xl">Row Tracker</h2>
      </div>
      <div className="mb-4">
        <label className="text-xs text-muted-foreground">Total rows</label>
        <input type="number" value={total} onChange={(e) => setTotal(Math.max(1, +e.target.value))}
          className="w-full mt-1 px-3 py-2 rounded-button bg-muted border border-border text-sm outline-none focus:ring-2 ring-ring/20 tabular-nums" />
      </div>
      <div className="text-center mb-4">
        <span className="text-4xl font-serif text-primary tabular-nums">{row}</span>
        <span className="text-muted-foreground text-lg"> / {total}</span>
      </div>
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-4">
        <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${pct}%` }} transition={{ type: "spring", stiffness: 200, damping: 20 }} />
      </div>
      <div className="flex items-center justify-center gap-3">
        <button onClick={() => setRow(Math.max(1, row - 1))}
          className="px-4 py-2 rounded-button bg-muted text-sm font-medium hover:bg-border transition-colors active:scale-95">
          Previous
        </button>
        <button onClick={() => setRow(Math.min(total, row + 1))}
          className="px-4 py-2 rounded-button bg-primary text-primary-foreground text-sm font-medium hover:shadow-soft transition-all active:scale-95">
          Next Row
        </button>
        <button onClick={() => setRow(1)} className="px-3 py-2 rounded-button bg-muted text-muted-foreground text-sm hover:text-foreground transition-colors">
          <RotateCcw size={14} />
        </button>
      </div>
    </motion.div>
  );
}

function YarnCalculator() {
  const [yards, setYards] = useState("");
  const meters = yards ? (parseFloat(yards) * 0.9144).toFixed(1) : "";
  const grams100 = yards ? (parseFloat(yards) / 200 * 100).toFixed(0) : "";

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
      className="bg-card rounded-card p-6 shadow-soft border border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <Calculator size={18} className="text-primary" />
        <h2 className="font-serif text-xl">Yarn Calculator</h2>
      </div>
      <div className="mb-4">
        <label className="text-xs text-muted-foreground">Yards needed</label>
        <input type="number" value={yards} onChange={(e) => setYards(e.target.value)} placeholder="e.g. 400"
          className="w-full mt-1 px-3 py-2 rounded-button bg-muted border border-border text-sm outline-none focus:ring-2 ring-ring/20 tabular-nums" />
      </div>
      {yards && (
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-muted rounded-button px-4 py-3">
            <span className="text-sm text-muted-foreground">In meters</span>
            <span className="font-medium tabular-nums">{meters}m</span>
          </div>
          <div className="flex justify-between items-center bg-muted rounded-button px-4 py-3">
            <span className="text-sm text-muted-foreground">Est. skeins (200yd)</span>
            <span className="font-medium tabular-nums">{(parseFloat(yards) / 200).toFixed(1)}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function NeedleConverter() {
  const sizes = [
    { us: "0", mm: "2.0" }, { us: "1", mm: "2.25" }, { us: "2", mm: "2.75" },
    { us: "3", mm: "3.25" }, { us: "4", mm: "3.5" }, { us: "5", mm: "3.75" },
    { us: "6", mm: "4.0" }, { us: "7", mm: "4.5" }, { us: "8", mm: "5.0" },
    { us: "9", mm: "5.5" }, { us: "10", mm: "6.0" }, { us: "10.5", mm: "6.5" },
    { us: "11", mm: "8.0" }, { us: "13", mm: "9.0" }, { us: "15", mm: "10.0" },
  ];
  const [selected, setSelected] = useState("8");
  const match = sizes.find((s) => s.us === selected);

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
      className="bg-card rounded-card p-6 shadow-soft border border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <Ruler size={18} className="text-primary" />
        <h2 className="font-serif text-xl">Needle Size Converter</h2>
      </div>
      <div className="mb-4">
        <label className="text-xs text-muted-foreground">US Size</label>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}
          className="w-full mt-1 px-3 py-2 rounded-button bg-muted border border-border text-sm outline-none focus:ring-2 ring-ring/20">
          {sizes.map((s) => (
            <option key={s.us} value={s.us}>US {s.us}</option>
          ))}
        </select>
      </div>
      {match && (
        <div className="text-center bg-accent rounded-card p-6">
          <div className="text-3xl font-serif text-primary tabular-nums">{match.mm}mm</div>
          <div className="text-sm text-muted-foreground mt-1">US {match.us}</div>
        </div>
      )}
    </motion.div>
  );
}
