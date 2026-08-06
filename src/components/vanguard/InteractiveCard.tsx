"use client";

import { useRef, useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function InteractiveCard({ children, className, ...props }: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-5deg to +5deg)
    const rX = (mouseY / height - 0.5) * -10;
    const rY = (mouseX / width - 0.5) * 10;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative rounded-[2rem] bg-[#0A0A0A] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        className
      )}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      {...props}
    >
      {/* Glossy overlay effect for 3D realism */}
      <motion.div 
        className="absolute inset-0 z-20 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 will-animate transition-opacity duration-300"
        animate={{
          background: `radial-gradient(800px circle at ${rotateY * 10 + 50}% ${-rotateX * 10 + 50}%, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      <div className="relative z-10 w-full h-full transform-gpu" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
