import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif text-xl mb-4">KnitSchool</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Learn knitting & crochet from absolute beginner to master crafter.
            </p>
          </div>
          <div>
            <h5 className="font-medium text-sm mb-3">Learn</h5>
            <div className="space-y-2">
              <Link to="/courses" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Courses</Link>
              <Link to="/stitches" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Stitch Library</Link>
              <Link to="/patterns" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Patterns</Link>
            </div>
          </div>
          <div>
            <h5 className="font-medium text-sm mb-3">Resources</h5>
            <div className="space-y-2">
              <Link to="/needles" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Needles & Hooks</Link>
              <Link to="/tools" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Crafting Tools</Link>
            </div>
          </div>
          {/* <div>
            <h5 className="font-medium text-sm mb-3">Connect</h5>
            <div className="space-y-2">
              <Link to="/community" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Community</Link>
            </div>
          </div> */}
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2026 KnitSchool. Made with yarn and love.
        </div>
      </div>
    </footer>
  );
}
