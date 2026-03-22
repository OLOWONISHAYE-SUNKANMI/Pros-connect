import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-16">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance relative z-10">Our Blog</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl bg-card border-border/50 p-6 md:p-8 rounded-3xl border mt-4 shadow-sm text-balance relative z-10">
          Read the latest news, updates, and insights on virtual collaboration from our experts. Articles coming soon.
        </p>
      </main>
      <Footer />
    </div>
  );
}
