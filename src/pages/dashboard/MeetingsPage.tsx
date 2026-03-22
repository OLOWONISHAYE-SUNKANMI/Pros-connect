import { Button } from "@/components/ui/button";
import { Video, CalendarPlus } from "lucide-react";
import { useState } from "react";

export default function MeetingsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="space-y-6 animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
           <h2 className="font-display text-2xl font-bold">Meetings</h2>
           <p className="text-muted-foreground text-sm mt-1">Manage your upcoming and past meetings.</p>
        </div>
        <Button className="shadow-md shadow-primary/20">
          <CalendarPlus className="w-4 h-4 mr-2" /> Schedule Meeting
        </Button>
      </div>

      <div className="flex items-center gap-2 border-b border-border/50 pb-px">
        <button 
          onClick={() => setActiveTab("upcoming")}
          className={`pb-3 px-1 border-b-2 text-sm font-semibold transition-colors ${activeTab === "upcoming" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
        >
          Upcoming
        </button>
        <button 
          onClick={() => setActiveTab("past")}
          className={`pb-3 px-1 border-b-2 text-sm font-semibold transition-colors ${activeTab === "past" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground ml-4"}`}
        >
          Past Meetings
        </button>
      </div>

      <div className="bg-card flex-1 rounded-3xl border border-border/50 shadow-sm flex flex-col items-center justify-center min-h-[400px] text-center p-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Video className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">No meetings found</h3>
        <p className="text-muted-foreground max-w-sm mb-6">You don't have any {activeTab} meetings right now.</p>
        <Button variant="outline">Schedule your first meeting</Button>
      </div>
    </div>
  );
}
