import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Mail, MoveLeft, MoveRight } from "lucide-react";
import { SiInstagram, SiTiktok, SiX } from "react-icons/si";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useJoinModal } from "@/contexts/JoinModalContext";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

const copy = {
  ar: {
    eyebrow: "SAUDI SPACE CAPABILITY · PROJECT · VENTURE ENGINE",
    heroTitle: "نبني القدرات والمشاريع التي تدفع قطاع الفضاء السعودي أبعد.",
    heroText: "سُدم شركة تعمل مع المواهب والجهات لتحويل احتياجات وفرص قطاع الفضاء إلى قدرات تشغيلية، مشاريع قابلة للتنفيذ، وتقنيات وشركات قابلة للاستمرار.",
    workCta: "اعمل مع سُدم", exploreCta: "اكتشف برامج سُدم",
    introKicker: "WHAT SUDUUM IS", introTitle: "من الاحتياج إلى التنفيذ",
    introText: "نبدأ من احتياج أو فرصة حقيقية في القطاع، ثم نحدد المواهب والخبرات والشركاء اللازمين لبناء حل قابل للاختبار والاستمرار.",
    flow: [["Sector Need", "احتياج القطاع"], ["Talent & Capability", "المواهب والقدرات"], ["Project", "المشروع"], ["Validation", "التحقق"], ["Continuation", "شريك · مختبر · شركة"]],
    buildKicker: "WHAT WE BUILD", buildTitle: "أربع طبقات لبناء قيمة قابلة للاستمرار",
    buildText: "تبدأ سُدم ببرامج ومهام مرتبطة باحتياج حقيقي، ثم تمنح المشاريع الواعدة مسارًا تقنيًا أو تجاريًا للاستمرار.",
    buildItems: [
      { n: "01", title: "SUDUUM Programs", text: "برامج نوعية تكتشف المواهب وتحول قدراتها إلى تطبيقات ومشاريع حقيقية في قطاع الفضاء.", meta: "TALENT → CAPABILITY" },
      { n: "02", title: "Custom Missions", text: "مشاريع مصممة حول تحدٍ أو فرصة حقيقية لدى جهة، من تحليل الاحتياج إلى بناء وتنفيذ الحل.", meta: "NEED → EXECUTION" },
      { n: "03", title: "SUDUUM Labs", text: "مسار مستقبلي لاستمرار المشاريع الواعدة وتطوير النماذج الأولية والملكية الفكرية والقدرات طويلة الأجل.", meta: "ARCHITECTURE · AS PROJECTS MATURE" },
      { n: "04", title: "SUDUUM Ventures", text: "مسار مستقبلي لتحويل المشاريع ذات الإمكان التقني والتجاري إلى شركات مستقلة عندما يكون ذلك هو المسار الأنسب.", meta: "ARCHITECTURE · SELECTIVE" },
    ],
    processKicker: "HOW SUDUUM WORKS", processTitle: "نبني على مراحل واضحة",
    process: [
      ["01", "Observe", "نرصد احتياجات وفرص القطاع."],
      ["02", "Assemble", "نجمع المواهب والخبرات والشركاء المناسبين."],
      ["03", "Build", "نبني مشروعًا أو قدرة قابلة للاختبار."],
      ["04", "Validate", "نختبر القيمة التقنية، التشغيلية، البحثية أو التجارية."],
      ["05", "Continue", "نحدد المسار الأنسب: مهمة شريك، بحث، Labs، Venture، أو نقل."],
    ],
    currentKicker: "CURRENT PROGRAMS & PROJECTS", currentTitle: "ما نبنيه الآن",
    fellowshipStatus: "APPLICATIONS OPENING SOON",
    fellowshipText: "برنامج انتقائي يحول المواهب القوية في تخصصاتها إلى فرق قادرة على العمل على تحديات ومشاريع حقيقية في قطاع الفضاء.",
    programCta: "سجل اهتمامك",
    orgKicker: "FOR ORGANIZATIONS", orgTitle: "هل لديكم تحدٍ أو فرصة في قطاع الفضاء؟",
    orgText: "تعمل سُدم مع الجهات على تصميم برامج ومشاريع مرتبطة باحتياجات القطاع، وبناء فرق قادرة على تطوير حلول قابلة للاختبار والاستمرار.",
    orgPoints: ["تصميم برامج مرتبطة باحتياجات القطاع", "بناء فرق ومشاريع حول تحديات محددة", "تطوير نماذج أولية ومخرجات قابلة للاختبار", "الوصول إلى شبكة مواهب وخبرات متخصصة", "نقل المشاريع الواعدة إلى مسار الاستمرار الأنسب"],
    discussCta: "ناقش مشروعًا معنا",
    talentKicker: "FOR TALENT", talentTitle: "قدرتك موجودة. نساعدك تطبقها داخل قطاع الفضاء.",
    talentText: "لا تبحث سُدم فقط عن متخصصين في الفضاء. نبحث عن أشخاص لديهم قدرة مثبتة في الهندسة، العلوم، البيانات، البرمجيات، الأعمال، السياسات وغيرها، ويمكن تحويلها إلى أثر حقيقي داخل القطاع.",
    talentLinks: ["البرامج الحالية", "المشاريع المفتوحة", "التقديم"],
    networkTitle: "SUDUUM Network", networkText: "طبقة تواصل ثانوية للمواهب المهتمة بمتابعة الفرص والمستجدات داخل منظومة سُدم.", networkCta: "انضم إلى الشبكة",
    signalsKicker: "PUBLIC INTELLIGENCE LAYER", signalsTitle: "SUDUUM Signals", signalsText: "ما نرصده في القطاع.",
    signalsCategories: ["Opportunities", "Challenges", "Grants", "Fellowships", "Competitions", "Sector Developments"],
    signalCards: [
      { category: "PROGRAM", title: "SARI 2", org: "وكالة الفضاء السعودية", href: "https://ssa.gov.sa/Sari2-ar/" },
      { category: "COMPETITION", title: "Saudi Space Apps Challenge", org: "وكالة الفضاء السعودية", href: "https://spaceappssaudi.com/en/" },
      { category: "FELLOWSHIP", title: "ESA Academy", org: "European Space Agency", href: "https://www.esa.int/Education/ESA_Academy" },
    ],
    signalCta: "عرض المصدر",
    aboutKicker: "ABOUT SUDUUM", aboutTitle: "سعودية البناء. عالمية الصلة.",
    aboutText: "نعالج فجوة واضحة: وجود مواهب قوية وفرص قطاعية متنامية، مع نقص المسارات التي تحول هذه القدرة إلى مشاريع وأصول تقنية قابلة للاستمرار. لذلك نبدأ من احتياجات القطاع، لا من المناهج التقليدية.",
    principle: "Saudi-built, globally relevant", foundersTitle: "المؤسسون",
    founders: [["ريماس الزهراني", "مؤسِسة مشاركة"], ["سعود الغامدي", "مؤسس مشارك"]],
    contactTitle: "ابدأ من احتياج حقيقي.",
    contactText: "إذا كانت لديكم فرصة، تحدٍ، أو مشروع يمكن أن يبني قدرة جديدة في قطاع الفضاء، نريد أن نسمع عنه.",
    contactCta: "تواصل مع سُدم",
    footerLine: "شركة سعودية تبني القدرات والمشاريع والأصول التقنية في قطاع الفضاء.",
  },
  en: {
    eyebrow: "SAUDI SPACE CAPABILITY · PROJECT · VENTURE ENGINE",
    heroTitle: "Building the capabilities and projects that move Saudi Arabia’s space sector further.",
    heroText: "SUDUUM works with talent and organizations to turn space-sector needs and opportunities into operational capability, executable projects, technologies, and ventures with long-term potential.",
    workCta: "Work with SUDUUM", exploreCta: "Explore Programs",
    introKicker: "WHAT SUDUUM IS", introTitle: "From sector need to execution",
    introText: "We start with a real sector need or opportunity, then assemble the talent, expertise, and partners required to build something testable and built to continue.",
    flow: [["Sector Need", "A defined need"], ["Talent & Capability", "The right team"], ["Project", "An executable build"], ["Validation", "Evidence of value"], ["Continuation", "Partner · Lab · Venture"]],
    buildKicker: "WHAT WE BUILD", buildTitle: "Four layers for building durable value",
    buildText: "SUDUUM begins with programs and missions tied to real needs, then gives promising projects a technical or commercial path to continue.",
    buildItems: [
      { n: "01", title: "SUDUUM Programs", text: "Selective programs that identify talent and turn demonstrated capability into real space-sector applications and projects.", meta: "TALENT → CAPABILITY" },
      { n: "02", title: "Custom Missions", text: "Projects designed around a real organizational challenge or opportunity, from need analysis through solution build and execution.", meta: "NEED → EXECUTION" },
      { n: "03", title: "SUDUUM Labs", text: "A future continuation path for promising projects to develop prototypes, IP, and long-term technical capability.", meta: "ARCHITECTURE · AS PROJECTS MATURE" },
      { n: "04", title: "SUDUUM Ventures", text: "A future path for select projects with technical and commercial potential to become independent companies when appropriate.", meta: "ARCHITECTURE · SELECTIVE" },
    ],
    processKicker: "HOW SUDUUM WORKS", processTitle: "A clear build process",
    process: [
      ["01", "Observe", "Identify sector needs and opportunities."],
      ["02", "Assemble", "Bring together the right talent, expertise, and partners."],
      ["03", "Build", "Create a project or capability that can be tested."],
      ["04", "Validate", "Test technical, operational, research, or commercial value."],
      ["05", "Continue", "Select the right path: partner mission, research, Labs, venture, or transfer."],
    ],
    currentKicker: "CURRENT PROGRAMS & PROJECTS", currentTitle: "What we are building now",
    fellowshipStatus: "APPLICATIONS OPENING SOON",
    fellowshipText: "A selective program that turns strong, demonstrated talent into teams capable of working on real space-sector challenges and projects.",
    programCta: "Register interest",
    orgKicker: "FOR ORGANIZATIONS", orgTitle: "Do you have a space-sector challenge or opportunity?",
    orgText: "SUDUUM works with organizations to design need-led programs and projects, and to build teams capable of developing solutions that can be tested and continued.",
    orgPoints: ["Design programs around sector needs", "Build teams and projects around defined challenges", "Develop prototypes and testable outputs", "Access specialized talent and expertise", "Move promising projects into the right continuation path"],
    discussCta: "Discuss a project with us",
    talentKicker: "FOR TALENT", talentTitle: "Your capability already exists. We help you apply it inside the space sector.",
    talentText: "SUDUUM does not only look for space specialists. We look for people with demonstrated ability in engineering, science, data, software, business, policy, and other fields that can create real sector value.",
    talentLinks: ["Current programs", "Open projects", "Apply"],
    networkTitle: "SUDUUM Network", networkText: "A secondary connection layer for talent following opportunities and developments across the SUDUUM ecosystem.", networkCta: "Join the network",
    signalsKicker: "PUBLIC INTELLIGENCE LAYER", signalsTitle: "SUDUUM Signals", signalsText: "What we are observing across the sector.",
    signalsCategories: ["Opportunities", "Challenges", "Grants", "Fellowships", "Competitions", "Sector Developments"],
    signalCards: [
      { category: "PROGRAM", title: "SARI 2", org: "Saudi Space Agency", href: "https://ssa.gov.sa/Sari2-ar/" },
      { category: "COMPETITION", title: "Saudi Space Apps Challenge", org: "Saudi Space Agency", href: "https://spaceappssaudi.com/en/" },
      { category: "FELLOWSHIP", title: "ESA Academy", org: "European Space Agency", href: "https://www.esa.int/Education/ESA_Academy" },
    ],
    signalCta: "View source",
    aboutKicker: "ABOUT SUDUUM", aboutTitle: "Saudi-built. Globally relevant.",
    aboutText: "We address a clear gap: strong talent and growing sector opportunities, but too few paths that turn capability into durable projects and technical assets. Our operating principle is to start with sector needs, not traditional curricula.",
    principle: "Saudi-built, globally relevant", foundersTitle: "Founders",
    founders: [["Remas Alzahrani", "Co-Founder"], ["Saud Alghamdi", "Co-Founder"]],
    contactTitle: "Start with a real need.",
    contactText: "If you have an opportunity, challenge, or project that could build new capability in the space sector, we want to hear about it.",
    contactCta: "Contact SUDUUM",
    footerLine: "A Saudi company building capabilities, projects, and technical assets for the space sector.",
  },
};

function TechnicalBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      <motion.svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1440 900" fill="none" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 1.5 }}>
        <path d="M-80 720C260 190 720 110 1520 280" stroke="url(#line)" strokeWidth="1.2" />
        <path d="M-20 780C390 350 820 310 1460 510" stroke="white" strokeOpacity=".08" />
        <circle cx="1110" cy="244" r="6" fill="hsl(var(--primary))" />
        <circle cx="1110" cy="244" r="22" stroke="hsl(var(--primary))" strokeOpacity=".35" />
        <path d="M1110 218V134M1084 244H982" stroke="white" strokeOpacity=".16" strokeDasharray="4 8" />
        <defs><linearGradient id="line" x1="0" y1="0" x2="1440" y2="0"><stop stopColor="white" stopOpacity="0" /><stop offset=".6" stopColor="hsl(var(--primary))" stopOpacity=".75" /><stop offset="1" stopColor="white" stopOpacity="0" /></linearGradient></defs>
      </motion.svg>
      <div className="absolute top-[24%] right-[8%] text-[10px] font-mono tracking-[0.22em] text-primary/50">CAPABILITY VECTOR / 01</div>
      <div className="absolute bottom-[18%] left-[7%] text-[10px] font-mono tracking-[0.22em] text-white/25">NEED → BUILD → VALIDATE</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,hsl(var(--primary)/0.11),transparent_38%),linear-gradient(to_bottom,transparent_50%,hsl(var(--background))_100%)]" />
    </div>
  );
}

