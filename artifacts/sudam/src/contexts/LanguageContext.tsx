import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/i18n/translations";

type Language = "ar" | "en";
type Direction = "rtl" | "ltr";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: Direction;
  t: (key: keyof typeof translations.ar) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ar"); // Default to Arabic
  const dir: Direction = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (key: keyof typeof translations.ar) => {
    return translations[lang][key];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
