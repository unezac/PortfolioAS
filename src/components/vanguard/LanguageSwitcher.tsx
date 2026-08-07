"use client";

import { useLanguage } from "../../i18n/LanguageContext";
import { GlobeHemisphereWest, Sun, Moon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed top-6 right-6 z-50 hidden sm:flex items-center gap-2">
      {mounted && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 bg-[var(--color-surface-glass)] backdrop-blur-xl border border-[var(--color-border-glass)] rounded-full text-[var(--color-text-primary)] hover:bg-[var(--color-border-highlight)] transition-colors shadow-xl"
        >
          {resolvedTheme === "dark" ? (
            <Sun weight="bold" size={16} className="text-[var(--color-primary)]" />
          ) : (
            <Moon weight="bold" size={16} className="text-[var(--color-primary)]" />
          )}
        </motion.button>
      )}

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={toggleLanguage}
        className="flex items-center gap-2 bg-[var(--color-surface-glass)] backdrop-blur-xl border border-[var(--color-border-glass)] px-4 h-10 rounded-full text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-border-highlight)] transition-colors shadow-xl"
      >
        <GlobeHemisphereWest weight="bold" size={16} className="text-[var(--color-primary)]" />
        <span className="uppercase tracking-widest">{language}</span>
      </motion.button>
    </div>
  );
}
