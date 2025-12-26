"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Brain, Rocket, ShieldCheck, Users, Code2, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    // bg-transparent permite ver el degradado global del layout
    <main className="min-h-screen bg-transparent text-white selection:bg-violet-500/30">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Luz de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              Nuestra Historia
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Diseñamos el futuro de la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                automatización
              </span>
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed">
              En Z&DInteligent.ai, no solo programamos código. Creamos puentes digitales entre las empresas y sus clientes, utilizando la Inteligencia Artificial para eliminar las barreras del tiempo y el idioma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MISIÓN Y VISIÓN (GRID) --- */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Tarjeta Misión */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10 backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket className="w-32 h-32 text-violet-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-violet-400" /> Nuestra Misión
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Democratizar el acceso a la Inteligencia Artificial empresarial. Creemos que cada negocio, sin importar su tamaño, merece tener la potencia tecnológica de una corporación global para atender a sus clientes 24/7.
              </p>
            </motion.div>

            {/* Tarjeta Visión */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-neutral-900/50 border border-white/10 backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Brain className="w-32 h-32 text-fuchsia-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Brain className="w-8 h-8 text-fuchsia-400" /> Nuestra Visión
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Un mundo donde la "espera" sea un concepto obsoleto. Visualizamos un ecosistema comercial donde la interacción humano-máquina sea tan fluida, empática y eficiente que impulse el crecimiento económico global.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- VALORES (3 COLUMNAS) --- */}
      <section className="py-20 px-6 border-t border-neutral-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">El ADN de Z&D</h2>
            <p className="text-neutral-400">Los principios que guían cada línea de código que escribimos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/40 p-8 rounded-3xl border border-neutral-800 hover:border-violet-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 text-violet-400 border border-neutral-800">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 p-12 rounded-[3rem] border border-violet-500/20 backdrop-blur-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Listo para innovar con nosotros?</h2>
          <p className="text-neutral-300 mb-8 text-lg">
            El futuro no espera. Únete a la revolución de la IA hoy mismo.
          </p>
          <a href="/#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Contactar al Equipo
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
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Seguridad Primero",
    desc: "Entendemos que los datos son el activo más valioso. No escatimamos en encriptación y protocolos de privacidad."
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Innovación Constante",
    desc: "La IA avanza cada día. Nosotros también. Mantenemos nuestros sistemas actualizados con los últimos modelos de lenguaje."
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Enfoque Humano",
    desc: "Aunque creamos robots, trabajamos para humanos. La experiencia de usuario y la empatía son nuestra prioridad."
  },
];