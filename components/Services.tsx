"use client";

import React, { useRef } from 'react';
import { ArrowRight, Bot, Zap, BarChart3 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Datos de los servicios (Eliminamos el color hardcoded)
const services = [
  {
    id: "01",
    title: "IA Core",
    desc: "Automatización neuronal y procesamiento de lenguaje natural avanzado.",
    icon: <Bot className="w-8 h-8 text-violet-200" />, // Icono con tinte claro
    image: "logo.png",
  },
  {
    id: "02",
    title: "Ventas Autónomas",
    desc: "Agentes de cierre 24/7 que califican y convierten leads automáticamente.",
    icon: <Zap className="w-8 h-8 text-violet-200" />,
    image: "/logo1.png",
  },
  {
    id: "03",
    title: "Data Predictiva",
    desc: "Análisis en tiempo real para anticipar tendencias del mercado.",
    icon: <BarChart3 className="w-8 h-8 text-violet-200" />,
    image: "logo2.png",
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

    // Validación de seguridad para TypeScript
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
          if (progress >= 0.1 && progress <= 0.25) {
            const headerProgress = gsap.utils.mapRange(0.1, 0.25, 0, 1, progress);
            const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
            const opacityValue = gsap.utils.mapRange(0, 1, 0, 1, headerProgress);
            gsap.set(headerTitle, { y: yValue, opacity: opacityValue });
          } else if (progress < 0.1) {
            gsap.set(headerTitle, { y: 40, opacity: 0 });
          } else if (progress > 0.25) {
            gsap.set(headerTitle, { y: 0, opacity: 1 });
          }

          // FASE 2: ANCHO
          if (progress <= 0.25) {
            const widthPercentage = gsap.utils.mapRange(0, 0.25, 75, 60, progress);
            gsap.set(cardContainer, { width: `${widthPercentage}%` });
          } else {
            gsap.set(cardContainer, { width: `60%` });
          }

          // FASE 3: GAP & BORDER RADIUS
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
          if (progress >= 0.7 && !isFlipAnimationCompleted) {
            gsap.to(".service-card", { rotationY: 180, duration: 0.8, ease: "power3.out", stagger: 0.1 });
            gsap.to([".service-card-0", ".service-card-2"], {
              y: 60, rotationZ: (i) => i === 0 ? -15 : 15, duration: 0.75, ease: "power3.out"
            });
            isFlipAnimationCompleted = true;
          } 
          else if (progress < 0.7 && isFlipAnimationCompleted) {
            gsap.to(".service-card", { rotationY: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 });
            gsap.to([".service-card-0", ".service-card-2"], {
              y: 0, rotationZ: 0, duration: 0.75, ease: "power3.out"
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
    className="relative w-full min-h-[140vh] bg-[#0a0a0c] text-white overflow-hidden flex flex-col items-center justify-start pt-64 pb-64 px-8"
    >
      
      {/* --- HEADER --- */}
      <div 
        ref={headerRef} 
        className="absolute top-[15%] left-1/2 -translate-x-1/2 z-10 text-center w-full px-4"
      >
        {/* DISEÑO: Tipografía con gradiente púrpura */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 translate-y-10">
          caracteristicas del <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Sistema</span>
        </h2>
      </div>

      {/* --- CONTAINER DE CARTAS --- */}
      <div 
        ref={cardContainerRef}
        className="card-container relative flex w-full md:w-[75%] h-[50vh] md:h-[60vh] perspective-[1000px] translate-y-10"
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
              {/* === CARA FRONTAL (IMAGEN) === */}
              <div 
                className="card-front absolute inset-0 w-full h-full overflow-hidden backface-hidden"
                style={{ backfaceVisibility: 'hidden', borderRadius: 'inherit' }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay oscuro con tinte violeta */}
                <div className="absolute inset-0 bg-neutral-950/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay" />
              </div>

              {/* === CARA TRASERA (CONTENIDO - DISEÑO GLASSMORPHISM) === */}
              <div 
                className="card-back absolute inset-0 w-full h-full overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-8 backface-hidden transition-all duration-300"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  transform: 'rotateY(180deg)',
                  borderRadius: 'inherit'
                }}
              >
                {/* Fondo Glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-xl border border-white/10 group-hover:border-violet-500/50 transition-colors"></div>

                {/* Contenido */}
                <div className="relative z-10 flex flex-col items-center">
                  <span className="absolute top-0 left-0 text-violet-300/40 text-sm font-mono">
                    ( {item.id} )
                  </span>
                  
                  {/* Icono con resplandor */}
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 shadow-[0_0_15px_rgba(167,139,250,0.2)] group-hover:shadow-[0_0_20px_rgba(167,139,250,0.4)] transition-shadow">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-sm md:text-base font-medium text-neutral-300 leading-relaxed max-w-xs">
                    {item.desc}
                  </p>

                  {/* Botón estilo "Intelligent AI" */}
                  <button className="mt-8 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-violet-500/30 text-violet-300 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] flex items-center gap-2 group/btn">
                     Explorar <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"/>
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