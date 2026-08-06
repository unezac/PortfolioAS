"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const STACK = [
  { id: "programming", items: ["Python", "JavaScript", "TypeScript", "SQL", "PHP", "C"] },
  { id: "ai", items: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Fundamentals"] },
  { id: "backend", items: ["FastAPI", "REST APIs", "Software Architecture"] },
  { id: "frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { id: "databases", items: ["MySQL", "PostgreSQL", "Redis", "SQLite"] },
  { id: "tools", items: ["Git", "GitHub", "Docker", "Linux", "VS Code"] },
];

export function TechStackSection() {
  const { t } = useLanguage();
  return (
    <section id="stack" className="relative py-32 px-4 sm:px-6 border-t border-white/5">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-mono-label text-[#5B5FFB] mb-4 block">{t("stack.title")}</span>
          <h2 className="text-display-l text-white">{t("stack.subtitle")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {STACK.map((group, groupIndex) => (
            <motion.div
              key={(group as any).id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <h3 className="text-lg font-medium text-white mb-6 border-b border-white/10 pb-4">{t(`stack.categories.${(group as any).id}`)}</h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B5FFB]/50 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
