import React from "react";
import { Link } from "wouter";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const { lang, setLang, t, dir } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#hero" 
          className={`text-2xl font-bold tracking-widest text-primary ${lang === 'ar' ? "font-['Noto_Naskh_Arabic']" : ''}`}
          data-testid="link-logo"
        >
          {lang === 'ar' ? 'SUDAM / سُدم' : 'SUDAM'}
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors" data-testid="link-about">{t('about')}</a>
          <a href="#vision" className="hover:text-primary transition-colors" data-testid="link-vision">{t('vision')}</a>
          <a href="#what-we-do" className="hover:text-primary transition-colors" data-testid="link-what-we-do">{t('whatWeDo')}</a>
          <a href="#contact" className="hover:text-primary transition-colors" data-testid="link-contact">{t('contact')}</a>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className={`rounded-full px-4 border-muted-foreground/30 hover:bg-muted/50 ${lang === 'en' ? "font-['Noto_Naskh_Arabic'] text-base" : ''}`}
            data-testid="btn-lang-toggle"
          >
            <Globe className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
            {t('langToggle')}
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className={`rounded-full px-3 border-muted-foreground/30 hover:bg-muted/50 ${lang === 'en' ? "font-['Noto_Naskh_Arabic'] text-base" : ''}`}
            data-testid="btn-lang-toggle-mobile"
          >
            <Globe className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" data-testid="btn-mobile-menu">
            <Menu className="w-6 h-6 text-foreground" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
