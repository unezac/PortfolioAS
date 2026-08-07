"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "../SpotlightCard";
import { useLanguage } from "@/i18n/LanguageContext";

const CAPABILITIES = [
  {
    id: "ai",
    icon: "🧠",
  },
  {
    id: "backend",
    icon: "⚡",
  },
  {
    id: "software",
    icon: "🚀",
  },
  {
    id: "project",
    icon: "🔨",
  },
];

export function CapabilitiesSection() {
  const { t } = useLanguage();
  return (
    <section id="capabilities" className="relative py-32 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="text-mono-label text-[var(--color-primary)] mb-4 block">{t("capabilities.title")}</span>
            <h2 className="text-display-l text-[var(--color-text-primary)]">{t("capabilities.subtitle")}</h2>
          </div>
          <p className="max-w-md text-[var(--color-text-secondary)] text-lg leading-relaxed">
            {t("capabilities.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard className="h-full min-h-[250px] p-8 flex flex-col justify-between" spotlightColor="rgba(91,95,251,0.15)">
                <div className="text-4xl mb-8">{cap.icon}</div>
                <div>
                  <h3 className="text-2xl font-medium text-[var(--color-text-primary)] mb-3">{t(`capabilities.items.${(cap as any).id}.title`)}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                    {t(`capabilities.items.${(cap as any).id}.description`)}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
