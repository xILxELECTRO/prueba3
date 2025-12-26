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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-400 hover:to-fuchsia-500 text-white font-bold rounded-lg shadow-lg shadow-violet-500/25 transition-all flex items-center justify-center gap-2 group">
            Empezar Ahora
            <ArrowRight className="w-4 h-4 group-hover:tranwhite-x-1 transition-transform" />
          </button>
          <a 
            href="#demo"
            className="w-full sm:w-auto px-8 py-4 bg-white-900 border border-white-800 hover:bg-white-800 text-white font-semibold rounded-lg transition-all"
          >
            Ver Demo en Vivo
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