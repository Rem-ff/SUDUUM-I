import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t, dir } = useLanguage();
  const isAr = lang === 'ar';

  useEffect(() => {
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
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2"
          data-testid="link-logo"
        >
          {isAr ? (
            <span className="text-2xl font-bold tracking-widest font-['SaudiFont'] flex items-center gap-2 text-white">
              <span className="text-primary text-xl">✦</span> سُدم
            </span>
          ) : (
            <span className="text-2xl font-bold tracking-[0.15em] flex items-center gap-2 text-white">
              <span className="text-primary text-xl">✦</span> SUDUUM
            </span>
          )}
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hero" className="text-white/80 hover:text-white transition-colors" data-testid="link-home">{t('homeNav')}</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors" data-testid="link-about">{t('about')}</a>
          <a href="#vision" className="text-white/80 hover:text-white transition-colors" data-testid="link-vision">{t('vision')}</a>
          <a href="#what-we-do" className="text-white/80 hover:text-white transition-colors" data-testid="link-what-we-do">{t('whatWeDo')}</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors" data-testid="link-contact">{t('contact')}</a>

          <Button asChild size="sm" className="rounded-full px-5 text-sm" data-testid="btn-nav-join">
            <a href="#contact">{t('joinBtn')}</a>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className={`rounded-full px-4 border-white/25 text-white/85 hover:bg-white/10 hover:text-white ${!isAr ? "font-['SaudiFont'] text-base" : ''}`}
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
            className="rounded-full px-3 border-white/25 text-white/85 hover:bg-white/10"
            data-testid="btn-lang-toggle-mobile"
          >
            <Globe className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" data-testid="btn-mobile-menu">
            <Menu className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
