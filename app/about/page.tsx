"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Brain, Rocket, ShieldCheck, Users, Code2, Sparkles, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-violet-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grilla sutil de fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Luz ambiental */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
      </div>

      {/* --- HERO SECTION REIMAGINADO --- */}
      <section className="relative z-10 pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              <span>Innovación sin límites</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
              El arquitecto invisible de tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white animate-text-shimmer">
                éxito digital
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
              Somos Z&DInteligent.ai. No solo escribimos código; orquestamos inteligencias que transforman visitantes en clientes y tiempo en rentabilidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO GRID: MISIÓN & VISIÓN --- */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* CARD GRANDE: VISIÓN (Ocupa 8 columnas) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 p-10 rounded-[2rem] bg-neutral-900/40 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-violet-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
                <div>
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Nuestra Visión</h3>
                  <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                    Visualizamos un ecosistema donde la "espera" es un concepto obsoleto. Un futuro donde la interacción humano-máquina es tan fluida y empática que impulsa el crecimiento económico global sin fricción.
                  </p>
                </div>
                <div className="mt-8">
                   <span className="text-sm font-mono text-violet-400">Objetivo 2030 →</span>
                </div>
              </div>
              {/* Decoración visual abstracta */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px] pointer-events-none" />
            </motion.div>

            {/* CARD PEQUEÑA: MISIÓN (Ocupa 4 columnas) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 p-10 rounded-[2rem] bg-neutral-900/40 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-fuchsia-500/30 transition-all duration-500 flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20">
                 <Brain className="w-40 h-40 text-fuchsia-500 -rotate-12 translate-x-10 -translate-y-10" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white">Nuestra Misión</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Democratizar la IA empresarial. Darle a cada negocio la potencia tecnológica de una corporación global.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- VALORES (ESTILO FEATURES) --- */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 md:flex md:items-end md:justify-between border-b border-neutral-800 pb-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">El ADN de Z&D</h2>
              <p className="text-neutral-400 text-lg">Principios innegociables que compilan nuestra cultura.</p>
            </div>
            <div className="hidden md:block">
              <Sparkles className="w-10 h-10 text-neutral-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6 text-white" })}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* --- CTA FINAL MINIMALISTA --- */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        {/* Glow effect behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-fuchsia-600/20 blur-[100px] -z-10 opacity-50" />
        
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
            El futuro no espera.
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Únete a la revolución de la automatización inteligente. Agenda una demo hoy y mira lo que podemos construir.
          </p>
          <a 
            href="/#contact" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-white/10 border border-white/10 rounded-full hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            <span>Iniciar Transformación</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
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
    icon: <ShieldCheck />,
    title: "Seguridad Militar",
    desc: "Tus datos son sagrados. Implementamos encriptación de extremo a extremo y protocolos de privacidad que exceden los estándares de la industria."
  },
  {
    icon: <Code2 />,
    title: "Vanguardia Técnica",
    desc: "No usamos modelos de ayer. Integramos los LLMs más avanzados y eficientes del mercado para asegurar respuestas precisas y rápidas."
  },
  {
    icon: <Users />,
    title: "Obsesión por el Usuario",
    desc: "La tecnología es el medio, no el fin. Diseñamos experiencias que se sienten naturales, empáticas y sorprendentemente humanas."
  },
];