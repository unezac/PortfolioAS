"use client";

import { motion } from "framer-motion";

export function AnimatedLine({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px w-full overflow-hidden bg-white/5 ${className}`}>
      <motion.div
        className="absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#5B5FFB] to-transparent"
        animate={{
          x: ["-100%", "300%"],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
