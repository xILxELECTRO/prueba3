"use client";

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Heart, Loader2, CheckCircle2 } from 'lucide-react';
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
    <section id="contact" className="relative pt-32 pb-32 bg-[#faf8fc] overflow-visible z-10 border-t border-purple-100">
      
      {/* LUZ DE FUSIÓN DE FONDO */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-300/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[800px] h-[600px] bg-fuchsia-300/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* =========================================
              COLUMNA IZQUIERDA: MENSAJE EMPÁTICO
          ========================================= */}
          <div className="lg:w-5/12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-100 mb-8 text-purple-700">
               <Heart className="w-4 h-4 text-fuchsia-500 animate-pulse" />
               <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Únete a la iniciativa</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-[#1a202c] mb-6 leading-[1.1] tracking-tight">
              Conecta con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
                nuestra misión
              </span>
            </h2>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-light max-w-md">
              ¿Tienes dudas, sugerencias o quieres colaborar con el proyecto SilentHelp? Escríbenos y construyamos juntos un mundo sin barreras.
            </p>

            {/* Tarjetas de Contacto */}
            <div className="space-y-4"> 
              <a href="mailto:contacto@silenthelp.mx" className="group flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mb-1 font-bold">Correo Electrónico</p>
                  <p className="font-bold text-[#1a202c] group-hover:text-purple-600 transition-colors">contacto@silenthelp.com</p>
                </div>
              </a>
              
              <a href="#" className="group flex items-center gap-5 p-4 rounded-2xl bg-white border border-slate-100 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mb-1 font-bold">Redes Sociales</p>
                  <p className="font-bold text-[#1a202c] group-hover:text-purple-600 transition-colors">@SilentHelpApp</p>
                </div>
              </a>
            </div>
          </div>

          {/* =========================================
              COLUMNA DERECHA: FORMULARIO LUMINOSO
          ========================================= */}
          <div className="lg:w-7/12 w-full">
            <div className="relative rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(147,51,234,0.1)] overflow-hidden">
              
              <div className="p-10 md:p-12 relative z-10">
                {isSent ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-green-50 border border-green-200 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-[#1a202c] mb-3">¡Mensaje Recibido!</h3>
                    <p className="text-slate-500 max-w-xs mx-auto mb-8">
                      Gracias por sumarte a la inclusión. Te responderemos lo más pronto posible.
                    </p>
                    <button 
                      onClick={() => setIsSent(false)}
                      className="text-purple-600 hover:text-purple-700 text-sm font-bold uppercase tracking-widest border-b-2 border-purple-200 hover:border-purple-600 pb-1 transition-all"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <label className={`text-xs font-bold uppercase tracking-widest mb-2 block transition-colors ${focusedField === 'name' ? 'text-purple-600' : 'text-slate-500'}`}>
                          Nombre Completo
                        </label>
                        <div className={`relative flex items-center bg-slate-50 border rounded-2xl transition-all duration-300 ${focusedField === 'name' ? 'border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.2)] bg-white' : 'border-slate-200 group-hover:border-purple-300'}`}>
                          <input 
                            type="text" required value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                            className="w-full bg-transparent px-5 py-4 text-[#1a202c] focus:outline-none placeholder:text-slate-400 font-medium"
                            placeholder="Tu nombre"
                          />
                        </div>
                      </div>
                      <div className="relative group">
                        <label className={`text-xs font-bold uppercase tracking-widest mb-2 block transition-colors ${focusedField === 'email' ? 'text-purple-600' : 'text-slate-500'}`}>
                          Correo Electrónico
                        </label>
                        <div className={`relative flex items-center bg-slate-50 border rounded-2xl transition-all duration-300 ${focusedField === 'email' ? 'border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.2)] bg-white' : 'border-slate-200 group-hover:border-purple-300'}`}>
                          <input 
                            type="email" required value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                            className="w-full bg-transparent px-5 py-4 text-[#1a202c] focus:outline-none placeholder:text-slate-400 font-medium"
                            placeholder="correo@ejemplo.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="relative group">
                      <label className={`text-xs font-bold uppercase tracking-widest mb-2 block transition-colors ${focusedField === 'message' ? 'text-purple-600' : 'text-slate-500'}`}>
                        ¿En qué podemos ayudarte?
                      </label>
                      <div className={`relative bg-slate-50 border rounded-2xl transition-all duration-300 ${focusedField === 'message' ? 'border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.2)] bg-white' : 'border-slate-200 group-hover:border-purple-300'}`}>
                        <textarea 
                          required rows={4} value={formState.message}
                          onChange={(e) => setFormState({...formState, message: e.target.value})}
                          onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                          className="w-full bg-transparent px-5 py-4 text-[#1a202c] focus:outline-none placeholder:text-slate-400 font-medium resize-none"
                          placeholder="Escribe tu mensaje aquí..."
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" disabled={isSubmitting}
                      className="group relative w-full py-5 bg-purple-600 text-white font-bold text-sm uppercase tracking-widest rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <> <Loader2 className="w-5 h-5 animate-spin" /> Procesando... </>
                        ) : (
                          <> Enviar Mensaje <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> </>
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