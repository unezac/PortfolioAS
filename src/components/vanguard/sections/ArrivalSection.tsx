"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkle, FileText } from "@phosphor-icons/react";
import { AnimatedLine } from "../AnimatedLine";
import { MagneticButton } from "../MagneticButton";
import { Smooth3DSlideshow } from "../Smooth3DSlideshow";
import { useLanguage } from "@/i18n/LanguageContext";

export function ArrivalSection() {
  const { t } = useLanguage();
  return (
    <section id="arrival" className="relative min-h-[100dvh] flex flex-col justify-start md:justify-center pt-32 md:pt-24 pb-12 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="col-span-1 md:col-span-7 lg:col-span-6 z-10">
            {/* Floating Status */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 glass-panel mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B5FFB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5B5FFB]"></span>
              </span>
              <span className="text-mono-label text-[var(--color-text-primary)]">{t("arrival.status")}</span>
            </motion.div>

            {/* Huge Name */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)", y: 40 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-display-xl text-[var(--color-text-primary)]">
                <span className="block text-[var(--color-text-secondary)]">{t("arrival.firstName")}</span>
                <span className="block">{t("arrival.lastName")}</span>
              </h1>
            </motion.div>

            {/* Animated Gradient Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="w-full max-w-2xl origin-left mb-8"
            >
              <AnimatedLine />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10"
            >
              {t("arrival.description")}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <div onClick={() => document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' })}>
                <MagneticButton icon={<ArrowRight weight="bold" size={16} />}>
                  {t("arrival.exploreSystems")}
                </MagneticButton>
              </div>
              <div onClick={() => window.open('/Abdellah_Selmani_CV.pdf', '_blank')}>
                <MagneticButton variant="glass" icon={<FileText weight="bold" size={16} />}>
                  {t("arrival.downloadCV")}
                </MagneticButton>
              </div>
              <div onClick={() => document.getElementById('identity')?.scrollIntoView({ behavior: 'smooth' })}>
                <MagneticButton variant="glass" icon={<Sparkle weight="bold" size={16} />}>
                  {t("arrival.viewPhilosophy")}
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          {/* Right Column - 3D Slideshow */}
          <div className="col-span-1 md:col-span-5 lg:col-span-6 relative z-0 flex items-center justify-center mt-16 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full min-h-[450px] relative pointer-events-auto"
            >
              <Smooth3DSlideshow />
            </motion.div>
          </div>
        </div>

      </div>

      {/* Cinematic Visual Asset (Background Glow) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[40rem] pointer-events-none opacity-20 z-0 mix-blend-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[var(--color-primary-glow)] to-transparent blur-3xl animate-[spin_40s_linear_infinite]" />
      </motion.div>
    </section>
  );
}
