"use client";

import React from 'react';
import Image from 'next/image';
import StaggeredMenu from './StaggeredMenu'; 

// 1. Definimos los items (Igual que antes)
const menuLinks = [
  { label: 'Inicio', link: '/' },
  { label: 'Sobre Nosotros', link: '/about' },
  { label: 'Demo', link: '/#demo' },
  { label: 'Contáctanos', link: '/#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* --- 1. IZQUIERDA (ESPACIADOR) --- */}
        {/* Este div vacío equilibra el flexbox en desktop para que el logo no se mueva */}
        <div className="hidden md:flex flex-1">
          {/* Aquí podrías poner íconos de redes sociales si quisieras en el futuro */}
        </div>

        {/* --- 2. CENTRO: LOGO (Posicionado Absolutamente) --- */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <a href="/" className="flex items-center gap-3 group">
            
            {/* Contenedor de Imagen con Efecto Glow */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-black rounded-xl overflow-hidden border border-neutral-800 shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Image 
                src="/logo1.png"
                alt="Logo Z&D"
                width={40}
                height={40}
                className="object-contain p-1"
                priority
                />
            </div>

            {/* Texto del Logo (Oculto en móviles muy pequeños para no chocar) */}
            <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold tracking-tighter text-white leading-none group-hover:text-violet-200 transition-colors">
                Z&D<span className="hidden sm:inline">Intelligent ia</span>
                </span>
              
            </div>
            </a>
        </div>

        {/* --- 3. DERECHA: MENÚ --- */}
        <div className="flex-1 flex justify-end z-20">
           <StaggeredMenu 
             items={menuLinks} 
             menuButtonColor="#ffffff" // Blanco puro para mejor contraste
             accentColor="#8b5cf6"     // Violeta (Tailwind violet-500)
           />
        </div>

      </div>
    </nav>
  );
}