import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getCourse, getLesson } from "@/data/courses";
import {
  AlertTriangle,
  Dumbbell,
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  ChevronRight,
} from "lucide-react";

/** Converts any YouTube URL format to an embeddable URL, stripping timestamps. */
function toEmbedUrl(url: string): string {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

const YTIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 shrink-0">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z" />
    <polygon fill="white" points="9.75,15.02 15.5,12 9.75,8.98" />
  </svg>
);

export default function LessonPage() {
  const { courseId, lessonId } = useParams();
  if (!courseId || !lessonId) return null;

  const course = getCourse(courseId);
  const lesson = getLesson(courseId, lessonId);
  if (!course || !lesson) {
    return (
      <div className="p-12 text-center text-muted-foreground">
        Lesson not found.
      </div>
    );
  }

  const lessonIndex = course.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < course.lessons.length - 1
      ? course.lessons[lessonIndex + 1]
      : null;
  const progress = Math.round(((lessonIndex + 1) / course.lessons.length) * 100);

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero Banner ───────────────────────────────────────── */}
      <div className="bg-card border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 pt-8 pb-0">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
            <Link to="/courses" className="hover:text-foreground transition-colors">
              Courses
            </Link>
            <ChevronRight size={12} className="opacity-40" />
            <Link to={`/courses/${courseId}`} className="hover:text-foreground transition-colors">
              {course.title}
            </Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-foreground font-medium">Lesson {lessonIndex + 1}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Meta pills */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                {course.level}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock size={12} />
                {lesson.duration} practice
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <BookOpen size={12} />
                Lesson {lessonIndex + 1} of {course.lessons.length}
              </span>
              {lesson.videoUrl && (
                <span className="flex items-center gap-1.5 text-xs font-medium text-red-500">
                  <YTIcon /> Video included
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-serif text-foreground leading-tight mb-6">
              {lesson.title}
            </h1>
          </motion.div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              />
            </div>
            <span className="text-xs text-muted-foreground tabular-nums shrink-0">
              {progress}%
            </span>
          </div>

          {/* Lesson pip track */}
          <div className="flex gap-0.5 overflow-x-auto pb-px -mx-1 px-1">
            {course.lessons.map((l, i) => (
              <Link
                key={l.id}
                to={`/courses/${courseId}/${l.id}`}
                title={l.title}
                className={`shrink-0 h-[3px] rounded-t transition-all ${
                  i === lessonIndex
                    ? "flex-[2] bg-primary"
                    : i < lessonIndex
                    ? "flex-1 bg-primary/35"
                    : "flex-1 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="max-w-4xl mx-auto px-6 py-10"
      >
        <div className="grid lg:grid-cols-[1fr_272px] gap-8 items-start">

          {/* ── Article ──────────────────────────────────────── */}
          <div>

            {/* ── Lesson content card ── */}
            <div className="bg-card rounded-card border border-border/50 shadow-soft overflow-hidden mb-6">
              <div className="flex items-center gap-2 px-6 py-3.5 border-b border-border/50 bg-muted/30">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Lesson Content
                </span>
              </div>

              <div className="px-6 py-7">
                <style>{`
                  .lesson-prose h2 {
                    font-family: Georgia, serif;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: hsl(var(--foreground));
                    margin: 2rem 0 0.75rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid hsl(var(--border) / 0.5);
                  }
                  .lesson-prose h2:first-child { margin-top: 0; }
                  .lesson-prose h3 {
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: hsl(var(--muted-foreground));
                    margin: 1.5rem 0 0.5rem;
                  }
                  .lesson-prose p {
                    font-size: 15px;
                    line-height: 1.75;
                    color: hsl(var(--foreground) / 0.8);
                    margin-bottom: 0.75rem;
                  }
                  .lesson-prose strong {
                    font-weight: 600;
                    color: hsl(var(--foreground));
                  }
                  .lesson-prose blockquote {
                    border-left: 3px solid hsl(var(--primary) / 0.4);
                    margin: 1rem 0;
                    padding: 0.5rem 1rem;
                    background: hsl(var(--muted) / 0.3);
                    border-radius: 0 6px 6px 0;
                  }
                  .lesson-prose blockquote p {
                    margin: 0;
                    font-style: italic;
                    color: hsl(var(--foreground) / 0.7);
                  }
                  .lesson-prose ol {
                    list-style: none;
                    padding: 0;
                    margin: 1rem 0;
                    counter-reset: lesson-step;
                  }
                  .lesson-prose ol > li {
                    counter-increment: lesson-step;
                    display: block;
                    position: relative;
                    padding: 1rem 0 1rem 3.75rem;
                    border-bottom: 1px solid hsl(var(--border) / 0.35);
                    font-size: 15px;
                    color: hsl(var(--foreground) / 0.8);
                    line-height: 1.68;
                  }
                  .lesson-prose ol > li:last-child { border-bottom: none; }
                  .lesson-prose ol > li::before {
                    content: counter(lesson-step, decimal-leading-zero);
                    position: absolute;
                    left: 0;
                    top: 1.15rem;
                    font-family: ui-monospace, monospace;
                    font-size: 11px;
                    font-weight: 700;
                    color: hsl(var(--primary));
                    width: 2rem;
                  }
                  .lesson-prose ol > li > * {
                    min-width: 0;
                  }
                  .lesson-prose ol > li p {
                    margin: 0;
                  }
                  .lesson-prose ol > li strong {
                    display: block;
                    margin: 0 0 0.2rem;
                    font-weight: 650;
                    line-height: 1.35;
                    color: hsl(var(--foreground));
                  }
                  .lesson-prose ul {
                    list-style: none;
                    padding: 0;
                    margin: 0.75rem 0;
                  }
                  .lesson-prose ul > li {
                    display: flex;
                    gap: 0.75rem;
                    align-items: flex-start;
                    padding: 0.3rem 0;
                    font-size: 15px;
                    color: hsl(var(--foreground) / 0.8);
                  }
                  .lesson-prose ul > li::before {
                    content: "–";
                    color: hsl(var(--primary));
                    font-weight: 600;
                    flex-shrink: 0;
                  }
                  .lesson-prose table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 14px;
                    margin: 1rem 0;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 1px solid hsl(var(--border) / 0.6);
                  }
                  .lesson-prose thead tr {
                    background: hsl(var(--muted) / 0.6);
                  }
                  .lesson-prose th {
                    text-align: left;
                    padding: 0.6rem 1rem;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                    color: hsl(var(--muted-foreground));
                    border-bottom: 1px solid hsl(var(--border) / 0.6);
                  }
                  .lesson-prose td {
                    padding: 0.6rem 1rem;
                    color: hsl(var(--foreground) / 0.8);
                    border-bottom: 1px solid hsl(var(--border) / 0.3);
                  }
                  .lesson-prose tbody tr:last-child td { border-bottom: none; }
                  .lesson-prose tbody tr:nth-child(even) {
                    background: hsl(var(--muted) / 0.25);
                  }
                `}</style>
                <div className="lesson-prose">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.content}</ReactMarkdown>
                </div>
              </div>
            </div>

            {/* ── Video player (shown when lesson has a videoUrl) ── */}
            {lesson.videoUrl && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="bg-card rounded-card border border-border/50 shadow-soft overflow-hidden mb-6"
              >
                <div className="flex items-center gap-2.5 px-6 py-3.5 border-b border-border/50">
                  <YTIcon />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Video Tutorial
                  </span>
                  <a
                    href={lesson.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Open on YouTube ↗
                  </a>
                </div>
                <div className="aspect-video bg-black">
                  <iframe
                    src={toEmbedUrl(lesson.videoUrl)}
                    title={`${lesson.title} video tutorial`}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </motion.div>
            )}

            {/* ── Common Mistakes ── */}
            {lesson.commonMistakes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-card border border-border/50 shadow-soft overflow-hidden mb-6"
              >
                <div className="flex items-center gap-2.5 px-6 py-3.5 border-b border-border/50 bg-destructive/5">
                  <AlertTriangle size={13} className="text-destructive" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-destructive/80">
                    Common Mistakes
                  </span>
                </div>
                <ul className="divide-y divide-border/40">
                  {lesson.commonMistakes.map((m, i) => (
                    <li key={i} className="flex items-start gap-3 px-6 py-3.5 text-sm text-foreground/80">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-destructive/40 shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* ── Practice Exercise ── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-accent rounded-card border border-primary/10 shadow-soft overflow-hidden mb-10"
            >
              <div className="flex items-center gap-2.5 px-6 py-3.5 border-b border-primary/10">
                <Dumbbell size={13} className="text-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                  Practice Exercise
                </span>
              </div>
              <p className="px-6 py-5 text-sm text-foreground/80 leading-relaxed">
                {lesson.practiceExercise}
              </p>
            </motion.div>

            {/* ── Navigation footer ── */}
            <div className="flex items-center justify-between">
              {prevLesson ? (
                <Link
                  to={`/courses/${courseId}/${prevLesson.id}`}
                  className="group flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-accent transition-all">
                    <ArrowLeft size={14} />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Previous</div>
                    <div className="text-sm font-medium text-foreground max-w-[160px] truncate">{prevLesson.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <Link
                  to={`/courses/${courseId}/${nextLesson.id}`}
                  className="group flex items-center gap-2.5"
                >
                  <div className="hidden sm:block text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Up Next</div>
                    <div className="text-sm font-medium text-foreground max-w-[160px] truncate">{nextLesson.title}</div>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-button text-sm font-medium hover:shadow-elevated transition-all active:scale-95">
                    Next <ArrowRight size={14} />
                  </div>
                </Link>
              ) : (
                <Link
                  to={`/courses/${courseId}`}
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-button text-sm font-medium hover:shadow-soft transition-all"
                >
                  Course Complete! 🎉
                </Link>
              )}
            </div>
          </div>

          {/* ── Sidebar ───────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="sticky top-6"
            >
              <div className="bg-card rounded-card border border-border/50 shadow-soft overflow-hidden">
                <div className="px-4 py-3.5 border-b border-border/50 bg-muted/30">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground truncate">
                    {course.title}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-muted-foreground">
                      {lessonIndex + 1} / {course.lessons.length} lessons
                    </span>
                    <span className="text-xs font-medium text-primary tabular-nums">{progress}%</span>
                  </div>
                  <div className="mt-2 h-1 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <nav className="divide-y divide-border/40 max-h-[400px] overflow-y-auto">
                  {course.lessons.map((l, i) => {
                    const isCurrent = l.id === lessonId;
                    const isDone = i < lessonIndex;
                    return (
                      <Link
                        key={l.id}
                        to={`/courses/${courseId}/${l.id}`}
                        className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                          isCurrent ? "bg-accent" : "hover:bg-muted/40"
                        }`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          isCurrent
                            ? "bg-primary text-primary-foreground"
                            : isDone
                            ? "bg-secondary/20 text-secondary"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {isDone ? "✓" : i + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className={`text-xs font-medium leading-snug truncate ${
                            isCurrent ? "text-foreground" : "text-foreground/65"
                          }`}>
                            {l.title}
                          </div>
                          <div className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1.5">
                            <Clock size={9} />
                            {l.duration}
                            {l.videoUrl && (
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-red-400 shrink-0">
                                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/>
                                <polygon fill="white" points="9.75,15.02 15.5,12 9.75,8.98"/>
                              </svg>
                            )}
                          </div>
                        </div>
                        {isCurrent && (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <div className="px-4 py-3 border-t border-border/50">
                  <Link
                    to={`/courses/${courseId}`}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={11} />
                    Back to course overview
                  </Link>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
}