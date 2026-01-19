"use client";

import React, { useRef } from 'react';
import { Bot, Zap, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Datos de los servicios
const services = [
  {
    id: "01",
    tag: "NEURAL_NET",
    title: "IA Core",
    desc: "Automatización neuronal y procesamiento de lenguaje natural avanzado.",
    icon: <Bot className="w-8 h-8 text-white" />,
    image: "/logo.png", 
  },
  {
    id: "02",
    tag: "AUTO_SALES",
    title: "Ventas Autónomas",
    desc: "Agentes de cierre 24/7 que califican y convierten leads automáticamente.",
    icon: <Zap className="w-8 h-8 text-white" />,
    image: "/logo1.png",
  },
  {
    id: "03",
    tag: "PREDICT_V4",
    title: "Data Predictiva",
    desc: "Análisis en tiempo real para anticipar tendencias del mercado.",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    image: "/logo2.png",
  }
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const cardContainer = cardContainerRef.current;
    const headerTitle = headerRef.current?.querySelector('h2');

    if (!cardContainer || !headerTitle) return; 

    let isGapAnimationCompleted = false;
    let isFlipAnimationCompleted = false;

    // --- LÓGICA DESKTOP (> 800px) ---
    mm.add("(min-width: 800px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // FASE 1: HEADER
          if (progress >= 0.05 && progress <= 0.2) {
             gsap.to(headerTitle, { y: 0, opacity: 1, overwrite: true });
          } else if (progress > 0.25) {
             gsap.to(headerTitle, { y: -50, opacity: 0, overwrite: true });
          } else if (progress < 0.05) {
             gsap.set(headerTitle, { y: 50, opacity: 0 });
          }

          // FASE 2: ANCHO
          if (progress <= 0.25) {
            const widthPercentage = gsap.utils.mapRange(0, 0.25, 100, 65, progress);
            gsap.set(cardContainer, { width: `${widthPercentage}%` });
          } else {
            gsap.set(cardContainer, { width: `65%` });
          }

          // FASE 3: GAP & BORDES
          if (progress >= 0.35 && !isGapAnimationCompleted) {
            gsap.to(cardContainer, { gap: "24px", duration: 0.5, ease: "power3.out" });
            gsap.to(".service-card", { borderRadius: "24px", duration: 0.5, ease: "power3.out" });
            isGapAnimationCompleted = true;
          } 
          else if (progress < 0.35 && isGapAnimationCompleted) {
            gsap.to(cardContainer, { gap: "0px", duration: 0.5, ease: "power3.out" });
            gsap.to(".service-card-0", { borderRadius: "24px 0 0 24px", duration: 0.5 });
            gsap.to(".service-card-1", { borderRadius: "0px", duration: 0.5 });
            gsap.to(".service-card-2", { borderRadius: "0 24px 24px 0", duration: 0.5 });
            isGapAnimationCompleted = false;
          }

          // FASE 4: FLIP 3D
          if (progress >= 0.6 && !isFlipAnimationCompleted) {
            gsap.to(".service-card", { rotationY: 180, duration: 0.8, ease: "back.out(1.2)", stagger: 0.1 });
            gsap.to([".service-card-0", ".service-card-2"], {
              y: 40, rotationZ: (i) => i === 0 ? -5 : 5, duration: 0.75
            });
            isFlipAnimationCompleted = true;
          } 
          else if (progress < 0.6 && isFlipAnimationCompleted) {
            gsap.to(".service-card", { rotationY: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 });
            gsap.to([".service-card-0", ".service-card-2"], {
              y: 0, rotationZ: 0, duration: 0.75
            });
            isFlipAnimationCompleted = false;
          }
        }
      });
    });

    // --- LÓGICA MOBILE (< 800px) ---
    mm.add("(max-width: 799px)", () => {
      gsap.set(headerTitle, { opacity: 1, y: 0 });
      gsap.set(cardContainer, { width: "100%", gap: "20px", transform: "none" });
      gsap.set(".service-card", { borderRadius: "24px", rotationY: 0 });
    });

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full h-screen bg-transparent text-white overflow-hidden flex flex-col items-center justify-center px-4 md:px-8"
    >
      
      {/* --- HEADER --- */}
      <div 
        ref={headerRef} 
        className="absolute top-[10%] md:top-[15%] left-0 w-full z-20 text-center pointer-events-none"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight opacity-0 translate-y-10">
          Inteligencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Modular</span>
        </h2>
      </div>

      {/* --- CONTAINER DE CARTAS --- */}
      <div 
        ref={cardContainerRef}
        className="card-container relative flex w-full md:w-[75%] h-[55vh] md:h-[60vh] perspective-[1000px]"
        style={{ perspective: "1000px" }}
      >
        
        {services.map((item, i) => {
          const initialRadius = i === 0 ? "24px 0 0 24px" : i === 2 ? "0 24px 24px 0" : "0px";
          
          return (
            <div
              key={item.id}
              className={`service-card service-card-${i} group relative flex-1 h-full cursor-pointer`}
              style={{ 
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center',
                borderRadius: initialRadius
              }}
            >
              {/* ==================================================================================
                  CARA FRONTAL: DISEÑO LIMPIO
              ================================================================================== */}
              <div 
                className="card-front absolute inset-0 w-full h-full overflow-hidden backface-hidden border border-white/10 bg-neutral-900"
                style={{ backfaceVisibility: 'hidden', borderRadius: 'inherit' }}
              >
                {/* Imagen de fondo */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 mix-blend-luminosity"
                />
                
                {/* Overlay Gradiente sofisticado */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-neutral-950/90" />
                
                {/* --- ELIMINADO: System Online (arriba a la izquierda) --- */}
                {/* --- ELIMINADO: Botón Plus (arriba a la derecha) --- */}

                {/* Contenido Inferior */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                   <div className="border-b border-white/10 pb-4">
                      <span className="text-violet-400 text-xs font-mono mb-1 block tracking-wider">
                        // {item.tag}
                      </span>
                      <h3 className="text-3xl font-bold text-white tracking-tight">{item.title}</h3>
                   </div>
                   
                   {/* Número de fondo sutil */}
                   <span className="absolute bottom-6 right-6 text-6xl font-black text-white/5 opacity-30 select-none pointer-events-none">
                     {item.id}
                   </span>
                   
                   {/* --- ELIMINADO: Texto "Ver Especificaciones" --- */}
                </div>
              </div>

              {/* ==================================================================================
                  CARA TRASERA: NÚCLEO DE DATOS
              ================================================================================== */}
              <div 
                className="card-back absolute inset-0 w-full h-full overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-8 backface-hidden bg-black"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  transform: 'rotateY(180deg)',
                  borderRadius: 'inherit'
                }}
              >
                {/* Fondo de Ruido (Noise) para textura */}
                <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                
                {/* Glow Central */}
                <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-black pointer-events-none"></div>

                {/* Borde Brillante Interno */}
                <div className="absolute inset-2 border border-white/10 rounded-[20px] pointer-events-none group-hover:border-violet-500/30 transition-colors"></div>

                {/* Contenido Trasero */}
                <div className="relative z-10 flex flex-col items-center w-full">
                  
                  {/* Icono flotante con efecto de energía */}
                  <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-violet-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center shadow-2xl">
                       {item.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  
                  {/* Descripción con línea decorativa */}
                  <div className="relative py-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-violet-500/50"></div>
                    <p className="text-sm text-neutral-400 leading-relaxed max-w-[260px]">
                        {item.desc}
                    </p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-violet-500/50"></div>
                  </div>

                  {/* --- ELIMINADO: Botón Acceder --- */}
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}