function SectionHeader({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <motion.div {...fadeUp()} className="flex flex-col max-w-3xl mb-14">
      <p className="text-[11px] font-mono tracking-[0.23em] text-primary/75 mb-4">{kicker}</p>
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.2]">{title}</h2>
      {text && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-8 max-w-2xl">{text}</p>}
    </motion.div>
  );
}

export default function Home() {
  const { lang, dir } = useLanguage();
  const { openModal } = useJoinModal();
  const isAr = lang === "ar";
  const c = copy[lang];
  const Arrow = isAr ? MoveLeft : MoveRight;
  const projectMail = `mailto:suduum.space@gmail.com?subject=${encodeURIComponent(isAr ? "مشروع مع سُدم" : "Project with SUDUUM")}`;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground" dir={dir}>
      <Navbar />
      <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden px-6 md:px-12 pt-28 pb-20">
        <TechnicalBackdrop />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }} className="max-w-5xl">
            <p className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-primary mb-7">{c.eyebrow}</p>
            <h1 className="text-[clamp(2.7rem,6.4vw,6.7rem)] font-bold leading-[1.03] tracking-[-0.035em] text-white max-w-5xl">{c.heroTitle}</h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl">{c.heroText}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Button size="lg" asChild className="rounded-full px-7 py-6 shadow-lg shadow-primary/15"><a href={projectMail}>{c.workCta}<Arrow className="w-4 h-4 ms-2" /></a></Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-7 py-6 border-white/20 text-white hover:bg-white/5"><a href="#projects">{c.exploreCta}</a></Button>
            </div>
          </motion.div>
        </div>
        <a href="#what-suduum-is" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/35 hover:text-primary" aria-label={isAr ? "اكتشف المزيد" : "Explore more"}><ArrowDown className="w-5 h-5 animate-bounce" /></a>
      </section>

      <section id="what-suduum-is" className="py-24 md:py-32 px-6 md:px-12 border-y border-border bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader kicker={c.introKicker} title={c.introTitle} text={c.introText} />
          <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 md:grid-cols-5 border border-border rounded-2xl bg-card/50">
            {c.flow.map(([en, local], i) => <div key={en} className="relative min-h-36 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-e border-border last:border-0">
              <span className="text-[10px] font-mono text-primary/55">0{i + 1}</span><div><p className="font-medium text-white">{en}</p><p className="text-sm text-muted-foreground mt-1">{local}</p></div>
              {i < c.flow.length - 1 && <span className="absolute -bottom-3 md:bottom-auto md:-end-3 md:top-1/2 z-10 w-6 h-6 rounded-full bg-background border border-border text-primary flex items-center justify-center text-xs md:-translate-y-1/2 rotate-90 md:rotate-0">→</span>}
            </div>)}
          </motion.div>
        </div>
      </section>

      <section id="build" className="py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl"><SectionHeader kicker={c.buildKicker} title={c.buildTitle} text={c.buildText} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-3xl overflow-hidden">
            {c.buildItems.map((item, i) => <motion.article key={item.title} {...fadeUp(i * .07)} className="bg-card p-8 md:p-10 min-h-72 flex flex-col hover:bg-white/[0.035]">
              <div className="flex items-center justify-between mb-12"><span className="text-xs font-mono text-primary">{item.n}</span><span className="text-[9px] md:text-[10px] font-mono tracking-[.16em] text-muted-foreground/55 text-end">{item.meta}</span></div>
              <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4">{item.title}</h3><p className="text-muted-foreground leading-7 max-w-xl">{item.text}</p>
            </motion.article>)}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-muted/10 border-y border-border overflow-hidden">
        <div className="container mx-auto max-w-6xl"><SectionHeader kicker={c.processKicker} title={c.processTitle} />
          <div className="relative grid grid-cols-1 md:grid-cols-5">
            <div className="hidden md:block absolute top-[29px] inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
            {c.process.map(([n, title, text], i) => <motion.div key={title} {...fadeUp(i * .08)} className="relative py-5 md:px-5 border-b md:border-b-0 border-border last:border-0">
              <div className="relative z-10 w-[58px] h-[58px] rounded-full bg-background border border-primary/35 flex items-center justify-center text-xs font-mono text-primary mb-6">{n}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{title}</h3><p className="text-sm text-muted-foreground leading-6">{text}</p>
            </motion.div>)}
          </div>
        </div>
      </section>

      <section id="programs" className="py-24 md:py-32 px-6 md:px-12">
        <div id="projects" className="container mx-auto max-w-6xl scroll-mt-24"><SectionHeader kicker={c.currentKicker} title={c.currentTitle} />
          <motion.article {...fadeUp(.08)} className="relative border border-border rounded-3xl bg-card overflow-hidden p-8 md:p-12">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="grid md:grid-cols-[1fr_auto] gap-10 md:items-end"><div>
              <div className="flex flex-wrap gap-3 mb-8"><span className="text-[10px] font-mono tracking-[.18em] text-primary border border-primary/25 rounded-full px-3 py-1.5">SUDUUM PROGRAM 01</span><span className="text-[10px] font-mono tracking-[.18em] text-white/45 border border-border rounded-full px-3 py-1.5">{c.fellowshipStatus}</span></div>
              <h3 className="text-3xl md:text-5xl font-semibold text-white">SUDUUM 01 Fellowship</h3><p className="mt-5 text-muted-foreground text-lg leading-8 max-w-3xl">{c.fellowshipText}</p>
            </div><Button variant="outline" className="rounded-full border-white/20 text-white" onClick={openModal}>{c.programCta}<Arrow className="w-4 h-4 ms-2" /></Button></div>
          </motion.article>
        </div>
      </section>

      <section id="organizations" className="py-24 md:py-32 px-6 md:px-12 bg-primary/[0.055] border-y border-primary/15">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-24 items-start">
          <SectionHeader kicker={c.orgKicker} title={c.orgTitle} text={c.orgText} />
          <motion.div {...fadeUp(.12)} className="border-s border-primary/25 ps-7 md:ps-10"><ul className="space-y-5 mb-9">{c.orgPoints.map(p => <li key={p} className="flex items-start gap-3 text-white/80"><Check className="w-4 h-4 text-primary mt-1 shrink-0" /><span className="leading-7">{p}</span></li>)}</ul><Button asChild className="rounded-full px-6"><a href={projectMail}>{c.discussCta}<Arrow className="w-4 h-4 ms-2" /></a></Button></motion.div>
        </div>
      </section>

      <section id="talent" className="py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-[1.15fr_.85fr] gap-14 lg:gap-24">
          <div><SectionHeader kicker={c.talentKicker} title={c.talentTitle} text={c.talentText} /><div className="flex flex-wrap gap-3">{c.talentLinks.map((x, i) => i === 2 ? <Button key={x} className="rounded-full" onClick={openModal}>{x}</Button> : <Button key={x} variant="outline" asChild className="rounded-full border-white/20"><a href="#projects">{x}</a></Button>)}</div></div>
          <motion.aside {...fadeUp(.12)} className="bg-card border border-border rounded-3xl p-8 self-end"><p className="text-[10px] font-mono tracking-[.2em] text-primary/70 mb-5">SECONDARY TALENT LAYER</p><h3 className="text-2xl font-semibold text-white mb-3">{c.networkTitle}</h3><p className="text-muted-foreground leading-7 mb-7">{c.networkText}</p><a href="https://chat.whatsapp.com/EBfTQYgNtXXB8Axq9BPZd6" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-white">{c.networkCta}<ArrowUpRight className="w-4 h-4" /></a></motion.aside>
        </div>
      </section>

      <section id="signals" className="py-24 md:py-32 px-6 md:px-12 bg-muted/10 border-y border-border">
        <div className="container mx-auto max-w-6xl"><SectionHeader kicker={c.signalsKicker} title={c.signalsTitle} text={c.signalsText} />
          <div className="flex flex-wrap gap-2 mb-10">{c.signalsCategories.map(x => <span key={x} className="text-[10px] font-mono tracking-[.12em] border border-border rounded-full px-3 py-1.5 text-muted-foreground">{x}</span>)}</div>
          <div className="grid md:grid-cols-3 gap-4">{c.signalCards.map((item, i) => <motion.a key={item.title} href={item.href} target="_blank" rel="noreferrer" {...fadeUp(i * .07)} className="group bg-card border border-border rounded-2xl p-7 min-h-56 flex flex-col hover:border-primary/45"><div className="flex items-center justify-between"><span className="text-[10px] font-mono tracking-[.15em] text-primary/70">{item.category}</span><ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary" /></div><div className="mt-auto"><h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3><p className="text-sm text-muted-foreground">{item.org}</p><span className="inline-block mt-5 text-xs text-primary">{c.signalCta}</span></div></motion.a>)}</div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-[1fr_.8fr] gap-16 lg:gap-28">
          <div><SectionHeader kicker={c.aboutKicker} title={c.aboutTitle} text={c.aboutText} /><div className="inline-flex border-s-2 border-primary ps-4 text-sm font-mono tracking-[.1em] text-white/70">{c.principle}</div></div>
          <motion.div {...fadeUp(.1)}><h3 className="text-sm font-mono tracking-[.17em] text-primary/70 mb-6">{c.foundersTitle}</h3><div className="border-y border-border">{c.founders.map(([name, role]) => <div key={name} className="flex items-center justify-between gap-6 py-6 border-b border-border last:border-0"><span className="text-xl text-white font-medium">{name}</span><span className="text-sm text-muted-foreground">{role}</span></div>)}</div></motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 md:px-12 bg-card border-y border-border">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row lg:items-end justify-between gap-10"><motion.div {...fadeUp()} className="max-w-3xl"><p className="text-[10px] font-mono tracking-[.2em] text-primary/70 mb-5">CONTACT / START A CONVERSATION</p><h2 className="text-4xl md:text-6xl font-semibold text-white">{c.contactTitle}</h2><p className="text-muted-foreground text-lg leading-8 mt-5">{c.contactText}</p></motion.div><motion.div {...fadeUp(.1)}><Button size="lg" asChild className="rounded-full px-7 py-6"><a href="mailto:suduum.space@gmail.com"><Mail className="w-4 h-4 me-2" />{c.contactCta}</a></Button></motion.div></div>
      </section>

      <footer className="px-6 md:px-12 py-10"><div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"><div><p className="text-white font-semibold tracking-[.16em]">SUDUUM</p><p className="text-xs text-muted-foreground mt-2">{c.footerLine}</p></div><div className="flex items-center gap-2"><a href="https://www.tiktok.com/@suduum" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary"><SiTiktok className="w-4 h-4" /></a><a href="https://www.instagram.com/suduum.space3/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary"><SiInstagram className="w-4 h-4" /></a><a href="https://x.com/Suduumspace" target="_blank" rel="noreferrer" aria-label="X" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary"><SiX className="w-4 h-4" /></a></div></div></footer>
    </div>
  );
}
