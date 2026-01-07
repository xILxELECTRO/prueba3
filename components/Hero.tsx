import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white-950 text-white-50">
      <div className="absolute top-0 left-1/2 -tranwhite-x-1/2 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white-900 border border-white-800 text-violet-400 text-xs font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          Tecnología GPT-4 Integrada
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Transforma visitantes en <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
            clientes recurrentes
          </span>
        </h1>

        <p className="text-lg text-white-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Implementamos chatbots inteligentes que entienden tu negocio, responden al instante y cierran ventas 24/7 en tu sitio web y WhatsApp.
        </p>

        {/* --- SECCIÓN DE BOTONES ACTUALIZADA --- */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
  
  {/* Botón Único: "Ver Demo en Vivo" con el estilo gráfico del otro */}
  <a
    href="/#demo" // Asegúrate de que este enlace sea el correcto para tu demo
    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl hover:bg-gradient-to-l hover:from-fuchsia-600 hover:to-violet-600 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
  >
    {/* Capa opcional para un brillo extra al hacer hover (Absolute positioning) */}
    <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-inherit opacity-0 group-hover:opacity-20 group-hover:translate-x-0 group-hover:translate-y-0 rounded-xl blur-md"></span>
    
    {/* Texto del botón */}
    <span className="relative z-10 flex items-center gap-2">
      Ver Demo en Vivo
      {/* Si quieres agregar la flecha también, descomenta la siguiente línea: */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> */}
    </span>
  </a>

</div>

        <div className="mt-16 pt-8 border-t border-white-800/50 flex flex-wrap justify-center gap-8 text-sm text-white-500 font-medium">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Sin tarjetas de crédito</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Configuración en 5 min</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Soporte 24/7</div>
        </div>
      </div>
    </section>
  );
}