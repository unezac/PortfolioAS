"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

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

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
        <motion.nav
          initial={false}
          animate={{
            width: isOpen ? "320px" : "auto",
            borderRadius: isOpen ? "28px" : "999px",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.8 }}
          className={cn(
            "glass-panel overflow-hidden transition-colors duration-500",
            isOpen ? "bg-[#0A0A0A]/90" : "bg-[#0A0A0A]/50"
          )}
        >
          <div className="flex items-center justify-between px-2 py-2">
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="px-4 text-sm font-medium tracking-wide text-zinc-300 whitespace-nowrap"
              >
                Abdellah Selmani
              </motion.div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors ml-auto"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 0 : -4,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute w-5 h-[1.5px] bg-white origin-center"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 0 : 4,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute w-5 h-[1.5px] bg-white origin-center"
                />
              </div>
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="px-6 pb-6 pt-2"
              >
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: i * 0.04, type: "spring", stiffness: 300, damping: 20 }}
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
      
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
