"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
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
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isOpen) {
      setHidden(false);
      return;
    }
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
          layout
          initial={false}
          animate={{
            width: isOpen ? 320 : "auto",
            borderRadius: isOpen ? 32 : 999,
          }}
          transition={{ type: "spring", stiffness: 450, damping: 32, mass: 0.6 }}
          className="overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] bg-black dark:bg-[#0A0A0A] ring-1 ring-white/10 dark:ring-white/5"
        >
          <motion.div layout className="flex items-center justify-between px-2 py-2">
            {!isOpen && (
              <motion.div
                layout="position"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 px-4"
              >
                {/* Mobile: Initials, Desktop: Full Name */}
                <span className="text-sm font-medium tracking-wide text-white whitespace-nowrap">
                  <span className="sm:hidden font-bold">AS</span>
                  <span className="hidden sm:inline">Abdellah Selmani</span>
                </span>
              </motion.div>
            )}

            <motion.button
              layout
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors ml-auto"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <X size={18} weight="bold" className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-8 h-6 flex items-center justify-center"
                >
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
                </motion.div>
              )}
            </motion.button>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                layout
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="px-6 pb-6 pt-2 origin-top"
              >
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{ delay: i * 0.04 + 0.1, type: "spring", stiffness: 300, damping: 20 }}
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
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
                  transition={{ delay: NAV_LINKS.length * 0.04 + 0.1, type: "spring" }}
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
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
