import { Button } from "@/components/ui/button";
import { MessageSquare, MousePointerClick } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-8rem)] animate-in fade-in duration-500 bg-card rounded-3xl border border-border/50 shadow-sm flex overflow-hidden">
      {/* Sidebar Channels */}
      <div className="w-72 border-r border-border/50 flex flex-col bg-background/50">
        <div className="p-4 border-b border-border/50">
          <h2 className="font-display text-lg font-bold">Messages</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white">
              E
            </div>
            <div className="text-left flex-1 truncate">
               <p className="truncate">Engineering Sync</p>
               <p className="text-xs text-primary-foreground/70 truncate">You: Sounds good!</p>
            </div>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-secondary text-foreground font-medium text-sm transition-colors">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
              AD
            </div>
            <div className="text-left flex-1 truncate">
               <p className="truncate">Adaeze D.</p>
               <p className="text-xs text-muted-foreground truncate">Can you send the doc?</p>
            </div>
          </button>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <MousePointerClick className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-bold mb-2">Select a conversation</h3>
        <p className="text-muted-foreground max-w-sm mb-6">Choose a chat from the sidebar to start messaging with your team and meeting participants.</p>
        <Button>Start a new chat</Button>
      </div>
    </div>
  );
}
