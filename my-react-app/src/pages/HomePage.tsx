import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Scissors, Users, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-illustration.jpg";
import { courses } from "@/data/courses";
import { stitches } from "@/data/stitches";
import { patterns } from "@/data/patterns";

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6">
              Learn Knitting &{" "}
              <span className="text-primary italic">Crochet</span> Step-by-Step
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Master the meditative art of fiber crafts with structured paths, interactive patterns, and a community of makers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-button font-medium shadow-soft hover:shadow-elevated transition-all active:scale-95"
              >
                Start Learning <ArrowRight size={16} />
              </Link>
              <Link
                to="/patterns"
                className="inline-flex items-center gap-2 bg-card border border-border px-8 py-4 rounded-button font-medium hover:bg-muted transition-colors"
              >
                Browse Patterns
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative aspect-square rounded-[40px] overflow-hidden shadow-soft bg-muted"
          >
            <img src={heroImg} alt="Yarn balls and knitting needles" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 bg-muted/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "2", label: "Courses" },
            { num: "15", label: "Lessons" },
            { num: "13", label: "Stitches" },
            { num: "10", label: "Patterns" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-serif text-primary tabular-nums">{s.num}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Preview */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif">Beginner Courses</h2>
              <p className="text-muted-foreground mt-2">Start from zero — no experience needed.</p>
            </div>
            <Link to="/courses" className="text-primary text-sm font-medium hover:underline hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Link key={course.id} to={`/courses/${course.id}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-card p-6 shadow-soft hover:shadow-elevated transition-shadow border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <BookOpen size={20} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{course.category}</span>
                      <h3 className="text-xl font-serif mt-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{course.description}</p>
                      <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                        <span>{course.lessons.length} lessons</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 bg-accent rounded-full text-accent-foreground">{course.level}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stitch Library Preview */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif">Stitch Library</h2>
              <p className="text-muted-foreground mt-2">Explore essential stitches for knitting and crochet.</p>
            </div>
            <Link to="/stitches" className="text-primary text-sm font-medium hover:underline hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stitches.slice(0, 8).map((stitch) => (
              <Link key={stitch.id} to={`/stitches/${stitch.id}`}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-card rounded-card p-4 shadow-soft hover:shadow-hover transition-shadow border border-border/50 text-center"
                >
                  <div className="w-10 h-10 mx-auto rounded-lg bg-accent flex items-center justify-center mb-3">
                    <Scissors size={16} className="text-primary" />
                  </div>
                  <h4 className="font-serif text-sm">{stitch.name}</h4>
                  <span className="text-xs text-muted-foreground">{stitch.type}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Preview */}
      {/* <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <Users size={32} className="text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-serif mb-4">Join the Community</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Share your projects, get inspired, and connect with fellow crafters from around the world.
          </p>
          <Link
            to="/community"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-button font-medium shadow-soft hover:shadow-elevated transition-all"
          >
            Explore Community <ArrowRight size={16} />
          </Link>
        </div>
      </section> */}

      {/* Popular Patterns */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif">Popular Patterns</h2>
              <p className="text-muted-foreground mt-2">Ready-to-follow patterns for every skill level.</p>
            </div>
            <Link to="/patterns" className="text-primary text-sm font-medium hover:underline hidden sm:block">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {patterns.slice(0, 6).map((p) => (
              <Link key={p.id} to={`/patterns/${p.id}`}>
                <motion.div whileHover={{ y: -2 }} className="bg-card rounded-card p-5 shadow-soft hover:shadow-hover transition-shadow border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${p.difficulty === "Beginner" ? "text-secondary" : p.difficulty === "Intermediate" ? "text-primary" : "text-destructive"}`}>
                      {p.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">• {p.type}</span>
                  </div>
                  <h4 className="font-serif text-lg">{p.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.description}</p>
                  <div className="text-xs text-muted-foreground mt-3">{p.estimatedTime}</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
