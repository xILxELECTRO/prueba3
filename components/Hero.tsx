"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react'; // Actualizamos la importación de iconos

// --- CONFIGURACIÓN SILENTHELP ---
const WORDS = ["SIN LÍMITES.", "SIN BARRERAS.", "CON EMPATÍA.", "PARA TODOS."];

// --- COMPONENTE 1: EFECTO MÁQUINA DE ESCRIBIR ---
const TypewriterText = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const typingSpeed = 100;
    const deletingSpeed = 60;
    const delayBetweenWords = 2500; 

    const currentFullWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentFullWord.substring(0, currentText.length + 1));
        if (currentText === currentFullWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        setCurrentText(currentFullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, isMounted]);

  if (!isMounted) {
    return (
      <span className="inline-flex items-center justify-center min-h-[1.2em] mt-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 font-black">&nbsp;</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center min-h-[1.2em] mt-2">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 font-black">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        className="inline-block w-[4px] md:w-[8px] h-[0.9em] bg-fuchsia-500 ml-2 rounded-full"
      />
    </span>
  );
};

// --- COMPONENTE 2: BOTÓN MAGNÉTICO ---
const MagneticButton = ({ href }: { href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.3); 
    y.set((clientY - (top + height / 2)) * 0.3);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      href={href} ref={ref} onMouseMove={handleMouseMove} onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="group relative inline-flex items-center justify-center z-20 mt-4"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full blur-md opacity-20 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>
      
      <div className="relative px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-full flex items-center gap-4 shadow-xl border border-purple-500 transition-transform duration-300 group-hover:scale-[1.02]">
        {/* Cambiamos el texto para hacer alusión a la página de Quiénes Somos */}
        <span className="relative z-10 tracking-wide">Nuestra Misión</span>
        
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white group-hover:rotate-[360deg] transition-all duration-500 shadow-inner">
           {/* Incorporamos el icono de usuarios */}
           <Users className="w-5 h-5" />
        </div>
      </div>
    </motion.a>
  );
};

// --- HERO PRINCIPAL ---
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden bg-transparent perspective-1000 pt-32 pb-8 z-10">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-purple-400/10 blur-[100px] rounded-[100%] pointer-events-none -z-10"></div>

      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 text-center mt-10">
        
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full border border-purple-100 shadow-sm mb-8 text-purple-700 cursor-default">
            <Sparkles className="w-4 h-4 text-fuchsia-500" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold text-[#1a202c]">
              App de Lengua de Señas Mexicana
            </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-[#1a202c] mb-8 leading-[0.9] flex flex-col items-center">
          <span className="block relative uppercase">
            Comunica
          </span>
          <TypewriterText words={WORDS} />
        </h1>

        <div className="flex flex-col items-center gap-2 mb-8">
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Aprende y traduce Lengua de Señas Mexicana utilizando Inteligencia Artificial.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600 mt-2">
            Transformando el silencio en conexión.
          </h2>
        </div>

        {/* --- ENLACE ACTUALIZADO HACIA /ABOUT --- */}
        <MagneticButton href="/about" />

      </div>

      <div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity mt-12">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-purple-600 font-bold">Descubre Más</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[2px] h-12 bg-gradient-to-b from-purple-500 to-transparent rounded-full"
        />
      </div>

    </section>
  );
}