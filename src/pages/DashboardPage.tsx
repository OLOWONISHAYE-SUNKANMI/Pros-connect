import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Video,
  Calendar,
  MessageSquare,
  LayoutDashboard,
  LogOut,
  Plus,
  Clock,
  Users,
  Search,
  ChevronRight,
} from "lucide-react";

// Mock data
const upcomingMeetings = [
  { id: "1", title: "Q1 Strategy Review", date: "Today, 2:00 PM", participants: 8, host: "You", status: "upcoming" as const },
  { id: "2", title: "Design Sprint Kickoff", date: "Today, 4:30 PM", participants: 5, host: "You", status: "upcoming" as const },
  { id: "3", title: "Client Onboarding – Dangote Group", date: "Tomorrow, 10:00 AM", participants: 12, host: "Emeka N.", status: "upcoming" as const },
  { id: "4", title: "Weekly Engineering Sync", date: "Wed, 9:00 AM", participants: 6, host: "You", status: "upcoming" as const },
];

const recentMeetings = [
  { id: "5", title: "Product Demo – Flutterwave", date: "Yesterday", duration: "47 min", participants: 9 },
  { id: "6", title: "Team Retrospective", date: "Mar 18", duration: "32 min", participants: 4 },
  { id: "7", title: "Investor Update Call", date: "Mar 17", duration: "1h 12 min", participants: 3 },
];

const stats = [
  { label: "Meetings This Week", value: "14", icon: Video },
  { label: "Hours Connected", value: "8.3", icon: Clock },
  { label: "Participants Hosted", value: "47", icon: Users },
];

export default function DashboardPage() {
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 bg-sidebar text-sidebar-foreground border-r border-sidebar-border shrink-0">
        <div className="p-5">
          <span className="font-display text-lg font-bold">ProsConnect</span>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Video, label: "Meetings" },
            { icon: Calendar, label: "Schedule" },
            { icon: MessageSquare, label: "Messages" },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-sidebar-border">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="md:hidden font-display font-bold text-primary">ProsConnect</span>
            <h1 className="hidden md:block text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search meetings…" className="pl-9 w-56" />
            </div>
            <Button size="sm" onClick={() => setShowSchedule(!showSchedule)}>
              <Plus className="w-4 h-4 mr-1" /> New Meeting
            </Button>
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
              AO
            </div>
          </div>
        </header>

        <div className="p-6 space-y-8">
          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold tabular-nums">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Schedule form (toggle) */}
          {showSchedule && (
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <h2 className="font-display text-lg font-semibold mb-4">Schedule a Meeting</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Meeting Title</label>
                  <Input className="mt-1.5" placeholder="e.g. Weekly Standup" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Date & Time</label>
                  <Input type="datetime-local" className="mt-1.5" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Duration</label>
                  <Input className="mt-1.5" placeholder="30 min" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Invite Participants (emails)</label>
                  <Input className="mt-1.5" placeholder="colleague@company.com" />
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <Button>Schedule Meeting</Button>
                <Button variant="ghost" onClick={() => setShowSchedule(false)}>Cancel</Button>
              </div>
            </div>
          )}

          {/* Upcoming */}
          <div>
            <h2 className="font-display text-lg font-semibold mb-4">Upcoming Meetings</h2>
            <div className="space-y-3">
              {upcomingMeetings.map((m) => (
                <div key={m.id} className="bg-card rounded-xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{m.title}</p>
                      <p className="text-xs text-muted-foreground">{m.date} · {m.participants} participants · Host: {m.host}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Join <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent */}
          <div>
            <h2 className="font-display text-lg font-semibold mb-4">Recent Meetings</h2>
            <div className="space-y-3">
              {recentMeetings.map((m) => (
                <div key={m.id} className="bg-card rounded-xl p-4 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Video className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{m.title}</p>
                      <p className="text-xs text-muted-foreground">{m.date} · {m.duration} · {m.participants} participants</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">View Notes</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
