"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "./dictionaries/en.json";
import de from "./dictionaries/de.json";

export type Language = "en" | "de";

type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionaries = {
  en,
  de,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "de")) {
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "de" : "en";
    setLanguage(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = dictionaries[language];
    for (const key of keys) {
      if (current[key] === undefined) {
        return path; // Fallback to key if missing
      }
      current = current[key];
    }
    return current;
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return a dummy context during initial SSR to avoid breaking layout
    return {
      language: "en" as Language,
      toggleLanguage: () => {},
      t: (key: string) => {
        // Simple fallback for initial SSR
        const keys = key.split(".");
        let current: any = en;
        for (const k of keys) {
          if (current[k] === undefined) return key;
          current = current[k];
        }
        return current;
      },
    };
  }
  return context;
};
