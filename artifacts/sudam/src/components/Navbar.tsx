import React from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold tracking-widest text-primary" data-testid="link-logo">
          SUDAM
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors" data-testid="link-about">About</a>
          <a href="#vision" className="hover:text-primary transition-colors" data-testid="link-vision">Vision</a>
          <a href="#what-we-share" className="hover:text-primary transition-colors" data-testid="link-what-we-share">What We Share</a>
          <a href="#contact" className="hover:text-primary transition-colors" data-testid="link-contact">Contact</a>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" data-testid="btn-mobile-menu">
            <Menu className="w-6 h-6 text-foreground" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
