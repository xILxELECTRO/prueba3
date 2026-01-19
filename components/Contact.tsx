"use client";

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Terminal, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    // AJUSTE CLAVE 1: 
    // -mt-32: Sube la sección para montarse sobre la anterior (Demo).
    // overflow-visible: Permite que las luces se "salgan" hacia arriba y mezclen los fondos.
    // pt-48: Empujamos el contenido hacia abajo para que no quede tapado al subir la sección.
    <section id="contact" className="relative pt-48 pb-32 -mt-32 bg-transparent overflow-visible z-10">
      
      {/* AJUSTE CLAVE 2: LUZ DE FUSIÓN 
          Posicionada muy arriba (-top-60) para iluminar la unión de las dos secciones 
      */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-violet-600/20 rounded-full blur-[130px] -z-10 pointer-events-none mix-blend-screen" />
      
      {/* Luz inferior decorativa */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[800px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* =========================================
              COLUMNA IZQUIERDA
          ========================================= */}
          <div className="lg:w-5/12 pt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-900/10 backdrop-blur-md mb-8">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-[10px] font-mono text-violet-200 uppercase tracking-widest">Canal Abierto</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tight">
              Hablanos de tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-violet-400 animate-text-shimmer bg-[length:200%_auto]">
                próximo proyecto
              </span>
            </h2>
            
            <p className="text-lg text-neutral-400 mb-12 leading-relaxed font-light max-w-md">
              La transformación digital no espera. Conecta con nuestro núcleo de inteligencia y recibe una estrategia a medida.
            </p>

            {/* Tarjetas de Contacto */}
            <div className="space-y-6"> 
              <a href="mailto:contacto@zdintelligent.ai" className="group flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-1">Correo Encriptado</p>
                  <p className="font-medium text-white group-hover:text-violet-200 transition-colors">contacto@Z&DIntelligent.ai</p>
                </div>
              </a>
              
              <a href="#" className="group flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mb-1">Línea Directa</p>
                  <p className="font-medium text-white group-hover:text-violet-200 transition-colors">+52 55 1234 5678</p>
                </div>
              </a>
            </div>
          </div>

          {/* =========================================
              COLUMNA DERECHA: TERMINAL
          ========================================= */}
          <div className="lg:w-7/12 w-full">
            <div className="relative rounded-3xl bg-[#050505]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
              
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
              
              <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-violet-500" />
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Contactanos</span>
                 </div>
                 <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
                    <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
                 </div>
              </div>

              <div className="p-8 md:p-10 relative z-10">
                {isSent ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_-10px_rgba(34,197,94,0.4)]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">Transmisión Exitosa</h3>
                    <p className="text-neutral-400 max-w-xs mx-auto mb-8">
                      Datos recibidos. Iniciando análisis preliminar...
                    </p>
                    <button 
                      onClick={() => setIsSent(false)}
                      className="text-violet-400 hover:text-violet-300 text-sm font-bold uppercase tracking-widest border-b border-violet-500/30 pb-1 hover:border-violet-500 transition-all"
                    >
                      Reiniciar Sistema
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <label className={`text-xs font-bold uppercase tracking-widest mb-2 block transition-colors ${focusedField === 'name' ? 'text-violet-400' : 'text-neutral-500'}`}>
                          Identificación
                        </label>
                        <div className={`relative flex items-center bg-black/50 border rounded-xl transition-all duration-300 ${focusedField === 'name' ? 'border-violet-500 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)]' : 'border-white/10 group-hover:border-white/20'}`}>
                          <input 
                            type="text" required value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                            className="w-full bg-transparent px-4 py-4 text-white focus:outline-none placeholder:text-neutral-700 font-medium"
                            placeholder="Nombre Completo"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <label className={`text-xs font-bold uppercase tracking-widest mb-2 block transition-colors ${focusedField === 'email' ? 'text-violet-400' : 'text-neutral-500'}`}>
                          Punto de Enlace
                        </label>
                        <div className={`relative flex items-center bg-black/50 border rounded-xl transition-all duration-300 ${focusedField === 'email' ? 'border-violet-500 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)]' : 'border-white/10 group-hover:border-white/20'}`}>
                          <input 
                            type="email" required value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                            className="w-full bg-transparent px-4 py-4 text-white focus:outline-none placeholder:text-neutral-700 font-medium"
                            placeholder="correo@empresa.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative group">
                      <label className={`text-xs font-bold uppercase tracking-widest mb-2 block transition-colors ${focusedField === 'message' ? 'text-violet-400' : 'text-neutral-500'}`}>
                        Datos del Proyecto
                      </label>
                      <div className={`relative bg-black/50 border rounded-xl transition-all duration-300 ${focusedField === 'message' ? 'border-violet-500 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)]' : 'border-white/10 group-hover:border-white/20'}`}>
                        <textarea 
                          required rows={4} value={formState.message}
                          onChange={(e) => setFormState({...formState, message: e.target.value})}
                          onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                          className="w-full bg-transparent px-4 py-4 text-white focus:outline-none placeholder:text-neutral-700 font-medium resize-none"
                          placeholder="Describe tus requerimientos de automatización..."
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" disabled={isSubmitting}
                      className="group relative w-full py-5 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-200 via-white to-violet-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <> <Loader2 className="w-4 h-4 animate-spin" /> Procesando... </>
                        ) : (
                          <> Iniciar Transmisión <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}