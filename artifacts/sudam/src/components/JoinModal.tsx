import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Send, ExternalLink, CheckCircle2, Loader2, AlertCircle, ChevronRight } from "lucide-react";
import { SiX, SiWhatsapp } from "react-icons/si";
import { useState, useEffect } from "react";
import { useJoinModal } from "@/contexts/JoinModalContext";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Talent application form ── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  field: string;
  attraction: string;
  contribution: string;
  links: string;
}

interface FieldErrors {
  email?: string;
  phone?: string;
}

function FoundingOrbitForm({
  isAr,
  onBack,
  onClose,
}: {
  isAr: boolean;
  onBack: () => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", field: "", attraction: "", contribution: "", links: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [k]: e.target.value }));
    if (k === "email" || k === "phone") setFieldErrors(fe => ({ ...fe, [k]: undefined }));
  };

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^\+?[\d\s\-().]{7,20}$/;

  const validateField = (key: "email" | "phone", value: string): string | undefined => {
    if (key === "email") {
      return emailRe.test(value.trim()) ? undefined : (isAr ? "أدخل بريداً إلكترونياً صحيحاً" : "Enter a valid email address");
    }
    return phoneRe.test(value.trim()) ? undefined : (isAr ? "أدخل رقم جوال صحيحاً" : "Enter a valid phone number");
  };

  const handleBlur = (key: "email" | "phone") => {
    if (form[key].trim()) {
      setFieldErrors(fe => ({ ...fe, [key]: validateField(key, form[key]) }));
    }
  };

  const validate = (): boolean => {
    const errors: FieldErrors = {
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone),
    };
    const filtered: FieldErrors = Object.fromEntries(Object.entries(errors).filter(([, v]) => v));
    setFieldErrors(filtered);
    return Object.keys(filtered).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.field.trim() || !form.attraction.trim() || !form.contribution.trim()) return;
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang: isAr ? "ar" : "en" }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  /* ── Success screen ── */
  if (status === "success") {
    return (
      <motion.div
        className="flex flex-col items-center justify-center gap-5 py-10 px-4 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
          <CheckCircle2 className="text-primary w-7 h-7" />
        </div>
        <div>
          <h3 className={`text-xl font-bold text-white mb-2 ${isAr ? "font-['SaudiFont']" : ""}`}>
            {isAr ? "وصل طلبك" : "Application Received"}
          </h3>
          <p className={`text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto ${isAr ? "font-['SaudiFont']" : ""}`}>
            {isAr
              ? "سنراجع طلبك بعناية وسنتواصل معك قريباً."
              : "We'll review your application carefully and be in touch soon."}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
          <button
            onClick={onBack}
            className={`flex-1 py-2.5 rounded-2xl border border-border text-muted-foreground text-sm hover:text-white hover:border-white/20 transition-colors ${isAr ? "font-['SaudiFont']" : ""}`}
          >
            {isAr ? "العودة للخيارات" : "Back to options"}
          </button>
          <button
            onClick={onClose}
            className={`flex-1 py-2.5 rounded-2xl bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity ${isAr ? "font-['SaudiFont']" : ""}`}
          >
            {isAr ? "إغلاق" : "Close"}
          </button>
        </div>
      </motion.div>
    );
  }

  const fields: {
    key: keyof FormData;
    label: string;
    labelEn: string;
    placeholder: string;
    placeholderEn: string;
    type?: string;
    textarea?: boolean;
    required?: boolean;
  }[] = [
    {
      key: "name",
      label: "الاسم الكامل",
      labelEn: "Full name",
      placeholder: "اسمك",
      placeholderEn: "Your name",
      required: true,
    },
    {
      key: "email",
      label: "البريد الإلكتروني",
      labelEn: "Email address",
      placeholder: "example@email.com",
      placeholderEn: "example@email.com",
      type: "email",
      required: true,
    },
    {
      key: "phone",
      label: "رقم الجوال",
      labelEn: "Phone number",
      placeholder: "+966 5X XXX XXXX",
      placeholderEn: "+966 5X XXX XXXX",
      type: "tel",
      required: true,
    },
    {
      key: "field",
      label: "مجالك أو تخصصك",
      labelEn: "Your field / specialization",
      placeholder: "هندسة، فيزياء، تصميم…",
      placeholderEn: "Engineering, Physics, Design…",
      required: true,
    },
    {
      key: "attraction",
      label: "ما القدرة أو الإنجاز الذي يثبت جاهزيتك؟",
      labelEn: "What demonstrated capability or work best represents you?",
      placeholder: "صف مشروعًا، إنجازًا، أو خبرة عملية…",
      placeholderEn: "Describe a project, achievement, or practical experience…",
      textarea: true,
      required: true,
    },
    {
      key: "contribution",
      label: "ما نوع التحديات أو المشاريع التي تستطيع العمل عليها؟",
      labelEn: "What kinds of challenges or projects can you work on?",
      placeholder: "المخرجات أو المشكلات التي تستطيع التعامل معها…",
      placeholderEn: "The outputs or problems you are equipped to address…",
      textarea: true,
      required: true,
    },
    {
      key: "links",
      label: "ملف أعمال أو روابط مهنية (اختياري)",
      labelEn: "Portfolio or professional links (optional)",
      placeholder: "Portfolio، LinkedIn، GitHub…",
      placeholderEn: "Portfolio, LinkedIn, GitHub…",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: isAr ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Back */}
      <button
        type="button"
        onClick={onBack}
        className={`flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm mb-6 ${isAr ? "font-['SaudiFont']" : ""}`}
      >
        {isAr ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
        {isAr ? "رجوع" : "Back"}
      </button>

      {/* Title */}
      <div className="mb-5">
        <h3 className={`text-lg font-bold text-white mb-1 ${isAr ? "font-['SaudiFont']" : ""}`}>
          {isAr ? "طلب الانضمام للمواهب" : "Talent Application"}
        </h3>
        <p className={`text-muted-foreground text-sm leading-relaxed ${isAr ? "font-['SaudiFont']" : ""}`}>
          {isAr
            ? "نبحث عن أشخاص لديهم قدرة مثبتة وجاهزية لتطبيقها على تحديات ومشاريع حقيقية."
            : "For people with demonstrated capability, ready to apply it to real challenges and projects."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map(f => {
          const hasError = f.key === "email" || f.key === "phone" ? fieldErrors[f.key] : undefined;
          const isContactField = f.key === "email" || f.key === "phone";
          return (
            <div key={f.key}>
              <label
                className={`block text-sm font-medium text-white/80 mb-1.5 ${isAr ? "font-['SaudiFont']" : ""}`}
              >
                {isAr ? f.label : f.labelEn}
                {f.required && <span className="text-primary ms-1">*</span>}
              </label>
              {f.textarea ? (
                <textarea
                  value={form[f.key]}
                  onChange={set(f.key)}
                  placeholder={isAr ? f.placeholder : f.placeholderEn}
                  rows={3}
                  className={`w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none ${isAr ? "font-['SaudiFont'] text-right" : ""}`}
                  required={f.required}
                />
              ) : (
                <input
                  type={f.type ?? "text"}
                  value={form[f.key]}
                  onChange={set(f.key)}
                  onBlur={isContactField ? () => handleBlur(f.key as "email" | "phone") : undefined}
                  placeholder={isAr ? f.placeholder : f.placeholderEn}
                  dir={isContactField ? "ltr" : (isAr ? "rtl" : "ltr")}
                  className={`w-full bg-background border-2 rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none transition-colors ${hasError ? "border-red-500 bg-red-500/5" : "border-border focus:border-primary/50"} ${!isContactField && isAr ? "font-['SaudiFont'] text-right" : "text-left"}`}
                  required={f.required}
                />
              )}
              {hasError && (
                <p className={`mt-1.5 text-xs text-red-400 flex items-center gap-1.5 ${isAr ? "font-['SaudiFont']" : ""}`}>
                  <AlertCircle size={12} className="shrink-0" />
                  {hasError}
                </p>
              )}
            </div>
          );
        })}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm ${isAr ? "font-['SaudiFont']" : ""}`}
          >
            <AlertCircle size={14} className="shrink-0" />
            {isAr ? "حدث خطأ. يرجى المحاولة مجدداً." : "Something went wrong. Please try again."}
          </motion.div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className={`w-full mt-1 flex items-center justify-center gap-2.5 py-3 rounded-2xl bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 ${isAr ? "font-['SaudiFont']" : ""}`}
        >
          {status === "sending" ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Send size={14} />
          )}
          {status === "sending"
            ? (isAr ? "جارٍ الإرسال…" : "Sending…")
            : (isAr ? "تقديم الطلب" : "Submit Application")}
        </button>
      </form>
    </motion.div>
  );
}

/* ── Main Modal ── */
export function JoinModal() {
  const { isOpen, closeModal } = useJoinModal();
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const [view, setView] = useState<"main" | "founding">("main");

  /* reset view when modal closes */
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setView("main"), 300);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [isOpen]);

  /* Escape key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Dialog */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl shadow-black/50"
              initial={{ scale: 0.95, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 16, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={e => e.stopPropagation()}
              dir={isAr ? "rtl" : "ltr"}
            >
              {/* Subtle top glow — matches site hero glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              {/* Close button — always visible */}
              <button
                onClick={closeModal}
                className="absolute top-4 end-4 z-20 w-8 h-8 rounded-full bg-muted/60 border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:bg-muted transition-all"
                aria-label={isAr ? "إغلاق" : "Close"}
              >
                <X size={14} />
              </button>

              <div className="relative p-6 sm:p-7">
                <AnimatePresence mode="wait">
                  {view === "main" ? (
                    <motion.div
                      key="main"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: isAr ? 16 : -16 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className="mb-7">
                        <h2 className={`text-2xl font-bold text-white mb-1.5 ${isAr ? "font-['SaudiFont']" : ""}`}>
                          {isAr
                            ? <>مسارات المواهب <span className="text-primary text-sm">//</span></>
                            : <><span className="text-primary text-sm">//</span> Talent Pathways</>}
                        </h2>
                        <p className={`text-muted-foreground text-sm leading-relaxed ${isAr ? "font-['SaudiFont']" : ""}`}>
                          {isAr
                            ? "قدّم بقدرتك، أو انضم إلى شبكة سُدم لمتابعة الفرص."
                            : "Apply with your capability, or join the SUDUUM Network for updates."}
                        </p>
                      </div>

                      {/* Option 1 — Stay Connected */}
                      <div className="rounded-2xl border border-border bg-background/50 p-5 mb-3">
                        <h3 className={`text-base font-semibold text-white mb-1 ${isAr ? "font-['SaudiFont']" : ""}`}>
                          {isAr ? "شبكة سُدم" : "SUDUUM Network"}
                        </h3>
                        <p className={`text-muted-foreground text-sm mb-4 leading-relaxed ${isAr ? "font-['SaudiFont']" : ""}`}>
                          {isAr
                            ? "طبقة ثانوية لمتابعة الفرص والمستجدات المرتبطة بمنظومة المواهب."
                            : "A secondary layer for talent opportunities and sector updates."}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2.5">
                          <a
                            href="https://chat.whatsapp.com/EBfTQYgNtXXB8Axq9BPZd6"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/15 hover:border-[#25D366]/35 transition-colors"
                          >
                            <SiWhatsapp size={15} />
                            <span className={isAr ? "font-['SaudiFont']" : ""}>{isAr ? "واتساب" : "WhatsApp"}</span>
                            <ExternalLink size={10} className="opacity-40" />
                          </a>
                          <a
                            href="https://x.com/Suduumspace"
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-muted/50 border border-border text-muted-foreground text-sm font-medium hover:text-white hover:border-white/20 transition-colors"
                          >
                            <SiX size={13} />
                            <span>X / Twitter</span>
                            <ExternalLink size={10} className="opacity-40" />
                          </a>
                        </div>
                      </div>

                      {/* Option 2 — Talent application */}
                      <button
                        onClick={() => setView("founding")}
                        className="w-full text-start rounded-2xl border border-primary/25 bg-primary/5 p-5 hover:bg-primary/8 hover:border-primary/40 transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className={`text-base font-semibold text-white mb-1 ${isAr ? "font-['SaudiFont']" : ""}`}>
                              {isAr ? "التقديم بقدرتك" : "Talent Application"}
                            </h3>
                            <p className={`text-muted-foreground text-sm leading-relaxed ${isAr ? "font-['SaudiFont']" : ""}`}>
                              {isAr
                                ? "للأشخاص ذوي القدرة المثبتة في الهندسة، العلوم، البيانات، البرمجيات، الأعمال، السياسات وغيرها."
                                : "For demonstrated talent across engineering, science, data, software, business, policy, and more."}
                            </p>
                            <span className={`inline-flex items-center gap-1 mt-3 text-xs font-medium text-primary group-hover:gap-2 transition-all ${isAr ? "font-['SaudiFont']" : ""}`}>
                              {isAr ? "تقديم الطلب" : "Apply now"}
                              {isAr ? <ArrowLeft size={11} /> : <ChevronRight size={11} />}
                            </span>
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="founding"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FoundingOrbitForm
                        isAr={isAr}
                        onBack={() => setView("main")}
                        onClose={closeModal}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
