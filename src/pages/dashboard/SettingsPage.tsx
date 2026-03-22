import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings, Bell, Lock, Users, CreditCard, Check, AlertCircle, Plus, CreditCard as CardIcon, FileText } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-5xl mx-auto h-full pb-10">
      <div className="flex items-center justify-between">
        <div>
           <h2 className="font-display text-2xl font-bold">Settings</h2>
           <p className="text-muted-foreground text-sm mt-1">Manage your account preferences and configurations.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 space-y-1.5 bg-card/50 p-3 rounded-3xl border border-border/50 shadow-sm shrink-0">
          <Button 
            variant={activeTab === "general" ? "secondary" : "ghost"} 
            className={`w-full justify-start h-11 rounded-xl transition-all ${activeTab === "general" ? "font-bold bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary"}`}
            onClick={() => setActiveTab("general")}
          >
            <Settings className="w-4 h-4 mr-3" /> General
          </Button>
          <Button 
            variant={activeTab === "notifications" ? "secondary" : "ghost"} 
            className={`w-full justify-start h-11 rounded-xl transition-all ${activeTab === "notifications" ? "font-bold bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary"}`}
            onClick={() => setActiveTab("notifications")}
          >
            <Bell className="w-4 h-4 mr-3" /> Notifications
          </Button>
          <Button 
            variant={activeTab === "security" ? "secondary" : "ghost"} 
            className={`w-full justify-start h-11 rounded-xl transition-all ${activeTab === "security" ? "font-bold bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary"}`}
            onClick={() => setActiveTab("security")}
          >
            <Lock className="w-4 h-4 mr-3" /> Security
          </Button>
          <Button 
            variant={activeTab === "team" ? "secondary" : "ghost"} 
            className={`w-full justify-start h-11 rounded-xl transition-all ${activeTab === "team" ? "font-bold bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary"}`}
            onClick={() => setActiveTab("team")}
          >
            <Users className="w-4 h-4 mr-3" /> Team
          </Button>
          <Button 
            variant={activeTab === "billing" ? "secondary" : "ghost"} 
            className={`w-full justify-start h-11 rounded-xl transition-all ${activeTab === "billing" ? "font-bold bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary"}`}
            onClick={() => setActiveTab("billing")}
          >
            <CreditCard className="w-4 h-4 mr-3" /> Billing
          </Button>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full relative">
          {activeTab === "general" && (
            <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm animate-in fade-in duration-300">
               <h3 className="text-lg font-bold mb-6">Profile Information</h3>
               
               <div className="space-y-6">
                 <div>
                   <label className="text-sm font-semibold text-muted-foreground block mb-2">Avatar</label>
                   <div className="flex items-center gap-4">
                     <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold">
                       AO
                     </div>
                     <Button variant="outline" size="sm" className="rounded-full">Change photo</Button>
                     <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive rounded-full">Remove</Button>
                   </div>
                 </div>

                 <div className="grid sm:grid-cols-2 gap-5">
                   <div>
                      <label className="text-sm font-semibold text-muted-foreground block mb-1.5">First Name</label>
                      <Input className="w-full bg-background border-border/50 h-11 rounded-xl" defaultValue="Adaeze" />
                   </div>
                   <div>
                      <label className="text-sm font-semibold text-muted-foreground block mb-1.5">Last Name</label>
                      <Input className="w-full bg-background border-border/50 h-11 rounded-xl" defaultValue="Okonkwo" />
                   </div>
                 </div>
                 
                 <div>
                    <label className="text-sm font-semibold text-muted-foreground block mb-1.5">Email Address</label>
                    <Input className="w-full bg-background border-border/50 h-11 rounded-xl" defaultValue="adaeze@company.com" disabled />
                    <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> Email address cannot be changed through the dashboard.</p>
                 </div>

                 <div className="pt-4 border-t border-border/50">
                   <Button className="px-8 h-11 rounded-xl shadow-md shadow-primary/20">Save Changes</Button>
                 </div>
               </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm animate-in fade-in duration-300">
               <h3 className="text-lg font-bold mb-6">Notification Preferences</h3>
               
               <div className="space-y-6">
                 {[
                   { title: "Meeting Reminders", desc: "Receive alerts 15 minutes before a meeting starts.", active: true },
                   { title: "Daily Digest", desc: "A daily email with your upcoming meetings and tasks.", active: false },
                   { title: "New Messages", desc: "Push notifications for direct messages from team members.", active: true },
                   { title: "Marketing & Updates", desc: "Receive news, tips, and promotional offers.", active: false },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between py-1.5">
                     <div className="pr-4">
                       <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                       <p className="text-xs text-muted-foreground mt-1 leading-snug">{item.desc}</p>
                     </div>
                     <button className={`w-11 h-6 rounded-full transition-colors flex items-center shrink-0 border ${item.active ? 'bg-primary border-primary' : 'bg-muted border-border'}`}>
                       <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${item.active ? 'translate-x-[22px]' : 'translate-x-1'}`} />
                     </button>
                   </div>
                 ))}

                 <div className="pt-4 border-t border-border/50">
                   <Button className="px-8 h-11 rounded-xl shadow-md shadow-primary/20">Update Preferences</Button>
                 </div>
               </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm">
                 <h3 className="text-lg font-bold mb-6">Change Password</h3>
                 <div className="space-y-5">
                   <div>
                      <label className="text-sm font-semibold text-muted-foreground block mb-1.5">Current Password</label>
                      <Input type="password" placeholder="••••••••" className="bg-background h-11 rounded-xl" />
                   </div>
                   <div>
                      <label className="text-sm font-semibold text-muted-foreground block mb-1.5">New Password</label>
                      <Input type="password" placeholder="••••••••" className="bg-background h-11 rounded-xl" />
                   </div>
                   <div>
                      <label className="text-sm font-semibold text-muted-foreground block mb-1.5">Confirm New Password</label>
                      <Input type="password" placeholder="••••••••" className="bg-background h-11 rounded-xl" />
                   </div>
                   <div className="pt-2">
                     <Button variant="default" className="px-8 h-11 rounded-xl shadow-md">Update Password</Button>
                   </div>
                 </div>
              </div>

              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold mb-1">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                </div>
                <Button variant="outline" className="rounded-xl w-full sm:w-auto h-11 px-6">Enable 2FA</Button>
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm animate-in fade-in duration-300">
               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                 <h3 className="text-lg font-bold">Team Members</h3>
                 <Button size="sm" className="rounded-xl h-10 px-5 w-full sm:w-auto"><Plus className="w-4 h-4 mr-1.5" /> Invite Member</Button>
               </div>
               
               <div className="space-y-3">
                 {[
                   { name: "Adaeze Okonkwo", role: "Owner", email: "adaeze@company.com" },
                   { name: "Chidi Eze", role: "Admin", email: "chidi@company.com" },
                   { name: "Folake Bello", role: "Member", email: "folake@company.com" },
                 ].map((t, i) => (
                   <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background border border-border/40 rounded-2xl gap-4 hover:border-primary/20 transition-colors">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                         {t.name.split(' ').map(n => n[0]).join('')}
                       </div>
                       <div>
                         <p className="font-bold text-sm">{t.name}</p>
                         <p className="text-xs font-medium text-muted-foreground">{t.email}</p>
                       </div>
                     </div>
                     <div className="flex items-center gap-3 justify-between sm:justify-end">
                       <span className={`text-xs font-bold px-3 py-1 rounded-lg ${t.role === 'Owner' ? 'bg-accent/10 text-accent' : 'bg-secondary text-foreground'}`}>{t.role}</span>
                       {t.role !== "Owner" && (
                         <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10 hover:text-destructive h-8 px-3 rounded-lg">Remove</Button>
                       )}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Current Plan */}
              <div className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-sm relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                 
                 <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
                   <div>
                     <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                       <Check className="w-3.5 h-3.5" /> Current Plan
                     </span>
                     <h3 className="text-3xl font-display font-bold mb-2">Pro Plan</h3>
                     <p className="text-muted-foreground text-sm font-medium">You are currently billed <strong className="text-foreground">$29/month</strong>. Next cycle: April 12, 2026.</p>
                   </div>
                   <Button className="shadow-lg shadow-primary/20 rounded-xl px-6 h-11 w-full md:w-auto shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">Upgrade to Enterprise</Button>
                 </div>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border/50 relative z-10">
                   <div>
                     <p className="text-2xl font-bold font-display">500</p>
                     <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mt-1">Participants/Meeting</p>
                   </div>
                   <div>
                     <p className="text-2xl font-bold font-display">100 GB</p>
                     <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mt-1">Cloud Storage</p>
                   </div>
                   <div>
                     <p className="text-2xl font-bold font-display">10</p>
                     <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mt-1">Team Members</p>
                   </div>
                   <div>
                     <p className="text-2xl font-bold font-display flex items-center gap-1">24/7</p>
                     <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mt-1">Premium Support</p>
                   </div>
                 </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                   <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                     <CardIcon className="w-5 h-5 text-muted-foreground" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm">Visa ending in **4242</h4>
                     <p className="text-xs font-medium text-muted-foreground">Expires 12/28</p>
                   </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl px-5 h-10 w-full sm:w-auto">Update Method</Button>
              </div>

              {/* Billing History */}
              <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-sm">
                 <h3 className="text-lg font-bold mb-4">Billing History</h3>
                 <div className="space-y-2">
                   {[
                     { date: "Mar 12, 2026", amount: "$29.00", status: "Paid" },
                     { date: "Feb 12, 2026", amount: "$29.00", status: "Paid" },
                     { date: "Jan 12, 2026", amount: "$29.00", status: "Paid" },
                   ].map((inv, i) => (
                     <div key={i} className="flex items-center justify-between p-3.5 hover:bg-secondary/50 border border-transparent hover:border-border/50 rounded-2xl transition-all group">
                       <div className="flex items-center gap-3">
                         <FileText className="w-4 h-4 text-muted-foreground" />
                         <span className="text-sm font-semibold">{inv.date}</span>
                       </div>
                       <div className="flex items-center gap-4 md:gap-6">
                         <span className="text-sm font-bold">{inv.amount}</span>
                         <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-green-500/10 text-green-500 rounded-lg hidden sm:block">{inv.status}</span>
                         <Button variant="ghost" size="sm" className="h-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">Receipt</Button>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
