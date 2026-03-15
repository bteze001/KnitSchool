import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { courses, getCourse } from "@/data/courses";
import LessonPage from "./LessonPage";

export default function CoursesPage() {
  const { courseId, lessonId } = useParams();

  if (courseId && lessonId) {
    return <LessonPage />;
  }

  if (courseId) {
    return <CourseDetail courseId={courseId} />;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-serif mb-2">Courses</h1>
        <p className="text-muted-foreground mb-10">Structured learning paths from beginner to advanced.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/courses/${course.id}`}>
              <div className="bg-card rounded-card p-6 shadow-soft hover:shadow-elevated transition-all border border-border/50 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold uppercase tracking-wider">
                    {course.category}
                  </span>
                  <span className="px-2.5 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                    {course.level}
                  </span>
                </div>
                <h2 className="text-2xl font-serif mb-2">{course.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <BookOpen size={14} /> {course.lessons.length} lessons
                  </span>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Start course <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CourseDetail({ courseId }: { courseId: string }) {
  const course = getCourse(courseId);
  if (!course) return <div className="p-12 text-center text-muted-foreground">Course not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/courses" className="text-sm text-muted-foreground hover:text-foreground mb-4 block">
          ← All Courses
        </Link>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold uppercase tracking-wider">
            {course.category}
          </span>
          <span className="px-2.5 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
            {course.level}
          </span>
        </div>
        <h1 className="text-4xl font-serif mb-3">{course.title}</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">{course.description}</p>

        <div className="space-y-3">
          {course.lessons.map((lesson, i) => (
            <Link key={lesson.id} to={`/courses/${courseId}/${lesson.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 bg-card rounded-card p-5 shadow-soft hover:shadow-hover transition-all border border-border/50 hover:-translate-y-0.5 mb-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-serif text-lg shrink-0 tabular-nums">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{lesson.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0">
                  <Clock size={12} />
                  {lesson.duration}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
