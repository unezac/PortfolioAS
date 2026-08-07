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
    primary: "bg-[var(--color-primary)] text-white shadow-[0_0_40px_-10px_var(--color-primary-glow)] hover:bg-[var(--color-primary-hover)] border border-[var(--color-border-glass)]",
    glass: "glass-panel text-[var(--color-text-primary)] hover:bg-[var(--color-border-glass)]",
    outline: "border border-[var(--color-border-glass)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border-glass)]",
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
