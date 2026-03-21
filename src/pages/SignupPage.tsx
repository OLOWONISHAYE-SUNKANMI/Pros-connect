import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const [showPw, setShowPw] = useState(false);
  const [role, setRole] = useState<"host" | "participant">("host");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-primary text-primary-foreground p-10">
        <Link to="/" className="font-display text-xl font-bold">ProsConnect</Link>
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-balance">
            Join Africa's fastest-growing meeting platform
          </h2>
          <p className="mt-4 opacity-70 max-w-md">Free to start. No credit card needed. Set up in under a minute.</p>
        </div>
        <p className="text-sm opacity-40">© {new Date().getFullYear()} ProsConnect</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <Link to="/" className="font-display text-xl font-bold text-primary lg:hidden block mb-8">ProsConnect</Link>
          <h1 className="font-display text-2xl font-bold mb-1">Create your account</h1>
          <p className="text-sm text-muted-foreground mb-8">Start hosting and joining meetings today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Adaeze Okonkwo" className="mt-1.5" required />
            </div>
            <div>
              <Label htmlFor="email">Work Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" className="mt-1.5" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1.5">
                <Input id="password" type={showPw ? "text" : "password"} placeholder="••••••••" required />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" onClick={() => setShowPw(!showPw)}>
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Role selector */}
            <div>
              <Label>I want to</Label>
              <div className="grid grid-cols-2 gap-3 mt-1.5">
                <button
                  type="button"
                  onClick={() => setRole("host")}
                  className={`rounded-lg border-2 p-3 text-sm font-medium text-center transition-all ${role === "host" ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}
                >
                  Host Meetings
                </button>
                <button
                  type="button"
                  onClick={() => setRole("participant")}
                  className={`rounded-lg border-2 p-3 text-sm font-medium text-center transition-all ${role === "participant" ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/30"}`}
                >
                  Join Meetings
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">Create Account</Button>
          </form>

          <p className="text-sm text-center text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
