"use client";

import React, { useRef } from 'react';
import { BookOpen, Camera, AlertTriangle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Datos de SilentHelp
const services = [
  {
    id: "01",
    tag: "APRENDIZAJE",
    title: "Módulos Educativos",
    desc: "Lecciones interactivas para dominar el abecedario y vocabulario cotidiano.",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    id: "02",
    tag: "TIEMPO REAL",
    title: "Traducción con IA",
    desc: "Uso de la cámara de tu dispositivo para interpretar tus señas al instante.",
    icon: <Camera className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "03",
    tag: "SEGURIDAD",
    title: "Modo de Emergencia",
    desc: "Traducción rápida y acceso a frases de auxilio predeterminadas para situaciones críticas.",
    icon: <AlertTriangle className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
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

    // --- LÓGICA DESKTOP (Computadoras - Pantalla Completa) ---
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

    // --- LÓGICA MOBILE (Celulares y ventanas angostas) ---
    mm.add("(max-width: 799px)", () => {
      // 1. Título visible
      gsap.set(headerTitle, { opacity: 1, y: 0 });
      // 2. Columna vertical con separación
      gsap.set(cardContainer, { width: "100%", gap: "24px", transform: "none" });
      // 3. Tarjetas inician en la cara blanca (0 grados)
      gsap.set(".service-card", { borderRadius: "24px", rotationY: 0 });

      // 4. NUEVA ANIMACIÓN: Cada tarjeta gira individualmente al hacer scroll
      const cards = gsap.utils.toArray(".service-card");
      cards.forEach((card: any) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 65%", // La animación ocurre cuando la tarjeta llega al 65% de la pantalla
            toggleActions: "play none none reverse" // Gira al bajar, regresa a blanco al subir
          },
          rotationY: 180, // Gira a la cara morada
          duration: 0.8,
          ease: "back.out(1.2)"
        });
      });
    });

  }, { scope: container });

  return (
    <section 
      id="beneficios"
      ref={container} 
      className="relative w-full min-h-screen md:h-screen bg-transparent text-[#1a202c] flex flex-col items-center justify-center px-6 md:px-8 z-20 py-24 md:py-0 overflow-hidden"
    >
      {/* --- HEADER --- */}
      <div 
        ref={headerRef} 
        className="relative md:absolute md:top-[15%] left-0 w-full z-20 text-center pointer-events-none mb-12 md:mb-0"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#1a202c] md:opacity-0 md:translate-y-10">
          Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">Pilares</span>
        </h2>
      </div>

      {/* --- CONTAINER DE CARTAS --- */}
      <div 
        ref={cardContainerRef}
        className="card-container relative flex flex-col md:flex-row w-full md:w-[75%] h-auto md:h-[60vh] gap-6 md:gap-0 perspective-[1000px]"
        style={{ perspective: "1000px" }}
      >
        {services.map((item, i) => {
          const initialRadius = i === 0 ? "24px 0 0 24px" : i === 2 ? "0 24px 24px 0" : "0px";
          
          return (
            <div
              key={item.id}
              className={`service-card service-card-${i} group relative flex-1 min-h-[350px] md:min-h-0 md:h-full cursor-pointer shadow-lg rounded-3xl md:rounded-none`}
              style={{ 
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center',
                borderRadius: 'inherit' 
              }}
            >
              {/* === CARA FRONTAL (BLANCA) - Ahora visible en celular === */}
              <div 
                className="card-front absolute inset-0 w-full h-full overflow-hidden backface-hidden bg-white border border-purple-100"
                style={{ backfaceVisibility: 'hidden', borderRadius: 'inherit' }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                   <div className="border-b border-purple-100 pb-4">
                      <span className="text-purple-600 text-xs font-bold font-mono mb-1 block tracking-widest">
                        // {item.tag}
                      </span>
                      <h3 className="text-3xl font-black text-[#1a202c] tracking-tight">{item.title}</h3>
                   </div>
                   <span className="absolute bottom-6 right-6 text-6xl font-black text-purple-600/5 opacity-50 select-none pointer-events-none">
                     {item.id}
                   </span>
                </div>
              </div>

              {/* === CARA TRASERA (MORADA) === */}
              <div 
                className="card-back absolute inset-0 w-full h-full overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-8 backface-hidden bg-gradient-to-br from-purple-800 to-fuchsia-900 border border-purple-500/50 rounded-3xl md:rounded-none"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  transform: 'rotateY(180deg)',
                  borderRadius: 'inherit'
                }}
              >
                <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-white blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                       {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <div className="relative py-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-fuchsia-400"></div>
                    <p className="text-sm text-purple-100 leading-relaxed max-w-[260px] font-light">
                        {item.desc}
                    </p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-fuchsia-400"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}