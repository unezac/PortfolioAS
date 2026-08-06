"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "../SpotlightCard";
import { InteractiveCard } from "../InteractiveCard";
import { GlassCard } from "../GlassCard";
import { useLanguage } from "@/i18n/LanguageContext";

export function IdentitySection() {
  const { t } = useLanguage();
  return (
    <section id="identity" className="relative py-32 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-mono-label text-[#5B5FFB] mb-4 block">{t("identity.title")}</span>
          <h2 className="text-display-l text-white">{t("identity.subtitle")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Bio Card */}
          <div className="col-span-1 md:col-span-8">
            <InteractiveCard className="h-full p-8 min-h-[400px] flex flex-col justify-end">
              <h3 className="text-3xl font-medium text-white mb-4">{t("identity.bioTitle")}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                {t("identity.bioText")}
              </p>
            </InteractiveCard>
          </div>

          {/* Location and Languages Column */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
            <SpotlightCard className="flex-1 min-h-[190px] flex flex-col justify-center" spotlightColor="rgba(91,95,251,0.2)">
              <div className="text-mono-label text-zinc-500 mb-4">{t("identity.currentNode")}</div>
              <div>
                <div className="text-white text-xl font-medium mb-1">{t("identity.location")}</div>
                <div className="text-zinc-400 text-sm">{t("identity.locationStatus")}</div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="flex-1 min-h-[190px] flex flex-col justify-center" spotlightColor="rgba(91,95,251,0.2)">
              <div className="text-mono-label text-zinc-500 mb-4">{t("identity.spokenLanguagesTitle")}</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B5FFB] mr-2"></span>
                  <span className="text-white font-medium">{t("identity.spokenLanguages.ar")}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mr-2"></span>
                  <span className="text-zinc-300">{t("identity.spokenLanguages.en")}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mr-2"></span>
                  <span className="text-zinc-300">{t("identity.spokenLanguages.de")}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mr-2"></span>
                  <span className="text-zinc-300">{t("identity.spokenLanguages.fr")}</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Philosophy Highlights */}
          <div className="col-span-1 md:col-span-4">
            <GlassCard className="h-full min-h-[300px]">
              <div className="text-mono-label text-[#5B5FFB] mb-8">{t("identity.focus1")}</div>
              <h4 className="text-xl font-medium text-white mb-2">{t("identity.focus1Title")}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {t("identity.focus1Text")}
              </p>
            </GlassCard>
          </div>

          <div className="col-span-1 md:col-span-4">
            <GlassCard className="h-full min-h-[300px]">
              <div className="text-mono-label text-[#5B5FFB] mb-8">{t("identity.focus2")}</div>
              <h4 className="text-xl font-medium text-white mb-2">{t("identity.focus2Title")}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {t("identity.focus2Text")}
              </p>
            </GlassCard>
          </div>

          <div className="col-span-1 md:col-span-4">
            <GlassCard className="h-full min-h-[300px]">
              <div className="text-mono-label text-[#5B5FFB] mb-8">{t("identity.focus3")}</div>
              <h4 className="text-xl font-medium text-white mb-2">{t("identity.focus3Title")}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {t("identity.focus3Text")}
              </p>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
