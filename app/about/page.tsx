"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Brain, Heart, Users, Code2, ArrowRight, Fingerprint, Target, HandMetal, Sparkles } from 'lucide-react';

// --- SUB-COMPONENTE: TEXTO DECODIFICADO (SCRAMBLE) ADAPTADO AL GRADIENTE ---
const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEF0123456789_@#&%"; 

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text.split("").map((letter, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
      );
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 40); 
    return () => clearInterval(interval);
  }, [text]);

  return <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">{displayText}</span>;
};

// --- SUB-COMPONENTE: TARJETA DE VALORES (LIGHT MODE) ---
const ValueCard = ({ icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className="group relative border border-purple-100 bg-white overflow-hidden rounded-[2rem] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(147,51,234,0.1)] hover:-translate-y-1"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full p-10 flex flex-col z-10">
        <div className="mb-8 inline-flex p-4 rounded-2xl bg-purple-50 border border-purple-100 w-fit text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
          {icon}
        </div>
        <h4 className="text-2xl font-bold text-[#1a202c] mb-4 tracking-tight">{title}</h4>
        <p className="text-slate-500 text-base leading-relaxed font-light">
          {desc}
        </p>
        
        <div className="mt-12 flex items-center gap-4 text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em]">
            <span className="text-purple-600 font-bold">0{index + 1}</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-100 to-transparent"></div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-600 font-bold">Protocolo SilentHelp</span>
        </div>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf8fc] text-[#1a202c] selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-300/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[600px] bg-fuchsia-300/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-56 pb-32 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-100 mb-8 text-purple-700 shadow-sm">
              <Sparkles className="w-4 h-4 text-fuchsia-500" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold">
                Conoce nuestra visión
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter mb-10 leading-[0.85] uppercase text-[#1a202c]">
              La visión de un <br />
              <ScrambleText text="FUTURO INCLUSIVO" />
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-light mb-16">
              SilentHelp nace en las aulas del <span className="text-[#1a202c] font-bold">Instituto Tecnológico de la Gustavo A. Madero</span> como una respuesta tecnológica a la brecha comunicativa de la comunidad sorda en México.
            </p>

            {/* SECCIÓN DE COLABORADORES */}
            <div className="relative inline-block py-6 px-10 rounded-[2rem] border border-purple-100 bg-white shadow-[0_10px_30px_rgba(147,51,234,0.05)]">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.5em] mb-4 font-bold">Equipo Desarrollador</p>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-bold text-[#1a202c]">
                   <span className="hover:text-purple-600 transition-colors">Daniel Montes</span>
                   <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                   <span className="hover:text-purple-600 transition-colors">Alexandra De la Cruz</span>
                   <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                   <span className="hover:text-purple-600 transition-colors">Marlon Herrera</span>
                   <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"></span>
                   <span className="hover:text-purple-600 transition-colors">Ricardo González</span>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO GRID: FILOSOFÍA DEL PROYECTO --- */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 p-12 rounded-[3rem] bg-white border border-purple-100 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100 rounded-full blur-[80px] group-hover:bg-purple-200/50 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-10">
                   <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 text-purple-600">
                      <Target className="w-8 h-8" />
                   </div>
                   <h3 className="text-3xl font-bold text-[#1a202c] tracking-tight">Nuestra Visión</h3>
                </div>
                
                <p className="text-3xl md:text-5xl font-light text-slate-700 leading-[1.2] mb-10">
                  "Erradicar las barreras invisibles de la comunicación mediante el <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500 font-bold">procesamiento inteligente</span> del lenguaje gestual."
                </p>
                
                <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-100 pt-10">
                   <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Objetivo Tecnológico</span>
                      <span className="text-[#1a202c] font-bold text-lg">Integración de Redes Neuronales LSTM</span>
                   </div>
                   <HandMetal className="w-12 h-12 text-purple-200 group-hover:text-purple-600 transition-all duration-500" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 p-12 rounded-[3rem] bg-white border border-purple-100 shadow-sm relative overflow-hidden flex flex-col justify-center group"
            >
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-purple-50 rounded-[1.5rem] flex items-center justify-center mb-8 border border-purple-100 text-purple-600 group-hover:scale-110 transition-transform duration-500">
                   <Brain className="w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold mb-6 text-[#1a202c]">Nuestra Misión</h3>
                 <p className="text-slate-500 text-lg leading-relaxed font-light">
                   Democratizar el acceso a la interpretación de LSM, permitiendo que cualquier dispositivo sea una ventana de entendimiento mutuo.
                 </p>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- VALORES (PILARES TECNOLÓGICOS) --- */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-purple-100 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#1a202c] tracking-tighter">EL ADN DE SILENTHELP</h2>
              <p className="text-slate-500 text-xl font-light">Principios de ingeniería que sustentan nuestra innovación social.</p>
            </div>
            <Fingerprint className="w-16 h-16 text-purple-100 hidden md:block" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <ValueCard 
                key={idx} 
                index={idx}
                icon={item.icon} 
                title={item.title} 
                desc={item.desc} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-300/30 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-[#1a202c] leading-[1]">
            EL SILENCIO <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">TIENE VOZ.</span>
          </h2>
          <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto font-light">
            Explora cómo nuestra arquitectura de Visión por Computadora transforma gestos en conexiones humanas.
          </p>
          
          
        </div>
      </section>

      <Footer />
    </main>
  );
}

const values = [
  {
    icon: <Users className="w-7 h-7" />,
    title: "Inclusión Radical",
    desc: "No diseñamos para el usuario, diseñamos con el usuario. Cada gesto detectado es un paso hacia una sociedad sin segregación comunicativa."
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Precisión Técnica",
    desc: "Implementamos algoritmos de vanguardia en MediaPipe para asegurar que la traducción de LSM sea fluida, veraz y eficiente en tiempo real."
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Compromiso Social",
    desc: "SilentHelp no es solo código; es una herramienta de cambio nacida del esfuerzo académico para generar un impacto tangible en nuestra comunidad."
  },
];