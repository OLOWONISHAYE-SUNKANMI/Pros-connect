import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Twitter, Instagram, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col pt-16">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="pt-20 md:pt-32 pb-12 px-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-blob" />
          
          <div className="container relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 text-balance leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Have questions, feedback, or partnership ideas? We’d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="px-6 py-12 relative z-20">
          <div className="container max-w-5xl mx-auto">
            <div className="bg-card border border-border/50 rounded-[1.5rem] md:rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
              
              {/* Left Column: Contact Info */}
              <div className="bg-primary text-primary-foreground p-6 sm:p-10 md:p-14 md:w-2/5 flex flex-col relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none animate-blob" />
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary-foreground/5 rounded-full blur-[40px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 md:mb-8 relative z-10">Contact Information</h3>
                
                <div className="space-y-8 relative z-10 flex-1">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div className="pt-1">
                      <p className="font-medium opacity-70 mb-1 leading-none text-sm">Email</p>
                      <a href="mailto:support@prosconnect.com" className="hover:text-accent transition-colors font-medium">
                        support@prosconnect.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div className="pt-1">
                      <p className="font-medium opacity-70 mb-1 leading-none text-sm">Phone</p>
                      <a href="tel:+2340000000000" className="hover:text-accent transition-colors font-medium">
                        +234 XXX XXX XXXX
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-10 md:mt-16 pt-8 border-t border-primary-foreground/10">
                  <p className="font-medium text-sm opacity-70 mb-4">Follow us on social media</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="p-6 sm:p-10 md:p-14 md:w-3/5 bg-background">
                <form className="space-y-5 md:space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We'll get back to you shortly."); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                      <Input id="name" className="h-12 bg-card" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                      <Input id="email" type="email" className="h-12 bg-card" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground/80">Company / Organization</Label>
                    <Input id="company" className="h-12 bg-card" placeholder="Acme Corp" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/80">Message</Label>
                    <textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      required
                      className="flex min-h-[160px] w-full rounded-xl border border-input bg-card px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    />
                  </div>

                  <Button type="submit" size="xl" className="w-full h-12 md:h-14 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all mt-2 md:mt-4">
                    Send Message <Send className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                </form>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
