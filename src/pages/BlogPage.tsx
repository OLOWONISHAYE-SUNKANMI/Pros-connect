import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Search } from "lucide-react";

export default function BlogPage() {
  const categories = ["All", "Productivity", "Remote Work", "Case Studies", "Tutorials"];
  
  const recentPosts = [
    {
      title: "10 Tips for flawless virtual presentations on low bandwidth",
      excerpt: "Learn how to engage your audience and keep your video clear even when your internet connection drops.",
      category: "Tutorials",
      date: "Oct 12, 2023",
      author: "Chidi Okafor",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "How Remote Work is changing the tech landscape in Lagos",
      excerpt: "A deep dive into the rise of distributed teams and the infrastructure powering them across the continent.",
      category: "Remote Work",
      date: "Oct 04, 2023",
      author: "Amina Yusuf",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Case Study: Scaling communication for PayStack's growing team",
      excerpt: "See how one of Africa's top fintechs utilizes seamless video conferencing for their daily standups.",
      category: "Case Studies",
      date: "Sep 28, 2023",
      author: "Tech Team",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 relative overflow-hidden pt-24 pb-10">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-blob" />
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000" />
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 container relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 text-balance tracking-tight">
              Insights, Tips & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Updates</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Stay up to date with the latest trends in virtual collaboration, productivity tips, and news from our platform.
            </p>
          </ScrollReveal>

          {/* Categories & Search */}
          <ScrollReveal delay={100} className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 md:mb-24">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {categories.map((category, idx) => (
                <button
                  key={category}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    idx === 0 
                    ? "bg-primary text-primary-foreground border-primary shadow-md hover:shadow-lg hover:-translate-y-0.5" 
                    : "bg-background border-border/60 text-foreground/80 hover:bg-secondary hover:text-foreground hover:border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground/60" />
              </div>
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full h-12 rounded-full pl-10 pr-5 border border-border/60 bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm shadow-sm"
              />
            </div>
          </ScrollReveal>

          {/* Featured Post */}
          <ScrollReveal delay={200} className="mb-24">
            <div className="group relative bg-card rounded-[2.5rem] border border-border/40 overflow-hidden shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-500 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative overflow-hidden bg-muted min-h-[350px] lg:min-h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                  alt="Featured blog post" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-background/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-primary shadow-sm border border-border/30">
                    Productivity
                  </span>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5 font-medium">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Oct 24, 2023</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border" />
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> Editorial Team</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground group-hover:text-primary transition-colors leading-[1.15]">
                  The Future of Remote Work: Maximizing Team Efficiency Across Timezones
                </h2>
                
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium line-clamp-3">
                  As distributed teams become the standard, new challenges emerge. Discover the proven strategies and tools that top remote companies use to maintain culture, velocity, and communication across transcontinental divides.
                </p>
                
                <div>
                  <Button size="xl" className="rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all group/btn" asChild>
                    <Link to="#">
                      Read More <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Recent Posts Grid */}
          <ScrollReveal delay={300}>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-3xl font-display font-bold">Latest Articles</h3>
              <Button variant="ghost" className="hidden sm:flex font-semibold hover:text-primary transition-colors" asChild>
                <Link to="#">View all <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, idx) => (
                <div key={idx} className="group bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                  <div className="relative h-60 overflow-hidden bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-background/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-accent border border-border/30 shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{post.author}</span>
                    </div>
                    
                    <h4 className="text-2xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link to="#" className="mt-auto inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors max-w-max pb-1 border-b-2 border-transparent hover:border-accent">
                      Read More <ArrowRight className="ml-1.5 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 sm:hidden flex justify-center">
              <Button variant="outline" className="w-full rounded-xl h-12 font-bold border-border/60" asChild>
                <Link to="#">View all <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 relative border-t border-border/50 mt-12 bg-secondary/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-blob" />
          <ScrollReveal className="container relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance">Never miss an update</h2>
            <p className="text-muted-foreground mb-10 text-xl font-medium max-w-xl mx-auto text-balance">Join our newsletter to get weekly tips, case studies, and updates delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 h-14 rounded-xl px-6 border-2 border-transparent bg-background shadow-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/60 focus:bg-background"
                required
              />
              <Button size="xl" type="submit" className="h-14 rounded-xl px-10 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-base">
                Subscribe
              </Button>
            </form>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
