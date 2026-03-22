import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container py-12 md:py-16">
        {/* Waitlist Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-12 mb-12 border-b border-border">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Join our Waitlist</h3>
            <p className="text-muted-foreground text-sm md:text-base">Be the first to know when we launch new features and get exclusive early access to ProsConnect.</p>
          </div>
          <form className="flex w-full sm:flex-row flex-col md:max-w-md gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for joining our waitlist!'); }}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-accent w-full" 
            />
            <Button type="submit" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
              Join Now
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-lg font-bold">ProsConnect</span>
            <p className="mt-3 text-sm opacity-70 text-pretty max-w-[240px]">
              Professional virtual meetings built for African businesses and teams.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 opacity-80">Product</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 opacity-80">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 opacity-80">Support</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Help Centre</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} ProsConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
