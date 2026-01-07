"use client";

import React from 'react';
import Image from 'next/image';
import StaggeredMenu from './StaggeredMenu'; 

// 1. Definimos los items AFUERA del componente para asegurar que existen
const menuLinks = [
  { label: 'Inicio', link: '/' },
  { label: 'Sobre Nosotros', link: '/about' },
  { label: 'Demo', link: '/#demo' },
  { label: 'Contáctanos', link: '/#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-neutral-50 group">
          <div className="relative group-hover:scale-110 transition-transform duration-300 bg-black rounded-xl overflow-hidden border border-neutral-800 p-0.5">
            <Image 
              src="/logo1.png"
              alt="Logo Z&DInteligent"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </div>
          <span>
            Inteligent <span className="text-violet-400">ai</span>
          </span>
        </a>

        {/* MENÚ - Pasamos los items explícitamente */}
        <div>
           <StaggeredMenu 
             items={menuLinks} 
             menuButtonColor="#e5e5e5"
             accentColor="#a78bfa"
           />
        </div>

      </div>
    </nav>
  );
}