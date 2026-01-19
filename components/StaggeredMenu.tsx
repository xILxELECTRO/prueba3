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

// --- SUB-COMPONENTE: LINK CON SCRAMBLE Y HOVER ---
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

  // Efecto Scramble (Matrix) al hacer hover
  useEffect(() => {
    if (!isHovered) {
      setDisplayText(item.label);
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        item.label
          .split("")
          .map((letter, i) => {
            if (i < iterations) return item.label[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
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
        {/* Índice pequeño */}
        <span className={`text-[9px] font-mono transition-colors duration-300 ${isHovered ? 'text-violet-400' : 'text-neutral-600'}`}>
          0{index + 1}
        </span>
        
        {/* Texto Principal */}
        <span className={`text-lg font-bold tracking-tight uppercase transition-colors duration-300 ${isHovered ? 'text-white' : 'text-neutral-400'}`}>
          {displayText}
        </span>
      </div>

      {/* Flecha que aparece */}
      <motion.div
        animate={{ 
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -10,
          rotate: isHovered ? 45 : 0
        }}
        className="text-violet-400"
      >
        <ArrowUpRight className="w-5 h-5" />
      </motion.div>
    </motion.a>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function StaggeredMenu({ 
  items = [], 
  menuButtonColor = "#ffffff", 
}: StaggeredMenuProps) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuVariants: Variants = {
    closed: { 
      opacity: 0, 
      scale: 0.9, 
      y: -20,
      filter: "blur(10px)",
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative z-50">
      
      {/* === BOTÓN PRINCIPAL (Más grande y llamativo) === */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-4 px-6 py-3 rounded-full bg-black/50 border border-white/10 hover:border-violet-500/50 hover:bg-black/80 transition-all duration-300 backdrop-blur-md"
      >
        <span 
          className="text-xs font-bold tracking-[0.2em] uppercase transition-colors"
          style={{ color: isOpen ? '#fff' : menuButtonColor }}
        >
          {isOpen ? "CERRAR" : "MENÚ"}
        </span>

        {/* Separador vertical */}
        <div className="w-[1px] h-4 bg-white/10"></div>

        {/* Icono con animación de rotación */}
        <div className="relative">
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
               {isOpen ? <X className="w-5 h-5 text-violet-400" /> : <Menu className="w-5 h-5 text-white" />}
            </motion.div>
        </div>
      </button>

      {/* === PANEL DEL MENÚ === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full right-0 mt-6 w-[350px] overflow-hidden rounded-3xl border border-white/10 bg-[#050505]/95 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,1)]"
          >
            {/* Decoración: Borde superior brillante */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
            
            {/* Cabecera Técnica */}
            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-violet-500/10 border border-violet-500/20">
                        <Aperture className="w-3.5 h-3.5 text-violet-400 animate-spin-slow" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                        NAVEGACIÓN
                    </span>
                </div>
                {/* Indicador de estado */}
                <div className="flex gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                    <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                    <span className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                </div>
            </div>

            {/* LISTA DE ENLACES CON FONDO DE LUZ MÓVIL */}
            <div className="relative py-2 flex flex-col">
                
                {/* EL FONDO DE LUZ QUE SIGUE AL CURSOR (Spotlight) */}
                {hoveredIndex !== null && (
                    <motion.div
                        layoutId="menu-hover-bg"
                        className="absolute left-2 right-2 rounded-xl bg-white/5 border border-white/5"
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            // Calculamos la posición aproximada basándonos en la altura de cada ítem (aprox 68px)
                            top: 8 + (hoveredIndex * 68), 
                            height: 64 
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                    >
                        {/* Brillo lateral violeta */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-violet-500/50 rounded-r-full blur-[2px]"></div>
                    </motion.div>
                )}

                {/* ITEMS */}
                <div className="relative z-10">
                    {items.length > 0 ? (
                        items.map((item, idx) => (
                        <MenuItemRow 
                            key={idx}
                            index={idx}
                            item={item}
                            onClick={() => setIsOpen(false)}
                            onHover={setHoveredIndex}
                            isHovered={hoveredIndex === idx}
                        />
                        ))
                    ) : (
                        <div className="p-8 text-center text-xs text-neutral-600 font-mono">
                           // SIN ENLACES
                        </div>
                    )}
                </div>
            </div>

            {/* Decoración Inferior */}
            <div className="h-1 w-full bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-violet-600/20"></div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}