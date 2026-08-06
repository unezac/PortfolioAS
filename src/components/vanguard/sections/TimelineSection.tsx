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
          <span className="text-mono-label text-[#5B5FFB] mb-4 block">{t("timeline.title")}</span>
          <h2 className="text-display-l text-white">{t("timeline.subtitle")}</h2>
        </motion.div>

        <div className="flex flex-col">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-4 md:gap-16 py-10 border-t border-white/5 group"
            >
              <div className="w-full md:w-1/4 shrink-0 flex flex-col items-start">
                <span className="text-mono-label text-zinc-500 group-hover:text-[#5B5FFB] transition-colors">
                  {t(`timeline.items.${(exp as any).id}.year`)}
                </span>
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-2">{t(`timeline.items.${(exp as any).id}.role`)}</h3>
                    <p className="text-lg text-[#5B5FFB] m-0">{t(`timeline.items.${(exp as any).id}.company`)}</p>
                  </div>
                  
                  {/* Button on the right side */}
                  {(exp as any).proofImage && (
                    <a 
                      href={(exp as any).proofImage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 glass-panel"
                    >
                      <ArrowSquareOut size={16} className="text-[#5B5FFB]" />
                      {t("timeline.viewCertificate")}
                    </a>
                  )}
                </div>
                <p className="text-zinc-400 leading-relaxed max-w-2xl">{t(`timeline.items.${(exp as any).id}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
