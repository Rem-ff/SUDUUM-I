import React from "react";
import { Navbar } from "@/components/Navbar";
import { Starfield } from "@/components/Starfield";
import { motion } from "framer-motion";
import { ChevronDown, Rocket, Users, MapPin, MessageCircle, BookOpen, Info } from "lucide-react";
import { SiX, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t, lang, dir } = useLanguage();
  const isAr = lang === 'ar';
  const arFontClass = isAr ? "font-['Noto_Naskh_Arabic']" : "";

  const whatWeDoIcons = [Users, MapPin, MessageCircle, BookOpen];

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
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-muted-foreground mb-2" data-testid="text-hero-title">
                {t('title')}
              </h1>
              <span className="text-2xl md:text-3xl font-medium tracking-[0.3em] text-muted-foreground uppercase font-sans">
                {t('titleEn')}
              </span>
            </div>
          ) : (
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-muted-foreground mb-6" data-testid="text-hero-title">
              {t('title')}
            </h1>
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
              <a href="https://x.com/sudam" target="_blank" rel="noreferrer" className="flex items-center">
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
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-10 md:p-16 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" data-testid="text-about-title">{t('aboutTitle')}</h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-about-p1">
                {t('aboutP1')}
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-about-p2">
                {t('aboutP2')}
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-about-p3">
                {t('aboutP3')}
              </p>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20" data-testid="badge-about-highlight">
              <span className="text-sm font-medium">{t('aboutBadge')}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white" data-testid="text-vision-title">{t('visionTitle')}</h2>
            <p className="text-2xl md:text-4xl font-light text-muted-foreground leading-tight italic" data-testid="text-vision-desc">
              "{t('visionText')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-what-title">{t('whatTitle')}</h2>
            <p className="text-muted-foreground text-lg" data-testid="text-what-subtitle">{t('whatSubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t('whatItems').map((item: any, i: number) => {
              const Icon = whatWeDoIcons[i] || Rocket;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group flex flex-col items-start"
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

      {/* Community Status Banner */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 via-background to-primary/10 border border-primary/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-start">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Info className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t('statusTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed">{t('statusText')}</p>
              </div>
            </div>
          </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="text-contact-title">{t('contactTitle')}</h2>
              <p className="text-muted-foreground mb-8 text-lg" data-testid="text-contact-desc">
                {t('contactDesc')}
              </p>
              
              <div className="space-y-6">
                <a href="https://x.com/sudam" className="flex items-center text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-x">
                  <div className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 ${isAr ? 'ml-4' : 'mr-4'}`}>
                    <SiX className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">@sudam</span>
                </a>
                <a href="#" className="flex items-center text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-whatsapp">
                  <div className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 ${isAr ? 'ml-4' : 'mr-4'}`}>
                    <SiWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg">{t('whatsapp')}</span>
                </a>
                <a href="mailto:contact@sudam.space" className="flex items-center text-muted-foreground hover:text-primary transition-colors group" data-testid="link-contact-email">
                  <div className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 ${isAr ? 'ml-4' : 'mr-4'}`}>
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{t('email')}</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isAr ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-3xl border border-border"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
          <p className="text-white font-medium mb-4 text-lg" data-testid="text-footer-title">
            {t('footerTitle')}
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
