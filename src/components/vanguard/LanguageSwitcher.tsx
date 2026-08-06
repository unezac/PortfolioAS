"use client";

import { useLanguage } from "../../i18n/LanguageContext";
import { GlobeHemisphereWest } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors shadow-xl"
    >
      <GlobeHemisphereWest weight="bold" size={16} className="text-[#5B5FFB]" />
      <span className="uppercase tracking-widest">{language}</span>
    </motion.button>
  );
}
