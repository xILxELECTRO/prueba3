"use client";

import React from 'react';
import Image from 'next/image';
import StaggeredMenu from './StaggeredMenu'; 

// Enlaces actualizados para SilentHelp
// Navbar.tsx
const menuLinks = [
  { label: 'Inicio', link: '/' },
  { label: 'Pilares', link: '/#beneficios' },
  { label: 'Sobre nosotros', link: '/about' },
  { label: 'Contáctanos', link: '/#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-purple-100 bg-[#faf8fc]/90 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* --- 1. IZQUIERDA (ESPACIADOR) --- */}
        <div className="hidden md:flex flex-1"></div>

        {/* --- 2. CENTRO: LOGO --- */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <a href="/" className="flex items-center gap-3 group">
            
            {/* Contenedor de Imagen adaptado a la paleta morada */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl overflow-hidden border border-purple-200 shadow-[0_0_15px_rgba(147,51,234,0.15)] group-hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Image 
                src="/SLHP.png"
                alt="Logo SilentHelp"
                width={40}
                height={40}
                className="object-contain p-1"
                priority
                />
            </div>

            {/* Texto del Logo SilentHelp */}
            <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-[#1a202c] leading-none group-hover:text-purple-600 transition-colors">
                Silent<span className="text-purple-600">Help</span>
                </span>
            </div>
            </a>
        </div>

        {/* --- 3. DERECHA: MENÚ --- */}
        <div className="flex-1 flex justify-end z-20">
           <StaggeredMenu 
             items={menuLinks} 
             menuButtonColor="#1a202c" // Texto oscuro para el botón
             accentColor="#9333ea"     // Morado SilentHelp
           />
        </div>

      </div>
    </nav>
  );
}