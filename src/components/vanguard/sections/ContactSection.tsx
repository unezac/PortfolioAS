"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import { MagneticButton } from "../MagneticButton";
import { InteractiveCard } from "../InteractiveCard";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 mb-32">
      <div className="w-full max-w-6xl mx-auto">
        <InteractiveCard className="overflow-hidden">
          <div className="relative p-8 md:p-16 lg:p-24 flex flex-col items-center text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <span className="text-mono-label text-[#5B5FFB] mb-6 block">{t("contact.title")}</span>
              <h2 className="text-display-l text-white mb-6">{t("contact.subtitle")}</h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                {t("contact.description")}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <MagneticButton icon={<ArrowUpRight weight="bold" size={16} />}>
                  {t("contact.email")}
                </MagneticButton>
              </div>

              <div className="flex items-center justify-center gap-6">
                <a href="https://github.com/unezac" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-zinc-500 hover:text-white transition-colors duration-300">
                  <GithubLogo size={28} weight="duotone" />
                </a>
                <a href="https://linkedin.com/in/abdellahselmani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-zinc-500 hover:text-white transition-colors duration-300">
                  <LinkedinLogo size={28} weight="duotone" />
                </a>
                <a href="https://x.com/uneizac_" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-zinc-500 hover:text-white transition-colors duration-300">
                  <TwitterLogo size={28} weight="duotone" />
                </a>
              </div>
            </motion.div>

            {/* Cinematic Background effect inside the card */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#5B5FFB]/10 to-transparent opacity-50 blur-3xl mix-blend-screen rounded-full" />
            </div>

          </div>
        </InteractiveCard>
      </div>
    </section>
  );
}
