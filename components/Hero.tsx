"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDownRight, Terminal } from 'lucide-react';

// --- CONFIGURACIÓN ---
const WORDS = ["AUTÓNOMO", "INTELIGENTE", "PREDICTIVO", "SIN LÍMITES"];
const CHANGE_SPEED = 3000; // Cambia cada 3 segundos

// --- COMPONENTE 1: TEXTO QUE SE DECODIFICA (SCRAMBLE) ---
const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

  useEffect(() => {
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3; 
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-400 font-mono">
      {displayText}
    </span>
  );
};

// --- COMPONENTE 2: BOTÓN MAGNÉTICO ---
const MagneticButton = ({ href }: { href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.5);
    y.set((clientY - (top + height / 2)) * 0.5);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="group relative inline-flex items-center justify-center z-20"
    >
      {/* Brillo detrás del botón */}
      <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Botón Sólido */}
      <div className="relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform hover:scale-105">
        <span className="relative z-10">Agendar Demo</span>
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:rotate-[-45deg] transition-transform duration-300">
           <ArrowDownRight className="w-5 h-5" />
        </div>
      </div>
    </motion.a>
  );
};

// --- HERO PRINCIPAL ---
export default function Hero() {
  const [index, setIndex] = useState(0);

  // Lógica para rotar las palabras cada X segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, CHANGE_SPEED);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent perspective-1000">
      
      {/* NOTA: El fondo de hexágonos viene del layout.tsx, aquí es transparente */}

      {/* --- CONTENIDO CENTRAL --- */}
      <div className="relative z-10 container px-4 text-center flex flex-col items-center">
        
        {/* Etiqueta Superior */}
        

        {/* TÍTULO CAMBIANTE */}
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter text-white mb-8 leading-[0.9] select-none flex flex-col items-center drop-shadow-2xl">
          <span className="block text-white">
            FUTURO
          </span>
          
          {/* Aquí ocurre la magia del cambio de texto */}
          <div className="h-[1.1em] overflow-hidden"> {/* Altura fija para evitar saltos */}
             <ScrambleText text={WORDS[index]} />
          </div>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-neutral-400 mb-12 font-light leading-relaxed">
          Deja de operar manualmente. Permite que nuestros agentes de IA tomen el control y escalen tu negocio mientras duermes.
        </p>

        {/* Botón Único */}
        <MagneticButton href="#demo" />

      </div>

      {/* Decoración sutil inferior */}
      <div className="absolute bottom-10 animate-bounce text-neutral-600">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-neutral-500 to-transparent"></div>
      </div>

    </section>
  );
}