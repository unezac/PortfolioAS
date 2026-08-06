"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../GlassCard";
import { useLanguage } from "@/i18n/LanguageContext";

const STEPS = [
  { num: "01" },
  { num: "02" },
  { num: "03" },
  { num: "04" }
];

export function EngineeringProcessSection() {
  const { t } = useLanguage();
  return (
    <section id="process" className="relative py-32 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-mono-label text-[#5B5FFB] mb-4 block">{t("process.title")}</span>
          <h2 className="text-display-l text-white">{t("process.subtitle")}</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[1.5rem] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12 md:gap-24">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Left Side (Empty for odd, Content for even on Desktop) */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16 order-last md:order-first md:invisible"}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                      >
                        <GlassCard>
                          <span className="text-mono-label text-[#5B5FFB] mb-4 block">Phase {step.num}</span>
                          <h3 className="text-2xl font-medium text-white mb-3">{t(`process.steps.${step.num}.title`)}</h3>
                          <p className="text-zinc-400 text-sm leading-relaxed">{t(`process.steps.${step.num}.text`)}</p>
                        </GlassCard>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-white/10 bg-[#0A0A0A] flex items-center justify-center z-10 hidden md:flex">
                    <span className="text-xs font-mono text-zinc-500">{step.num}</span>
                  </div>

                  {/* Right Side (Content for odd, Empty for even on Desktop) */}
                  <div className={`w-full md:w-1/2 flex ${!isEven ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16 md:invisible"}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                      >
                        <GlassCard>
                          <span className="text-mono-label text-[#5B5FFB] mb-4 block">Phase {step.num}</span>
                          <h3 className="text-2xl font-medium text-white mb-3">{t(`process.steps.${step.num}.title`)}</h3>
                          <p className="text-zinc-400 text-sm leading-relaxed">{t(`process.steps.${step.num}.text`)}</p>
                        </GlassCard>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Mobile Fallback Rendering */}
                  <div className="w-full md:hidden mt-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <GlassCard>
                        <span className="text-mono-label text-[#5B5FFB] mb-4 block">Phase {step.num}</span>
                        <h3 className="text-2xl font-medium text-white mb-3">{t(`process.steps.${step.num}.title`)}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{t(`process.steps.${step.num}.text`)}</p>
                      </GlassCard>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
