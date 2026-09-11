import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Video, Clock, Users, ChevronRight, Plus, Copy, LogOut } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

// Mock data
const upcomingMeetings = [
  { id: "1", title: "Q1 Strategy Review", date: "Today, 2:00 PM", participants: 8, host: "You", status: "upcoming" },
  { id: "2", title: "Design Sprint Kickoff", date: "Today, 4:30 PM", participants: 5, host: "You", status: "upcoming" },
];

const recentMeetings = [
  { id: "5", title: "Product Demo – Flutterwave", date: "Yesterday", duration: "47 min", participants: 9 },
  { id: "6", title: "Team Retrospective", date: "Mar 18", duration: "32 min", participants: 4 },
];

const stats = [
  { label: "Meetings This Week", value: "14", icon: Video },
  { label: "Hours Connected", value: "8.3", icon: Clock },
  { label: "Participants Hosted", value: "47", icon: Users },
];

export default function DashboardPage() {
  const [showSchedule, setShowSchedule] = useState(false);
  const sessionContext = useSession();
  const session = sessionContext?.data;

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Quick Actions & Welcome */}
      <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between bg-card p-6 rounded-3xl border shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 flex-1">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl font-bold mb-2">
              Welcome back, {session?.user?.name?.split(" ")[0] || "User"}!
            </h2>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground hover:text-destructive flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign out</span>
            </Button>
          </div>
          <p className="text-muted-foreground">You have 2 meetings scheduled for today.</p>
        </div>
        
        <div className="flex gap-3 relative z-10">
          <Button variant="outline" className="h-11 shadow-sm hover:shadow-md transition-shadow bg-background" asChild>
            <Link href="/room/instant">Quick Start</Link>
          </Button>
          <Button 
             className="h-11 shadow-md shadow-primary/20 hover:shadow-lg transition-shadow" 
             onClick={() => setShowSchedule(!showSchedule)}
          >
            <Plus className="w-4 h-4 mr-1.5" /> Schedule Meeting
          </Button>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 flex items-center gap-4 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-3xl font-display font-bold tabular-nums text-foreground">{s.value}</p>
              <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {showSchedule && (
        <div className="bg-card rounded-3xl p-6 shadow-lg border-2 border-primary/20 animate-in slide-in-from-top-4">
          <h3 className="font-display text-lg font-semibold mb-4 text-foreground">Schedule a New Meeting</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-semibold text-muted-foreground mb-1.5 block">Meeting Title</label>
              <Input placeholder="e.g. Weekly Standup" className="bg-background h-11" />
            </div>
            <div>
              <label className="text-sm font-semibold text-muted-foreground mb-1.5 block">Date & Time</label>
              <Input type="datetime-local" className="bg-background h-11" />
            </div>
            <div>
              <label className="text-sm font-semibold text-muted-foreground mb-1.5 block">Duration</label>
              <Input placeholder="30 min" className="bg-background h-11" />
            </div>
            <div>
              <label className="text-sm font-semibold text-muted-foreground mb-1.5 block">Invite Participants (emails)</label>
              <Input placeholder="colleague@company.com" className="bg-background h-11" />
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button className="px-8 h-11">Schedule</Button>
            <Button variant="ghost" className="h-11" onClick={() => setShowSchedule(false)}>Cancel</Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming */}
        <div className="bg-card rounded-3xl border border-border/50 p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-bold">Upcoming Meetings</h3>
            <Link href="/meetings" className="text-primary text-sm font-semibold hover:underline">View all</Link>
          </div>
          <div className="space-y-3 flex-1">
            {upcomingMeetings.map((m) => (
              <div key={m.id} className="bg-background rounded-2xl p-4 border border-border/40 flex items-center justify-between hover:border-primary/30 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-[15px] text-foreground group-hover:text-primary transition-colors">{m.title}</p>
                    <p className="text-xs font-medium text-muted-foreground mt-0.5">{m.date} · {m.participants} participants</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="hidden sm:flex text-muted-foreground hover:text-foreground">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button size="sm" asChild className="rounded-full px-4 shadow-sm shadow-primary/20">
                    <Link href={`/room/${m.id}`}>Join</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent */}
        <div className="bg-card rounded-3xl border border-border/50 p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
             <h3 className="font-display text-xl font-bold">Recent Meetings</h3>
          </div>
          <div className="space-y-3 flex-1">
            {recentMeetings.map((m) => (
              <div key={m.id} className="bg-background rounded-2xl p-4 border border-border flex items-center justify-between hover:border-muted-foreground/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-[15px] text-foreground">{m.title}</p>
                    <p className="text-xs font-medium text-muted-foreground mt-0.5">{m.date} · {m.duration} · Hosted by You</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                   <Link href={`/recordings`}>View Details</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
