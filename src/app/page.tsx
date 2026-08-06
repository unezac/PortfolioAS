"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Navigation } from "@/components/vanguard/Navigation";
import { ArrivalSection } from "@/components/vanguard/sections/ArrivalSection";

// Lazy load sections below the fold for maximum Lighthouse score
const IdentitySection = dynamic(() => import("@/components/vanguard/sections/IdentitySection").then(mod => mod.IdentitySection), { ssr: true });
const CapabilitiesSection = dynamic(() => import("@/components/vanguard/sections/CapabilitiesSection").then(mod => mod.CapabilitiesSection), { ssr: true });
const FeaturedSystemsSection = dynamic(() => import("@/components/vanguard/sections/FeaturedSystemsSection").then(mod => mod.FeaturedSystemsSection), { ssr: true });
const EngineeringProcessSection = dynamic(() => import("@/components/vanguard/sections/EngineeringProcessSection").then(mod => mod.EngineeringProcessSection), { ssr: true });
const TechStackSection = dynamic(() => import("@/components/vanguard/sections/TechStackSection").then(mod => mod.TechStackSection), { ssr: true });
const TimelineSection = dynamic(() => import("@/components/vanguard/sections/TimelineSection").then(mod => mod.TimelineSection), { ssr: true });
const ContactSection = dynamic(() => import("@/components/vanguard/sections/ContactSection").then(mod => mod.ContactSection), { ssr: true });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen selection:bg-[#5B5FFB]/20 selection:text-white">
      <Navigation />

      <main className="relative z-10 w-full overflow-hidden">
        <ArrivalSection />
        <IdentitySection />
        <CapabilitiesSection />
        <FeaturedSystemsSection />
        <EngineeringProcessSection />
        <TechStackSection />
        <TimelineSection />
        <ContactSection />
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-500">Abdellah Selmani</p>
            <p className="mt-2 text-sm text-zinc-600">Designed & Engineered in 2026. Vanguard Edition.</p>
          </div>

          <div className="flex flex-wrap gap-6 text-[10px] font-mono uppercase tracking-[0.18em]">
            <a href="https://linkedin.com/in/abdellahselmani" className="text-zinc-500 hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/unezac" className="text-zinc-500 hover:text-white transition-colors duration-300">GitHub</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
