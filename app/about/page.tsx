"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Brain, Rocket, ShieldCheck, Users, Code2, Sparkles, ArrowRight, Fingerprint, Target } from 'lucide-react';

// --- SUB-COMPONENTE: TEXTO DECODIFICADO (SCRAMBLE) ---
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
    }, 40); // Velocidad
    return () => clearInterval(interval);
  }, [text]);

  return <span className="text-violet-400">{displayText}</span>;
};

// --- SUB-COMPONENTE: TARJETA CON LUZ SIGUIENDO AL MOUSE ---
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
      className="group relative border border-white/10 bg-white/5 overflow-hidden rounded-3xl"
      onMouseMove={handleMouseMove}
    >
      {/* Luz que sigue al mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full p-8 flex flex-col z-10">
        <div className="mb-6 inline-flex p-3 rounded-xl bg-black/50 border border-white/10 w-fit text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          {icon}
        </div>
        <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h4>
        <p className="text-neutral-400 text-sm leading-relaxed font-light">
          {desc}
        </p>
        
        <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-mono text-neutral-600 uppercase tracking-widest">
            <span>0{index + 1}</span>
            <div className="h-[1px] w-8 bg-neutral-700"></div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-violet-400">SYNCED</span>
        </div>
      </div>
    </div>
  );
};


// --- PÁGINA PRINCIPAL ---
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#03000a] text-white selection:bg-violet-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Ruido de fondo */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        
        {/* Grilla sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Luz ambiental superior */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge de identidad */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">
                Identidad Corporativa
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              ARQUITECTOS DE <br />
              TU <ScrambleText text="ÉXITO DIGITAL" />
            </h1>

            <p className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
              No somos una agencia tradicional. Somos el <span className="text-white font-medium">motor de inteligencia</span> que transforma visitantes en clientes y tiempo en rentabilidad pura.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO GRID: MISIÓN & VISIÓN (GLASSMORPHISM) --- */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* CARD GRANDE: VISIÓN */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 p-10 rounded-[2.5rem] bg-[#0a0a0a]/50 border border-white/10 backdrop-blur-md relative overflow-hidden group"
            >
              {/* Efecto de resplandor interno */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-600/20 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                   <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white/10 rounded-lg border border-white/10">
                         <Target className="w-6 h-6 text-violet-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">Nuestra Visión</h3>
                   </div>
                   
                   <p className="text-2xl md:text-3xl font-light text-neutral-200 leading-tight">
                     "Visualizamos un ecosistema donde la <span className="text-violet-400 italic font-serif">espera</span> es un concepto obsoleto."
                   </p>
                   <p className="mt-6 text-neutral-400 text-lg font-light leading-relaxed max-w-2xl">
                     Construimos un futuro donde la interacción humano-máquina es tan fluida y empática que impulsa el crecimiento económico global sin fricción.
                   </p>
                </div>
                
                <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6">
                   <div className="flex flex-col">
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Meta Global</span>
                      <span className="text-white font-bold">Automatización Total 2030</span>
                   </div>
                   <Rocket className="w-10 h-10 text-white/10 group-hover:text-violet-500/50 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </div>
            </motion.div>

            {/* CARD PEQUEÑA: MISIÓN */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden flex flex-col justify-center group hover:bg-white/[0.05] transition-colors"
            >
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
               
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mb-6 border border-fuchsia-500/20 group-hover:scale-110 transition-transform">
                   <Brain className="w-6 h-6 text-fuchsia-300" />
                 </div>
                 <h3 className="text-xl font-bold mb-4 text-white">Nuestra Misión</h3>
                 <p className="text-neutral-400 leading-relaxed">
                   Democratizar la IA empresarial. Darle a cada negocio, sin importar su tamaño, la potencia tecnológica de una corporación global.
                 </p>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- VALORES (CON EFECTO SPOTLIGHT) --- */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">El Código Genético</h2>
              <p className="text-neutral-400 text-lg">Principios innegociables que compilan nuestra cultura.</p>
            </div>
            <Fingerprint className="w-12 h-12 text-neutral-800 hidden md:block" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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

      {/* --- CTA FINAL (DISEÑO PORTAL) --- */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        {/* Glow effect behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-[100px] -z-10 rounded-full animate-pulse-slow" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white">
            EL FUTURO <br /> <span className="text-neutral-500">NO ESPERA.</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light">
            Únete a la revolución de la automatización inteligente. <br className="hidden md:block"/> Agenda una demo y descubre tu potencial oculto.
          </p>
          
          <a 
            href="/#contact" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-white border border-white rounded-full hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
          >
            <span>Iniciar Transformación</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Datos de los valores
const values = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Seguridad Militar",
    desc: "Tus datos son sagrados. Implementamos encriptación de extremo a extremo y protocolos de privacidad que exceden los estándares de la industria."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Vanguardia Técnica",
    desc: "No usamos modelos de ayer. Integramos los LLMs más avanzados y eficientes del mercado para asegurar respuestas precisas y rápidas."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Obsesión por el Usuario",
    desc: "La tecnología es el medio, no el fin. Diseñamos experiencias que se sienten naturales, empáticas y sorprendentemente humanas."
  },
];