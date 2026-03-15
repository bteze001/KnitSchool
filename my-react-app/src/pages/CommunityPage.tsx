import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  text: string;
  timeAgo: string;
}

interface Post {
  id: string;
  author: string;
  avatar: string;
  project: string;
  description: string;
  likes: number;
  comments: Comment[];
  timeAgo: string;
  authorId?: string;
}

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
};

const initialsFromName = (name: string) => {
  const cleaned = name.trim();
  if (!cleaned) return "AN";
  const parts = cleaned.split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
};

const mockPosts: Post[] = [
  { id: "1", author: "Sarah M.", avatar: "SM", project: "Cable Knit Throw", description: "Finally finished my first cable project! Took 3 months but so worth it. Used Malabrigo Rios in Azul Profundo. 🧶", likes: 42, comments: [], timeAgo: "2h ago" },
  { id: "2", author: "Jamie L.", avatar: "JL", project: "Amigurumi Fox", description: "Made this little fox for my niece's birthday. Pattern from KnitSchool's advanced crochet course! 🦊", likes: 67, comments: [], timeAgo: "5h ago" },
  { id: "3", author: "Pat K.", avatar: "PK", project: "First Scarf", description: "Just bound off my very first knitting project ever! It's a bit wonky but I love it. Thanks to the Knitting Basics course! 🎉", likes: 128, comments: [], timeAgo: "1d ago" },
  { id: "4", author: "Alex R.", avatar: "AR", project: "Lace Shawl", description: "Blocked my lace shawl today and I can't believe the transformation. Blocking really is magic! ✨", likes: 89, comments: [], timeAgo: "1d ago" },
  { id: "5", author: "Morgan T.", avatar: "MT", project: "Market Tote", description: "Made a set of 4 market totes for holiday gifts. Single crochet all the way — my hands are tired but happy! 🛍️", likes: 35, comments: [], timeAgo: "2d ago" },
  { id: "6", author: "Chris W.", avatar: "CW", project: "Colorwork Mittens", description: "First attempt at stranded colorwork. The tension on the back is... let's call it 'rustic'. But they're warm! 🧤", likes: 56, comments: [], timeAgo: "3d ago" },
];

export default function CommunityPage() {
  const STORAGE_KEY = "knit_community_posts_v1";
  const USER_KEY = "knit_community_user_v1";
  const [userId] = useState(() => {
    if (typeof window === "undefined") return "local";
    try {
      const existing = window.localStorage.getItem(USER_KEY);
      if (existing) return existing;
      const created = createId();
      window.localStorage.setItem(USER_KEY, created);
      return created;
    } catch {
      return "local";
    }
  });
  const [posts, setPosts] = useState<Post[]>(() => {
    if (typeof window === "undefined") return mockPosts;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed.map((p) => ({
            ...p,
            comments: Array.isArray(p.comments) ? p.comments : [],
          })) as Post[];
        };
      }
    } catch {
      // Ignore storage errors and fall back to mock data
    }
    return mockPosts;
  });
  const [author, setAuthor] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState("");
  const [commentDrafts, setCommentDrafts] = useState<Record<string, string>>({});
  const [openComments, setOpenComments] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setPosts((current) => current.map((p) => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    } catch {
      // Ignore storage errors
    }
  }, [posts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedDescription = description.trim();
    const trimmedProject = project.trim();
    const trimmedAuthor = author.trim();

    if (!trimmedDescription || !trimmedProject) {
      setFormError("Please add a title and your opinion.");
      return;
    }

    const displayAuthor = trimmedAuthor || "Anonymous";
    const newPost: Post = {
      id: createId(),
      author: displayAuthor,
      avatar: initialsFromName(displayAuthor),
      project: trimmedProject,
      description: trimmedDescription,
      likes: 0,
      comments: [],
      timeAgo: "just now",
      authorId: userId,
    };

    setPosts((current) => [newPost, ...current]);
    setAuthor("");
    setProject("");
    setDescription("");
    setFormError("");
  };

  const handleAddComment = (postId: string) => {
    const draft = commentDrafts[postId]?.trim();
    if (!draft) return;
    const newComment: Comment = {
      id: createId(),
      author: "You",
      text: draft,
      timeAgo: "just now",
    };
    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? { ...post, comments: [newComment, ...post.comments] }
          : post
      )
    );
    setCommentDrafts((current) => ({ ...current, [postId]: "" }));
    setOpenComments((current) => ({ ...current, [postId]: true }));
  };

  const handleDeletePost = (postId: string) => {
    setPosts((current) => current.filter((post) => post.id !== postId));
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-serif mb-2">Community</h1>
        <p className="text-muted-foreground mb-10">See what fellow crafters are making.</p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-card p-5 shadow-soft border border-border/50 mb-8 space-y-4"
      >
        <h2 className="text-xl font-serif">Share your opinion</h2>
        <div className="grid gap-3">
          <label className="text-sm text-muted-foreground">Your name (optional)</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="e.g., Taylor K."
            className="w-full rounded-card border border-border bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="grid gap-3">
          <label className="text-sm text-muted-foreground">Title</label>
          <input
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="e.g., Thoughts on the new cable pattern"
            className="w-full rounded-card border border-border bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="grid gap-3">
          <label className="text-sm text-muted-foreground">Your opinion</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Share what you think..."
            rows={4}
            className="w-full rounded-card border border-border bg-background px-3 py-2 text-sm"
          />
        </div>
        {formError ? (
          <div className="text-sm text-destructive">{formError}</div>
        ) : null}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Post to community
          </button>
          <span className="text-xs text-muted-foreground">
            Posts are saved in this browser.
          </span>
        </div>
      </motion.form>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-card p-5 shadow-soft border border-border/50"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-sm font-medium text-primary">
                {post.avatar}
              </div>
              <div>
                <div className="font-medium text-sm">{post.author}</div>
                <div className="text-xs text-muted-foreground">{post.timeAgo}</div>
              </div>
            </div>
            <h3 className="font-serif text-lg mb-1">{post.project}</h3>
            <p className="text-sm text-foreground/80 mb-4">{post.description}</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button onClick={() => toggleLike(post.id)} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Heart size={16} /> {post.likes}
              </button>
              <button
                onClick={() =>
                  setOpenComments((current) => ({ ...current, [post.id]: !current[post.id] }))
                }
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <MessageCircle size={16} /> {post.comments.length}
              </button>
              <button className="flex items-center gap-1.5 hover:text-foreground transition-colors ml-auto">
                <Share2 size={16} />
              </button>
              {post.authorId === userId ? (
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="text-xs text-destructive hover:text-destructive/80 transition-colors"
                >
                  Delete
                </button>
              ) : null}
            </div>

            {openComments[post.id] ? (
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    value={commentDrafts[post.id] ?? ""}
                    onChange={(e) =>
                      setCommentDrafts((current) => ({ ...current, [post.id]: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if(e.key === "Enter") {
                        e.preventDefault();
                        handleAddComment(post.id);
                      }
                    }}
                    placeholder="Add a comment..."
                    className="flex-1 rounded-card border border-border bg-background px-3 py-2 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddComment(post.id)}
                    className="rounded-full bg-accent px-3 py-2 text-xs text-primary hover:opacity-90 transition-opacity"
                  >
                    Comment
                  </button>
                </div>
                {post.comments.length > 0 ? (
                  <div className="space-y-2">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="rounded-card border border-border/60 bg-background/60 px-3 py-2 text-sm">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>{comment.author}</span>
                          <span>{comment.timeAgo}</span>
                        </div>
                        <div>{comment.text}</div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
