"use client";

import React, { useRef } from 'react';
import { ArrowRight, Bot, Zap, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// IMAGEN: Debe ser ancha y de alta calidad
const BG_IMAGE = "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2832&auto=format&fit=crop";

const services = [
  {
    id: "01",
    title: "IA Core",
    desc: "Automatización neuronal.",
    icon: <Bot className="w-6 h-6 text-white" />
  },
  {
    id: "02",
    title: "Ventas",
    desc: "Cierre autónomo 24/7.",
    icon: <Zap className="w-6 h-6 text-white" />
  },
  {
    id: "03",
    title: "Data",
    desc: "Predicción en tiempo real.",
    icon: <BarChart3 className="w-6 h-6 text-white" />
  }
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const cards = gsap.utils.toArray('.service-card');
    const bgs = gsap.utils.toArray('.card-bg'); // Las imágenes de fondo

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=300%", 
        pin: true,
        scrub: 1, // Suavizado de 1s para que tenga "peso"
        anticipatePin: 1
      }
    });

    // --- FASE 1: LA FRACTURA (GAP + PARALLAX) ---
    // 1. Abrimos el hueco entre las cartas (del centro hacia afuera)
    tl.to(wrapper, {
      gap: "24px", // Se separan hasta 24px
      duration: 1,
      ease: "power2.inOut"
    }, "split");

    // 2. Redondeamos las esquinas
    tl.to(cards, {
      borderRadius: "24px",
      duration: 0.5,
      ease: "power1.inOut"
    }, "split");

    // 3. TRUCO DEL VIDEO: Movemos ligeramente la imagen de fondo 
    // para que parezca que la imagen se "estira" o reacciona al corte.
    tl.to(bgs, {
      scale: 1.1, // Zoom sutil
      duration: 1,
      ease: "power2.inOut"
    }, "split");

    // --- FASE 2: EL GIRO (FLIP) ---
    // Giran una por una ("seguiditas")
    tl.to(cards, {
      rotationY: 180,
      duration: 1.2,
      stagger: 0.1, // Efecto cascada rápido
      ease: "back.out(1.4)" // Rebote físico
    }, "-=0.2"); // Se solapa casi al final de la separación

  }, { scope: container });

  return (
    <section ref={container} className="h-screen bg-black relative flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute top-20 text-center z-20 px-4 pointer-events-none mix-blend-difference">
        <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-2">
          Habilidades
        </h2>
      </div>

      {/* --- WRAPPER FLEXBOX --- */}
      {/* gap-0 inicial = Bloque Sólido */}
      <div 
        ref={wrapperRef}
        className="relative flex w-full max-w-6xl h-[500px] gap-0 px-4 perspective-[2000px]"
      >
        
        {services.map((item, i) => {
          // Posición de la imagen calculada para ser continua
          const bgPos = i === 0 ? "0% 50%" : i === 1 ? "50% 50%" : "100% 50%";
          // Bordes iniciales rectos
          const startRadius = i === 0 ? "24px 0 0 24px" : i === 2 ? "0 24px 24px 0" : "0px";

          return (
            <div
              key={i}
              className="service-card relative flex-1 h-full cursor-pointer"
              style={{ 
                transformStyle: 'preserve-3d',
                borderRadius: startRadius // Empieza como bloque
              }}
            >
              {/* === CARA FRONTAL (IMAGEN) === */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden backface-hidden shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  borderRadius: 'inherit' // Hereda el borde dinámico
                }}
              >
                {/* DIV DE LA IMAGEN (Para poder escalarla con GSAP) */}
                <div 
                  className="card-bg absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${BG_IMAGE})`,
                    backgroundSize: '300% 100%', // 300% cubre las 3 cartas
                    backgroundPosition: bgPos
                  }}
                />
                
                {/* Overlay y Texto */}
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-white/50 text-xs font-mono mb-1 block">0{i + 1}</span>
                  <h3 className="text-white text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                </div>
              </div>

              {/* === CARA TRASERA (INFO) === */}
              <div 
                className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden bg-neutral-900 border border-white/10 p-8 flex flex-col justify-between backface-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                {/* Ruido */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">{item.title}</h3>
                  <div className="h-0.5 w-12 bg-violet-500 mb-4" />
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <button className="w-full py-4 border border-white/10 rounded-xl text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                    Ver Detalles <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}