import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold text-primary tracking-tight">
          ProsConnect
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          <Link to="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/signup">Get Started Free</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t bg-background px-6 py-4 space-y-3 shadow-lg">
          <Link to="/features" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Features</Link>
          <Link to="/pricing" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Pricing</Link>
          <Link to="/about" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>About</Link>
          <Link to="/blog" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Blog</Link>
          <Link to="/contact" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/docs" className="block text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>Documentation</Link>
          <div className="flex items-center justify-between py-2 border-t mt-2">
            <span className="text-sm font-medium text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
