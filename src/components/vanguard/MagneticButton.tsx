"use client";

import { useRef, useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "glass" | "outline";
}

export function MagneticButton({
  children,
  icon,
  variant = "primary",
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-[#5B5FFB] text-white shadow-[0_0_40px_-10px_rgba(91,95,251,0.35)] hover:bg-[#7377FF] border border-white/10",
    glass: "glass-panel text-white hover:bg-white/10",
    outline: "border border-white/20 text-zinc-300 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex items-center justify-center gap-3 px-6 py-3 rounded-full font-medium transition-colors will-animate",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {icon && (
        <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/20 group-hover:bg-black/30 transition-colors">
          <motion.span
            className="flex items-center justify-center will-animate"
            variants={{
              initial: { x: 0, y: 0, scale: 1 },
              hover: { x: 4, y: -1, scale: 1.05 }
            }}
            initial="initial"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {icon}
          </motion.span>
        </span>
      )}
    </motion.button>
  );
}
