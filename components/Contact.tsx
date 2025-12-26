"use client";

import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    // AJUSTE 1: '-mt-32' sube toda la sección para eliminar el hueco negro.
    // 'pt-10' mantiene un poco de aire interno sin exagerar.
    <section id="contact" className="pt-24 pb-24 -mt-12 bg-transparent relative overflow-visible z-10">
      
      {/* AJUSTE 2: '-top-40' mueve la luz hacia arriba para borrar la línea divisoria */}
      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] -z-10" />
      
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Columna Izquierda: Información */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hablanos de tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                próximo proyecto
              </span>
            </h2>
            <p className="text-white-400 mb-8 leading-relaxed">
              ¿Listo para automatizar? Déjanos tus dudas, comentarios o solicita una cotización personalizada. Respondemos en menos de 24 horas.
            </p>

            <div className="space-y-8"> 
              <div className="flex items-center gap-4 text-white-300 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white-900 border border-white-800 flex items-center justify-center text-violet-400 group-hover:border-violet-500/50 group-hover:scale-110 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-white-500 font-bold uppercase tracking-wider mb-1">Escríbenos</p>
                  <p className="font-medium text-lg">contacto@Z&DIntelligent.ai</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white-300 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white-900 border border-white-800 flex items-center justify-center text-violet-400 group-hover:border-violet-500/50 group-hover:scale-110 transition-all">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-white-500 font-bold uppercase tracking-wider mb-1">WhatsApp Ventas</p>
                  <p className="font-medium text-lg">+52 55 1234 5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:w-2/3">
            <div className="bg-white-900/50 backdrop-blur-sm border border-white-800 p-8 md:p-10 rounded-3xl">
              {isSent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-white-400">Gracias por escribirnos. Un asesor revisará tu comentario y te contactará pronto.</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="mt-6 text-violet-400 hover:text-violet-300 text-sm font-bold underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-300">Nombre Completo</label>
                      <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-transparent border border-white-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors placeholder:text-white-600"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white-300">Correo Electrónico</label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-transparent border border-white-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors placeholder:text-white-600"
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white-300">¿Cómo podemos ayudarte?</label>
                    <textarea 
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-transparent border border-white-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors placeholder:text-white-600 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white hover:bg-white-200 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}