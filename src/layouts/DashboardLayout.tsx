"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Video,
  Calendar,
  MessageSquare,
  LayoutDashboard,
  LogOut,
  Plus,
  Search,
  Mic,
  FolderOpen,
  Settings,
  CreditCard,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Video, label: "Meetings", path: "/meetings" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: MessageSquare, label: "Messages", path: "/messages" },
  { icon: Mic, label: "Recordings", path: "/recordings" },
  { icon: FolderOpen, label: "Files", path: "/files" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: CreditCard, label: "Billing", path: "/billing" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background flex overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-card border-r shrink-0 z-20 shadow-sm relative">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-xl pointer-events-none -z-10" />
        
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img src="https://res.cloudinary.com/depeqzb6z/image/upload/v1774177147/Group_2_nvkmjl.png" alt="ProsConnect" className="h-6 md:h-7 w-auto dark:invert dark:brightness-0" />
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.path || (pathname && item.path !== '/dashboard' && pathname.startsWith(item.path));
            return (
              <Link
                key={item.label}
                href={item.path}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-border flex flex-col gap-2">
          <div className="px-3 flex items-center justify-between text-sm font-medium text-muted-foreground">
             Theme <ThemeToggle />
          </div>
          <Link
            href="/login"
            className="flex items-center gap-3 px-3 py-2.5 mt-2 rounded-xl text-sm font-bold text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative z-10 w-full overflow-hidden">
        {/* Topbar */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b h-16 shrink-0 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3 md:hidden">
             <button 
              className="p-2 -ml-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(true)}
             >
               <Menu className="w-5 h-5" />
             </button>
             <img src="https://res.cloudinary.com/depeqzb6z/image/upload/v1774177147/Group_2_nvkmjl.png" alt="ProsConnect" className="h-5 w-auto dark:invert dark:brightness-0" />
          </div>
          
          <div className="hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search meetings or files..." className="pl-10 w-64 bg-muted/60 border-transparent focus:bg-background h-10 rounded-full" />
            </div>
            <Button size="sm" className="rounded-full hidden sm:flex h-10 px-5 shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all" asChild>
              <Link href="/meetings"><Plus className="w-4 h-4 mr-1.5" /> New Meeting</Link>
            </Button>
            <Button size="icon" className="rounded-full sm:hidden bg-primary text-primary-foreground shadow-md" asChild>
              <Link href="/meetings"><Plus className="w-5 h-5" /></Link>
            </Button>
            <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-sm ml-1 cursor-pointer hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background transition-all">
              AO
            </div>
          </div>
        </header>

        {/* Dashboard Content area */}
        <div className="flex-1 overflow-auto bg-secondary/20 p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden flex">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-md animate-in fade-in transition-opacity" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative w-72 max-w-sm bg-card h-full flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="p-6 flex items-center justify-between border-b border-border/50">
               <img src="https://res.cloudinary.com/depeqzb6z/image/upload/v1774177147/Group_2_nvkmjl.png" alt="ProsConnect" className="h-6 w-auto dark:invert dark:brightness-0" />
               <button onClick={() => setMobileMenuOpen(false)} className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                 <X className="w-5 h-5" />
               </button>
            </div>
            <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.path || (pathname && item.path !== '/dashboard' && pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.label}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-bold transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <item.icon className="w-[18px] h-[18px]" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <div className="p-6 border-t border-border/50">
               <Link
                href="/login"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-destructive bg-destructive/10 hover:bg-destructive/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
