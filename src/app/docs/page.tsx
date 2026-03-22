import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-16">
      <Navbar />
      <main className="flex-1 container py-20">
        <h1 className="text-4xl font-display font-bold mb-6">Documentation</h1>
        <p className="text-muted-foreground italic">Coming soon: Developer guides, API references, and integration tutorials.</p>
      </main>
      <Footer />
    </div>
  );
}
