import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

function OrbitalLogoMark() {
  return (
    <svg
      viewBox="0 0 220 55"
      className="h-11 w-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SUDUUM"
      style={{ filter: "drop-shadow(0 0 8px rgba(139,87,224,0.55))" }}
    >
      <g transform="rotate(-8, 110, 26)">
        <ellipse cx="110" cy="26" rx="106" ry="21" stroke="#C4A8F0" strokeWidth="1.8"/>
        <line x1="216" y1="19" x2="216" y2="33" stroke="#C4A8F0" strokeWidth="2"/>
        <line x1="209" y1="26" x2="223" y2="26" stroke="#C4A8F0" strokeWidth="2"/>
        <circle cx="216" cy="26" r="3" fill="#C4A8F0"/>
      </g>
      <text
        x="110"
        y="33"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Syne, system-ui, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="3"
      >
        SUDUUM
      </text>
    </svg>
  );
}

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
            <OrbitalLogoMark />
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
