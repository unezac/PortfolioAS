"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { InteractiveCard } from "../InteractiveCard";
import { useLanguage } from "@/i18n/LanguageContext";

const SYSTEMS = [
  {
    id: "moneybott",
    name: "MoneyBott",
    year: "2024",
    tech: ["Python", "FastAPI", "AI Fundamentals", "Backend Architecture"],
    link: "https://github.com/unezac/moneybott",
  },
  {
    id: "keygermany",
    name: "KeyGermany",
    year: "2023",
    tech: ["Next.js", "React", "Node.js", "Databases"],
    link: "https://github.com/unezac",
  },
  {
    id: "fastytdl",
    name: "FastYTDL",
    year: "2022",
    tech: ["Python", "Desktop Architecture", "Automation"],
    link: "https://github.com/unezac",
  },
  {
    id: "hannymoney",
    name: "HannyMoney",
    year: "2022",
    tech: ["Web Development", "React", "Frontend", "APIs"],
    link: "https://github.com/unezac",
  }
];

export function FeaturedSystemsSection() {
  const { t } = useLanguage();
  return (
    <section id="systems" className="relative py-32 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-mono-label text-[#5B5FFB] mb-4 block">{t("systems.title")}</span>
          <h2 className="text-display-l text-white">{t("systems.subtitle")}</h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {SYSTEMS.map((system, index) => (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <InteractiveCard className="group overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-full min-h-[400px]">
                  
                  {/* Info Panel */}
                  <div className="col-span-1 lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <span className="text-mono-label text-zinc-500">{system.year}</span>
                        <a href={system.link} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white group-hover:scale-110 duration-300">
                          <ArrowUpRight size={20} weight="bold" />
                        </a>
                      </div>
                      <h3 className="text-4xl font-medium text-white mb-2">{system.name}</h3>
                      <p className="text-zinc-500 text-sm mb-6">{t(`systems.items.${system.id}.role`)}</p>
                      <p className="text-zinc-400 leading-relaxed">
                        {t(`systems.items.${system.id}.description`)}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-8">
                      {system.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 font-medium tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Visual Panel (Cinematic Abstract Representation instead of a Dashboard UI) */}
                  <div className="col-span-1 lg:col-span-7 relative bg-[#050505] overflow-hidden min-h-[300px] flex items-center justify-center p-8">
                    {/* Abstract Hardware/System aesthetic */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(91,95,251,0.4),transparent_70%)] mix-blend-screen group-hover:opacity-40 transition-opacity duration-700" />
                    
                    <div className="relative w-full max-w-sm aspect-square border border-white/10 rounded-full flex items-center justify-center">
                      <div className="absolute inset-0 border border-white/5 rounded-full scale-75 animate-[spin_10s_linear_infinite]" />
                      <div className="absolute inset-0 border border-dashed border-white/10 rounded-full scale-110 animate-[spin_20s_linear_infinite_reverse]" />
                      <div className="w-1/2 h-1/2 bg-gradient-to-tr from-[#5B5FFB] to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                    </div>
                  </div>
                  
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
