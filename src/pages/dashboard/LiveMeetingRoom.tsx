import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff, Monitor, MessageSquare, Users, PhoneOff, MoreVertical } from "lucide-react";
import { useState } from "react";

export default function LiveMeetingRoom() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : '';
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);

  return (
    <div className="h-screen w-screen bg-black flex flex-col overflow-hidden text-white font-sans">
      {/* Top Header */}
      <header className="h-16 bg-zinc-900/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10 w-full mb-0">
        <div className="flex items-center gap-3">
          <img src="https://res.cloudinary.com/depeqzb6z/image/upload/v1774177147/Group_2_nvkmjl.png" alt="ProsConnect" className="h-5 w-auto invert brightness-0 opacity-50 hidden sm:block" />
          <div className="h-4 w-px bg-white/20 mx-2 hidden sm:block" />
          <h1 className="font-semibold text-sm sm:text-base truncate max-w-[200px] sm:max-w-xs cursor-default">Weekly Engineering Sync</h1>
          <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider hidden md:block">04:12</span>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 shrink-0">
             <Users className="w-4 h-4 sm:mr-2" /> <span className="hidden sm:inline">Participants (6)</span>
           </Button>
        </div>
      </header>

      {/* Main Grid */}
      <main className="flex-1 min-h-0 bg-zinc-950 p-2 sm:p-4 flex gap-4 overflow-hidden -mt-[1px]">
        {/* Video Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 auto-rows-fr rounded-2xl overflow-hidden h-full">
           {/* Self view */}
           <div className="bg-zinc-800 rounded-2xl border border-white/5 relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-700">
                {!videoOn ? (
                  <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-2xl font-bold shadow-xl">You</div>
                ) : (
                  <p className="text-white/50 animate-pulse font-medium">Camera feed active</p>
                )}
              </div>
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 flex items-center justify-between">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-xl flex items-center gap-2">
                  {!micOn && <MicOff className="w-3.5 h-3.5 text-red-400" />} You
                </span>
                <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                   <MoreVertical className="w-4 h-4" />
                </button>
              </div>
           </div>

           {/* Other participants */}
           {[1, 2, 3, 4, 5].map((p) => (
              <div key={p} className="bg-zinc-800 rounded-2xl border border-white/5 relative overflow-hidden shadow-lg group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 md:w-24 h-20 md:h-24 rounded-full bg-primary/40 border border-primary/20 flex items-center justify-center text-2xl font-bold">P{p}</div>
                </div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 flex items-center justify-between">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-xl">
                    Participant {p}
                  </span>
                  <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white/20 transition-all">
                     <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
           ))}
        </div>
      </main>

      {/* Control Bar */}
      <footer className="h-20 md:h-24 bg-zinc-900 border-t border-white/5 flex items-center justify-between px-3 sm:px-6 shrink-0 relative z-10 w-full mb-0 overflow-x-auto shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex-1 hidden md:block" />
        
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 mx-auto">
          <Button 
            variant="outline" 
            size="icon" 
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/5 shadow-lg transition-all hover:scale-105 ${micOn ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
            onClick={() => setMicOn(!micOn)}
          >
            {micOn ? <Mic className="w-5 h-5 sm:w-6 sm:h-6" /> : <MicOff className="w-5 h-5 sm:w-6 sm:h-6" />}
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/5 shadow-lg transition-all hover:scale-105 ${videoOn ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
            onClick={() => setVideoOn(!videoOn)}
          >
            {videoOn ? <Video className="w-5 h-5 sm:w-6 sm:h-6" /> : <VideoOff className="w-5 h-5 sm:w-6 sm:h-6" />}
          </Button>
          <Button variant="outline" size="icon" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/5 shadow-lg bg-zinc-800 hover:bg-zinc-700 text-white hidden sm:flex transition-all hover:scale-105">
            <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          <Button variant="outline" size="icon" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/5 shadow-lg bg-zinc-800 hover:bg-zinc-700 text-white hidden md:flex transition-all hover:scale-105">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          
          <div className="w-px h-8 bg-white/10 mx-2 sm:mx-4" />
          
          <Button variant="destructive" className="h-12 sm:h-14 px-6 sm:px-8 rounded-full font-bold shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all text-sm sm:text-base" asChild>
             <Link href="/dashboard">
               <PhoneOff className="w-5 h-5 sm:mr-2.5" /> <span className="hidden sm:inline">Leave</span>
             </Link>
          </Button>
        </div>

        <div className="flex-1 hidden md:block" />
      </footer>
    </div>
  );
}
