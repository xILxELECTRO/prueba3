"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight, Aperture } from "lucide-react";

export interface MenuItem {
  label: string;
  link: string;
}

interface StaggeredMenuProps {
  items: MenuItem[];
  menuButtonColor?: string;
  accentColor?: string;
}

const MenuItemRow = ({ 
  item, 
  index, 
  onClick, 
  onHover, 
  isHovered 
}: { 
  item: MenuItem, 
  index: number, 
  onClick: () => void, 
  onHover: (i: number | null) => void,
  isHovered: boolean
}) => {
  const [displayText, setDisplayText] = useState(item.label);
  const chars = "ABCDEF0123456789_@#&%";

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(item.label);
      return;
    }
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        item.label.split("").map((letter, i) => {
            if (i < iterations) return item.label[i];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
      );
      if (iterations >= item.label.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 30);
    return () => clearInterval(interval);
  }, [isHovered, item.label]);

  return (
    <motion.a
      href={item.link}
      onClick={onClick}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative flex items-center justify-between px-6 py-5 z-20 transition-colors group"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 + index * 0.1 }}
    >
      <div className="flex items-center gap-4">
        <span className={`text-[9px] font-mono transition-colors duration-300 ${isHovered ? 'text-purple-600' : 'text-slate-400'}`}>
          0{index + 1}
        </span>
        <span className={`text-lg font-black tracking-tight uppercase transition-colors duration-300 ${isHovered ? 'text-purple-700' : 'text-slate-700'}`}>
          {displayText}
        </span>
      </div>

      <motion.div
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10, rotate: isHovered ? 45 : 0 }}
        className="text-purple-600"
      >
        <ArrowUpRight className="w-5 h-5" />
      </motion.div>
    </motion.a>
  );
};

export default function StaggeredMenu({ 
  items = [], 
  menuButtonColor = "#1a202c", 
}: StaggeredMenuProps) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuVariants: Variants = {
    closed: { opacity: 0, scale: 0.9, y: -20, filter: "blur(10px)", transition: { duration: 0.2 } },
    open: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="relative z-50">
      
      {/* BOTÓN PRINCIPAL */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-4 px-6 py-3 rounded-full bg-white/80 border border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 backdrop-blur-md shadow-sm"
      >
        <span 
          className="text-xs font-bold tracking-[0.2em] uppercase transition-colors"
          style={{ color: isOpen ? '#9333ea' : menuButtonColor }}
        >
          {isOpen ? "CERRAR" : "MENÚ"}
        </span>

        <div className="w-[1px] h-4 bg-purple-200"></div>

        <div className="relative">
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
               {isOpen ? <X className="w-5 h-5 text-purple-600" /> : <Menu className="w-5 h-5 text-[#1a202c]" />}
            </motion.div>
        </div>
      </button>

      {/* PANEL DEL MENÚ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed" animate="open" exit="closed" variants={menuVariants}
            className="absolute top-full right-0 mt-6 w-[350px] overflow-hidden rounded-3xl border border-purple-100 bg-white/95 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(147,51,234,0.15)]"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400"></div>
            
            <div className="px-6 py-5 border-b border-purple-50 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-purple-100 border border-purple-200">
                        <Aperture className="w-3.5 h-3.5 text-purple-600 animate-spin-slow" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono font-bold">
                        EXPLORAR
                    </span>
                </div>
                <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-200"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.5)]"></span>
                </div>
            </div>

            <div className="relative py-2 flex flex-col">
                {hoveredIndex !== null && (
                    <motion.div
                        layoutId="menu-hover-bg"
                        className="absolute left-2 right-2 rounded-xl bg-purple-50 border border-purple-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, top: 8 + (hoveredIndex * 68), height: 64 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                    >
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-600 rounded-r-full"></div>
                    </motion.div>
                )}

                <div className="relative z-10">
                    {items.map((item, idx) => (
                    <MenuItemRow 
                        key={idx} index={idx} item={item}
                        onClick={() => setIsOpen(false)}
                        onHover={setHoveredIndex}
                        isHovered={hoveredIndex === idx}
                    />
                    ))}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}