import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

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
      <div className="absolute top-4 left-4 mb-20 sm:top-6 sm:left-6 z-10">
        <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
          <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to home</Link>
        </Button>
      </div>
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-primary text-primary-foreground p-10">
        <Link to="/" className="font-display text-xl mt-10 font-bold">ProsConnect</Link>
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-balance">
            Join Africa's fastest-growing meeting platform
          </h2>
          <p className="mt-4 opacity-70 max-w-md">Free to start. No credit card needed. Set up in under a minute.</p>
        </div>
        <p className="text-sm opacity-40">© {new Date().getFullYear()} ProsConnect</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col p-6 relative">
        <div className="w-full max-w-sm m-auto">
          <Link to="/" className="font-display text-xl font-bold text-primary lg:hidden block mb-8 mt-10 sm:mt-0">ProsConnect</Link>
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

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase font-medium">
                <span className="bg-background px-3 text-muted-foreground">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button variant="outline" type="button" className="w-full flex items-center justify-center gap-2 h-11 hover:bg-secondary/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                Google
              </Button>
              <Button variant="outline" type="button" className="w-full flex items-center justify-center gap-2 h-11 hover:bg-secondary/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-[18px] h-[18px] fill-foreground">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                Apple
              </Button>
            </div>
          </div>

          <p className="text-sm text-center text-muted-foreground mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
