import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickReplies: Record<string, string> = {
  "Why are my stitches uneven?": "Uneven stitches are almost always a **tension issue**. Here are some tips:\n\n1. **Relax your grip** — tight hands = tight stitches\n2. **Wrap consistently** — always wrap yarn the same direction\n3. **Practice** — tension naturally evens out with experience\n4. **Check your yarn** — textured/fuzzy yarn hides unevenness\n\nTry knitting a 20-stitch swatch focusing only on consistent hand movement. It'll improve within a few rows!",
  "How do I fix a dropped stitch?": "Don't panic! A dropped stitch can be rescued:\n\n1. **Stop knitting** — don't let it ladder further\n2. **Find the dropped stitch** — look for a loose loop below your needles\n3. **Use a crochet hook** — insert through the dropped loop, catch the ladder bar above it, pull through\n4. **Repeat** up each row until you reach the current row\n5. **Place back on needle** — make sure it's not twisted\n\nFor purl stitches, work from the back of the fabric instead.",
  "What needle size should I use?": "The best needle size depends on your **yarn weight**:\n\n| Yarn Weight | US Size | Metric |\n|---|---|---|\n| Lace | 0-3 | 2-3.25mm |\n| Fingering | 1-4 | 2.25-3.5mm |\n| Sport | 3-6 | 3.25-4mm |\n| DK | 5-7 | 3.75-4.5mm |\n| Worsted | 7-9 | 4.5-5.5mm |\n| Bulky | 9-11 | 5.5-8mm |\n\n**Always check the yarn label** for recommended needle size, then swatch to match gauge!",
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your **Stitch Doctor** 🧶\n\nAsk me anything about knitting or crochet — dropped stitches, yarn choices, pattern help, and more!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");

    const userMsg: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);

    // Simple pattern matching for demo
    setTimeout(() => {
      let reply = quickReplies[msg];
      if (!reply) {
        const lower = msg.toLowerCase();
        if (lower.includes("uneven") || lower.includes("tension")) {
          reply = quickReplies["Why are my stitches uneven?"];
        } else if (lower.includes("dropped") || lower.includes("fix")) {
          reply = quickReplies["How do I fix a dropped stitch?"];
        } else if (lower.includes("needle") || lower.includes("size") || lower.includes("hook")) {
          reply = quickReplies["What needle size should I use?"];
        } else {
          reply = "Great question! For the best answer, I'd recommend checking our **Courses** section for detailed lessons, or browsing the **Stitch Library** for technique guides.\n\nYou can also try asking about:\n- Fixing dropped stitches\n- Needle/hook sizing\n- Tension and gauge\n- Yarn recommendations";
        }
      }
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-elevated flex items-center justify-center hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[22rem] max-h-[32rem] bg-card rounded-card shadow-elevated border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between">
              <span className="font-medium text-primary-foreground text-sm">Stitch Assistant</span>
              <Sparkles size={16} className="text-primary-foreground/70" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
              {messages.map((msg, i) => (
                <div key={i} className={`text-sm ${msg.role === "user" ? "text-right" : ""}`}>
                  <div
                    className={`inline-block px-3 py-2 rounded-card max-w-[85%] ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 space-y-1">
                {Object.keys(quickReplies).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="block w-full text-left text-xs px-3 py-1.5 rounded-button bg-accent text-accent-foreground hover:bg-primary/10 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 text-sm bg-muted rounded-button px-3 py-2 outline-none focus:ring-2 ring-ring/20"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-button bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
