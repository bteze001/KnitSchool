import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { getCourse, getLesson } from "@/data/courses";
import { AlertTriangle, Dumbbell, ArrowLeft, ArrowRight } from "lucide-react";

export default function LessonPage() {
  const { courseId, lessonId } = useParams();
  if (!courseId || !lessonId) return null;

  const course = getCourse(courseId);
  const lesson = getLesson(courseId, lessonId);
  if (!course || !lesson) {
    return <div className="p-12 text-center text-muted-foreground">Lesson not found.</div>;
  }

  const lessonIndex = course.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        {/* Breadcrumb */}
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link to="/courses" className="hover:text-foreground">Courses</Link>
          <span>/</span>
          <Link to={`/courses/${courseId}`} className="hover:text-foreground">{course.title}</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Lesson {lessonIndex + 1}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-serif mb-4">{lesson.title}</h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
              {course.level}
            </span>
            <span className="text-sm text-muted-foreground">{lesson.duration} practice</span>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-stone max-w-none prose-headings:font-serif prose-h2:text-2xl prose-h3:text-xl prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground prose-a:text-primary">
          <ReactMarkdown>{lesson.content}</ReactMarkdown>
        </article>

        {/* Common Mistakes */}
        {lesson.commonMistakes.length > 0 && (
          <div className="my-10 p-6 bg-destructive/5 rounded-card border border-destructive/10">
            <h3 className="font-serif text-lg flex items-center gap-2 text-destructive mb-3">
              <AlertTriangle size={18} /> Common Mistakes
            </h3>
            <ul className="space-y-2">
              {lesson.commonMistakes.map((m, i) => (
                <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                  <span className="text-destructive/60 mt-0.5">•</span> {m}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Practice Exercise */}
        <div className="my-10 p-6 bg-accent rounded-card border border-primary/10">
          <h3 className="font-serif text-lg flex items-center gap-2 text-primary mb-3">
            <Dumbbell size={18} /> Practice Exercise
          </h3>
          <p className="text-sm text-foreground/80">{lesson.practiceExercise}</p>
        </div>

        {/* Navigation */}
        <footer className="mt-12 pt-8 border-t border-border flex justify-between items-center">
          {prevLesson ? (
            <Link to={`/courses/${courseId}/${prevLesson.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
              <ArrowLeft size={14} /> {prevLesson.title}
            </Link>
          ) : <div />}
          {nextLesson ? (
            <Link to={`/courses/${courseId}/${nextLesson.id}`} className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-button text-sm font-medium hover:shadow-soft transition-all">
              Next: {nextLesson.title} <ArrowRight size={14} />
            </Link>
          ) : (
            <Link to={`/courses/${courseId}`} className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-button text-sm font-medium">
              Course Complete! 🎉
            </Link>
          )}
        </footer>
      </motion.div>
    </div>
  );
}
