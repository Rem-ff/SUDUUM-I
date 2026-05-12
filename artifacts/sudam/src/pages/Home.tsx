import { Navbar } from "@/components/Navbar";
import { Starfield } from "@/components/Starfield";
import { motion } from "framer-motion";
import { ChevronDown, Trophy, BookOpen, Lightbulb, Newspaper, CalendarDays, Info, Telescope } from "lucide-react";
import { SiX, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t, lang, dir } = useLanguage();
  const isAr = lang === 'ar';
  const arFontClass = isAr ? "font-['SaudiFont']" : "";

  const whatWeDoIcons = [Trophy, CalendarDays, Newspaper, Lightbulb];

  return (
    <div className={`min-h-screen text-foreground bg-background selection:bg-primary selection:text-primary-foreground font-sans ${arFontClass}`} dir={dir}>
      <Starfield />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 flex flex-col items-center max-w-4xl mt-16"
        >
          {isAr ? (
            <div className="mb-6 flex flex-col items-center">
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-muted-foreground mb-2 flex items-center gap-4" data-testid="text-hero-title">
                {t('title')} <span className="text-primary text-4xl">✦</span>
              </h1>
              <span className="text-2xl md:text-3xl font-medium tracking-[0.3em] text-muted-foreground uppercase font-sans mt-4">
                {t('titleEn')}
              </span>
            </div>
          ) : (
            <div className="mb-6 flex flex-col items-center" data-testid="text-hero-title">
              {/* Orbital SUDUUM logo */}
              <svg
                viewBox="0 0 400 160"
                className="w-[min(72vw,520px)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="SUDUUM"
              >
                <g transform="rotate(-8, 200, 78)">
                  <ellipse cx="200" cy="78" rx="192" ry="57" stroke="#8B57E0" strokeWidth="1.5"/>
                  <line x1="392" y1="71" x2="392" y2="85" stroke="#C4A8F0" strokeWidth="1.5"/>
                  <line x1="385" y1="78" x2="399" y2="78" stroke="#C4A8F0" strokeWidth="1.5"/>
                  <circle cx="392" cy="78" r="3.5" fill="#8B57E0"/>
                </g>
                <text x="200" y="92" textAnchor="middle" fill="#F5F3FF" fontFamily="Syne,system-ui,sans-serif" fontWeight="800" fontSize="50" letterSpacing="5">SUDUUM</text>
                <circle cx="55" cy="122" r="2.5" fill="#8B57E0"/>
                <circle cx="66" cy="122" r="2.5" fill="#8B57E0"/>
                <circle cx="77" cy="122" r="2.5" fill="#8B57E0"/>
                <circle cx="100" cy="122" r="2.5" fill="#8B57E0"/>
                <circle cx="111" cy="122" r="2.5" fill="#8B57E0"/>
                <rect x="119.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
                <rect x="151.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
                <circle cx="174" cy="122" r="2.5" fill="#8B57E0"/>
                <circle cx="185" cy="122" r="2.5" fill="#8B57E0"/>
                <circle cx="208" cy="122" r="2.5" fill="#8B57E0"/>
                <circle cx="219" cy="122" r="2.5" fill="#8B57E0"/>
                <rect x="227.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
                <circle cx="262" cy="122" r="2.5" fill="#8B57E0"/>
                <circle cx="273" cy="122" r="2.5" fill="#8B57E0"/>
                <rect x="281.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
                <rect x="313.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
                <rect x="333.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
              </svg>
            </div>
          )}
          
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-6 max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
            {t('subtitle')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed" data-testid="text-hero-tagline">
            {t('heroDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/20" data-testid="btn-join">
              <a href="#contact">{t('joinBtn')}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-muted-foreground/30 hover:bg-muted/50" data-testid="btn-follow-x">
              <a href="https://x.com/sudam_space" target="_blank" rel="noreferrer" className="flex items-center">
                <SiX className={isAr ? "ml-2" : "mr-2"} /> {t('followBtn')}
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors" data-testid="link-scroll-down">
            <span className="text-sm mb-2 opacity-70">{t('scrollDown')}</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Image Col (Left for LTR, Right for RTL via grid logic) */}
            <div className={`order-2 md:order-1 h-64 md:h-full min-h-[300px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-card border border-border flex items-center justify-center relative`}>
              <Telescope className="w-24 h-24 text-primary/50" />
              <div className="absolute inset-0 bg-primary/5 blur-3xl pointer-events-none" />
            </div>

            {/* Text Col */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center gap-3" data-testid="text-about-title">
                {isAr ? <>{t('aboutTitle')} <span className="text-primary text-2xl">✦</span></> : <><span className="text-primary text-2xl">✦</span> {t('aboutTitle')}</>}
              </h2>
              <p className="text-xl text-primary font-medium mb-6">{t('aboutSubtitle')}</p>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-p1">
                  {t('aboutP1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-p2">
                  {t('aboutP2')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-p3">
                  {t('aboutP3')}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {t('aboutTags').map((tag: string, i: number) => (
                  <span key={i} className="bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-6 md:px-12 relative overflow-hidden bg-muted/10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <svg viewBox="0 0 200 160" className="w-48 h-48 mx-auto text-primary opacity-20 mb-6 drop-shadow-xl">
              <path fill="currentColor" d="M30,10 L170,10 L185,40 L170,80 L150,100 L140,130 L120,150 L100,155 L80,150 L60,130 L50,100 L30,80 L15,40 Z" />
            </svg>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center justify-center gap-3" data-testid="text-vision-title">
              {isAr ? <>{t('visionTitle')} <span className="text-primary text-2xl">✦</span></> : <><span className="text-primary text-2xl">✦</span> {t('visionTitle')}</>}
            </h2>
            <p className="text-2xl md:text-4xl font-light text-muted-foreground leading-tight italic" data-testid="text-vision-desc">
              "{t('visionText')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 px-6 md:px-12 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3" data-testid="text-what-title">
              {isAr ? <>{t('whatTitle')} <span className="text-primary text-2xl">✦</span></> : <><span className="text-primary text-2xl">✦</span> {t('whatTitle')}</>}
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-what-subtitle">{t('whatSubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t('whatItems').map((item: any, i: number) => {
              const Icon = whatWeDoIcons[i] || Trophy;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group flex flex-col items-start ${i === 3 ? 'lg:col-start-1 lg:col-end-2 lg:ml-auto lg:w-full lg:max-w-sm' : ''} ${i === 4 ? 'lg:col-start-2 lg:col-end-4 lg:mr-auto lg:w-full lg:max-w-sm' : ''}`}
                  data-testid={`card-what-${i}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-muted/20 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isAr ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3" data-testid="text-contact-title">
                 {isAr ? <>{t('contactTitle')} <span className="text-primary text-2xl">✦</span></> : <><span className="text-primary text-2xl">✦</span> {t('contactTitle')}</>}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg" data-testid="text-contact-desc">
                {t('contactDesc')}
              </p>
              
              <div className="space-y-6">
                <a href="https://x.com/sudam_space" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-x">
                  <div className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 ${isAr ? 'ml-4' : 'mr-4'}`}>
                    <SiX className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{t('contactXHandle')}</span>
                </a>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-whatsapp">
                  <div className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 ${isAr ? 'ml-4' : 'mr-4'}`}>
                    <SiWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg">{t('whatsapp')}</span>
                </a>
                <a href="mailto:hello@sudam.space" className="flex items-center text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-email">
                  <div className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 ${isAr ? 'ml-4' : 'mr-4'}`}>
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <span className="text-lg">{t('contactEmail')}</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isAr ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-3xl border border-border relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 blur-2xl pointer-events-none" />
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">{t('nameLabel')}</label>
                  <Input id="name" placeholder={t('namePlaceholder')} className="bg-background border-border" data-testid="input-contact-name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">{t('emailLabel')}</label>
                  <Input id="email" type="email" placeholder={t('emailPlaceholder')} className="bg-background border-border text-left dir-ltr" data-testid="input-contact-email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">{t('messageLabel')}</label>
                  <Textarea id="message" placeholder={t('messagePlaceholder')} className="bg-background border-border min-h-[120px]" data-testid="input-contact-message" />
                </div>
                <Button type="submit" className="w-full" data-testid="btn-contact-submit">
                  {t('sendBtn')}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border bg-background px-6">
        <div className="container mx-auto">
          <p className="text-white font-medium mb-4 text-2xl flex items-center justify-center gap-2" data-testid="text-footer-title">
            {isAr ? <><span className="text-primary text-xl">✦</span> {t('footerTitle')}</> : <><span className="text-primary text-xl">✦</span> {t('footerTitle')}</>}
          </p>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto" data-testid="text-footer-desc">
            {t('footerDesc')}
          </p>
          <p className="text-sm text-muted-foreground/60 max-w-2xl mx-auto" data-testid="text-footer-disclaimer">
            {t('footerDisclaimer')}
          </p>
        </div>
      </footer>
    </div>
  );
}
