import React from "react";
import { Navbar } from "@/components/Navbar";
import { Starfield } from "@/components/Starfield";
import { motion } from "framer-motion";
import { ChevronDown, Rocket, BookOpen, Trophy, Newspaper, Briefcase } from "lucide-react";
import { SiX, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground bg-background selection:bg-primary selection:text-primary-foreground font-sans">
      <Starfield />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 flex flex-col items-center max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-muted-foreground mb-6" data-testid="text-hero-title">
            SUDAM
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6" data-testid="text-hero-subtitle">
            A Saudi Space Science Community
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl" data-testid="text-hero-tagline">
            Connecting students and enthusiasts with space knowledge, opportunities, and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/20" data-testid="btn-join">
              <a href="#contact">Join Community</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-muted-foreground/30 hover:bg-muted/50" data-testid="btn-follow-x">
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <SiX className="mr-2" /> Follow on X
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-scroll-down">
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-10 md:p-16 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" data-testid="text-about-title">About SUDAM</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6" data-testid="text-about-desc">
              SUDAM is a community initiative focused on making space science more accessible. We aim to gather scattered resources, opportunities, competitions, and learning materials in one place for students and space enthusiasts.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20" data-testid="badge-about-highlight">
              <span className="text-sm font-medium">Focused on education, awareness, and opportunities.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Rocket className="w-16 h-16 mx-auto text-primary mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" data-testid="text-vision-title">Our Vision</h2>
            <p className="text-2xl md:text-4xl font-light text-muted-foreground leading-tight italic" data-testid="text-vision-desc">
              "Our vision is to build a generation of Saudi talent in space science by making knowledge and opportunities easier to access and more organized."
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Share Section */}
      <section id="what-we-share" className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-share-title">What We Share</h2>
            <p className="text-muted-foreground text-lg" data-testid="text-share-subtitle">Curated resources for the Saudi space community.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: "Competitions", desc: "Space competitions and hackathons" },
              { icon: BookOpen, title: "Learning", desc: "Learning resources and materials" },
              { icon: Rocket, title: "Education", desc: "Educational content for all levels" },
              { icon: Newspaper, title: "News", desc: "Latest space news and updates" },
              { icon: Briefcase, title: "Careers", desc: "Career opportunities in the space field" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group"
                data-testid={`card-share-${i}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-muted/20 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="text-contact-title">Connect with SUDAM</h2>
              <p className="text-muted-foreground mb-8 text-lg" data-testid="text-contact-desc">
                Join our growing community of space enthusiasts. Reach out, follow our updates, or join the discussion.
              </p>
              
              <div className="space-y-6">
                <a href="https://x.com/sudam" className="flex items-center text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-x">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mr-4 group-hover:border-primary/50">
                    <SiX className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">@sudam</span>
                </a>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-whatsapp">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mr-4 group-hover:border-primary/50">
                    <SiWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg">WhatsApp Community</span>
                </a>
                <a href="mailto:contact@sudam.space" className="flex items-center text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-email">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mr-4 group-hover:border-primary/50">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">contact@sudam.space</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-3xl border border-border"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-background border-border" data-testid="input-contact-name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-background border-border" data-testid="input-contact-email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                  <Textarea id="message" placeholder="How can we help?" className="bg-background border-border min-h-[120px]" data-testid="input-contact-message" />
                </div>
                <Button type="submit" className="w-full" data-testid="btn-contact-submit">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border bg-background px-6">
        <div className="container mx-auto">
          <p className="text-white font-medium mb-4" data-testid="text-footer-title">
            SUDAM — Community Initiative for Space Science in Saudi Arabia
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto" data-testid="text-footer-disclaimer">
            SUDAM is an independent community initiative and is not a governmental or official space agency.
          </p>
        </div>
      </footer>
    </div>
  );
}
