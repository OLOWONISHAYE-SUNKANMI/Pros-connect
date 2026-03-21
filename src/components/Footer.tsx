import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container py-12">
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
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-sm opacity-50 text-center">
          © {new Date().getFullYear()} ProsConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
