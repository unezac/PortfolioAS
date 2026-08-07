"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, GlobeHemisphereWest, Sun, Moon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "Arrival", href: "#arrival" },
  { label: "Identity", href: "#identity" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Featured Systems", href: "#systems" },
  { label: "Engineering Process", href: "#process" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setHidden(false);
        return;
      }

      const latest = window.scrollY;
      const previous = handleScroll.previous ?? 0;
      handleScroll.previous = latest;

      if (latest > previous && latest > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    handleScroll.previous = 0;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
      >
        <motion.nav
          initial={false}
          className={cn(
            "overflow-hidden shadow-2xl bg-black dark:bg-[#0A0A0A] ring-1 ring-white/10 dark:ring-white/5 transition-all duration-200 ease-out",
            isOpen ? "w-[320px] rounded-[24px]" : "w-[240px] rounded-[24px]"
          )}
        >
          <div className="flex items-center justify-between p-1.5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2 px-3"
              >
                <span className="text-sm font-semibold tracking-wide uppercase animated-gradient-text">
                  Abdellah Selmani
                </span>
              </motion.div>

            <motion.button
              layout="position"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors ml-auto shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <motion.div animate={{ rotate: 90 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <X size={18} weight="bold" className="text-white" />
                </motion.div>
              ) : (
                <div className="relative w-8 h-6 flex items-center justify-center">
                  <span
                    className="absolute w-7 h-[2px] bg-white rounded-full"
                    style={{ transform: "translateY(-7px)" }}
                  />
                  <span
                    className="absolute w-8 h-[2px] bg-white rounded-full"
                    style={{ transform: "translateY(0px)" }}
                  />
                  <span
                    className="absolute w-6 h-[2px] bg-white rounded-full"
                    style={{ transform: "translateY(7px)" }}
                  />
                </div>
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="px-6 pb-6 pt-2 origin-top overflow-hidden"
              >
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ delay: i * 0.02 + 0.04, duration: 0.18, ease: "easeOut" }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-xl font-medium text-zinc-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile Controls */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ delay: NAV_LINKS.length * 0.02 + 0.05, duration: 0.18, ease: "easeOut" }}
                  className="flex sm:hidden items-center justify-between mt-6 pt-6 border-t border-white/10"
                >
                  <button
                    onClick={() => { toggleTheme(); setIsOpen(false); }}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    {mounted && resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    {mounted && resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
                  </button>
                  <button
                    onClick={() => { toggleLanguage(); setIsOpen(false); }}
                    className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <GlobeHemisphereWest size={18} />
                    <span className="uppercase">{language}</span>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>
      
      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
