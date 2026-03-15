import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface Post {
  id: string;
  author: string;
  avatar: string;
  project: string;
  description: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

const mockPosts: Post[] = [
  { id: "1", author: "Sarah M.", avatar: "SM", project: "Cable Knit Throw", description: "Finally finished my first cable project! Took 3 months but so worth it. Used Malabrigo Rios in Azul Profundo. 🧶", likes: 42, comments: 8, timeAgo: "2h ago" },
  { id: "2", author: "Jamie L.", avatar: "JL", project: "Amigurumi Fox", description: "Made this little fox for my niece's birthday. Pattern from StitchCraft's advanced crochet course! 🦊", likes: 67, comments: 12, timeAgo: "5h ago" },
  { id: "3", author: "Pat K.", avatar: "PK", project: "First Scarf", description: "Just bound off my very first knitting project ever! It's a bit wonky but I love it. Thanks to the Knitting Basics course! 🎉", likes: 128, comments: 24, timeAgo: "1d ago" },
  { id: "4", author: "Alex R.", avatar: "AR", project: "Lace Shawl", description: "Blocked my lace shawl today and I can't believe the transformation. Blocking really is magic! ✨", likes: 89, comments: 15, timeAgo: "1d ago" },
  { id: "5", author: "Morgan T.", avatar: "MT", project: "Market Tote", description: "Made a set of 4 market totes for holiday gifts. Single crochet all the way — my hands are tired but happy! 🛍️", likes: 35, comments: 6, timeAgo: "2d ago" },
  { id: "6", author: "Chris W.", avatar: "CW", project: "Colorwork Mittens", description: "First attempt at stranded colorwork. The tension on the back is... let's call it 'rustic'. But they're warm! 🧤", likes: 56, comments: 9, timeAgo: "3d ago" },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(mockPosts);

  const toggleLike = (id: string) => {
    setPosts(posts.map((p) => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-serif mb-2">Community</h1>
        <p className="text-muted-foreground mb-10">See what fellow crafters are making.</p>
      </motion.div>

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
              <button className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <MessageCircle size={16} /> {post.comments}
              </button>
              <button className="flex items-center gap-1.5 hover:text-foreground transition-colors ml-auto">
                <Share2 size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
