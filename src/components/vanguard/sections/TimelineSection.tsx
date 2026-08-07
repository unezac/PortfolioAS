"use client";

import { motion } from "framer-motion";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { useLanguage } from "@/i18n/LanguageContext";

const EXPERIENCES = [
  {
    id: "ibntofail",
    proofImage: "/certificates/media_1785962265633.png",
    proofLink: "/certificates/media_1785962265633.png" 
  },
  {
    id: "alx",
    proofImage: "/certificates/media_1785962211540.png",
    proofLink: "/certificates/ALX_Virtual_Assistant.pdf"
  },
  {
    id: "independent",
  },
];

export function TimelineSection() {
  const { t } = useLanguage();
  return (
    <section id="timeline" className="relative py-32 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-mono-label text-[var(--color-primary)] mb-4 block">{t("timeline.title")}</span>
          <h2 className="text-display-l text-[var(--color-text-primary)]">{t("timeline.subtitle")}</h2>
        </motion.div>

        <div className="flex flex-col">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-4 md:gap-16 py-10 border-t border-[var(--color-border-glass)] group"
            >
              <div className="w-full md:w-1/4 shrink-0 flex flex-col items-start">
                <span className="text-mono-label text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary)] transition-colors">
                  {t(`timeline.items.${(exp as any).id}.year`)}
                </span>
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-[var(--color-text-primary)] mb-2">{t(`timeline.items.${(exp as any).id}.role`)}</h3>
                    <p className="text-lg text-[var(--color-primary)] m-0">{t(`timeline.items.${(exp as any).id}.company`)}</p>
                  </div>
                  
                  {/* Button on the right side */}
                  {(exp as any).proofImage && (
                    <a 
                      href={(exp as any).proofImage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all bg-[var(--color-surface-solid)] hover:bg-[var(--color-border-glass)] px-4 py-2 rounded-full border border-[var(--color-border-glass)] glass-panel"
                    >
                      <ArrowSquareOut size={16} className="text-[var(--color-primary)]" />
                      {t("timeline.viewCertificate")}
                    </a>
                  )}
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">{t(`timeline.items.${(exp as any).id}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
