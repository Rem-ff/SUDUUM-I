import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useJoinModal } from "@/contexts/JoinModalContext";

const navigation = {
  ar: [
    ["الرئيسية", "#hero"], ["ماذا نبني", "#build"], ["البرامج", "#programs"],
    ["المشاريع", "#projects"], ["الإشارات", "#signals"], ["عن سُدم", "#about"],
  ],
  en: [
    ["Home", "#hero"], ["What We Build", "#build"], ["Programs", "#programs"],
    ["Projects", "#projects"], ["Signals", "#signals"], ["About", "#about"],
  ],
};

export function Navbar() {
  const { lang, setLang } = useLanguage();
  const { openModal } = useJoinModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const isArabic = lang === "ar";
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#hero" onClick={closeMenu} className="flex items-center gap-3" aria-label="SUDUUM home">
          <span className="relative grid h-8 w-8 place-items-center">
            <span className="absolute h-[2px] w-8 rotate-[28deg] rounded-full bg-primary" />
            <span className="absolute h-[2px] w-8 -rotate-[28deg] rounded-full bg-primary/55" />
          </span>
          <span className="text-xl font-semibold tracking-[0.18em] text-foreground">SUDUUM</span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navigation[lang].map(([label, href]) => (
            <a key={href} href={href} className="text-[12px] font-medium text-muted-foreground transition-colors hover:text-foreground">{label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button type="button" onClick={() => setLang(isArabic ? "en" : "ar")} className="h-9 px-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
            {isArabic ? "EN" : "عربي"}
          </button>
          <Button variant="ghost" size="sm" onClick={openModal} className="border border-white/15 text-xs">
            {isArabic ? "التقديم / الانضمام" : "Apply / Join"}
          </Button>
          <Button asChild size="sm" className="group text-xs">
            <a href="mailto:suduum.space@gmail.com?subject=Work%20with%20SUDUUM">
              {isArabic ? "اعمل مع سُدم" : "Work with SUDUUM"}
              <ArrowUpRight className="ms-1 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center text-foreground lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-background px-5 pb-6 pt-4 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navigation[lang].map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className="border-b border-white/[0.07] py-3 text-sm text-foreground">{label}</a>
            ))}
          </nav>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Button variant="outline" onClick={() => { closeMenu(); openModal(); }}>
              {isArabic ? "التقديم / الانضمام" : "Apply / Join"}
            </Button>
            <Button asChild><a href="mailto:suduum.space@gmail.com?subject=Work%20with%20SUDUUM">{isArabic ? "اعمل مع سُدم" : "Work with SUDUUM"}</a></Button>
          </div>
          <button type="button" onClick={() => { setLang(isArabic ? "en" : "ar"); closeMenu(); }} className="mt-4 text-xs text-muted-foreground">
            {isArabic ? "English" : "العربية"}
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
